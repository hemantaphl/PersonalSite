// hemanta-schema.js

(function() {
  const ldJsonScript = document.createElement('script');
  ldJsonScript.type = 'application/ld+json';
  ldJsonScript.text = JSON.stringify({
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
    "description": "Cybersecurity and digital forensics student passionate about cloud computing, ethical hacking, and secure networks."
  });
  document.head.appendChild(ldJsonScript);
})();
