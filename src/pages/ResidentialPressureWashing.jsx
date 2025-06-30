import React from 'react';
import { Link } from 'react-router-dom';
import ResidentialTemplate from './ResidentialTemplate';
import HelmetSEO from '../components/HelmetSEO';

import pressureHero from '../images/hero-pressure.jpg';
import tallPressure from '../images/pressure-square.jpg';
import pressureGunImg from '../images/tools/pressuregunRP.jpg';
import surfaceCleanerImg from '../images/tools/surfaceRP.jpg';
import fanImg from '../images/tools/fanRP.jpg';
import grimeIcon from '../images/icons/pressure.png';
import slipIcon from '../images/icons/slip.png';
import patioIcon from '../images/icons/house.png';

export default function ResidentialPressureWashing() {
  return (
    <>
    <HelmetSEO
  pageTitle="Pressure Washing Kapiti Coast | Duke Property Services"
  metaDescription="Blast away moss, grime, and dirt from patios, driveways, and paths with our precision pressure washing. Serving the Kapiti Coast."
  canonicalUrl="https://dukepropertyservices.co.nz/residential-pressure-washing"
/>

    <ResidentialTemplate
      hero={{
        image: pressureHero,
        eyebrow: "Residential",
        title: "Pressure Washing",
        description:
          "Blast away years of grime with our professional high-pressure washing for driveways, concrete, pavers, and more.",
      }}
      sidebar={
        <div className="mt-auto self-end bg-white text-duke-dark rounded-2xl shadow-lg p-6 w-full max-w-xs mb-6">
          <h3 className="font-heading text-3xl mb-4 inline-block relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-duke-brown after:rounded-full after:mt-1">
            Residential
          </h3>
          <ul className="space-y-2 font-body">
            <li><Link to="/residential-window-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Window Cleaning</span></Link></li>
            <li><Link to="/residential-gutter-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Gutter Cleaning</span></Link></li>
            <li><Link to="/residential-house-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">House Washing</span></Link></li>
            <li><Link to="/residential-interior-window-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Interior Window Cleaning</span></Link></li>
            <li><Link to="/residential-roof-treatment" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Roof Treatment - Moss & Mould</span></Link></li>
            <li><Link to="/residential-deck-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Deck Washing</span></Link></li>
            <li><Link to="/residential-driveway-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Driveway Cleaning</span></Link></li>
          </ul>
        </div>
      }
      info={{
        image: tallPressure,
        heading: "Residential Pressure Washing",
        paragraphs: [
          "Your hard surfaces take a beating — moss, oil, grime, and age can turn paths and patios into slippery eyesores.",
          "Our pressure washing restores surfaces to their original glory without damage.",
          "We adjust pressure and nozzles depending on the surface — from delicate pavers to stubborn stains.",
          "Available in Paraparaumu, Waikanae, Raumati, Otaki, and throughout the Kapiti Coast.",
          "We clean, you relax — and enjoy a fresh new look outside.",
        ],
        listItems: [
          "Driveways, paths, and patios",
          "Pavers, brick, concrete, and tiles",
          "Moss, algae, lichen, and grime removal",
          "Oil stain treatment and degreasing",
          "Fence and retaining wall refresh",
        ],
      }}
      benefits={{
        heading: "What Pressure Washing Solves",
        items: [
          {
            icon: grimeIcon,
            text: "Removes years of built-up grime, stubborn stains, and weathered dirt from driveways, paths, and garden walls",
          },
          {
            icon: slipIcon,
            text: "Eliminates slippery moss and algae from walkways, steps, and patios to keep your family safe",
          },
          {
            icon: patioIcon,
            text: "Restores outdoor living areas like decks, fences, and patios — boosting both comfort and street appeal",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Precision Pressure, Powerful Results",
        description: "Every surface is different. That’s why we use the right pressure, attachments, and techniques for the job — all without causing damage.",
        items: [
          {
            image: pressureGunImg,
            alt: "Pressure washing gun with adjustable settings",
            title: "Variable Pressure Systems",
            description: "From concrete to decking, we adjust the water pressure to match the surface — tough on grime, safe on structure.",
          },
          {
            image: surfaceCleanerImg,
            alt: "Rotary surface cleaner for flat surfaces",
            title: "Rotary Surface Cleaners",
            description: "Evenly distributes pressure across large flat areas like driveways and patios, reducing streaks and improving efficiency.",
          },
          {
            image: fanImg,
            alt: "Fan and turbo pressure nozzles",
            title: "Turbo & Fan Nozzles",
            description: "Specialty nozzles for different cleaning intensities — ideal for edging, deep stains, and tight corners and tricky spots.",
          },
        ],
      }}
      testimonialTag={['pressure', 'general']}
    />
    </>
  );
}
