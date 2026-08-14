export interface Anchor {
  slug: string;
  nav: string;
  title: string;
  tagline: string;
  intro: string;
  image: string;
  heroImage: string;
}

export const anchors: Anchor[] = [
  {
    slug: "social-inclusion-and-empowerment",
    nav: "Social Inclusion & Empowerment",
    title: "Social Inclusion & Empowerment",
    tagline: "Rights of the marginalised",
    intro:
      "Invoking social-justice principles so dalits, women and persons with disabilities participate in mainstream development.",
    image: "/images/anchor-card-inclusion.jpg",
    heroImage: "/images/anchor-hero-inclusion.jpg",
  },
  {
    slug: "civic-leadership-governance-and-social-accountability",
    nav: "Civic Leadership, Governance & Social Accountability",
    title: "Civic Leadership, Governance & Social Accountability",
    tagline: "Citizens holding institutions accountable",
    intro:
      "Creating citizen leaders who question the effectiveness of developmental programmes and demand accountable governance.",
    image: "/images/anchor-card-sa.jpg",
    heroImage: "/images/anchor-hero-sa.jpg",
  },
  {
    slug: "social-determinants-of-disaster-risk-reduction",
    nav: "Social Determinants of Disaster Risk Reduction",
    title: "Social Determinants of Disaster Risk Reduction",
    tagline: "A culture of safety",
    intro:
      "Community-based practices and learning for disaster risk reduction, focused on the desert districts of Rajasthan and Kutch.",
    image: "/images/anchor-card-drr.jpg",
    heroImage: "/images/anchor-hero-drr.jpg",
  },
];

export const anchorBySlug = (slug: string): Anchor | undefined =>
  anchors.find((a) => a.slug === slug);