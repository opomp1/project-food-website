import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [onDelivery, setOnDelivery] = useState(true);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left side */}
      <div className="flex items-center ">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className=" text-2xl sm:text-3xl lg:text-4xl">
          <span className=" font-bold"> Best Food</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p
            className={
              onDelivery
                ? "bg-black text-white rounded-full p-2 cursor-pointer transition duration-150 ease-in-out"
                : "p-2 cursor-pointer "
            }
            onClick={() => setOnDelivery(true)}
          >
            Delivery
          </p>
          <p
            className={
              !onDelivery
                ? "bg-black text-white rounded-full p-2 cursor-pointer transition duration-150 ease-in-out"
                : "p-2 cursor-pointer "
            }
            onClick={() => setOnDelivery(false)}
          >
            Pickup
          </p>
        </div>
      </div>

      {/* Search Inpuit */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className=" bg-transparent p-2 focus:outline-none grow"
          type="text"
          placeholder="Search Food"
        />
      </div>

      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </button>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div
          onClick={() => setNav(!nav)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 font-bold">Pie World</h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex cursor-pointer hover:scale-105 transition-all">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:scale-105 transition-all">
              <MdFavorite size={25} className="mr-4" /> Favorite
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:scale-105 transition-all">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:scale-105 transition-all">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:scale-105 transition-all">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:scale-105 transition-all">
              <BsFillSaveFill size={25} className="mr-4" /> Best One
            </li>
            <li className="text-xl py-4 flex cursor-pointer hover:scale-105 transition-all">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
