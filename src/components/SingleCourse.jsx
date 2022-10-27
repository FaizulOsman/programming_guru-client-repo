import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";

const SingleCourse = ({ course }) => {
  const { img, name, description, type, price } = course;
  const { darkBtn } = useContext(DarkContext);
  const [wishList, setWishList] = useState(false);

  const handleWishList = () => {
    if (!wishList) {
      toast.success("Added to WishList");
    } else {
      toast.error("removed from WishList");
    }

    setWishList(!wishList);
  };

  return (
    <div>
      <div className={darkBtn ? "card shadow-xl" : "card bg-accent shadow-xl"}>
        <figure>
          <img className="h-64 p-2" src={img} alt="img" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
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
            <FontAwesomeIcon
              onClick={handleWishList}
              className={wishList ? "text-red-600" : undefined}
              icon={faHeart}
            />
          </div>
          <p>
            {description.length > 80
              ? description.slice(0, 80) + " ..."
              : description}
          </p>
          <div className="card-actions justify-between items-center">
            <div className="badge badge-info">Price ${price}</div>
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
