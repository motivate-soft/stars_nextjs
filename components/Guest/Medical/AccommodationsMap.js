import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import homeIcon from '@iso/assets/images/icon/icon_home.svg';

const defaultZoom = 13;
const defaultCenter = { lat: 42.3454769, lng: -71.1078781 };

class MarkerList extends Component {
    render() {
        return (
            <>
                {this.props.locations &&
                this.props.locations.map((location, index) => (
                    <MarkerWithInfoWindow key={index.toString()} location={location} />
                ))}
            </>
        );
    }
}

class MarkerWithInfoWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        const { location } = this.props;
        return (
            <Marker
                icon={{
                    url: homeIcon,
                    fillColor: '#0071AA',
                    anchor: new window.google.maps.Point(13, 42),
                    scaledSize: new window.google.maps.Size(40, 40)
                }}
                onClick={this.toggle}
                position={location}
                title={location.name}
                label={location.name}>
                {this.state.isOpen && (
                    <InfoWindow onCloseClick={this.toggle}>
                        <a href={location.www} target="_blank">
                            {location.title}
                        </a>
                    </InfoWindow>
                )}
            </Marker>
        );
    }
}

const GoogleMapsComponent = withGoogleMap((props) => {
    return (
        <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
            {<MarkerList locations={props.locations && props.locations} />}
        </GoogleMap>
    );
});

class AccommodationsMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: []
        };
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        console.log('UNSAFE_componentWillReceiveProps', nextProps.properties)
        if (nextProps.properties !== this.props.properties) {
            let array = [];
            nextProps.properties.map((item) => {
                array.push({
                    lat: item.lat,
                    lng: item.lng,
                    label: item.slug,
                    draggable: false,
                    title: item.name,
                    www: `/listing/${item.slug}`
                });
            });
            this.setState({
                locations: array
            });
        }
    }

    render() {
        return (
            <div className="animated fadeIn">
                {this.state.locations && this.state.locations.length > 0 && (
                    <GoogleMapsComponent
                        key="locations-map"
                        locations={this.state.locations}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `500px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                )}
            </div>
        );
    }
}

export default AccommodationsMap;
