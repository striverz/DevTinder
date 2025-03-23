import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";

const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);

  const fetchUser = async () => {
    if (userData) return;
    try {
      const response = await axios.get(BASE_URL + "/profile/view", {
        withCredentials: true,
      });
      dispatch(addUser(response?.data?.data));
    } catch (err) {
      navigate("/");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []); // No dependencies, runs once on mount

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
