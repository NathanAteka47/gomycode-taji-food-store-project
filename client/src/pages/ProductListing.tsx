import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import axios from '../api/axiosInstance';

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('/products'); // Ensure your backend returns products at this route
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId);
    // TODO: Dispatch Redux action here, e.g.
    // dispatch(addToCart(productId));
  };

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">All Menu Items</h2>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            id={product._id}
            title={product.title}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
