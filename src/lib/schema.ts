import type { Project } from "../data/projects";

const SITE = "https://fabiencanu.fr";

/** Identité Fabien Canu. À injecter sur la home et le lab (pas sur chaque page). */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#fabien-canu`,
  name: "Fabien Canu",
  url: SITE,
  jobTitle: "Architecte produit & IA",
  description:
    "Architecte produit & IA basé en Bretagne. 25 ans d'expérience produit : conseil et architecture logicielle, développement web et mobile, formation certifiée Qualiopi.",
  knowsAbout: [
    "Intelligence artificielle générative",
    "LLM",
    "RAG et embeddings",
    "Agents IA et MCP",
    "Architecture logicielle",
    "Développement web et mobile",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Koality",
    url: "https://koality.fr",
  },
  sameAs: [
    "https://www.linkedin.com/in/fabien-canu/",
    "https://github.com/cladjidane",
    "https://koality.fr",
  ],
};

/** Koality Academy, organisme de formation certifié Qualiopi. */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Koality Academy",
  url: "https://koality.fr",
  description:
    "Organisme de formation certifié Qualiopi. Formations aux technologies web et aux usages de l'IA, éligibles aux financements OPCO.",
  founder: { "@id": `${SITE}/#fabien-canu` },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Certification Qualiopi",
  },
};

/** CreativeWork pour une fiche projet du lab. */
export function projectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    url: `${SITE}/${project.slug}`,
    description: project.descriptionFr,
    ...(project.thumbnail && { image: `${SITE}${project.thumbnail}` }),
    keywords: [...project.tags, ...project.techStack].join(", "),
    creator: { "@id": `${SITE}/#fabien-canu` },
    isPartOf: {
      "@type": "CollectionPage",
      name: "Le lab IA de Fabien Canu",
      url: `${SITE}/lab`,
    },
  };
}

/** Fil d'ariane pour une fiche projet. */
export function projectBreadcrumb(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
      { "@type": "ListItem", position: 2, name: "Le lab", item: `${SITE}/lab` },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: `${SITE}/${project.slug}`,
      },
    ],
  };
}
