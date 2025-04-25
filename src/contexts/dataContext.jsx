import { useState, useEffect } from "react";
import DataContext from "./contexthook";

const DataProvider = ({children}) => {

    const [Data ,setData] = useState();
    const [City, setCity] = useState("");
    const apiKey = "cb1f2e513592b8e4ebb7dc6183bea3f0";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    useEffect(() => {
        const fetchData = async (city) => {
            const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
            const json = await response.json();
            setData(json);
        };
        fetchData(City);
    }, [City]);

    return(
      <DataContext.Provider value={{Data , setData, City, setCity}}>
        {children}
      </DataContext.Provider>
    )
}

export default DataProvider;