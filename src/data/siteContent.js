const imageModules = import.meta.glob("./assets/*.jpeg", {
  eager: true,
  import: "default",
});
import ziadImage from "./assets/ziad.png";

const galleryImages = Object.entries(imageModules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  )
  .map(([, src]) => src);

// Edit certificate names manually here (same order as images after sorting).
const certificateNames = [
  "Al-Azhar University",
  "Banque Misr- Summer Training",
  "Banque Misr- Summer Training",
  "Digital Marketing",
  "Graduation Certificate",
  "Microsoft Office ",
  "Cambridge University",
  "Cambridge University",
  "Cambridge University",
  "Cambridge University",
  "Cambridge University",
  "Cambridge University",
  "Cambridge University",
  "Edlal Certificate",
  "Strategic Planning",
  "ICDL",
  "Excel track (Accounting Excel)",
];

const certificateSlides = galleryImages.map((imageUrl, index) => ({
  id: index + 1,
  badge: "Certificate",
  title: certificateNames[index],
  issuer: "Ziad Mohamed",
  description: "Verified professional credential.",
  year: `${2021 + (index % 6)}`,
  imageUrl,
}));

const STORAGE_KEY = "siteContent_v5";

export const defaultContent = {
  header: {
    brandName: "Ziad Mohamed, IFRS",
    brandIcon: "ZM",
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Services",
      certificates: "Certificates",
      contact: "Contact",
    },
  },
  hero: {
    title: "Professional",
    highlight: "Accounting Services",
    subtitle:
      "Ziad Mohamed is a certified accountant helping businesses with bookkeeping, tax compliance, financial reporting, and audit preparation.",
    primaryCta: "Download CV",
    secondaryCta: "Book Consultation",
    cvUrl: "/public/CV-Ziad Mohammed-1.pdf",
    avatar: "ZM",
    imageUrl: ziadImage,
  },
  about: {
    title: "General Accountant | IFRS Reporting | Tax Compliance",
    subtitle: "IFRS | Tax & E-Invoicing | ERP & Excel",
    badgeText: "",

    paragraphs: [
      "General Accountant with 3+ years of practical experience managing financial operations, reporting cycles, and compliance requirements across multiple business models. I focus on accuracy, consistency, and delivering clean financial data that supports better business decisions.",
      "I prepare accurate monthly and annual financial statements, support full month-end closing activities, and ensure reporting quality is aligned with IFRS standards and internal control requirements.",
      "Technical Proficiency: Advanced user of key ERP systems (Focus, Al-Mohtaseb) and advanced Microsoft Excel (dashboards, financial models) to drive process optimization and analytical efficiency.",
      "Tax Expertise: Proven ability to handle VAT, payroll tax preparation, and strictly manage electronic invoicing (ETA compliance) in alignment with Egyptian Tax Authority regulations.",
      "I am dedicated to achieving financial accuracy and enhancing business growth through effective analysis and adherence to global accounting best practices. Open to connecting with industry leaders and exploring challenging General Accountant roles where strong analytical and technical skills are paramount.",
    ],
    features: [
      {
        icon: "ACC",
        title: "Financial Statements",
        text: "Accurate monthly and annual financial reports with clear insights.",
      },
      {
        icon: "TAX",
        title: "Tax Compliance",
        text: "VAT and tax filing support with complete documentation.",
      },
      {
        icon: "AUD",
        title: "Audit Readiness",
        text: "Structured records and reconciliations for smooth audits.",
      },
    ],
    achievements: [
      { value: "180+", label: "Clients Served" },
      { value: "99%", label: "On-Time Filings" },
      { value: "3+", label: "Years Experience" },
    ],
  },
  experienceSection: {
    title: "Experience",
    subtitle:
      "Professional journey across accounting, compliance, reporting, and client service.",
  },
  experiences: [
    {
      id: 1,
      role: "General Accountant",
      company: "Majny Packaging Company",
      employmentType: "Full-time",
      period: "Mar 2025 - Present",
      location: "",
      points: [
        "Managed and verified daily financial transactions (journal entries and postings) ensuring accuracy in the general ledger.",
        "Oversaw petty cash settlements and reconciliations, maintaining strict adherence to documentation standards.",
        "Coordinated and processed accurate monthly payroll sheets, ensuring timely and compliant salary disbursement.",
        "Conducted daily reconciliation of branch accounts, including sales and cash transactions, to ensure financial transparency.",
        "Produced weekly performance reports for accounts receivable and accounts payable, supporting management decision-making.",
        "Executed accurate and timely bank reconciliations and proactively resolved all identified balance discrepancies.",
        "Supported month-end closing procedures and managed A/R and A/P functions efficiently to meet reporting deadlines.",
      ],
      skillsNote:
        "Journal Entries, Trial Balance, and related accounting skills.",
    },
    {
      id: 2,
      role: "General Accountant",
      company: "Smart Accounting",
      employmentType: "Full-time",
      period: "Nov 2022 - Mar 2025",
      location: "Kobri Elkobba | On-site",
      points: [
        "Generated accurate monthly and annual financial statements (Income Statements and Balance Sheets) for a diverse client portfolio with compliance to IFRS and local standards.",
        "Oversaw and validated the issuance of electronic tax invoices, ensuring adherence to Egyptian Tax Authority (ETA) e-invoicing requirements.",
        "Conducted detailed monthly account reconciliations and balance analysis to ensure data integrity and reliable trial balance preparation.",
      ],
      skillsNote:
        "Accounting, Group Accounts, and advanced reporting practices.",
    },
    {
      id: 3,
      role: "Freelance Accountant",
      company: "Mostaql.com | Freelance",
      employmentType: "Freelance",
      period: "Jul 2021 - Nov 2022",
      location: "Cairo, Egypt | Remote",
      points: [
        "Designed and implemented automated financial models and Excel dashboards for budgeting, planning, and data analysis to improve reporting accuracy and efficiency.",
        "Authored and delivered impactful PowerPoint presentations and research articles for business meetings and stakeholder communication.",
      ],
      skillsNote:
        "Microsoft Office, Microsoft Excel, and analytical communication skills.",
    },
    {
      id: 4,
      role: "Customer Service Representative",
      company: "Vodafone",
      employmentType: "Part-time",
      period: "Nov 2019 - Jul 2021",
      location: "New Cairo, Egypt | On-site",
      points: [
        "Delivered efficient customer support by resolving inquiries across phone, chat, and email with high customer satisfaction.",
        "Contributed to process improvements by reporting recurring customer issues, improving service quality and reducing repeat calls.",
      ],
      skillsNote:
        "Public Speaking, English Communication, and customer problem-solving.",
    },
  ],
  skillsSection: {
    title: "Skills & Expertise",
    subtitle: "Accounting, tax, ERP, audit, analytics, and professional tools.",
  },
  skills: [
    {
      id: 1,
      icon: "CM",
      name: "Change Management",
      description:
        "Process improvement and controlled change execution across workflows.",
      level: "Advanced",
      source: "Strategic planning",
    },
    {
      id: 2,
      icon: "SP",
      name: "Strategic Planning",
      description:
        "Planning priorities and aligning finance actions with business goals.",
      level: "Advanced",
      source: "Strategic planning",
    },
    {
      id: 3,
      icon: "EX",
      name: "Excel Track (Accounting Excel)",
      description:
        "Advanced Excel workflows for reports, analysis, and reconciliation.",
      level: "Expert",
      source: "Excel track (accounting excel)",
    },
    {
      id: 4,
      icon: "PQ",
      name: "Power Query",
      description:
        "Data cleaning, transformation, and automation for reporting pipelines.",
      level: "Advanced",
      source: "Microsoft Office",
    },
    {
      id: 5,
      icon: "PV",
      name: "Pivot Tables",
      description:
        "Fast analysis of large accounting datasets and KPI summaries.",
      level: "Advanced",
      source: "Microsoft Office",
    },
    {
      id: 6,
      icon: "MO",
      name: "Microsoft Office & ICDL",
      description:
        "Professional use of Microsoft Office applications in accounting workflows.",
      level: "Advanced",
      source: "Al-Azhar University",
    },
    {
      id: 7,
      icon: "EA",
      name: "Electronic Accounting",
      description:
        "Applied electronic accounting processes and digital finance workflows.",
      level: "Advanced",
      source: "Al-Azhar University",
    },
    {
      id: 8,
      icon: "LI",
      name: "LinkedIn Skill Assessment",
      description: "Passed LinkedIn Skill Assessment validation.",
      level: "Verified",
      source: "LinkedIn",
    },
    {
      id: 9,
      icon: "DM",
      name: "Digital Marketing",
      description:
        "Online campaign support, planning, and performance-focused execution.",
      level: "Advanced",
      source: "Digital marketing",
    },
    {
      id: 10,
      icon: "EM",
      name: "Email Marketing",
      description:
        "Audience-focused email campaigns and communication planning.",
      level: "Advanced",
      source: "Digital marketing",
    },
    {
      id: 11,
      icon: "SE",
      name: "Search Engine Optimization (SEO)",
      description:
        "SEO basics for visibility, ranking improvement, and organic reach.",
      level: "Intermediate",
      source: "Freelance at Mostaql.com",
    },
    {
      id: 12,
      icon: "BC",
      name: "Commercial Banking Services",
      description:
        "Hands-on understanding from summer training in banking operations.",
      level: "Intermediate",
      source: "Summer training at Banque Misr",
    },
    {
      id: 13,
      icon: "BO",
      name: "Banking Operations",
      description:
        "Knowledge of branch operation flow and banking process structure.",
      level: "Intermediate",
      source: "Summer training at Banque Misr",
    },
    {
      id: 14,
      icon: "FA",
      name: "Financial Statement Auditing",
      description:
        "Audit-focused review of statements for compliance and accuracy.",
      level: "Advanced",
      source: "Audit financial statements",
    },
    {
      id: 15,
      icon: "AU",
      name: "Auditing",
      description:
        "Risk-aware audit support with attention to evidence and controls.",
      level: "Advanced",
      source: "Freelance at Mostaql.com",
    },
    {
      id: 16,
      icon: "GR",
      name: "Group Accounts",
      description:
        "Support in group account preparation and consolidated reporting context.",
      level: "Advanced",
      source: "Majny Packaging Company",
    },
    {
      id: 17,
      icon: "YE",
      name: "Year-End Accounting",
      description:
        "Year-end adjustments, closing tasks, and final statement readiness.",
      level: "Advanced",
      source: "Majny Packaging Company",
    },
    {
      id: 18,
      icon: "TB",
      name: "Trial Balance & Balance Sheets",
      description:
        "Accurate trial balance preparation and balance sheet validation.",
      level: "Advanced",
      source: "Majny Packaging Company",
    },
    {
      id: 19,
      icon: "JE",
      name: "Journal Entries (Accounting)",
      description:
        "Daily posting discipline and verification across account cycles.",
      level: "Advanced",
      source: "Majny Packaging Company",
    },
    {
      id: 20,
      icon: "TX",
      name: "Income Tax & Tax Accounting",
      description: "Tax calculations, compliance checks, and filing readiness.",
      level: "Advanced",
      source: "Accounting practice",
    },
    {
      id: 21,
      icon: "BR",
      name: "Bank Reconciliation",
      description:
        "Timely reconciliations and discrepancy resolution for clean balances.",
      level: "Advanced",
      source: "General Accountant at Majny Packaging Company",
    },
    {
      id: 22,
      icon: "BA",
      name: "Business Analysis",
      description:
        "Analytical interpretation of data to support business decisions.",
      level: "Advanced",
      source: "Al-Azhar University",
    },
    {
      id: 23,
      icon: "FC",
      name: "Financial Accounting",
      description:
        "Core financial accounting principles and practical implementation.",
      level: "Advanced",
      source: "Al-Azhar University",
    },
    {
      id: 24,
      icon: "EC",
      name: "E-Commerce",
      description:
        "Freelance support for online business tasks and digital operations.",
      level: "Intermediate",
      source: "Freelance at Mostaql.com",
    },
    {
      id: 25,
      icon: "PS",
      name: "Presentation Skills",
      description:
        "Business-focused presentations with clear structure and messaging.",
      level: "Advanced",
      source: "Al-Azhar University",
    },
    {
      id: 26,
      icon: "PW",
      name: "Public Speaking",
      description:
        "Effective communication in client support and team coordination.",
      level: "Advanced",
      source: "Customer Service Representative at Vodafone",
    },
    {
      id: 27,
      icon: "SC",
      name: "Strategic Communications",
      description:
        "Clear communication planning for stakeholders and operations.",
      level: "Advanced",
      source: "Customer Service Representative at Vodafone",
    },
    {
      id: 28,
      icon: "LD",
      name: "Leadership & Teamwork",
      description:
        "Ownership, collaboration, and organization in multi-task environments.",
      level: "Advanced",
      source: "Vodafone + Al-Azhar University",
    },
    {
      id: 29,
      icon: "EN",
      name: "English Communication",
      description:
        "Strong written and verbal communication for professional contexts.",
      level: "Advanced",
      source: "Al-Azhar University",
    },
    {
      id: 30,
      icon: "DT",
      name: "Data Entry & Back Office Operations",
      description:
        "Structured data handling and process discipline in operational tasks.",
      level: "Advanced",
      source: "Freelance at Mostaql.com",
    },
    {
      id: 31,
      icon: "ER",
      name: "ERP Implementations",
      description:
        "Applied ERP usage in accounting cycles with practical system discipline.",
      level: "Advanced",
      source: "Focus ERP, Al-Mohtaseb",
    },
    {
      id: 32,
      icon: "MW",
      name: "Microsoft Word & PowerPoint",
      description:
        "Professional reporting documents and structured presentation delivery.",
      level: "Advanced",
      source: "Microsoft Office",
    },
    {
      id: 33,
      icon: "OA",
      name: "Outlook & Access",
      description:
        "Office communication management and basic data organization workflows.",
      level: "Intermediate",
      source: "Al-Azhar University",
    },
  ],
  certificatesSection: {
    title: "Certificates",
    subtitle: "Certifications & Professional Milestones",
  },
  certificates: certificateSlides,
  contact: {
    title: "Get In Touch",
    subtitle: "Need a reliable accountant for your business?",
    phoneLabel: "Phone",
    phone: "01066915248",
    emailLabel: "Email",
    email: "Ziadm9320@gmail.com",
    addressLabel: "Location",
    address: "Ashmon , Menoufia, Egypt",
    socialTitle: "Social",
    social: [
      {
        id: "linkedin",
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/ziad-mohamed-03992b240",
      },
      { id: "whatsapp", label: "WhatsApp", url: "https://wa.me/201066915248" },
      {
        id: "facebook",
        label: "Facebook",
        url: "https://www.facebook.com/share/1FPYF5ub4f/",
      },
    ],
    cardTitle: "Free 20-minute consultation",
    cardText:
      "Share your accounting challenge and get a practical action plan for your next reporting cycle.",
    cardCta: "Email Now",
  },
  footer: {
    title: "Ziad Mohamed, CPA",
    text: "Independent accounting consultant focused on clean books, compliant taxes, and clear financial decisions.",
    linksTitle: "Quick Links",
    links: [
      { label: "Home", href: "#hero" },
      { label: "About", href: "#about" },
      { label: "Certificates", href: "#certificates" },
      { label: "Contact", href: "#contact" },
    ],
    servicesTitle: "Services",
    services: [
      { label: "Bookkeeping", href: "#contact" },
      { label: "Tax Filing", href: "#contact" },
      { label: "Audit Support", href: "#contact" },
      { label: "Reporting", href: "#contact" },
    ],
  },
};

const mergeContent = (base, next) => {
  if (!next || typeof next !== "object") return base;
  const merged = { ...base };

  Object.keys(base).forEach((key) => {
    if (Array.isArray(base[key])) {
      merged[key] = Array.isArray(next[key]) ? next[key] : base[key];
    } else if (typeof base[key] === "object" && base[key] !== null) {
      merged[key] = mergeContent(base[key], next[key]);
    } else {
      merged[key] = next[key] !== undefined ? next[key] : base[key];
    }
  });

  return merged;
};

export const loadContent = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultContent;
    const parsed = JSON.parse(raw);
    return mergeContent(defaultContent, parsed);
  } catch {
    return defaultContent;
  }
};

export const saveContent = (content) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  } catch {
    // Ignore storage errors.
  }
};
