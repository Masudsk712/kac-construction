import { siteConfig, faqSchema } from "@/lib/seo";

export default function Schema() {
  /* ─── Organization Schema ─── */
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionCompany",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.legalName,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/icon.png`,
      width: 512,
      height: 512,
    },
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${siteConfig.ogImage}`,
      width: siteConfig.ogImageWidth,
      height: siteConfig.ogImageHeight,
    },
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    foundingDate: "2005",
    areaServed: [
      {
        "@type": "Country",
        name: "India",
      },
      {
        "@type": "State",
        name: "West Bengal",
      },
      {
        "@type": "State",
        name: "Assam",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ],
    serviceType: siteConfig.serviceTypes,
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
      itemListElement: siteConfig.serviceTypes.map((service, index) => ({
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
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-IN",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteConfig.url}/?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
  };

  /* ─── Local Business Schema ─── */
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["ConstructionCompany", "LocalBusiness"],
    "@id": `${siteConfig.url}/#localbusiness`,
    name: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    openingHours: ["Mo-Sa 09:00-19:00"],
    priceRange: "₹₹₹₹",
    paymentAccepted: ["Bank Transfer", "Cheque"],
    currenciesAccepted: "INR",
    areaServed: "India",
    hasMap: `https://maps.google.com/?q=${siteConfig.address.locality}+${siteConfig.address.region}+India`,
  };

  /* ─── Breadcrumb Schema ─── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${siteConfig.url}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About Us",
        item: `${siteConfig.url}/about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: `${siteConfig.url}/service`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: `${siteConfig.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${siteConfig.url}/contact`,
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Careers",
        item: `${siteConfig.url}/career`,
      },
    ],
  };

  /* ─── FAQ Schema ─── */
  const faqSchemaStructured = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteConfig.url}/#faq`,
    mainEntity: faqSchema.map((faq) => ({
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