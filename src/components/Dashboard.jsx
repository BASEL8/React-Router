import React from "react";
import SidBar from "./SideBar";
import { Route } from "react-router-dom";
const DashBoardStyle = {
  display: "flex",
  flex: 1,
  width: "100%"
};
const DashBoardMainStyle = {
  flexGrow: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};
const Dashboard = (props) => {
  return (
    <div style={DashBoardStyle}>
      <SidBar />
      <div style={DashBoardMainStyle}>
        <h1>Dashboard</h1>
        <Route
          path="/dashboard/posts"
          component={() => <h4 style={{ flex: 1 }}>POSTS</h4>}
        />
        <Route
          path="/dashboard/users"
          component={() => <h4 style={{ flex: 1 }}>USERS</h4>}
        />
      </div>
    </div>
  );
};
export default Dashboard;
