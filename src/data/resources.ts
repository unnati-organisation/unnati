import { parseYamlRecords } from "../lib/yaml";

export type PubTheme = "sie" | "clgasa" | "drr" | "water" | "other";
export type PubFormat = "book" | "leaflet" | "report" | "newsletter" | "video";
// Resources surface as only two media formats.
export type PubMedia = "publication" | "audio";

export interface Publication {
  id: string;
  title: string;
  description: string;
  format: PubFormat;
  themes: PubTheme[];
  languages: string[];
  badge: string;
  year?: number;
  image?: string;
  url?: string;
  order?: number;
}

export const pubLinks: Record<string, string> = {
  // ---- Books & Manuals · Dalit Rights ----
  "dalit-praveshika": "https://www.unnati.org/pdfs/books/dalit-manavadhikar-h.pdf",
  "caste-discrimination": "https://www.unnati.org/pdfs/books/discrimination-study-eng.pdf",
  "dalit-land": "https://www.unnati.org/pdfs/books/dalit-and-land-eng.pdf",
  // ---- Books & Manuals · Women & Gender ----
  "women-history-1-hi": "https://www.unnati.org/pdfs/books/wh-1-Hindi.pdf",
  "women-history-1-guj": "https://www.unnati.org/pdfs/books/wh-1-Guj.pdf",
  "women-history-2-hi": "https://www.unnati.org/pdfs/books/wh-2-Hindi.pdf",
  "women-history-2-guj": "https://www.unnati.org/pdfs/books/wh-2-Guj.pdf",
  "women-history-3-hi": "https://www.unnati.org/pdfs/books/wh-3h.pdf",
  "women-history-3-guj": "https://www.unnati.org/pdfs/books/wh-3g.pdf",
  "women-history-4-hi": "https://www.unnati.org/pdfs/books/wh-4hindi-lr.pdf",
  "women-history-4-guj": "https://www.unnati.org/pdfs/books/wh-4gujarati-lr.pdf",
  "gender-awareness": "https://www.unnati.org/pdfs/manuals/GRPManual.pdf",
  "health-flashcard": "https://www.unnati.org/pdfs/books/flashcard-on-health-issue.pdf",
  // ---- Books & Manuals · Disability ----
  "pwd-rights": "https://www.unnati.org/pdfs/books/PWD-guj-p1-28.pdf",
  "pwd-rights-eng-1": "https://www.unnati.org/pdfs/books/pwd-eng-p1-12.pdf",
  "pwd-rights-eng-2": "https://www.unnati.org/pdfs/books/pwd-eng-p13-28.pdf",
  "understanding-disability-eng": "https://www.unnati.org/pdfs/books/research-eng.pdf",
  "understanding-disability-guj": "https://www.unnati.org/pdfs/books/research-gujarati.pdf",
  "barrier-free-design-manual": "https://www.unnati.org/pdfs/manuals/barrier-free-built-environment.pdf",
  "dir-sabarkantha-eng": "https://www.unnati.org/pdfs/books/Sabarkantha_directory_Eng.pdf",
  "dir-sabarkantha-guj": "https://www.unnati.org/pdfs/books/Sabarkantha_directory_Guj.pdf",
  "dir-vadodara-eng": "https://www.unnati.org/pdfs/books/Vadodara_directory_Eng.pdf",
  "dir-vadodara-guj": "https://www.unnati.org/pdfs/books/Vadodara_directory_Guj.pdf",
  "dir-ahmedabad-eng": "https://www.unnati.org/pdfs/books/Ahmedabad_directory_Eng.pdf",
  "dir-ahmedabad-guj": "https://www.unnati.org/pdfs/books/Ahmedabad_directory_guj.pdf",
  "civil-society-disability": "https://www.unnati.org/pdfs/books/Mainstreaming%20Disabilitydec2008_LR.pdf",
  "mainstreaming-disability": "https://www.unnati.org/pdfs/books/mainstreaming_disability_book_lr.pdf",
  "uncrpd": "https://www.unnati.org/pdfs/books/uncrpd-eng.pdf",
  "uncrpd-guj": "https://www.unnati.org/pdfs/books/uncrpd-guj.pdf",
  // ---- Books & Manuals · Governance & Social Accountability ----
  "nfsa-calendar": "https://www.unnati.org/pdfs/books/nfsa_calander.pdf",
  "samiti-booklet-tribal": "https://www.unnati.org/pdfs/books/samiti_booklet_tribal.pdf",
  "pri-district": "https://www.unnati.org/pdfs/books/district_panchayats_english.pdf",
  "pri-taluka": "https://www.unnati.org/pdfs/books/taluka_panchayat_english.pdf",
  "pri-gram-panchayat": "https://www.unnati.org/pdfs/books/gram_panchayats_english.pdf",
  "public-schemes-gujarat": "https://www.unnati.org/pdfs/books/booklet_on_public_schemes_gujarat.pdf",
  "public-schemes-rajasthan": "https://www.unnati.org/pdfs/books/informatin_pack_hindi_final_web.pdf",
  "making-space": "https://www.unnati.org/pdfs/books/Making_space_Woemen_participation.pdf",
  "building-links": "https://www.unnati.org/pdfs/books/CivilEngagementUrbanDev.pdf",
  "housing-urban-poor": "https://www.unnati.org/pdfs/books/HousingfortheUrbanPoor-occasionalpaper.pdf",
  "nagrik-agewan": "https://www.unnati.org/pdfs/books/Nagrik-Agewan.pdf",
  // ---- Books & Manuals · Water & Commons ----
  "hamara-jal": "https://www.unnati.org/pdfs/books/Hamara_Jal_Hamara_Prabandhan.pdf",
  "jal-prabandhan-shodh-yatra": "https://www.unnati.org/pdfs/books/Shymlat_Yatra_Book.pdf",
  "raag-maruj": "https://www.unnati.org/pdfs/books/Raag_Maruj_Final.pdf",
  "thaar-paristhitiki": "https://www.unnati.org/pdfs/books/Thaar_Marusthal_Ki_Paristhitiki.pdf",
  // ---- Books & Manuals · Disaster Risk Reduction ----
  "school-safety-module": "https://www.unnati.org/pdfs/books/Unnati_School_Safety_Website_31.7.24.pdf",
  "hazardous-chemicals": "https://www.unnati.org/pdfs/books/Chem_booklet_LR_WEB.pdf",
  "makaan-bandhkam": "https://www.unnati.org/pdfs/books/makaanna-bandhkam-surakshit-paddhati-parimit-chantar.pdf",
  "school-safety-user-guide": "https://www.unnati.org/pdfs/books/school-saftey-user-guide.pdf",
  "housing-safety-user-guide": "https://www.unnati.org/pdfs/books/housing-safety-user-guide.pdf",
  "housing-vulnerability-assessment": "https://www.unnati.org/pdfs/books/participatory-assessment-vulnerability.pdf",
  "community-drought-drr": "https://www.unnati.org/pdfs/books/community-managed-drought-risk-reduction.pdf",
  "mud-ferro-cement": "https://www.unnati.org/pdfs/books/Mud-and-Ferro-Cement-Booklet.pdf",
  "understanding-vulnerability": "https://www.unnati.org/pdfs/books/understandingvulnerabiityforDRR_2008_LR-unnati.pdf",
  "drr-compilation": "https://www.unnati.org/pdfs/books/drr_compilation_literature_Eng.pdf",
  "owner-driven-housing": "https://www.unnati.org/pdfs/books/OwnerDrivenHousingProcess.pdf",
  "damage-assessment": "https://www.unnati.org/pdfs/books/damage_assessment_toolkit.pdf",
  // ---- Books & Manuals · Other ----
  "sherima-shikshan": "https://www.unnati.org/pdfs/books/sherima-shikshan_web.pdf",
  "peoples-voice": "https://www.unnati.org/pdfs/books/peoples_voice.pdf",
  // ---- Leaflets (& Posters) ----
  "package-of-practices-agri": "https://www.unnati.org/pdfs/package_of_practices_agriculture.pdf",
  "birth-death-leaflet": "https://www.unnati.org/pdfs/birth-death-certificate_11apr2025.pdf",
  "nfsa-leaflet": "https://www.unnati.org/pdfs/NFSA_Pamphlet_11Apr2025.pdf",
  "mgnrega-leaflet": "https://www.unnati.org/pdfs/NREGA-Pamphlet-11apr2025.pdf",
  // ---- Reports & Studies ----
  "living-on-the-edge": "https://www.unnati.org/pdfs/manuals/living_on_the_edge.pdf",
  "sajhedari": "https://www.unnati.org/pdfs/events/sajhedari-book-web.pdf",
  "thematic-interventions": "https://www.unnati.org/pdfs/events/thematic-interventions-1990-2020.pdf",
  "public-services-last-mile": "https://www.unnati.org/pdfs/reports_making_public_services_reach_lsm_24-7-19.pdf",
  "covid-frontline": "https://www.unnati.org/pdfs/covid-response/Study-on-response-frontline-workers-and-Gram-Panchayats-to-COVID-19-in-rural-areas-Gujarat.pdf",
  // ---- Newsletters & Bulletins ----
  "vichar": "https://www.unnati.org/vichar.html",
  "evichar": "https://www.unnati.org/pdfs/Dekh_Parakh.pdf",
  // ---- Audio-Visuals ----
  "av-nagrik-sahyog": "https://www.unnati.org/audio-video/nagrik-sahyog-kendra.mp4",
  "av-social-audit": "https://www.unnati.org/audio-video/social-audit.mp4",
  "av-hope-in-the-dunes": "https://youtu.be/WRcrAdum7mQ",
  "av-hamara-jal-film": "https://www.youtube.com/watch?v=IhhZXUoqDHE",
  "av-school-ecology": "https://www.youtube.com/watch?v=jmPJhCUunFM",
  "av-shodh-yatra": "https://youtu.be/F8z0NoxzG0w",
  "av-env-education": "https://youtu.be/wqkz-BjYu-4",
  "av-role-voluntary": "https://youtu.be/Nqs-RVs_ag0",
  "av-bachpan": "https://youtu.be/gYDdYZZCev8",
  "av-gram-sabha": "https://youtu.be/iMKM0vq1W8s",
  "av-gam-tamaru": "https://youtu.be/5XBK7PalUP4",
  "av-have-nathi-koi-rank": "https://youtu.be/ua6fxpXzxW4",
  "av-male-nani": "https://youtu.be/rRZzh4xjqw0",
  "av-nutan-prabhat": "https://youtu.be/kSd4ix5h37g",
  "av-panchayat-meeting": "https://youtu.be/My9TB2regzY",
  "av-rojgar-amaro-adhikar": "https://youtu.be/84MIz7iziT0",
  "av-sachu-swaraj": "https://youtu.be/M0hOHFsQcwY",
  "av-freedom-of-being-en": "https://youtu.be/EfbVEMYW7VE",
  "av-freedom-of-being-guj": "https://youtu.be/ta3FunpyrEo",
  "av-employment-pwd": "https://youtu.be/ztZ-_xvsqBE",
  "av-citizens-speak": "https://youtu.be/mItky4eBa40",
  "av-citizens-speak-guj": "https://youtu.be/DNtekJMZ9wE",
  "av-citizens-speak-hi": "https://youtu.be/Scq6XBjOrxg",
  "av-community-monitoring": "https://youtu.be/E3_rRrrv2ag",
  "av-samuday-adharit-nigrani": "https://youtu.be/UTIptb3l1vQ",
  "av-gam-nathi-koi-panch": "https://youtu.be/GOijrJegtRc",
  "av-gaon-nahi-panch": "https://youtu.be/yHZ1rSTXtXI",
  "av-raj-karishu": "https://youtu.be/yq4k46XJVJI",
  "av-raj-karenge": "https://youtu.be/A9vi-edrUds",
  "av-solid-waste": "https://youtu.be/Z2WAoZcRSuE",
  "av-solid-waste-awareness": "https://youtu.be/v3e35x40Gi0",
  "av-hamari-gram-sabha": "https://youtu.be/4KbS3LGKNh8",
  "av-panchayat-baithak": "https://youtu.be/sq8vL4JGzU4",
  "av-nagrik-netrutva": "https://youtu.be/mdX-5JrqvDU",
  "av-social-audit-film": "https://youtu.be/b6a3aSXiN5I",
  "av-inclusive-education": "https://youtu.be/2L1LiL9Qz-g",
  "av-have-nathi-koi-abla": "https://youtu.be/EmiSaP3rahs",
  "av-apna-ghadvaiya": "https://youtu.be/yb6lHt-TXmg",
  "av-gramsabha": "https://youtu.be/iMKM0vq1W8s",
  "av-kaydo-ane-vyavastha": "https://youtu.be/5xpdvmusn-c",
};

