// =============================================================================
//  KAC GROUPS — Brand Configuration
//  Domain: kacgroups.com | www.kacgroups.com
// =============================================================================
// 
//  HOW TO EDIT THIS FILE:
//  ──────────────────────
//  • Every section is clearly labeled with a separator comment like:
//    // ─── Section Name ────────────────────────────
//  • To change text: find the relevant section and update the string value.
//  • To change images: update the path string (e.g. "/kacgroups/hero.jpg").
//    Image files live in: public/kacgroups/
//  • After editing, save the file and redeploy. Next.js will pick up changes.
//  • Do NOT change the structure/keys — components expect these exact key names.
//  • Always wrap strings in double quotes. Use \n for line breaks in strings.
// =============================================================================

export const kacgroupsConfig = {

  // ===========================================================================
  //  BRAND IDENTITY
  //  Core identity values used across the entire site.
  //  ─────────────────────────────────────────────────────────────────────────
  //  name          → Full company name (shown in Navbar, Hero, SEO title, footer)
  //  shortName     → Short version (used in compact spaces like mobile nav)
  //  legalName     → Legal entity name (used in Schema.org structured data)
  //  tagline       → Slogan shown in Hero section
  //  since         → Founding year (shown in About section)
  //  abbreviation  → Abbreviation used in compact labels
  //  infrastructureGroup → Subtitle shown below company name in footer
  // ===========================================================================
  name: "Kuddus Ali Construction",
  shortName: "KAC",
  legalName: "Kuddus Ali Construction",
  tagline: "Powering India's Future",
  since: "2010",
  abbreviation: "KAC",
  infrastructureGroup: "Infrastructure Group",

  // ===========================================================================
  //  DOMAIN
  //  The canonical URL and domain for this brand.
  //  Used in sitemap, canonical links, and structured data.
  //  ─────────────────────────────────────────────────────────────────────────
  //  url    → Full canonical URL including https:// and www if applicable
  //  domain → Bare domain without protocol (used in email templates)
  // ===========================================================================
  url: "https://www.kacgroups.com",
  domain: "kacgroups.com",

  // ===========================================================================
  //  SEO — Search Engine Optimization
  //  Controls page title, meta description, Open Graph tags, and more.
  //  ─────────────────────────────────────────────────────────────────────────
  //  title              → Default page title (shown in browser tab & search results)
  //  description        → Meta description (shown in search results, keep under 160 chars)
  //  keywords           → Array of SEO keywords (comma-separated in meta tag)
  //  ogImage            → Open Graph image URL (shown when sharing on social media)
  //                       CHANGE: Replace /kacgroups/og-image.jpg with your 1200×630px image
  //  twitterHandle      → Twitter/X handle (without @)
  //  creator            → Content creator name for meta tags
  //  googleVerification → Google Search Console verification code
  // ===========================================================================
  seo: {
    title: "Kuddus Ali Construction | Transmission Line & EPC Infrastructure Company",
    description:
      "Kuddus Ali Construction is a professional transmission line and EPC infrastructure company in Malda, West Bengal, India. We specialize in tower erection, stringing work, foundation work, and EPC infrastructure projects.",
    keywords: [
      "Kuddus Ali Construction",
      "Transmission Line Company",
      "Tower Erection Company",
      "Stringing Work Contractor",
      "Foundation Work Contractor",
      "EPC Infrastructure Company",
      "Power Grid Contractor",
      "Construction Company Malda",
      "Infrastructure Company West Bengal",
      "765kV Transmission Line",
      "220kV Tower Erection",
      "400kV Transmission",
      "Hotline Stringing Contractor",
      "HTLS Reconductoring",
      "Power Transmission India",
      "Substation Foundation Work",
      "Transmission Line Survey",
      "EPC Contractor India",
      "High Voltage Transmission",
      "Power Infrastructure Development",
    ],

    /*
     * HOW TO CHANGE THE SOCIAL SHARING IMAGE:
     * ───────────────────────────────────────
     * 1. Create a 1200×630px JPG or PNG image
     * 2. Save it as: public/kacgroups/og-image.jpg
     * 3. The path below should match the file location
     */
    ogImage: "/kacgroups/og-image.jpg",

    /*
     * HOW TO CHANGE THE TWITTER/X HANDLE:
     * ────────────────────────────────────
     * 1. Update the string below (without the @ symbol)
     */
    twitterHandle: "@KuddusAliConst",

    creator: "Kuddus Ali Construction",

    /*
     * HOW TO ADD GOOGLE VERIFICATION:
     * ────────────────────────────────
     * 1. Get your verification code from Google Search Console
     * 2. Replace the placeholder string below
     */
    googleVerification: "google-site-verification-code",
  },

  // ===========================================================================
  //  FAVICON
  //  The small icon shown in browser tabs and bookmarks.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO CHANGE THE FAVICON:
  //  ──────────────────────────
  //  1. Create a square PNG (recommended: 512×512px for best results)
  //  2. Save it as: public/kacgroups/icon.png
  //  3. Update the path below if you use a different filename
  //  NOTE: Next.js automatically generates favicon.ico, apple-touch-icon, etc.
  //        from this single icon file.
  // ===========================================================================
  favicon: "/kacgroups/icon.png",

  // ===========================================================================
  //  CONTACT INFORMATION
  //  Used in Footer, Contact page, CTA section, and Schema.org data.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO UPDATE CONTACT DETAILS:
  //  ──────────────────────────────
  //  1. Change phone numbers (use +91 prefix for India)
  //  2. Change email address
  //  3. Update the WhatsApp number (country code + number, no + sign)
  //  4. Update the physical address fields
  //  5. Update the map embed URL (get from Google Maps → Share → Embed)
  //  6. Update office hours text
  // ===========================================================================
  contact: {

    /* Primary phone — shown in footer, contact page, CTA */
    phone: "+919735067595",

    /* Secondary phone — shown next to primary in footer */
    phone2: "+919933638309",

    /* Primary email address */
    email: "kuddusali45@gmail.com",

    /* WhatsApp number (country code + number, NO + or spaces) */
    whatsapp: "919735067595",

    /* Physical address — used in footer and Schema.org */
    address: {
      street: "Mahisbathani Baluatola, PO Barkol",
      locality: "Malda",
      region: "West Bengal",
      postalCode: "732128",
      country: "India",
    },

    /* Geo coordinates — used in Schema.org structured data */
    geo: {
      latitude: "25.0000",
      longitude: "88.0000",
    },

    /*
     * HOW TO UPDATE THE MAP:
     * ──────────────────────
     * 1. Go to Google Maps and search for your location
     * 2. Click "Share" → "Embed a map"
     * 3. Copy the src URL from the iframe code
     * 4. Paste it below
     */
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d704.6048151757652!2d88.1037462695071!3d25.081566213257595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA0JzUzLjYiTiA4OMKwMDYnMTUuOCJF!5e1!3m2!1sen!2sin!4v1778577513815!5m2!1sen!2sin",

    /* Office hours text — shown in footer */
    officeHours: "Monday - Saturday | 9:00 AM - 7:00 PM",
  },

  // ===========================================================================
  //  SOCIAL MEDIA LINKS
  //  Used in Footer social icons.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO UPDATE SOCIAL LINKS:
  //  ──────────────────────────
  //  1. Replace the URL strings below with your actual social profile URLs
  //  2. Use full HTTPS URLs
  //  3. Leave empty string "" to hide a social icon
  // ===========================================================================
  social: {
    facebook: "https://facebook.com/kuddusaliconstruction",
    linkedin: "https://linkedin.com/company/kuddus-ali-construction",
    youtube: "https://youtube.com/@kuddusaliconstruction",
  },

  // ===========================================================================
  //  HERO SECTION
  //  The full-screen video hero at the top of the homepage.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO CHANGE THE HERO:
  //  ───────────────────────
  //  • videoUrl   → Background video (MP4). Put new video in public/videos/
  //  • posterUrl  → Fallback image shown while video loads.
  //                 CHANGE: Replace /kacgroups/hero.jpg with your hero image in:
  //                 public/kacgroups/hero.jpg
  //  • heading    → Main headline text (line1 and line2)
  //  • subtitle   → Text below the heading
  //  • description→ Paragraph below subtitle
  //  • metrics    → Three stat cards (value + label)
  //  • buttons    → Call-to-action buttons
  // ===========================================================================
  hero: {
    videoUrl: "/videos/NewBackground.mp4",
    posterUrl: "/kacgroups/hero.jpg",

    /* Small label chip at top of hero */
    label: "EPC Infrastructure Since 2010",

    /* Main headline — two lines, leave line2 empty string "" to use single line */
    heading: {
      line1: "KUDDUS ALI",
      line2: "CONSTRUCTION",
    },

    subtitle: "Powering India's Future",

    description:
      "Experts in Transmission Line, Tower Erection, Foundation, Hotline Stringing and EPC Infrastructure Projects across India.",

    /* Three key metric boxes shown below the description */
    metrics: [
      { value: "150+", label: "Towers Completed" },
      { value: "765kV", label: "Transmission Capacity" },
      { value: "10+", label: "States Covered" },
    ],

    /* CTA buttons */
    primaryButton: { label: "View Projects", href: "/projects" },
    secondaryButton: { label: "Contact Us", href: "/contact" },
  },

  // ===========================================================================
  //  ABOUT SECTION
  //  The "About Us" section on the homepage.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO CHANGE THE ABOUT IMAGE:
  //  ─────────────────────────────
  //  1. Replace: public/kacgroups/about.jpg with your image
  //  2. OR update imageUrl below to point to any image in public/
  //  HOW TO CHANGE ABOUT TEXT:
  //  ─────────────────────────
  //  • description1/description2 → The two main paragraphs
  //  • features → Bullet-point list with check icons
  //  • stats → Three stat boxes (years, expertise, active projects)
  // ===========================================================================
  about: {
    label: "About Us",
    heading: {
      part1: "A Decade Of Dedication To",
      part2: "Infrastructure",
    },
    trustBadges: [
      { label: "ISO Certified 9001:2015", icon: "ShieldCheck" },
      { label: "15+ Years of Excellence", icon: "Award" },
    ],
    description1:
      "Established in 2010, Kuddus Ali Construction has built a strong reputation in the electrical transmission line infrastructure sector across India.",
    description2:
      "Our mission: deliver reliable, high-quality construction, maintenance, and installation services for electrical transmission infrastructure — connecting communities and powering progress through innovation, safety, and execution excellence.",
    features: [
      "Transmission Line EPC Projects",
      "Tower Erection & Foundation Engineering",
      "High Voltage System Installation",
      "Hotline Stringing & Maintenance",
    ],

    /* About image shown on the right side */
    imageUrl: "/kacgroups/about.jpg",
    imageAlt: "Kuddus Ali Construction - Transmission Infrastructure",

    stats: [
      { value: "15+", label: "Years of Experience" },
      { value: "765kV", label: "Transmission Expertise" },
      { value: "50+", label: "Active Projects" },
    ],
  },

  // ===========================================================================
  //  SERVICES SECTION
  //  The "Core Services" grid on the homepage.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO ADD/EDIT A SERVICE:
  //  ──────────────────────────
  //  1. Add a new object to the items[] array
  //  2. Required fields: title, desc, image, link, number, label
  //  3. image → Path to the service image in public/home/
  //  4. link  → URL fragment e.g. "/service#survey"
  //  HOW TO CHANGE SERVICE IMAGES:
  //  ─────────────────────────────
  //  • Place new WebP images in public/home/
  //  • Update the image path below
  // ===========================================================================
  services: {
    label: "Core Services",
    heading: {
      part1: "Engineering Services",
      part2: "Built For Reliability",
    },
    description:
      "Kuddus Ali Construction delivers advanced transmission infrastructure solutions with precision execution, experienced engineering teams and reliable project delivery across India.",
    items: [
      {
        title: "Survey Work",
        desc: "Preliminary, detailed and check survey services with route optimization and accurate transmission line planning.",
        image: "/home/SurveyWork.webp",
        link: "/service#survey",
        number: "01",
        label: "KAC Service",
      },
      {
        title: "Foundation Work",
        desc: "Precision-engineered civil foundation execution ensuring long-term tower strength and structural reliability.",
        image: "/home/FoundationWork.webp",
        link: "/service#foundation",
        number: "02",
        label: "KAC Service",
      },
      {
        title: "Tower Erection",
        desc: "Safe and efficient erection of transmission towers using advanced methodologies and experienced site teams.",
        image: "/home/ErectionWork.webp",
        link: "/service#erection",
        number: "03",
        label: "KAC Service",
      },
      {
        title: "Stringing Work",
        desc: "High-capacity conductor stringing and hotline execution with modern machinery and strict safety compliance.",
        image: "/home/StringingWork.webp",
        link: "/service#stringing",
        number: "04",
        label: "KAC Service",
      },
    ],
    ctaLabel: "Explore All Services",
    ctaHref: "/service",
  },

  // ===========================================================================
  //  PROJECTS SECTION
  //  The "Projects" grid on the homepage.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO ADD A PROJECT:
  //  ─────────────────────
  //  1. Add a new object to the items[] array
  //  2. Required fields: title, desc, points[], icon, image, href, location
  //  3. icon → Use one of: TowerControl, Zap, Wrench, Activity
  //  4. image → Path to the project image in public/home/
  //  5. href → Link target e.g. "/projects#completed"
  //  HOW TO CHANGE PROJECT IMAGES:
  //  ─────────────────────────────
  //  • Place new WebP images in public/home/
  //  • Update the image path in each item
  // ===========================================================================
  projects: {
    label: "KAC Projects",
    heading: {
      part1: "Successfully Delivered",
      part2: "Infrastructure Projects",
    },
    description:
      "Kuddus Ali Construction delivers transmission line, tower erection, HTLS reconductoring and hotline stringing projects with engineering precision, operational safety and execution excellence.",
    items: [
      {
        title: "220kV / 400kV / 765kV Transmission Lines",
        desc: "Tower erection and transmission infrastructure execution across multiple states with precision engineering standards.",
        points: [
          "High-capacity EHV transmission corridors",
          "Tower erection & stringing operations",
          "Multi-state execution capability",
          "Reliable power infrastructure delivery",
        ],
        icon: "TowerControl",
        image: "/home/HomeTower1.webp",
        href: "/projects#completed",
        location: "Multi-State",
      },
      {
        title: "HTLS Reconductoring Projects",
        desc: "Upgradation of existing lines using HTLS low-sag conductors for enhanced transmission efficiency and capacity.",
        points: [
          "Low-sag high-temperature conductors",
          "Transmission upgrade execution",
          "Modern reconductoring systems",
          "Improved power transfer capability",
        ],
        icon: "Zap",
        image: "/home/HomeTower2.webp",
        href: "/projects#htls",
        location: "Pan India",
      },
      {
        title: "Tower Strengthening & Rectification",
        desc: "Structural strengthening, alignment correction and maintenance support for ageing transmission infrastructure.",
        points: [
          "Tower rectification services",
          "Structural reinforcement",
          "Safety compliance execution",
          "Long-term infrastructure stability",
        ],
        icon: "Wrench",
        image: "/home/HomeTower3.webp",
        href: "/projects#strengthening",
        location: "Eastern India",
      },
      {
        title: "Hotline Stringing Operations",
        desc: "Live-line stringing operations ensuring uninterrupted transmission flow and minimal downtime.",
        points: [
          "Zero shutdown execution",
          "Advanced hotline techniques",
          "Critical power corridor support",
          "High safety operational standards",
        ],
        icon: "Activity",
        image: "/home/ReconductoringWork.webp",
        href: "/projects#stringing",
        location: "National Grid",
      },
    ],
    ctaLabel: "View All Projects",
    ctaHref: "/projects",
  },

  // ===========================================================================
  //  FOOTER
  //  The global footer shown on every page.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO CHANGE FOOTER CONTENT:
  //  ─────────────────────────────
  //  • topLabel        → Small label chip at the top of the footer
  //  • heading         → Large CTA heading (line1 + line2)
  //  • description     → Text below the heading
  //  • ctaButton       → Main CTA button in footer header
  //  • credentials     → Credential badges (ISO, years, etc.)
  //  • companyTitle    → Short title next to footer icon
  //  • companySubtitle → Subtitle below company title
  //  • companyDescription → About text in the first column
  //  • quickLinks      → Navigation links in the second column
  //  • coreServices    → Service list in the third column
  //  • backgroundImage → Footer background image
  //  • copyright       → Copyright text at the very bottom
  //  • developerName   → Developer credit name
  //  • developerUrl    → Developer credit link
  //  HOW TO CHANGE FOOTER BACKGROUND IMAGE:
  //  ──────────────────────────────────────
  //  • Replace: public/home/HomeTower11.webp with your image
  //  • OR update backgroundImage below to a different path
  // ===========================================================================
  footer: {
    topLabel: "KUDDUS ALI CONSTRUCTION",
    heading: {
      line1: "Building India's",
      line2: "Power Infrastructure",
    },
    description:
      "Kuddus Ali Construction specializes in transmission infrastructure, tower erection, hotline stringing, HTLS reconductoring and EPC execution projects with precision, safety and nationwide reliability.",
    ctaButton: { label: "Start Your Project", href: "/contact" },
    credentials: [
      { label: "ISO 9001:2015 Certified", icon: "ShieldCheck" },
      { label: "15+ Years Excellence", icon: "Award" },
    ],
    companyTitle: "KAC",
    companySubtitle: "Infrastructure Group",
    companyDescription:
      "Delivering modern EPC and transmission infrastructure solutions with engineering excellence across India.",
    quickLinks: [
      { title: "Home", href: "/" },
      { title: "About", href: "/about" },
      { title: "Services", href: "/service" },
      { title: "Projects", href: "/projects" },
      { title: "Media", href: "/media" },
      { title: "Career", href: "/career" },
      { title: "Contact", href: "/contact" },
    ],
    coreServices: [
      "Transmission Line EPC",
      "Tower Erection",
      "HTLS Reconductoring",
      "Foundation Engineering",
      "Hotline Stringing",
      "Survey & Planning",
    ],
    backgroundImage: "/home/HomeTower11.webp",
    copyright: "© 2026 Kuddus Ali Construction. All Rights Reserved.",
    developerName: "Masud Sk",
    developerUrl: "https://www.linkedin.com/in/masud-sk-254b581b9",
  },

  // ===========================================================================
  //  CTA SECTION (Call To Action)
  //  The "Let's Build Together" section near the bottom of the homepage.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO CHANGE CTA DETAILS:
  //  ──────────────────────────
  //  • Update phone, email, WhatsApp number
  //  • Change heading text and description
  // ===========================================================================
  cta: {
    label: "Let's Build Together",
    heading: {
      part1: "Ready To Power",
      part2: "India's Infrastructure?",
    },
    description:
      "Partner with Kuddus Ali Construction for reliable transmission infrastructure solutions — engineering precision, safety excellence, and trusted project delivery across India.",
    phone: "+91 9735067595",
    email: "kuddusali45@gmail.com",
    coreExpertise: "EPC Transmission Infrastructure",
    whatsappNumber: "919735067595",
    whatsappLabel: "Start A Project",
    contactLabel: "Contact Us",
  },

  // ===========================================================================
  //  WHY CHOOSE US SECTION
  //  The features grid highlighting competitive advantages.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO EDIT FEATURES:
  //  ─────────────────────
  //  1. Add/edit objects in the features[] array
  //  2. icon → Use one of: FaUserTie, FaShieldAlt, FaClock, FaCheckCircle
  //  3. gradient → Tailwind gradient classes (from-X to-Y)
  // ===========================================================================
  whyChooseUs: {
    label: "Why Kuddus Ali Construction",
    heading: {
      part1: "Engineering Reliability",
      part2: "With Precision & Trust",
    },
    description:
      "Kuddus Ali Construction delivers dependable transmission infrastructure solutions with technical expertise, field experience and a commitment to operational excellence across every project site.",
    features: [
      {
        title: "Experienced Workforce",
        desc: "Our highly skilled engineers, supervisors and technical teams deliver precision-driven transmission infrastructure projects across India.",
        icon: "FaUserTie",
        gradient: "from-cyan-400/20 to-blue-500/10",
      },
      {
        title: "Safety & Compliance",
        desc: "We follow strict operational safety standards, site protocols and quality assurance systems in every phase of execution.",
        icon: "FaShieldAlt",
        gradient: "from-emerald-400/20 to-cyan-500/10",
      },
      {
        title: "Timely Execution",
        desc: "From foundation work to hotline stringing, our structured planning ensures on-time project delivery with consistent reliability.",
        icon: "FaClock",
        gradient: "from-blue-400/20 to-indigo-500/10",
      },
      {
        title: "Trusted Infrastructure Partner",
        desc: "Kuddus Ali Construction is trusted for transmission line and power infrastructure execution with a reputation built on performance.",
        icon: "FaCheckCircle",
        gradient: "from-cyan-400/20 to-sky-500/10",
      },
    ],
    qualityLabel: "KAC QUALITY",
  },

  // ===========================================================================
  //  CLIENTS SECTION
  //  The "Our Valuable Clients" section with logo carousel.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO ADD/REMOVE CLIENT LOGOS:
  //  ──────────────────────────────
  //  1. Add the logo file to: public/clients/
  //  2. Add the path to the logos[] array below
  //  3. Format: "/clients/CompanyName.webp"
  //  4. To remove a logo, delete its entry from the array
  //  Recommended: Use WebP format, transparent background, ~300×150px
  // ===========================================================================
  clients: {
    label: "Trusted Partnerships",
    heading: "Our Valuable Clients",
    description:
      "Kuddus Ali Construction proudly collaborates with leading infrastructure, transmission and EPC companies delivering reliable execution across India's power sector.",
    featureCards: [
      {
        title: "Trusted Execution",
        desc: "Long-term partnerships built through quality execution, safety compliance and reliable infrastructure delivery.",
        icon: "ShieldCheck",
      },
      {
        title: "Transmission Expertise",
        desc: "Specialized in tower erection, hotline stringing, HTLS reconductoring and EHV infrastructure execution.",
        icon: "Zap",
      },
      {
        title: "Nationwide Presence",
        desc: "Successfully supporting major transmission and infrastructure projects across multiple states in India.",
        icon: "ArrowUpRight",
      },
    ],

    /* HOW TO ADD/REMOVE CLIENT LOGOS: See instructions above */
    logos: [
      "/clients/Adani.webp",
      "/clients/APAR.webp",
      "/clients/Bajel.webp",
      "/clients/Jsk.webp",
      "/clients/Jsw.webp",
      "/clients/KEC.webp",
      "/clients/KPIL.webp",
      "/clients/L&T.webp",
      "/clients/lumino.webp",
      "/clients/ntpc.webp",
      "/clients/powergrid.webp",
      "/clients/simplex.webp",
      "/clients/sterlight.webp",
      "/clients/tataproject.webp",
      "/clients/Transrail.webp",
      "/clients/skipper.webp",
      "/clients/Grilll.webp",
    ],
    backgroundImage: "/home/HomeTower12.webp",
  },

  // ===========================================================================
  //  FAQ SECTION
  //  The Frequently Asked Questions accordion on the homepage.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO ADD/EDIT FAQ ITEMS:
  //  ──────────────────────────
  //  1. Add a new object to the faq[] array
  //  2. question → The question text
  //  3. answer   → The answer text (supports plain text only)
  //  4. To remove a question, delete its object from the array
  // ===========================================================================
  faq: [
    {
      question: "What types of transmission line projects does Kuddus Ali Construction handle?",
      answer:
        "Kuddus Ali Construction handles 220kV, 400kV, and 765kV transmission line projects including tower erection, foundation work, stringing, and HTLS reconductoring across India.",
    },
    {
      question: "Where does Kuddus Ali Construction operate?",
      answer:
        "Kuddus Ali Construction operates across India with headquarters in Malda, West Bengal. We have successfully executed projects in multiple states including West Bengal, Assam, and the North East region.",
    },
    {
      question: "What services does Kuddus Ali Construction offer?",
      answer:
        "We offer survey work, tower foundation, tower erection, hotline stringing, HTLS reconductoring, and complete EPC infrastructure solutions for power transmission projects.",
    },
    {
      question: "How can I contact Kuddus Ali Construction for project enquiries?",
      answer:
        "You can contact us at +91 9735067595 or email kuddusali45@gmail.com. Our office is located at Mahisbathani Baluatola, PO Barkol, Malda, West Bengal - 732128, India.",
    },
    {
      question: "What voltage levels does Kuddus Ali Construction work with?",
      answer:
        "Kuddus Ali Construction has expertise in 220kV, 400kV, and 765kV Extra High Voltage (EHV) transmission line projects.",
    },
    {
      question: "Is Kuddus Ali Construction hiring for transmission line projects?",
      answer:
        "Yes, we regularly hire site supervisors, tower erection engineers, stringing supervisors, and other professionals for our transmission line projects. Visit our careers page for current openings.",
    },
  ],

  // ===========================================================================
  //  SERVICE TYPES (used in Schema.org structured data)
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO ADD/EDIT SERVICE TYPES:
  //  ─────────────────────────────
  //  • Add or edit strings in the array below
  //  • These appear in Schema.org structured data for SEO
  // ===========================================================================
  serviceTypes: [
    "Transmission Line Construction",
    "Tower Erection",
    "Foundation Work",
    "Hotline Stringing",
    "HTLS Reconductoring",
    "Power Grid Infrastructure",
    "Transmission Line Survey",
    "EPC Infrastructure Solutions",
  ],

  // ===========================================================================
  //  NAVBAR
  //  The global navigation bar shown on every page.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO CHANGE THE LOGO:
  //  ───────────────────────
  //  1. Replace the image file: public/kacgroups/icon.png
  //  2. Recommended: PNG with transparent background, at least 128×128px
  //  3. The path below must match the file location
  //  HOW TO CHANGE THE LOGO ALT TEXT:
  //  ────────────────────────────────
  //  • logoAlt → Shown on desktop (full company name)
  //  • logoAltMobile → Shown on mobile (abbreviated)
  // ===========================================================================
  navbar: {
    logoUrl: "/kacgroups/icon.png",
    logoAlt: "Kuddus Ali Construction",
    logoAltMobile: "KAC",
    dropdownLabel: "Project Portfolio",
    dropdownSubtext: "Transmission Infrastructure",
  },

  // ===========================================================================
  //  PAGE METADATA
  //  SEO title and description for every individual page.
  //  ─────────────────────────────────────────────────────────────────────────
  //  HOW TO UPDATE PAGE SEO:
  //  ───────────────────────
  //  1. Find the page key below (home, about, service, etc.)
  //  2. Update the title (shown in browser tab and Google results)
  //  3. Update the description (keep under 160 characters for best results)
  //  4. path is for reference — do NOT change unless you restructure URLs
  // ===========================================================================
  pageMetadata: {
    home: {
      title: "Kuddus Ali Construction | Transmission Line & EPC Infrastructure Company",
      description:
        "Kuddus Ali Construction is a professional transmission line and EPC infrastructure company in Malda, West Bengal, India. We specialize in tower erection, stringing work, foundation work, and EPC infrastructure projects.",
      path: "/",
    },
    about: {
      title: "About Us | Kuddus Ali Construction",
      description:
        "Learn about Kuddus Ali Construction's journey in transmission line and EPC infrastructure. Discover our expertise in tower erection, foundation work, stringing, and power grid projects across India with 500+ successful projects.",
      path: "/about",
    },
    service: {
      title: "Our Services | Transmission Line & EPC Infrastructure | Kuddus Ali Construction",
      description:
        "Kuddus Ali Construction offers comprehensive transmission line services: survey work, tower foundation, tower erection, hotline stringing, and HTLS reconductoring. EPC infrastructure solutions for power grid projects across India.",
      path: "/service",
    },
    projects: {
      title: "Our Projects | Transmission Line & Power Infrastructure | Kuddus Ali Construction",
      description:
        "Explore Kuddus Ali Construction's portfolio of completed and ongoing transmission line projects across India. 220kV, 400kV, and 765kV tower erection, stringing, and foundation projects.",
      path: "/projects",
    },
    contact: {
      title: "Contact Us | Kuddus Ali Construction",
      description:
        "Contact Kuddus Ali Construction for transmission line, tower erection, foundation, and EPC infrastructure projects. Reach our Malda, West Bengal office for project enquiries and partnerships.",
      path: "/contact",
    },
    career: {
      title: "Careers | Join Kuddus Ali Construction",
      description:
        "Explore career opportunities at Kuddus Ali Construction. We're hiring site supervisors, tower erection engineers, and stringing supervisors for transmission line projects across India.",
      path: "/career",
    },
    media: {
      title: "Media & Gallery | Kuddus Ali Construction",
      description:
        "Browse project photos, videos, and media coverage of Kuddus Ali Construction's transmission line, tower erection, and power infrastructure operations across India.",
      path: "/media",
    },
  },
} as const;