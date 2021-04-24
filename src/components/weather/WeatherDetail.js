import React from 'react'
import '../../styles/weather/weather-styles.css'

const iconBase = "http://openweathermap.org/img/wn/";

const WeatherDetail = ({ timezone, forecast }) => {

    const renderedForecast = forecast.map((hr, index) => {

        const milliseconds = hr.dt * 1000;
        const dateObj = new Date(milliseconds);
        const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour:'numeric', timeZone: `${timezone}` };
        const curDate = dateObj.toLocaleString(undefined, options);

        return (
            <div key={index} className="card weatherCard">
                <div>{`${curDate}`}</div>
                <div><img src={`${iconBase}${hr.weather[0].icon}@2x.png`}></img>{`${Math.round(hr.temp) + ' F'} and ${hr.weather[0].description}`}</div>
                <div>{`${Math.round(hr.pop*100) + ' %'}`}</div>
                <div>{`${Math.round(hr.wind_speed) + ' mph'}`}</div>
            </div>)
    });

    const renderedHeader =
        <div className="weatherHeader text-white bg-dark">
                <div>Time</div>
                <div>Forecast</div>
                <div>Precip Chance</div>
                <div>Wind</div>
        </div>

    return (

        <div>{renderedHeader}
        <div className="weatherDetail">
            {renderedForecast}
            </div>

        </div>);
}

export default WeatherDetail;