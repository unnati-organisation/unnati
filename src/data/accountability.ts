import { load } from "js-yaml";

export interface PolicyGroup {
  group: string;
  icon: string;
  items: { title: string; note: string; url: string }[];
}

export interface Certification {
  title: string;
  note: string;
  url: string;
  external?: boolean;
}

export interface AnnualReport {
  label: string;
  image: string;
  url: string;
}

const raw = import.meta.glob<string>("/content/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const data = (raw["/content/accountability.yml"] ? load(raw["/content/accountability.yml"]) : {}) as {
  policyGroups?: PolicyGroup[];
  certifications?: Certification[];
  adminFinancial?: { label: string; url: string }[];
  annualReports?: AnnualReport[];
};

export const policyGroups: PolicyGroup[] = data.policyGroups ?? [];

export const certifications: Certification[] = data.certifications ?? [];

export const adminFinancial: { label: string; url: string }[] = data.adminFinancial ?? [];

export const annualReports: AnnualReport[] = data.annualReports ?? [];