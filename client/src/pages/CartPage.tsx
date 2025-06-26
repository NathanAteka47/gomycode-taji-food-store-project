import React from 'react';
import CartItem from '../components/CartItem';
import OrderSummary from '../components/OrderSummary';

const sampleCartItems = [
  { id: '1', name: 'Beef Pilau', price: 450, quantity: 2, imageUrl: '/63.jpg' },
  { id: '2', name: 'Chicken Stew', price: 500, quantity: 1, imageUrl: '/6.jpg' }
];

const CartPage: React.FC = () => {
  const [items, setItems] = React.useState(sampleCartItems);

  const handleRemove = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {items.length > 0 ? (
          items.map(item => (
            <CartItem
              key={item.id}
              {...item}
              onRemove={handleRemove}
              onUpdateQuantity={handleUpdateQuantity}
            />
          ))
        ) : (
          <p>No items in your cart.</p>
        )}
      </div>
      <div>
        <OrderSummary subtotal={subtotal} delivery={150} onCheckout={() => alert('Proceeding to checkout...')} />
      </div>
    </div>
  );
};

export default CartPage;