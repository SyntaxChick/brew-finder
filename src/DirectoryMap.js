import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import logo from './logo.svg';

const Marker = ({ text }) => <a href="/:key"><img src={logo} className="App-logo" alt="logo" /></a>;

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
              >

            
                {this.props.breweries.map(brewery => 
                    <Marker 
                        key={brewery.id} 
                        lat={Number(brewery.latitude)} 
                        lng={Number(brewery.longitude)}
                    ></Marker>)}
       
                <Marker
                  lat={this.state.center_lat}
                  lng={this.state.center_lng}
                  />
              </GoogleMapReact>
            </div>
          );
   }

    
  }
}

export default DirectoryMap;
