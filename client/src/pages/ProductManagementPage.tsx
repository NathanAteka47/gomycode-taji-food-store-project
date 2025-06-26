import React from 'react';

const ProductManagementPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-semibold mb-6">Manage Products</h2>

      {/* Product Creation Form */}
      <form className="bg-white p-4 rounded shadow mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Product Name" className="border px-4 py-2 rounded" required />
        <input type="text" placeholder="Image URL" className="border px-4 py-2 rounded" required />
        <input type="number" placeholder="Price" className="border px-4 py-2 rounded" required />
        <textarea placeholder="Description" className="border px-4 py-2 rounded md:col-span-2" required></textarea>
        <button type="submit" className="bg-green-600 text-white py-2 rounded md:col-span-2 hover:bg-green-700">
          Add Product
        </button>
      </form>

      {/* Product Table */}
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="p-2 border-b">Product</th>
            <th className="p-2 border-b">Price</th>
            <th className="p-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with mapped data */}
          <tr>
            <td className="p-2 border-b">Sample Dish</td>
            <td className="p-2 border-b">KSh 500</td>
            <td className="p-2 border-b">
              <button className="text-blue-600 mr-2">Edit</button>
              <button className="text-red-600">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductManagementPage;