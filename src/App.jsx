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
    <div className=" w-full h-screen text-white px-8  ">
      <Navbar />
      <BackgraoundLayer />
      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center ">
        <div className="mx-auto">
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
        <div className="flex flex-col ">
          <div className="flex flex-row justify-center gap-8 flex-wrap ">
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
          <div className="flex flex-row justify-center gap-8 flex-wrap mt-6 ">
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
  );
}

export default App;
