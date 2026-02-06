import React from "react";
import Navbar from "../Components/Common/Navbar";
import Profile from "../Components/Thirdpage/Profile";
import Newpost from "../Components/Thirdpage/Newpost";
import Footer from "../Components/Common/Footer";


const Feed = () => {
  return (
    <div>
      <Navbar
        className={
          "bg-white text-black shadow-[0px_8px_35px_0px_rgba(0,0,0,0.05)]"
        }
      />
      <Profile />
     <Newpost />
     <Footer />
    </div>
  );
};

export default Feed;
