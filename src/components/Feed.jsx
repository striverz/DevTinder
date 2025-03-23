import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../redux/feedSlice";
import { BASE_URL } from "../utils/constants";
import UserCard from "./userCard";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((store) => store.feed);
  const getFeed = async () => {
    try {
      const response = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });

      dispatch(addFeed(response?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <div className=" h-[calc(100vh-4.5rem)] flex justify-center items-center">
      {feedData && <UserCard user={feedData[0]} />}
    </div>
  );
};

export default Feed;
