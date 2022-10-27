import {
  faCodeCompare,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";
import { AuthContext } from "../contexts/UserContext";
import LoginForm from "./LoginForm";

const RightSidebar = ({ drawer, handleDrawer }) => {
  const { user, logOut, updateUserProfile, setLoading } =
    useContext(AuthContext);
  const { darkBtn } = useContext(DarkContext);
  // User Log Out
  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully signed out!!!");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something wrong!!!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const photoURL = form.photoURL.value;
    // Update User Profile Name!
    updateUserProfile(name, photoURL)
      .then(() => {
        form.reset();
        toast.success("Successfully profile updated!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Something went wrong!!!");
      });
  };

  return (
    <div>
      <div
        style={drawer ? { marginTop: "-1500px" } : { margin: "0" }}
        className="z-50 bg-primary border-l-2 border-primary border-b-2 p-2 w-72 duration-1000 min-h-screen absolute top-0 right-0"
      >
        <div className="flex justify-between bg-white p-2 rounded-md">
          {!user?.uid ? (
            <Link to="/login" className="font-semibold text-blue-600">
              Sign In
            </Link>
          ) : (
            <Link
              onClick={handleSignOut}
              className="font-semibold text-blue-600"
            >
              Sign Out
            </Link>
          )}
          <button
            onClick={handleDrawer}
            className="hover:rotate-180 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* ============= User Profile ============= */}
        {user?.uid ? (
          <>
            <div
              className={
                darkBtn
                  ? "bg-white mt-3 p-2 rounded-md"
                  : "bg-accent mt-3 p-2 rounded-md"
              }
            >
              <div className="w-1/3 mx-auto py-2">
                {user?.photoURL ? (
                  <img
                    className="rounded-full my-2 h-20"
                    src={user?.photoURL}
                    alt=""
                  />
                ) : (
                  <FontAwesomeIcon
                    className="rounded-full my-2 h-20"
                    icon={faUser}
                  />
                )}
              </div>
              <h4 className="text-xl font-semibold text-center">
                {user?.displayName}
              </h4>
              <p className="font-semibold text-center">
                <small>{user?.email}</small>
              </p>
            </div>

            {/* ============== Update Profile =========== */}
            {!(user?.displayName || user?.photoURL) ? (
              <div className="mt-4">
                <form
                  onSubmit={handleSubmit}
                  className={
                    darkBtn
                      ? "bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4"
                      : "bg-accent shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  }
                >
                  <h4 className="text-2xl font-bold text-center mb-5">
                    Update Profile
                  </h4>
                  {!user?.displayName ? (
                    <div className="mb-4">
                      <label
                        className="block  text-sm font-bold mb-2"
                        htmlFor="username"
                      >
                        Full Name
                      </label>
                      <input
                        className={
                          darkBtn
                            ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        }
                        id="fullName"
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                      />
                    </div>
                  ) : undefined}
                  {!user?.photoURL ? (
                    <div className="mb-4">
                      <label
                        className="block text-sm font-bold mb-2"
                        htmlFor="photoURL"
                      >
                        Photo URL
                      </label>
                      <input
                        className={
                          darkBtn
                            ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        }
                        id="photoURL"
                        type="text"
                        name="photoURL"
                        placeholder="Photo URL"
                      />
                    </div>
                  ) : undefined}

                  <div className="flex items-center justify-between mt-5">
                    <button
                      className="btn btn-primary font-bold py-2 px-4 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            ) : undefined}
          </>
        ) : (
          <>
            {/* ============== Login Form =============== */}
            <div className="max-w-md mt-5">
              <LoginForm email={"email2"} password={"pass2"}></LoginForm>
            </div>
            <div className="text-white text-center font-semibold my-4">
              <p>Do not have an account?</p>
              <Link className="underline text-secondary" to="/register">
                Create Account
              </Link>
            </div>
          </>
        )}

        <div
          className={
            darkBtn
              ? "bg-white mt-3 p-2 rounded-md"
              : "bg-accent mt-3 p-2 rounded-md"
          }
        >
          <FontAwesomeIcon className="text-red-600" icon={faHeart} />
          <span className="ml-2">Wishlist (0)</span>
        </div>
        <div
          className={
            darkBtn
              ? "bg-white mt-3 p-2 rounded-md"
              : "bg-accent mt-3 p-2 rounded-md"
          }
        >
          <FontAwesomeIcon icon={faCodeCompare} />
          <span className="ml-2">Compare (0)</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
