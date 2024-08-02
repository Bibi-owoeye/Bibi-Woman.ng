import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/woman1.png";

const Register = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Set a timeout to update the message after 3 seconds

  let url = "https://bibi-woman-ng-q5rb.vercel.app/register";
  const getData = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setErrorMessage("all field required");
    }
    setTimeout(() => {
      setErrorMessage("");
    }, 3000);
    // if (myPassword !== confirm) {
    //   setErrorMessage("password not match");
    //   return;
    // }
    axios.post(url, { firstName, lastName, email, password})
      .then((response) => {
        console.log(response);

        console.log("response");
        navigate("/nav/signin");
      })
      .catch((error) => {
        console.log(error);
      });

    return () => clearTimeout(timer);
  };
  return (
    <>
      <div className="w-[28%] mx-auto p-1 rounded text-center">
        <h5>
          <img src={logo} className="w-[30px] h-[30px] rounded-full" alt="" />
          Welcome to Bibi's <br />
         Woman
        </h5>
        <h4 className="text-danger text-center">Register here</h4>

        <input
          type="text"
          className="w-[75%] outline-0 border-[2px] block mx-auto my-2 rounded p-1"
          placeholder="Enter your firstName"
          onChange={(e) => setFirstName(e.target.value)}
          name="firstName"
        />

        <input
          type="text"
          className="w-[75%] outline-0 border-[2px] block mx-auto my-2 rounded p-1"
          placeholder="Enter your lastName"
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="w-[75%] outline-0 border-[2px] block mx-auto my-2 rounded p-1"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />

        <input
          type="password"
          className="w-[75%] outline-0 border-[2px] block mx-auto my-2 rounded p-1"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
        />

        {/* <input
          className="w-[75%] outline-0 border-[2px] block mx-auto my-2 rounded p-1"
          type="password"
          id="confirm"
          placeholder="confirm your password"
          name="confirmPassword"
        /> */}

        <button
          onClick={getData}
          className="w-[50%] bg-[green] p-1 text-white rounded mt-2 block mx-auto hover:bg-[ rgb(4, 46, 4)]"
        >
          Click here
        </button>
        <h6 className="text-center block my-3 lg:text-[14px] md:text-[10px] sm:text-[5px]">
          Already have an account?<Link to="/nav/signin"> Sign in here</Link>
        </h6>

        <p style={{ color: "red" }}>{errorMessage}</p>
      </div>
    </>
  );
};

export default Register;
