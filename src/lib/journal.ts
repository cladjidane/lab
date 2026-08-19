import { getCollection, type CollectionEntry } from "astro:content";

export type Article = CollectionEntry<"journal">;

const SITE = "https://fabiencanu.fr";

/**
 * Les articles publiés, du plus récent au plus ancien.
 * Les brouillons (draft: true) sortent de la liste au build de production,
 * ils restent visibles avec npm run dev.
 */
export async function getArticles(): Promise<Article[]> {
  const articles = await getCollection("journal", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return articles.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

/** Le dernier article publié, ou null si le journal est vide. */
export async function getLatestArticle(): Promise<Article | null> {
  const articles = await getArticles();
  return articles[0] ?? null;
}

/** Date en toutes lettres : "12 mars 2026". */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/** Date pour l'attribut datetime : "2026-03-12". */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Temps de lecture estimé, base 200 mots par minute. */
export function readingTime(body: string | undefined): number {
  const words = (body ?? "").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** JSON-LD d'un article. */
export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.data.title,
    description: article.data.description,
    url: `${SITE}/journal/${article.id}`,
    datePublished: isoDate(article.data.date),
    dateModified: isoDate(article.data.date),
    inLanguage: "fr-FR",
    ...(article.data.cover && { image: `${SITE}${article.data.cover}` }),
    ...(article.data.tags.length > 0 && {
      keywords: article.data.tags.join(", "),
    }),
    author: { "@id": `${SITE}/#fabien-canu` },
    publisher: { "@id": `${SITE}/#fabien-canu` },
    isPartOf: {
      "@type": "Blog",
      name: "Le journal de Fabien Canu",
      url: `${SITE}/journal`,
    },
  };
}

/** Fil d'ariane d'un article. */
export function articleBreadcrumb(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
      { "@type": "ListItem", position: 2, name: "Journal", item: `${SITE}/journal` },
      {
        "@type": "ListItem",
        position: 3,
        name: article.data.title,
        item: `${SITE}/journal/${article.id}`,
      },
    ],
  };
}
