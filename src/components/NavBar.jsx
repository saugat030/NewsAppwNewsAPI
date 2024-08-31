import React, { useState, useRef } from "react";

import TopBar from "./TopBar";
const NavBar = () => {
  return (
    <header>
      <TopBar />
      <nav>
        <figure className="text-5xl p-4 my-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
            alt="NEWS ONLINE"
            className="h-28 w-28 inline"
          />
          <span className="pl-2">Online</span>
        </figure>
        <div className="flex justify-between items-center bg-[#393939] h-20 text-xl mb-6">
          <ul className="flex items-center h-full">
            <li className="p-2 text-white hover:bg-red-500 h-full flex items-center px-4">
              <a href="">Home</a>
            </li>
            <li className="p-2 text-white hover:bg-red-500 h-full flex items-center px-4">
              <a href="">International</a>
            </li>
            <li className="p-2 text-white hover:bg-red-500 h-full flex items-center px-4">
              <a href="">Sports</a>
            </li>
            <li className="p-2 text-white hover:bg-red-500 h-full flex items-center px-4">
              <a href="">Buisness</a>
            </li>
            <li className="p-2 text-white hover:bg-red-500 h-full flex items-center px-4">
              <a href="">Entertainment</a>
            </li>
            <li className="p-2 text-white hover:bg-red-500 h-full flex items-center px-4">
              <a href="">LifeStyle</a>
            </li>
          </ul>
          <input
            type="text"
            placeholder="Search For"
            className="h-full bg-[#393939] py-4 px-2 text-white placeholder:text-gray-400"
          />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
