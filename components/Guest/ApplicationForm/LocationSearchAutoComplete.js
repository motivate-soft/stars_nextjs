import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import {CloseOutlined} from "@ant-design/icons";
import Input from "@iso/components/uielements/input";
import {FaMapPin} from "react-icons/fa";

class LocationSearchAutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {address: ""};
        // if (typeof window !== 'undefined'){
        //
        // }
        if (process.browser) {
            this.placesService = new window.google.maps.places.PlacesService(
                document.createElement("div")
            );
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
        this.setState({address: nextProps.value});
    }

    handleChange = (address) => {
        this.setState({address});
    };

    handleSelect = (address, placeId) => {
        this.setState({address});

        const request = {
            placeId: placeId,
            fields: [
                "name",
                "geometry",
                "address_components",
                "formatted_address",
                "icon",
                "id",
                "name",
                "place_id",
                "reference",
                "scope",
                "types",
                "url",
                "utc_offset",
                "vicinity",
            ],
        };

        this.placesService.getDetails(request, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                this.props.onChange(place);
                console.log("placesService", place.geometry.location.lat(), place.geometry.location.lng());
            }
        });
    };

    render() {
        const {placeholder, name} = this.props
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                    <div className="autocomplete-container">
                        <div className="place-input-wrapper">
                            <Input
                                {...getInputProps({
                                    placeholder: placeholder ? placeholder : "Search for address...",
                                })}
                            />
                            <CloseOutlined/>
                        </div>
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map((suggestion, index) => {
                                const className = suggestion.active
                                    ? "suggestion-item active"
                                    : "suggestion-item";

                                return (
                                    <div
                                        key={index}
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                        })}
                                    >
                                        <FaMapPin/>
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}

export default LocationSearchAutoComplete;
