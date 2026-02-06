import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex justify-center items-center mt-17 ">
      <div className="flex flex-col justify-center min-[900px]:flex-row gap-8 items-center w-full max-w-350">

        <div className="w-full sm:w-100 lg:w-100 rounded-[30px] overflow-hidden">
          <img
            src="/assets/Rectangle04.png"
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="flex-1 mt-2 w-full">

          <div className="flex items-center gap-2 text-sm text-black/60">
            <Link to="/" className="hover:text-[#2c49fe] hover:underline">
              HOME
            </Link>
            <span>&gt;</span>
            <span>Feed</span>
          </div>

          <div className="flex flex-col xl:flex-row xl:items-center gap-6 mt-6">
            <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl">
              Jhone Doe
            </h1>
          </div>

          <p className="mt-6 text-sm sm:text-base font-normal text-black/60 leading-[150%] max-w-full lg:max-w-214.25">
            Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
            Senectus gravida sed interdum pretium at quam morbi. Nunc, libero
            nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.
            Ut vitae dolor fringilla urna eget aliquet.
          </p>

          <div className="mt-7">
            <p className="font-semibold text-base opacity-60">
              Following Events :
            </p>

            <div className="flex flex-wrap xl:flex-nowrap items-center gap-5.5 mt-5">

              <div className="w-full sm:max-w-80.5 h-34.5 p-3.25 rounded-[20px] bg-white shadow-[0px_8px_35px_0px_#0000001A] flex gap-4">
                <img
                  src="/assets/47de758f93ff7f1b99bd8b00aabab8692c26e0aa.jpg"
                  alt=""
                  className="w-28.5 h-28 rounded-[20px]"
                />
                <div className="flex gap-1 justify-center flex-col">
                  <h1 className="font-bold text-base">Augue etiam</h1>
                  <p className="max-w-40.75 font-normal text-[12px] leading-[130%] text-[#666666]">
                    Quis et id urna sagittis. Enim lacus, felis, libero sed nisl
                    vitae blandit sociis.
                  </p>
                </div>
              </div>

              <div className="w-full sm:max-w-80.5 h-34.5 p-3.25 rounded-[20px] bg-white shadow-[0px_8px_35px_0px_#0000001A] flex gap-4">
                <img
                  src="/assets/4585550eb50c7f26720aee3dce47eca8387dc178.jpg"
                  alt=""
                  className="w-28.5 h-28 rounded-[20px]"
                />
                <div className="flex gap-1 justify-center flex-col">
                  <h1 className="font-bold text-base">Augue etiam</h1>
                  <p className="max-w-40.75 font-normal text-[12px] leading-[130%] text-[#666666]">
                    Quis et id urna sagittis. Enim lacus, felis, libero sed nisl
                    vitae blandit sociis.
                  </p>
                </div>
              </div>

              <div className="w-full sm:w-42.75 h-34.5 bg-[#2C49FE]/10 flex items-center rounded-[20px] justify-center flex-col">
                <h1 className="font-semibold text-4xl leading-[150%] text-black/60">
                  +15
                </h1>
                <p className="font-normal text-base leading-[150%] text-black/60">
                  more
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
