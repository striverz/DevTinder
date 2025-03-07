import React from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { removeUser } from "../redux/userSlice";

const Navbar = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3333/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      navigate("/login");
    } catch (err) {}
  };

  return (
    <div className="navbar bg-base-300 px-4">
      <div className="flex-1">
        <img src={logo} className="w-8"></img>
        <Link to="/" className=" text-2xl font-bold mx-1">
          Devtinder
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          {user && (
            <p className="text-lg font-bold">{`Hi, ${user.firstName}`}</p>
          )}
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {user && (
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://wallpapercave.com/wp/wp3067438.jpg"
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a onClick={handleLogout}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
