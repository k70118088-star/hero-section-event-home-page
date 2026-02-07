import React from "react";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import { Cale, Cap, Coma, Guitar, Locate, Ticket } from "../../icons";
import { useState } from "react";

const User1 = () => {
  const [play, setPlay] = useState(false);

  return (
    <div className="max-w-330 mx-auto px-4 mt-12 space-y-16 mb-20">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="w-full min-[500px]:w-100 sm:w-100 md:w-100 lg:w-100 rounded-[30px] overflow-hidden">
          <img
            src="/assets/Rectangle74.png"
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-black/60">
            <Link to="/" className="hover:text-[#2c49fe] hover:underline">
              HOME
            </Link>
            <span>&gt;</span>
            <span>Username</span>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-center gap-6 mt-4">
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
              Jhone Doe
            </h1>

            <div className="flex flex-wrap gap-3">
              <Button
                text="Unshow Journey of Feed"
                bgColor="bg-[#2C49FE1A]"
                textColor="text-black"
                padding="px-5 py-2"
                rounded="rounded-full"
                font="font-semibold"
              />
              <Button
                text="Show Journey of Feed"
                bgColor="bg-[#2C49FE]"
                textColor="text-white"
                padding="px-7 py-2"
                rounded="rounded-full"
                font="font-semibold"
              />
            </div>
          </div>

          <p className="mt-4 text-sm sm:text-base text-black/60 leading-relaxed max-w-3xl">
            Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
            Senectus gravida sed interdum pretium at quam morbi. Nunc, libero
            nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.
            Ut vitae dolor fringilla urna eget aliquet.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-4 mt-6 text-sm text-black/60">
            <div className="flex items-center gap-2">
              <Cale />
              10/02/2022
            </div>
            <div className="flex items-center gap-2">
              <Locate />
              Mumbai
            </div>
            <div className="flex items-center gap-2">
              <Cap />
              1,080
            </div>
            <div className="flex items-center gap-2">
              <Guitar /> 1,080
            </div>
            <div className="flex items-center gap-2">
              <Ticket /> 1,080
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <div className="flex-1">
          <Coma />
          <p className="mt-4 text-sm sm:text-base text-black/60 leading-relaxed max-w-160.5">
            Semper faucibus suscipit ultricies eleifend semper sit tellus
            gravida pretium. Cras cursus ut semper eleifend tortor lectus
            tristique turpis. Laoreet amet ultrices est lectus accumsan nibh
            cursus nunc. Faucibus orci, neque, pretium, massa volutpat convallis
            nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim
            viverra volutpat neque gravida aliquet urna faucibus viverra
            vulputate. nibh cursus nunc. Faucibus orci, neque, pretium, massa
            volutpat convallis nisl pellentesque. Gravida in ultrices vitae
            tortor. Dignissim viverra volutpat neque gravida aliquet urna
            faucibus viverra vulputate.
          </p>
        </div>

        <div className="relative w-full sm:w-120 md:w-130 lg:w-154 max-h-103.75">
          <div className="cursor-pointer relative inline-block">
            {!play ? (
              <>
                <img
                  src="/assets/63da9c2da58c29d373779b98180f46ec2886772b.jpg"
                  alt="Play video"
                  onClick={() => setPlay(true)}
                  className="w-full sm:w-120 md:w-130 lg:w-154 rounded-[30px]"
                />

                <img
                  src="/assets/videoicon.png"
                  alt="Play"
                  onClick={() => setPlay(true)}
                  className="
          absolute
          top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          w-14 h-14
          sm:w-16 sm:h-16
          cursor-pointer
        "
                />
              </>
            ) : (
              <iframe
                className="
        w-156 sm:h-90 md:h-120 h-60
        max-w-full
        sm:w-105 md:w-130 lg:w-156
        rounded-[30px]
      "
                src="https://www.youtube.com/embed/BRW2qLi9YDM?autoplay=1&mute=1"
                title="YouTube video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User1;
