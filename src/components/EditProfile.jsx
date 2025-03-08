import React, { useState } from "react";
import FeedCard from "./FeedCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoURL, setPhotoURL] = useState(user.photoURL);
  const [about, setAbout] = useState(user.about);

  const handleUpdateProfile = async () => {
    const profile = await axios.patch(
      BASE_URL + "/profile/edit",
      {
        firstName,
        lastName,
        about,
        photoURL,
      },
      { withCredentials: true }
    );
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 p-5">
      {/* Edit Profile Card */}
      <div className="w-full max-w-md flex-1">
        <div className="card bg-base-300 shadow-xl p-6 h-full flex flex-col">
          <div className="card-body flex-1">
            <h2 className="card-title text-center">Edit Profile</h2>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Last Name</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Photo URL</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">About</span>
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </label>
          </div>

          <div className="card-actions justify-center mt-4">
            <button
              className="btn btn-primary w-full"
              onClick={handleUpdateProfile}
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Profile Preview Card */}
      <div className="w-full max-w-md flex-1">
        <div className="h-full flex">
          <FeedCard
            users={{ firstName, lastName, about, photoURL }}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
