import React from "react";
import DataContext from "../contexts/contexthook";
import { useContext } from "react";

const Search = () => {
    const {City,setCity} = useContext(DataContext);
    function handleChange(e) {
        setCity(e.target.value);
      }
  return (
    <div className="flex items-center justify-center gap-3 bg-[#1D273A] rounded-lg p-2">
      <input
        type="text"
        onChange={handleChange}
        className="border-none outline-none rounded-2xl bg-[#1D273A] text-white placeholder:text-white px-2"
        placeholder="Search for a city"
        value={City}
      />
      <button>
        <img className="w-6" src="/images/sreach.svg" alt="" />
      </button>
    </div>
  );
};

export default Search;
