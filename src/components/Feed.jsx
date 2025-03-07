import React, { useEffect, useState } from "react";
import FeedCard from "./FeedCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";

const Feed = () => {
  const [feed, setFeed] = useState(null);

  const feedData = async () => {
    try {
      const response = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      setFeed(response?.data?.users);
    } catch (err) {
      console.error("Error fetching feed:", err.message);
    }
  };

  useEffect(() => {
    feedData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {feed && <FeedCard users={feed[0]} />}
    </div>
  );
};

export default Feed;
