import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";
import { AuthContext } from "../contexts/UserContext";

const LoginForm = ({ email, password }) => {
  const {
    logIn,
    setLoading,
    logOut,
    googleSignIn,
    githubSignIn,
    resetPassword,
  } = useContext(AuthContext);
  const { darkBtn } = useContext(DarkContext);
  const [resetPass, setResetPass] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  // Handle Submit Button
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // Login Control
    logIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();

        setError(e.message);
        if (user.emailVerified) {
          navigate(from, { replace: true });
          toast.success("Successfully Loggedin!!!");
        } else {
          toast.error("Please verify your email!!!");
          logOut()
            .then(() => {})
            .catch((e) => {
              console.log(e);
              setError(e.message);
            });
        }
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
        toast.error("Wrong Email or Password!!!");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Email Blur to set to call Reset password function
  const emailOnBlur = (e) => {
    const email = e.target.value;
    setResetPass(email);
  };
  // Reset password
  const handleResetPassword = () => {
    resetPassword(resetPass)
      .then(() => {
        toast.success("Please check your email to verify password!");
      })
      .catch((e) => {
        toast.error("Something wrong happening!");
        console.log(e);
      });
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully signed in with google!");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.success("Something wrong happening");
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
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.success("Something wrong happening");
        console.log(e);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={
          darkBtn
            ? "bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4"
            : "bg-accent shadow-md rounded px-8 pt-6 pb-8 mb-4"
        }
      >
        <h4 className="text-2xl font-bold text-center mb-5">Login</h4>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="username">
            Email
          </label>
          <input
            className={
              darkBtn
                ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            }
            id={email}
            onBlur={emailOnBlur}
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={
              darkBtn
                ? "bg-base-100 shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                : "bg-success shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            }
            id={password}
            type="password"
            name="password"
            placeholder="Password"
          />
        </div>

        <div className="md:flex md:items-center mt-4 mb-2">
          <label className="block font-bold">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              onChange={handleCheckboxChange}
              checked={isChecked}
            />
            <span className="text-sm">Accept all roles.</span>
          </label>
        </div>

        <p>
          <small className="text-sm font-semibold">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-orange-500 underline"
            >
              Please Register.
            </Link>
          </small>
        </p>
        <div className="flex items-center justify-between mt-5">
          <button
            className="btn btn-primary font-bold py-2 px-4 rounded"
            type="submit"
            disabled={!isChecked}
          >
            Sign In
          </button>
          <Link
            onClick={handleResetPassword}
            className="inline-block align-baseline font-bold text-sm text-primary hover:text-orange-500"
          >
            Forgot Password?
          </Link>
        </div>
        <p className="text-red-400">
          <small>{error}</small>
        </p>
      </form>
      <div className={darkBtn ? "divider text-black my-8" : "divider my-8"}>
        OR
      </div>
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

export default LoginForm;
