import { useState } from "react";
import { Bell } from "lucide-react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 h-18 shadow-md bg-white ">
      <Link to="/">
        <div className="flex items-center ">
          <img src={logo} className="w-8"></img>
          <div className="text-indigo-600 font-bold text-lg">DevTinder.</div>
        </div>
      </Link>
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

      {/* Profile and Notifications */}
      {/* <div className="relative flex items-center space-x-4">
        <Bell
          className="text-gray-600 cursor-pointer hover:text-indigo-600"
          size={24}
        />
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="User Profile"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg overflow-hidden">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Connections
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Requests
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Logout
              </a>
            </div>
          )}
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
