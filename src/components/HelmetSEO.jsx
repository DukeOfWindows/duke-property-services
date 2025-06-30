import React from 'react';
import { Helmet } from 'react-helmet';

export default function HelmetSEO({ pageTitle, metaDescription, canonicalUrl }) {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* Social Meta */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content="https://dukepropertyservices.co.nz/src/images/logo.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content="https://dukepropertyservices.co.nz/src/images/logo.png" />

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Duke Property Services",
          image: "https://dukepropertyservices.co.nz/src/images/logo.png",
          url: "https://dukepropertyservices.co.nz",
          telephone: "+64 22 035 2725",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Paetawa Road, Peka Peka, Waikanae",
            addressLocality: "Kapiti Coast",
            addressRegion: "Wellington",
            addressCountry: "NZ"
          },
          description: "Duke Property Services offers professional exterior cleaning on the Kapiti Coast, including window washing, gutter clearing, roof treatments, house washing and more.",
          areaServed: {
            "@type": "Place",
            name: "Paraparaumu, Waikanae, Raumati, Otaki, and surrounding areas"
          },
          openingHours: "Mo-Su 07:00-19:00",
          sameAs: [
            "https://www.facebook.com/DukePropertyServicesNZ/",
            "https://www.instagram.com/duke_property_services/"
          ]
        })}
      </script>
    </Helmet>
  );
}
