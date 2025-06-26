import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails: React.FC = () => {
  const { id } = useParams();
  // Fetch product by ID from backend here
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-6">
        <img src="/assets/food-placeholder.jpg" alt="Product" className="w-full rounded-lg" />
        <div>
          <h2 className="text-3xl font-semibold">Product Name</h2>
          <p className="text-gray-600 mt-2">Product description goes here.</p>
          <p className="text-green-600 font-bold text-xl mt-4">KSh 450</p>
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;