import React, { useState } from "react";
import LeftSidebar from "./LeftSidebar";

const Home = () => {
  const [drawer, setDrawer] = useState(true);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div>
      <button onClick={handleDrawer} className="btn btn-primary">
        drawer
      </button>
      <LeftSidebar drawer={drawer} handleDrawer={handleDrawer}></LeftSidebar>
    </div>
  );
};

export default Home;
