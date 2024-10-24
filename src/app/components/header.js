"use client";
import React, { useState } from "react";
import Link from "next/link";
import ShoppingCheck from "./shoppingCheck";
import ShoppingCart from "./shoppingCart";

const Header = ({ toggleCart }) => {
  return (
    <>
      <header className="bg-gray-100 p-4 flex items-center justify-between shadow-neumorphic">
        {/* Left Side: Logo */}
        <img 
          src="/icons/burger-logo.png" 
          alt="Funky Burger Logo" 
          className="w-16 h-16 object-contain" 
        />

        {/* Center: Navigation Links */}
        <nav className="flex-grow flex justify-center space-x-3 items-center">
          <Link href="/" className="text-gray-900 font-semibold font-sans text-md">
            Home
          </Link>
          <span className="text-gray-900 font-semibold">|</span> {/* Separator */}
          <Link href="/menu" className="text-gray-900 font-semibold font-sans text-md">
            Menu
          </Link>
          <span className="text-gray-900 font-semibold">|</span> {/* Separator */}
          <Link href="/info" className="text-gray-900 font-semibold font-sans text-md">
            Info
          </Link>
          <span className="text-gray-900 font-semibold">|</span> {/* Separator */}
          
          {/* Cart Button */}
          <div 
            onClick={toggleCart} 
            className="cursor-pointer text-gray-900 font-semibold font-sans text-md cart-button flex items-center transform hover:scale-110 transition-transform duration-300"
          >
            <img src="/icons/cart.png" alt="Cart" className="w-9 h-9 object-contain" />
          </div>
        </nav>

        {/* Right Side: Log In Button */}
        <Link href="/login">
          <button className="flex items-center text-gray-900 font-semibold font-sans text-base">
            Log In
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m0 0l-7-7m7 7l-7 7" />
            </svg>
          </button>
        </Link>
      </header>
    </>
  );
};

export default Header;
