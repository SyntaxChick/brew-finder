import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import logo from './logo.svg';


class DirectoryMap extends Component {

  state = {
      center_lat: 40.202,
      center_lng: -77.199,
      load: 0
  }

  static defaultProps = {
    defaultCenter: {
        lat: 40.202,
        lng: -77.199
    },
    zoom: 13
  };

  componentDidUpdate() {
    if(!isNaN(Number(this.props.breweries[0].latitude)) && !this.state.load){
        this.setState({
            load: 1
        });
    } 
  }

  render() {
    
    // We need to wait for the coordinates, otherwise NaN galore.
    if(!this.state.load){
        return 'Loading...'
    } else {
      return (
        <div>       
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCUaA8lyLfcAFIULYE0r08tpKvEuh02J0A' }}
            defaultCenter={this.props.defaultCenter}
            center={{ lat: this.state.center_lat, lng: this.state.center_lng }}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            options={{zoomControl: true}}
          >
          
          {this.props.breweries.map(brewery => 
            <Marker 
                key={brewery.id} 
                lat={Number(brewery.latitude)} 
                lng={Number(brewery.longitude)}
            ></Marker>)}

          </GoogleMapReact>
        </div>
      );
    }
 
  }
}

export default DirectoryMap;

const Marker = () => <a href="/:key"><img src={logo} className="App-logo" alt="logo" /></a>;