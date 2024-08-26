import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import wind from "../assets/icons/windy.png";
import "../index.css";

const formatTemperature = (temp) => {
    return temp !== undefined ? temp.toFixed(2) : "--";
};

const degreesToCardinal = (degrees) => {
    const directions = [
        "N",
        "NNE",
        "NE",
        "ENE",
        "E",
        "ESE",
        "SE",
        "SSE",
        "S",
        "SSW",
        "SW",
        "WSW",
        "W",
        "WNW",
        "NW",
        "NNW",
    ];
    const index = Math.round((degrees % 360) / 22.5);
    return directions[index % 16];
};

const WeatherCard = ({
    temperature,
    windspeed,
    windDirection,
    humidity,
    place,
    iconString,
    conditions,
    minTemperature,
    maxTemperature,
    unit,
}) => {
    const [icon, setIcon] = useState(sun);
    const { time } = useDate();

    useEffect(() => {
        if (iconString) {
            if (iconString.toLowerCase().includes("cloud")) {
                setIcon(cloud);
            } else if (iconString.toLowerCase().includes("rain")) {
                setIcon(rain);
            } else if (iconString.toLowerCase().includes("clear")) {
                setIcon(sun);
            } else if (iconString.toLowerCase().includes("thunder")) {
                setIcon(storm);
            } else if (iconString.toLowerCase().includes("fog")) {
                setIcon(fog);
            } else if (iconString.toLowerCase().includes("snow")) {
                setIcon(snow);
            } else if (iconString.toLowerCase().includes("wind")) {
                setIcon(wind);
            }
        }
    }, [iconString]);

    const windDirectionCardinal = degreesToCardinal(windDirection);

    const temperatureFormatted = formatTemperature(temperature);
    const minTemperatureFormatted = formatTemperature(minTemperature);
    const maxTemperatureFormatted = formatTemperature(maxTemperature);

    return (
        <div className="w-[26rem] min-w-[24rem] h-[35rem] glassCard p-4">
            <div className="flex w-full justify-center items-center gap-4 mt-4 mb-4">
                <img src={icon} alt="weather_icon" />
                <p className="font-bold text-5xl flex justify-center items-center">
                    {temperatureFormatted} &deg;{unit}
                </p>
            </div>
            <div className="font-bold text-center text-xl">{place}</div>
            <div className="w-full flex justify-between items-center mt-4">
                <p className="flex-1 text-center p-2">
                    {new Date().toDateString()}
                </p>
                <p className="flex-1 text-center p-2">{time}</p>
            </div>

            <div className="w-full flex justify-between items-center mt-4 gap-4">
                <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
                    Wind Speed <p className="font-normal">{windspeed} km/h</p>
                </p>
                <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
                    Wind Direction{" "}
                    <p className="font-normal">{windDirectionCardinal}</p>
                </p>
            </div>

            <div className="w-full p-3 mt-6 flex justify-between items-center gap-4">
                <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600">
                    Min Temperature{" "}
                    <p className="font-normal">
                        {minTemperatureFormatted} &deg;C
                    </p>
                </p>
                <p className="flex-1 text-center p-2 font-bold rounded-lg bg-red-600">
                    Max Temperature{" "}
                    <p className="font-normal">
                        {maxTemperatureFormatted} &deg;C
                    </p>
                </p>
            </div>
            <div className="w-full flex items-center justify-center mb-4">
                <div className="w-[50%] text-center p-2 font-bold bg-blue-600 shadow rounded-lg">
                    Humidity <p className="font-normal">{humidity} gm/m³</p>
                </div>
            </div>

            <hr className="bg-slate-600" />
            <div className="w-full p-4 flex justify-center items-center text-3xl font-semibold">
                {conditions}
            </div>
        </div>
    );
};

export default WeatherCard;
