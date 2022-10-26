import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";

const SingleCourse = ({ course }) => {
  const { img, name, description, type } = course;
  const { darkBtn } = useContext(DarkContext);

  return (
    <div>
      <div className={darkBtn ? "card shadow-xl" : "card bg-accent shadow-xl"}>
        <figure>
          <img className="h-64 p-2" src={img} alt="img" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div
              className={
                type === "Free"
                  ? "badge badge-primary"
                  : "badge badge-secondary"
              }
            >
              {type}
            </div>
          </h2>
          <p>
            {description.length > 80
              ? description.slice(0, 80) + " ..."
              : description}
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/course/${course.id}`}
              className="badge badge-outline hover:bg-primary hover:text-white p-4"
            >
              <span className="mr-2">Course Details</span>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
