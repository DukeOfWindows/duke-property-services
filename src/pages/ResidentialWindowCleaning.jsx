import React from 'react';
import { Link } from 'react-router-dom';
import ResidentialTemplate from './ResidentialTemplate';
import HelmetSEO from '../components/HelmetSEO';
import heroWindow from '../images/hero-window.jpg'; 
import tallWindow from '../images/window-square.jpg'; 
import poleImg from '../images/tools/poleRW.jpg';
import squeegeeImg from '../images/tools/squeegeeRW.jpg';
import purewaterImg from '../images/tools/purewaterRW.jpg';
import windowIcon from '../images/icons/window.png';
import sunIcon from '../images/icons/sun.png';
import houseIcon from '../images/icons/house.png';

export default function ResidentialWindowCleaning() {
  return (
    <>
      <HelmetSEO
        pageTitle="Residential Window Cleaning Kapiti Coast | Duke Property Services"
        metaDescription="Need professional residential window cleaning on the Kapiti Coast? Duke Property Services provides reliable, streak-free window cleaning for homes in Paraparaumu, Waikanae, Raumati and beyond."
        canonicalUrl="https://dukepropertyservices.co.nz/residential-window-cleaning"
      />

      <ResidentialTemplate
        hero={{
          image: heroWindow,
          eyebrow: "Residential",
          title: "Window Cleaning",
          description: "Transform your windows from shabby to shiny with our interior and exterior window cleaning service."
        }}

        sidebar={
          <div className="mt-auto self-end bg-white text-duke-dark rounded-2xl shadow-lg p-6 w-full max-w-xs mb-6">
            <h3 className="font-heading text-3xl mb-4 inline-block relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-duke-brown after:rounded-full after:mt-1">
              Residential
            </h3>
            <ul className="space-y-2 font-body">
              <li><Link to="/residential-gutter-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> Gutter Cleaning</Link></li>
              <li><Link to="/residential-house-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> House Washing</Link></li>
              <li><Link to="/residential-pressure-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> Pressure Washing</Link></li>
              <li><Link to="/residential-interior-window-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> Interior Window Cleaning</Link></li>
              <li><Link to="/residential-roof-treatment" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> Roof Treatment - Moss & Mould</Link></li>
              <li><Link to="/residential-deck-washing" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> Deck Washing</Link></li>
              <li><Link to="/residential-driveway-cleaning" className="hover:underline"><span className="text-duke-brown mr-1">&gt;</span> Driveway Cleaning</Link></li>
            </ul>
          </div>
        }

        info={{
          image: tallWindow,
          heading: "Residential Window Cleaning",
          paragraphs: [
            "Part art, part science – getting a streak-free shine on your home's windows takes know-how, the right tools, and maybe even a ladder.",
            "The difference between amazing results and unmitigated disasters comes down to a lot of know-how and a little elbow grease. The team at Duke Property Services are armed with both.",
            "Their top-of-the-line tools and proprietary cleaning products, coupled with their knowledge in how to use them, help deliver spotless, streak-free results.",
            "Choosing a Duke clean from our Kapiti-based window cleaning team means opting for high-quality, long-lasting results.",
          ],
          listItems: [
            "External window washing with pure-water technology",
            "Internal window washing with traditional squeegee and mop system",
            "Cobweb removal from window frames",
            "Deck glass and balustrade washing",
            "Skylights and clerestory windows",
            "Track and sill cleaning",
            "Removal of stickers, paint & debris",
          ]
        }}

        benefits={{
          heading: "What Clean Windows Fix",
          items: [
            { icon: windowIcon, text: "Long-term protection against water stains, etching, and scratches" },
            { icon: sunIcon, text: "Lets more natural light into your home" },
            { icon: houseIcon, text: "Better-looking windows and increased street appeal" },
          ]
        }}

        tools={{
          title: "Our Toolkit",
          subtitle: "Tools of the Trade — Not Your Neighbour’s Hose",
          description:
            "We provide window cleaning services across the Kapiti Coast and beyond — including Levin, Ohau, Otaki, Otaki Beach, Te Horo, Peka Peka, Waikanae, Waikanae Beach, Paraparaumu, Paraparaumu Beach, Raumati, Raumati Beach, Paekakariki, Pukerua Bay, Plimmerton, and Whitby.",
          items: [
            {
              image: poleImg,
              alt: "Carbon fibre water-fed pole for exterior window washing",
              title: 'High-end Water Fed Poles',
              description: 'From tight garden accessways to three-storey homes, we’ve got a pole for every job. Our tallest carbon-fibre pole extends over 10 metres, letting us clean third-storey windows safely from the ground — no ladders or scaffolding needed.',
            },
            {
              image: squeegeeImg,
              alt: "Professional window squeegee and scrubber",
              title: 'Professional Squeegees & Scrubbers',
              description: 'On our belts: a full toolkit of commercial-grade squeegees, scrubbers, and detailing gear. In our hands: lightning-fast technique. We combine precision, speed, and elbow grease to leave every window crystal clear, inside and out.',
            },
            {
              image: purewaterImg,
              alt: "Pure water cleaning system equipment",
              title: 'Pure Water Cleaning System',
              description: 'Our deionised water system filters out all minerals and impurities — down to the microscopic level. The result? Spotless, streak-free windows that dry naturally without a single mark. No soaps, no chemicals — just science.',
            },
          ],
        }}

        testimonialTag={['window']}
      />
    </>
  );
}
