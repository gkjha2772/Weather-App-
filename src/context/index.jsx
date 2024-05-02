import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setweather] = useState({});

  const [value, setvalue] = useState([]);

  const [place, setplace] = useState("New Delhi");

  const [thisloaction, setthisloaction] = useState("");

  const fetchWeather = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        aggregateHours: "24",
        location: place,
        contentType: "json",
        unitGroup: "metric",
        shortColumnNames: 0,
      },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);

      //console.log(response.data);

      const thisData = Object.values(response.data.locations)[0];

      setthisloaction(thisData.address);
      setvalue(thisData.values);
      setweather(thisData.values[0]);
    } catch (e) {
      console.error(e);

      alert("Something is not right");
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [place]);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <StateContext.Provider
      value={{
        weather,
        setplace,
        value,
        thisloaction,
        place,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

export default StateContextProvider;
