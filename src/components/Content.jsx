import React from "react";
import { useContext } from "react";
import DataContext from "../contexts/contexthook";

const Content = () => {
    const {Data} = useContext(DataContext)
  const weatherImages = {
    Clouds: "/images/clouds.png",
    Clear: "/images/clear.png",
    Rain: "/images/rain.png",
    Snow: "/images/snow.png",
    Mist: "/images/mist.png",
    Drizzle: "/images/drizzle.png",
  };

  const weatherMain = Data?.weather?.[0]?.main;
  const weatherImg = weatherImages[weatherMain];

  return (
    <>
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="text-2xl font-semibold text-[#FFFFFF]">{Data.name}</h1>
      </div>
      <div className="text-center mt-2">
        {weatherImg && (
          <img
            src={weatherImg}
            alt={weatherMain}
            className="w-32 h-32 mt-4 object-contain"
          />
        )}
        <h1 className="text-2xl scale-150 font-bold text-[#FFFFFF] mt-4">
          {Data.name && Math.round(Data?.main?.temp) + "°C"}
        </h1>
      </div>
    </>
  );
};

export default Content;
