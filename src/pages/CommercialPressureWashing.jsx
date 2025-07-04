import React from 'react';
import { Helmet } from 'react-helmet';
import HelmetSEO from '../components/HelmetSEO';
import CommercialTemplate from './CommercialTemplate';
import heroPressure from '../images/hero-compressure.jpg';
import pressuresquareImg from '../images/pressure-square.jpg'; 
import surfaceImg from '../images/tools/surfaceRP.jpg';
import lanceImg from '../images/tools/compressure-lance.jpg';
import tankImg from '../images/tools/tankRH.jpg';
import grimeIcon from '../images/icons/building-dark.png';
import slipIcon from '../images/icons/slip.png';
import buildingIcon from '../images/icons/building-dark.png';

export default function CommercialPressureWashing() {
  return (
    <>
    <HelmetSEO
  pageTitle="Commercial Pressure Washing Kapiti Coast | Duke Property Services"
  metaDescription="High-power pressure washing for commercial exteriors, pavements, entryways, and public-facing surfaces. Servicing businesses across the Kapiti Coast."
  canonicalUrl="https://dukepropertyservices.co.nz/commercial-pressure-washing"
/>
    <CommercialTemplate
      hero={{
        image: heroPressure,
        eyebrow: "Commercial",
        title: "Pressure Washing",
        description: "Keep your building, carpark, and public areas safe and sharp with professional-grade commercial pressure washing."
      }}

      info={{
        image: pressuresquareImg,
        heading: "Commercial Pressure Washing",
        paragraphs: [
          "Grime, algae, oil stains, and gum don’t just look bad — they make your business look neglected and can create slip hazards.",
          "Our high-powered commercial pressure washing service tackles it all: shopfronts, carparks, loading zones, signage, bins, and more.",
          "We clean outside business hours if needed and use surface cleaners to keep mess to a minimum.",
          "We proudly serve the entire Kapiti Coast region, including Paekakariki, Raumati, Paraparaumu, Waikanae, and Otaki.",
        ],
        listItems: [
          "Flat surface cleaning with rotary tools",
          "Degreasing for carparks and drive-throughs",
          "Chewing gum and stain removal",
          "Water flow controlled to protect surfaces",
          "After-hours service available on request",
        ]
      }}

      benefits={{
        heading: "Why Pressure Washing Matters for Business",
        items: [
          { icon: grimeIcon, text: "Removes unsightly buildup of grime, gum, oil & mould" },
          { icon: slipIcon, text: "Reduces slip hazards and safety risks" },
          { icon: buildingIcon, text: "Protects paint, concrete, and paving from deterioration" },
        ]
      }}

      tools={{
        title: "our commercial-grade toolkit",
        subtitle: "Power. Precision. Clean.",
        description: "We service businesses across Kapiti, from Otaki to Paekakariki — carparks, walkways, signage and more.",
        items: [
          {
            image: lanceImg,
            title: 'Jet Wash Lances',
            description: 'For walls, fences, signage, and bins — our variable pressure lances reach deep into textured surfaces.',
          },
          {
            image: surfaceImg,
            title: 'Commercial Surface Cleaner',
            description: 'Keeps pressure low and cleaning powerful. Perfect for flat areas like paths and carparks with no messy overspray.',
          },
          {
            image: tankImg,
            title: "Onboard Water Reservoir Tank and over 150m of hose",
            description: "With our tap-adaptable systems and onboard tanks, we can clean your commercial space even if water access is limited.",
          },
        ]
      }}

      testimonialTag={['pressure', 'general']}
    />
    </>
  );
}
