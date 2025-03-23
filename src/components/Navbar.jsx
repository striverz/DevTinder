import { useState } from "react";
import { Bell } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../redux/userSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userFound = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/logout",
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeUser());
      navigate("/");
    } catch (err) {}
  };

  return (
    <nav className="flex items-center justify-between p-4 h-18 shadow-md bg-white ">
      <Link to="/">
        <div className="flex items-center ">
          <img src={logo} className="w-8"></img>
          <div className="text-indigo-600 font-bold text-lg">DevTinder.</div>
        </div>
      </Link>
      {!userFound && (
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-600 hover:text-black">
            Feed
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Explore
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Settings
          </a>
        </div>
      )}

      {!userFound && (
        <div className="flex items-center space-x-3 md:space-x-4">
          <Link
            to="/login"
            className="text-gray-600 hover:text-black text-sm md:text-base"
          >
            Sign in
          </Link>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold shadow-md hover:opacity-90">
            Get Started
          </button>
        </div>
      )}

      {/* Profile and Notifications */}
      {userFound && (
        <div className="relative flex items-center space-x-4">
          {userFound && (
            <p className="text-base font-semibold">
              {"Hi, " + userFound?.firstName}
            </p>
          )}
          <Bell
            className="text-gray-600 cursor-pointer hover:text-indigo-600"
            size={24}
          />
          <div className="relative w-10 rounded-full">
            <img
              src="https://wallpapercave.com/wp/wp3067438.jpg"
              alt="User Profile"
              className="w-10 h-10 rounded-full object-cover cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            />
            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden">
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/connections"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Connections
                </Link>
                <Link
                  to="/requests"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Requests
                </Link>
                <Link
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
