import axios from '../api/axiosInstance';
import type { Product } from '../types/Product';

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await axios.get<Product[]>('/products');
  return res.data;
};