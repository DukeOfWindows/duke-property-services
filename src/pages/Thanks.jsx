import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../images/logo.png';

export default function Thanks() {
useEffect(() => {
  const interval = setInterval(() => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-17431915316/2EAHCLbz0P8aELTWI_hA',
      });
      clearInterval(interval);
    }
  }, 300); // Poll every 300ms

  return () => clearInterval(interval);
}, []);

  return (
    <>
      <Helmet>
        <title>Thank You | Duke Property Services</title>
        <meta name="description" content="Thanks for getting in touch with Duke Property Services. We'll respond shortly and look forward to helping you!" />

        {/* Load Google Ads global site tag */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17431915316"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17431915316');
          `}
        </script>
      </Helmet>

      <Navbar />
      <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-20 text-center bg-[#f7f8f6]">
        <h1 className="text-4xl font-heading font-bold text-duke-dark mb-4">Thanks for Reaching Out!</h1>
        <p className="text-lg text-gray-700 max-w-xl">
          We’ve received your message and will be in touch shortly. We look forward to helping you get your property sparkling.
        </p>
        <img
          src={logo}
          alt="Duke Property Services logo"
          className="w-40 mt-10"
        />
      </main>
      <Footer />
    </>
  );
}
