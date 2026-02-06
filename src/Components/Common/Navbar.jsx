import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`sticky top-0 z-50  ${className} `}>
      <div className="flex justify-between items-center max-w-330 mx-auto p-5   ">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10" src="/assets/event.png" alt="logo" />
          <h1 className="font-bold text-3xl text-[#2c49fe]">
            Events<span className="text-[#01c8ff]">Free</span>
          </h1>
        </div>

        <div className="hidden md:flex gap-10 items-center">
          <Link to="/">
            <li className="font-normal text-[16px]  hover:font-semibold list-none">
              HOME
            </li>
          </Link>
          <Link to="/events">
            <li className="font-normal text-[16px]  hover:font-semibold list-none">
              EVENTS
            </li>
          </Link>
          <Link to="/feed">
            <li className="font-normal text-[16px]  hover:font-semibold list-none">
              FEED
            </li>
          </Link>
          <Link to="/username">
            <li className="font-normal text-[16px]  hover:font-semibold list-none">
              USER NAME
            </li>
          </Link>
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
          className="md:hidden text-3xl z-60"
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
          <Link to="/">
            <li className="font-normal text-[16px] text-white  hover:font-semibold list-none">
              HOME
            </li>
          </Link>
          <Link to="/events">
            <li className="font-normal text-[16px] text-white  hover:font-semibold list-none">
              EVENTS
            </li>
          </Link>
          <Link to="/feed">
            <li className="font-normal text-[16px] text-white hover:font-semibold list-none">
              FEED
            </li>
          </Link>
          <Link to="/username">
            <li className="font-normal text-[16px] text-white hover:font-semibold list-none">
              USER NAME
            </li>
          </Link>
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

export default Navbar;
