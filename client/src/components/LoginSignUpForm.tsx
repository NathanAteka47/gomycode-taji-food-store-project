import React, { useState } from 'react';

type Props = {
  onSubmit: (email: string, password: string, name?: string) => void;
  isSignup?: boolean;
};

const LoginSignupForm: React.FC<Props> = ({ onSubmit, isSignup = false }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, name);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">{isSignup ? 'Create Account' : 'Login'}</h2>

      {isSignup && (
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded"
          required
        />
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        className="w-full mb-4 px-4 py-2 border rounded"
        required
      />

      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
        {isSignup ? 'Sign Up' : 'Login'}
      </button>
    </form>
  );
};

export default LoginSignupForm;