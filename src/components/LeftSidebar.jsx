import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";

const LeftSidebar = ({ drawer, handleDrawer, courses }) => {
  const { darkBtn } = useContext(DarkContext);

  return (
    <div>
      <div
        style={drawer ? { marginLeft: "-300px" } : { margin: "0" }}
        className={
          darkBtn
            ? "bg-white z-50 border-primary border-r-2 border-b-2 p-2 w-[40%] md:w-72 duration-500 min-h-screen absolute top-0 left-0"
            : "bg-accent z-50 border-primary border-r-2 border-b-2 p-2 w-[40%] md:w-72 duration-500 min-h-screen absolute top-0 left-0"
        }
      >
        <div className="flex justify-between">
          <h4 className="font-semibold">Filter Your Courses</h4>
          <button
            onClick={handleDrawer}
            className="hover:rotate-180 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="ml-5 mt-20">
          <h4 className="text-xl font-bold">All Courses</h4>
          {courses.map((course) => (
            <Link to={`/course/${course.id}`} key={course.id}>
              <h4 className="text-lg font-semibold mt-3 text-primary underline">
                {course.id}. {course.name}
              </h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
