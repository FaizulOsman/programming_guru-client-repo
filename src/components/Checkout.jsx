import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";

const Checkout = () => {
  const { name, img, lists } = useLoaderData();
  const { darkBtn } = useContext(DarkContext);

  return (
    <div className="w-11/12 mx-auto">
      <div class="mt-20">
        <h1 class="flex items-center justify-center font-bold text-blue-600 text-2xl  sm:text-4xl">
          CHECKOUT YOUR COURSE
        </h1>
      </div>
      <div class="p-12 mx-auto">
        <div class="md:flex gap-5">
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
            <h2 class="mb-4 font-bold md:text-xl text-heading ">
              Shipping Address
            </h2>
            <form class="justify-center w-full mx-auto" method="post" action>
              <div class="">
                <div class="space-x-0 lg:flex lg:space-x-4">
                  <div class="w-full lg:w-1/2">
                    <label
                      for="firstName"
                      class="block mb-3 text-sm font-semibold text-gray-500"
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
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="firstName"
                      class="block mb-3 text-sm font-semibold text-gray-500"
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
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Email"
                      class="block mb-3 text-sm font-semibold text-gray-500"
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
                <div class="mt-4">
                  <div class="w-full">
                    <label
                      for="Address"
                      class="block mb-3 text-sm font-semibold text-gray-500"
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
                <div class="space-x-0 lg:flex lg:space-x-4">
                  <div class="w-full lg:w-1/2">
                    <label
                      for="city"
                      class="block mb-3 text-sm font-semibold text-gray-500"
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
                  <div class="w-full lg:w-1/2 ">
                    <label
                      for="postcode"
                      class="block mb-3 text-sm font-semibold text-gray-500"
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
                <div class="flex items-center mt-4">
                  <label class="flex items-center text-sm group text-heading">
                    <input
                      type="checkbox"
                      class="w-5 h-5 border border-gray-300 rounded focus:outline-none focus:ring-1"
                    />
                    <span class="ml-2">
                      Save this information for next time
                    </span>
                  </label>
                </div>
                <div class="relative pt-3 xl:pt-6">
                  <label
                    for="note"
                    class="block mb-3 text-sm font-semibold text-gray-500"
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
                <div class="mt-4">
                  <button class="w-full px-6 py-2 text-blue-200 bg-blue-600 hover:bg-blue-900">
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