export const mediaOf = (f: PubFormat): PubMedia => (f === "video" ? "audio" : "publication");

export const mediaLabels: Record<PubMedia, string> = {
  publication: "Publications",
  audio: "Audio-Visual",
};

export interface ThemeMeta {
  label: string;
  kicker: string;
}

export const themeOrder: PubTheme[] = ["sie", "clgasa", "drr", "water", "other"];

export const themeMeta: Record<PubTheme, ThemeMeta> = {
  sie: {
    label: "Social Inclusion & Empowerment",
    kicker: "Rights of the marginalised",
  },
  clgasa: {
    label: "Governance & Social Accountability",
    kicker: "Citizens holding institutions accountable",
  },
  drr: {
    label: "Disaster Risk Reduction",
    kicker: "A culture of safety",
  },
  water: {
    label: "Water & Commons",
    kicker: "Community-managed commons",
  },
  other: {
    label: "Cross-cutting",
    kicker: "Reflections and field learning",
  },
};

export const formatLabels: Record<PubFormat, string> = {
  book: "Books & Manuals",
  leaflet: "Leaflets & Posters",
  report: "Reports & Studies",
  newsletter: "Newsletters",
  video: "Audio-Visuals",
};

const raw = import.meta.glob<string>("/content/resources/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

export const publications: Publication[] = parseYamlRecords<Publication>(raw).sort(
  (a, b) => (a.order ?? 0) - (b.order ?? 0)
);
