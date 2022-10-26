import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import lottieCodingDark from "../assets/lottieCodingdark.json";
import lottieCodingLight from "../assets/lottieCodingLight.json";
import { DarkContext } from "../contexts/DarkProvider";

const Home = () => {
  const { darkBtn } = useContext(DarkContext);

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
        <div className="md:flex md:flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6 lg:mt-8">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-400">
                  On Sale!
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                A learner lives a <br className="hidden md:block" /> thousand
                lives{" "}
                <span className="inline-block text-primary">
                  before he dies
                </span>
              </h2>
              <p className="text-base text-gray-500 md:text-lg">
                Any fool can write code that a computer can understand. Good
                programmers write code that humans can understand.
              </p>
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-primary hover:bg-blue-800 focus:shadow-outline focus:outline-none"
              >
                <span className="mr-3">Visit courses</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="4,4 22,4 19,14 4,14 "
                  />
                  <circle
                    cx="4"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                  />
                  <circle
                    cx="20"
                    cy="22"
                    r="2"
                    strokeLinejoin="miter"
                    strokeLinecap="square"
                    stroke="none"
                    fill="currentColor"
                  />
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeMiterlimit="10"
                    points="1,1 4,4 4,14 2,18 23,18 "
                  />
                </svg>
              </Link>
              <Link
                to="/faq"
                aria-label=""
                className="inline-flex items-center font-semibold hover:text-blue-700 transition-colors duration-200"
              >
                Learn More...
              </Link>
            </div>
          </div>
          <div className="my-10 lg:w-1/2">
            <div className="w-full lg:w-4/5 lg:ml-auto">
              {darkBtn ? (
                <Lottie animationData={lottieCodingLight} loop={true} />
              ) : (
                <Lottie animationData={lottieCodingDark} loop={true} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
