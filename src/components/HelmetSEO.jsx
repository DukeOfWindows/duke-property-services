import React from 'react';
import { Helmet } from 'react-helmet';

export default function HelmetSEO({
  pageTitle,
  metaDescription,
  canonicalUrl,
  image = "https://dukepropertyservices.co.nz/src/images/logo.png",
  breadcrumbItems
}) {
  return (
    <Helmet>
      {/* Core SEO */}
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": canonicalUrl,
          name: "Duke Property Services",
          image: image,
          url: canonicalUrl,
          telephone: "+64 22 035 2725",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Paetawa Road, Peka Peka, Waikanae",
            addressLocality: "Kapiti Coast",
            postalCode: "5391",
            addressRegion: "Wellington",
            addressCountry: "NZ"
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -40.8327,
            longitude: 175.0581
          },
          description: metaDescription,
          areaServed: {
            "@type": "Place",
            name: "Paraparaumu, Waikanae, Raumati, Otaki, and surrounding areas"
          },
          openingHours: [
            "Mo-Fr 07:00-19:00",
            "Sa-Su 08:00-18:00"
          ],
          sameAs: [
            "https://www.facebook.com/DukePropertyServicesNZ/",
            "https://www.instagram.com/duke_property_services/",
            "https://maps.app.goo.gl/1VphvKM9w1VL3RRG6"
          ]
        })}
      </script>
{breadcrumbItems && (
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    })}
  </script>
)}

    </Helmet>
  );
}
