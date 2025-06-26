import React from 'react';

type CartItemProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, quantity: number) => void;
};

const CartItem: React.FC<CartItemProps> = ({ id, name, price, quantity, imageUrl, onRemove, onUpdateQuantity }) => {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <img src={imageUrl} alt={name} className="w-16 h-16 object-cover rounded" />
      <div className="flex-1">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">KSh {price}</p>
        <div className="flex items-center gap-2 mt-2">
          <button onClick={() => onUpdateQuantity(id, quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
          <span>{quantity}</span>
          <button onClick={() => onUpdateQuantity(id, quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
          <button onClick={() => onRemove(id)} className="ml-auto text-red-500 text-sm">Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;