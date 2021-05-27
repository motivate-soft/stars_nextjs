import React, { Component } from "react";
import { withGoogleMap, GoogleMap, Circle } from "react-google-maps";
import { Element } from "react-scroll";

const defaultZoom = 11.5;
const defaultCenter = { lat: 37.431489, lng: -122.163719 };
const circle = {
  radius: 5000,
  options: {
    strokeColor: "#0071AA",
  },
};

const GoogleMapsComponent = withGoogleMap((props) => {
  return (
    <GoogleMap
      defaultZoom={defaultZoom}
      defaultCenter={defaultCenter}
      center={props.center}
    >
      {props.center.lat && (
        <Circle
          center={props.center}
          radius={circle.radius}
          options={circle.options}
        />
      )}
    </GoogleMap>
  );
});

class LocationMap extends Component {
  render() {
    const { lat, lng } = this.props;
    const center = {
      lat: lat,
      lng: lng,
    };
    return (
      <Element name="location" className="location-block">
        <h3>Location</h3>
        <div className="animated fadeIn">
          <GoogleMapsComponent
            key="map"
            center={center}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </Element>
    );
  }
}

export default LocationMap;
