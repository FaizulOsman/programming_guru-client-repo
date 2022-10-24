import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const LoginForm = ({ email, password }) => {
  const { logIn, setLoading, logOut, googleSignIn } = useContext(AuthContext);
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
    <div className="">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4"
      >
        <h4 className="text-2xl font-semibold mb-5">Login</h4>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id={email}
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
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
          <label className="block text-gray-500 font-bold">
            <input className="mr-2 leading-tight" type="checkbox" />
            <span className="text-sm">Accept all roles.</span>
          </label>
        </div>

        <p>
          <small className="text-sm font-semibold">
            Don't have an account?{" "}
            <Link to="/register" className="text-orange-400 underline">
              Please Register.
            </Link>
          </small>
        </p>
        <div className="flex items-center justify-between mt-5">
          <button
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <Link
            className="inline-block align-baseline font-bold text-sm text-orange-400 hover:text-orange-500"
            href="#"
          >
            Forgot Password?
          </Link>
        </div>
        <p className="text-red-400">
          <small>{error}</small>
        </p>
      </form>
      <div className="divider my-8">OR</div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline btn-primary w-full border rounded-2xl"
      >
        Continue with Google
      </button>
    </div>
  );
};

export default LoginForm;
