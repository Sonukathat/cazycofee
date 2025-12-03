"use client";

import { useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

import { AiFillHome } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import { IoCafe } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-center px-4 mt-4">

      <div className="flex items-center w-full md:w-auto bg-[#4A2C2A] text-white px-6 py-3 rounded-full shadow-xl justify-between gap-4 md:gap-10">

        <div className="w-10 h-10 flex items-center justify-center bg-[#FFF3E4] rounded-full">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
            className="rounded-full"
            alt="logo"
          />
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/" className="flex items-center gap-2">
            <AiFillHome size={18} /> Home
          </Link>
          <Link href="/menu" className="flex items-center gap-2">
            <MdRestaurantMenu size={18} /> Menu
          </Link>
          <Link href="/about" className="flex items-center gap-2">
            <IoCafe size={18} /> About
          </Link>
          <Link href="/contact" className="flex items-center gap-2">
            <MdConnectWithoutContact size={18} /> Contact
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="bg-[#FFF3E4] text-[#4A2C2A] px-5 py-2 rounded-full text-sm font-medium shadow"
          >
            Login
          </Link>

          <Link
            href="/cart"
            className="p-2 rounded-full shadow flex items-center justify-center"
          >
            <FiShoppingCart size={20} />
          </Link>
        </div>

        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </button>

      </div>

      {open && (
        <div className="absolute top-20 w-full bg-[#4A2C2A] text-white py-6 rounded-2xl flex flex-col items-center gap-6 md:hidden shadow-xl">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg">
            <AiFillHome size={20} /> Home
          </Link>
          <Link href="/menu" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg">
            <MdRestaurantMenu size={20} /> Menu
          </Link>
          <Link href="/about" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg">
            <IoCafe size={20} /> About
          </Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg">
            <MdConnectWithoutContact size={20} /> Contact
          </Link>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="px-6 py-2 bg-[#FFF3E4] text-[#4A2C2A] rounded-full shadow font-medium"
          >
            Login
          </Link>
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="bg-[#FFF3E4] text-[#4A2C2A] p-3 rounded-full shadow flex items-center justify-center"
          >
            <FiShoppingCart size={22} />
          </Link>
        </div>
      )}

    </div>
  );
}

export default Navbar;
