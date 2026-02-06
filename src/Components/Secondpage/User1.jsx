import React from "react";
import { Link } from "react-router-dom";
import Button from "../Common/Button";
import { Coma, Guitar, Ticket } from "../../icons";
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
              <svg
                height="31px"
                width="31px"
                viewBox="0 -960 960 960"
                fill="#666666"
              >
                <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
              </svg>
              10/02/2022
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="23"
                height="28"
                viewBox="0 0 23 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.334 15.2084C13.4741 15.2084 15.209 13.4735 15.209 11.3334C15.209 9.19327 13.4741 7.45837 11.334 7.45837C9.19388 7.45837 7.45898 9.19327 7.45898 11.3334C7.45898 13.4735 9.19388 15.2084 11.334 15.2084Z"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.3333 1C8.59276 1 5.96444 2.08869 4.02656 4.02656C2.08869 5.96444 1 8.59276 1 11.3333C1 13.7772 1.51925 15.3763 2.9375 17.1458L11.3333 26.8333L19.7292 17.1458C21.1474 15.3763 21.6667 13.7772 21.6667 11.3333C21.6667 8.59276 20.578 5.96444 18.6401 4.02656C16.7022 2.08869 14.0739 1 11.3333 1V1Z"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Mumbai
            </div>
            <div className="flex items-center gap-2">
              {" "}
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8981 24.69L20.0981 18.285C19.9848 17.3778 19.5439 16.5432 18.8583 15.9383C18.1728 15.3333 17.2899 14.9996 16.3756 15H13.6206C12.7068 15.0003 11.8245 15.3342 11.1395 15.9391C10.4545 16.544 10.0139 17.3782 9.90062 18.285L9.09937 24.69C9.0554 25.0419 9.08679 25.3991 9.19147 25.7379C9.29615 26.0768 9.47171 26.3894 9.70651 26.6552C9.9413 26.921 10.2299 27.1338 10.5533 27.2794C10.8766 27.4251 11.2272 27.5003 11.5819 27.5H18.4169C18.7714 27.5001 19.1219 27.4248 19.4451 27.279C19.7683 27.1333 20.0567 26.9205 20.2914 26.6547C20.5261 26.389 20.7015 26.0764 20.8061 25.7376C20.9107 25.3989 20.9421 25.0418 20.8981 24.69V24.69Z"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 10C17.0711 10 18.75 8.32107 18.75 6.25C18.75 4.17893 17.0711 2.5 15 2.5C12.9289 2.5 11.25 4.17893 11.25 6.25C11.25 8.32107 12.9289 10 15 10Z"
                  stroke="#666666"
                  strokeWidth="2"
                />
                <path
                  d="M5 13.75C6.38071 13.75 7.5 12.6307 7.5 11.25C7.5 9.86929 6.38071 8.75 5 8.75C3.61929 8.75 2.5 9.86929 2.5 11.25C2.5 12.6307 3.61929 13.75 5 13.75Z"
                  stroke="#666666"
                  strokeWidth="2"
                />
                <path
                  d="M25 13.75C26.3807 13.75 27.5 12.6307 27.5 11.25C27.5 9.86929 26.3807 8.75 25 8.75C23.6193 8.75 22.5 9.86929 22.5 11.25C22.5 12.6307 23.6193 13.75 25 13.75Z"
                  stroke="#666666"
                  strokeWidth="2"
                />
                <path
                  d="M5.00023 17.5H4.61773C4.02593 17.4999 3.4533 17.7098 3.0017 18.0923C2.5501 18.4747 2.24883 19.005 2.15148 19.5887L1.73523 22.0887C1.67549 22.4469 1.69451 22.8138 1.79094 23.1639C1.88738 23.514 2.05892 23.8389 2.29364 24.116C2.52836 24.393 2.82062 24.6156 3.1501 24.7683C3.47957 24.921 3.83835 25 4.20148 25H8.75023"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 17.5H25.3825C25.9743 17.4999 26.5469 17.7098 26.9985 18.0923C27.4501 18.4747 27.7514 19.005 27.8487 19.5887L28.265 22.0887C28.3247 22.4469 28.3057 22.8138 28.2093 23.1639C28.1129 23.514 27.9413 23.8389 27.7066 24.116C27.4719 24.393 27.1796 24.6156 26.8501 24.7683C26.5207 24.921 26.1619 25 25.7987 25H21.25"
                  stroke="#666666"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>{" "}
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
