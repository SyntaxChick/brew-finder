import React, {Component} from 'react';

import BreweryMap from './BreweryMap';

class Brewery extends Component {
    state = {
        brewery: {},
    }

    async componentDidMount() {
        try {
            const res = await fetch(`https://api.openbrewerydb.org/breweries/${this.props.match.params.id}`);
            const brewery = await res.json();

            this.setState({
                brewery,
            });

        } catch (e) {
            console.log(e);
        }
    }

    render () {
        const { brewery } = this.state;
        return (
            <div className="App-wrapper">
                <div className="App-map">
                    <BreweryMap brewery={brewery}></BreweryMap>
                </div>
                <div className="App-list">
                    <h1>{brewery.name}</h1>
                    <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">View Website</a> | {brewery.brewery_type}
                    <p>
                        {brewery.street}<br />
                        {brewery.city}, {brewery.state} {brewery.postal_code}<br />
                    </p>

                    <a href="/" className="button">Find More Brews ></a>
                </div>

            </div>
        );
    }
}


export default Brewery;


