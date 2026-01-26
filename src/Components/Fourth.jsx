import React from "react";
import Card from "./Card";

const Fourth = () => {
  return (
    <div
      className="
        flex justify-center items-center bg-white m-auto gap-7 mt-20
        flex-col lg:flex-row px-5
      "
    >
      <div className="text-center lg:text-left">
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
            max-w-full lg:max-w-84.5
          "
        >
          Explore our latest events
        </h1>

        <p
          className="
            font-normal text-black/70 mb-4
            text-sm sm:text-[15px] lg:text-[16px]
            max-w-full lg:max-w-120
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem.
          Donec ut justo et leo congue lacinia vitae nec arcu.
        </p>

        <h3 className="font-bold text-[16px]">LEARN MORE</h3>
      </div>


      <div
        className="
          flex gap-5
          flex-col sm:flex-row
          items-center
        "
      >
        <Card
          image="/assets/9facb7224214d0c73ee5e96b1cf96ac34894ac78.jpg"
          date={"09/23/2021"}
          title={"Lorem ipsum"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
          }
        />

        <Card
          image="/assets/fe02d460d69ddc499a500e3ffeb52e6d06522ef6.jpg"
          date={"09/23/2021"}
          title={"Lorem ipsum"}
          text={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in "
          }
        />
      </div>
    </div>
  );
};

export default Fourth;

