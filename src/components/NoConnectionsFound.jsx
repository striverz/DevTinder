import React from "react";
import { useNavigate } from "react-router-dom";

const NoConnectionsFound = () => {
  const navigate = useNavigate();
  return (
    <div className="p-6 rounded-lg  text-center">
      <div className="text-blue-500 text-4xl mb-4">🔗</div>
      <h2 className="text-lg font-semibold">No Connections Found</h2>
      <p className="text-gray-600">
        Connect with people to build your network.
      </p>
      <button
        onClick={() => {
          navigate("/feed");
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Discover Connections →
      </button>
    </div>
  );
};

export default NoConnectionsFound;
