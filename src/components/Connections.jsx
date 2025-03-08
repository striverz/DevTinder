import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../redux/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);
  const getConnections = async () => {
    try {
      const connections = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(connections?.data?.data));
    } catch (err) {
      //handling the errors
    }
  };

  useEffect(() => {
    getConnections();
  }, []);

  if (!connections) return;

  return (
    <div>
      {connections.map((connection, ind) => {
        return <h1 key={ind}>{connection?.firstName}</h1>;
      })}
    </div>
  );
};

export default Connections;
