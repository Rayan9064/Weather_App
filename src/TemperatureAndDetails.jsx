import React from "react";

export default function TemperatureAndDetails({ weather: { temp_c, temp_f, feelslike_c, feelslike_f, text, icon, humidity, wind_dir, wind_kph, daily }, unit}) {
  return (
    <div>
      <div className="flex flex-row justify-center items-center my-2">
        <p className=" md:text-lg text-blue-200 font-normal">{`${text}`}</p>
      </div>
      <div className="flex flex-row justify-between items-center my-2">
        <div className="mx-2">
          <img src={icon}  className=" max-md:w-12"/>
        </div>
        <div>
          <p className=" text-white font-light max-sm:text-2xl max-md:text-4xl max-lg:text-5xl ml-12" id="Temp">{`${(unit==='Celcius')?temp_c:temp_f}`}°</p>
        </div>
        <div className="flex flex-col mx-2">
            <div>
                <img src=""/>
                <p className=" text-white max-sm:text-xs md:text-sm max-lg:text-base">Humidity: {`${humidity}`}%</p>
            </div>
            <div>
                <img src=""/>
                <p className=" text-white max-sm:text-xs md:text-sm max-lg:text-base">Wind Speed: {`${wind_kph}`} km/h</p>
            </div>
            <div>
                <img src=""/>
                <p className=" text-white max-sm:text-xs md:text-sm max-lg:text-base" id="Feels_like">Wind Direction: {`${wind_dir}`}</p>
            </div>
        <div>
        <img src="" alt="" />
        <p className=" text-white max-sm:text-xs md:text-sm max-lg:text-base">Feels like: {`${(unit==='Celcius')?feelslike_c:feelslike_f}`}</p>
        </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center my-2">
        <div>
        <img src="" alt="" />
        <p className=" text-white text-base max-sm:text-xs md:text-sm max-lg:text-base mx-1">Sunrise: {`${daily[0].sunrise}`}<span className=" font-extralight text-base mx-1">&nbsp;|</span></p>
        </div>
        <div>
        <img src="" alt="" />
        <p className=" text-white text-base max-sm:text-xs md:text-sm max-lg:text-base mx-1">Sunset: {`${daily[0].sunset}`}<span className=" font-extralight text-base mx-1">&nbsp;|</span></p>
        </div>
        <div>
        <img src="" alt="" />
        <p className=" text-white text-base max-sm:text-xs md:text-sm max-lg:text-base mx-1">Max temp: {`${(unit==='Celcius')?daily[0].maxtemp_c:daily[0].maxtemp_f}`}</p>
        </div>
      </div>
    </div>
  );
}
