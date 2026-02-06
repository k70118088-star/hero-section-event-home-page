import React from "react";
import Navbar from "../Components/Common/Navbar";
import Hero from "../Components/Pagehome/Hero";
import Second from "../Components/Pagehome/Second";
import Third from "../Components/Pagehome/Third";
import Fourth from "../Components/Pagehome/Fourth";
import Fifth from "../Components/Pagehome/Fifth";
import Footer from "../Components/Common/Footer";

const Home = () => {
  return (
    <div>
      <Navbar className={"bg-black/60 text-white"} />
      <Hero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </div>
  );
};

export default Home;
