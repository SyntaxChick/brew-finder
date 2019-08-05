import React, { Component } from 'react';

import DirectoryItem from './DirectoryItem';
import DirectoryMap from './DirectoryMap';

class Directory extends Component {

  state = {
    breweries: [],
  }

  async componentDidMount() {
    try {
      //https://brewerybe-sarah90431.codeanyapp.com/brew-storer/public/api/breweries
      const res = await fetch('https://api.openbrewerydb.org/breweries?by_city=Carlisle&by_state=Pennsylvania');
      const breweries = await res.json();

      this.setState({
        breweries: breweries,
      });

    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
        <div className="App-wrapper">
            <div className="App-map">
                <DirectoryMap breweries={this.state.breweries}></DirectoryMap>
            </div>
            <div className="App-list">      
            
            {this.state.breweries.map(brewery => <DirectoryItem key={brewery.id} brewery={brewery} />)}
       
            </div>
        
        </div>

    );
  }
}

export default Directory;
