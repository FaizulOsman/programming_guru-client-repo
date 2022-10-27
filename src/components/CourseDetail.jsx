import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";
import { useReactToPrint } from "react-to-print";

const CourseDetail = () => {
  const { id, name, img, description, lists } = useLoaderData();

  // Print as PDF Control
  const componentRef = useRef();
  const handlelPrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
    onAfterPrint: () => toast.success("Successfully printed as PDF"),
  });

  return (
    <>
      <div ref={componentRef}>
        <div className="w-11/12 mx-auto my-20">
          <div className="flex-none md:flex">
            <div className="md:w-5/12 p-10 my-auto">
              <img src={img} className="w-3/4 mx-auto" alt="img" />
            </div>
            <div className="md:w-7/12 flex flex-col justify-center items-center md:border-l-2 md:pl-10">
              <div className="">
                <h2 className="text-5xl font-bold">
                  {name}
                  <Link
                    onClick={handlelPrint}
                    className="badge badge-outline hover:bg-primary hover:text-white p-4 ml-5"
                  >
                    <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                  </Link>
                </h2>
                <p className="py-5">{description}</p>
                <h4 className="text-2xl font-semibold">Skills you'll gain</h4>
                {/* ========= Maping For List of skills you'll gain ======== */}
                <div className="mt-5 mb-10">
                  {lists.map((list) => (
                    <li key={list}>{list}</li>
                  ))}
                </div>
                {/* ========= Maping For Dynamic Button (Get premium access) ======== */}
                <div>
                  <Link
                    to={`/checkout/${id}`}
                    className="badge badge-outline hover:bg-primary hover:text-white p-4"
                  >
                    <span className="mr-2">Get premium access</span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetail;
