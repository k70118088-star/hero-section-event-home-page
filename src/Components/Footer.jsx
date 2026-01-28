import React from "react";
import { Facebook, Insta, Twitter } from "../../icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="max-w-330 mx-auto px-4 py-14 flex flex-col lg:flex-row justify-between gap-10">

        <div className="max-w-65">
          <div className="flex items-center gap-2 mb-4">
            <img className="w-10 h-10" src="/assets/event.png" alt="logo" />
            <h1 className="font-bold text-2xl text-[#2C49FE]">
              Events<span className="text-[#01C8FF]">Free</span>
            </h1>
          </div>

          <p className="text-sm text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nunc efficitur urna in dictum suscipit.
          </p>

          <div className="flex gap-4">
             <a href=""><Insta /></a>
             <a href=""><Facebook /></a>
             <a href=""><Twitter /></a>
          </div>
        </div>

        <div className="md:flex md:flex-row grid grid-flow-col grid-rows-2  gap-15">
           <div className="flex gap-15">
          <div>
            <h3 className="font-bold text-sm mb-4">SERVICES</h3>
            <ul className="space-y-2 text-[12px] font-normal">
              <li><a href="">About</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Ullamcorper</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">EVENTS</h3>
            <ul className="space-y-3 text-[12px] font-normal ">
              <li><a href="">Ullamcorper</a></li>
              <li><a href="">Ullamcorper</a></li>
              <li><a href="">Ullamcorper</a></li>
              <li><a href="">Ullamcorper</a></li>
            </ul>
          </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-4">GALLERY</h3>

            <div className="grid grid-cols-3 gap-2">
              <img src="/assets/13a0b63a658e8c72ca05d48233a0d03fac8d8bbe.jpg" className="w-full h-16 object-cover" />
              <img src="/assets/4e798e608ea7d38bc5c8229a337b5611eabaa78c.jpg" className="w-full h-16 object-cover" />
              <img src="/assets/56196ce0de909be874c10cd08442a838b7a6a80c.jpg" className="w-full h-16 object-cover" />
              <img src="/assets/30ced4257b0cea26940633e4c1554f7758ba6150.jpg" className="w-full h-16 object-cover" />
              <img src="/assets/1116959749387a8bd68bcef66fe900b53209470c.jpg" className="w-full h-16 object-cover" />

              <div className="w-full h-16 bg-[#18205c] text-center text-sm flex items-center justify-center">
                Show <br /> More
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="py-4 text-center text-xs text-gray-400">
        © Credits of companyName belong to companyName.
      </div>
    </footer>
  );
};

export default Footer;

