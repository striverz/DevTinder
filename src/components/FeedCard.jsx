import React from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../redux/feedSlice";
import axios from "axios";

const FeedCard = ({ users }) => {
  const dispatch = useDispatch();
  const { firstName, lastName, photoURL, about, _id } = users;

  const handleProfileStatus = async (status, id) => {
    const profileStatus = await axios.post(
      BASE_URL + "/request/send/" + status + "/" + id,
      {},
      { withCredentials: true }
    );
    dispatch(removeUserFromFeed(id));
  };

  return (
    <div className="card bg-base-300 w-96 shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
      <figure>
        <img
          className="w-full h-56 object-cover"
          src="https://wallpapercave.com/wp/JQGpuF3.jpg"
          alt="Product"
        />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title text-lg font-semibold text-white">
          {firstName + " " + lastName}
        </h2>
        <p className="text-white text-sm">{about}</p>
        <div className="card-actions justify-center items-center mt-4 gap-8">
          <button
            className="btn bg-pink-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-pink-600 transition"
            onClick={() => handleProfileStatus("ignored", _id)}
          >
            Ignored
          </button>
          <button
            className="btn bg-purple-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-purple-600 transition"
            onClick={() => handleProfileStatus("interested", _id)}
          >
            Interested
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
