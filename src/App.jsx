// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import search from "./assets/icons/search.svg";
// import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

// function App() {
//     const [input, setInput] = useState("");
//     const [unit, setUnit] = useState("C");
//     const [weather, setWeather] = useState({});
//     const [values, setValues] = useState([]);
//     const [place, setPlace] = useState("Delhi");
//     const [thisLocation, setLocation] = useState("");

//     const fetchWeather = async () => {
//         const options = {
//             method: "GET",
//             url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
//             params: {
//                 aggregateHours: "24",
//                 location: place,
//                 contentType: "json",
//                 unitGroup: "metric",
//                 shortColumnNames: 0,
//             },
//             headers: {
//                 "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
//                 "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
//             },
//         };

//         try {
//             const response = await axios.request(options);
//             console.log(response?.data);
//             const thisData = Object.values(response?.data?.locations)[0];
//             setLocation(thisData?.address);
//             setValues(thisData?.values);
//             setWeather(thisData?.values[0]);
//         } catch (e) {
//             console.error(e);
//             alert("This place does not exist");
//         }
//     };

//     useEffect(() => {
//         fetchWeather();
//     }, [place]);

//     const submitCity = () => {
//         setPlace(input);
//         setInput("");
//     };

//     const toggleUnit = () => {
//         setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
//     };

//     const convertTemperature = (tempCelsius) => {
//         return unit === "C" ? tempCelsius : (tempCelsius * 9) / 5 + 32;
//     };

//     return (
//         <div className="w-full h-screen text-white px-8">
//             <div className="w-full p-3 flex justify-between items-center">
//                 <h1 className="font-bold tracking-wide text-3xl">
//                     Weather Forecast Dashboard
//                 </h1>
//                 <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
//                     <img
//                         src={search}
//                         alt="search"
//                         className="w-[1.5rem] h-[1.5rem]"
//                     />
//                     <input
//                         onKeyUp={(e) => {
//                             if (e.key === "Enter") {
//                                 submitCity();
//                             }
//                         }}
//                         type="text"
//                         placeholder="Search city"
//                         className="focus:outline-none w-full text-[#212121] text-lg"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                     />
//                 </div>
//             </div>

//             <div className="w-full flex justify-center mt-4">
//                 <label className="relative inline-flex items-center cursor-pointer">
//                     <input
//                         type="checkbox"
//                         className="sr-only"
//                         checked={unit === "F"}
//                         onChange={toggleUnit}
//                     />
//                     <div className="w-32 h-16 bg-gray-400 rounded-full flex items-center p-1 transition-colors duration-300 ease-in-out">
//                         <div
//                             className={`w-14 h-14 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
//                                 unit === "F"
//                                     ? "translate-x-16"
//                                     : "translate-x-1"
//                             }`}
//                         ></div>
//                         <span className="absolute left-3 text-lg font-medium text-gray-800">
//                             °C
//                         </span>
//                         <span className="absolute right-3 text-lg font-medium text-gray-800">
//                             °F
//                         </span>
//                     </div>
//                 </label>
//             </div>

//             <BackgroundLayout weather={weather} />
//             <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
//                 <WeatherCard
//                     place={thisLocation}
//                     windspeed={weather.wspd}
//                     windDirection={weather.wdir}
//                     humidity={weather.humidity}
//                     temperature={convertTemperature(weather.temp)}
//                     iconString={weather.conditions}
//                     conditions={weather.conditions}
//                     minTemperature={convertTemperature(weather.mint)}
//                     maxTemperature={convertTemperature(weather.maxt)}
//                     unit={unit}
//                 />

//                 <div className="flex justify-center gap-8 flex-wrap w-[60%]">
//                     {values?.slice(1, 6).map((curr) => {
//                         return (
//                             <MiniCard
//                                 key={curr.datetime}
//                                 time={curr.datetime}
//                                 temp={convertTemperature(curr.temp)}
//                                 iconString={curr.conditions}
//                                 date={curr.datetimeStr}
//                                 unit={unit}
//                             />
//                         );
//                     })}
//                 </div>
//             </main>
//         </div>
//     );
// }

// export default App;

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import search from "./assets/icons/search.svg";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";

function App() {
    const [input, setInput] = useState("");
    const [unit, setUnit] = useState("C");
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState("Delhi");
    const [thisLocation, setLocation] = useState("");

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
            console.log(response?.data);
            const thisData = Object.values(response?.data?.locations)[0];
            setLocation(thisData?.address);
            setValues(thisData?.values);
            setWeather(thisData?.values[0]);
        } catch (e) {
            console.error(e);
            alert("This place does not exist");
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [place]);

    const submitCity = () => {
        setPlace(input);
        setInput("");
    };

    const toggleUnit = () => {
        setUnit((prevUnit) => (prevUnit === "C" ? "F" : "C"));
    };

    const convertTemperature = (tempCelsius) => {
        return unit === "C" ? tempCelsius : (tempCelsius * 9) / 5 + 32;
    };

    return (
        <div className="w-full h-screen text-white px-4">
            <div className="w-full p-3 flex justify-between items-center">
                <h1 className="font-bold tracking-wide text-3xl">
                    Weather Forecast Dashboard
                </h1>
                <div className="bg-white w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2">
                    <img
                        src={search}
                        alt="search"
                        className="w-[1.5rem] h-[1.5rem]"
                    />
                    <input
                        onKeyUp={(e) => {
                            if (e.key === "Enter") {
                                submitCity();
                            }
                        }}
                        type="text"
                        placeholder="Search city"
                        className="focus:outline-none w-full text-[#212121] text-lg"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </div>

            <div className="w-full flex justify-center mt-4">
                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only"
                        checked={unit === "F"}
                        onChange={toggleUnit}
                    />
                    <div className="w-32 h-16 bg-gray-400 rounded-full flex items-center p-1 transition-colors duration-300 ease-in-out">
                        <div
                            className={`w-14 h-14 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
                                unit === "F"
                                    ? "translate-x-16"
                                    : "translate-x-1"
                            }`}
                        ></div>
                        <span className="absolute left-3 text-lg font-medium text-gray-800">
                            °C
                        </span>
                        <span className="absolute right-3 text-lg font-medium text-gray-800">
                            °F
                        </span>
                    </div>
                </label>
            </div>

            <BackgroundLayout weather={weather} />

            {/* Flex container with responsive design */}
            <main className="w-full flex flex-col md:flex-row justify-between py-4 px-4 gap-8 mt-5">
                {/* WeatherCard on the left */}
                <div className="w-full md:w-[40%] ml-8">
                    <WeatherCard
                        place={thisLocation}
                        windspeed={weather.wspd}
                        windDirection={weather.wdir}
                        humidity={weather.humidity}
                        temperature={convertTemperature(weather.temp)}
                        iconString={weather.conditions}
                        conditions={weather.conditions}
                        minTemperature={convertTemperature(weather.mint)}
                        maxTemperature={convertTemperature(weather.maxt)}
                        unit={unit}
                    />
                </div>

                {/* MiniCards on the right */}
                <div className="flex flex-wrap gap-10 w-full md:w-[55%] justify-center">
                    {values?.slice(1, 6).map((curr) => (
                        <MiniCard
                            key={curr.datetime}
                            time={curr.datetime}
                            temp={convertTemperature(curr.temp)}
                            iconString={curr.conditions}
                            date={curr.datetimeStr}
                            unit={unit}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
