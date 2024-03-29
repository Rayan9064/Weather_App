import React, { useState } from 'react'
import Search from './Search';
import TemperatureAndDetails from './TemperatureAndDetails';
import TimeAndLocation from './TimeAndLocation';
import TopButtons from './TopButtons';
import DailyForecast from './DailyForecast';

export default function Weather({ weather, setCity, unit, setUnit }) {

  return (
    <>
    <div className={`mx-auto max-w-screen-md px-32 py-5 bg-gradient-to-br ${(weather.temp_c<30)?'from-cyan-700 to-blue-700':'from-orange-600 to-orange-700'} shadow-xl h-fit shadow-gray-400`}>
       <TopButtons setCity={setCity}/>
      <Search setCity={setCity} unit={unit} setUnit={setUnit}/>
      <TimeAndLocation weather={weather}/>
      <TemperatureAndDetails weather={weather} unit={unit}/>
      <DailyForecast weather={weather} unit={unit}/>
    </div>
    </>
  )
}
