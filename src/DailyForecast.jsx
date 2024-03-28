import React from 'react';
import { formatToLocalTime } from './service';
import { v4 as uuidv4 } from 'uuid';

export default function DailyForecast({weather: { tz_id, daily }}) {
  // const dateAndTime = formatToLocalTime( date_epoch, tz_id, "hh:mm a" );

  return (
    <div>
      <h2 className='text-white font-medium'>Daily Forecast</h2>
      <hr className='my-2'/>
      <div className='flex flex-row items-center justify-around my-5'>
        {daily.map((d) => (
          <div className='flex flex-col justify-center items-center' key={uuidv4()}>
            {/* <p>{`${formatToLocalTime(d.date_epoch)}`}</p> */}
            <img src={d.icon}/>
            <p className='text-white'>{`${d.text}`}</p>
            <p className='text-white'>{`${d.maxtemp_c}`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
