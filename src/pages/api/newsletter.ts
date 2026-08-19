import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

/** Route exécutée à la demande : le reste du site reste généré à l'avance. */
export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MESSAGE_OK = "C'est noté, merci. À bientôt dans votre boîte mail.";
const MESSAGE_KO =
  "L'inscription n'a pas pu être enregistrée. Écrivez-moi à fabien@koality.fr, je vous ajoute à la main.";

/**
 * Limite de fréquence par adresse IP. La mémoire d'une fonction serverless est
 * remise à zéro à chaque démarrage à froid : ça freine les envois en rafale,
 * ça ne remplace pas un vrai garde-fou côté serveur.
 */
const historique = new Map<string, number[]>();
const FENETRE_MS = 10 * 60 * 1000;
const MAX_PAR_FENETRE = 3;

function tropFrequent(ip: string): boolean {
  const maintenant = Date.now();
  const passages = (historique.get(ip) ?? []).filter(
    (t) => maintenant - t < FENETRE_MS,
  );
  passages.push(maintenant);
  historique.set(ip, passages);
  return passages.length > MAX_PAR_FENETRE;
}

function reponse(status: number, message: string): Response {
  return new Response(JSON.stringify({ message }), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function config() {
  const env = process.env;
  return {
    host: env.SMTP_HOST,
    port: Number(env.SMTP_PORT ?? 587),
    user: env.SMTP_USER,
    pass: env.SMTP_PASS,
    from: env.NEWSLETTER_FROM ?? env.SMTP_USER,
    to: env.NEWSLETTER_TO ?? "fabien@koality.fr",
  };
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  let corps: { email?: string; website?: string; page?: string };
  try {
    corps = await request.json();
  } catch {
    return reponse(400, MESSAGE_KO);
  }

  // Champ piège rempli : c'est un robot. On répond comme si tout allait bien.
  if (corps.website) return reponse(200, MESSAGE_OK);

  const email = (corps.email ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return reponse(400, "Cette adresse ne semble pas valide.");
  }

  const ip = clientAddress ?? "inconnue";
  if (tropFrequent(ip)) {
    return reponse(429, "Trop de tentatives d'affilée. Réessayez dans quelques minutes.");
  }

  const { host, port, user, pass, from, to } = config();

  if (!host || !user || !pass) {
    if (import.meta.env.DEV) {
      console.log(`[newsletter] inscription (envoi désactivé en local) : ${email}`);
      return reponse(200, MESSAGE_OK);
    }
    console.error("[newsletter] SMTP non configuré : variables SMTP_HOST, SMTP_USER, SMTP_PASS manquantes.");
    return reponse(500, MESSAGE_KO);
  }

  const quand = new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  }).format(new Date());
  const page = corps.page && corps.page.startsWith("/") ? corps.page : "inconnue";

  try {
    const transport = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transport.sendMail({
      // Pas de nom d'expéditeur devant l'adresse : relayé depuis Vercel, OVH
      // accepte le message puis le jette en silence quand le From porte un nom
      // différent du compte authentifié. L'objet porte la marque à la place.
      from,
      to,
      replyTo: email,
      subject: `Newsletter fabiencanu.fr : ${email}`,
      text: [
        "Nouvelle inscription à la newsletter.",
        "",
        `Adresse : ${email}`,
        `Date : ${quand}`,
        `Page d'origine : ${page}`,
      ].join("\n"),
    });
  } catch (erreur) {
    console.error("[newsletter] envoi impossible :", erreur);
    return reponse(500, MESSAGE_KO);
  }

  return reponse(200, MESSAGE_OK);
};

/** Les autres méthodes n'ont rien à faire ici. */
export const ALL: APIRoute = () => new Response(null, { status: 405 });
