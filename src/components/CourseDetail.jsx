import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetail = () => {
  const { name, img, description } = useLoaderData();

  return (
    <div className="w-11/12 mx-auto py-20">
      <div className="flex-none md:flex">
        <div className="md:w-5/12 p-10">
          <img src={img} className="w-full" alt="img" />
        </div>
        <div className="md:w-7/12 flex flex-col justify-center items-center">
          <div className="">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="py-5">{description}</p>
            <Link
              to="/checkout"
              className="badge badge-outline hover:bg-primary p-4"
            >
              <span className="mr-2">Get premium access</span>
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </Link>
            <Link className="badge badge-outline hover:bg-primary p-4 ml-5">
              <span className="mr-2">Download PDF</span>
              <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
