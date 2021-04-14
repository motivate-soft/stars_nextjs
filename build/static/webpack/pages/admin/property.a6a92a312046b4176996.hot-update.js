webpackHotUpdate_N_E("pages/admin/property",{

/***/ "./components/Admin/Property/EditProperty.js":
/*!***************************************************!*\
  !*** ./components/Admin/Property/EditProperty.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditProperty; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/components/utility/layoutWrapper */ "./shared/components/utility/layoutWrapper.js");
/* harmony import */ var _iso_components_utility_box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/components/utility/box */ "./shared/components/utility/box.js");
/* harmony import */ var _iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/components/uielements/tabs */ "./shared/components/uielements/tabs.js");
/* harmony import */ var _components_Admin_Property_Location_Location__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Admin/Property/Location/Location */ "./components/Admin/Property/Location/Location.js");
/* harmony import */ var _iso_assets_styles_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iso/assets/styles/constants */ "./shared/assets/styles/constants.js");
/* harmony import */ var _components_Admin_Property_Setting_Setting__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/Admin/Property/Setting/Setting */ "./components/Admin/Property/Setting/Setting.js");
/* harmony import */ var _components_Admin_Property_Main_Main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/Admin/Property/Main/Main */ "./components/Admin/Property/Main/Main.js");
/* harmony import */ var _components_Admin_Property_Amenity_Amenity__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/Admin/Property/Amenity/Amenity */ "./components/Admin/Property/Amenity/Amenity.js");
/* harmony import */ var _components_Admin_Property_Room_Rooms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/Admin/Property/Room/Rooms */ "./components/Admin/Property/Room/Rooms.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! array-move */ "./node_modules/array-move/index.js");
/* harmony import */ var array_move__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(array_move__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_Admin_Property_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/Admin/Property/Gallery/Gallery */ "./components/Admin/Property/Gallery/Gallery.js");
/* harmony import */ var _components_Admin_Property_Editor_Editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/Admin/Property/Editor/Editor */ "./components/Admin/Property/Editor/Editor.js");
/* harmony import */ var _components_Admin_Property_FeaturedImage_FeaturedImage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/Admin/Property/FeaturedImage/FeaturedImage */ "./components/Admin/Property/FeaturedImage/FeaturedImage.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_properties_actions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @redux/properties/actions */ "./redux/properties/actions.js");
/* harmony import */ var _components_Admin_Property_PricingCalendar_PricingCalendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @components/Admin/Property/PricingCalendar/PricingCalendar */ "./components/Admin/Property/PricingCalendar/PricingCalendar.js");
/* harmony import */ var _components_Admin_Property_SimilarProperty_SimilarProperty__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @components/Admin/Property/SimilarProperty/SimilarProperty */ "./components/Admin/Property/SimilarProperty/SimilarProperty.js");







var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\components\\Admin\\Property\\EditProperty.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




















function uploadCallback(file) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID 8d26ccd12712fca");
    var data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", function () {
      var response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", function () {
      var error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

