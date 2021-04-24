import axios from 'axios';

const KEY = "d6b7df3332907fff6f54bf7f33c8e76b";

export default axios.create ({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    params: {
        exclude: 'current,minutely,daily',
        units: 'imperial',
        appid: KEY
    }


});