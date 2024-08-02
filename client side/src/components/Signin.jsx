import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/woman1.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  let url = "http://localhost:3000/signin";
  const navigate = useNavigate();

  const signinHere = () => {
    if (email === "" || password === "") {
      setErrorMessage("Both username and password are required.");
    }
    axios
      .post(url, { email, password })
      .then((res) => {
        setErrorMessage("");
        console.log(res.data);
        console.log("yes");
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        setTimeout(() => {
          setErrorMessage("Wrong Login Details Yes");
        }, 1000);
        console.log(err);
      });
  };
  return (
    <div className="bg-teal-100">
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="" className="w-[470px] mt-10" />
        </div>
        <div className="mx-60 ml-32  mt-16 p-1 text-center py-3 rounded">
         
          <h2 className="text-[teal] text-center">Login here</h2>
          <input
            type="text"
            placeholder="email"
            id="email"
            value={email}
            className="mx-auto block border my-4 rounded p-1 outline-none w-[120%]"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            value={password}
            className="mx-auto block border my-4 rounded p-1 outline-none w-[120%]"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <button
            onClick={signinHere}
            className="bg-teal-500 font-bold block mx-auto px-3 p-1 rounded outline-none text-white hover:bg-teal-600 mb-4 w-[70%]"
          >
            Log in
          </button>
          <h6 className="text-sm">
            Don't have an account yet?
            <Link to="/nav/register">Sign up here</Link>
          </h6>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default Signin;
