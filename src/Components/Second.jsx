import React from "react";
import Box from "./Box";
import { Help, Info, Sharing } from "../../icons";
import Video from "./Video";

const Second = () => {
  return (
    <div className="
      bg-white flex justify-center m-auto items-center gap-10 mt-35
      flex-col xl:flex-row px-5 mb-20
    ">
      <Video />
      <div className="items-center flex flex-col text-center lg:text-left">
        <div className="flex justify-center items-start  lg:justify-start max-w-40 mb-6">
          <svg
            width="189"
            height="8"
            viewBox="0 0 189 8"
            fill="none"
          >
            <rect x="1" width="188" height="8" fill="#01C8FF" />
            <rect width="166" height="8" fill="#2C49FE" />
          </svg>
        </div>

        <h1 className="
          font-bold  leading-[100%] mb-4 text-2xl
          sm:text-3xl md:text-4xl lg:text-5xl
        ">
          What make us special ?
        </h1>

        <p className="
          font-normal text-[16px] leading-5.25 text-[#4d4d4d]
          text-sm sm:text-[15px] lg:text-[16px]
        ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur urna in
          <br className="hidden sm:block" />
          dictum suscipit. Suspendisse maximus ipsum sem. Donec ut justo
          et leo
          <br className="hidden sm:block" />
          congue lacinia vitae nec arcu. Nunc elit elit, malesuada id suscipit
          cursus,
        </p>

        <div className="flex items-center flex-col justify-center">
          <div className="
            flex gap-10
            flex-col sm:flex-row
          ">
            <Box
              image={<Sharing />}
              title={"Sharing"}
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
              margin={"mt-9"}
            />
            <Box
              image={<Info />}
              title={"Info"}
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
              margin={"sm:mt-9 mt-2.5"}
            />
          </div>

          <div className="mt-6 sm:mt-0">
            <Box
              image={<Help />}
              title={"Help"}
              info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
              margin={"mt-6"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;

