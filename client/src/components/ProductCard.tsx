import React from 'react';

type ProductProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  onAddToCart: (id: string) => void;
};

const ProductCard: React.FC<ProductProps> = ({ id, title, description, price, imageUrl, onAddToCart }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-green-600 font-bold">KSh {price}</span>
          <button
            className="px-4 py-1 bg-green-500 text-white text-sm rounded-md hover:bg-green-600"
            onClick={() => onAddToCart(id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
