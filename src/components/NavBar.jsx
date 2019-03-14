import React from "react";
import { Link } from "react-router-dom";
const ListStyle = {
  listStyle: "none",
  display: "flex",
  justifyContent: "space-around",
  background: "black",
  color: "white",
  height: "100%",
  margin: 0,
  padding: 0
};
const listItemStyle = {
  height: "100%",
  padding: "20px 0"
};
const NavBAr = () => {
  return (
    <ul style={ListStyle}>
      <li style={listItemStyle}>
        <Link to="/">Home</Link>
      </li>
      <li style={listItemStyle}>
        <Link to="/products">Products</Link>
      </li>

      <li style={listItemStyle}>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li style={listItemStyle}>
        <Link to="/posts">Posts</Link>
      </li>
      <li style={listItemStyle}>
        <Link to="/Login">Login</Link>
      </li>
    </ul>
  );
};

export default NavBAr;
