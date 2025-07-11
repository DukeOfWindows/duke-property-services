import React from 'react';
import { Helmet } from 'react-helmet';
import contactHero from '../images/contactHero.jpg'; // swap with your hero image
import contactPhoto from '../images/tools/pressuregunRP.jpg';   // swap with your portrait
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';
import mapImage from '../images/duke-map.png';
import OurPartners from '../components/OurPartners';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Duke Property Services | Kapiti Exterior Cleaners</title>
        <meta
          name="description"
          content="Get in touch with Duke Property Services. We're here to help with window cleaning, house washing, and more across the Kapiti Coast."
        />
      </Helmet>
<Navbar />
      {/* Hero Section */}
      <section
        className="w-full h-96 bg-cover bg-center md:bg-fixed flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
      </section>

      {/* Contact Info + Image */}
     <section className="w-full bg-white py-12">
  <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-8 items-center">
    <img
      src={contactPhoto}
      alt="Hogan from Duke Property Services"
      className="w-64 h-64 object-cover rounded-xl shadow-lg"
    />
<div className="w-full md:flex-1 md:pr-6 text-duke-dark font-body space-y-4">
  <h2 className="text-3xl md:text-4xl font-cursive font-bold text-duke-dark mb-8 inline-block relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-duke-brown after:rounded-full after:mt-2">
    Let&apos;s Chat
  </h2>
      <p className="text-lg">
        Whether you’ve got a quick question or want to request a quote, we’d love to hear from you.
      </p>
      <div>
        <p className="font-semibold">Phone:</p>
        <a href="tel:+64220352725" className="text-duke-blue hover:underline">
          022 035 2725
        </a>
      </div>
      <div>
        <p className="font-semibold">Email:</p>
        <a href="mailto:hello@dukeservices.co.nz" className="text-duke-blue hover:underline">
          hello@dukeservices.co.nz
    </a>
            </div>
          </div>
        </div>
      </section>

<section className="w-full py-12 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <img
      src={mapImage}
      alt="Duke Property Services service area coverage map"
      className="w-full h-auto rounded-xl shadow-md"
    />
    <a
      href="https://www.google.com/maps/d/u/0/viewer?mid=1D5HAzWR-I8fFB9pyMqrt_LziofTzJeE&ll=-40.9233489953555%2C175.04719925&z=10"
      target="_blank"
      rel="noopener noreferrer"
      className="text-duke-blue underline block mt-4 text-center"
    >
      View interactive map
    </a>
  </div>
</section>

      {/* ⬇ Add CTA, Testimonials, Map, etc. below here ⬇ */}
<section className="w-full bg-off-white py-12">
  <div className="max-w-6xl mx-auto px-6">
    <ContactForm />
  </div>
</section>
              <WhyUs />
      <OurPartners />
              <Footer />
    </>
  );
}
