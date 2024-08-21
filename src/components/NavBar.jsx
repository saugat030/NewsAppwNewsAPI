import React from "react";
const NavBar = (props) => {
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
          <li className="ml-4 hover:text-[#4c19ac] cursor-pointer">
            <a>Home</a>
          </li>
          <li className="ml-4 hover:text-[#4c19ac] cursor-pointer">
            <a>Politics</a>
          </li>
          <li className="ml-4 hover:text-[#4c19ac] cursor-pointer">
            <a>LifeStyle</a>
          </li>
          <li className="ml-4 hover:text-[#4c19ac] cursor-pointer">
            <a>Sports</a>
          </li>
        </ul>
        <div>
          <input
            type="text"
            className="p-2 rounded-2xl w-72 placeholder:text-lg shadow-xl shadow-slate-300 text-xl mr-2"
            placeholder="Search News"
          />
          <i className="ri-shopping-cart-line text-4xl ml-2" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
