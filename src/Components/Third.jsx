import React from "react";
import { Awards, Participants, Speakers, Topics } from "../../icons";

const Third = () => {
  return (
    <div className="relative min-h-125 flex items-center justify-center">
      <div className="absolute inset-0 bg-[url(./assets/9d223930f644e29d4f8f7604d1d3234c2d641d6c.jpg)] bg-cover bg-center" />

      <div className="absolute inset-0 bg-[#2C49FE]/80" />

      <div className="relative z-10 text-center px-4 max-w-250">
        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          Lorem ipsum dolor sit amet,
          <br />
          consectetur
        </h1>

        <p className="text-white/90 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
          Donec ut justo et leo congue lacinia vitae nec
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-12 text-white">
          <div className="flex flex-col items-center text-center">
            <Participants className="mb-3" />
            <h2 className="text-3xl font-bold">8800</h2>
            <p className="text-sm uppercase tracking-wide">Participants</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Topics className="mb-3" />
            <h2 className="text-3xl font-bold">300</h2>
            <p className="text-sm uppercase tracking-wide">Topics</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Speakers className="mb-3" />
            <h2 className="text-3xl font-bold">50</h2>
            <p className="text-sm uppercase tracking-wide">Speakers</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Awards className="mb-3" />
            <h2 className="text-3xl font-bold">30</h2>
            <p className="text-sm uppercase tracking-wide">Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Third;
