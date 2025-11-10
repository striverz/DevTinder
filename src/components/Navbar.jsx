import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL, DEFAULT_PHOTO_URL } from "../utils/constants";
import { removeUser } from "../redux/userSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const requests = useSelector((store) => store.requests);
  const userFound = useSelector((store) => store.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);

  const handleLogout = async () => {
    try {
      await axios.post(
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, userFound]);

  return (
    <nav className="flex items-center justify-between p-4 h-18 bg-white">
      <Link to="/">
        <div className="flex items-center">
          <img src={logo} className="w-8" alt="DevTinder Logo" />
          <div className="text-indigo-600 font-bold text-lg">DevTinder.</div>
        </div>
      </Link>

      <div className="hidden md:flex gap-8 ml-8">
        <Link to="/feed" className="text-gray-600 hover:text-black">
          Feed
        </Link>
        <Link to="/" className="text-gray-600 hover:text-black">
          Explore{" "}
        </Link>
        <Link to="/settings" className="text-gray-600 hover:text-black">
          Settings
        </Link>
      </div>

      {!userFound && (
        <div className="flex items-center space-x-3 md:space-x-4">
          <button
            onClick={() => {
              navigate("/signin");
            }}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold shadow-md hover:opacity-90"
          >
            Get Started
          </button>
        </div>
      )}

      {userFound && (
        <div className="relative flex items-center space-x-4">
          <p className="text-base font-semibold">
            {"Hi, " + userFound?.firstName}
          </p>

          <Link to="/requests" className="relative">
            <Bell className="text-gray-600 cursor-pointer" size={24} />
            {requests?.length > 0 && (
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-blue-500 rounded-full"></span>
            )}
          </Link>

          {/* Profile Dropdown */}
          <div className="relative w-10 rounded-full" ref={dropdownRef}>
            <img
              src={userFound ? userFound?.photoURL : DEFAULT_PHOTO_URL}
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

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-blue-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
