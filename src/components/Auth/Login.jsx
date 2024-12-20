/** @format */

import React, { useState } from "react";


const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password)
    setEmail("")
    setPassword("")
    
  };

  return (
    <div className="flex  h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          action=""
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 placeholder:text-gray-600"
            type="email"
            placeholder="Enter your email "
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full py-3 px-5 mt-4 placeholder:text-gray-600"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-7 text-white border-none outline-none bg-emerald-800 hover:bg-emerald-600 rounded-full py-3 px-5 placeholder:text-white">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
