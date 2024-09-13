import React, { useState } from "react";

import search from "../assets/icons/search.svg";
import { useStateContext } from "../context";

const Navbar = () => {
  const [Input, setInput] = useState("");
  const { setplace } = useStateContext();
  const submitCity = () => {
    setplace(Input);
  };
  return (
    <nav className="w-full p-3 flex justify-between items-center">
      <div className="bg-[#3c79c8] p-3 rounded-[10px] border-red-950 border-solid">
        <h1 className="font-bold text-white md:text-3xl">Weather App</h1>
      </div>
      <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded-[20px] flex items-center p-2 gap-2 ">
        <img src={search} alt="search" className=" w-[1.5rem] h-[1.5rem]" />
        <input
          type="text"
          className=" focus:outline-none w-full text-[#212121] text-lg "
          placeholder="Search City"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              submitCity();
            }
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
