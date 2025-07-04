import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Info from '../components/Info';
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

export default function ResidentialTemplate({
  seoTitle,
  seoDescription,
  hero,
  info,
  benefits,
  tools,
  testimonialTag
}) {
  const testimonials = shuffleArray(
    getTestimonialsByService(testimonialTag, allTestimonials)
  );

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
      </Helmet>

      <Navbar />
      <main>
        <Hero
          backgroundImage={hero.image}
          eyebrow={hero.eyebrow}
          title={hero.title}
          description={hero.description}
            backgroundPosition={hero.backgroundPosition} 
        >
        </Hero>

        <Info
          image={info.image}
          heading={info.heading}
          paragraphs={info.paragraphs}
          listItems={info.listItems}
        />

        <BenefitCards heading={benefits.heading} benefits={benefits.items} />

        <ToolboxSection
          title={tools.title}
          subtitle={tools.subtitle}
          description={tools.description}
          items={tools.items}
        />

        <WhyUs />
        <TestimonialSlider testimonials={testimonials} />
        <HowItWorks />
      </main>
      <Footer />
    </>
  );
}
