import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getArticles } from "../lib/journal";

export async function GET(context: APIContext) {
  const articles = await getArticles();

  return rss({
    title: "Le journal de Fabien Canu",
    description:
      "Les coulisses des expérimentations du lab : ce que je teste, ce que je construis, ce que j'abandonne.",
    site: context.site ?? "https://fabiencanu.fr",
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.description,
      pubDate: article.data.date,
      link: `/journal/${article.id}`,
      categories: article.data.tags,
    })),
    customData: "<language>fr-fr</language>",
  });
}
