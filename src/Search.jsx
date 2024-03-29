import React, { useState } from 'react';
import search from './assets/search.png';
import location from './assets/location.png';
import { geoToCity } from './service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      if(unit==='u') {
        setUnit('c');
        toast.success('Successfully setted degree to Celcius');
      } else {
        toast.info('Degree is already on celcius');
      }
    };

    const handleFahrenheit = () => {
      if(unit==='c') {
        setUnit('u');
        toast.success('Successfully setted degree to Fahrenheit');
      } else {
        toast.info('Degree is already on Fahrenheit');
      }
    };

  return (
    <div className='flex flex-row items-center justify-center my-6'>
        <input type="text" placeholder='Search' onChange={(e) => setPlace(e.target.value)} value={place} className=' p-2 shadow-xl shadow-gray-900 w-full text-xl font-light mx-2 focus:outline-none capitalize'/>
        <img  onClick={handleBtnClick} src={search} className='cursor-pointer mx-2' style={{fontSize: '25px'}}/>
        <img src={location} onClick={handleLocationClick} className='cursor-pointer mx-2' style={{fontSize: '25px'}}/>
        <button className=' text-lg text-white mx-1 font-extralight' onClick={handleCelcius}>°C</button>
        <p className=' text-lg text-white mx-1 font-extralight'>|</p>
        <button className=' text-lg text-white mx-1 font-extralight' onClick={handleFahrenheit}>°F</button>
        
      <ToastContainer autoClose={2000} theme='colored' newestOnTop={true}/>
    </div>
  )
}
