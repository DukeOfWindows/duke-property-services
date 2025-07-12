import React from 'react';
import logo from '../images/logo.png'; 
import CTAButton from './CTAButton';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-off-white border-t border-gray-200 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-10 text-sm space-y-10 md:space-y-0">
        
        {/* Logo + CTA */}
        <div>
          <img
            src={logo}
            alt="Duke Property Services – Kapiti Coast Exterior Cleaning Logo"
            className="h-14 mb-4"
          />
          <CTAButton className="text-sm px-4 py-2" />
        </div>

        {/* Residential */}
        <div>
          <h4 className="text-duke-dark font-bold mb-2 border-b-2 border-duke-brown inline-block pb-1">Residential</h4>
          <ul className="space-y-1 text-duke-dark">
            <li><Link to="/residential-window-cleaning" className="hover:underline">Window Cleaning</Link></li>
            <li><Link to="/residential-gutter-cleaning" className="hover:underline">Gutter Cleaning</Link></li>
            <li><Link to="/residential-house-washing" className="hover:underline">House Washing</Link></li>
            <li><Link to="/residential-pressure-washing" className="hover:underline">Pressure Washing</Link></li>
            <li><Link to="/residential-interior-window-cleaning" className="hover:underline">Interior Window Cleaning</Link></li>
            <li><Link to="/residential-roof-treatment" className="hover:underline">Roof Treatment - Moss & Mould</Link></li>
            <li><Link to="/residential-driveway-cleaning" className="hover:underline">Driveway Cleaning</Link></li>
          </ul>
        </div>

        {/* Commercial */}
        <div>
          <h4 className="text-duke-dark font-bold mb-2 border-b-2 border-duke-brown inline-block pb-1">Commercial</h4>
          <ul className="space-y-1 text-duke-dark">
            <li><Link to="/commercial-window-cleaning" className="hover:underline">Window Cleaning</Link></li>
            <li><Link to="/commercial-building-washing" className="hover:underline">Building Washing</Link></li>
            <li><Link to="/commercial-pressure-washing" className="hover:underline">Pressure Washing</Link></li>
            <li><Link to="/commercial-gutter-cleaning" className="hover:underline">Gutter Cleaning</Link></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="text-duke-dark font-bold mb-2 border-b-2 border-duke-brown inline-block pb-1">About</h4>
          <ul className="space-y-1 text-duke-dark">
            <li><Link to="/about" className="hover:underline">Meet the Team</Link></li>
            <li><a href="/#testimonials" className="hover:underline">Testimonials</a></li>
            <li><a href="/contact#service-area" className="hover:underline">Service Area</a></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-duke-dark font-bold mb-2 border-b-2 border-duke-brown inline-block pb-1">Contact Us</h4>
          <ul className="space-y-1 text-gray-700">
            <li>
              Phone: <a href="tel:+64220352725" className="text-duke-blue">022 035 2725</a>
            </li>
            <li>
              Email: <a href="mailto:hello@dukeservices.co.nz" className="text-duke-blue">hello@dukeservices.co.nz</a>
            </li>
            <li className="mt-2">
              <a
                href="https://www.google.com/maps/place/Duke+Property+Services/@-40.9191098,174.8165732,10z/data=!3m1!4b1!4m6!3m5!1s0x6f37bb7b74372dfb:0x9565c5937ae20580!8m2!3d-40.9201!4d175.1468983!16s%2Fg%2F11kqx63zpc?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-duke-blue hover:underline"
              >
                ⭐ See us on Google
              </a>
            </li>
            <li className="flex space-x-4 mt-2">
              <a href="#" aria-label="Visit us on Facebook"><i className="fab fa-facebook text-duke-blue" /></a>
              <a href="#" aria-label="Visit us on Instagram"><i className="fab fa-instagram text-duke-blue" /></a>
              <a href="#" aria-label="Visit us on LinkedIn"><i className="fab fa-linkedin text-duke-blue" /></a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-200 text-center py-4 text-xs text-gray-600">
        <p>© {new Date().getFullYear()} Duke Property Services. All rights reserved.</p>
        <p className="mt-1">Built with care and a high-pressure hose on the Kapiti Coast.</p>
      </div>
    </footer>
  );
}
