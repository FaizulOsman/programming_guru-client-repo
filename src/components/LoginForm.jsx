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
    verifyEmail,
  } = useContext(AuthContext);
  const { darkBtn } = useContext(DarkContext);
  const [resetPass, setResetPass] = useState("");

  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

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
        toast.error("Please check your email to verify password");
      })
      .catch((e) => {
        toast.success("Something wrong happening");
        console.log(e);
      });
  };

  // Google Sign In
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Successfully signed in with google!");
        navigate("/");
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
        navigate("/");
      })
      .catch((e) => {
        toast.success("Something wrong happening");
        console.log(e);
      });
  };

  // INPUT FIELD CONTROLLED BY REACT
  const [errorOnChange, setErrorOnChange] = useState({
    email: "",
    password: "",
  });
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailValue)) {
      setErrorOnChange({
        ...errorOnChange,
        email: "Please provide a valid email.",
      });
      setUserInfo({ ...userInfo, email: emailValue });
    } else {
      setErrorOnChange({ errorOnChange, email: "" });
      setUserInfo({ ...userInfo, email: emailValue });
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
      setUserInfo({ ...userInfo, password: passwordValue });
    } else {
      setErrorOnChange({ errorOnChange, password: "" });
      setUserInfo({ ...userInfo, password: passwordValue });
    }
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
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
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

        <div className="md:flex md:items-center mt-4 mb-2">
          <label className="block font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
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
            className="bg-primary hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
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
