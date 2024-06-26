import { DateTime } from "luxon";

const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
	}
};

const requestOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_REVERSE_GEO,
		'X-RapidAPI-Host': import.meta.env.VITE_GEO_HOST
	}
};

const getWeather = async (city) => {
	return await fetch(url + city + '&days=3', options)
   .then(res => res.json());
}

const getCity = async (lat, lon) => {  
   return await fetch(`https://trueway-geocoding.p.rapidapi.com/ReverseGeocode?location=${lat}%2C${lon}&language=en`, requestOptions)
   .then(response => response.json())
}

const getLocality = (data) => {
   const {
      results
   } = data;

   const city = results[0].locality;

   return city;
};

const geoToCity =  (setCity) => {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
      //   console.log(`Latitude: ${lat}, Longitude: ${lon}`);
        const city = await getCity(lat, lon).then(getLocality);
        setCity(city);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
}

const formatWeather = (data) => {
   const {
      current: { 
         condition: { text, icon }, 
         humidity, temp_c, temp_f, wind_dir, wind_kph, feelslike_c, feelslike_f
      },
      forecast: { forecastday },
      location: { name: city, region, country, tz_id, localtime_epoch: date_epoch },
   } = data;

   const daily = forecastday.map((d) => {
      const {
         astro: { sunrise, sunset },
         date_epoch,
         day: { maxtemp_c, maxtemp_f, 
            condition: { text, icon },      
         },
         hour
      } = d;

      const hourlyForecast = hour.map((h) => {
         const {
            temp_c, temp_f, 
            time_epoch, 
            condition: { text, icon },
         } = h;

         return { temp_c, temp_f, time_epoch, text, icon };
      });

      return { sunrise, sunset, date_epoch, maxtemp_c, maxtemp_f, text, icon, hourlyForecast };
   });

   const hourly = daily.map((d) => {
      const {
         hourlyForecast,
      } = d;

      return { hourlyForecast };
   });

   // console.log(data);
   // console.log( {temp_c, temp_f, text, icon, humidity, wind_dir, wind_kph, city, region, country, date_epoch, tz_id, daily, hourly} );
   return { temp_c, temp_f, text, icon, humidity, wind_dir, wind_kph, feelslike_c, feelslike_f, city, region, country, date_epoch, tz_id, daily, hourly };
}

const getFormattedWeather = async (city) => {
   const formattedWeather = await getWeather(city)
   .then(formatWeather);
   return formattedWeather;
}

const formatToLocalTime = (
   secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
   ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


   // console.log(getFormattedWeather('New Delhi'));
// geoToCity();
export {getFormattedWeather, formatToLocalTime, geoToCity};