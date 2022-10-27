import { faCircleHalfStroke, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";
import { AuthContext } from "../contexts/UserContext";
import Logo from "../assets/logo.png";
import toast from "react-hot-toast";

const Header = ({ handleDrawer }) => {
  const { user, logOut } = useContext(AuthContext);
  const { darkBtn, handleDarkButton } = useContext(DarkContext);
  // Handle User Sign Out
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
    <div className="border-b-2 border-primary">
      <div className="navbar bg-transparent w-11/12 mx-auto">
        <div className="flex-1">
          <Link to="/" className="normal-case text-xl">
            <p className="flex items-center text-primary text-2xl font-bold">
              <img src={Logo} alt="" />
              <span className="hidden sm:block">Programming Guru</span>
              <span className="sm:hidden">PG</span>
            </p>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="hidden lg:block flex-none">
            <ul className="menu menu-horizontal p-0">
              <li>
                <NavLink className="font-semibold" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="font-semibold" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="font-semibold" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="font-semibold" to="/faq">
                  FAQ
                </NavLink>
              </li>
              {!user?.uid ? (
                <li tabIndex={0}>
                  <Link>
                    Sign In/Up
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </Link>
                  <ul
                    className={
                      darkBtn ? "p-2 z-50 bg-white" : "p-2 z-50 bg-accent"
                    }
                  >
                    <li>
                      <NavLink className="font-semibold" to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="font-semibold" to="/register">
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </li>
              ) : undefined}
              <li>
                <Link
                  title={
                    user?.displayName
                      ? user?.displayName
                      : "User name not found"
                  }
                  onClick={handleDrawer}
                >
                  {user?.photoURL ? (
                    <img
                      className="h-7 rounded-full border border-primary"
                      src={user.photoURL}
                      alt="user"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  )}
                </Link>
                {user?.uid && (
                  <ul className={darkBtn ? "p-2" : "p-2 bg-accent"}>
                    <li>
                      <NavLink
                        onClick={handleSignOut}
                        className="font-semibold"
                        to="/login"
                      >
                        Sign Out
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li
                onClick={handleDarkButton}
                className={darkBtn ? "rotate-180" : undefined}
                title={
                  darkBtn ? "You are in Light Mode" : "You are in Dark Mode"
                }
              >
                <Link className="flex items-center">
                  <FontAwesomeIcon
                    className="text-2xl text-primary p-0"
                    icon={faCircleHalfStroke}
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:hidden dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={
                darkBtn
                  ? "mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-200 rounded-box w-52"
                  : "mt-3 p-2 shadow menu menu-compact dropdown-content bg-accent rounded-box w-52"
              }
            >
              <li>
                <NavLink className="font-semibold" to="/home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="font-semibold" to="/courses">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink className="font-semibold" to="/blog">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink className="font-semibold" to="/faq">
                  FAQ
                </NavLink>
              </li>
              {!user?.uid ? (
                <>
                  <li>
                    <NavLink className="font-semibold" to="/login">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="font-semibold" to="/register">
                      Register
                    </NavLink>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    onClick={handleSignOut}
                    className="font-semibold"
                    to="/login"
                  >
                    Sign Out
                  </NavLink>
                </li>
              )}
              <li>
                <Link
                  title={
                    user?.displayName
                      ? user?.displayName
                      : "User name not found"
                  }
                  onClick={handleDrawer}
                >
                  {user?.photoURL ? (
                    <img
                      className="h-7 rounded-full border border-primary"
                      src={user.photoURL}
                      alt="user"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                  )}
                </Link>
                {user?.uid && (
                  <ul className={darkBtn ? "p-2" : "p-2 bg-accent"}>
                    <li>
                      <NavLink
                        onClick={handleSignOut}
                        className="font-semibold"
                        to="/login"
                      >
                        Sign Out
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li
                onClick={handleDarkButton}
                className={darkBtn ? "rotate-180" : undefined}
                title={
                  darkBtn ? "You are in Light Mode" : "You are in Dark Mode"
                }
              >
                <Link className="flex items-center">
                  <FontAwesomeIcon
                    className="text-2xl text-primary p-0"
                    icon={faCircleHalfStroke}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
