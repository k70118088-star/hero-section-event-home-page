import React from "react";
import Form from "./Form";

const Fifth = () => {
  return (
    <div
      className="
        flex flex-col lg:flex-row
        items-center justify-center
        gap-10 lg:gap-20
        mt-20 lg:mt-35
        mb-20
        px-4
      "
    >
      <div className="max-w-70 sm:max-w-87.5 lg:max-w-134">
        <img
          src="/assets/Vector.png"
          alt="vector"
          className="w-full h-auto"
        />
      </div>

      <div className="text-center lg:text-left w-full max-w-xl">
        <div className="max-w-40 mb-4 mx-auto lg:mx-0">
          <svg width="189" height="8" viewBox="0 0 189 8" fill="none">
            <rect x="1" width="188" height="8" fill="#01C8FF" />
            <rect width="166" height="8" fill="#2C49FE" />
          </svg>
        </div>

        <h1
          className="
            font-bold leading-[125%] mb-4
            text-3xl sm:text-4xl lg:text-5xl
          "
        >
          Join Us !
        </h1>

        <p
          className="
            font-normal text-black/70 mb-4
            text-sm sm:text-[15px] lg:text-[16px]
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
          Donec ut justo et leo congue
        </p>

        <h2 className="font-bold text-2xl sm:text-3xl lg:text-[35px] leading-[100%] mb-4">
          Sign Up
        </h2>

        <Form />
      </div>
    </div>
  );
};

export default Fifth;
