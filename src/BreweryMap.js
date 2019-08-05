import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';

import logo from './logo.svg';

const AnyReactComponent = ({ text }) => <img src={logo} className="App-logo" alt="logo" />;

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

    const styles = require('./GoogleMapStyles.json');
    
    if(!this.state.load){
        return 'Loading...'
    } else {
        return (
            // Important! Always set the container height explicitly
            
            <div>
            
              <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCUaA8lyLfcAFIULYE0r08tpKvEuh02J0A' }}
                defaultCenter={this.props.defaultCenter}
                center={{ lat: this.state.center_lat, lng: this.state.center_lng }}
                defaultZoom={this.props.zoom}
                defaultOptions={{
                    disableDefaultUI: true, // disable default map UI
                    draggable: true, // make map draggable
                    keyboardShortcuts: false, // disable keyboard shortcuts
                    scaleControl: true, // allow scale controle
                    scrollwheel: true, // allow scroll wheel
                    styles: styles // change default map styles
                  }}
              >
                <AnyReactComponent
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

BreweryMap.propTypes = {
    lat: PropTypes.number,
  };