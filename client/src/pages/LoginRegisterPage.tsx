import React, { useState } from 'react';
import LoginSignupForm from '../components/LoginSignupForm';

const LoginRegisterPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleSubmit = (email: string, password: string, name?: string) => {
    if (isSignup) {
      console.log('Register', { name, email, password });
    } else {
      console.log('Login', { email, password });
    }
  };

  return (
    <div className="max-w-md mx-auto py-10 px-6">
      <LoginSignupForm onSubmit={handleSubmit} isSignup={isSignup} />
      <p className="mt-4 text-center text-sm">
        {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button onClick={() => setIsSignup(!isSignup)} className="text-green-600 underline">
          {isSignup ? 'Login here' : 'Sign up here'}
        </button>
      </p>
    </div>
  );
};

export default LoginRegisterPage;