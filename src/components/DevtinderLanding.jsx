import React from "react";
import { Link } from "react-router-dom";
import FeaturesSection from "./FeaturesSection";

const DevtinderLanding = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-5rem)] bg-white px-4 ">
        <div className="text-center px-4 ">
          {/* <div className="text-center mt-10 md:mt-20 px-4"> */}
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
            Introducing DevTinder
          </span>
          <h1 className="text-3xl md:text-6xl font-bold mt-4">
            A <span className="text-blue-600">beautiful</span> Coding
            <br className="hidden md:block" /> Connection Awaits!
          </h1>
          <p className="text-gray-500 text-sm md:text-lg mt-4 max-w-md md:max-w-2xl mx-auto">
            Match with purpose. Build with passion. Elevate your journey with a
            minimalist and efficient approach to developer connections
          </p>
          <div className="mt-6 flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-md hover:opacity-90">
              Get Started
            </button>
            <Link to="/about">
              <button className="bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-full text-sm md:text-base font-semibold shadow-md hover:bg-gray-100">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default DevtinderLanding;
