import React from 'react';
import '../OurPartners.css';
import daffadudeLogo from '../images/logos/Daffadude Logo.png';
import dowLogo from '../images/logos/DoW Logo.png';
import happyAnchorLogo from '../images/logos/Happy Anchor Logo.png';
import sfLogo from '../images/logos/SF Logo.png';
import GTlogo from '../images/logos/GT Logo.png';
import TKlogo from '../images/logos/Toatakai.png';

const partnerLogos = [
  {
    src: daffadudeLogo,
    alt: 'The Daffadude Logo',
     link: 'https://dukeservices.co.nz',
  },
  {
    src: dowLogo,
    alt: 'Duke of Windows Hamilton Logo',
    link: 'https://dukeservices.co.nz',
  },
  {
    src: happyAnchorLogo,
    alt: 'Happy Anchor Marriages Logo',
    link: 'https://happyanchormarriages.co.nz/',
  },
  {
    src: sfLogo,
    alt: 'Sharalyn Fraser Agency Logo',
    link: 'https://www.sfagency.nz/',
  },
    {
    src: GTlogo,
    alt: 'Gleam Team Wanaka Logo',
    link: 'https://gleamteam.co.nz/home',
  },
    {
    src: TKlogo,
    alt: 'Toatakai Karate Hamilton Logo',
    link: 'https://www.toatakaikarate.co.nz/',
  },
];

export default function OurPartners() {
  return (
    <section className="our-partners-section">
      <div className="our-partners-container">
        <h2 className="our-partners-title">
        <strong>Our</strong><br /><strong>Partners</strong>
        </h2>

        <div className="logo-slider">
          <div
            className="logo-row"
            style={{ ['--item-count']: partnerLogos.length }}
          >
            {partnerLogos.map((logo, index) => (
              <div className="logo-container" key={index}>
                <div className="image-wrapper">
<a href={logo.link} target="_blank" rel="noopener noreferrer">
  <img
    src={logo.src}
    alt={logo.alt}
    loading="lazy"
    width="150"
    height="75"
    className="logo-image"
  />
</a>
                </div>
              </div>
            ))}
            {/* Duplicate logos for seamless animation */}
            {partnerLogos.map((logo, index) => (
              <div className="logo-container" key={`clone-${index}`}>
                <div className="image-wrapper">
<a href={logo.link} target="_blank" rel="noopener noreferrer">
  <img
    src={logo.src}
    alt={logo.alt}
    loading="lazy"
    width="150"
    height="75"
    className="logo-image"
  />
</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
