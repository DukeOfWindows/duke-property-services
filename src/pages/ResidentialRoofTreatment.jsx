import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';
import ResidentialTemplate from './ResidentialTemplate';
import heroRoof from '../images/hero-roof.jpg';
import tallRoof from '../images/roof-square.jpg';
import ladderImg from '../images/tools/ladderRR.jpg';
import sprayImg from '../images/tools/sprayRR.jpg';
import hoseImg from '../images/tools/hoseRR.jpg';
import lichenIcon from '../images/icons/lichen.png';
import roofIcon from '../images/icons/roof.png';
import roofshieldIcon from '../images/icons/roof-shield.png';

export default function ResidentialRoofTreatment() {
  return (
    <>
    <HelmetSEO
  pageTitle="Roof Treatment Kapiti Coast | Duke Property Services"
  metaDescription="Safe, soft chemical roof treatments to kill moss, mould, and lichen without water blasting. Trusted roof care on the Kapiti Coast."
  canonicalUrl="https://dukepropertyservices.co.nz/residential-roof-treatment"
/>
    <ResidentialTemplate
      hero={{
        image: heroRoof,
        eyebrow: "Residential",
        title: "Roof Treatment - Moss & Mould",
        description: "Say goodbye to moss and lichen. Our moss & mould treatment keeps your roof protected — no water blasting needed.",
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
            <li><Link to="/residential-deck-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Deck Washing</span></Link></li>
            <li><Link to="/residential-driveway-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> <span className="text-duke-dark">Driveway Cleaning</span></Link></li>
          </ul>
        </div>
      }
      info={{
        image: tallRoof,
        heading: "Residential Roof Treatment",
        paragraphs: [
          "Roofs are moss magnets. Left untreated, growth can lift tiles, clog gutters, and cause water damage.",
          "Our gentle roof treatment kills moss, lichen, and mould at the root — no water blasting or structural risk.",
          "Application is safe, effective, and works gradually over weeks as the weather naturally removes debris.",
          "We work across the Kapiti Coast — including Paraparaumu, Waikanae, Raumati, and Otaki.",
          "Routine treatments help extend roof life, improve appearance, and avoid costly repairs down the track.",
        ],
        listItems: [
          "Low-pressure chemical application",
          "Effective on moss, lichen & mould",
          "Suitable for tile, iron, and Colorsteel",
          "Works naturally with rain over time",
          "Safe on solar panels and skylights",
        ],
      }}
      benefits={{
        heading: "What Roof Treatment Fixes",
        items: [
          {
            icon: roofIcon,
            text: "Looks after your roof for the long run — saving you from expensive repairs down the track",
          },
          {
            icon: lichenIcon,
            text: "Gently removes moss, lichen, and mould without damaging your roof — keeping it clean and cared for",
          },
          {
            icon: roofshieldIcon,
            text: "Helps prevent future leaks and moisture damage by clearing away harmful organic growth",
          },
        ],
      }}
      tools={{
        title: "Our Toolkit",
        subtitle: "Safe, Targeted, Long-Lasting",
        description: "Roof treatment isn’t about brute force — it’s about applying the right product the right way, from the right setup.",
        items: [
          {
            image: ladderImg,
            alt: "Ladder and safety gear for safe roof access",
            title: "Secure Ladder & Safety Gear",
            description: "Our advanced ladder systems and certified harnesses keep us safe while working on steep or multi-level roofs.",
          },
          {
            image: sprayImg,
            alt: "Biodegradable roof treatment spray",
            title: "BioShield Roof Treatment",
            description: "We apply a proven, biodegradable solution that kills lichen, moss, and mould — then nature rinses it away over time.",
          },
          {
            image: hoseImg,
            alt: "Hose reel system for high roof reach",
            title: "80m Hose Reel System",
            description: "Our high-reach hose reels let us treat roofs from a safe distance — perfect for tricky access or multi-storey homes.",
          },
        ],
      }}
      testimonialTag={['roof', 'general']}
    />
    </>
  );
}
