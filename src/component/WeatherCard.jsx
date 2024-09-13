import { useEffect, useState } from "react";
import React from "react";

import { useDate } from "../utils/useDate";
//icons
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import "../index.css";

//icons

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icons, seticons] = useState(sun);
  const { time } = useDate();

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
    <div className="w-[22rem] min-w-[22rem] p-4 glassCard ">
      <div className="flex w-full justify-center items-center gap-4 mt-12 mb-4 ">
        <img src={icons} alt="weather icon" />
        <p className="font-bold text-5xl flex justify-center items-center ">
          {temperature} &deg;C
        </p>
      </div>
      <div className=" font-bold text-center text-xl">{place}</div>
      <div className="w-full flex justify-between items-center mt-4 ">
        <p className="flex-1 text-white text-center p-2">
          {new Date().toDateString()}
        </p>
        <p className="flex-1 text-white text-center p-2">{time}</p>
      </div>
      <div className="w-full justify-between items-center mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
          Wind Speed :{windspeed}
        </p>

        <p className="flex-1 text-center p-2 font-bold bg-green-600 shadow mt-2 rounded-lg">
          Humidity: {humidity}
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex text-black justify-center items-center ">
        <p className="font-semibold text-lg">Heat Index: </p>
        <p className="font-normal">{heatIndex ? heatIndex : "N/A"} </p>
      </div>
      <hr className=" bg-slate-600  " />

      <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
