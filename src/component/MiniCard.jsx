import React, { useState, useEffect } from "react";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import "../index.css";

const MiniCard = ({ time, temp, iconString }) => {
  const [icons, seticons] = useState();

  useEffect(() => {
    if (iconString) {
      if (iconString.toLowerCase().includes("clear")) {
        seticons(sun);
      } else if (iconString.toLowerCase().includes("cloud")) {
        seticons(cloud);
      } else if (
        iconString.toLowerCase().includes("rain") ||
        iconString.toLowerCase().includes("shower")
      ) {
        seticons(rain);
      } else if (iconString.toLowerCase().includes("snow")) {
        seticons(snow);
      } else if (iconString.toLowerCase().includes("fog")) {
        seticons(fog);
      } else if (
        iconString.toLowerCase().includes("storm") ||
        iconString.toLowerCase().includes("thunder")
      ) {
        seticons(storm);
      } else if (iconString.toLowerCase().includes("wind")) {
        seticons(wind);
      }
    }
  }, [iconString]);

  return (
    <div className="glassCard w-[10rem] h-[10rem] p-4 flex flex-col ">
      <p className="text-center ">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1   ">
        <img src={icons} alt="weather" className="w-[4rem] h-[4rem]" />
      </div>
      <p className="text-center font-bold ">{temp} &deg;C</p>
    </div>
  );
};

export default MiniCard;
