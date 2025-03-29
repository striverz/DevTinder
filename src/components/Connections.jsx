import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../redux/connectionsSlice";
import { FaUserFriends } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import NoConnectionsFound from "./NoConnectionsFound";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  console.log(connections);

  const getConnections = async () => {
    try {
      const response = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(response?.data?.data));
    } catch (err) {}
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections || connections.length === 0) return <NoConnectionsFound />;

  return (
    <div className="p-6 bg-gray-100 rounded-lg ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        My Connections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {connections.map(
          (person, index) =>
            person && (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center w-full max-w-xs mx-auto"
              >
                <img
                  src={person?.photoURL}
                  alt={person?.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-300"
                />
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {person?.firstName + " " + person?.lastName}
                </h3>
                <p className="text-sm text-blue-600 text-center">
                  {person?.designation}
                </p>
                <div className="flex items-center justify-center text-sm text-gray-400 mt-1">
                  <CiLocationOn className="text-lg mr-1" />
                  <span>{person?.location}</span>
                </div>
                <p className="text-sm text-gray-600 text-center mt-2">
                  {person?.about}
                </p>

                <div className="flex items-center justify-center gap-2 mt-3 text-gray-500 text-sm">
                  <FaUserFriends className="text-blue-600" />
                  <span>{person?.firstName?.length} mutual connections</span>
                </div>

                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition duration-300">
                  <span className="text-lg"></span> Connected
                </button>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Connections;
