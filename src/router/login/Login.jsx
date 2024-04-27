/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import axios from "../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("atuny0");
  const [password, setPassword] = useState("9uQFF1Lh");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      username,
      password,
    };
    axios
      .post("/auth/login", user)
      .then((res) => {
        console.log(res.data.token);
        toast.success("Welcome");
        localStorage.setItem("x-auth-token", res.data.token);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        toast.error("username or password is incorrect");
      });
  };

  return (
    <section className="login container" style={{ paddingTop: "120px" }}>
      <div className="login__content">
        <img src={logo} alt="" />
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="text">
            <p>Email Address</p>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              type="text"
              id="text"
              name="text"
              placeholder="Enter Your Email"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your password"
            />
          </label>
          <label htmlFor="checkbox" className="checkbox">
            <input required type="checkbox" id="checkbox" name="checkbox" />
            <p>Remember Me</p>
          </label>
          <button className="btn__login" type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
