import { useState, React }from 'react'
import { formatToLocalTime } from './service'
import { v4 as uuidv4 } from 'uuid';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HourlyForecast({ weather: { daily, hourly, tz_id } }) {

    const [ unit, setUnit ] = useState('c');

    const day1 = formatToLocalTime(daily[0].date_epoch, tz_id, "cccc");
    const day2 = formatToLocalTime(daily[1].date_epoch, tz_id, "cccc");
    const day3 = formatToLocalTime(daily[2].date_epoch, tz_id, "cccc");

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
        <>
            <div className='mx-auto text-white max-w-screen-md px-32 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl h-fit shadow-gray-400'>
                <p className=' text-center font-semibold text-2xl '>Hourly Forecast</p>
                <hr className='my-4 text-white' />
                <Tabs>
                <TabList className='flex justify-around items-center my-2 border-b-2 border-b-white'>
                    <Tab>{day1}</Tab>
                    <Tab>{day2}</Tab>
                    <Tab>{day3}</Tab>
                </TabList>
                    <TabPanel>
                        <p className=' font-medium text-xl pl-2'>Hourly Forecast for <span className=' text-cyan-500'>{`${day1}`}</span > <button onClick={handleCelcius}> C</button> | <button onClick={handleFahrenheit}> F</button></p>
                        <div className='flex flex-row flex-wrap justify-around items-center text-white'>
                            {hourly[0].hourlyForecast.map((h) => (
                                <div className=' flex flex-col items-center justify-center m-2' key={uuidv4()}>
                                    <p>{formatToLocalTime(h.time_epoch, tz_id, "hh:mm a")}</p>
                                    <img src={h.icon}/>
                                    <p>{(unit==='c')?h.temp_c:h.temp_f}°</p>
                                    <p>{h.text}</p>
                                </div> 
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p className=' font-medium text-xl pl-2'>Hourly Forecast for <span className=' text-cyan-500'>{`${day2}`}</span></p>
                    <div className='flex flex-row flex-wrap justify-around items-center text-white'>
                            {hourly[1].hourlyForecast.map((h) => (
                                <div className=' flex flex-col items-center justify-center m-2' key={uuidv4()}>
                                    <p>{formatToLocalTime(h.time_epoch, tz_id, "hh:mm a")}</p>
                                    <img src={h.icon}/>
                                    <p>{(unit==='c')?h.temp_c:h.temp_f}°</p>
                                    <p>{h.text}</p>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <p className=' font-medium my-2 text-xl pl-2'>Hourly Forecast for <span className=' text-cyan-500'>{`${day3}`}</span></p>
                    <div className='flex flex-row flex-wrap justify-around items-center text-white'>
                            {hourly[2].hourlyForecast.map((h) => (
                                <div className=' flex flex-col items-center justify-center m-2' key={uuidv4()}>
                                    <p>{formatToLocalTime(h.time_epoch, tz_id, "hh:mm a")}</p>
                                    <img src={h.icon}/>
                                    <p>{(unit==='c')?h.temp_c:h.temp_f}°</p>
                                    <p>{h.text}</p>
                                </div>
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
                
                <ToastContainer autoClose={2000} theme='colored' newestOnTop={true}/>
            </div>
        </>
    )
}