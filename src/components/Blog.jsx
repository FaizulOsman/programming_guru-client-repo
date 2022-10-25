import React, { useContext } from "react";
import { DarkContext } from "../contexts/DarkProvider";

const Blog = () => {
  const { darkBtn } = useContext(DarkContext);

  return (
    <div>
      <div className="w-11/12 mx-auto my-24">
        <h2 className="text-center mb-10 text-xl md:text-4xl font-semibold">
          Questions And Answers
        </h2>
        <div className="w-11/12 mx-auto">
          <div
            tabIndex={0}
            className={
              darkBtn
                ? "collapse collapse-arrow bg-gray-200 mt-1 border border-primary rounded-md"
                : "collapse collapse-arrow bg-accent mt-1 border rounded-md"
            }
          >
            <div className="collapse-title text-xl font-medium">
              What is cors?
            </div>
            <div className="collapse-content">
              <p>
                ReactJS Router is mainly used for developing Single Page Web
                Applications. React Router is used to define multiple routes in
                the application. React Router is a standard library for routing
                in React. It enables the navigation among views of various
                components in a React Application, allows changing the browser
                URL, and keeps the UI in sync with the URL.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className={
              darkBtn
                ? "collapse collapse-arrow bg-gray-200 mt-1 border border-primary rounded-md"
                : "collapse collapse-arrow bg-accent mt-1 border rounded-md"
            }
          >
            <div className="collapse-title text-xl font-medium">
              Why are you using firebase? What other options do you have to
              implement authentication?
            </div>
            <div className="collapse-content">
              <p>
                In a typical React application, data is passed top-down (parent
                to child) via props, but such usage can be cumbersome for
                certain types of props (e.g. locale preference, UI theme) that
                are required by many components within an application. Context
                provides a way to share values like these between components
                without having to explicitly pass a prop through every level of
                the tree.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className={
              darkBtn
                ? "collapse collapse-arrow bg-gray-200 mt-1 border border-primary rounded-md"
                : "collapse collapse-arrow bg-accent mt-1 border rounded-md"
            }
          >
            <div className="collapse-title text-xl font-medium">
              How does the private route works?
            </div>
            <div className="collapse-content">
              <p>
                useRef returns a mutable ref object whose .current property is
                initialized to the passed argument ( initialValue ). The
                returned object will persist for the full lifetime of the
                component. Essentially, useRef is like a “box” that can hold a
                mutable value in its .current property.
                <li>
                  The useRef Hook allows you to persist values between renders.
                  It can be used to access a DOM element directly.
                </li>
                <li>
                  It can be used to store a mutable value that does not cause a
                  re-render when updated.
                </li>
                <li>It can be used to access a DOM element directly.</li>
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className={
              darkBtn
                ? "collapse collapse-arrow bg-gray-200 mt-1 border border-primary rounded-md"
                : "collapse collapse-arrow bg-accent border mt-1 rounded-md"
            }
          >
            <div className="collapse-title text-xl font-medium">
              What is Node? How does Node works?
            </div>
            <div className="collapse-content">
              <p>
                useRef returns a mutable ref object whose .current property is
                initialized to the passed argument ( initialValue ). The
                returned object will persist for the full lifetime of the
                component. Essentially, useRef is like a “box” that can hold a
                mutable value in its .current property.
                <li>
                  The useRef Hook allows you to persist values between renders.
                  It can be used to access a DOM element directly.
                </li>
                <li>
                  It can be used to store a mutable value that does not cause a
                  re-render when updated.
                </li>
                <li>It can be used to access a DOM element directly.</li>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
