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
            'Let us freshen up your building with minimal disruption and long-term results. We service Paraparaumu, Waikanae, Otaki, and surrounding Kapiti Coast areas.',
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
      />
    </>
  );
}
