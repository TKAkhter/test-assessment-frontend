import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ShowList from "./ShowList";
import AddShow from "./AddShow";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: "CLEAR_TOKEN",
    });
    history.push("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ShowList />
      <AddShow />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
