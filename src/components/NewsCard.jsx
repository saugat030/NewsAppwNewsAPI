import React from "react";

const NewsCard = (props) => {
  if (props.size == "lg") {
    return (
      <section className="flex flex-col gap-2 w-[394px]">
        <figure>
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt=""
          />
        </figure>
        <h2 className="">
          Craig Bator - <span className="text-gray-300">27th Dec 2020</span>
        </h2>
        <h1 className="font-semibold text-xl">
          Now Is the Time to Think About Your Small Business Success
        </h1>
        <h2 className="text-gray-300 text-balanced">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          aliquid fugit magni doloribus omnis odit, iure nostrum eveniet,
          corrupti consequuntur atque. Eos temporibus hic repudiandae aspernatur
          blanditiis possimus, deserunt ullam amet cum?
        </h2>
      </section>
    );
  } else {
    return (
      <div
        className={`flex gap-2 ${props.size == "xsm" ? "w-[90%]" : "w-full"}`}
      >
        <figure className="w-40">
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="Photo"
            className="h-full w-full"
          />
        </figure>
        <div className="flex flex-col">
          <h2 className="text-xs">
            Craig Bator - <span className="text-gray-300">27th Dec 2020</span>
          </h2>
          <h1 className="text-lg font-semibold">
            Now Is the Time to Think About Your Small Business Success
          </h1>
        </div>
      </div>
    );
  }
};

export default NewsCard;
