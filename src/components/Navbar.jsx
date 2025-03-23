import { useState } from "react";
import { Bell } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md bg-white">
      <div className="flex items-center ">
        <img src={logo} className="w-8"></img>
        <div className="text-indigo-600 font-bold text-lg">DevTinder.</div>
      </div>

      {/* Profile and Notifications */}
      <div className="relative flex items-center space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
