import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';

import ResidentialTemplate from './ResidentialTemplate';
import houseHero from '../images/hero-house.jpg';
import tallHouse from '../images/house-square.jpg';
import softwashImg from '../images/tools/softwashRH.jpg';
import brushImg from '../images/tools/brushRH.jpg';
import tankImg from '../images/tools/tankRH.jpg';
import panelIcon from '../images/icons/panel.png';
import houseIcon from '../images/icons/house.png';
import airIcon from '../images/icons/cleanAir.png';

export default function ResidentialHouseWashing() {

const faqItems = [
  {
    question: "How often should I get my house washed?",
    answer: (
      <>
        We recommend <strong>washing your house once a year</strong> to prevent grime, mould, and lichen from building up — especially on the shaded or south-facing sides.
      </>
    ),
  },
  {
    question: "Will house washing damage my paint or cladding?",
    answer: (
      <>
        Not with us. We use a <strong>low-pressure soft wash system</strong> that's safe on all exterior surfaces — including weatherboard, stucco, brick, and painted finishes.
      </>
    ),
  },
  {
    question: "Do I need to do anything to prepare?",
    answer: (
      <>
        Just <strong>close your windows, keep pets inside, and move any fragile outdoor items</strong>. We’ll take care of the rest — including taping vents and protecting outdoor lights.
      </>
    ),
  },
  {
    question: "What’s the difference between soft washing and water blasting?",
    answer: (
      <>
        Great question. <strong>Soft washing uses gentle pressure and biodegradable detergents</strong> to clean surfaces without stripping paint or damaging cladding. Water blasting is harsher — better suited for concrete and driveways.
      </>
    ),
  },
  {
    question: "Does house washing remove spider webs and mould?",
    answer: (
      <>
        <strong>Yes — that’s the point!</strong> Our wash lifts off dirt, green algae, black mould, and cobwebs to leave your home looking fresh and well-maintained.
      </>
    ),
  },
  {
  question: "What are your payment terms?",
  answer: (
    <>
      The job is <strong>invoiced and payment is due upon completion</strong>. You can pay by <strong>bank transfer, EFTPOS, or cash</strong> — whichever works best for you.
    </>
  ),
}
];

  return (
    <>
    <HelmetSEO
  pageTitle="House Washing Kapiti Coast | Duke Property Services"
  metaDescription="Restore the beauty of your home with gentle soft washing. Servicing Paraparaumu, Waikanae, Raumati, Otaki, and nearby areas."
  canonicalUrl="https://dukepropertyservices.co.nz/residential-house-washing"
/>
    <ResidentialTemplate
      hero={{
        image: houseHero,
        eyebrow: "Residential",
        title: "House Washing",
        description:
          "Gentle on surfaces, tough on grime. Our soft house washing service brings your home’s exterior back to life.",
       backgroundPosition: "center bottom"
        }}

      info={{
        image: tallHouse,
        heading: "Residential House Washing",
        paragraphs: [
          "Over time, dirt, algae, and pollutants cling to your home’s siding, dulling its appearance and shortening its lifespan.",
          "Our soft washing method lifts grime safely — without harsh pressure that can damage paint or wood.",
          "We treat every job with care, using eco-friendly detergents and low-pressure rinses to refresh your home’s exterior.",
          "Perfect for weatherboards, plaster, and brick surfaces. Let your house shine again.",
          "We service homes throughout Kapiti, including Paraparaumu, Raumati, Waikanae, and Otaki."
        ],
        listItems: [
          "Soft washing for weatherboard, plaster, and painted homes",
          "Algae and mold treatment",
          "Cobweb and grime removal",
          "Window and frame rinse-down",
          "Eco-friendly, safe cleaning agents",
        ],
      }}
      benefits={{
        heading: "Why Regular House Washing Matters",
        items: [
          {
            icon: panelIcon,
            text: "Protects your paintwork and panels from long-term wear, weathering, and surface deterioration",
          },
          {
            icon: houseIcon,
            text: "Boosts your home’s street appeal and can even raise its market value",
          },
          {
            icon: airIcon,
            text: "Improves air quality and reduces allergens by removing mold, mildew, and organic buildup",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Soft, Effective, Safe",
        description: "House washing is about finesse, not force. Our gear is selected to clean without damage.",
        items: [
          {
            image: softwashImg,
            alt: "Low-pressure soft washing equipment",
            title: "Low-Pressure Soft Washing",
            description: "We use low-pressure water systems and appropriate chemicals and techniques to safely remove grime, mould, and algae — no damage, just results.",
          },
          {
            image: brushImg,
            alt: "Soft bristle brush for gentle scrubbing",
            title: "Soft Bristle Brushes",
            description: "Perfect for scrubbing stubborn buildup from tricky cladding, trims, and frames without harming the surface underneath.",
          },
          {
            image: tankImg,
            alt: "Water tank and long hose system",
            title: "Onboard Tank & 150m Hose",
            description: "With our tap-adaptable systems and onboard tanks, we can clean your home even if water pressure and access is limited.",
          },
        ],
      }}
      testimonialTag={['house', 'general']}
        faqItems={faqItems}
    />
    </>
  );
}
