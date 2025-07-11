import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTAButton from '../components/CTAButton';
import TestimonialSlider from '../components/TestimonialSlider';
import testimonials from '../data/testimonialsData';
import WhatWeClean from '../components/WhatWeClean';

import heroAbout from '../images/hero-about.jpg';
import hoganImg from '../images/team-hogan.jpg';
import tylerImg from '../images/team-tyler.jpg';
import koaImg from '../images/team-koa.jpg';
import heartIcon from '../images/icons/heart.png';
import historyIcon from '../images/icons/history.png';
import targetIcon from '../images/icons/target.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Duke Property Services | Kapiti Coast Exterior Cleaning Team</title>
        <meta
          name="description"
          content="Meet the local experts behind Duke Property Services—Kapiti Coast's trusted name in window cleaning, house washing, and exterior care. Our story, our team, our mission."
        />
      </Helmet>

      <Navbar />

<section
  className="relative h-[60vh] bg-cover bg-bottom flex items-center text-white"
  style={{ backgroundImage: `url(${heroAbout})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-60"></div>

  <motion.div
    className="relative z-10 max-w-4xl mx-auto px-6 text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUp}
  >
    <h1 className="text-5xl font-heading font-bold mb-4">
      Meet the Team at Duke Property Services
    </h1>
    <p className="text-xl font-body">
      Where integrity, community, and elbow grease meet
    </p>
  </motion.div>
</section>

<main className="bg-white text-duke-dark py-16 px-6 max-w-7xl mx-auto space-y-20">
        {/* Origin Story */}
        <motion.section
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
          <h2 className="text-4xl font-cursive font-bold mb-4 inline-block relative after:block after:w-full after:h-[3px] after:bg-duke-brown after:mt-2">
            Our Origin Story
          </h2>
          <p className="text-lg font-body mb-4">
            Duke Property Services was founded when Hogan Gill noticed too many locals were either overpaying or being under-served by other exterior cleaning companies. With a ladder, a bucket, and a whole lot of hustle, Duke began with one goal: deliver high-quality, honest work that made a visible difference.
          </p>
          <p className="text-lg font-body">
            Since then, the team has grown — but the commitment to community and detail hasn't changed.
          </p>
        </motion.section>

{/* Meet the Team */}
<section className="grid md:grid-cols-3 gap-10">
  {[
    {
      name: 'Hogan',
      title: 'Founder',
      img: hoganImg,
      alt: 'Hogan Gill, Founder of Duke Property Services',
      desc: `Hogan was lucky enough to have a decades experienced uncle teach him everything he knows. Now he's been sprucing windows and properties for over seven years.\n\nWhen Hogan is not out cleaning windows you can find him working as a wedding coordinator, Celebrant & MC or tending to his 3.5 acres of daffodils.`,
    },
    {
      name: 'Tyler',
      title: 'Senior Technician',
      img: tylerImg,
      alt: 'Tyler from Duke Property Services',
      desc: `Tyler, the fastest blaster on the Kapiti Coast.\n\nHe knows his way around all things Exterior and can get your property looking sparkling without breaking a sweat.\n\nWhen Tyler is off the clock you can find him out on an epic 4WD adventure or making one mean cup of coffee!`,
    },
    {
      name: 'Koa',
      title: 'Human Resources',
      img: koaImg,
      alt: 'Koa the team dog',
      desc: `All round good girl Koa has been in HR for over 35 years (dog years). She’s available on site to keep any unruly hoses in check.\n\nOutside of work hours you can find her chasing rabbits, snoozing in the sun or carrying exorbitantly large pieces of driftwood along the beach.`,
    },
  ].map((member, i) => (
    <motion.div
      key={i}
      className="text-center px-4"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <img src={member.img} alt={member.alt} loading="lazy" className="rounded-xl shadow-lg mb-4" />
      <h3 className="text-3xl font-heading">{member.name}</h3>
      <p className="text-2xl font-body mb-2 inline-block relative after:block after:w-full after:h-[3px] after:bg-duke-brown after:mt-1">
        {member.title}
      </p>
      <p className="font-body whitespace-pre-line text-gray-800">{member.desc}</p>
    </motion.div>
  ))}
</section>
        </main>

        {/* Our Mission / Values */}
<section className="w-full bg-off-white grid md:grid-cols-3 gap-10 py-16 px-6">
  {[
    {
      icon: historyIcon,
      alt: 'Timeline showing growth',
      title: 'From One Ladder to Full Crews',
      text: 'What started as one-man-band work has become a full-service operation, now serving both homes and commercial clients across the Kapiti Coast and beyond.',
    },
    {
      icon: targetIcon,
      alt: 'Target representing mission',
      title: 'Our Mission',
      text: 'We’re here to raise the standard of exterior cleaning by delivering outstanding service with local pride.',
    },
    {
      icon: heartIcon,
      alt: 'Heart icon representing values',
      title: 'Our Values',
      text: 'Friendly. Professional. Caring. We treat every property like it’s our own — because that’s how we’d want to be treated.',
    },
  ].map((item, i) => (
    <div key={i} className="flex flex-col items-center text-duke-dark text-center px-4 py-8 bg-white shadow-md rounded-xl transition-transform hover:scale-[1.02]">
     <img src={item.icon} alt={item.alt} loading="lazy" className="w-14 h-14 mb-4" />
<h4 className="text-xl font-bold mb-3 inline-block relative after:block after:w-full after:h-[3px] after:bg-duke-brown after:mt-1">
  {item.title}
</h4>
<p className="font-body text-sm text-gray-800">{item.text}</p>
    </div>
  ))}
</section>

<div className="max-w-7xl mx-auto px-6 py-16 space-y-20">
  <WhatWeClean />
  <TestimonialSlider testimonials={testimonials} />
  <div className="text-center">
    <CTAButton href="/#quote">Request a Quote</CTAButton>
  </div>
</div>

      <Footer />
    </>
  );
}
