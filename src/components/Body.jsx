import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () => {
    try {
      const user = await axios.get("http://localhost:3333/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(user.data));
    } catch (err) {
      if (err.status === 401) {
        navigate("/login");
      }
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Body;
