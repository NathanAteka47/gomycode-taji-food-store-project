import React from 'react';

const OrderHistoryPage: React.FC = () => {
  const sampleOrders = [
    { id: 'ORD001', date: '2025-06-25', total: 1200, status: 'Delivered' },
    { id: 'ORD002', date: '2025-06-23', total: 750, status: 'Pending' }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-4">My Orders</h2>
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="p-2 border-b">Order ID</th>
            <th className="p-2 border-b">Date</th>
            <th className="p-2 border-b">Total</th>
            <th className="p-2 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {sampleOrders.map(order => (
            <tr key={order.id}>
              <td className="p-2 border-b">{order.id}</td>
              <td className="p-2 border-b">{order.date}</td>
              <td className="p-2 border-b">KSh {order.total}</td>
              <td className="p-2 border-b">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderHistoryPage;