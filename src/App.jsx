// eslint-disable-next-line no-unused-vars
import React from "react";
import "./scss/index.scss";
import Header from "./components/header/Header";
// eslint-disable-next-line no-unused-vars
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./router/home/Home";
import Login from "./router/login/Login";
import Admin from "./router/admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./router/auth/Auth";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default App;
