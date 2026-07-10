import type { APIRoute } from "astro";
import { projects } from "../data/projects";

const SITE = "https://fabiencanu.fr";

// Nettoie une description multi-phrases en une ligne courte et citable.
function oneLine(text: string): string {
  const first = text.split(/(?<=[.!?])\s/)[0].trim();
  return first.replace(/\s+/g, " ");
}

export const GET: APIRoute = () => {
  const tier1 = projects.filter((p) => p.tier === 1);
  const tier2 = projects.filter((p) => p.tier === 2);

  const line = (p: (typeof projects)[number]) =>
    `- [${p.name}](${SITE}/${p.slug}): ${oneLine(p.descriptionFr)}`;

  const content = `# Fabien Canu

> Architecte produit & IA basé en Bretagne. 25 ans d'expérience produit. Trois activités : conseil et architecture logicielle (avec IA générative quand elle apporte de la valeur), développement d'applications web et mobiles, et formation certifiée Qualiopi. Cofondateur de Koality.

## Pages principales

- [Accueil](${SITE}/): Présentation de Fabien Canu, ses trois activités (conseil et architecture, développement et design, formation et transmission) et ses réalisations en production.
- [Le lab IA](${SITE}/lab): Terrain d'essai. Une vingtaine de produits IA sortis en 18 mois, du prototype à l'outil en production.

## Projets phares (lab)

${tier1.map(line).join("\n")}

## Autres projets (lab)

${tier2.map(line).join("\n")}

## Domaines d'expertise

- IA générative : LLM, RAG et embeddings, agents et MCP, SDK custom, orchestration multi-agents, voix et vision.
- Plateformes : web, mobile, SaaS, API et temps réel, outils métier.
- Stack : React et React Native, Astro, Node, TypeScript, PostgreSQL et PostGIS, MapLibre, Whisper, TTS.

## Formation

- Formations dispensées via Koality Academy, organisme certifié Qualiopi, éligibles aux financements OPCO.

## Optional

- [Mentions légales](${SITE}/mentions-legales)
- [Confidentialité](${SITE}/confidentialite)
- [Cookies](${SITE}/cookies)
- Contact : fabien@koality.fr
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
