import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BASE_URL, CLOUDINARY_URL } from "../utils/constants";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [photoURL, setphotoURL] = useState(user?.photoURL || "");
  const [about, setAbout] = useState(user?.about || "");
  const [skills, setSkills] = useState(user?.skills || []);
  const [designation, setDesignation] = useState(user?.designation || "");
  const dispatch = useDispatch();
  const [uploadMsg, setUploadMsg] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  const updateProfile = async () => {
    try {
      const response = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName, photoURL, about, skills, designation },
        { withCredentials: true }
      );
      setUpdateMessage("Profile is Updated");
    } catch (err) {
      setUpdateMessage("Error : " + err.message);
    }
  };

  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "DevTinder");
    data.append("cloud_name", "dao2gxmin");

    setUploadMsg("Uploading...");
    const response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: data,
    });
    const jsonResponse = await response.json();
    setUploadMsg("");
    const url = jsonResponse?.url;
    setphotoURL(url);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Profile Editor
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-500">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full p-2 border rounded mt-1 text-gray-700"
            />
          </div>
          <div>
            <label className="text-sm text-gray-500">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full p-2 border rounded mt-1 text-gray-700"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mt-4">
            <label className="text-sm text-gray-500">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setphotoURL(e.target.value)}
              className="w-full p-2 border rounded mt-1 text-gray-700"
            />
          </div>

          <div className="mt-4">
            {!uploadMsg && (
              <label className="text-sm text-gray-500">Upload Photo</label>
            )}
            {uploadMsg && <span className=" text-blue-600"> {uploadMsg}</span>}
            <input
              type="file"
              onChange={handlePhotoUpload}
              className="w-full p-2 border rounded mt-1 text-gray-700"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="text-sm text-gray-500">Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-gray-700"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm text-gray-500">About</label>
          <textarea
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-gray-700"
          ></textarea>
        </div>
        <div className="mt-4">
          <label className="text-sm text-gray-500">
            Skills (comma separated)
          </label>
          <input
            type="text"
            value={skills.join(", ")}
            onChange={(e) =>
              setSkills(e.target.value.split(", ").map((skill) => skill.trim()))
            }
            className="w-full p-2 border rounded mt-1 text-gray-700"
          />
        </div>

        <button
          onClick={updateProfile}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-xl"
        >
          Save Profile
        </button>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-lg w-full md:w-1/3 mt-6 md:mt-0 md:ml-6 text-center">
        <img
          src={photoURL}
          alt="Profile"
          className="w-24 h-24 rounded-full mx-auto border object-cover"
        />
        <h2 className="text-lg font-semibold text-blue-600 mt-2">
          {firstName} {lastName}
        </h2>
        <p className="text-gray-600 text-sm">{designation}</p>
        <h3 className="mt-4 text-sm font-semibold text-gray-800">About</h3>
        <p className="text-gray-600 text-sm mt-1">{about}</p>
        <h3 className="mt-4 text-sm font-semibold text-gray-800">Skills</h3>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {skills.length > 0 ? (
            skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))
          ) : (
            <p className="text-gray-500 text-xs">No skills added</p>
          )}
        </div>
        <button className="mt-4 w-full bg-gray-200 text-gray-800 py-2 rounded-xl">
          View Full Profile
        </button>
      </div>
    </div>
  );
};

export default EditProfile;
