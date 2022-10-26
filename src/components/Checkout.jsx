import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";

const Checkout = () => {
  const { name, img, lists } = useLoaderData();
  const { darkBtn } = useContext(DarkContext);

  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-20">
        <h1 className="flex items-center justify-center font-bold text-blue-600 text-2xl  sm:text-4xl">
          CHECKOUT YOUR COURSE
        </h1>
      </div>
      <div className="p-12 mx-auto">
        <div className="md:flex gap-5">
          <div
            className={
              darkBtn
                ? "bg-white md:w-2/5 shadow-md border rounded px-8 pt-6 pb-8 mb-4"
                : "bg-accent md:w-2/5 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            }
          >
            <h2 className="text-4xl font-bold text-center">{name}</h2>
            <img className="w-1/2 mx-auto mt-4" src={img} alt="" />
            <h4 className="text-2xl font-semibold mt-5">Skills you'll gain</h4>
            {/* ========= Maping For List of skills you'll gain ======== */}
            <div className="mt-3">
              {lists.map((list) => (
                <li key={list}>{list}</li>
              ))}
            </div>
          </div>

          {/* ======================== Customer Details Form ======================= */}
          <div
            className={
              darkBtn
                ? "bg-white md:w-3/5 shadow-md border rounded px-8 pt-6 pb-8 mb-4"
                : "bg-accent md:w-3/5 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            }
          >
            <form className="justify-center w-full mx-auto" method="post">
              <div className="">
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      First Name
                    </label>
                    <input
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      className={
                        darkBtn
                          ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      }
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="firstName"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Last Name
                    </label>
                    <input
                      className={
                        darkBtn
                          ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      }
                      name="Last Name"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Email"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Email
                    </label>
                    <input
                      className={
                        darkBtn
                          ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      }
                      name="Last Name"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="w-full">
                    <label
                      htmlFor="Address"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Address
                    </label>
                    <textarea
                      className={
                        darkBtn
                          ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      }
                      name="Address"
                      cols="20"
                      rows="4"
                      placeholder="Address"
                    ></textarea>
                  </div>
                </div>
                <div className="space-x-0 lg:flex lg:space-x-4">
                  <div className="w-full lg:w-1/2">
                    <label
                      htmlFor="city"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      City
                    </label>
                    <input
                      className={
                        darkBtn
                          ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      }
                      name="city"
                      type="text"
                      placeholder="City"
                    />
                  </div>
                  <div className="w-full lg:w-1/2 ">
                    <label
                      htmlFor="postcode"
                      className="block mb-3 text-sm font-semibold text-gray-500"
                    >
                      Postcode
                    </label>
                    <input
                      className={
                        darkBtn
                          ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                          : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      }
                      name="postcode"
                      type="text"
                      placeholder="Post Code"
                    />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <label className="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      className="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    />
                    <span className="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>
                <div className="relative pt-3 xl:pt-6">
                  <label
                    htmlFor="note"
                    className="block mb-3 text-sm font-semibold text-gray-500"
                  >
                    {" "}
                    Notes (Optional)
                  </label>
                  <textarea
                    name="note"
                    className={
                      darkBtn
                        ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    }
                    rows="4"
                    placeholder="Notes"
                  ></textarea>
                </div>
                <div className="mt-4">
                  <button className="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
                    Process
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
