import React from "react";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const toogleIsLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(response?.data?.data));
      navigate("/feed");
    } catch (err) {
      setErrorMessage(err?.response?.data?.error);
    }
  };
  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );
      dispatch(addUser(response?.data?.data));
      navigate("/profile");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div className="flex items-center pt-4 justify-center bg-white-100  h-[calc(100vh-5rem)]">
      <div className="bg-white p-8  rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center text-gray-900">
          {isLogin ? "Welcome to DevTinder" : "Join DevTinder Today"}
        </h2>

        <div>
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">FirstName</label>
              <input
                type="test"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          )}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">LastName</label>
              <input
                type="email"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={emailId}
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <div className="flex justify-between items-center">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
          </div>
          {errorMessage && <p className="text-blue-500 p-2">{errorMessage}</p>}

          {isLogin && (
            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90"
            >
              Sign In
            </button>
          )}
          {!isLogin && (
            <button
              type="submit"
              onClick={handleSignUp}
              className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg hover:opacity-90"
            >
              Sign Up
            </button>
          )}
        </div>

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
