import React from "react";
import { useDispatch } from "react-redux";
import { removeFeed } from "../redux/feedSlice";
import axios from "axios";
import { BASE_URL, DEFAULT_PHOTO_URL } from "../utils/constants";

const UserCard = ({ user = {} }) => {
  const {
    firstName = "Unknown",
    lastName = "",
    photoURL = DEFAULT_PHOTO_URL,
    skills = [],
    about = "No information provided",
    _id,
    designation = "Software Developer",
  } = user;

  const dispatch = useDispatch();

  const handleRequestSending = async (status, id) => {
    try {
      await axios.post(
        BASE_URL + "/request/send/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeFeed(id));
    } catch (err) {}
  };

  return (
    <div className="w-80 min-h-[400px] mx-auto bg-white rounded-2xl shadow-lg overflow-hidden text-center pb-4 border border-gray-200 flex flex-col">
      {/* Profile Header */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-400 h-24 w-full relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-full">
          <img
            src={photoURL}
            alt={firstName}
            className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="mt-12 flex-1 flex flex-col px-4">
        <h2 className="text-xl font-semibold text-gray-900">
          {firstName} {lastName}
        </h2>
        <p className="text-blue-500 text-sm font-medium mt-1">{designation}</p>
        <p className="text-gray-600 mt-3 text-sm flex-1">{about}</p>

        {/* Skills Section */}
        <p className="mt-2">Skills</p>
        <div className="flex flex-wrap justify-center items-center gap-2 mt-2 min-h-[50px]">
          {skills.length > 0 ? (
            skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))
          ) : (
            <span className="text-gray-400 text-sm">No skills listed</span>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-4 gap-4 px-4 pb-4">
        <button
          onClick={() => handleRequestSending("ignored", _id)}
          className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-xl font-medium hover:bg-gray-400 transition"
        >
          Ignore
        </button>
        <button
          onClick={() => handleRequestSending("interested", _id)}
          className="flex-1 bg-blue-500 text-white py-2 rounded-xl font-medium hover:bg-blue-600 transition"
        >
          Interested
        </button>
      </div>
    </div>
  );
};

export default UserCard;
