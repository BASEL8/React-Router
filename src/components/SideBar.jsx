import React from "react";
import { Link } from "react-router-dom";
const saidBarStyle = {
  listStyle: "none",
  padding: 10,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around"
};
const SidBar = () => {
  return (
    <ul style={saidBarStyle}>
      <li>
        <Link to="/dashboard/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard/users">Users</Link>
      </li>
    </ul>
  );
};

export default SidBar;
