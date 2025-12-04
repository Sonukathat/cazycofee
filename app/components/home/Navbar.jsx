"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";

import { AiFillHome } from "react-icons/ai";
import { MdRestaurantMenu } from "react-icons/md";
import { IoCafe } from "react-icons/io5";
import { MdConnectWithoutContact } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function loadCart() {
      const userId = localStorage.getItem("userId");
      if (!userId) return;

      try {
        const res = await axios.get(`/api/cart/${userId}`);
        setCount(res.data?.items?.length || 0);
      } catch (err) {
        setCount(0);
      }
    }
    loadCart();
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex justify-center px-4 mt-4">

      <div className="flex items-center justify-between md:justify-start w-full md:w-auto bg-[#4A2C2A] text-white px-6 py-3 rounded-full shadow-xl gap-6 md:gap-10">

        {/* Logo */}
        <div className="w-10 h-10 flex items-center justify-center bg-[#FFF3E4] rounded-full">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
            className="rounded-full"
            alt="logo"
          />
        </div>

        {/* Desktop Links */}
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

        {/* Login Button (Desktop) */}
        <Link
          href="/login"
          className="hidden md:block bg-[#FFF3E4] text-[#4A2C2A] px-5 py-2 rounded-full text-sm font-medium shadow"
        >
          Login
        </Link>

        {/* Cart Icon */}
        <Link href="/cart" className="relative hidden md:block">
          <FiShoppingCart size={26} />
          {count > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {count}
            </span>
          )}
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <GiHamburgerMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
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

          <Link href="/cart" onClick={() => setOpen(false)} className="flex items-center gap-3 text-lg relative">
            <FiShoppingCart size={22} /> Cart
            {count > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </Link>

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="px-6 py-2 bg-[#FFF3E4] text-[#4A2C2A] rounded-full shadow font-medium"
          >
            Login
          </Link>

        </div>
      )}

    </div>
  );
}

export default Navbar;
