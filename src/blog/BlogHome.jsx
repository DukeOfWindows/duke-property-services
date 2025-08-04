import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from './blogPosts';

const BlogHome = () => {
  return (
    <>
      <Helmet>
        <title>Duke Property Services | Kapiti Coast Exterior Cleaning Experts</title>
        <meta
          name="description"
          content="Friendly, reliable, and professional exterior cleaning across the Kapiti Coast. Duke Property Services offers window washing, gutter cleaning, house washing, roof treatments, and more."
        />
        <link rel="canonical" href="https://www.dukepropertyservices.co.nz/blog" />

        <meta property="og:title" content="Duke Property Services | Kapiti Coast Exterior Cleaning Experts" />
        <meta property="og:description" content="Exterior cleaning for homes and businesses across Kapiti Coast — by friendly, reliable professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dukepropertyservices.co.nz/blog" />
        <meta property="og:image" content="https://dukepropertyservices.co.nz/src/images/logo.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Duke Property Services | Kapiti Coast Exterior Cleaning Experts" />
        <meta name="twitter:description" content="Exterior cleaning services for homes and businesses throughout the Kapiti Coast." />
        <meta name="twitter:image" content="https://www.dukepropertyservices.co.nz/src/images/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://dukepropertyservices.co.nz",
            name: "Duke Property Services",
            image: "https://dukepropertyservices.co.nz/src/images/logo.png",
            url: "https://dukepropertyservices.co.nz",
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
            description:
              "Duke Property Services offers professional exterior cleaning on the Kapiti Coast, including window washing, gutter clearing, roof treatments, house washing and more.",
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
      </Helmet>

      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Property Care Tips & Advice</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Expert insights and seasonal tips to help you keep your property looking great — all year round.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {blogPosts.map(post => (
            <div key={post.slug} className="border p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <Link to={`/blog/${post.slug}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </Link>
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.description}</p>
              <Link to={`/blog/${post.slug}`} className="text-blue-600 font-medium hover:underline">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BlogHome;
