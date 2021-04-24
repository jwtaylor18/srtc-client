import React from 'react'
import weatherService from '../../services/weather/weather-service';
import SearchBar from './SearchBar';
import WeatherDetail from './WeatherDetail';

class WeatherPart extends React.Component {
    constructor(props) {
        super(props)

    }
    
    state = {timezone: '', forecast: [] };

    onSearchChange = async (info) => {
        
        const location = info.split(',');
        const lat = location[0];
        const lon = location[1];

        const response = await weatherService.get('/onecall', {
            params: {
                lat: lat,
                lon: lon
            }
        });

        this.setState({timezone: response.data.timezone, forecast: response.data.hourly});
    }


    render() {
        return (
            <div>
                <SearchBar clubs={this.props.clubs} onSearchChange={this.onSearchChange} />
                <WeatherDetail timezone={this.state.timezone} forecast={this.state.forecast} />
            </div>
        );
    }
}

export default WeatherPart;