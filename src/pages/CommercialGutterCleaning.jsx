import React from 'react';
import { Helmet } from 'react-helmet';
import HelmetSEO from '../components/HelmetSEO';
import CommercialTemplate from './CommercialTemplate';
import heroGutter from '../images/hero-comgutter.jpg';
import gutterImg from '../images/comgutter-square1.jpg';
import softwashImg from '../images/tools/comgutter-softwash.jpg';
import ladderImg from '../images/tools/comgutter-ladder.jpg';
import harnessImg from '../images/tools/harness.jpg';
import leafIcon from '../images/icons/gutter-dark.png';
import floodIcon from '../images/icons/gutter-dark.png';
import buildingIcon from '../images/icons/building-dark.png';

export default function CommercialGutterCleaning() {
  return (
    <>
<HelmetSEO
  pageTitle="Commercial Gutter Cleaning Kapiti Coast | Duke Property Services"
  metaDescription="Professional commercial gutter cleaning for schools, factories, and offices across Kapiti Coast. Safe, compliant, and high-reach vacuum systems — servicing Paraparaumu, Waikanae, Otaki, Levin and more."
  canonicalUrl="https://dukepropertyservices.co.nz/commercial-gutter-cleaning"
/>

      <CommercialTemplate
        hero={{
          image: heroGutter,
          eyebrow: 'Commercial',
          title: 'Gutter Cleaning',
          description:
            'Avoid costly water damage and keep your commercial property draining properly with our safe, high-reach gutter cleaning service.',
        }}

        info={{
          image: gutterImg,
          heading: 'Commercial Gutter Cleaning',
          paragraphs: [
            'Blocked gutters don’t just look bad — they put your building at risk. Overflow can damage roofs, cladding, paths, and even foundations.',
            'Our commercial gutter cleaning service uses high-reach vacuum systems and live video monitoring to safely remove debris without the need for scaffolding.',
            'We clean gutters of all shapes and sizes — for factories, office blocks, schools, retail stores and more across Paraparaumu, Waikanae, Otaki, and Levin.',
          ],
          listItems: [
            'High-reach vacuum cleaning up to 3 storeys',
            'Live camera inspection for complete visibility',
            'Minimal disruption to daily operations',
            'Full health & safety compliance',
            'Scheduled maintenance plans available',
          ],
        }}

        benefits={{
          heading: 'Why Clean Gutters Matter for Business',
          items: [
            { icon: floodIcon, text: 'Prevents water damage to roofs, walls & foundations' },
            { icon: leafIcon, text: 'Reduces pest attraction and organic buildup' },
            { icon: buildingIcon, text: 'Maintains building compliance and appearance' },
          ],
        }}

        tools={{
          title: 'our commercial-grade toolkit',
          subtitle: 'Tools Built for Safety, Height & Precision',
          description:
            'Serving commercial clients from Pukerua Bay to Levin, including Otaki, Waikanae, Paraparaumu and surrounding areas.',
          items: [
            {
              image: ladderImg,
              title: 'Extended Ladder Systems',
              description:
                'Our range of secure, adjustable ladders — including setups that reach up to 9 metres — ensure we can access even the tallest gutters safely.',
            },
            {
              image: harnessImg,
              title: 'Comprehensive Working-From-Heights Safety Gear',
              description:
                'For buildings that can’t be reached with poles, we use platform ladders and certified harness setups to keep our team (and your property) safe.',
            },
            {
              image: softwashImg,
              title: 'Soft Wash Flushing',
              description:
                'Our gentle water blasters clear out moss, leaves, and grime without damaging your gutters or paintwork.',
            },
          ],
        }}

        testimonialTag={['pressure', 'general']}
      />
    </>
  );
}
