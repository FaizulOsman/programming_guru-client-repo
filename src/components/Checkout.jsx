import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const { name } = useLoaderData();

  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-5xl font-bold">{name}</h2>
    </div>
  );
};

export default Checkout;
