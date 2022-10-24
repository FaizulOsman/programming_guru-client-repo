import React, { createContext, useState } from "react";

export const DarkContext = createContext();

const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(false);

  const setDarkMode = () => {
    setDark(!dark);
    console.log(dark);
  };

  const darkInfo = { dark, setDarkMode };

  return (
    <DarkContext.Provider value={darkInfo}>{children}</DarkContext.Provider>
  );
};

export default DarkProvider;
