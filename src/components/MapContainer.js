import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from 'react';
export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 30.497569,
          lng: 76.603843
        }}
      >
        <Marker
          onClick={this.onMarkerClick}
          draggable={true}
          onDragend={this.moveMarker}
          name={'Current location'}
        />

        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
      </Map>
    );
  }
}

MapContainer = GoogleApiWrapper({
  apiKey: 'AIzaSyBNpdCb7e8KXozLsO--md18U6ltMwnJvgI'
})(MapContainer);
