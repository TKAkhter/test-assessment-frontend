import React from "react";
import ShowList from "../components/ShowList";
import AddShow from "../components/AddShow";
import NavBar from "../components/NavBar";

const Dashboard: React.FC = () => {
  return (
    <>
      <NavBar />
      <AddShow />
      <ShowList />
    </>
  );
};

export default Dashboard;
