import React from 'react';
import { formatToLocalTime } from './service';
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default function DailyForecast({weather: { tz_id, daily }, unit }) {

  return (
    <div>
      <h2 className='text-white font-medium'>Daily Forecast</h2>
      <hr className='my-2'/>
      <div className='flex flex-row items-center justify-around my-5'>
        {daily.map((d) => (
          <div className='flex flex-col justify-center items-center' key={uuidv4()}>
            <p className=' text-white max-sm:text-xs md:text-sm text-base'>{`${formatToLocalTime(d.date_epoch, tz_id, "cccc")}`}</p>
            <img src={d.icon}/>
            <p className='text-white max-sm:text-xs md:text-sm text-base my-1'>{`${d.text}`}</p>
            <p className='text-white max-sm:text-xs md:text-sm text-base'>{`${(unit==='Celcius')?d.maxtemp_c:d.maxtemp_f}`}°</p>
          </div>
        ))}
        
      <Link className=' lg:p-2 max-sm:w-17 max-sm:text-xs text-center bg-gray-700 max-lg:w-24 max-md:w-24 lg:w-28 text-white rounded-lg border-2 border-black outline-1 md:text-base' to='/hourly'>Get Hourly Forecast</Link>
      </div>
    </div>
  )
}
