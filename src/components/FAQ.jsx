import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { DarkContext } from "../contexts/DarkProvider";

const FAQ = () => {
  const { darkBtn } = useContext(DarkContext);
  const faqDatas = useLoaderData();

  return (
    <div>
      <div className="w-11/12 mx-auto my-24">
        <h2 className="text-center mb-10 text-2xl md:text-4xl font-semibold">
          Frequently Asked Question
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {faqDatas.map((faq) => (
            <div key={faq.id}>
              <div
                className={
                  darkBtn
                    ? "collapse h-full p-2 collapse-arrow bg-gray-200 border border-primary rounded-md"
                    : "collapse h-full p-2 collapse-arrow bg-accent border rounded-md"
                }
              >
                <div className="text-primary text-xl font-semibold mb-2">
                  {faq.question}
                </div>
                <div className="">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
