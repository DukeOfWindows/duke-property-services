import React from 'react';
import { Helmet } from 'react-helmet';
import contactHero from '../images/contactHero.jpg'; // swap with your hero image
import contactPhoto from '../images/tools/pressuregunRP.jpg';   // swap with your portrait
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';
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
      <section className="max-w-6xl mx-auto px-6 py-12 flex bg-off-white flex-col md:flex-row gap-8 items-center">
        <img
          src={contactPhoto}
          alt="Hogan from Duke Property Services"
          className="w-64 h-64 object-cover rounded-xl shadow-lg"
        />

        <div className="text-duke-dark space-y-4 font-body">
<h1 className="text-4xl md:text-5xl font-cursive font-bold text-duke-dark pb-2 inline-block relative after:content-[''] after:block after:w-full after:h-1 after:bg-duke-brown after:rounded-full after:mt-1">
  Get in Touch
</h1>
          <p className="text-lg">
            Whether you’ve got a quick question or just want a chat, we’d love to hear from you.
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
      </section>

      {/* ⬇ Add CTA, Testimonials, Map, etc. below here ⬇ */}
   <ContactForm />
              <WhyUs />
      <OurPartners />
              <Footer />
    </>
  );
}
