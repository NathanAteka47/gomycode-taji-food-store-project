import axios from './axiosInstance';

export const loginUser = async (email: string, password: string) => {
  const { data } = await axios.post('/auth/login', { email, password });
  localStorage.setItem('token', data.token);
  return data;
};

export const registerUser = async (name: string, email: string, password: string) => {
  const { data } = await axios.post('/auth/register', { name, email, password });
  return data;
};