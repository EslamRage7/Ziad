const imageModules = import.meta.glob("./assets/*.jpeg", {
  eager: true,
  import: "default",
});

const galleryImages = Object.entries(imageModules)
  .sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  )
  .map(([, src]) => src);

const certificateSlides = galleryImages.map((imageUrl, index) => ({
  id: index + 1,
  badge: "Certificate",
  title: `Professional Certificate ${index + 1}`,
  issuer: "Ziad Murad",
  description: "Verified professional credential.",
  year: `${2021 + (index % 6)}`,
  imageUrl,
}));

const STORAGE_KEY = "siteContent_v4";

export const defaultContent = {
  header: {
    brandName: "Ziad Murad, CPA",
    brandIcon: "ZM",
    nav: {
      home: "Home",
      about: "About",
      skills: "Services",
      certificates: "Certificates",
      contact: "Contact",
    },
  },
  hero: {
    title: "Professional",
    highlight: "Accounting Services",
    subtitle:
      "Ziad Murad is a certified accountant helping businesses with bookkeeping, tax compliance, financial reporting, and audit preparation.",
    primaryCta: "Download CV",
    secondaryCta: "Book Consultation",
    cvUrl: "/ziad-murad-cv.txt",
    avatar: "ZM",
  },
  about: {
    title: "About Me",
    subtitle: "Certified Accountant for SMEs and Growing Businesses",
    badgeText: "",

    paragraphs: [
      "A graduate of the Faculty of Commerce, Department of Accounting, with a very good grade, holds many courses in various fields of accounting, can work as a team, solve problems, deal with complex financial tasks, prepare financial statements, interpret, and analyze data and the use of Microsoft programs.",
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
      { value: "2+", label: "Years Experience" },
    ],
  },
  skillsSection: {
    title: "Accounting Services",
    subtitle: "Professional services designed to keep your business compliant and financially clear.",
  },
  skills: [
    {
      id: 1,
      icon: "BK",
      name: "Bookkeeping",
      description: "Daily transactions, reconciliations, and clean ledgers for accurate records.",
      level: "Advanced",
    },
    {
      id: 2,
      icon: "FR",
      name: "Financial Reporting",
      description: "Monthly reports with clear numbers you can use for better decisions.",
      level: "Advanced",
    },
    {
      id: 3,
      icon: "TX",
      name: "Tax Compliance",
      description: "Timely tax filing, documentation, and compliance-focused support.",
      level: "Expert",
    },
    {
      id: 4,
      icon: "AD",
      name: "Audit Preparation",
      description: "Organized records and schedules to make external audits smoother.",
      level: "Advanced",
    },
    {
      id: 5,
      icon: "BF",
      name: "Budgeting & Forecasting",
      description: "Budget planning and cash flow projections aligned with your business goals.",
      level: "Advanced",
    },
    {
      id: 6,
      icon: "IC",
      name: "Internal Controls",
      description: "Control frameworks that reduce errors and financial risk.",
      level: "Advanced",
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
    title: "Ziad Murad, CPA",
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
