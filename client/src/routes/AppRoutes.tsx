import { Routes, Route } from 'react-router-dom';
import Home from '../pages/HomePage';
import ProductListing from '../pages/ProductListing';
import ProductDetails from '../pages/ProductDetails';
import Contact from '../pages/ContactPage';
import LoginRegister from '../pages/LoginRegisterPage';
import AdminDashboard from '../pages/AdminDashboard';
import OrderHistory from '../pages/OrderHistoryPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/orders" element={<OrderHistory />} />
    </Routes>
  );
};

export default AppRoutes;
