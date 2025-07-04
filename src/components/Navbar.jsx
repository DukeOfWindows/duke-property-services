import React, { useState } from 'react';
import logo from '../images/logo.png';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import CTAButton from './CTAButton';

const Dropdown = ({ label, items, hoverColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="px-4 py-2 font-medium text-gray-700 hover:text-duke-brown relative">
        {label} <span className="ml-1">▼</span>
      </button>

      {isOpen && (
<div className="absolute left-0 top-full w-60 bg-white border rounded-md shadow-lg z-10">
          {items.map((item, index) => {
            const isInternal = item.href.startsWith('/');
            const LinkTag = isInternal ? Link : 'a';

            return (
              <LinkTag
                key={index}
                to={isInternal ? item.href : undefined}
                href={!isInternal ? item.href : undefined}
  className={`block px-4 py-2 text-sm text-black rounded-md transition-colors duration-200 ${
    hoverColor === 'duke-blue'
      ? 'hover:bg-duke-blue hover:text-off-white'
      : 'hover:bg-duke-dark hover:text-off-white'
  }`}
>
  <span className="mr-1">&gt;</span> {item.label}
</LinkTag>
            );
          })}
        </div>
      )}
    </div>
  );
};
const DropdownLinks = ({ items, hoverColor }) => (
  <ul className="space-y-2 mt-4">
    {items.map((item, i) => {
      const isInternal = item.href.startsWith('/');
      const Tag = isInternal ? Link : 'a';
      return (
        <li key={i}>
          <Tag
            to={isInternal ? item.href : undefined}
            href={!isInternal ? item.href : undefined}
className={`block text-lg font-medium ${
  hoverColor === 'duke-blue'
    ? 'text-duke-blue'
    : hoverColor === 'duke-brown'
    ? 'text-duke-brown'
    : 'text-duke-dark'
} hover:underline`}
          >
            {item.label}
          </Tag>
        </li>
      );
    })}
  </ul>
);
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClose = () => setMenuOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Duke Property Services logo" className="h-10" />
          </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Dropdown
            label="Residential"
            hoverColor="duke-blue"
            items={[
              { label: 'Window Cleaning', href: '/residential-window-cleaning' },
              { label: 'Gutter Cleaning', href: '/residential-gutter-cleaning' },
              { label: 'House Washing', href: '/residential-house-washing' },
              { label: 'Pressure Washing', href: '/residential-pressure-washing' },
              { label: 'Interior Window Cleaning', href: '/residential-interior-window-cleaning' },
              { label: 'Roof Treatment - Moss & Mould', href: '/residential-roof-treatment' },
              { label: 'Deck Washing', href: '/residential-deck-washing' },
              { label: 'Driveway Cleaning', href: '/residential-driveway-cleaning' },
            ]}
          />

          <Dropdown
            label="Commercial"
            hoverColor="duke-dark"
            items={[
              { label: 'Window Cleaning', href: '/commercial-window-cleaning' },
              { label: 'Building Washing', href: '/commercial-building-washing' },
              { label: 'Pressure Washing', href: '/commercial-pressure-washing' },
              { label: 'Gutter Cleaning', href: '/commercial-gutter-cleaning' },
            ]}
          />

          <Dropdown
            label="About"
            hoverColor="duke-brown"
            items={[
              { label: 'Meet the Team', href: '/about' },
              { label: 'Testimonials', href: '#testimonials' },
            ]}
          />
          <CTAButton href="/quote" />
        </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={handleClose}
        ></div>
      )}
{/* Slide-Out Drawer */}
<div
  className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 transition-transform duration-300 ${
    menuOpen ? 'translate-x-0' : 'translate-x-full'
  }`}
>
  {/* Header */}
  <div className="flex justify-between items-center px-4 py-4 border-b">
    <span className="font-bold text-lg text-duke">Menu</span>
    <button onClick={handleClose}>
      <XMarkIcon className="h-6 w-6" />
    </button>
  </div>

  {/* ✅ Scrollable Content Container */}
  <div className="h-[calc(100vh-4rem)] overflow-y-auto px-6 py-4">
    <div className="flex flex-col gap-3 justify-center">
      <CTAButton href="/quote" className="w-auto font-body">
        Request Quote
      </CTAButton>
      <a
        href="tel:+64220352725"
        className="inline-block px-6 py-3 bg-duke-dark text-white rounded-xl font-body text-sm shadow hover:bg-duke-blue transition-colors duration-200"
      >
        022 035 2725
      </a>
      <a
        href="mailto:hello@dukeservices.co.nz"
        className="inline-block px-6 py-3 bg-duke-dark text-white rounded-xl font-body text-sm shadow hover:bg-duke-blue transition-colors duration-200"
      >
        hello@dukeservices.co.nz
      </a>
    </div>

    <p className="uppercase text-sm font-bold text-gray-500 mt-6 mb-2">Residential</p>
    <DropdownLinks
      hoverColor="duke-blue"
      items={[
        { label: 'Window Cleaning', href: '/residential-window-cleaning' },
        { label: 'Gutter Cleaning', href: '/residential-gutter-cleaning' },
        { label: 'House Washing', href: '/residential-house-washing' },
        { label: 'Pressure Washing', href: '/residential-pressure-washing' },
        { label: 'Interior Window Cleaning', href: '/residential-interior-window-cleaning' },
        { label: 'Roof Treatment', href: '/residential-roof-treatment' },
        { label: 'Deck Washing', href: '/residential-deck-washing' },
        { label: 'Driveway Cleaning', href: '/residential-driveway-cleaning' },
      ]}
    />

    <p className="uppercase text-sm font-bold text-gray-500 mt-6 mb-2">Commercial</p>
    <DropdownLinks
      hoverColor="duke-dark"
      items={[
        { label: 'Window Cleaning', href: '/commercial-window-cleaning' },
        { label: 'Building Washing', href: '/commercial-building-washing' },
        { label: 'Pressure Washing', href: '/commercial-pressure-washing' },
        { label: 'Gutter Cleaning', href: '/commercial-gutter-cleaning' },
      ]}
    />

    <p className="uppercase text-sm font-bold text-gray-500 mt-6 mb-2">About</p>
    <DropdownLinks
      hoverColor="duke-brown"
      items={[
        { label: 'Meet the Team', href: '/about' },
        { label: 'Testimonials', href: '#testimonials' },
      ]}
    />
  </div>
</div>
    </>
  );
}
