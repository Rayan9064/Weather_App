import React, { useState } from 'react';
import search from './assets/search.png';
import location from './assets/location.png';
import { geoToCity } from './service';

export default function Search({ setCity, unit, setUnit }) {
    const [place, setPlace] = useState("");

    const handleBtnClick = () => {
      if(place!== '') setCity(place); 
    }

    const handleLocationClick = () => {
      const city = geoToCity();
      setCity(city);
    }

    const handleCelcius = () => {
      if(unit==='Fahrenheit') setUnit('Celcius'); 
    };

    const handleFahrenheit = () => {
      if(unit==='Celcius') setUnit('Fahrenheit');
    };

  return (
    <div className='flex flex-row items-center justify-center my-6'>
        <input type="text" placeholder='Search' onChange={(e) => setPlace(e.target.value)} value={place} className=' p-2 shadow-xl max-sm:text-xs shadow-gray-900 w-full text-xl font-light mx-2 focus:outline-none capitalize'/>
        <img  onClick={handleBtnClick} src={search} className=' cursor-pointer mx-2' style={{fontSize: '25px'}}/>
        <img src={location} onClick={handleLocationClick} className=' cursor-pointer mx-2' style={{fontSize: '25px'}}/>
        <button className='max-sm:text-xs text-lg text-white mx-1 font-extralight' onClick={handleCelcius}>°C</button>
        <p className='max-sm:text-xs text-lg text-white mx-1 font-extralight'>|</p>
        <button className='max-sm:text-xs text-lg text-white mx-1 font-extralight' onClick={handleFahrenheit}>°F</button>
    </div>
  )
}
