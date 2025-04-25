import React from "react";
import { useContext } from "react";
import DataContext from "../contexts/contexthook";

const Footer = () => {
  const { Data } = useContext(DataContext);
  return (
    <div className="flex gap-5 items-center mt-15">
      <div className="bg-[#1D273A] w-28  rounded-md px-2 py-1">
        <p className="text-[#FFFFFF] flex items-center justify-around">
          Humidity <img src="/images/humidity.png" className="w-5" alt="" />
        </p>
        <h2 className="text-[#C7C9D9]">{Data.name && Data.main.humidity}°</h2>
      </div>
      <div className="bg-[#1D273A] w-28  rounded-md px-2 py-1">
        <p className="text-[#FFFFFF] flex items-center justify-around">
          Wind <img src="/images/wind.png" className="w-5" alt="" />
        </p>
        <h2 className="text-[#C7C9D9]">{Data.name && Data.wind.speed} Km/h</h2>
      </div>
    </div>
  );
};

export default Footer;
