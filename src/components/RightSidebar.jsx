import { faCodeCompare, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";
import LoginForm from "./LoginForm";

const RightSidebar = ({ drawer, handleDrawer }) => {
  const { user, googleSignIn, logOut } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully signed in with google!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSignOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfull signed out!!!");
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
        className="bg-primary border-l-2 border-primary border-b-2 p-2 w-72 duration-1000 min-h-screen absolute top-0 right-0"
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
        <div className="text-white text-center font-semibold">
          <p>Do not have an account?</p>
          <Link className="underline text-blue-600" to="/register">
            Create Account
          </Link>
        </div>
        <div className="text-center mt-5 bg-white rounded-md py-3">
          <p>Or sign in with:</p>
          <button
            onClick={handleGoogleSignIn}
            className="bg-blue-600 text-white rounded-md w-8/12 mt-2 p-2 border-none"
          >
            Google
          </button>
        </div>
        <div className="bg-white mt-3 p-2 rounded-md">
          <FontAwesomeIcon className="text-red-600" icon={faHeart} />
          <span className="ml-2">Wishlist (0)</span>
        </div>
        <div className="bg-white mt-3 p-2 rounded-md">
          <FontAwesomeIcon icon={faCodeCompare} />
          <span className="ml-2">Compare (0)</span>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
