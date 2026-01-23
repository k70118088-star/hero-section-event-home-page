import React from "react";
import Box from "./Box";
import { Help, Info, Sharing } from "../../icons";

const Second = () => {
  return (
    <div className="bg-white flex justify-center m-auto items-center gap-10 mt-35">
      <div
        onClick={() => {
          window.location.href =
            "https://www.youtube.com/embed/BRW2qLi9YDM?si=2K6thfytiATK3-4v";
        }}
      >
        <img
          src="/assets/Group17.png"
          alt=""
          className="w-156 h-119.25"
        />
      </div>
      <div className="items-center">
        <div className="flex justify-end max-w-40 mb-6 ">
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
        </div>
        <h1 className="font-bold text-5xl leading-[100%] mb-4 ">
          What make us special ?
        </h1>
        <p className="font-normal text-[16px] leading-5.25 text-[#4d4d4d]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur urna in
          <br /> dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo
          et leo <br />
          congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit
          cursus,
        </p>
        <div className="flex items-center flex-col justify-center">
          <div className="flex gap-10">
            <Box
              image={<Sharing />}
              title={"Sharing"}
              info={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
              }
              margin={"mt-9"}
            />
            <Box
              image={<Info />}
              title={"Info"}
              info={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
              }
              margin={"mt-9"}
            />
          </div>
          <div >
            <Box
              image={<Help />}
              title={"Help"}
              info={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
              }
              margin={"mt-6"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
