import React from 'react';
import { Helmet } from 'react-helmet';
import allTestimonials from './data/testimonialsData';
import getTestimonialsByService from './utils/getTestimonialsByService';
import TestimonialSlider from './components/TestimonialSlider';
import HowItWorks from './components/HowItWorks';
import Navbar from './components/Navbar';
import WhyUs from './components/WhyUs';
import heroImage from './images/hero.jpg'; 
import Footer from './components/Footer';
import WhatWeClean from './components/WhatWeClean';
import CTAButton from './components/CTAButton';
import OurPartners from './components/OurPartners'; // adjust path if needed


function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  const testimonials = shuffleArray(allTestimonials);

  return (
    <>
      <Helmet>
        <title>Duke Property Services | Kapiti Coast Exterior Cleaning Experts</title>
        <meta
          name="description"
          content="Friendly, reliable, and professional exterior cleaning across the Kapiti Coast. Duke Property Services offers window washing, gutter cleaning, house washing, roof treatments, and more."
        />
          <link rel="canonical" href="https://www.dukepropertyservices.co.nz/" />
          
        <meta property="og:title" content="Duke Property Services | Kapiti Coast Exterior Cleaning Experts" />
        <meta property="og:description" content="Exterior cleaning for homes and businesses across Kapiti Coast — by friendly, reliable professionals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dukepropertyservices.co.nz" />
        <meta property="og:image" content="https://dukepropertyservices.co.nz/src/images/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Duke Property Services | Kapiti Coast Exterior Cleaning Experts" />
        <meta name="twitter:description" content="Exterior cleaning services for homes and businesses throughout the Kapiti Coast." />
        <meta name="twitter:image" content="https://yourdomain.com/path-to-hero.jpg" />

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
  "streetAddress": "Paetawa Road, Peka Peka, Waikanae",
  "addressLocality": "Kapiti Coast",
  "postalCode": "5391",
  "addressRegion": "Wellington",
  "addressCountry": "NZ"
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
      <main>
<section
  className="h-[90vh] md:h-screen bg-top md:bg-center bg-cover md:bg-fixed bg-no-repeat text-white flex items-center justify-center relative"
  style={{
    backgroundImage: `url(${heroImage})`,
    backgroundSize: 'cover',
  }}
  aria-label="Hero banner showing clean exterior surface"
>
          <div className="absolute inset-0 bg-black bg-opacity-60" aria-hidden="true"></div>

          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Exterior Cleaning Done Right
            </h1>
            <p className="text-lg md:text-xl font-body mb-8 max-w-2xl mx-auto">
              Friendly, reliable, and professional property services for homes and businesses.
            </p>
            <CTAButton />
          </div>
        </section>
       <WhatWeClean />
        <WhyUs />
        <HowItWorks />
        <section id="testimonials" className="scroll-mt-24 ...">
        <TestimonialSlider testimonials={testimonials} />
        </section>
<OurPartners />

        <Footer />
      </main>
    </>
  );
}

export default App;
