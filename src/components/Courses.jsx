import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";
import LeftSidebar from "./LeftSidebar";

const Courses = () => {
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
          <div
            className={darkBtn ? "card shadow-xl" : "card bg-accent shadow-xl"}
          >
            <figure>
              <img src="" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                JavaScript
                <div className="badge badge-secondary">Quiz 00</div>
              </h2>
              <p>
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/course/1`}
                  className="badge badge-outline hover:bg-primary p-4"
                >
                  <span className="mr-2">Start Practice</span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={darkBtn ? "card shadow-xl" : "card bg-accent shadow-xl"}
          >
            <figure>
              <img src="" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Python
                <div className="badge badge-secondary">Quiz 00</div>
              </h2>
              <p>
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/quiz/`}
                  className="badge badge-outline hover:bg-primary p-4"
                >
                  <span className="mr-2">Start Practice</span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={darkBtn ? "card shadow-xl" : "card bg-accent shadow-xl"}
          >
            <figure>
              <img src="" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Python
                <div className="badge badge-secondary">Quiz 00</div>
              </h2>
              <p>
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/quiz/`}
                  className="badge badge-outline hover:bg-primary p-4"
                >
                  <span className="mr-2">Start Practice</span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={darkBtn ? "card shadow-xl" : "card bg-accent shadow-xl"}
          >
            <figure>
              <img src="" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Python
                <div className="badge badge-secondary">Quiz 00</div>
              </h2>
              <p>
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/quiz/`}
                  className="badge badge-outline hover:bg-primary p-4"
                >
                  <span className="mr-2">Start Practice</span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={darkBtn ? "card shadow-xl" : "card bg-accent shadow-xl"}
          >
            <figure>
              <img src="" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Python
                <div className="badge badge-secondary">Quiz 00</div>
              </h2>
              <p>
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/quiz/`}
                  className="badge badge-outline hover:bg-primary p-4"
                >
                  <span className="mr-2">Start Practice</span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
          <div
            className={darkBtn ? "card shadow-xl" : "card bg-accent shadow-xl"}
          >
            <figure>
              <img src="" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                C++
                <div className="badge badge-secondary">Quiz 00</div>
              </h2>
              <p>
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </p>
              <div className="card-actions justify-end">
                <Link
                  to={`/quiz/`}
                  className="badge badge-outline hover:bg-primary p-4"
                >
                  <span className="mr-2">Start Practice</span>
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
