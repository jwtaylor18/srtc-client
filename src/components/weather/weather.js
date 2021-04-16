import React from 'react';
import WeatherPart from './WeatherPart'

class App extends React.Component {

    constructor() {
        super();
        this.clubs = [
            {
                name: "Club 1",
                locationName: "Boston, MA",
                lat : 40.441792,
                lon : -94.037689
            },
            {
                name : "Club 2",
                locationName :"Boston, MA",
                lat : 44.441792,
                lon : -94.037689
            } 
        ];

      }

    render() {
        return (
            <div className="container">
                <WeatherPart clubs={this.clubs}/>                
            </div>
        );
    }
}

export default App;