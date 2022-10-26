import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import LeftSidebar from "./LeftSidebar";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const courses = useLoaderData();
  const [drawer, setDrawer] = useState(true);
  // Handle Left Sidebar (Drawer)
  const handleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <div className="w-11/12 mx-auto flex-none sm:flex py-10 gap-4">
      <div className="sm:w-4/12 md:w-3/12 lg:w-2/12 z-50 sm:border-r-2 sm:border-primary pr-2">
        <div className="text-center sm:text-left my-10">
          <button onClick={handleDrawer} className="btn btn-primary mb-5">
            All Courser
          </button>
          {courses.map((course) => (
            <Link to={`/course/${course.id}`} key={course.id}>
              <h4 className="text-lg font-semibold mt-3 text-primary hover:text-secondary">
                {course.id}. {course.name}
              </h4>
            </Link>
          ))}
        </div>
        <LeftSidebar
          drawer={drawer}
          courses={courses}
          handleDrawer={handleDrawer}
        ></LeftSidebar>
      </div>

      <div className="sm:w-8/12 md:w-9/12 lg:w-10/12">
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
