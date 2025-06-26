import { useEffect, useState } from 'react';
import type { User } from '../types/User';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (stored) setUser(JSON.parse(stored));
  }, []);

  return { user, isLoggedIn: !!user };
};
