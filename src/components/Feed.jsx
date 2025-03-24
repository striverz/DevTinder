import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/feedSlice";
import { BASE_URL } from "../utils/constants";
import UserCard from "./UserCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed) || [];
  const getFeed = async () => {
    try {
      const response = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(response?.data?.data));
    } catch (err) {}
  };

  useEffect(() => {
    getFeed();
  }, []);

  return feedData.length > 0 ? (
    <div className=" h-[calc(100vh-4.5rem)] flex justify-center items-center">
      <UserCard user={feedData[0]} />
    </div>
  ) : (
    <h1 className="text-center font-bold">No Feed Found</h1>
  );
};

export default Feed;