var newProperty = {
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
  petsConsidered: true
};
function EditProperty(props) {
  _s();

  var _this = this;

  var propertyId = props.propertyId;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_6___default.a.useState(newProperty),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_20__["useSelector"])(function (state) {
    return state.Properties;
  }),
      selectedItem = _useSelector.selectedItem;

  var editorOption = {
    style: {
      width: "90%",
      height: "70%"
    },
    toolbarClassName: "home-toolbar",
    wrapperClassName: "home-wrapper",
    editorClassName: "home-editor",
    uploadCallback: uploadCallback,
    toolbar: {
      image: {
        uploadCallback: uploadCallback
      }
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    dispatch(_redux_properties_actions__WEBPACK_IMPORTED_MODULE_21__["default"].getProperty(propertyId));
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    if ("".concat(selectedItem.id) === "".concat(propertyId)) {
      setState({
        id: selectedItem.id,
        bookervilleId: selectedItem.bookerville_id,
        name: selectedItem.name,
        category: "".concat(selectedItem.category),
        address: selectedItem.address,
        lat: selectedItem.lat,
        lng: selectedItem.lng,
        description: selectedItem.description,
        neighbourhood: selectedItem.neighbourhood,
        transit: selectedItem.transit,
        price: selectedItem.price,
        minPrice: selectedItem.min_price,
        minMonthPrice: selectedItem.min_month_price,
        bedroomCount: selectedItem.bedroom_count,
        bathroomCount: selectedItem.bathroom_count,
        similarProperties: selectedItem.similar_properties,
        sleeps: selectedItem.sleeps,
        minSleeps: selectedItem.min_sleeps,
        cleaningFee: selectedItem.cleaning_fee,
        transactionFeeRate: selectedItem.transactionfee_rate,
        taxRate: selectedItem.tax_rate,
        refundableAmount: selectedItem.refundable_amount,
        tour360: selectedItem.tour360,
        furnished: renderOptionValue(selectedItem.furnished),
        rentalParking: renderOptionValue(selectedItem.rental_parking),
        petsConsidered: renderOptionValue(selectedItem.pets_considered),
        rooms: selectedItem.property_rooms.map(function (room) {
          return {
            id: room.id,
            name: room.name,
            bedType: room.bed_type
          };
        }),
        amenities: selectedItem.amenities,
        featuredImg: selectedItem.featured_img,
        galleryImgs: selectedItem.gallery_imgs
      });
    }
  }, [selectedItem]);
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    console.log("state", state);
  }, [state]);

  function callback(key) {
    console.log(key);
  }

  function handleSave() {
    var property = {
      id: selectedItem.id,
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
      property_rooms: makeRoomsArray(),
      amenities: state.amenities,
      featured_img: state.featuredImg.id,
      gallery_imgs: state.galleryImgs.map(function (image) {
        return image.id;
      }),
      images: state.images
    };
    dispatch(_redux_properties_actions__WEBPACK_IMPORTED_MODULE_21__["default"].updateProperty(property));
  }

  function handleReset() {
    setState(_objectSpread(_objectSpread({}, state), newProperty));
  }

  function renderOptionValue(value) {
    if (value === true) {
      return "1";
    }

    return "0";
  }

  function makeRoomsArray() {
    var array = state.rooms.map(function (room) {
      return room.id > 10000 ? {
        name: room.name ? room.name : "",
        bed_type: room.bedType ? room.bedType : ""
      } : {
        id: room.id,
        name: room.name ? room.name : "",
        bed_type: room.bedType ? room.bedType : ""
      };
    });
    return array;
  }

  function handlePlaceChange(place) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    }));
  }

  function handlePlaceReset() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      address: "",
      lat: "",
      lng: ""
    }));
  }

  function handleSettingChange(changedValues, allValues) {
    console.log("handleSettingChange", changedValues, allValues);
    setState(_objectSpread(_objectSpread({}, state), allValues));
  }

  function handleMainInfoChange(changedValues, allValues) {
    console.log("handleMainInfoChange", changedValues, allValues);
    setState(_objectSpread(_objectSpread({}, state), allValues));
  }

  function handleToggleAmenityOption(amenityId) {
    console.log("amenityId", state.amenities, amenityId);
    var array = state.amenities;
    var index = array.indexOf(amenityId);

    if (index > -1) {
      array.splice(index, 1);
      setState(_objectSpread(_objectSpread({}, state), {}, {
        amenities: array
      }));
    } else {
      array.push(amenityId);
      setState(_objectSpread(_objectSpread({}, state), {}, {
        amenities: array
      }));
    }

    console.log("handleToggleAmenityOption", array, state);
  }

  function handleChangeRoom(values, id) {
    var newRooms = state.rooms.map(function (room, index) {
      if (room.id === id) {
        return _objectSpread(_objectSpread({}, room), values);
      }

      return room;
    });
    console.log("handleChangeRoom", newRooms);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      rooms: newRooms
    }));
  }

  function handleAddRoom() {
    var generatedId = new Date().getTime();
    console.log("array", array, generatedId);
    var array = state.rooms;
    array.push({
      id: generatedId,
      name: "",
      bedType: "Q"
    });
    console.log("handleAddRoom", array);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      rooms: array
    }));
  }

  function handleRemoveRoom(roomId) {
    console.log("handleRemoveRoom", roomId);
    var array = state.rooms;
    var index = array.findIndex(function (item) {
      return item.id === roomId;
    });

    if (index > -1) {
      array[index].name = "";
      array[index].bedType = "";
      setState(_objectSpread(_objectSpread({}, state), {}, {
        rooms: array
      }));
    }
  }

  function handleUploadSuccess(image) {
    var galleryImgs = state.galleryImgs;
    galleryImgs.push(image);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      galleryImgs: galleryImgs
    }));
  }

  function handleSortEnd(_ref) {
    var oldIndex = _ref.oldIndex,
        newIndex = _ref.newIndex;
    var newArray = array_move__WEBPACK_IMPORTED_MODULE_16___default()(state.galleryImgs, oldIndex, newIndex);
    setState(_objectSpread(_objectSpread({}, state), {}, {
      galleryImgs: newArray
    }));
  }

  function handleSelectFeatured(image) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      featuredImg: image
    }));
  }

  function handleSimilarPropertyChange(propertyIds) {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      similarProperties: propertyIds
    }));
  }

  var rowStyle = _iso_assets_styles_constants__WEBPACK_IMPORTED_MODULE_11__["default"].rowStyle,
      colStyle = _iso_assets_styles_constants__WEBPACK_IMPORTED_MODULE_11__["default"].colStyle;
  return __jsx(_iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 9
    }
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333,
      columnNumber: 13
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    sm: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      width: '100%',
      margin: "0 20px",
      background: "#fff",
      padding: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 21
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    onClick: handleSave,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 25
    }
  }, "Save"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "default",
    onClick: handleReset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 25
    }
  }, "Reset")))), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 13
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
      columnNumber: 17
    }
  }, __jsx("div", {
    style: {
      margin: "0 20px",
      background: "#fff",
      padding: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 21
    }
  }, state.name !== "" && __jsx(_components_Admin_Property_Main_Main__WEBPACK_IMPORTED_MODULE_13__["default"], {
    name: state.name,
    bookervilleId: state.bookervilleId,
    category: state.category,
    onValuesChange: handleMainInfoChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350,
      columnNumber: 29
    }
  }), __jsx(_components_Admin_Property_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_17__["default"], {
    items: state.galleryImgs,
    onSortEnd: handleSortEnd,
    onUploadSuccess: handleUploadSuccess,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358,
      columnNumber: 25
    }
  }), __jsx(_components_Admin_Property_FeaturedImage_FeaturedImage__WEBPACK_IMPORTED_MODULE_19__["default"], {
    items: state.galleryImgs,
    selectedItem: state.featuredImg,
    onUploadSuccess: handleUploadSuccess,
    onSelectImage: handleSelectFeatured,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 363,
      columnNumber: 25
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default.a, {
    lg: 16,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371,
      columnNumber: 17
    }
  }, __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["default"], {
    defaultActiveKey: "1",
    onChange: callback,
    style: {
      margin: "0 20px",
      background: "#fff",
      padding: 20
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372,
      columnNumber: 21
    }
  }, ["description", "neighbourhood", "transit"].map(function (item) {
    return __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
      tab: item.charAt(0).toUpperCase() + item.slice(1),
      key: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 29
      }
    }, (state === null || state === void 0 ? void 0 : state[item]) && __jsx(_components_Admin_Property_Editor_Editor__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, editorOption, {
      html: state[item],
      onEditorStateChange: function onEditorStateChange(html) {
        return setState(_objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, item, html)));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 37
      }
    })));
  }), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Location",
    key: "location",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Location_Location__WEBPACK_IMPORTED_MODULE_10__["default"], {
    address: state.address,
    center: {
      lat: state.lat,
      lng: state.lng
    },
    onPlaceChange: handlePlaceChange,
    onReset: handlePlaceReset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Setting",
    key: "setting",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Setting_Setting__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setting: state,
    onValuesChange: handleSettingChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Amenity",
    key: "amenity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Amenity_Amenity__WEBPACK_IMPORTED_MODULE_14__["default"], {
    amenities: state.amenities,
    onToggleOption: handleToggleAmenityOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Bedtype",
    key: "rooms",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Room_Rooms__WEBPACK_IMPORTED_MODULE_15__["default"], {
    rooms: state.rooms,
    onRoomChange: handleChangeRoom,
    onAddRoom: handleAddRoom,
    onRemoveRoom: handleRemoveRoom,
    onValuesChange: handleSettingChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Pricing",
    key: "pricing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_PricingCalendar_PricingCalendar__WEBPACK_IMPORTED_MODULE_22__["default"], {
    propertyId: propertyId,
    defaultPrice: state.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Similar Properties",
    key: "similar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_SimilarProperty_SimilarProperty__WEBPACK_IMPORTED_MODULE_23__["default"], {
    selectedItems: state.similarProperties,
    onRowSelection: handleSimilarPropertyChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 29
    }
  }))))));
}

