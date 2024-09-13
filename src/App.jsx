import { useState } from "react";

import "./App.css";
import Navbar from "./component/Navbar";
import BackgraoundLayer from "./component/BackgraoundLayer";
import WeatherCard from "./component/WeatherCard";
import { useStateContext } from "./context";
import MiniCard from "./component/MiniCard";

function App() {
  const { weather, value, thisloaction } = useStateContext();
  return (
    <>
      <BackgraoundLayer />
      <div className=" w-full h-screen text-white px-8  ">
        <Navbar />

        <main className="w-full flex flex-wrap justify-center md:flex-row gap-8 py-4 lg:px-[10%] items-center text-white ">
          <div className="mx-auto md:mx-0">
            <WeatherCard
              temperature={weather.temp}
              windspeed={weather.wspd}
              humidity={weather.humidity}
              place={thisloaction}
              heatIndex={weather.heatindex}
              iconString={weather.conditions}
              conditions={weather.conditions}
            />
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col ">
            <div className="flex flex-row md:flex-col md:mx-5 mt-2 lg:flex-row  justify-center gap-8 flex-wrap lg:mt-5 sm:my-5 ">
              {value?.slice(1, 4).map((curr) => {
                return (
                  <MiniCard
                    key={curr.datetime}
                    time={curr.datetime}
                    temp={curr.temp}
                    iconString={curr.conditions}
                  />
                );
              })}
            </div>
            <div className="flex flex-row md:flex-col md:mx-5 mt-2 lg:flex-row justify-center gap-8 flex-wrap lg:mt-5 sm:my-5 ">
              {value?.slice(4, 7).map((curr) => {
                return (
                  <MiniCard
                    key={curr.datetime}
                    time={curr.datetime}
                    temp={curr.temp}
                    iconString={curr.conditions}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
