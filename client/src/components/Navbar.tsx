import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-green-600">
          Taji Food Store
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <FiShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </Link>
          <Link to="/login" className="hidden md:inline-block px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Login</Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-2xl">
            {mobileOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <li><Link to="/" onClick={() => setMobileOpen(false)}>Home</Link></li>
          <li><Link to="/menu" onClick={() => setMobileOpen(false)}>Menu</Link></li>
          <li><Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link></li>
          <li><Link to="/login" onClick={() => setMobileOpen(false)} className="block w-full px-4 py-2 bg-green-500 text-white rounded-md text-center">Login</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;