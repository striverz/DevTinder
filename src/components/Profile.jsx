import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditProfile from "./EditProfile";
import FeedCard from "./FeedCard";

const Profile = () => {
  const user = useSelector((store) => store.user);
  return <div>{user && <EditProfile user={user} />}</div>;
};

export default Profile;
