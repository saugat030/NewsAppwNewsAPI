import React from "react";
import one from "../static/One1.png";
import two from "../static/Two.png";
import three from "../static/Three.png";
import four from "../static/Four.png";
const NewsGrid = () => {
  return (
    <div className="h-[570px] flex">
      <div className="h-full w-1/2 p-2">
        <img src={one} className="h-full w-full" />
      </div>
      <div className="h-full flex-col flex-1">
        <div className="flex h-1/2">
          <div className="flex-1  p-2">
            <img src={two} className="h-full w-full" />
          </div>
          <div className="flex-1  p-2">
            <img src={three} className="h-full w-full" />
          </div>
        </div>
        <div className="h-1/2  p-2">
          <img src={four} className="h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default NewsGrid;
