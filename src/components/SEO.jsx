// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function SEO() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Hemanta Phuyal",
    "url": "https://www.hemantaphuyal.com.np",
    "sameAs": [
      "https://facebook.com/kshr.hemanta",
      "https://github.com/kshrh",
      "https://linkedin.com/in/hemantaphuyal",
      "https://x.com/kshrhemanta"
    ],
    "jobTitle": "Cybersecurity Student",
    "affiliation": "University of Sunderland",
    "description":
      "Cybersecurity and digital forensics student passionate about cloud computing, ethical hacking, and secure networks."
  };

  return (
    <Helmet>
      {/* SEO Meta Tags */}
      <title>Hemanta Phuyal | Cybersecurity & Cloud Enthusiast from Nepal</title>
      <meta
        name="description"
        content="Official website of Hemanta Phuyal — cybersecurity student, cloud and networking enthusiast from Nepal. Learn more about his journey, skills, and experience."
      />
      <meta
        name="keywords"
        content="Hemanta, Phuyal, Hemanta Phuyal, cybersecurity, cloud computing, digital forensics, network security, Nepal, ISMT, University of Sunderland"
      />
      <meta name="author" content="Hemanta Phuyal" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://www.hemantaphuyal.com.np/" />

      {/* Open Graph Tags */}
      <meta property="og:title" content="Hemanta Phuyal | Cybersecurity & Cloud Enthusiast" />
      <meta
        property="og:description"
        content="Discover the official profile of Hemanta Phuyal — passionate about cybersecurity, cloud, and digital safety."
      />
      <meta property="og:image" content="https://www.hemantaphuyal.com.np/assets/images/Profile.jpeg" />
      <meta property="og:url" content="https://www.hemantaphuyal.com.np" />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Hemanta Phuyal | Cybersecurity & Cloud Enthusiast" />
      <meta
        name="twitter:description"
        content="Visit Hemanta Phuyal's official site and learn about his experience, education, and skills in cybersecurity and cloud computing."
      />
      <meta name="twitter:image" content="https://www.hemantaphuyal.com.np/assets/images/Profile.jpeg" />

      {/* Bing Webmaster */}
      <meta name="msvalidate.01" content="A932D5BB53E878E41824FA7E926A6019" />

      {/* Schema.org JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
}
