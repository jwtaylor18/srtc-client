import React from 'react'

const WeatherDetail = ({ forecast }) => {

    //console.log(forecast[0].temp);
    let curDate = new Date();
    const renderedForecast = forecast.map((hr) =>
        <div className='card' >
            <label>{`Time=${hr.dt} Temp F=${hr.temp} and ${hr.weather[0].main}`}</label>
        </div>);

    return <div>{renderedForecast}</div>
}

export default WeatherDetail;