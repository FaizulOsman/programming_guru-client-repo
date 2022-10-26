import React, { createContext, useState } from "react";

export const DarkContext = createContext();

const DarkProvider = ({ children }) => {
  const [darkBtn, setDarkBtn] = useState(false);
  const [dark, setDark] = useState(false);
  // Handle Dark Button
  const handleDarkButton = () => {
    setDarkBtn(!darkBtn);
    console.log(darkBtn);
  };

  const setDarkMode = () => {
    setDark(!dark);
  };

  const darkInfo = { dark, setDarkMode, handleDarkButton, darkBtn };

  return (
    <DarkContext.Provider value={darkInfo}>{children}</DarkContext.Provider>
  );
};

export default DarkProvider;
