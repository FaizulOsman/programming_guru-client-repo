import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";
import Lottie from "lottie-react";
import lottieError from "../assets/lottieError404.json";

const ErrorPage = () => {
  const errorMessage = useRouteError();
  const { darkBtn } = useContext(DarkContext);

  return (
    <div>
      <section
        className={
          darkBtn
            ? "flex items-center h-screen p-16 text-gray-900"
            : "flex items-center h-screen p-16 bg-accent text-gray-900"
        }
      >
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="w-52">
            <Lottie animationData={lottieError} loop={true} />
          </div>
          <div className="max-w-md text-center">
            <h2 className="mb-4 font-extrabold text-6xl text-red-400">
              {/* <span className="sr-only">Error</span> */}
            </h2>
            <p className="text-2xl font-semibold text-red-500 md:text-3xl mb-4">
              {errorMessage.status} {errorMessage.statusText}
            </p>
            <p className="text-2xl font-semibold text-gray-600 md:text-3xl mb-8">
              Sorry, we couldn't find this page.
            </p>

            <div>
              <Link
                to={`/`}
                className={
                  darkBtn
                    ? "badge badge-outline border hover:bg-primary p-4"
                    : "badge badge-outline border border-white text-white hover:bg-primary p-4"
                }
              >
                <span className="mr-2">Back to Homepage</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErrorPage;
