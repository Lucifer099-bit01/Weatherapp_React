import React from "react";
import Search from "./components/Search";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useContext } from "react";
import DataContext from "./contexts/contexthook";


const App = () => {
  const context = useContext(DataContext);
  const { Data, setData, City, setCity } = context;
  console.log("city", City);
  console.log("data", Data);
  if (Data !== undefined) {
    console.log("data", Data);
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <div className="bg-[#0B1120] px-6 py-4 rounded-2xl flex flex-col justify-center items-center">
        <Search />
        {City && Data.cod !== 404 ? (
          <>
            <Content />
            {Data.name && <Footer />}
          </>
        ) : (
          <div>
            <h1 className="text-2xl font-semibold text-[#FFFFFF] mt-3">
              {Data?.cod === 404 ? "City not found" : "Search for a city"}
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
