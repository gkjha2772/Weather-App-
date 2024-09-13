import React, { useState, useEffect } from "react";
import { useStateContext } from "../context";
//images import
import Clear from "../assets/images/Clear.jpg";
import Fog from "../assets/images/fog.png";
import Cloudy from "../assets/images/Cloudy.jpg";
import Rainy from "../assets/images/Rainy.jpg";
import Snow from "../assets/images/snow.jpg";
import Stormy from "../assets/images/Stormy.jpg";
import Sunny from "../assets/images/Sunny.jpg";
// images import
const BackgraoundLayer = () => {
  const { weather } = useStateContext();
  const [image, setimage] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("clear")) {
        setimage(Clear);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setimage(Cloudy);
      } else if (
        imageString.toLowerCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setimage(Rainy);
      } else if (imageString.toLowerCase().includes("snow")) {
        setimage(Snow);
      } else if (imageString.toLowerCase().includes("fog")) {
        setimage(Fog);
      } else if (
        imageString.toLowerCase().includes("storm") ||
        imageString.toLowerCase().includes("thunder")
      ) {
        setimage(Stormy);
      }
    }
  });

  return (
    <img
      src={image}
      alt="Weather_Image"
      className="min-h-full w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgraoundLayer;
