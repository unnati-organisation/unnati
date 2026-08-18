import { load } from "js-yaml";

export interface BoardMember {
  name: string;
  role: string;
  address: string;
  image: string;
}

export interface Office {
  city: string;
  label: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

const raw = import.meta.glob<string>("/content/*.yml", {
  query: "?raw",
  import: "default",
  eager: true,
});

const data = (raw["/content/site.yml"] ? load(raw["/content/site.yml"]) : {}) as {
  board?: BoardMember[];
  offices?: Office[];
};

export const board: BoardMember[] = data.board ?? [];

export const offices: Office[] = data.offices ?? [];