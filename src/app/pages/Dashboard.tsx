import React from "react";
import ShowList from "../components/ShowList";
import AddShow from "../components/AddShow";
import NavBar from "../components/NavBar";
import { ToastNotifier } from "../components/ToastNotifier";

const Dashboard: React.FC = () => {
  return (
    <>
      <ToastNotifier />
      <NavBar />
      <AddShow />
      <ShowList />
    </>
  );
};

export default Dashboard;
