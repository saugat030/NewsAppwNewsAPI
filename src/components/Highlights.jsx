import React from "react";
import NewsCard from "./NewsCard";

const Highlights = () => {
  return (
    //   <div className="flex justify-between">
    //     <h1>Recent</h1>
    //     <h1>Trending</h1>
    //     <h1>Most Viewed</h1>
    //   </div>
    <div className="w-[30%] mt-10 mr-10 p-2">
      <div className="flex justify-between mb-5">
        <h1 className="text-xl border-b border-red-500 text-red-500 p-2 font-medium">
          Recent
        </h1>
        <h1 className="text-xl border-b border-black p-2 font-medium">
          Trending
        </h1>
        <h1 className="text-xl border-b border-black p-2 font-medium">
          Most Viewed
        </h1>
      </div>
      <div className="flex flex-col justify-between gap-10">
        <NewsCard size="xsm" />
        <NewsCard size="xsm" />
        <NewsCard size="xsm" />
        <NewsCard size="xsm" />
        <NewsCard size="xsm" />
      </div>
    </div>
  );
};

export default Highlights;
