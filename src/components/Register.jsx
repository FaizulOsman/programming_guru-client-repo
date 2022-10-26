import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";
import { AuthContext } from "../contexts/UserContext";

const Register = () => {
  const {
    createUser,
    updateUserProfile,
    verifyEmail,
    logOut,
    googleSignIn,
    githubSignIn,
  } = useContext(AuthContext);
  const { darkBtn } = useContext(DarkContext);
  // Handle Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    // Create User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        // Update User Profile Name!
        updateUserProfile(name, photoURL)
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });

        // Email verification sent!
        verifyEmail()
          .then(() => {
            logOut();
          })
          .catch((e) => console.log(e));
        toast.success("Please verify your email!");
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong!");
      });
  };
  // Google Sign In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully signed in with google!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // handleGithubSignIn Sign In
  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        user.emailVerified = true;
        console.log(user);
        toast.success("Successfully signed in with github!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // INPUT FIELD CONTROLLED BY REACT FOR MAKING ERROR INSTANTLY (only for email and password)
  const [errorOnChange, setErrorOnChange] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
      setErrorOnChange({
        ...errorOnChange,
        email: "Please provide a valid email.",
      });
    } else {
      setErrorOnChange({ errorOnChange, email: "" });
    }
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;

    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(passwordValue)
    ) {
      setErrorOnChange({
        ...errorOnChange,
        password:
          "Please provide a valid password (Includes [a-z], [A-Z], [0-9], [password >= 8]).",
      });
    } else {
      setErrorOnChange({ errorOnChange, password: "" });
    }
  };

  return (
    <div className="w-8/12 mx-auto max-w-md py-10">
      <form
        onSubmit={handleSubmit}
        className={
          darkBtn
            ? "bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4"
            : "bg-accent text-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        }
      >
        <h4 className="text-2xl font-bold text-center mb-5">
          Create an account
        </h4>
        <div className="mb-4">
          <label className="block  text-sm font-bold mb-2" htmlFor="username">
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
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="photoURL">
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
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            onChange={handleEmailChange}
            className={
              darkBtn
                ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            }
            id="email"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>

        {errorOnChange.email && (
          <p className="text-red-500">
            <small>{errorOnChange.email}</small>
          </p>
        )}

        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            className={
              darkBtn
                ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            }
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        {errorOnChange.password && (
          <p className="text-red-500">
            <small>{errorOnChange.password}</small>
          </p>
        )}

        <div className="">
          <button
            className="w-full bg-primary hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Create An account
          </button>
          <p className="text-center mt-5">
            Already have an acount?{" "}
            <Link
              to="/login"
              className="text-primary underline hover:text-orange-500"
            >
              Login
            </Link>
          </p>
        </div>
      </form>
      <div className="divider my-8">OR</div>
      <div
        className={
          !darkBtn
            ? "bg-accent rounded-lg p-4"
            : "bg-white shadow-md border rounded-lg p-4"
        }
      >
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-primary w-full border rounded-2xl"
        >
          Continue with Google
        </button>
        <button
          onClick={handleGithubSignIn}
          className="btn btn-outline btn-neutral w-full border rounded-2xl mt-5"
        >
          Continue with Github
        </button>
      </div>
    </div>
  );
};

export default Register;
