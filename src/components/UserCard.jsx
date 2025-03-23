import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoURL, skills, about } = user;

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden text-center pb-4 border border-gray-200">
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 h-24 w-full relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-full">
          <img
            src={photoURL} // Replace with actual image URL
            alt={firstName}
            className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900">
          {firstName + " " + lastName}
        </h2>
        <p className="text-blue-500 text-sm font-medium mt-1">
          Full Stack Developer
        </p>
        <p className="text-gray-600 mt-3 text-sm px-4">{about}</p>
        <p className="mt-2">Skills</p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-gray-100 text-gray-700 px-3 py-1 text-xs font-medium rounded-full shadow-sm border border-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-6 gap-4 px-4">
          <button className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-xl font-medium hover:bg-gray-400 transition">
            Ignored
          </button>
          <button className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-medium hover:bg-blue-600 transition">
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
