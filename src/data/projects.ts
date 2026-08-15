import { anchors } from "./anchors";

export interface Project {
  slug: string;
  title: string;
  summary: string;
  image: string;
  tags: string[]; // anchor slugs — a project may belong to several anchors
  period: string;
  support: string;
  highlights: string[];
  details?: string[];
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: "marudhar-mein-jal-swavlamban",
    title: "Marudhar Mein Jal Swavlamban",
    summary:
      "Ensuring water security and combating desertification across 150 villages of the Thar desert, reviving nadis, orans and gauchars with women-led Jal Saheli groups.",
    image: "/images/project-marudhar.jpg",
    tags: ["social-determinants-of-disaster-risk-reduction", "social-inclusion-and-empowerment"],
    period: "2018–2023",
    support: "European Commission",
    highlights: [
      "150 villages, 30,000 households in Sindri & Patodi blocks",
      "Jal Saheli women's collectives and Climate Resilience Schools",
      "Revival of common property resources — nadis, orans, gauchars",
      "Small grants to 25 CSOs for community-led adaptation",
    ],
  },
  {
    slug: "improving-access-to-public-schemes",
    title: "Improving Access to Public Schemes in Backward Districts",
    summary:
      "Strengthening inclusive civic leadership and social accountability so public programmes reach the last mile in 60 gram panchayats of Barmer (Rajasthan) and Sabarkantha (Gujarat).",
    image: "/images/project-improving-access.jpg",
    tags: ["civic-leadership-governance-and-social-accountability", "social-inclusion-and-empowerment"],
    period: "2014–2018",
    support: "European Commission",
    highlights: [
      "Information Resource Centres in 4 blocks",
      "214 citizen leaders, 1,000+ accountability actions",
      "Pro-active disclosure in 28+ gram panchayats",
      "Quarterly bulletin 'Vichar' in Hindi & Gujarati",
    ],
  },
  {
    slug: "cluster-facilitation-team-cft",
    title: "Cluster Facilitation Team (CFT) for MGNREGA & NRLM",
    summary:
      "A facilitation and capacity-building project to synergise MGNREGA and NRLM — enhancing rural livelihoods through sustainable assets and community demand for accountability in Balesar block, Jodhpur.",
    image: "/images/project-cft.jpg",
    tags: ["civic-leadership-governance-and-social-accountability", "social-inclusion-and-empowerment"],
    period: "Jan 2015–",
    support: "RDD Rajasthan · RGAVP",
    highlights: [
      "26 gram panchayats and 111 revenue villages of Balesar block",
      "Person-days up from 3.77 lakh to 4.08 lakh in year one",
      "Labour-budget utilisation up from 35.7% to 71.1%",
      "On-time wage payments (within 15 days) up from 6.4% to 39.4%",
    ],
  },
  {
    slug: "socio-economic-baseline-coastal-marine-pas",
    title: "Socio-Economic Baseline for Coastal & Marine PAs",
    summary:
      "A participatory baseline assessment in 12 villages around Khijadiya Bird Sanctuary (Jamnagar) and Gosabara Wetland (Porbandar) under the GIZ-supported CMPA project of MoEFCC.",
    image: "/images/project-cmpa.jpg",
    tags: ["social-determinants-of-disaster-risk-reduction"],
    period: "Oct 2015 – Apr 2016",
    support: "GIZ · MoEFCC",
    highlights: [
      "Communities' interdependence on coastal ecosystems and livelihoods mapped",
      "Participatory methodology engaging communities and stakeholders",
      "Inputs for conservation and sustainable management of coastal & marine PAs",
    ],
  },
  {
    slug: "pri-capacity-building-childrens-rights",
    title: "PRI Capacity Building on Children's Rights",
    summary:
      "With UNICEF support, developing training modules and materials to build the capacity of Panchayati Raj Institutions on the rights of children and effective implementation of programmes for them.",
    image: "/images/project-pri.jpg",
    tags: ["civic-leadership-governance-and-social-accountability"],
    period: "2015–16",
    support: "UNICEF, Gujarat",
    highlights: [
      "Seven training modules and materials for PRIs",
      "Rights-based framework, social justice laws and child-focused schemes",
      "District-level trainer capacity developed across Gujarat",
    ],
  },
];

export const projectsForAnchor = (slug: string): Project[] =>
  projects.filter((p) => p.tags.includes(slug));

export const otherProjectsForAnchor = (slug: string): Project[] =>
  projects.filter((p) => !p.tags.includes(slug) && p.tags.length > 0).slice(0, 1);

export const anchorName = (slug: string): string =>
  anchors.find((a) => a.slug === slug)?.nav ?? "";