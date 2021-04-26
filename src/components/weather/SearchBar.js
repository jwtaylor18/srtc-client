import React from 'react'

const SearchBar = ({clubs, onSearchChange}) => {

    function renderOptions() {
        return (
            clubs &&
            clubs.length > 0 &&
            clubs.map((club, index) => {
                return <option key={index} value={`${club.latitude},${club.longitude}`}>{club.facilityName}</option>
            })    
        );
    }

    return (
            <div className="main-content">
                <div className="form-group">
                    <h1>Club Weather Search</h1>
                    <select
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="form-control"
                    >
                        <option key={999} value={`'',''`}>Select a club</option>
                        {renderOptions()}
                    </select>
                </div>
            </div>
        );
}


export default SearchBar;