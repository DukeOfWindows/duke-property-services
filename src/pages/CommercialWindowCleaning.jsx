import React from 'react';
import { Helmet } from 'react-helmet';
import HelmetSEO from '../components/HelmetSEO';
import CommercialTemplate from './CommercialTemplate';
import heroComWindow from '../images/hero-comwindow.jpg';
import comwindowImg from '../images/comwindow-square.jpg';
import squeegeeImg from '../images/tools/comwindow-squeegee.jpg';
import poleImg from '../images/tools/comwindow-pole.jpg';
import purewaterImg from '../images/tools/comwindow-purewater.jpg';
import windowIcon from '../images/icons/window-dark.png';
import sunIcon from '../images/icons/sun-dark.png';
import houseIcon from '../images/icons/building-dark.png';

export default function CommercialWindowCleaning() {
  return (
    <>
    <HelmetSEO
  pageTitle="Commercial Window Cleaning Kapiti Coast | Duke Property Services"
  metaDescription="Keep your storefront or office looking sharp with professional commercial window cleaning in Kapiti. Interior and exterior glass, signage, and glass balustrades."
  canonicalUrl="https://dukepropertyservices.co.nz/commercial-window-cleaning"
/>
    <CommercialTemplate
      hero={{
        image: heroComWindow,
        eyebrow: "Commercial",
        title: "Window Cleaning",
        description: "Keep your business looking sharp with spotless, high-reach commercial window cleaning — tailored for coffee shacks, complexes, and everything in between."
      }}

      info={{
        image: comwindowImg,
        heading: "Commercial Window Cleaning",
        paragraphs: [
          "First impressions matter. Clean windows speak volumes about your business — and we’re here to make sure they shine.",
          "From local storefronts to multi-storey office buildings, our commercial window cleaning service uses advanced tools and techniques for sparkling results without the fuss.",
          "Our trained team works efficiently, safely, and discreetly — so you can get on with business while we handle the shine.",
          "We serve businesses across the Kapiti Coast including Waikanae, Paraparaumu, Otaki, and Pukerua Bay.",
        ],
        listItems: [
          "Pure water-fed pole system for up to 3 storeys",
          "Spot-free finish using deionised water",
          "Traditional internal window cleaning available",
          "Flexible scheduling to minimise disruption",
          "Full safety compliance for elevated work",
        ]
      }}

      benefits={{
        heading: "Why Clean Windows Matter for Business",
        items: [
          { icon: windowIcon, text: "Crystal-clear glass projects professionalism and pride" },
          { icon: sunIcon, text: "More natural light improves staff wellbeing and energy" },
          { icon: houseIcon, text: "Boosts street appeal and visibility for customers" },
        ]
      }}

      tools={{
        title: "our commercial-grade toolkit",
        subtitle: "Built for Efficiency, Reach, and Results",
        description: "Servicing commercial clients from Pukerua Bay to Levin — including Paraparaumu, Waikanae, Otaki, and more.",
        items: [
          {
            image: poleImg,
            title: 'Telescopic Water-Fed Poles',
            description: 'Easily reach upper-storey windows with our carbon-fibre pole system. No ladders, no scaffolding, no downtime.',
          },
          {
            image: purewaterImg,
            title: 'Pure Water System',
            description: 'Removes minerals and impurities for a streak-free dry. Ideal for external glass on commercial properties.',
          },
          {
            image: squeegeeImg,
            title: 'Traditional Internal Equipment',
            description: 'For interior jobs, our team uses pro-grade squeegees and detailing gear to make sure every pane is flawless.',
          },
        ]
      }}

      testimonialTag={['window', 'general']}
    />
    </>
  );
}
