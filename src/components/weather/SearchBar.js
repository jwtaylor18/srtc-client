import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props)

    }

    onSearchChange= (event, club) => {
        event.preventDefault();

        this.props.onSearchChange(event.target.value);
    }

    renderOptions() {
        const { clubs } = this.props;
        return (
            clubs &&
            clubs.length > 0 &&
            clubs.map((club, index) => {
                // return <option value={`${club.lat},${club.lon}`}>{club.name}</option>;
                return <option value={`${club.latitude},${club.longitude}`}>{club.facilityName}</option>;
            })
        );
    }

    render() {

        return (
            <div>

                <div className="form-group">
                    <label htmlFor="ddlSearch">Club Weather Search</label>

                    <select
                        onChange={this.onSearchChange}
                        id="ddlSearch"
                        className="form-control"
                    >
                        {this.renderOptions()}
                    </select>
                </div>
            </div>
        );
    }
}

export default SearchBar;