import React, {useState, useEffect} from 'react'
import weatherService from '../../services/weather/weather-service';
import WeatherDetail from './WeatherDetail';

const WeatherPart = ({lat, lon}) => {
    
    const [weatherData, setWeatherData] = useState()

    useEffect(async () => {
        getWeatherData()
    }, [lat, lon])

    async function getWeatherData() {
        const response = await weatherService.get('/onecall', {
            params: {
                lat: lat,
                lon: lon
            }
        });
        setWeatherData(response.data)
    }
      
    return (

        weatherData === undefined ? (<div>Loading weather data</div>) :

        <div>
            <WeatherDetail timezone={weatherData.timezone} forecast={weatherData.hourly} /> 
        </div>
    );
}

export default WeatherPart;