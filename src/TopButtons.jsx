import React from 'react';

export default function TopButtons({ setCity }) {
    const cities = [
        {
            id: 1,
            name: 'London'
        },
        {
            id: 2,
            name: 'Sydney'
        },
        {
            id: 3,
            name: 'Tokyo'
        },
        {
            id: 4,
            name: 'Toronto'
        },
        {
            id: 5,
            name: 'Paris'
        },
    ]
  return (
  <div className='flex flex-row items-center justify-around my-4'>
      {cities.map((city) => (
        <button key={city.id} onClick={() => setCity(city.name)} className='max-sm:text-xs font-medium md:text-xl text-white'>{city.name}</button>
      ))}
    </div>
  );
}
