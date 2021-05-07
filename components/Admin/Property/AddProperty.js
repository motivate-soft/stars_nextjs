import React from "react";
import Link from "next/link";
import LayoutWrapper from "@iso/components/utility/layoutWrapper";
import Tabs, { TabPane } from "@iso/components/uielements/tabs";
import Editor from "@iso/components/uielements/editor";
import Location from "@components/Admin/Property/Location/Location";
import basicStyle from "@iso/assets/styles/constants";
import { notification, Row, Col, Button } from "antd";
import arrayMove from "array-move";
import Setting from "@components/Admin/Property/Setting/Setting";
import Main from "@components/Admin/Property/Main/Main";
import Amenity from "@components/Admin/Property/Amenity/Amenity";
import Rooms from "@components/Admin/Property/Room/Rooms";
import SimilarProperty from "@components/Admin/Property/SimilarProperty/SimilarProperty";
import { useDispatch } from "react-redux";
import propertyActions from "@redux/properties/actions";
import { SinglePropertyWrapper } from "@components/Admin/Property/PropertyList.styles";
import FeaturedImageManager from "@components/Admin/Property/FeaturedImageManager/FeaturedImageManager";
import GalleryManager from "@components/Admin/Property/GalleryManager/GalleryManager";

const newProperty = {
  name: "",
  category: "",
  bookervilleId: "",
  description: "",
  neighbourhood: "",
  transit: "",
  address: "",
  lat: "",
  lng: "",
  rooms: [],
  amenities: [],
  galleryImgs: [],
  featuredImg: null,
  similarProperties: [],

  price: "",
  minPrice: "",
  minMonthPrice: "",
  bathroomCount: "",
  bedroomCount: "",
  sleeps: "",
  minSleeps: 2,
  cleaningFee: "",
  transactionFeeRate: "",
  taxRate: "",
  tour360: "",
  refundableAmount: "",
  furnished: true,
  rentalParking: true,
  petsConsidered: true,
};

