import React from 'react'
import weatherForecast from '../../services/weather/weatherUtil';
import SearchBar from './SearchBar';
import WeatherDetail from './WeatherDetail';

class WeatherPart extends React.Component {
    constructor(props) {
        super(props)

    }
    
    state = {forecast: [] };

    onSearchChange = async (info) => {
        
        const location = info.split(',');
        const lat = location[0];
        const lon = location[1];

        const response = await weatherForecast.get('/onecall', {
            params: {
                lat: lat,
                lon: lon
            }
        });

        this.setState({forecast:response.data.hourly});
        console.log(response.data);
    }


    render() {
        return (
            <div>
                <SearchBar clubs={this.props.clubs} onSearchChange={this.onSearchChange} />
                <WeatherDetail forecast={this.state.forecast} />
            </div>
        );
    }
}

export default WeatherPart;