_s(EditProperty, "m/eDIxjuexhb3jcWx14g6FZLIqQ=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_20__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_20__["useSelector"]];
});

_c = EditProperty;

var _c;

$RefreshReg$(_c, "EditProperty");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9FZGl0UHJvcGVydHkuanMiXSwibmFtZXMiOlsidXBsb2FkQ2FsbGJhY2siLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImVycm9yIiwibmV3UHJvcGVydHkiLCJuYW1lIiwiY2F0ZWdvcnkiLCJib29rZXJ2aWxsZUlkIiwiZGVzY3JpcHRpb24iLCJuZWlnaGJvdXJob29kIiwidHJhbnNpdCIsImFkZHJlc3MiLCJsYXQiLCJsbmciLCJyb29tcyIsImFtZW5pdGllcyIsImdhbGxlcnlJbWdzIiwiZmVhdHVyZWRJbWciLCJzaW1pbGFyUHJvcGVydGllcyIsInByaWNlIiwibWluUHJpY2UiLCJtaW5Nb250aFByaWNlIiwiYmF0aHJvb21Db3VudCIsImJlZHJvb21Db3VudCIsInNsZWVwcyIsIm1pblNsZWVwcyIsImNsZWFuaW5nRmVlIiwidHJhbnNhY3Rpb25GZWVSYXRlIiwidGF4UmF0ZSIsInRvdXIzNjAiLCJyZWZ1bmRhYmxlQW1vdW50IiwiZnVybmlzaGVkIiwicmVudGFsUGFya2luZyIsInBldHNDb25zaWRlcmVkIiwiRWRpdFByb3BlcnR5IiwicHJvcHMiLCJwcm9wZXJ0eUlkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJQcm9wZXJ0aWVzIiwic2VsZWN0ZWRJdGVtIiwiZWRpdG9yT3B0aW9uIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRvb2xiYXJDbGFzc05hbWUiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwiZWRpdG9yQ2xhc3NOYW1lIiwidG9vbGJhciIsImltYWdlIiwidXNlRWZmZWN0IiwicHJvcGVydHlBY3Rpb25zIiwiZ2V0UHJvcGVydHkiLCJpZCIsImJvb2tlcnZpbGxlX2lkIiwibWluX3ByaWNlIiwibWluX21vbnRoX3ByaWNlIiwiYmVkcm9vbV9jb3VudCIsImJhdGhyb29tX2NvdW50Iiwic2ltaWxhcl9wcm9wZXJ0aWVzIiwibWluX3NsZWVwcyIsImNsZWFuaW5nX2ZlZSIsInRyYW5zYWN0aW9uZmVlX3JhdGUiLCJ0YXhfcmF0ZSIsInJlZnVuZGFibGVfYW1vdW50IiwicmVuZGVyT3B0aW9uVmFsdWUiLCJyZW50YWxfcGFya2luZyIsInBldHNfY29uc2lkZXJlZCIsInByb3BlcnR5X3Jvb21zIiwibWFwIiwicm9vbSIsImJlZFR5cGUiLCJiZWRfdHlwZSIsImZlYXR1cmVkX2ltZyIsImdhbGxlcnlfaW1ncyIsImNvbnNvbGUiLCJsb2ciLCJjYWxsYmFjayIsImtleSIsImhhbmRsZVNhdmUiLCJwcm9wZXJ0eSIsIm1ha2VSb29tc0FycmF5IiwiaW1hZ2VzIiwidXBkYXRlUHJvcGVydHkiLCJoYW5kbGVSZXNldCIsInZhbHVlIiwiYXJyYXkiLCJoYW5kbGVQbGFjZUNoYW5nZSIsInBsYWNlIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwiaGFuZGxlUGxhY2VSZXNldCIsImhhbmRsZVNldHRpbmdDaGFuZ2UiLCJjaGFuZ2VkVmFsdWVzIiwiYWxsVmFsdWVzIiwiaGFuZGxlTWFpbkluZm9DaGFuZ2UiLCJoYW5kbGVUb2dnbGVBbWVuaXR5T3B0aW9uIiwiYW1lbml0eUlkIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImhhbmRsZUNoYW5nZVJvb20iLCJ2YWx1ZXMiLCJuZXdSb29tcyIsImhhbmRsZUFkZFJvb20iLCJnZW5lcmF0ZWRJZCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlUmVtb3ZlUm9vbSIsInJvb21JZCIsImZpbmRJbmRleCIsIml0ZW0iLCJoYW5kbGVVcGxvYWRTdWNjZXNzIiwiaGFuZGxlU29ydEVuZCIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJuZXdBcnJheSIsImFycmF5TW92ZSIsImhhbmRsZVNlbGVjdEZlYXR1cmVkIiwiaGFuZGxlU2ltaWxhclByb3BlcnR5Q2hhbmdlIiwicHJvcGVydHlJZHMiLCJyb3dTdHlsZSIsImJhc2ljU3R5bGUiLCJjb2xTdHlsZSIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUMxQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsUUFBTUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUNBRCxPQUFHLENBQUNFLElBQUosQ0FBUyxNQUFULEVBQWlCLCtCQUFqQjtBQUNBRixPQUFHLENBQUNHLGdCQUFKLENBQXFCLGVBQXJCLEVBQXNDLDJCQUF0QztBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsUUFBSSxDQUFDRSxNQUFMLENBQVksT0FBWixFQUFxQlYsSUFBckI7QUFDQUksT0FBRyxDQUFDTyxJQUFKLENBQVNILElBQVQ7QUFDQUosT0FBRyxDQUFDUSxnQkFBSixDQUFxQixNQUFyQixFQUE2QixZQUFNO0FBQy9CLFVBQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdYLEdBQUcsQ0FBQ1ksWUFBZixDQUFqQjtBQUNBZCxhQUFPLENBQUNXLFFBQUQsQ0FBUDtBQUNI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QkFBYyxFQUFFakIsbUJBTHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQXpDSixFQWtESSxNQUFDLHVFQUFEO0FBQVMsT0FBRyxFQUFDLFNBQWI7QUFBdUIsT0FBRyxFQUFDLFNBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1HQUFEO0FBQ0ksY0FBVSxFQUFFOUQsVUFEaEI7QUFFSSxnQkFBWSxFQUFFRyxLQUFLLENBQUNwQixLQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FsREosRUF3REksTUFBQyx1RUFBRDtBQUFTLE9BQUcsRUFBQyxvQkFBYjtBQUFrQyxPQUFHLEVBQUMsU0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbUdBQUQ7QUFDSSxpQkFBYSxFQUFFb0IsS0FBSyxDQUFDckIsaUJBRHpCO0FBRUksa0JBQWMsRUFBRTRHLDJCQUZwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0F4REosQ0FESixDQXpCSixDQWRKLENBREo7QUE0R0g7O0dBOVd1QjVGLFk7VUFJSFEsd0QsRUFDTUMsd0Q7OztLQUxIVCxZIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Byb3BlcnR5LmE2YTkyYTMxMjA0NmI0MTc2OTk2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0V3JhcHBlciBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvbGF5b3V0V3JhcHBlclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9ib3hcIjtcclxuaW1wb3J0IFRhYnMsIHtUYWJQYW5lfSBmcm9tIFwiQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvdGFic1wiO1xyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L0xvY2F0aW9uL0xvY2F0aW9uXCI7XHJcbmltcG9ydCBiYXNpY1N0eWxlIGZyb20gXCJAaXNvL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7Um93LCBDb2wsIEJ1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFNldHRpbmcgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L1NldHRpbmcvU2V0dGluZ1wiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvTWFpbi9NYWluXCI7XHJcbmltcG9ydCBBbWVuaXR5IGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9BbWVuaXR5L0FtZW5pdHlcIjtcclxuaW1wb3J0IFJvb21zIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9Sb29tL1Jvb21zXCI7XHJcbmltcG9ydCBhcnJheU1vdmUgZnJvbSBcImFycmF5LW1vdmVcIjtcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L0dhbGxlcnkvR2FsbGVyeVwiO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9FZGl0b3IvRWRpdG9yXCI7XHJcbmltcG9ydCBGZWF0dXJlZEltYWdlIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9GZWF0dXJlZEltYWdlL0ZlYXR1cmVkSW1hZ2VcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgcHJvcGVydHlBY3Rpb25zIGZyb20gXCJAcmVkdXgvcHJvcGVydGllcy9hY3Rpb25zXCI7XHJcbmltcG9ydCBQcmljaW5nQ2FsZW5kYXIgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L1ByaWNpbmdDYWxlbmRhci9QcmljaW5nQ2FsZW5kYXJcIjtcclxuaW1wb3J0IFNpbWlsYXJQcm9wZXJ0eSBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvU2ltaWxhclByb3BlcnR5L1NpbWlsYXJQcm9wZXJ0eVwiO1xyXG5cclxuZnVuY3Rpb24gdXBsb2FkQ2FsbGJhY2soZmlsZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwczovL2FwaS5pbWd1ci5jb20vMy9pbWFnZVwiKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJDbGllbnQtSUQgOGQyNmNjZDEyNzEyZmNhXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcImltYWdlXCIsIGZpbGUpO1xyXG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBuZXdQcm9wZXJ0eSA9IHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBjYXRlZ29yeTogXCJcIixcclxuICAgIGJvb2tlcnZpbGxlSWQ6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIG5laWdoYm91cmhvb2Q6IFwiXCIsXHJcbiAgICB0cmFuc2l0OiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICAgIGxhdDogXCJcIixcclxuICAgIGxuZzogXCJcIixcclxuICAgIHJvb21zOiBbXSxcclxuICAgIGFtZW5pdGllczogW10sXHJcbiAgICBnYWxsZXJ5SW1nczogW10sXHJcbiAgICBmZWF0dXJlZEltZzogbnVsbCxcclxuICAgIHNpbWlsYXJQcm9wZXJ0aWVzOiBbXSxcclxuXHJcbiAgICBwcmljZTogXCJcIixcclxuICAgIG1pblByaWNlOiBcIlwiLFxyXG4gICAgbWluTW9udGhQcmljZTogXCJcIixcclxuICAgIGJhdGhyb29tQ291bnQ6IFwiXCIsXHJcbiAgICBiZWRyb29tQ291bnQ6IFwiXCIsXHJcbiAgICBzbGVlcHM6IFwiXCIsXHJcbiAgICBtaW5TbGVlcHM6IDIsXHJcbiAgICBjbGVhbmluZ0ZlZTogXCJcIixcclxuICAgIHRyYW5zYWN0aW9uRmVlUmF0ZTogXCJcIixcclxuICAgIHRheFJhdGU6IFwiXCIsXHJcbiAgICB0b3VyMzYwOiBcIlwiLFxyXG4gICAgcmVmdW5kYWJsZUFtb3VudDogXCJcIixcclxuICAgIGZ1cm5pc2hlZDogdHJ1ZSxcclxuICAgIHJlbnRhbFBhcmtpbmc6IHRydWUsXHJcbiAgICBwZXRzQ29uc2lkZXJlZDogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRQcm9wZXJ0eShwcm9wcykge1xyXG4gICAgY29uc3Qge3Byb3BlcnR5SWR9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKG5ld1Byb3BlcnR5KTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7c2VsZWN0ZWRJdGVtfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuUHJvcGVydGllcyk7XHJcbiAgICBjb25zdCBlZGl0b3JPcHRpb24gPSB7XHJcbiAgICAgICAgc3R5bGU6IHt3aWR0aDogXCI5MCVcIiwgaGVpZ2h0OiBcIjcwJVwifSxcclxuICAgICAgICB0b29sYmFyQ2xhc3NOYW1lOiBcImhvbWUtdG9vbGJhclwiLFxyXG4gICAgICAgIHdyYXBwZXJDbGFzc05hbWU6IFwiaG9tZS13cmFwcGVyXCIsXHJcbiAgICAgICAgZWRpdG9yQ2xhc3NOYW1lOiBcImhvbWUtZWRpdG9yXCIsXHJcbiAgICAgICAgdXBsb2FkQ2FsbGJhY2s6IHVwbG9hZENhbGxiYWNrLFxyXG4gICAgICAgIHRvb2xiYXI6IHtpbWFnZToge3VwbG9hZENhbGxiYWNrOiB1cGxvYWRDYWxsYmFja319LFxyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHByb3BlcnR5QWN0aW9ucy5nZXRQcm9wZXJ0eShwcm9wZXJ0eUlkKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoYCR7c2VsZWN0ZWRJdGVtLmlkfWAgPT09IGAke3Byb3BlcnR5SWR9YCkge1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBpZDogc2VsZWN0ZWRJdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgYm9va2VydmlsbGVJZDogc2VsZWN0ZWRJdGVtLmJvb2tlcnZpbGxlX2lkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogc2VsZWN0ZWRJdGVtLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogYCR7c2VsZWN0ZWRJdGVtLmNhdGVnb3J5fWAsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZEl0ZW0uYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGxhdDogc2VsZWN0ZWRJdGVtLmxhdCxcclxuICAgICAgICAgICAgICAgIGxuZzogc2VsZWN0ZWRJdGVtLmxuZyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZEl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXJob29kOiBzZWxlY3RlZEl0ZW0ubmVpZ2hib3VyaG9vZCxcclxuICAgICAgICAgICAgICAgIHRyYW5zaXQ6IHNlbGVjdGVkSXRlbS50cmFuc2l0LFxyXG4gICAgICAgICAgICAgICAgcHJpY2U6IHNlbGVjdGVkSXRlbS5wcmljZSxcclxuICAgICAgICAgICAgICAgIG1pblByaWNlOiBzZWxlY3RlZEl0ZW0ubWluX3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgbWluTW9udGhQcmljZTogc2VsZWN0ZWRJdGVtLm1pbl9tb250aF9wcmljZSxcclxuICAgICAgICAgICAgICAgIGJlZHJvb21Db3VudDogc2VsZWN0ZWRJdGVtLmJlZHJvb21fY291bnQsXHJcbiAgICAgICAgICAgICAgICBiYXRocm9vbUNvdW50OiBzZWxlY3RlZEl0ZW0uYmF0aHJvb21fY291bnQsXHJcbiAgICAgICAgICAgICAgICBzaW1pbGFyUHJvcGVydGllczogc2VsZWN0ZWRJdGVtLnNpbWlsYXJfcHJvcGVydGllcyxcclxuICAgICAgICAgICAgICAgIHNsZWVwczogc2VsZWN0ZWRJdGVtLnNsZWVwcyxcclxuICAgICAgICAgICAgICAgIG1pblNsZWVwczogc2VsZWN0ZWRJdGVtLm1pbl9zbGVlcHMsXHJcbiAgICAgICAgICAgICAgICBjbGVhbmluZ0ZlZTogc2VsZWN0ZWRJdGVtLmNsZWFuaW5nX2ZlZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uRmVlUmF0ZTogc2VsZWN0ZWRJdGVtLnRyYW5zYWN0aW9uZmVlX3JhdGUsXHJcbiAgICAgICAgICAgICAgICB0YXhSYXRlOiBzZWxlY3RlZEl0ZW0udGF4X3JhdGUsXHJcbiAgICAgICAgICAgICAgICByZWZ1bmRhYmxlQW1vdW50OiBzZWxlY3RlZEl0ZW0ucmVmdW5kYWJsZV9hbW91bnQsXHJcbiAgICAgICAgICAgICAgICB0b3VyMzYwOiBzZWxlY3RlZEl0ZW0udG91cjM2MCxcclxuICAgICAgICAgICAgICAgIGZ1cm5pc2hlZDogcmVuZGVyT3B0aW9uVmFsdWUoc2VsZWN0ZWRJdGVtLmZ1cm5pc2hlZCksXHJcbiAgICAgICAgICAgICAgICByZW50YWxQYXJraW5nOiByZW5kZXJPcHRpb25WYWx1ZShzZWxlY3RlZEl0ZW0ucmVudGFsX3BhcmtpbmcpLFxyXG4gICAgICAgICAgICAgICAgcGV0c0NvbnNpZGVyZWQ6IHJlbmRlck9wdGlvblZhbHVlKHNlbGVjdGVkSXRlbS5wZXRzX2NvbnNpZGVyZWQpLFxyXG4gICAgICAgICAgICAgICAgcm9vbXM6IHNlbGVjdGVkSXRlbS5wcm9wZXJ0eV9yb29tcy5tYXAoKHJvb20pID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHJvb20uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcm9vbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZFR5cGU6IHJvb20uYmVkX3R5cGUsXHJcbiAgICAgICAgICAgICAgICB9KSksXHJcbiAgICAgICAgICAgICAgICBhbWVuaXRpZXM6IHNlbGVjdGVkSXRlbS5hbWVuaXRpZXMsXHJcbiAgICAgICAgICAgICAgICBmZWF0dXJlZEltZzogc2VsZWN0ZWRJdGVtLmZlYXR1cmVkX2ltZyxcclxuICAgICAgICAgICAgICAgIGdhbGxlcnlJbWdzOiBzZWxlY3RlZEl0ZW0uZ2FsbGVyeV9pbWdzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbc2VsZWN0ZWRJdGVtXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0YXRlXCIsIHN0YXRlKTtcclxuICAgIH0sIFtzdGF0ZV0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGtleSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2F2ZSgpIHtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHtcclxuICAgICAgICAgICAgaWQ6IHNlbGVjdGVkSXRlbS5pZCxcclxuICAgICAgICAgICAgYm9va2VydmlsbGVfaWQ6IHN0YXRlLmJvb2tlcnZpbGxlSWQsXHJcbiAgICAgICAgICAgIG5hbWU6IHN0YXRlLm5hbWUsXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBzdGF0ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgYWRkcmVzczogc3RhdGUuYWRkcmVzcyxcclxuICAgICAgICAgICAgbGF0OiBzdGF0ZS5sYXQsXHJcbiAgICAgICAgICAgIGxuZzogc3RhdGUubG5nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogc3RhdGUuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgIG5laWdoYm91cmhvb2Q6IHN0YXRlLm5laWdoYm91cmhvb2QsXHJcbiAgICAgICAgICAgIHRyYW5zaXQ6IHN0YXRlLnRyYW5zaXQsXHJcbiAgICAgICAgICAgIHByaWNlOiBzdGF0ZS5wcmljZSxcclxuICAgICAgICAgICAgbWluX3ByaWNlOiBzdGF0ZS5taW5QcmljZSxcclxuICAgICAgICAgICAgbWluX21vbnRoX3ByaWNlOiBzdGF0ZS5taW5Nb250aFByaWNlLFxyXG4gICAgICAgICAgICBiZWRyb29tX2NvdW50OiBzdGF0ZS5iZWRyb29tQ291bnQsXHJcbiAgICAgICAgICAgIGJhdGhyb29tX2NvdW50OiBzdGF0ZS5iYXRocm9vbUNvdW50LFxyXG4gICAgICAgICAgICBzaW1pbGFyX3Byb3BlcnRpZXM6IHN0YXRlLnNpbWlsYXJQcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICBzbGVlcHM6IHN0YXRlLnNsZWVwcyxcclxuICAgICAgICAgICAgbWluX3NsZWVwczogc3RhdGUubWluU2xlZXBzLFxyXG4gICAgICAgICAgICBjbGVhbmluZ19mZWU6IHN0YXRlLmNsZWFuaW5nRmVlLFxyXG4gICAgICAgICAgICB0cmFuc2FjdGlvbmZlZV9yYXRlOiBzdGF0ZS50cmFuc2FjdGlvbkZlZVJhdGUsXHJcbiAgICAgICAgICAgIHRheF9yYXRlOiBzdGF0ZS50YXhSYXRlLFxyXG4gICAgICAgICAgICByZWZ1bmRhYmxlX2Ftb3VudDogc3RhdGUucmVmdW5kYWJsZUFtb3VudCxcclxuICAgICAgICAgICAgdG91cjM2MDogc3RhdGUudG91cjM2MCxcclxuICAgICAgICAgICAgZnVybmlzaGVkOiBzdGF0ZS5mdXJuaXNoZWQsXHJcbiAgICAgICAgICAgIHJlbnRhbF9wYXJraW5nOiBzdGF0ZS5yZW50YWxQYXJraW5nLFxyXG4gICAgICAgICAgICBwZXRzX2NvbnNpZGVyZWQ6IHN0YXRlLnBldHNDb25zaWRlcmVkLFxyXG4gICAgICAgICAgICBwcm9wZXJ0eV9yb29tczogbWFrZVJvb21zQXJyYXkoKSxcclxuICAgICAgICAgICAgYW1lbml0aWVzOiBzdGF0ZS5hbWVuaXRpZXMsXHJcbiAgICAgICAgICAgIGZlYXR1cmVkX2ltZzogc3RhdGUuZmVhdHVyZWRJbWcuaWQsXHJcbiAgICAgICAgICAgIGdhbGxlcnlfaW1nczogc3RhdGUuZ2FsbGVyeUltZ3MubWFwKChpbWFnZSkgPT4gaW1hZ2UuaWQpLFxyXG4gICAgICAgICAgICBpbWFnZXM6IHN0YXRlLmltYWdlcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRpc3BhdGNoKHByb3BlcnR5QWN0aW9ucy51cGRhdGVQcm9wZXJ0eShwcm9wZXJ0eSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVJlc2V0KCkge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIC4uLm5ld1Byb3BlcnR5XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyT3B0aW9uVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCIwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZVJvb21zQXJyYXkoKSB7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gc3RhdGUucm9vbXMubWFwKChyb29tKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByb29tLmlkID4gMTAwMDBcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSA/IHJvb20ubmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVkX3R5cGU6IHJvb20uYmVkVHlwZSA/IHJvb20uYmVkVHlwZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcm9vbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByb29tLm5hbWUgPyByb29tLm5hbWUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZF90eXBlOiByb29tLmJlZFR5cGUgPyByb29tLmJlZFR5cGUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUGxhY2VDaGFuZ2UocGxhY2UpIHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzcyxcclxuICAgICAgICAgICAgbGF0OiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSxcclxuICAgICAgICAgICAgbG5nOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQbGFjZVJlc2V0KCkge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhdDogXCJcIixcclxuICAgICAgICAgICAgbG5nOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNldHRpbmdDaGFuZ2UoY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVTZXR0aW5nQ2hhbmdlXCIsIGNoYW5nZWRWYWx1ZXMsIGFsbFZhbHVlcyk7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLi4uYWxsVmFsdWVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1haW5JbmZvQ2hhbmdlKGNoYW5nZWRWYWx1ZXMsIGFsbFZhbHVlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlTWFpbkluZm9DaGFuZ2VcIiwgY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKTtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAuLi5hbGxWYWx1ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQW1lbml0eU9wdGlvbihhbWVuaXR5SWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFtZW5pdHlJZFwiLCBzdGF0ZS5hbWVuaXRpZXMsIGFtZW5pdHlJZCk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gc3RhdGUuYW1lbml0aWVzO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5LmluZGV4T2YoYW1lbml0eUlkKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFtZW5pdGllczogYXJyYXksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goYW1lbml0eUlkKTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhbWVuaXRpZXM6IGFycmF5LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVUb2dnbGVBbWVuaXR5T3B0aW9uXCIsIGFycmF5LCBzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlUm9vbSh2YWx1ZXMsIGlkKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Um9vbXMgPSBzdGF0ZS5yb29tcy5tYXAoKHJvb20sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb29tLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5yb29tLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvb207XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVDaGFuZ2VSb29tXCIsIG5ld1Jvb21zKTtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIHJvb21zOiBuZXdSb29tc30pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZFJvb20oKSB7XHJcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkSWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFycmF5XCIsIGFycmF5LCBnZW5lcmF0ZWRJZCk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gc3RhdGUucm9vbXM7XHJcbiAgICAgICAgYXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiBnZW5lcmF0ZWRJZCxcclxuICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgYmVkVHlwZTogXCJRXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVBZGRSb29tXCIsIGFycmF5KTtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICByb29tczogYXJyYXksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlUm9vbShyb29tSWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVJlbW92ZVJvb21cIiwgcm9vbUlkKTtcclxuICAgICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5yb29tcztcclxuICAgICAgICBsZXQgaW5kZXggPSBhcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHJvb21JZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgYXJyYXlbaW5kZXhdLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBhcnJheVtpbmRleF0uYmVkVHlwZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcm9vbXM6IGFycmF5LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXBsb2FkU3VjY2VzcyhpbWFnZSkge1xyXG4gICAgICAgIGNvbnN0IHtnYWxsZXJ5SW1nc30gPSBzdGF0ZTtcclxuICAgICAgICBnYWxsZXJ5SW1ncy5wdXNoKGltYWdlKTtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIGdhbGxlcnlJbWdzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU29ydEVuZCh7b2xkSW5kZXgsIG5ld0luZGV4fSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gYXJyYXlNb3ZlKHN0YXRlLmdhbGxlcnlJbWdzLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG5cclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBnYWxsZXJ5SW1nczogbmV3QXJyYXksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0RmVhdHVyZWQoaW1hZ2UpIHtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIGZlYXR1cmVkSW1nOiBpbWFnZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNpbWlsYXJQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eUlkcykge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgc2ltaWxhclByb3BlcnRpZXM6IHByb3BlcnR5SWRzfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7cm93U3R5bGUsIGNvbFN0eWxlfSA9IGJhc2ljU3R5bGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0V3JhcHBlcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7d2lkdGg6ICcxMDAlJywgbWFyZ2luOiBcIjAgMjBweFwiLCBiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgcGFkZGluZzogMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17cm93U3R5bGV9IGd1dHRlcj17MH0ganVzdGlmeT1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fSBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiMCAyMHB4XCIsIGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBwYWRkaW5nOiAyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUubmFtZSAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3N0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9va2VydmlsbGVJZD17c3RhdGUuYm9va2VydmlsbGVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17c3RhdGUuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e2hhbmRsZU1haW5JbmZvQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHYWxsZXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17c3RhdGUuZ2FsbGVyeUltZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnRFbmQ9e2hhbmRsZVNvcnRFbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFN1Y2Nlc3M9e2hhbmRsZVVwbG9hZFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17c3RhdGUuZ2FsbGVyeUltZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3N0YXRlLmZlYXR1cmVkSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRTdWNjZXNzPXtoYW5kbGVVcGxvYWRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RJbWFnZT17aGFuZGxlU2VsZWN0RmVhdHVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezE2fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fSBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NhbGxiYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogXCIwIDIwcHhcIiwgYmFja2dyb3VuZDogXCIjZmZmXCIsIHBhZGRpbmc6IDIwfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtbXCJkZXNjcmlwdGlvblwiLCBcIm5laWdoYm91cmhvb2RcIiwgXCJ0cmFuc2l0XCJdLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWI9e2l0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnNsaWNlKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGU/LltpdGVtXSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5lZGl0b3JPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sPXtzdGF0ZVtpdGVtXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9eyhodG1sKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgW2l0ZW1dOiBodG1sfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiTG9jYXRpb25cIiBrZXk9XCJsb2NhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17c3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBzdGF0ZS5sYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogc3RhdGUubG5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QbGFjZUNoYW5nZT17aGFuZGxlUGxhY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNldD17aGFuZGxlUGxhY2VSZXNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiU2V0dGluZ1wiIGtleT1cInNldHRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nIHNldHRpbmc9e3N0YXRlfSBvblZhbHVlc0NoYW5nZT17aGFuZGxlU2V0dGluZ0NoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIkFtZW5pdHlcIiBrZXk9XCJhbWVuaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1lbml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtZW5pdGllcz17c3RhdGUuYW1lbml0aWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlT3B0aW9uPXtoYW5kbGVUb2dnbGVBbWVuaXR5T3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCJCZWR0eXBlXCIga2V5PVwicm9vbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb29tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb21zPXtzdGF0ZS5yb29tc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJvb21DaGFuZ2U9e2hhbmRsZUNoYW5nZVJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRSb29tPXtoYW5kbGVBZGRSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlUm9vbT17aGFuZGxlUmVtb3ZlUm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbHVlc0NoYW5nZT17aGFuZGxlU2V0dGluZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiUHJpY2luZ1wiIGtleT1cInByaWNpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUlkPXtwcm9wZXJ0eUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcmljZT17c3RhdGUucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIlNpbWlsYXIgUHJvcGVydGllc1wiIGtleT1cInNpbWlsYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaW1pbGFyUHJvcGVydHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzdGF0ZS5zaW1pbGFyUHJvcGVydGllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJvd1NlbGVjdGlvbj17aGFuZGxlU2ltaWxhclByb3BlcnR5Q2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0xheW91dFdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=