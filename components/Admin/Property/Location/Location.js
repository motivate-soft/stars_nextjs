import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  Circle,
} from "react-google-maps";
import LocationSearchAutoComplete from "./LocationSearchAutoComplete";
import LocationWrapper from "./Location.styles";

// const apiKey = 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA'

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // place: {},
      // address: '12 Greene St, Quincy, MA 02170, USA',
      defaultCenter: {
        lat: 42.2677899,
        lng: -71.01325899999999,
      },
      circle: {
        radius: 12000,
        options: {
          strokeColor: "#0071AA",
        },
      },
      zoom: 10.5,
    };
    this.showPlace = this.showPlace.bind(this);
    this.mapRef = React.createRef();
  }

  showPlace(place) {
    this.props.onPlaceChange(place);
  }

  render() {
    const { address, center, onReset } = this.props;

    const GoogleMapsComponent = withGoogleMap((props) => {
      return (
        <GoogleMap
          defaultZoom={this.state.zoom}
          center={center.lat ? center : this.state.defaultCenter}
        >
          {center.lat && <Marker position={center}></Marker>}
          {center.lat && (
            <Circle
              defaultCenter={center}
              radius={this.state.circle.radius}
              options={this.state.circle.options}
            />
          )}
        </GoogleMap>
      );
    });

    return (
      <LocationWrapper>
        <LocationSearchAutoComplete
          address={address}
          onPlaceChanged={this.showPlace}
          onReset={onReset}
        />
        <div className="animated fadeIn">
          <GoogleMapsComponent
            ref={this.mapRef}
            key="map"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
      </LocationWrapper>
    );
  }
}

export default Location;
