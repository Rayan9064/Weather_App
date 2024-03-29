import { useEffect, useState } from 'react';
import { getFormattedWeather } from './service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Weather from './Weather';
import HourlyForecast from './HourlyForecast';

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
    <Router>
      <Routes>
        <Route exact path='/' element={ weather && <Weather weather={weather} setCity={setCity} />}/>
        <Route exact path='/hourly' element={weather && <HourlyForecast weather={weather} />}/>
      </Routes>

      <ToastContainer autoClose={2000} theme='colored' newestOnTop={true}/>
    </Router>
    </> 
  )
}

export default App
