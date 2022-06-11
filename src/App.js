import React from "react";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import ShopUs from "./Components/shopUs/ShopUs";
import Project from "./Components/Project/Project";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/Signin/SignIn";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Blog" element={<ShopUs />} />
          <Route path="/project" element={<Project />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* <Header />
      <Hero />
      <ShopUs />
      <Project /> */}
    </div>
  );
};

export default App;
