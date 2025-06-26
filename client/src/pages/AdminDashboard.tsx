import React from 'react';

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Total Orders</h3>
          <p className="text-3xl text-green-600">128</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Active Users</h3>
          <p className="text-3xl text-green-600">52</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <p className="text-3xl text-green-600">KSh 89,500</p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-2 border-b">Order ID</th>
              <th className="p-2 border-b">Customer</th>
              <th className="p-2 border-b">Total</th>
              <th className="p-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border-b">#A120</td>
              <td className="p-2 border-b">Nathan Ateka</td>
              <td className="p-2 border-b">KSh 1450</td>
              <td className="p-2 border-b">Delivered</td>
            </tr>
            <tr>
              <td className="p-2 border-b">#A119</td>
              <td className="p-2 border-b">Ronald Ngala</td>
              <td className="p-2 border-b">KSh 950</td>
              <td className="p-2 border-b">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;