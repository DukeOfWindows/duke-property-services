import React from 'react';
import { motion } from 'framer-motion';

export default function InfoCommercial({
  image,
  imageAlt = "Commercial exterior cleaning example",
  heading,
  paragraphs = [],
  listItems = [],
  listIntro = "This service includes:"
}) {
  return (
    <section className="bg-white text-duke-dark py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row-reverse items-start gap-10">
        
        {/* Image on the right for commercial */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={image}
            alt={imageAlt}
            className="rounded-xl shadow-lg object-cover aspect-square w-full"
          />
        </motion.div>

        {/* Text on the left */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-cursive font-bold text-duke-dark mb-8 inline-block relative after:content-[''] after:block after:w-full after:h-[3px] after:bg-duke-brown after:rounded-full after:mt-2"
          >
            {heading}
          </motion.h2>

          {paragraphs.map((text, i) => (
            <p key={i} className="font-body text-duke-dark mb-4">{text}</p>
          ))}

          {listItems.length > 0 && (
            <>
              <p className="font-bold mb-4 border-l-4 border-duke-brown pl-4">
                {listIntro}
              </p>
              <ul className="list-disc list-inside space-y-2 font-body text-duke-dark">
                {listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
            
          )}
        </motion.div>

      </div>
    </section>
  );
}
