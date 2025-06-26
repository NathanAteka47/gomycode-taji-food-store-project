import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-green-600 text-white py-20 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Taji Eats. Keki na Taji. Taji Water.
          </h1>
          <p className="mt-4 text-lg">
            Discover delicious Kenyan meals and sweet treats delivered to your doorstep from Bungoma or Kisumu!
          </p>
          <div className="mt-6">
            <Link to="/menu" className="inline-block bg-white text-green-600 px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition">
              View Menu
            </Link>
          </div>
        </div>

        {/* Right Image or Illustration */}
        <div className="md:w-1/2">
          <img
            src="/hero-food.jpg" // Replace with your actual image
            alt="Delicious food"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Optional: Decorative Blobs or Gradients */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;
