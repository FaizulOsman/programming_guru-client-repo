import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RightSidebar from "../components/RightSidebar";
import { DarkContext } from "../contexts/DarkProvider";

const Main = () => {
  const [drawer, setDrawer] = useState(true);
  const { darkBtn } = useContext(DarkContext);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className={!darkBtn ? "bg-success min-h-screen" : " text-gray-600"}>
      <Header drawer={drawer} handleDrawer={handleDrawer}></Header>
      <RightSidebar drawer={drawer} handleDrawer={handleDrawer}></RightSidebar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
