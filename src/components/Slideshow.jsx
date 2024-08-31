import React from "react";
import slide from "../static/Slideshow-1.png";
import NewsCard from "./NewsCard";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
export const Slideshow = () => {
  return (
    <div className="flex flex-col w-full gap-10 my-10">
      <div className="flex justify-between items-center border-b-4 border-slate-800 py-2">
        <h1 className="py-2 text-3xl font-semibold text-red-500">
          Entertainment
        </h1>
        <div className="flex items-center gap-2">
          <div className="bg-red-600 p-1">
            <MdNavigateBefore size={40} color="white" />
          </div>
          <div className="bg-red-600 p-1">
            <MdNavigateNext size={40} color="white" />
          </div>
        </div>
      </div>
      <figure className="flex justify-center items-center">
        <img src={slide} alt="Photo" className="w-[95%]" />
      </figure>
      <div className="flex justify-between gap-5">
        <NewsCard size="xsm" />
        <NewsCard size="xsm" />
        <NewsCard size="xsm" />
      </div>
    </div>
  );
};
