import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';
import ResidentialTemplate from './ResidentialTemplate';
import heroDriveway from '../images/hero-driveway.jpg';
import tallDriveway from '../images/driveway-square.jpg';
import surfacecleanerImg from '../images/tools/surfaceRP.jpg';
import wandImg from '../images/tools/pressuregunRP.jpg';
import tankImg from '../images/tools/tankRH.jpg';
import pressureIcon from '../images/icons/pressure.png';
import slipIcon from '../images/icons/slip.png';
import houseIcon from '../images/icons/house.png';

export default function ResidentialDrivewayCleaning() {
  return (
    <>
    <HelmetSEO
  pageTitle="Driveway Cleaning Kapiti Coast | Duke Property Services"
  metaDescription="Pressure wash away years of stains and moss from your concrete, asphalt, or pavers. Driveway cleaning across the Kapiti Coast."
  canonicalUrl="https://dukepropertyservices.co.nz/residential-driveway-cleaning"
/>

    <ResidentialTemplate
      hero={{
        image: heroDriveway,
        eyebrow: "Residential",
        title: "Driveway Cleaning",
        description: "Pressure wash years of grime, stains, and moss off your driveway — and boost your home’s curb appeal in the process.",
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
            <li><Link to="/residential-pressure-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Pressure Washing</span></Link></li>
            <li><Link to="/residential-interior-window-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Interior Window Cleaning</span></Link></li>
            <li><Link to="/residential-roof-treatment" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Roof Treatment - Moss & Mould</span></Link></li>
            <li><Link to="/residential-deck-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Deck Washing</span></Link></li>
          </ul>
        </div>
      }
      info={{
        image: tallDriveway,
        heading: "Residential Driveway Cleaning",
        paragraphs: [
          "Driveways often bear the brunt of mud, oil, moss, and tyre stains — but our surface cleaning can bring them back to life.",
          "We use professional-grade pressure washers and surface cleaners to remove grime safely and evenly.",
          "Whether it’s concrete, asphalt, or paving stones, we tailor the pressure and product to protect the surface.",
          "Your driveway is the first thing visitors see — let’s make it sparkle.",
          "We service all of Kapiti Coast including Paraparaumu, Waikanae, Raumati, and Otaki."
        ],
        listItems: [
          "Concrete, asphalt, and paver-safe cleaning",
          "Moss, algae, and lichen removal",
          "Grease and oil stain pre-treatment",
          "Surface cleaners for even results",
        ],
      }}
      benefits={{
        heading: "What Driveway Cleaning Solves",
        items: [
          {
            icon: pressureIcon,
            text: "Removes years of built-up dirt, grime, and moss from concrete, pavers, and asphalt surfaces",
          },
          {
            icon: slipIcon,
            text: "Improves safety by clearing slippery spots caused by algae, oil, or organic build-up",
          },
          {
            icon: houseIcon,
            text: "Boosts street appeal and gives your home a fresher, well-maintained look",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Powerful, Even, and Deep-Cleaning",
        description: "Driveways take a beating from cars, weather, and time. Our gear cuts through stains and buildup without damaging the surface underneath.",
        items: [
          {
            image: surfacecleanerImg,
            alt: "Rotary surface cleaner for driveways",
            title: "Rotary Surface Cleaner",
            description: "A spinning arm evenly applies pressure across concrete and paving — faster and cleaner than a wand alone.",
          },
          {
            image: tankImg,
            alt: "Water tank and hose setup for pressure washing",
            title: "Onboard Tank & 150m Hose",
            description: "With our tap-adaptable systems and onboard tanks, we can clean your home even if water pressure and access is limited.",
          },
          {
            image: wandImg,
            alt: "Pressure wand used for detailing",
            title: "Detailing Wand",
            description: "Perfect for cleaning edges, expansion joints, and awkward corners where surface cleaners can’t reach.",
          },
        ],
      }}
      testimonialTag={['pressure', 'general']}
    />
    </>
  );
}
