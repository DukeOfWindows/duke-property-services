import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import HeroCommercial from '../components/HeroCommercial';
import InfoCommercial from '../components/InfoCommercial';
import BenefitCards from '../components/BenefitCards';
import ToolboxSection from '../components/ToolboxSection';
import WhyUs from '../components/WhyUs';
import TestimonialSlider from '../components/TestimonialSlider';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';
import allTestimonials from '../data/testimonialsData';
import getTestimonialsByService from '../utils/getTestimonialsByService';

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function CommercialTemplate({
  seoTitle,
  seoDescription,
  hero,
  info,
  benefits,
  tools,
  testimonialTag,
  highlight = null,
}) {
  const testimonials = shuffleArray(
    getTestimonialsByService(testimonialTag, allTestimonials)
  );

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navbar />

      <main>
        <HeroCommercial
          backgroundImage={hero.image}
          eyebrow={hero.eyebrow}
          title={hero.title}
          description={hero.description}
        >
        </HeroCommercial>

        <InfoCommercial
          image={info.image}
          heading={info.heading}
          paragraphs={info.paragraphs}
          listItems={info.listItems}
        />

        <BenefitCards
          heading={benefits.heading}
          benefits={benefits.items}
          variant="commercial"
        />

        <ToolboxSection
          title={tools.title}
          subtitle={tools.subtitle}
          description={tools.description}
          items={tools.items}
        />

        {highlight && (
          <section className="bg-duke-dark text-white py-16 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">{highlight}</div>
          </section>
        )}

        <WhyUs />
        <TestimonialSlider testimonials={testimonials} />
        <HowItWorks />
      </main>

      <Footer />
    </>
  );
}
