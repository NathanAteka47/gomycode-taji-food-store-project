import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  { id: '1', title: 'Beef Pilau', description: 'Spiced rice with beef.', price: 450, imageUrl: '/assets/beef-pilau.jpg' },
  { id: '2', title: 'Chicken Stew', description: 'Tasty chicken with ugali.', price: 500, imageUrl: '/assets/chicken-stew.jpg' }
];

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <section className="py-10 px-6">
        <h2 className="text-2xl font-bold mb-6">Featured Dishes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleProducts.map(product => (
            <ProductCard key={product.id} {...product} onAddToCart={() => {}} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;