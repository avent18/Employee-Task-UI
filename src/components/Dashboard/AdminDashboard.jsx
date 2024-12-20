/** @format */

import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import Alltalks from "../others/Alltalks";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <Alltalks />
      
    </div>
  );
};

export default AdminDashboard;
