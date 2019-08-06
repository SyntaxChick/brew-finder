import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import BreweryMap from './BreweryMap';
import DirectoryItem from './DirectoryItem';


class Brewery extends Component {
    state = {
        brewery: {},
    }

    async componentDidMount() {
        try {
            // https://api.openbrewerydb.org/breweries/${this.props.match.params.id}`
            const res = await fetch(`https://brewerybe-sarah90431.codeanyapp.com/brew-storer/public/api/brewery/${this.props.match.params.id}`);
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

                    <DirectoryItem key={brewery.id} brewery={brewery} />

                    <Link to={`/`} className="button">Find More Brews ></Link>
                </div>

            </div>
        );
    
    }
}


export default Brewery;


