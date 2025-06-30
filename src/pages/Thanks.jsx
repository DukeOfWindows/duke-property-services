import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Thanks() {
  return (
    <>
      <Helmet>
        <title>Thank You | Duke Property Services</title>
        <meta name="description" content="Thanks for getting in touch with Duke Property Services. We'll respond shortly and look forward to helping you!" />
      </Helmet>

      <Navbar />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-[#f7f8f6]">
        <h1 className="text-4xl font-heading font-bold text-duke mb-4">Thanks for Reaching Out!</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          We’ve received your message and will be in touch shortly. We look forward to helping you get your property sparkling.
        </p>
        <svg
          className="w-24 h-24 mt-10 animate-bounce text-duke-blue"
          viewBox="0 0 64 64"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Stylized heart-shaped drop as a thank you symbol"
        >
          <path d="M32 2C22 18 10 26 10 40c0 12.15 9.85 22 22 22s22-9.85 22-22c0-14-12-22-22-38z" />
        </svg>
      </main>
      <Footer />
    </>
  );
}
