import { faArrowRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReactToPdf from "react-to-pdf";
import { createRef } from "react";

const CourseDetail = () => {
  const { id, name, img, description, type, lists, price } = useLoaderData();
  const ref = createRef();

  return (
    <>
      <div ref={ref}>
        <div className="w-11/12 mx-auto my-20">
          <div className="flex-none md:flex">
            <div className="md:w-5/12 p-10 my-auto">
              <img src={img} className="w-3/5 md:w-3/4 mx-auto" alt="img" />
            </div>
            <div className="md:w-7/12 flex flex-col justify-center items-center md:border-l-2 md:pl-10">
              <div className="">
                <div className="flex">
                  <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    {name}
                  </h2>
                  <div
                    className={
                      type === "Free"
                        ? "badge badge-primary"
                        : "badge badge-secondary"
                    }
                  >
                    {type}
                  </div>
                  {/* ============ React to PDF (Option) ============ */}
                  <div className="flex items-center">
                    <ReactToPdf
                      targetRef={ref}
                      filename={`Programming-Guru-${name}.pdf`}
                      x={-30}
                      y={0.5}
                      scale={0.8}
                    >
                      {({ toPdf }) => (
                        <Link
                          onClick={toPdf}
                          className="badge badge-outline hover:bg-primary hover:text-white p-4 ml-5"
                        >
                          <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                        </Link>
                      )}
                    </ReactToPdf>
                  </div>
                </div>

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
                  <div className="badge badge-info ml-5">Price ${price}</div>
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
