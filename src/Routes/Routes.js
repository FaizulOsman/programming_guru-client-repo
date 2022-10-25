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
      { path: "/courses", element: <Courses></Courses> },
      { path: "/course/:id", element: <CourseDetail></CourseDetail> },
      { path: "/faq", element: <FAQ></FAQ> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
