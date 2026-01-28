import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Second from "../Components/Second";
import Third from "../Components/Third";
import Fourth from "../Components/Fourth";
import Fifth from "../Components/Fifth";
import Footer from "../Components/Footer";

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
