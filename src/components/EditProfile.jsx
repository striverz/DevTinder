import React, { useState } from "react";
import FeedCard from "./FeedCard";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoURL);
  const [about, setAbout] = useState(user.about);
  return (
    <div>
      <div className="flex justify-center">
        <div className="card bg-base-300 w-96 shadow-xl my-10 ">
          <div className="card-body ">
            <h2 className="card-title flex justify-center">Edit Profile</h2>

            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">firstName</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">lastName</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">photoURL</span>
                </div>
                <input
                  type="text"
                  className="input input-bordered w-full max-w-xs"
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">About</span>
                </div>
                <input
                  type="text  "
                  className="input input-bordered w-full max-w-xs"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>

      <FeedCard users={{ firstName, lastName, about, photoUrl }} />
    </div>
  );
};

export default EditProfile;
