import React from "react";

const NoRequestsFound = () => {
  return (
    <div className="p-6rounded-lg  text-center">
      <div className="text-blue-500 text-4xl mb-4">📩</div>
      <h2 className="text-lg font-semibold">No Requests Found</h2>
      <p className="text-gray-600">You have no pending connection requests.</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Refresh
      </button>
    </div>
  );
};

export default NoRequestsFound;
