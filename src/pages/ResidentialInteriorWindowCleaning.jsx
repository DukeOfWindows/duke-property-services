import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';

import ResidentialTemplate from './ResidentialTemplate';
import heroInterior from '../images/hero-interior.jpg';
import tallInterior from '../images/interior-square.jpg';
import clothImg from '../images/tools/clothRI.jpg';
import SqueegeeImg from '../images/tools/squeegeeRI.jpg';
import PoleImg from '../images/tools/poleRI.jpg';
import sparkleIcon from '../images/icons/window.png';
import sunIcon from '../images/icons/sun.png';
import airIcon from '../images/icons/cleanAir.png';

export default function ResidentialInteriorWindowCleaning() {
  const faqItems = [
  {
    question: "Do I need to move furniture or blinds?",
    answer: (
      <>
        We’ll work around most things, but it helps if you <strong>pull back curtains and move fragile items</strong> off windowsills. If something’s tricky, we’ll give you a hand.
      </>
    ),
  },
  {
    question: "What products do you use inside?",
    answer: (
      <>
        We use a traditional squeegee-and-mop system with a <strong>gentle, non-toxic cleaning solution</strong> — safe for kids, pets, and glass coatings.
      </>
    ),
  },
  {
    question: "Will there be drips or mess inside?",
    answer: (
      <>
        We carry towels and drop cloths, and we’re pretty tidy operators. <strong>Your floors and furnishings are always protected</strong> — no soggy carpet, promise.
      </>
    ),
  },
  {
    question: "Can you clean high interior windows?",
    answer: (
      <>
        <strong>Yes — we use extension poles and adjustable squeegees</strong> to reach clerestory or stairwell windows without damaging your walls or flooring.
      </>
    ),
  },
  {
    question: "Can you remove marks or stickers on interior glass?",
    answer: (
      <>
        We sure can. <strong>Just let us know ahead of time</strong> so we can bring the right tools for paint spots, decals, or sticky residue.
      </>
    ),
  },
];

  
  return (
    <>
    <HelmetSEO
  pageTitle="Interior Window Cleaning Kapiti Coast | Duke Property Services"
  metaDescription="Let more light in with crystal-clear indoor windows. We clean skylights, mirrors, and high panes across Paraparaumu, Waikanae, Raumati, and more."
  canonicalUrl="https://dukepropertyservices.co.nz/residential-interior-window-cleaning"
/>
    <ResidentialTemplate
      hero={{
        image: heroInterior,
        eyebrow: "Residential",
        title: "Interior Window Cleaning",
        description: "Let the sunshine in. We make your indoor glass sparkle — streak-free and spotless.",
      }}

      info={{
        image: tallInterior,
        heading: "Interior Window Cleaning",
        paragraphs: [
          "Fingerprints, smudges, and dust don’t stand a chance. We clean every inch of your interior glass — carefully and efficiently.",
          "Our interior window cleaning is done with precision tools and lint-free cloths to ensure a crystal-clear, streak-free finish.",
          "We’re respectful of your space, working cleanly around furniture, drapes, and delicate surfaces.",
          "Your view deserves to look good from both sides — not just the outside.",
          "We service homes in Paraparaumu, Waikanae, Raumati, Otaki, and throughout the Kapiti Coast.",
        ],
        listItems: [
          "Interior window panes cleaned by hand",
          "Track and sill detailing",
          "Mirror and glass door polishing",
          "High and hard-to-reach windows",
          "No drips, streaks, or residue left behind",
        ],
      }}
      benefits={{
        heading: "What Interior Window Cleaning Fixes",
        items: [
          {
            icon: sparkleIcon,
            text: "Removes smudges, fingerprints, and grime from everyday life — especially in busy family homes",
          },
          {
            icon: sunIcon,
            text: "Lets natural light pour in with streak-free glass and crystal-clear interior windows",
          },
          {
            icon: airIcon,
            text: "Improves air quality by removing dust and allergens from window panes and sills",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Streak-Free Inside, No Drips or Drama",
        description: "Interior glass deserves a gentle touch. Our tools are designed to leave your windows spotless without making a mess of your home.",
        items: [
          {
            image: SqueegeeImg,
            alt: "Precision squeegee for streak-free glass",
            title: "Precision Squeegees",
            description: "Professional-grade squeegees with replaceable rubber for streak-free finishes on every swipe.",
          },
          {
            image: clothImg,
            alt: "Lint-free window cleaning cloths",
            title: "Specialty Linen Detailing Cloths",
            description: "Perfect for frames, edges, and final touch-ups — leaves no lint, just shine.",
          },
          {
            image: PoleImg,
            alt: "Extension pole for indoor window access",
            title: "Compact Extension Poles",
            description: "Our lightweight, indoor-friendly poles reach high windows and skylights without leaning ladders on your walls or squeezing into tight corners.",
          },
        ],
      }}
      testimonialTag={['window', 'general']}
      faqItems={faqItems}
    />
    </>
  );
}
