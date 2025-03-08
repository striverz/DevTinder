import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("saranya@gmail.com");
  const [password, setPassword] = useState("Saranya@0011");
  const [errMsg, setErrMsg] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toogleLogin = () => {
    setIsLogin(!isLogin);
  };

  const handleSignUp = async () => {
    const signupUser = await axios.post(
      BASE_URL + "/signup",
      { firstName, lastName, emailId, password },
      { withCredentials: true }
    );
    console.log(signupUser.data);
    dispatch(addUser(signupUser?.data));
    navigate("/profile");
  };

  const handleLogin = async () => {
    try {
      if (!emailId || !password) {
        setErrMsg("Email and password are required");
        return;
      }

      const response = await axios.post(
        BASE_URL + "/login",
        { emailId, password },
        { withCredentials: true }
      );

      dispatch(addUser(response.data)); // Ensure dispatch is available
      navigate("/"); // Ensure navigate is available
    } catch (error) {
      setErrMsg(error.response?.data || error.message);
    }
  };
  return (
    <div className="flex justify-center">
      <div className="card bg-base-300 w-96 shadow-xl my-10 ">
        <div className="card-body ">
          <h2 className="card-title flex justify-center">
            {isLogin ? "SignIn" : "SignUp"}
          </h2>

          <div>
            {!isLogin && (
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">FirstName</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
            )}
            {!isLogin && (
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">LastName</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
            )}
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email ID</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          {errMsg && <p className="text-red-500">{errMsg}</p>}
          <p onClick={toogleLogin}>{isLogin ? "New User" : "Already User"}</p>

          <div className="card-actions justify-center">
            {isLogin && (
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            )}
            {!isLogin && (
              <button className="btn btn-primary" onClick={handleSignUp}>
                SignUp
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
