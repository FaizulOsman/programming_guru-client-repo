import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";

const Main = () => {
  const [drawer, setDrawer] = useState(true);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <div>
      <Header drawer={drawer} handleDrawer={handleDrawer}></Header>
      <RightSidebar drawer={drawer} handleDrawer={handleDrawer}></RightSidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
