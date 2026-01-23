import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    
    <header className="sticky top-0 z-50 bg-black/60 ">
      <div className="flex justify-between items-center max-w-330 mx-auto p-5   ">
        
        
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src="/assets/event.png" alt="logo" />
          <h1 className="font-bold text-3xl text-[#2c49fe]">
            Events<span className="text-[#01c8ff]">Free</span>
          </h1>
        </div>


        <div className="hidden md:flex gap-10 items-center">
          <NavLinks />
          <Button
            text="Log Out"
            textColor="text-white"
            bgColor="bg-[rgba(44,73,254,1)]"
            padding="px-5 py-2"
            rounded="rounded-[23px]"
            font="font-[600]"
          />
        </div>

        <button
          className="md:hidden text-white text-3xl z-60"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      <div
        className={`fixed inset-0  transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[75%] max-w-sm p-6
        transform transition-transform bg-linear-to-r from-slate-900 via-blue-900 to-blue-600 duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mt-16 flex flex-col  gap-6">
          <NavLinks />
          <Button
            text="Log Out"
            textColor="text-white"
            bgColor="bg-[rgba(44,73,254,1)]"
            padding="px-5 py-2"
            rounded="rounded-[23px]"
            font="font-[600]"
          />
        </div>
      </div>
    </header>
  );
};

const NavLinks = () => {
  const baseStyle =
    "font-normal text-[16px] text-white hover:font-semibold";

  return (
    <>
      <a className={baseStyle} href="#">HOME</a>
      <a className={baseStyle} href="#">EVENTS</a>
      <a className={baseStyle} href="#">FEED</a>
      <a className={baseStyle} href="#">USER NAME</a>
    </>
  );
};

export default Navbar;
