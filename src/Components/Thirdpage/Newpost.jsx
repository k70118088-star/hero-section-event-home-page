import React from "react";
import Post from "../Post";

const Newpost = () => {
  return (
    <div className="mt-20 mb-20 flex  justify-center items-center ">
      <div className="items-start justify-start flex flex-col">
        <svg
          width="189"
          height="8"
          viewBox="0 0 189 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="1" width="188" height="8" fill="#01C8FF" />
          <rect width="166" height="8" fill="#2C49FE" />
        </svg>
        <h1 className="font-semibold text-5xl leading-[150%]">New Posts</h1>
        <div className="flex flex-col gap-10">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
      </div>
    </div>
  );
};

export default Newpost;
