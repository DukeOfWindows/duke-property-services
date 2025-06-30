import React from 'react';
import { Link } from 'react-router-dom';
import HelmetSEO from '../components/HelmetSEO';
import ResidentialTemplate from './ResidentialTemplate';
import heroDeck from '../images/hero-deck.jpg';
import tallDeck from '../images/deck-square.jpg';
import deckbrushImg from '../images/tools/deckbrush.jpg';
import deckpressureImg from '../images/tools/deckpressure.jpg';
import decksafeImg from '../images/tools/decksafe.jpg';
import slipIcon from '../images/icons/slip.png';
import lichenIcon from '../images/icons/lichen.png';
import sunIcon from '../images/icons/sun.png';

export default function ResidentialDeckWashing() {
  return (
    <>
    <HelmetSEO
  pageTitle="Deck Cleaning Kapiti Coast | Duke Property Services"
  metaDescription="Revive slippery or weathered timber with our expert deck washing. Serving Waikanae, Paraparaumu, Raumati and surrounding areas."
  canonicalUrl="https://dukepropertyservices.co.nz/residential-deck-washing"
/>
    <ResidentialTemplate
      hero={{
        image: heroDeck,
        eyebrow: "Residential",
        title: "Deck Washing",
        description: "Revive your outdoor living space with our soft-wash deck cleaning service — safe on wood, tough on grime.",
      }}

      sidebar={
        <div className="mt-auto self-end bg-white text-duke-dark rounded-2xl shadow-lg p-6 w-full max-w-xs mb-6">
          <h3 className="font-heading text-3xl mb-4 inline-block relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-duke-brown after:rounded-full after:mt-1">
            Residential
          </h3>
          <ul className="space-y-2 font-body">
            <li><Link to="/residential-window-cleaning" className="hover:underline text-duke-dark">Window Cleaning</Link></li>
            <li><Link to="/residential-gutter-cleaning" className="hover:underline text-duke-dark">Gutter Cleaning</Link></li>
            <li><Link to="/residential-house-washing" className="hover:underline text-duke-dark">House Washing</Link></li>
            <li><Link to="/residential-pressure-washing" className="hover:underline text-duke-dark">Pressure Washing</Link></li>
            <li><Link to="/residential-interior-window-cleaning" className="hover:underline text-duke-dark">Interior Window Cleaning</Link></li>
            <li><Link to="/residential-roof-treatment" className="hover:underline text-duke-dark">Roof Treatment - Moss & Mould</Link></li>
            <li><Link to="/residential-driveway-cleaning" className="hover:underline text-duke-dark">Driveway Cleaning</Link></li>
          </ul>
        </div>
      }

      info={{
        image: tallDeck,
        heading: "Residential Deck Washing",
        paragraphs: [
          "Decks can become slippery, stained, and unsightly over time — especially in shaded, coastal, or damp areas common on the Kapiti Coast.",
          "Our soft-wash deck cleaning method gently lifts dirt and organic build-up without damaging timber or composite materials.",
          "We adjust water pressure, temperature, and eco-friendly detergents to suit your surface — giving you safe, long-lasting results.",
          "A clean deck not only looks great — it’s safer to walk on, better for entertaining, and protects your investment over time.",
        ],
        listItems: [
          "Soft-wash for timber & composite decking",
          "Mould, moss, lichen & algae removal",
          "Anti-slip surface treatment options",
          "Balustrade, step and edge detailing",
          "Safe for stained, painted, or sealed wood",
        ],
      }}

      benefits={{
        heading: "What a Deck Wash Sorts",
        items: [
          {
            icon: lichenIcon,
            text: "Gets rid of moss, grime, and slippery build-up to keep your deck safe and usable year-round",
          },
          {
            icon: sunIcon,
            text: "Prepares your deck for oiling or staining, and helps it last longer through all seasons",
          },
          {
            icon: slipIcon,
            text: "Makes the deck safer for kids, pets, and bare feet — no more green, greasy timber underfoot",
          },
        ],
      }}

      tools={{
        title: "Our Toolkit",
        subtitle: "Gentle on Timber, Tough on Grime",
        description: "Decks need careful cleaning — too much pressure and you raise the grain, too little and you leave it slippery. We strike the perfect balance.",
        items: [
          {
            image: deckpressureImg,
            title: "Adjustable Pressure Nozzles",
            description: "We fine-tune the pressure to suit timber — removing moss and grime without damaging the surface.",
          },
          {
            image: decksafeImg,
            title: "Wood-Safe Cleaning Solutions",
            description: "We use biodegradable products that lift organic material and brighten timber — no harsh chemicals or bleach.",
          },
          {
            image: deckbrushImg,
            title: "Deck-Specific Scrub Brushes",
            description: "For corners, joins, and stubborn patches — ideal for timber slats and surface buildup.",
          },
        ],
      }}

      testimonialTag={['pressure', 'general']}
    />
    </>
  );
}
