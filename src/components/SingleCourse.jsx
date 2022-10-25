import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";

const SingleCourse = ({ course }) => {
  const { img, name, description } = course;
  const { darkBtn } = useContext(DarkContext);

  return (
    <div>
      <div className={darkBtn ? "card shadow-xl" : "card bg-accent shadow-xl"}>
        <figure>
          <img className="h-64 p-2" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">Quiz 00</div>
          </h2>
          <p>
            {description.length > 100
              ? description.slice(0, 100) + " ..."
              : description}
          </p>
          <div className="card-actions justify-end">
            <Link
              to={`/course/${course.id}`}
              className="badge badge-outline hover:bg-primary p-4"
            >
              <span className="mr-2">Start Practice</span>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;