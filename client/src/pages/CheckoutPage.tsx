import React from 'react';

const CheckoutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      <form className="space-y-6">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input type="text" className="w-full border rounded px-4 py-2" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input type="tel" className="w-full border rounded px-4 py-2" required />
        </div>

        <div>
          <label className="block mb-1 font-medium">Delivery Address</label>
          <textarea className="w-full border rounded px-4 py-2" rows={3} required></textarea>
        </div>

        <button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;