import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="w-8/12 mx-auto max-w-md py-10">
      <LoginForm email={"email1"} password={"pass1"}></LoginForm>
    </div>
  );
};

export default Login;
