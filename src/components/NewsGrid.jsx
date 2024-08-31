import React from "react";

const NewsGrid = () => {
  return (
    <div className="h-[570px] bg-red-300 flex p-4">
      <div className="h-full bg-blue-200 w-1/2 p-4 ">One</div>
      <div className="h-full flex-col p-4 bg-black w-1/ 2">
        <div className="bg-purple-300 flex h-1/2 p-4">
          <div className="p-4 bg-slate-300  flex-1">Two</div>
          <div className="p-4 bg-yellow-400  flex-1">Three</div>
        </div>
        <div className="p-4 bg-green-300 h-1/2">Four</div>
      </div>
    </div>
  );
};

export default NewsGrid;
