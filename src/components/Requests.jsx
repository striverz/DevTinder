import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../redux/requestsSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const handleRequestReview = async (status, id) => {
    try {
      const response = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + id,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(id));
    } catch (err) {}
  };

  const getRequests = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/requests`, {
        withCredentials: true,
      });
      dispatch(addRequests(response?.data?.data));
    } catch (err) {}
  };

  useEffect(() => {
    getRequests();
  }, []);

  if (!requests || requests.length === 0)
    return <h1 className="text-center">No Requests Found</h1>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold text-center">Connection Requests</h2>
      <p className="text-gray-600 text-center mb-4">
        Accept or decline pending connection requests
      </p>
      {requests.map((user, index) => {
        const { firstName, lastName, photoURL, about, designation, skills } =
          user.fromUserId;
        return (
          <div
            key={index}
            className="flex items-center bg-white p-4 rounded-lg shadow-sm mt-4 border border-gray-200"
          >
            <img
              src={photoURL}
              alt={firstName}
              className="w-14 h-14 rounded-full mr-4 object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-lg">
                {firstName + " " + lastName}
              </h3>
              <p className="text-gray-600 text-sm">{designation}</p>
              <p className="text-gray-600 text-sm">{about}</p>
            </div>
            <div className="flex space-x-2 ml-4">
              <button
                onClick={() => handleRequestReview("rejected", user._id)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300"
              >
                ✖
              </button>
              <button
                onClick={() => handleRequestReview("accepted", user._id)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600"
              >
                ✔
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
