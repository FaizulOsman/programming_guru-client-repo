import { faCodeCompare, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";
import { AuthContext } from "../contexts/UserContext";
import LoginForm from "./LoginForm";

const RightSidebar = ({ drawer, handleDrawer }) => {
  const { user, logOut } = useContext(AuthContext);
  const { darkBtn } = useContext(DarkContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully signed out!!!");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something wrong!!!");
      });
  };

  return (
    <div>
      <div
        style={drawer ? { marginTop: "-1000px" } : { margin: "0" }}
        className="z-50 bg-primary border-l-2 border-primary border-b-2 p-2 w-72 duration-1000 min-h-screen absolute top-0 right-0"
      >
        <div className="flex justify-between bg-white p-2 rounded-md">
          {!user?.email ? (
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

        <div className="max-w-md mt-5">
          <LoginForm email={"email2"} password={"pass2"}></LoginForm>
        </div>
        <div className="text-white text-center font-semibold my-4">
          <p>Do not have an account?</p>
          <Link className="underline text-secondary" to="/register">
            Create Account
          </Link>
        </div>
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
