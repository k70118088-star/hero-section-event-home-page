import React from "react";

const Gallery = () => {
  return (
    <div className="flex items-center justify-center p-2.5 m-auto content-center mt-10 mb-3">
      <div className="text-center flex flex-col items-center">
          <svg
            width="115"
            height="8"
            viewBox="0 0 115 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.609375" width="114.392" height="8" fill="#01C8FF" />
            <rect width="101.005" height="8" fill="#2C49FE" />
          </svg>
          <h1 className="font-semibold text-5xl leading[150%] mt-2.5 mb-5">Gallery</h1>
          <div className="grid grid-cols-3 grid-rows-3 gap-4 max-w-330 max-h-256.5 mt-10 w-full">
            <div className="rounded-2xl overflow-hidden"><img src="/assets/787b16ca4f8632bb760602bb17fc6addf06f3b02.jpg" alt=""
                    className="w-full h-full object-cover" /></div>
            <div className="rounded-2xl overflow-hidden"><img src="/assets/8bf899af954eeaa0bf1bd537be64cc80b3135689.jpg" alt=""
                    className="w-full h-full object-cover" /></div>
            <div className="row-span-2 rounded-2xl overflow-hidden"><img src="/assets/4585550eb50c7f26720aee3dce47eca8387dc178.jpg"
                    alt="" className="w-full h-full object-cover" /></div>
            <div className="col-span-2 rounded-2xl overflow-hidden"><img src="/assets/47de758f93ff7f1b99bd8b00aabab8692c26e0aa.jpg"
                    alt="" className="w-full h-full object-cover" /></div>
            <div className="rounded-2xl overflow-hidden"><img src="/assets/consert.jpg" alt=""
                    className="w-full h-full object-cover" /></div>
            <div className="col-span-2 rounded-2xl overflow-hidden"><img src="/assets/consert2.jpg"
                    alt="" className="w-full h-full object-cover" /></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