export default function AddProperty() {
  const [state, setState] = React.useState(newProperty);

  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("state", state);
  }, [state]);

  function callback(key) {
    console.log(key);
  }

  function handleSave() {
    let errors = [];
    Object.keys(newProperty).map((key) => {
      if (state[key] === "" || state[key] === null || state[key] === []) {
        errors.push(`${key} is required`);
      }
    });

    if (errors.length > 0) {
      const msg = errors.reduce((msg, error) => msg + "\n" + error);
      notification.warning({
        message: "Please fill all the required fields",
        description: msg,
        style: {
          width: 400,
          whiteSpace: `pre-line`,
        },
      });
      return;
    }

    const property = {
      bookerville_id: state.bookervilleId,
      name: state.name,
      category: state.category,
      address: state.address,
      lat: state.lat,
      lng: state.lng,
      description: state.description,
      neighbourhood: state.neighbourhood,
      transit: state.transit,
      price: state.price,
      min_price: state.minPrice,
      min_month_price: state.minMonthPrice,
      bedroom_count: state.bedroomCount,
      bathroom_count: state.bathroomCount,
      similar_properties: state.similarProperties,
      sleeps: state.sleeps,
      min_sleeps: state.minSleeps,
      cleaning_fee: state.cleaningFee,
      transactionfee_rate: state.transactionFeeRate,
      tax_rate: state.taxRate,
      refundable_amount: state.refundableAmount,
      tour360: state.tour360,
      furnished: state.furnished,
      rental_parking: state.rentalParking,
      pets_considered: state.petsConsidered,
      property_rooms: state.rooms.map((room) => ({
        name: room.name,
        bed_type: room.bedType,
      })),
      amenities: state.amenities,
      featured_img: state.featuredImg?.id,
      gallery_imgs: state.galleryImgs.map((image) => image.id),
    };
    dispatch(propertyActions.addProperty(property));
  }

  function handleReset() {
    setState({ newProperty });
  }

  const editorOption = {
    style: { width: "90%", height: "70%" },
    toolbarClassName: "home-toolbar",
    wrapperClassName: "home-wrapper",
    editorClassName: "home-editor",
    // onEditorStateChange: onEditorStateChange,
    // uploadCallback: uploadCallback,
    // toolbar: {image: {uploadCallback: uploadCallback}},
  };

  function handlePlaceChange(place) {
    setState({
      ...state,
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
  }

  function handlePlaceReset() {
    setState({
      ...state,
      address: "",
      lat: "",
      lng: "",
    });
  }

  function handleSettingChange(changedValues, allValues) {
    console.log("handleSettingChange", changedValues, allValues);
    setState({
      ...state,
      ...allValues,
    });
  }

  function handleMainInfoChange(changedValues, allValues) {
    console.log("handleMainInfoChange", changedValues, allValues);
    setState({
      ...state,
      ...allValues,
    });
  }

  // function handleAmenityChange(changedValues, allValues) {
  //     console.log("handleAmenityChange", changedValues, allValues);
  //     const array = [];
  //     Object.keys(allValues).map((key) => {
  //         if (allValues[key]) {
  //             array.push(key);
  //         }
  //     });
  //     setState({
  //         ...state,
  //         amenities: array,
  //     });
  // }

  function handleToggleAmenityOption(amenityId) {
    console.log("amenityId", state.amenities, amenityId);
    let array = state.amenities;
    let index = array.indexOf(amenityId);
    if (index > -1) {
      array.splice(index, 1);
      setState({
        ...state,
        amenities: array,
      });
    } else {
      array.push(amenityId);
      setState({
        ...state,
        amenities: array,
      });
    }
    console.log("handleToggleAmenityOption", array, state);
  }

  function handleChangeRoom(values, id) {
    const newRooms = state.rooms.map((room, index) => {
      if (room.id === id) {
        return {
          ...room,
          ...values,
        };
      }
      return room;
    });
    console.log("handleChangeRoom", newRooms);
    setState({ ...state, rooms: newRooms });
  }

  function handleAddRoom() {
    const generatedId = new Date().getTime();
    console.log("array", array, generatedId);
    let array = state.rooms;
    array.push({
      id: generatedId,
      name: "",
      bedType: "Q",
    });
    console.log("handleAddRoom", array);
    setState({
      ...state,
      rooms: array,
    });
  }

  function handleRemoveRoom(roomId) {
    console.log("handleRemoveRoom", roomId);

    setState({
      ...state,
      rooms: state.rooms.filter((room) => room.id !== roomId),
    });
  }

  function handleUploadSuccess(image) {
    const { galleryImgs } = state;
    galleryImgs.push({
      ...image,
      order: galleryImgs.length - 1,
    });
    setState({ ...state, galleryImgs });
  }

  function handleDeleteSuccess(imageId) {
    const { galleryImgs } = state;
    setState({
      ...state,
      galleryImgs: galleryImgs.filter((item) => item.id !== imageId),
    });
  }

  function handleSortEnd({ oldIndex, newIndex }) {
    const newArray = arrayMove(state.galleryImgs, oldIndex, newIndex);
    setState({
      ...state,
      galleryImgs: newArray.map((image, index) => ({
        ...image,
        order: index + 1,
      })),
    });
  }

  function handleSelectFeatured(image) {
    setState({ ...state, featuredImg: image });
  }

  function handleSimilarPropertyChange(propertyIds) {
    setState({ ...state, similarProperties: propertyIds });
  }

  const { rowStyle, colStyle } = basicStyle;

  return (
    <LayoutWrapper>
      <SinglePropertyWrapper>
        <div className="property-detail-actions">
          <Button
            type="primary"
            onClick={handleSave}
            style={{ marginRight: 20 }}
          >
            Save
          </Button>
          <Button type="default" onClick={handleReset}>
            Reset
          </Button>
          <Link href="/admin/property">
            <Button type="primary">Back to List</Button>
          </Link>
        </div>

        <Row style={rowStyle} gutter={0} justify="start">
          <Col lg={8} md={12} sm={24} xs={24} style={colStyle}>
            <div className="property-detail-main">
              <Main
                name={state.name}
                bookervilleId={state.bookervilleId}
                category={state.category}
                onValuesChange={handleMainInfoChange}
              />
              <GalleryManager
                items={state.galleryImgs}
                onSortEnd={handleSortEnd}
                onUploadSuccess={handleUploadSuccess}
                onDeleteSucess={handleDeleteSuccess}
              />
              <FeaturedImageManager
                items={state.galleryImgs}
                selectedItem={state.featuredImg}
                onUploadSuccess={handleUploadSuccess}
                onDeleteSucess={handleDeleteSuccess}
                onSelect={handleSelectFeatured}
              />
            </div>
          </Col>
          <Col lg={16} md={12} sm={24} xs={24} style={colStyle}>
            <Tabs
              defaultActiveKey="1"
              onChange={callback}
              className="property-detail-tab"
            >
              {["description", "neighbourhood", "transit"].map((item) => (
                <TabPane
                  tab={item.charAt(0).toUpperCase() + item.slice(1)}
                  key={item}
                >
                  <Editor
                    {...editorOption}
                    onEditorStateChange={(html) =>
                      setState({ ...state, [item]: html })
                    }
                  />
                </TabPane>
              ))}
              <TabPane tab="Location" key="location">
                <Location
                  address={state.address}
                  center={{
                    lat: state.lat,
                    lng: state.lng,
                  }}
                  onPlaceChange={handlePlaceChange}
                  onReset={handlePlaceReset}
                />
              </TabPane>
              <TabPane tab="Setting" key="setting">
                <Setting setting={state} onValuesChange={handleSettingChange} />
              </TabPane>
              <TabPane tab="Amenity" key="amenity">
                <Amenity
                  amenities={state.amenities}
                  onToggleOption={handleToggleAmenityOption}
                />
              </TabPane>
              <TabPane tab="Bedtype" key="rooms">
                <Rooms
                  rooms={state.rooms}
                  onRoomChange={handleChangeRoom}
                  onAddRoom={handleAddRoom}
                  onRemoveRoom={handleRemoveRoom}
                  onValuesChange={handleSettingChange}
                />
              </TabPane>
              <TabPane tab="Similar Properties" key="similar">
                <SimilarProperty
                  selectedItems={state.similarProperties}
                  onRowSelection={handleSimilarPropertyChange}
                />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
      </SinglePropertyWrapper>
    </LayoutWrapper>
  );
}
