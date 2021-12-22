import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../pages/App";
import Footer from "../components/Shared/Footer/footer";
import Header from "../components/Shared/Header/header";
import Agriculture from "../pages/Agriculture/Agriculture";

const ConfigRoutes = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<App />}></Route>
      <Route path="/blogs" element={<App />}></Route>
      <Route path="/contact" element={<App />}></Route>
      <Route path="/agriculture" element={<Agriculture />}></Route>
    </Routes>
    <Footer/>
    </>
  );
};

export default ConfigRoutes;
