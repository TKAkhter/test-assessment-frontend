import React from "react";
import { useDispatch } from "react-redux";
import { clearToken } from "../redux/reducer";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Clear token from Redux store and local storage
    dispatch(clearToken());
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
