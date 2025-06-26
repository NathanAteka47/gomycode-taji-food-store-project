import React from 'react';

type SummaryProps = {
  subtotal: number;
  delivery: number;
  onCheckout: () => void;
};

const OrderSummary: React.FC<SummaryProps> = ({ subtotal, delivery, onCheckout }) => {
  const total = subtotal + delivery;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>KSh {subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>KSh {delivery}</span>
        </div>
        <hr />
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>KSh {total}</span>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default OrderSummary;