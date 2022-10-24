import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

const Register = () => {
  const { createUser, updateUserProfile, verifyEmail, logOut, googleSignIn } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const name = firstName + lastName;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

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

  return (
    <div className="w-8/12 mx-auto max-w-md my-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4"
      >
        <h4 className="text-2xl font-semibold mb-5">Create an account</h4>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="photoURL"
          >
            Photo URL
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="photoURL"
            type="text"
            name="photoURL"
            placeholder="Photo URL"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
          />
          <p className="text-red-500 text-xs italic">
            Please choose a password.
          </p>
        </div>
        <div className="">
          <button
            className="w-full bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Create An account
          </button>
          <p className="text-center mt-5">
            Already have an acount?{" "}
            <Link to="/login" className="text-orange-400">
              Login
            </Link>
          </p>
        </div>
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

export default Register;
