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
                Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                mechanism that allows a server to indicate any origins (domain,
                scheme, or port) other than its own from which a browser should
                permit loading resources. CORS also relies on a mechanism by
                which browsers make a "preflight" request to the server hosting
                the cross-origin resource, in order to check that the server
                will permit the actual request. In that preflight, the browser
                sends headers that indicate the HTTP method and headers that
                will be used in the actual request.
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
                Google Firebase offers many features that pitch it as the go-to
                backend development tool for web and mobile apps. Firebase helps
                us develop high-quality apps.
              </p>
              <h5 className="text-lg font-semibold my-2">
                Top 10+ Firebase Alternatives
              </h5>
              <li>Back4App</li>
              <li>Parse</li>
              <li>AWS Amplify</li>
              <li>Backendless</li>
              <li>KUZZLE</li>
              <li>Supabase</li>
              <li>Appwrite</li>
              <li>HASURA</li>
              <li>nHOST</li>
              <li>deployd</li>
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
                Private Routes in React Router (also called Protected Routes)
                require a user being authorized to visit a route (read: page).
                So if a user is not authorized for a specific page, they cannot
                access it. The most common example is authentication in a React
                application where a user can only access the protected pages
                when they are authorized (which means in this case being
                authenticated). Authorization goes beyond authentication though.
                For example, a user can also have roles and permissions which
                give a user access to specific areas of the application.
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
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
