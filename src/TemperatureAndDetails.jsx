import React from "react";
import cloud from "./assets/cloud.png";

export default function TemperatureAndDetails({ weather: { temp_c, temp_f, text, icon, humidity, wind_dir, wind_kph, daily }}) {
  return (
    <div>
      <div className="flex flex-row justify-center items-center my-2">
        <p className=" text-lg text-blue-200 font-normal">{`${text}`}</p>
      </div>
      <div className="flex flex-row justify-between items-center my-2">
        <div className="mx-2">
          <img src={icon} />
        </div>
        <div>
          <p className=" text-white font-light text-5xl ml-12" id="Temp">{`${temp_c}`}°</p>
        </div>
        <div className="flex flex-col mx-2">
            <div>
                <img src=""/>
                <p className=" text-white">Humidity: {`${humidity}`}%</p>
            </div>
            <div>
                <img src=""/>
                <p className=" text-white">Wind Speed: {`${wind_kph}`} km/h</p>
            </div>
            <div>
                <img src=""/>
                <p className=" text-white" id="Feels_like">Wind Direction: {`${wind_dir}`}</p>
            </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center my-4">
        <div>
        <img src="" alt="" />
        <p className=" text-white text-base mx-1">Sunrise: {`${daily[0].sunrise}`}<span className=" font-extralight text-sm mx-1">&nbsp;|</span></p>
        </div>
        <div>
        <img src="" alt="" />
        <p className=" text-white text-base mx-1">Sunset: {`${daily[0].sunset}`}<span className=" font-extralight text-sm mx-1">&nbsp;|</span></p>
        </div>
        {/* <div>
        <img src="" alt="" />
        <p className=" text-white text-base mx-1">Max temp: {`${chill}`}<span className=" font-extralight text-sm mx-1">&nbsp;|</span></p>
        </div>
        <div>
        <img src="" alt="" />
        <p className=" text-white text-base mx-1">Min temp: {`${direction}`}</p>
        </div> */}
      </div>
    </div>
  );
}
