import axios from '../api/axiosInstance';
import type { AuthResponse } from '../types/AuthResponse';

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await axios.post<AuthResponse>('/auth/login', { email, password });
  return res.data;
};

export const registerUser = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  const res = await axios.post<AuthResponse>('/auth/register', { name, email, password });
  return res.data;
};
