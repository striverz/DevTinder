import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../redux/requestsSlics";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const hadleRequestStatus = async (status, id) => {
    const review = await axios.post(
      BASE_URL + "/request/review/" + status + "/" + id,
      {},
      { withCredentials: true }
    );
    dispatch(removeRequest(id));
  };
  const fetchRequests = async () => {
    try {
      const requests = await axios.get(BASE_URL + "/user/requests", {
        withCredentials: true,
      });
      dispatch(addRequests(requests?.data?.data));
    } catch (err) {
      console.log(err.message);
      //Handling the error pages
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  console.log(requests);

  return (
    <div>
      {requests &&
        requests.map((request, ind) => {
          return (
            request.fromUserId && (
              <div
                className="flex items-center justify-center m-4 p-4"
                key={ind}
              >
                <h1 className="p-5">{request?.fromUserId?.firstName}</h1>
                <button
                  className="btn btn-primary m-4"
                  onClick={() => hadleRequestStatus("rejected", request._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => hadleRequestStatus("accepted", request._id)}
                >
                  Accept
                </button>
              </div>
            )
          );
        })}
    </div>
  );
};

export default Requests;
