import { useEffect, useState } from 'react';
import Search from './Search';
import TemperatureAndDetails from './TemperatureAndDetails';
import TimeAndLocation from './TimeAndLocation';
import TopButtons from './TopButtons';
import { getFormattedWeather } from './service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DailyForecast from './DailyForecast';

function App() {
  const [city, setCity] = useState('Delhi');
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
        toast.info('Fetching data for ' + city);
        await getFormattedWeather(city)
        .then((data) => {
          toast.success('Successfully fetched data for ' + city);
          setWeather(data);
        })
    };
    fetchWeather();
  }, [city]);

  return (
    <>
    <div className='mx-auto max-w-screen-md px-32 py-5 bg-gradient-to-br from-cyan-700 to-blue-700 shadow-xl h-fit shadow-gray-400'>
      {weather && <TopButtons setCity={setCity}/>}
      {weather &&  
      <div>
      <Search setCity={setCity}/>
      <TimeAndLocation weather={weather}/>
      <TemperatureAndDetails weather={weather}/>
      <DailyForecast weather={weather}/>
      </div>
      }

      <ToastContainer autoClose={2000} theme='colored' newestOnTop={true}/>
      </div>
    </> 
  )
}

export default App
