import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";

const NavBar = (props) => {
  const [dropdown, setDropdown] = useState(false);

  function handleMouseOver() {
    setDropdown(true);
  }

  function handleMouseOut() {
    setDropdown(false);
  }
  return (
    <header className="w-full h-32">
      <nav className="w-full container mx-auto flex justify-between h-32 items-center gap-3 relative z-50">
        <div className="text-3xl">
          <img
            className="w-20 inline"
            src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
          />
          <h1 className="inline font-Edu"> {props.logoName}</h1>
        </div>
        <ul className="flex-1 flex gap-3 p-2 text-xl justify-center">
          <li className="ml-4 hover:text-white hover:bg-black rounded-lg py-1 px-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <Link to="/">Home</Link>
          </li>
          <li className="ml-4 hover:text-white hover:bg-black rounded-lg py-1 px-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <Link to="/politics">Politics</Link>
          </li>
          <li className="ml-4 hover:text-white hover:bg-black rounded-lg py-1 px-2 cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <Link to="/bitcoin">Bitcoin</Link>
          </li>
          <div className="ml-4 relative group">
            <li
              className=" hover:text-white hover:bg-black rounded-lg py-1 px-2 cursor-pointer flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
              onMouseEnter={handleMouseOver}
              onMouseLeave={handleMouseOut}
            >
              <Link to="/sports">Sports</Link>
              <span className="group-hover:rotate-180 transition-transform duration-500">
                <TiArrowSortedDown />
              </span>
              {dropdown && (
                <div
                  id="Dropdown"
                  className="absolute top-20 w-full left-12 -translate-x-1/2 -translate-y-1/2 bg-gray-400 rounded-2xl p-1 border-2 border-slate-500"
                >
                  <ul className="">
                    <li className="p-1 hover:bg-gray-500 rounded-lg text-white">
                      <Link to="/sports/football">Football</Link>
                    </li>
                    <li className="p-1 hover:bg-gray-500 rounded-lg text-white">
                      <Link to="/sports/football">Nigga</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
          </div>
        </ul>
        <div>
          <input
            type="text"
            className="p-2 rounded-2xl w-72 placeholder:text-lg shadow-xl shadow-slate-300 border-2 text-xl mr-2"
            placeholder="Search News"
          />
          <i className="ri-shopping-cart-line text-4xl ml-2" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
