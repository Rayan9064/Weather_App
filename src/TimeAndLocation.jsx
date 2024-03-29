import React from 'react'
import { formatToLocalTime } from './service'

export default function TimeAndLocation({ weather: {city, region, country, tz_id, date_epoch }}) {
  const dateAndTime = formatToLocalTime( date_epoch, tz_id, "cccc, dd LLL yyyy' | Local time: 'hh:mm a" );
  return (
    <div>
        <div className='flex flex-row justify-center items-center my-4'>
            <p className=' md:text-lg text-white font-extralight'>{`${dateAndTime}`}</p>
        </div>
        <div className='flex flex-row justify-center items-center my-2'>
            <p className=' max-sm:text-xl md:text-3xl text-white font-semibold'>{`${(region===undefined)?`${city}, ${country}`:`${city}, ${region}, ${country}`}`}</p>
        </div>
    </div>
  )
}
