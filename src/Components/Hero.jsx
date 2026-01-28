import React from "react";
import Button from "./Button";
import { Capicity, Date, Location } from "../../icons";

const Hero = () => {
  return (
    <div className="relative min-h-226.5 bg-cover bg-center -mt-20 p-2 sm:p-10">
      <div className="absolute inset-0 bg-[url(/assets/10878ab9e650c4ad78302034fdebefa96e166933.jpg)] bg-cover bg-center scale-x-[-1]" />
      <div className="absolute inset-0 bg-black/50" />
            
      <div className="relative max-w-330 mx-auto px-5 pt-24">
        <h1
          className="font-bold text-white leading-[120%]
          text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mt-3 sm:mt-40"
        >
          Sed tortor in quisque morbi
          <br />
          <span className="flex lg:justify-end mt-2 lg:max-w-196 max-w-130">
            <svg
            className="sm:hidden block"
            width="189"
            height="8"
            viewBox="0 0 189 8"
            fill="none"
          >
            <rect x="1" width="188" height="8" fill="#01C8FF" />
            <rect width="166" height="8" fill="#2C49FE" />
          </svg>
            <svg
              className="sm:block hidden"
              width="410"
              height="8"
              viewBox="0 0 472 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="2.49805" width="469.503" height="8" fill="#01C8FF" />
              <rect width="414.561" height="8" fill="#2C49FE" />
            </svg>
          </span>
          scelerisque etiam eu.
        </h1>

        <p
          className="mt-6 text-white opacity-90
          text-sm sm:text-base md:text-lg max-w-2xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
          Donec ut justo et leo congue lacinia vitae nec arcu. Nunc elit elit,
          malesuada id suscipit cursus,
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8">
          <Button
            text="Get Started"
            textColor="text-white"
            bgColor="bg-[rgba(44,73,254,1)]"
            padding="px-6 py-3"
            rounded="rounded-[23px]"
            font="font-semibold"
          />
          <p className="text-white text-lg cursor-pointer">Learn more</p>
        </div>

        <div
          className="mt-9 lg:mt-22    bg-[#2C49FEBD] lg:rounded-full rounded-2xl p-4 px-10 lg:max-w-230 max-w-80
          flex flex-col lg:flex-row items-center gap-8"
        >
          <div className="flex items-center gap-8">
            <Location />
            <div>
              <h1 className="text-white font-medium">Location</h1>
              <p className="text-white/60 text-sm">Search by city</p>
            </div>
          </div>

          <Divider />
          <div className="flex items-center gap-8">
            <Date />
            <div>
              <h1 className="text-white font-medium">Date</h1>
              <p className="text-white/60 text-sm">09/23/2021</p>
            </div>
          </div>

          <Divider />
          <div className="flex items-center gap-8">
            <Capicity />
            <div>
              <h1 className="text-white font-medium">Capacity</h1>
              <p className="text-white/60 text-sm">Search by city</p>
            </div>
          </div>

          <Divider />
          <Button
            text="GO CHECK"
            textColor="text-[#2C49FE]"
            bgColor="bg-white"
            padding="px-8 py-4"
            rounded="rounded-full"
            font="font-bold"
            textSize="text-lg"
            margin="ml-6"
          />
        </div>
      </div>
    </div>
  );
};

const Divider = () => <span className="hidden lg:block w-0.75 h-18 bg-white" />;

export default Hero;
