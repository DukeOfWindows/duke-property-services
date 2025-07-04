import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import CTAButton from './CTAButton';

export default function ResidentialHero({
  backgroundImage,
  eyebrow,
  title,
  description,
  pageTitle = "Kapiti Coast Exterior Cleaning | Duke Property Services",
  metaDescription = "Professional residential exterior cleaning including window washing, house soft washing, gutter cleaning and more across the Kapiti Coast.",
  children,
}) {
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

   <section
        className="relative h-[60vh] md:h-[70vh] bg-top md:bg-center bg-no-repeat bg-cover md:bg-fixed flex items-center text-white"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col h-full">
          <div className="flex-1 flex items-center sm:items-center sm:text-center">
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="text-duke-blue font-cursive text-2xl mb-1 relative inline-block after:content-[''] after:absolute after:top-1/2 after:left-full after:ml-2 after:w-10 after:h-[2px] after:bg-duke-brown after:transform after:-translate-y-1/2">
                {eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4">{title}</h1>
              <p className="text-lg font-body mb-6">{description}</p>
              <CTAButton />
            </motion.div>
          </div>

          {children}
        </div>
      </section>
    </>
  );
}
