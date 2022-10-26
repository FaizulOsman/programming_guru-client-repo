import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Checkout from "../components/Checkout";
import CourseDetail from "../components/CourseDetail";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      {
        path: "/courses",
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-faizul-osman.vercel.app/courses"
          ),
        element: <Courses></Courses>,
      },
      {
        path: "/course/:id",
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-faizul-osman.vercel.app/course/${params.id}`
          ),
        element: <CourseDetail></CourseDetail>,
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-faizul-osman.vercel.app/course/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/faq",
        loader: () =>
          fetch(
            `https://b610-lerning-platform-server-side-faizul-osman.vercel.app/faq`
          ),
        element: <FAQ></FAQ>,
      },
      {
        path: "/blog",
        loader: () =>
          fetch(
            `https://b610-lerning-platform-server-side-faizul-osman.vercel.app/blog`
          ),
        element: <Blog></Blog>,
      },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
    ],
  },
]);
