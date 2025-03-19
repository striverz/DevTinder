import React from "react";
import { PiSuitcase } from "react-icons/pi";

const Build = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl w-96 text-center relative overflow-hidden">
        <div className="bg-gradient-to-b from-blue-500 to-blue-700 h-24 flex justify-center items-end relative">
          <img
            src="https://i.pinimg.com/736x/f5/49/4d/f5494d85b2511ea816d840ac8452cb97.jpg"
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white absolute -bottom-12 object-cover"
          />
        </div>
        <div className="mt-14 px-6 pb-6">
          <h2 className="text-xl font-semibold">Alex Johnson</h2>
          <p className="text-blue-600 font-medium flex items-center justify-center mt-2">
            <PiSuitcase size={20} className="mr-2" /> Full Stack Developer
          </p>
          <p className="text-gray-600 mt-2 text-sm px-4">
            Passionate developer with 5+ years of experience building modern web
            applications.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {["React", "TypeScript", "Node.js", "UI/UX"].map((skill) => (
              <div key={skill} className="flex flex-col items-center">
                <span className="text-blue-500 text-xs px-3 py-1 rounded-full bg-blue-100">
                  {skill}
                </span>
                <div className="flex space-x-1 mt-1">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`w-2 h-2 rounded-full ${
                        index < 3 ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 gap-4">
            <button className="w-1/2 py-2 text-gray-600 bg-gray-200 rounded-full hover:bg-gray-300">
              ✖ Ignore
            </button>
            <button className="w-1/2 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">
              ✔ Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
