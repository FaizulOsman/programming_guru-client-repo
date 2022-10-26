import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";

const Blog = () => {
  const { darkBtn } = useContext(DarkContext);
  const blogDatas = useLoaderData();
  console.log(blogDatas);

  return (
    <div>
      <div className="w-11/12 mx-auto my-24">
        <h2 className="text-center mb-10 text-xl md:text-4xl font-semibold">
          Questions And Answers
        </h2>
        <div className="w-11/12 mx-auto">
          {blogDatas.map((q) => (
            <div key={q.id}>
              <div
                tabIndex={0}
                className={
                  darkBtn
                    ? "collapse collapse-arrow bg-gray-200 mt-1 border border-primary rounded-md"
                    : "collapse collapse-arrow bg-accent mt-1 border rounded-md"
                }
              >
                <div className="collapse-title text-xl font-medium">
                  {q.question}
                </div>
                <div className="collapse-content">
                  <p>{q.answer}</p>
                  <h5 className="text-lg font-semibold my-2">{q?.list?.[0]}</h5>
                  {q?.list?.[1].map((list) => (
                    <li key={list}>{list}</li>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
