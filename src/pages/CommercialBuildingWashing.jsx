import React from 'react';
import { Helmet } from 'react-helmet';
import HelmetSEO from '../components/HelmetSEO';
import CommercialTemplate from './CommercialTemplate';
import heroBuilding from '../images/hero-combuilding.jpg';
import washBuilding from '../images/tools/combuilding-softwash.jpg';
import softwashImg from '../images/combuilding-square.jpg';
import brushImg from '../images/tools/comwindow-pole.jpg';
import tankImg from '../images/tools/tankRH.jpg';
import grimeIcon from '../images/icons/building-dark.png';
import buildingIcon from '../images/icons/building-dark.png';
import airIcon from '../images/icons/cleanAir.png';

export default function CommercialBuildingWashing() {
 const faqItems = [
  {
    question: "What types of buildings do you wash?",
    answer: (
      <>
        We wash <strong>offices, retail storefronts, apartment buildings, warehouses, schools, churches, and more</strong>. From tilt-slab to weatherboard, we’ve got you covered.
      </>
    ),
  },
  {
    question: "Do you use soft wash or water blasting?",
    answer: (
      <>
        Both — depending on the surface. <strong>Most building exteriors are cleaned with a soft wash method</strong> using low pressure and appropriate chemicals. For harder surfaces like concrete, we’ll crank up the pressure where needed.
      </>
    ),
  },
  {
    question: "How often should a commercial building be washed?",
    answer: (
      <>
        That depends on your location and building type — but generally, we recommend <strong>an annual or 6-monthly clean</strong> to prevent build-up and keep things looking sharp.
      </>
    ),
  },
  {
    question: "Do you provide quotes and site assessments?",
    answer: (
      <>
        <strong>Always.</strong> We’re happy to assess the building, talk through your needs, and provide a no-obligation quote with timing, safety plans, and optional add-ons.
      </>
    ),
  },
    {
    question: "Are your team trained and insured?",
    answer: (
      <>
        <strong>100%</strong>. Our crew is trained in commercial site safety, insured for peace of mind, and familiar with working in high-traffic or shared spaces.
      </>
    ),
  },
  {
  question: "What are your payment terms?",
  answer: (
    <>
      <strong>Payment is due upon completion</strong> unless other arrangements have been made in advance. We offer flexible payment options for commercial clients where needed.
    </>
  ),
}
];

 
 return (
<>
  <HelmetSEO
    pageTitle="Commercial Building Washing Kapiti Coast | Duke Property Services"
    metaDescription="Exterior soft washing for commercial buildings across the Kapiti Coast. Safe for signage, plaster, and painted cladding. Serving Paraparaumu, Waikanae, Otaki and more."
    canonicalUrl="https://dukepropertyservices.co.nz/commercial-building-washing"
  />
      <CommercialTemplate
        hero={{
          image: heroBuilding,
          eyebrow: 'Commercial',
          title: 'Building Washing',
          description:
            "Restore your building's exterior with low-pressure soft washing — safe for signage, paintwork, panels and cladding.",
        }}

        info={{
          image: washBuilding,
          heading: 'Commercial Building Washing',
          paragraphs: [
            'Algae, mould, and airborne grime can build up quickly — especially on coastal buildings, painted surfaces, and shaded cladding.',
            'We use a gentle soft wash system designed for commercial properties. It’s safe on paint, panels, signage, and plaster exteriors — and it lasts.',
            'Let us freshen up your building with minimal disruption and long-term results. We service Newlands, Porirua, Paraparaumu, Waikanae, Levin, and everywhere in between',
          ],
          listItems: [
            'Low-pressure soft wash for walls and cladding',
            'Biodegradable cleaning solutions safe on paint & signage',
            'Ideal for office buildings, schools, medical centres & retail',
            'No ladders or scaffolding required in most cases',
            'Scheduled annual cleaning options available',
          ],
        }}

        benefits={{
          heading: 'Why Building Washing Matters',
          items: [
            { icon: grimeIcon, text: 'Prevents long-term staining and paint damage' },
            { icon: buildingIcon, text: 'Keeps your premises looking clean, modern and maintained' },
            { icon: airIcon, text: 'Improves air quality by removing mould and spores from surfaces' },
          ],
        }}

        tools={{
          title: 'our commercial-grade toolkit',
          subtitle: 'Purpose-Built for Big Jobs and Delicate Surfaces',
          description:
            'We provide building washing services across Kapiti, including Paraparaumu, Waikanae, Otaki, Peka Peka and more.',
          items: [
            {
              image: softwashImg,
              title: 'Soft Wash System',
              description:
                'Applies low-pressure cleaning solution evenly across large wall surfaces — gently lifting dirt, mould and algae without damage.',
            },
            {
              image: brushImg,
              title: 'Extendable Soft Brushes',
              description:
                'Used for signage, high-traffic touch points and fragile areas. Keeps everything looking clean without scuffing.',
            },
            {
              image: tankImg,
              title: 'Onboard Water Reservoir Tank and over 150m of hose',
              description:
                'With our tap-adaptable systems and onboard tanks, we can clean your property even if water pressure or access is limited.',
            },
          ],
        }}
      testimonialTag={['pressure', 'general']}
      faqItems={faqItems}
      />
    </>
  );
}
