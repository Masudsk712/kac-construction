export default function Schema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "ConstructionCompany",

    name: "Kuddus Ali Construction",

    url: "https://kacgroups.com",

    logo: "https://kacgroups.com/icon.png",

    image: "https://kacgroups.com/og-image.jpg",

    description:
      "Premium EPC infrastructure company delivering transmission, erection, foundation and power grid solutions across India.",

    address: {
      "@type": "PostalAddress",

      addressLocality: "Malda",

      addressRegion: "West Bengal",

      addressCountry: "India",
    },

    areaServed: "India",

    serviceType: [
      "Transmission Line",
      "Tower Erection",
      "Foundation Work",
      "Hotline Stringing",
      "HTLS Reconductoring",
      "Power Grid",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}