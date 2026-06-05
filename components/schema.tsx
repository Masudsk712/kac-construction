import type { BrandConfig } from "@/lib/content";

interface SchemaProps {
  config: BrandConfig;
}

export default function Schema({ config }: SchemaProps) {
  /* ─── Organization Schema ─── */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    "@id": `${config.url}/#organization`,
    name: config.legalName,
    legalName: config.legalName,
    url: config.url,
    logo: {
      "@type": "ImageObject",
      url: `${config.url}${config.favicon}`,
      width: 512,
      height: 512,
    },
    image: {
      "@type": "ImageObject",
      url: `${config.url}${config.seo.ogImage}`,
      width: 1200,
      height: 630,
    },
    description: config.seo.description,
    telephone: config.contact.phone,
    email: config.contact.email,
    foundingDate: config.since || "2005",
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "West Bengal" },
      { "@type": "State", name: "Assam" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: config.contact.address.street,
      addressLocality: config.contact.address.locality,
      addressRegion: config.contact.address.region,
      postalCode: config.contact.address.postalCode,
      addressCountry: config.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: config.contact.geo.latitude,
      longitude: config.contact.geo.longitude,
    },
    sameAs: [
      config.social.facebook,
      config.social.linkedin,
      config.social.youtube,
    ],
    serviceType: config.serviceTypes,
    knowsAbout: [
      "Extra High Voltage Transmission Lines",
      "Tower Erection",
      "Hotline Stringing",
      "HTLS Reconductoring",
      "Power Grid Infrastructure",
      "Substation Foundation",
      "Transmission Line Survey",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transmission Line & EPC Services",
      itemListElement: config.serviceTypes.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
        position: index + 1,
      })),
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 50,
      maxValue: 200,
    },
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malda",
        addressRegion: "West Bengal",
        addressCountry: "India",
      },
    },
  };

  /* ─── Website Schema ─── */
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${config.url}/#website`,
    url: config.url,
    name: config.name,
    description: config.seo.description,
    publisher: {
      "@id": `${config.url}/#organization`,
    },
    inLanguage: "en-IN",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${config.url}/?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
  };

  /* ─── Local Business Schema ─── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ConstructionCompany", "LocalBusiness"],
    "@id": `${config.url}/#localbusiness`,
    name: config.legalName,
    url: config.url,
    telephone: config.contact.phone,
    email: config.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.contact.address.street,
      addressLocality: config.contact.address.locality,
      addressRegion: config.contact.address.region,
      postalCode: config.contact.address.postalCode,
      addressCountry: config.contact.address.country,
    },
    openingHours: ["Mo-Sa 09:00-19:00"],
    priceRange: "₹₹₹₹",
    paymentAccepted: ["Bank Transfer", "Cheque"],
    currenciesAccepted: "INR",
    areaServed: "India",
    hasMap: `https://maps.google.com/?q=${config.contact.address.locality}+${config.contact.address.region}+India`,
  };

  /* ─── Breadcrumb Schema ─── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${config.url}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: config.url },
      { "@type": "ListItem", position: 2, name: "About Us", item: `${config.url}/about` },
      { "@type": "ListItem", position: 3, name: "Services", item: `${config.url}/service` },
      { "@type": "ListItem", position: 4, name: "Projects", item: `${config.url}/projects` },
      { "@type": "ListItem", position: 5, name: "Contact", item: `${config.url}/contact` },
      { "@type": "ListItem", position: 6, name: "Careers", item: `${config.url}/career` },
    ],
  };

  /* ─── FAQ Schema ─── */
  const faqSchemaStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${config.url}/#faq`,
    mainEntity: config.faq.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        id="schema-organization"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        id="schema-website"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        id="schema-localbusiness"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        id="schema-breadcrumb"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        id="schema-faq"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchemaStructured),
        }}
      />
    </>
  );
}