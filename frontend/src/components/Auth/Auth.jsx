import React, { useState } from 'react';

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the authentication logic
    console.log('Form submitted:', { email, password, confirmPassword });
  };

  // Local Button Component
  const Button = ({ children, onClick, className = '', type = 'button' }) => (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );

  // Local Input Component
  const Input = ({ id, placeholder, type = 'text', value, onChange, required, className = '' }) => (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`border border-gray-300 rounded px-3 py-2 w-full ${className}`}
    />
  );

  // Local Card Components
  const Card = ({ children, className = '' }) => (
    <div className={`border border-gray-300 rounded shadow-md p-4 ${className}`}>{children}</div>
  );

  const CardHeader = ({ children }) => <div className="mb-4">{children}</div>;

  const CardTitle = ({ children }) => <h2 className="text-xl font-bold">{children}</h2>;

  const CardDescription = ({ children }) => <p className="text-gray-500">{children}</p>;

  const CardContent = ({ children }) => <div className="mb-4">{children}</div>;

  const CardFooter = ({ children, className = '' }) => (
    <div className={`mt-4 ${className}`}>{children}</div>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{isSignUp ? 'Sign Up' : 'Sign In'}</CardTitle>
          <CardDescription>
            {isSignUp ? 'Create a new account' : 'Login to your account'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="email"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input
                  id="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {isSignUp && (
                <div className="flex flex-col space-y-1.5">
                  <Input
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit" onClick={handleSubmit} className="w-full">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
          <p className="mt-2 text-sm text-center">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              className="ml-1 text-blue-500 hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Auth;
