import React from "react";
import NewsCard from "./NewsCard";
const DontMiss = () => {
  return (
    <>
      <div className="mt-10 p-2">
        <div className="flex justify-between items-center py-2">
          <h1 className="text-4xl text-red-600 font-semibolds">Don't Miss</h1>
          <div className="flex gap-2">
            <div className="p-2 bg-red-600 text-white font-semibold">All</div>
            <div className="p-2 bg-purple-600 text-white font-semibold">
              Lifestyle
            </div>
            <div className="p-2 bg-amber-600 text-white font-semibold">
              Health&Fitness
            </div>
            <div className="p-2 bg-cyan-400 text-white font-semibold">
              Travel
            </div>
          </div>
        </div>
        <div className="bg-slate-600 h-1 w-full mb-5"></div>
        <div className="flex gap-10 flex-1">
          <NewsCard size="lg" />
          <div className="flex flex-col justify-between w-[420px]">
            <NewsCard size="sm" />
            <NewsCard size="sm" />
            <NewsCard size="sm" />
            <NewsCard size="sm" />
            <NewsCard size="sm" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DontMiss;
