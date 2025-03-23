import React from "react";
import { useState } from "react";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toogleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="flex items-center pt-4 justify-center bg-white-100  h-[calc(100vh-5rem)]">
      <div className="bg-white p-8  rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {isLogin ? "Welcome to DevtTinder" : "Join DevTinder Today"}
        </h2>

        <form>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">FirstName</label>
              <input
                type="test"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          )}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">LastName</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="flex justify-between items-center">
              <input
                type="password"
                placeholder=""
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90"
          >
            {isLogin ? "Sign In" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <span
            className="text-blue-600 hover:underline"
            onClick={toogleIsLogin}
          >
            {!isLogin ? " Sign In" : " Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
