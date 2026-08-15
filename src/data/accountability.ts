export interface PolicyGroup {
  group: string;
  icon: string;
  items: { title: string; note: string; url: string }[];
}

export const policyGroups: PolicyGroup[] = [
  {
    group: "Governance & Organisational Design",
    icon: "◎",
    items: [
      { title: "Organisational Design", note: "Structure, roles and governance framework", url: "https://www.unnati.org/pdfs/transparency/organisational-design-UNNATI.pdf" },
      { title: "PCC Formation", note: "Programme Coordination Committee formation", url: "https://www.unnati.org/pdfs/transparency/pcc-formation.pdf" },
      { title: "Staff Service Rules & Gender Policy", note: "2021 · employment, conduct, gender equity", url: "https://www.unnati.org/pdfs/transparency/UNNATI-staff-service-rule-2021.pdf" },
    ],
  },
  {
    group: "Finance, Accounting & Assets",
    icon: "◈",
    items: [
      { title: "Financial & Accounting Manual", note: "Accounting standards and controls", url: "https://www.unnati.org/pdfs/transparency/account-manual-UNNATI.pdf" },
      { title: "Asset Management Policy", note: "Procurement, custody and disposal of assets", url: "https://www.unnati.org/pdfs/transparency/asset-management-policy.pdf" },
      { title: "Anti-Corruption & Bribery Policy", note: "Zero tolerance across operations", url: "https://www.unnati.org/pdfs/transparency/anti-corruption-and-bribary-policy.pdf" },
    ],
  },
  {
    group: "Ethics, Protection & Safeguarding",
    icon: "✚",
    items: [
      { title: "PSEA Policy", note: "Prevention of sexual harassment, exploitation & abuse", url: "https://www.unnati.org/pdfs/transparency/policy-on-PSEA_UNNATI-2021.pdf" },
      { title: "PSEA Committee", note: "Internal oversight body", url: "https://www.unnati.org/pdfs/transparency/PSEA-committee.pdf" },
      { title: "Child Protection Policy", note: "2021 · safeguarding children", url: "https://www.unnati.org/pdfs/transparency/child-protection-policy-UNNATI%202021.pdf" },
      { title: "Whistleblower Policy", note: "Confidential reporting channels", url: "https://www.unnati.org/pdfs/transparency/whistleblower-policy.pdf" },
      { title: "Conflict of Interest Policy", note: "Disclosure and management", url: "https://www.unnati.org/pdfs/transparency/conflict_of_interest_policy.pdf" },
    ],
  },
  {
    group: "Data, Branding & IT",
    icon: "⬡",
    items: [
      { title: "IT & Data Protection Policy", note: "Data security and privacy", url: "https://www.unnati.org/pdfs/transparency/it-and-data-protection-policy.pdf" },
      { title: "Branding Policy", note: "Consistent use of the UNNATI identity", url: "https://www.unnati.org/pdfs/transparency/branding-policy.pdf" },
    ],
  },
];

export interface Certification {
  title: string;
  note: string;
  url: string;
  external?: boolean;
}

export const certifications: Certification[] = [
  { title: "GuideStar India Gold", note: "Transparency & governance certification", url: "https://guidestarindia.org/Summary.aspx?CCReg=641", external: true },
  { title: "Society Registration", note: "Registered under the Societies Registration Act", url: "https://www.unnati.org/pdfs/Society_Registration_Certificate.pdf" },
  { title: "FCRA", note: "Foreign Contribution Regulation Act registration", url: "https://www.unnati.org/pdfs/FCRA_Certificate.pdf" },
  { title: "12A", note: "Tax exemption registration", url: "https://www.unnati.org/pdfs/12A_certificate.pdf" },
  { title: "80G", note: "Deduction on donations", url: "https://www.unnati.org/pdfs/80G_certificate.pdf" },
];

