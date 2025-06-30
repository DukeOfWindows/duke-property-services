import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';

import ResidentialTemplate from './ResidentialTemplate';
import gutterHero from '../images/hero-gutter.jpg';
import tallGutter from '../images/gutter-square.jpg';
import ladderImg from '../images/tools/ladderRG.jpg';
import harnessImg from '../images/tools/harnessRG.jpg';
import softwashImg from '../images/tools/softwashRG.jpg';
import foundationIcon from '../images/icons/foundation.png';
import shieldIcon from '../images/icons/shield.png';
import gutterpest from '../images/icons/gutter-pest.png';

export default function ResidentialGutterCleaning() {
  return (
    <>
    <HelmetSEO
  pageTitle="Gutter Cleaning Kapiti Coast | Duke Property Services"
  metaDescription="Prevent water damage and protect your home with professional gutter cleaning in Paraparaumu, Waikanae, Raumati, and across the Kapiti Coast."
  canonicalUrl="https://dukepropertyservices.co.nz/residential-gutter-cleaning"
/>
    <ResidentialTemplate
      hero={{
        image: gutterHero,
        eyebrow: "Residential",
        title: "Gutter Cleaning",
        description: "Protect your home from water damage with our thorough residential gutter cleaning service.",
      }}
      sidebar={
        <div className="mt-auto self-end bg-white text-duke-dark rounded-2xl shadow-lg p-6 w-full max-w-xs mb-6">
          <h3 className="font-heading text-3xl mb-4 inline-block relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-duke-brown after:rounded-full after:mt-1">
            Residential
          </h3>
          <ul className="space-y-2 font-body">
            <li><Link to="/residential-window-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Window Cleaning</span></Link></li>
            <li><Link to="/residential-house-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">House Washing</span></Link></li>
            <li><Link to="/residential-pressure-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Pressure Washing</span></Link></li>
            <li><Link to="/residential-interior-window-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Interior Window Cleaning</span></Link></li>
            <li><Link to="/residential-roof-treatment" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Roof Treatment - Moss & Mould</span></Link></li>
            <li><Link to="/residential-deck-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Deck Washing</span></Link></li>
            <li><Link to="/residential-driveway-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Driveway Cleaning</span></Link></li>
          </ul>
        </div>
      }
      info={{
        image: tallGutter,
        heading: "Residential Gutter Cleaning",
        paragraphs: [
          "Clogged gutters can cause leaks, mold, and serious water damage to your home.",
          "Our expert team clears out leaves, moss, and debris by hand — then flushes the system to ensure water flows freely.",
          "With regular maintenance, you protect your roofline, prevent overflow, and avoid expensive repairs.",
          "We service homes throughout Kapiti — including Paraparaumu, Waikanae, Raumati, and Otaki.",
          "Let Duke take care of the dirty work so you don't have to climb a ladder again.",
        ],
        listItems: [
          "Hand-removal of debris and moss",
          "Downpipe inspection and flush",
          "Minor blockage removal",
          "Before & after photo reporting",
        ],
      }}
      benefits={{
        heading: "What Clean Gutters Solve",
        items: [
          {
            icon: foundationIcon,
            text: "Stops water pooling that can damage your roof, fascia, soffits, and even your home’s foundation",
          },
          {
            icon: shieldIcon,
            text: "Prevents mold, rot, and algae growth caused by damp, overflowing gutters",
          },
          {
            icon: gutterpest,
            text: "Keeps pests, mosquitoes, and rodents from nesting in built-up gutter debris",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Purpose-Built Gear for a Messy Job",
        description: "We come ready to tackle tough blockages and hard-to-reach gutters safely.",
        items: [
          {
            image: ladderImg,
            alt: "Tall ladder setup for gutter access",
            title: "Extended Ladder Systems",
            description: "Our range of secure, adjustable ladders — including setups that reach up to 9 metres — ensure we can access even the tallest gutters safely.",
          },
          {
            image: harnessImg,
            alt: "Harness and safety gear for roof work",
            title: "Comprehensive Safety Gear",
            description: "We use certified working-at-heights equipment for all jobs at heights, keeping our crew safe and your property protected.",
          },
          {
            image: softwashImg,
            alt: "Soft wash system for flushing gutters",
            title: "Soft Wash Flushing",
            description: "Our gentle water blasters clear out moss, leaves, and grime without damaging your gutters or paintwork.",
          },
        ],
      }}
      testimonialTag={['gutter', 'general']}
    />
    </>
  );
}
