import React from "react";
import Cardevent from "../Cardevent";

const Eventchoose = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-20 sm:mt-24 lg:mt-30 mb-12 sm:mb-16 lg:mb-20 px-4">
      
      <div className="mb-8 sm:mb-10 text-center">
        <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-[150%] flex flex-col items-center justify-center gap-4">
          <svg
            width="189"
            height="8"
            viewBox="0 0 189 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <rect x="1" width="188" height="8" fill="#01C8FF" />
            <rect width="166" height="8" fill="#2C49FE" />
          </svg>
          Choose your next event
        </h1>
      </div>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-5
          sm:gap-6
          lg:gap-6.25
          w-full
          max-w-325
        "
      >
        <Cardevent />
        <Cardevent />
        <Cardevent />
        <Cardevent />
        <Cardevent />
        <Cardevent />
        <Cardevent />
        <Cardevent />
        <Cardevent />
      </div>
    </div>
  );
};

export default Eventchoose;
