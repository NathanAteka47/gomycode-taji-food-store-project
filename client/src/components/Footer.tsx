import React from 'react';
import { FaFacebook, FaInstagram, FaXTwitter, FaTiktok, FaWhatsapp } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-green-600">Taji Food Store</h2>
          <p className="mt-2 text-sm">
            Delicious meals made with love and delivered with care.
            Visit us in Bungoma or Kisumu!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-3">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://www.facebook.com/share/19SeL4ZVPT/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com/tajithreeinone" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://x.com/tajieats" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
            <a href="https://tiktok.com/@tajithreeinone" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            <a href="https://wa.me/254713195195" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-semibold mb-3">Locations</h4>
          <p className="text-sm">📍 Bungoma Branch</p>
          <p className="text-sm">📍 Kisumu Branch</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 bg-gray-200 text-sm">
        © {new Date().getFullYear()} Taji Food Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
