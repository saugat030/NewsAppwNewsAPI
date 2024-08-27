import React from "react";
import { Link } from "react-router-dom";
import { TiWeatherCloudy } from "react-icons/ti";
import { TiWatch } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
const TopBar = () => {
  return (
    <div className="h-14 flex justify-between items-center text-sm">
      {/* Weather and time Section */}
      <div className="flex h-full items-center gap-5">
        <TiWeatherCloudy size={32} />

        <h1>Kathmandu</h1>
        <section className="flex items-center">
          <TiWatch size={32} />
          <h1>Wednesday, 10 January 2021</h1>
        </section>
        <h1 className="bg-red-500 text-white h-full text-center flex items-center px-4">
          Breaking News
        </h1>
        <h1>Indonesia says located black box recorders from crashed plane</h1>
      </div>
      {/* Social Media Section */}
      <div className="flex gap-2">
        <TiSocialFacebookCircular size={32} color="blue" />
        <TiSocialInstagramCircular size={32} color="red" />
        <TiSocialYoutube size={32} color="red" />
      </div>
    </div>
  );
};

export default TopBar;
