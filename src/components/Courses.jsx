import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
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
      <div className="w-2/12 z-50 sm:border-r-2 sm:border-primary pr-2">
        <div className="text-left my-10">
          <button onClick={handleDrawer} className="btn btn-primary">
            drawer
          </button>
          {courses.map((course) => (
            <div>
              <h4 className="text-lg font-semibold mt-3">
                {course.id}. {course.name}
              </h4>
            </div>
          ))}
        </div>
        <LeftSidebar drawer={drawer} handleDrawer={handleDrawer}></LeftSidebar>
      </div>

      <div className="w-10/12">
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
