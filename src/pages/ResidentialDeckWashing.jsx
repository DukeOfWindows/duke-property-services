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
 
  const faqItems = [
  {
    question: "What kind of decks can you clean?",
    answer: (
      <>
        We clean all sorts — <strong>pine, kwila, composite, hardwoods, and even painted or stained decks</strong>. We adjust our pressure and method depending on the surface.
      </>
    ),
  },
  {
    question: "Will it strip my stain or paint?",
    answer: (
      <>
        Not if we can help it. We use a <strong>low-to-medium pressure setting</strong> and work with the grain to avoid damage. If the stain is already flaking, it may come up — we’ll let you know before we start.
      </>
    ),
  },
  {
    question: "Is it slippery afterward?",
    answer: (
      <>
        Nope — it’s the opposite! <strong>We remove slippery mould, grime, and algae</strong> that can make decks hazardous in winter. You’ll get better grip and a safer outdoor space.
      </>
    ),
  },
  {
    question: "Do you treat mould or just wash it off?",
    answer: (
      <>
        Both. We apply a <strong>deck-safe mould treatment first</strong>, then rinse it clean. This helps keep your deck looking good for longer and slows regrowth.
      </>
    ),
  },
  {
    question: "How long before I can use the deck again?",
    answer: (
      <>
        It’ll be dry in a few hours, depending on the weather — but <strong>you can walk on it as soon as we’re done</strong>. Just watch your step if it’s still damp.
      </>
    ),
  },
];

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
        faqItems={faqItems}
    />
    </>
  );
}
