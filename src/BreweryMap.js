import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import logo from './logo.svg';


class BreweryMap extends Component {

  state = {
      center_lat: 59,
      center_lng: 20,
      load: 0
  }

  static defaultProps = {
    defaultCenter: {
        lat: 59,
        lng: 42
    },
    zoom: 15
  };

  componentDidUpdate() {
    if(!isNaN(Number(this.props.brewery.latitude)) && !this.state.load){
      this.setState({
        center_lat: Number(this.props.brewery.latitude),
        center_lng: Number(this.props.brewery.longitude),
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
          >
            <Marker
              lat={this.state.center_lat}
              lng={this.state.center_lng}
              text="My Marker"
              />
          </GoogleMapReact>
        </div>
      );
    }

  }
}

export default BreweryMap;

const Marker = () => <img src={logo} className="App-logo" alt="logo" />;