export const adminFinancial: { label: string; url: string }[] = [
  { label: "2020–21", url: "https://www.unnati.org/pdfs/Admin_and_Financial_Information_2020-21.pdf" },
  { label: "2021–22", url: "https://www.unnati.org/pdfs/Admin_and_Financial_Information_2021-22.pdf" },
  { label: "2022–23", url: "https://www.unnati.org/pdfs/Admin_and_Financial_Information_2022-23.pdf" },
  { label: "2023–24", url: "https://www.unnati.org/pdfs/Admin_and_Financial_Information_2023-24.pdf" },
  { label: "2024–25", url: "https://www.unnati.org/pdfs/Admin_and_Financial_Information_2024-25.pdf" },
];

export interface AnnualReport {
  label: string;
  image: string;
  url: string;
}

export const annualReports: AnnualReport[] = [
  { label: "2024–25", image: "/sub-images/ar-2025.jpg", url: "pdfs/annual-reports/2024-25.pdf" },
  { label: "2023–24", image: "/sub-images/ar-2024.jpg", url: "pdfs/annual-reports/2023-24.pdf" },
  { label: "2022–23", image: "/sub-images/ar-2023.jpg", url: "pdfs/annual-reports/2022-23.pdf" },
  { label: "2021–22", image: "/sub-images/ar-2022.jpg", url: "pdfs/annual-reports/2021-22.pdf" },
  { label: "2020–21", image: "/sub-images/ar-2021.jpg", url: "pdfs/annual-reports/2020-21.pdf" },
  { label: "2019–20", image: "/sub-images/ar-2020.jpg", url: "pdfs/annual-reports/2019-20.pdf" },
  { label: "2018–19", image: "/sub-images/ar-2019.jpg", url: "pdfs/annual-reports/2018-19.pdf" },
  { label: "2017–18", image: "/sub-images/ar-2018.jpg", url: "pdfs/annual-reports/2017-18.pdf" },
  { label: "2016–17", image: "/sub-images/ar-2017.jpg", url: "pdfs/annual-reports/2016-17.pdf" },
  { label: "2015–16", image: "/sub-images/ar-2016.jpg", url: "pdfs/annual-reports/2015-16.pdf" },
  { label: "2014–15", image: "/sub-images/ar-2015.jpg", url: "pdfs/annual-reports/2014-15.pdf" },
  { label: "2013–14", image: "/sub-images/ar-2014.jpg", url: "pdfs/annual-reports/2013-14.pdf" },
  { label: "2012–13", image: "/sub-images/ar-2013.jpg", url: "pdfs/annual-reports/2012-13.pdf" },
  { label: "2011–12", image: "/sub-images/ar-2012.jpg", url: "pdfs/annual-reports/2011-12.pdf" },
  { label: "2010–11", image: "/sub-images/ar-2011.jpg", url: "pdfs/annual-reports/2010-11.pdf" },
  { label: "2009–10", image: "/sub-images/ar-2010.jpg", url: "pdfs/annual-reports/2009-10.pdf" },
  { label: "2008–09", image: "/sub-images/ar-2009.jpg", url: "pdfs/annual-reports/2008-09.pdf" },
  { label: "2007–08", image: "/sub-images/ar-2008.jpg", url: "pdfs/annual-reports/2007-08.pdf" },
  { label: "2006–07", image: "/sub-images/ar-2007.jpg", url: "pdfs/annual-reports/2006-07.pdf" },
  { label: "2005–06", image: "/sub-images/ar-2006.jpg", url: "pdfs/annual-reports/2005-06.pdf" },
  { label: "2004–05", image: "/sub-images/ar-2005.jpg", url: "pdfs/annual-reports/2004-05.pdf" },
  { label: "2003–04", image: "/sub-images/ar-2004.jpg", url: "pdfs/annual-reports/2003-04.pdf" },
  { label: "2002–03", image: "/sub-images/ar-2003.jpg", url: "pdfs/annual-reports/2002-03.pdf" },
];