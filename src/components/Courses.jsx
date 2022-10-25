import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";
import LeftSidebar from "./LeftSidebar";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  const [drawer, setDrawer] = useState(true);
  const { darkBtn } = useContext(DarkContext);

  const handleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <div className="w-11/12 mx-auto flex-none sm:flex py-10 gap-4">
      <div className="col-span-2 z-50 sm:border-r-2 sm:border-primary pr-2">
        <div className="text-center my-10">
          <button onClick={handleDrawer} className="btn btn-primary">
            drawer
          </button>
        </div>
        <LeftSidebar drawer={drawer} handleDrawer={handleDrawer}></LeftSidebar>
      </div>

      <div className="col-span-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <SingleCourse key={course.id} course={course}></SingleCourse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
