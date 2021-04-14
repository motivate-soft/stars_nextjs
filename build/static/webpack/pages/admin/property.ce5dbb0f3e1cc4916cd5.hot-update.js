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
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
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
    setState({
      newProperty: newProperty
    });
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
      lineNumber: 330,
      columnNumber: 9
    }
  }, __jsx(_iso_components_utility_box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
      columnNumber: 13
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    onClick: handleSave,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332,
      columnNumber: 17
    }
  }, "Save"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "default",
    onClick: handleReset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335,
      columnNumber: 17
    }
  }, "Reset")), __jsx("div", {
    style: {
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      overflow: "hidden"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 13
    }
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347,
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
      lineNumber: 348,
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
      lineNumber: 349,
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
      lineNumber: 351,
      columnNumber: 29
    }
  }), __jsx(_components_Admin_Property_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_17__["default"], {
    items: state.galleryImgs,
    onSortEnd: handleSortEnd,
    onUploadSuccess: handleUploadSuccess,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
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
      lineNumber: 364,
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
      lineNumber: 372,
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
      lineNumber: 373,
      columnNumber: 21
    }
  }, ["description", "neighbourhood", "transit"].map(function (item) {
    return __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
      tab: item.charAt(0).toUpperCase() + item.slice(1),
      key: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 29
      }
    }, (state === null || state === void 0 ? void 0 : state[item]) && __jsx(_components_Admin_Property_Editor_Editor__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, editorOption, {
      html: state[item],
      onEditorStateChange: function onEditorStateChange(html) {
        return setState(_objectSpread(_objectSpread({}, state), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_4__["default"])({}, item, html)));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 37
      }
    })));
  }), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Location",
    key: "location",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394,
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
      lineNumber: 395,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Setting",
    key: "setting",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Setting_Setting__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setting: state,
    onValuesChange: handleSettingChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Amenity",
    key: "amenity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Amenity_Amenity__WEBPACK_IMPORTED_MODULE_14__["default"], {
    amenities: state.amenities,
    onToggleOption: handleToggleAmenityOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Bedtype",
    key: "rooms",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414,
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
      lineNumber: 415,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Pricing",
    key: "pricing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_PricingCalendar_PricingCalendar__WEBPACK_IMPORTED_MODULE_22__["default"], {
    propertyId: propertyId,
    defaultPrice: state.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Similar Properties",
    key: "similar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_SimilarProperty_SimilarProperty__WEBPACK_IMPORTED_MODULE_23__["default"], {
    selectedItems: state.similarProperties,
    onRowSelection: handleSimilarPropertyChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430,
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

/***/ }),

/***/ "./components/Admin/Property/SimilarProperty/SimilarProperty.js":
/*!**********************************************************************!*\
  !*** ./components/Admin/Property/SimilarProperty/SimilarProperty.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimilarProperty; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clone */ "./node_modules/clone/clone.js");
/* harmony import */ var clone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _iso_components_utility_box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/utility/box */ "./shared/components/utility/box.js");
/* harmony import */ var _iso_components_utility_helper_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/components/utility/helper-text */ "./shared/components/utility/helper-text.js");
/* harmony import */ var _iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/components/utility/layoutWrapper */ "./shared/components/utility/layoutWrapper.js");
/* harmony import */ var _iso_components_utility_pageHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/components/utility/pageHeader */ "./shared/components/utility/pageHeader.js");
/* harmony import */ var _iso_components_utility_customScrollBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/components/utility/customScrollBar */ "./shared/components/utility/customScrollBar.js");
/* harmony import */ var _iso_containers_Tables_AntTables_AntTables_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/containers/Tables/AntTables/AntTables.styles */ "./shared/containers/Tables/AntTables/AntTables.styles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_properties_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redux/properties/actions */ "./redux/properties/actions.js");


var _this = undefined,
    _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\components\\Admin\\Property\\SimilarProperty\\SimilarProperty.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












var tableColumns = [{
  title: "ID",
  key: "id",
  width: 100,
  render: function render(object) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 29
      }
    }, object.id);
  }
}, {
  title: "Name",
  key: "name",
  width: 100,
  render: function render(object) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, object.name);
  }
}, {
  title: "Address",
  key: "address",
  width: 200,
  render: function render(object) {
    return __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 29
      }
    }, object.address);
  }
}];
function SimilarProperty(props) {
  _s();

  var selectedItems = props.selectedItems,
      onRowSelection = props.onRowSelection;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
    return state.Properties;
  }),
      items = _useSelector.items,
      loading = _useSelector.loading;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    columns: tableColumns,
    dataList: items
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    dispatch(_redux_properties_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getAllProperties());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      dataList: items
    }));
  }, [items]);
  var columns = state.columns,
      dataList = state.dataList;
  var rowSelection = {
    selectedRowKeys: selectedItems,
    onChange: function onChange(selectedRowKeys, selectedRows) {
      onRowSelection(selectedRowKeys); // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: function getCheckboxProps(record) {
      return {
        // disabled: selectedItems.findIndex(item => item === parseInt(record.id)) > -1,
        // disabled: record.name === 'Disabled User',
        name: record.id
      };
    }
  };
  return __jsx(_iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx(_iso_components_utility_pageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, "Category"), __jsx(_iso_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, (items === null || items === void 0 ? void 0 : items.length) === 0 ? __jsx(_iso_components_utility_helper_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "No Properties found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }) : __jsx("div", {
    className: "isoPropertyTable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  }, __jsx(_iso_components_utility_customScrollBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    style: {
      width: "100%",
      height: "calc(60vh - 70px)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 25
    }
  }, __jsx(_iso_containers_Tables_AntTables_AntTables_styles__WEBPACK_IMPORTED_MODULE_9__["default"], {
    rowKey: "id",
    rowSelection: _objectSpread({
      type: 'checkbox'
    }, rowSelection),
    columns: columns,
    dataSource: items,
    className: "categoryListTable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 29
    }
  })))));
}

_s(SimilarProperty, "qpeHnE+SslkS2arFeVN7aen49Tk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"]];
});

_c = SimilarProperty;

var _c;

$RefreshReg$(_c, "SimilarProperty");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9FZGl0UHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvU2ltaWxhclByb3BlcnR5L1NpbWlsYXJQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJ1cGxvYWRDYWxsYmFjayIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiZXJyb3IiLCJuZXdQcm9wZXJ0eSIsIm5hbWUiLCJjYXRlZ29yeSIsImJvb2tlcnZpbGxlSWQiLCJkZXNjcmlwdGlvbiIsIm5laWdoYm91cmhvb2QiLCJ0cmFuc2l0IiwiYWRkcmVzcyIsImxhdCIsImxuZyIsInJvb21zIiwiYW1lbml0aWVzIiwiZ2FsbGVyeUltZ3MiLCJmZWF0dXJlZEltZyIsInNpbWlsYXJQcm9wZXJ0aWVzIiwicHJpY2UiLCJtaW5QcmljZSIsIm1pbk1vbnRoUHJpY2UiLCJiYXRocm9vbUNvdW50IiwiYmVkcm9vbUNvdW50Iiwic2xlZXBzIiwibWluU2xlZXBzIiwiY2xlYW5pbmdGZWUiLCJ0cmFuc2FjdGlvbkZlZVJhdGUiLCJ0YXhSYXRlIiwidG91cjM2MCIsInJlZnVuZGFibGVBbW91bnQiLCJmdXJuaXNoZWQiLCJyZW50YWxQYXJraW5nIiwicGV0c0NvbnNpZGVyZWQiLCJFZGl0UHJvcGVydHkiLCJwcm9wcyIsInByb3BlcnR5SWQiLCJSZWFjdCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlByb3BlcnRpZXMiLCJzZWxlY3RlZEl0ZW0iLCJ1c2VFZmZlY3QiLCJwcm9wZXJ0eUFjdGlvbnMiLCJnZXRQcm9wZXJ0eSIsImlkIiwiYm9va2VydmlsbGVfaWQiLCJtaW5fcHJpY2UiLCJtaW5fbW9udGhfcHJpY2UiLCJiZWRyb29tX2NvdW50IiwiYmF0aHJvb21fY291bnQiLCJzaW1pbGFyX3Byb3BlcnRpZXMiLCJtaW5fc2xlZXBzIiwiY2xlYW5pbmdfZmVlIiwidHJhbnNhY3Rpb25mZWVfcmF0ZSIsInRheF9yYXRlIiwicmVmdW5kYWJsZV9hbW91bnQiLCJyZW5kZXJPcHRpb25WYWx1ZSIsInJlbnRhbF9wYXJraW5nIiwicGV0c19jb25zaWRlcmVkIiwicHJvcGVydHlfcm9vbXMiLCJtYXAiLCJyb29tIiwiYmVkVHlwZSIsImJlZF90eXBlIiwiZmVhdHVyZWRfaW1nIiwiZ2FsbGVyeV9pbWdzIiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrIiwia2V5IiwiaGFuZGxlU2F2ZSIsInByb3BlcnR5IiwibWFrZVJvb21zQXJyYXkiLCJpbWFnZSIsImltYWdlcyIsInVwZGF0ZVByb3BlcnR5IiwiaGFuZGxlUmVzZXQiLCJ2YWx1ZSIsImFycmF5IiwiZWRpdG9yT3B0aW9uIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRvb2xiYXJDbGFzc05hbWUiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwiZWRpdG9yQ2xhc3NOYW1lIiwidG9vbGJhciIsImhhbmRsZVBsYWNlQ2hhbmdlIiwicGxhY2UiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJoYW5kbGVQbGFjZVJlc2V0IiwiaGFuZGxlU2V0dGluZ0NoYW5nZSIsImNoYW5nZWRWYWx1ZXMiLCJhbGxWYWx1ZXMiLCJoYW5kbGVNYWluSW5mb0NoYW5nZSIsImhhbmRsZVRvZ2dsZUFtZW5pdHlPcHRpb24iLCJhbWVuaXR5SWQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlUm9vbSIsInZhbHVlcyIsIm5ld1Jvb21zIiwiaGFuZGxlQWRkUm9vbSIsImdlbmVyYXRlZElkIiwiRGF0ZSIsImdldFRpbWUiLCJoYW5kbGVSZW1vdmVSb29tIiwicm9vbUlkIiwiZmluZEluZGV4IiwiaXRlbSIsImhhbmRsZVVwbG9hZFN1Y2Nlc3MiLCJoYW5kbGVTb3J0RW5kIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm5ld0FycmF5IiwiYXJyYXlNb3ZlIiwiaGFuZGxlU2VsZWN0RmVhdHVyZWQiLCJoYW5kbGVTaW1pbGFyUHJvcGVydHlDaGFuZ2UiLCJwcm9wZXJ0eUlkcyIsInJvd1N0eWxlIiwiYmFzaWNTdHlsZSIsImNvbFN0eWxlIiwiZGlzcGxheSIsImZsZXhGbG93IiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93IiwibWFyZ2luIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaHRtbCIsInRhYmxlQ29sdW1ucyIsInRpdGxlIiwicmVuZGVyIiwib2JqZWN0IiwiU2ltaWxhclByb3BlcnR5Iiwic2VsZWN0ZWRJdGVtcyIsIm9uUm93U2VsZWN0aW9uIiwiaXRlbXMiLCJsb2FkaW5nIiwiY29sdW1ucyIsImRhdGFMaXN0IiwiZ2V0QWxsUHJvcGVydGllcyIsInJvd1NlbGVjdGlvbiIsInNlbGVjdGVkUm93S2V5cyIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRSb3dzIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImxlbmd0aCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUMxQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsUUFBTUMs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LE1BQUMsMEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVJLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVLLENBQUFvRyxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLFlBQUFBLEtBQUssQ0FBRVcsTUFBUCxNQUFrQixDQUFsQixHQUNHLE1BQUMsMkVBQUQ7QUFBWSxRQUFJLEVBQUMscUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESCxHQUdHO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtFQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUMxRSxXQUFLLEVBQUUsTUFBUjtBQUFnQkMsWUFBTSxFQUFFO0FBQXhCLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJLE1BQUMseUZBQUQ7QUFDSSxVQUFNLEVBQUMsSUFEWDtBQUVJLGdCQUFZO0FBQ1IwRSxVQUFJLEVBQUU7QUFERSxPQUVMUCxZQUZLLENBRmhCO0FBTUksV0FBTyxFQUFFSCxPQU5iO0FBT0ksY0FBVSxFQUFFRixLQVBoQjtBQVFJLGFBQVMsRUFBQyxtQkFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixDQUxSLENBRkosQ0FESjtBQTRCSDs7R0FoRXVCSCxlO1VBRUh4Ryx3RCxFQUVRQyx3RDs7O0tBSkx1RyxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Byb3BlcnR5LmNlNWRiYjBmM2UxY2M0OTE2Y2Q1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0V3JhcHBlciBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvbGF5b3V0V3JhcHBlclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9ib3hcIjtcclxuaW1wb3J0IFRhYnMsIHtUYWJQYW5lfSBmcm9tIFwiQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvdGFic1wiO1xyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L0xvY2F0aW9uL0xvY2F0aW9uXCI7XHJcbmltcG9ydCBiYXNpY1N0eWxlIGZyb20gXCJAaXNvL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7Um93LCBDb2wsIEJ1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFNldHRpbmcgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L1NldHRpbmcvU2V0dGluZ1wiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvTWFpbi9NYWluXCI7XHJcbmltcG9ydCBBbWVuaXR5IGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9BbWVuaXR5L0FtZW5pdHlcIjtcclxuaW1wb3J0IFJvb21zIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9Sb29tL1Jvb21zXCI7XHJcbmltcG9ydCBhcnJheU1vdmUgZnJvbSBcImFycmF5LW1vdmVcIjtcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L0dhbGxlcnkvR2FsbGVyeVwiO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9FZGl0b3IvRWRpdG9yXCI7XHJcbmltcG9ydCBGZWF0dXJlZEltYWdlIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9GZWF0dXJlZEltYWdlL0ZlYXR1cmVkSW1hZ2VcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgcHJvcGVydHlBY3Rpb25zIGZyb20gXCJAcmVkdXgvcHJvcGVydGllcy9hY3Rpb25zXCI7XHJcbmltcG9ydCBQcmljaW5nQ2FsZW5kYXIgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L1ByaWNpbmdDYWxlbmRhci9QcmljaW5nQ2FsZW5kYXJcIjtcclxuaW1wb3J0IFNpbWlsYXJQcm9wZXJ0eSBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvU2ltaWxhclByb3BlcnR5L1NpbWlsYXJQcm9wZXJ0eVwiO1xyXG5cclxuZnVuY3Rpb24gdXBsb2FkQ2FsbGJhY2soZmlsZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwczovL2FwaS5pbWd1ci5jb20vMy9pbWFnZVwiKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJDbGllbnQtSUQgOGQyNmNjZDEyNzEyZmNhXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcImltYWdlXCIsIGZpbGUpO1xyXG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBuZXdQcm9wZXJ0eSA9IHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBjYXRlZ29yeTogXCJcIixcclxuICAgIGJvb2tlcnZpbGxlSWQ6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIG5laWdoYm91cmhvb2Q6IFwiXCIsXHJcbiAgICB0cmFuc2l0OiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICAgIGxhdDogXCJcIixcclxuICAgIGxuZzogXCJcIixcclxuICAgIHJvb21zOiBbXSxcclxuICAgIGFtZW5pdGllczogW10sXHJcbiAgICBnYWxsZXJ5SW1nczogW10sXHJcbiAgICBmZWF0dXJlZEltZzogbnVsbCxcclxuICAgIHNpbWlsYXJQcm9wZXJ0aWVzOiBbXSxcclxuXHJcbiAgICBwcmljZTogXCJcIixcclxuICAgIG1pblByaWNlOiBcIlwiLFxyXG4gICAgbWluTW9udGhQcmljZTogXCJcIixcclxuICAgIGJhdGhyb29tQ291bnQ6IFwiXCIsXHJcbiAgICBiZWRyb29tQ291bnQ6IFwiXCIsXHJcbiAgICBzbGVlcHM6IFwiXCIsXHJcbiAgICBtaW5TbGVlcHM6IDIsXHJcbiAgICBjbGVhbmluZ0ZlZTogXCJcIixcclxuICAgIHRyYW5zYWN0aW9uRmVlUmF0ZTogXCJcIixcclxuICAgIHRheFJhdGU6IFwiXCIsXHJcbiAgICB0b3VyMzYwOiBcIlwiLFxyXG4gICAgcmVmdW5kYWJsZUFtb3VudDogXCJcIixcclxuICAgIGZ1cm5pc2hlZDogdHJ1ZSxcclxuICAgIHJlbnRhbFBhcmtpbmc6IHRydWUsXHJcbiAgICBwZXRzQ29uc2lkZXJlZDogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRQcm9wZXJ0eShwcm9wcykge1xyXG4gICAgY29uc3Qge3Byb3BlcnR5SWR9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKG5ld1Byb3BlcnR5KTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7c2VsZWN0ZWRJdGVtfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuUHJvcGVydGllcyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwcm9wZXJ0eUFjdGlvbnMuZ2V0UHJvcGVydHkocHJvcGVydHlJZCkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGAke3NlbGVjdGVkSXRlbS5pZH1gID09PSBgJHtwcm9wZXJ0eUlkfWApIHtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNlbGVjdGVkSXRlbS5pZCxcclxuICAgICAgICAgICAgICAgIGJvb2tlcnZpbGxlSWQ6IHNlbGVjdGVkSXRlbS5ib29rZXJ2aWxsZV9pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHNlbGVjdGVkSXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGAke3NlbGVjdGVkSXRlbS5jYXRlZ29yeX1gLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRJdGVtLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBsYXQ6IHNlbGVjdGVkSXRlbS5sYXQsXHJcbiAgICAgICAgICAgICAgICBsbmc6IHNlbGVjdGVkSXRlbS5sbmcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRJdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3VyaG9vZDogc2VsZWN0ZWRJdGVtLm5laWdoYm91cmhvb2QsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0OiBzZWxlY3RlZEl0ZW0udHJhbnNpdCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBzZWxlY3RlZEl0ZW0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZTogc2VsZWN0ZWRJdGVtLm1pbl9wcmljZSxcclxuICAgICAgICAgICAgICAgIG1pbk1vbnRoUHJpY2U6IHNlbGVjdGVkSXRlbS5taW5fbW9udGhfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBiZWRyb29tQ291bnQ6IHNlbGVjdGVkSXRlbS5iZWRyb29tX2NvdW50LFxyXG4gICAgICAgICAgICAgICAgYmF0aHJvb21Db3VudDogc2VsZWN0ZWRJdGVtLmJhdGhyb29tX2NvdW50LFxyXG4gICAgICAgICAgICAgICAgc2ltaWxhclByb3BlcnRpZXM6IHNlbGVjdGVkSXRlbS5zaW1pbGFyX3Byb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBzbGVlcHM6IHNlbGVjdGVkSXRlbS5zbGVlcHMsXHJcbiAgICAgICAgICAgICAgICBtaW5TbGVlcHM6IHNlbGVjdGVkSXRlbS5taW5fc2xlZXBzLFxyXG4gICAgICAgICAgICAgICAgY2xlYW5pbmdGZWU6IHNlbGVjdGVkSXRlbS5jbGVhbmluZ19mZWUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkZlZVJhdGU6IHNlbGVjdGVkSXRlbS50cmFuc2FjdGlvbmZlZV9yYXRlLFxyXG4gICAgICAgICAgICAgICAgdGF4UmF0ZTogc2VsZWN0ZWRJdGVtLnRheF9yYXRlLFxyXG4gICAgICAgICAgICAgICAgcmVmdW5kYWJsZUFtb3VudDogc2VsZWN0ZWRJdGVtLnJlZnVuZGFibGVfYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdG91cjM2MDogc2VsZWN0ZWRJdGVtLnRvdXIzNjAsXHJcbiAgICAgICAgICAgICAgICBmdXJuaXNoZWQ6IHJlbmRlck9wdGlvblZhbHVlKHNlbGVjdGVkSXRlbS5mdXJuaXNoZWQpLFxyXG4gICAgICAgICAgICAgICAgcmVudGFsUGFya2luZzogcmVuZGVyT3B0aW9uVmFsdWUoc2VsZWN0ZWRJdGVtLnJlbnRhbF9wYXJraW5nKSxcclxuICAgICAgICAgICAgICAgIHBldHNDb25zaWRlcmVkOiByZW5kZXJPcHRpb25WYWx1ZShzZWxlY3RlZEl0ZW0ucGV0c19jb25zaWRlcmVkKSxcclxuICAgICAgICAgICAgICAgIHJvb21zOiBzZWxlY3RlZEl0ZW0ucHJvcGVydHlfcm9vbXMubWFwKChyb29tKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiByb29tLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBiZWRUeXBlOiByb29tLmJlZF90eXBlLFxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgYW1lbml0aWVzOiBzZWxlY3RlZEl0ZW0uYW1lbml0aWVzLFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRJbWc6IHNlbGVjdGVkSXRlbS5mZWF0dXJlZF9pbWcsXHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5SW1nczogc2VsZWN0ZWRJdGVtLmdhbGxlcnlfaW1ncyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NlbGVjdGVkSXRlbV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZVwiLCBzdGF0ZSk7XHJcbiAgICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjYWxsYmFjayhrZXkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNhdmUoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB7XHJcbiAgICAgICAgICAgIGlkOiBzZWxlY3RlZEl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGJvb2tlcnZpbGxlX2lkOiBzdGF0ZS5ib29rZXJ2aWxsZUlkLFxyXG4gICAgICAgICAgICBuYW1lOiBzdGF0ZS5uYW1lLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIGxhdDogc3RhdGUubGF0LFxyXG4gICAgICAgICAgICBsbmc6IHN0YXRlLmxuZyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0YXRlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBuZWlnaGJvdXJob29kOiBzdGF0ZS5uZWlnaGJvdXJob29kLFxyXG4gICAgICAgICAgICB0cmFuc2l0OiBzdGF0ZS50cmFuc2l0LFxyXG4gICAgICAgICAgICBwcmljZTogc3RhdGUucHJpY2UsXHJcbiAgICAgICAgICAgIG1pbl9wcmljZTogc3RhdGUubWluUHJpY2UsXHJcbiAgICAgICAgICAgIG1pbl9tb250aF9wcmljZTogc3RhdGUubWluTW9udGhQcmljZSxcclxuICAgICAgICAgICAgYmVkcm9vbV9jb3VudDogc3RhdGUuYmVkcm9vbUNvdW50LFxyXG4gICAgICAgICAgICBiYXRocm9vbV9jb3VudDogc3RhdGUuYmF0aHJvb21Db3VudCxcclxuICAgICAgICAgICAgc2ltaWxhcl9wcm9wZXJ0aWVzOiBzdGF0ZS5zaW1pbGFyUHJvcGVydGllcyxcclxuICAgICAgICAgICAgc2xlZXBzOiBzdGF0ZS5zbGVlcHMsXHJcbiAgICAgICAgICAgIG1pbl9zbGVlcHM6IHN0YXRlLm1pblNsZWVwcyxcclxuICAgICAgICAgICAgY2xlYW5pbmdfZmVlOiBzdGF0ZS5jbGVhbmluZ0ZlZSxcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25mZWVfcmF0ZTogc3RhdGUudHJhbnNhY3Rpb25GZWVSYXRlLFxyXG4gICAgICAgICAgICB0YXhfcmF0ZTogc3RhdGUudGF4UmF0ZSxcclxuICAgICAgICAgICAgcmVmdW5kYWJsZV9hbW91bnQ6IHN0YXRlLnJlZnVuZGFibGVBbW91bnQsXHJcbiAgICAgICAgICAgIHRvdXIzNjA6IHN0YXRlLnRvdXIzNjAsXHJcbiAgICAgICAgICAgIGZ1cm5pc2hlZDogc3RhdGUuZnVybmlzaGVkLFxyXG4gICAgICAgICAgICByZW50YWxfcGFya2luZzogc3RhdGUucmVudGFsUGFya2luZyxcclxuICAgICAgICAgICAgcGV0c19jb25zaWRlcmVkOiBzdGF0ZS5wZXRzQ29uc2lkZXJlZCxcclxuICAgICAgICAgICAgcHJvcGVydHlfcm9vbXM6IG1ha2VSb29tc0FycmF5KCksXHJcbiAgICAgICAgICAgIGFtZW5pdGllczogc3RhdGUuYW1lbml0aWVzLFxyXG4gICAgICAgICAgICBmZWF0dXJlZF9pbWc6IHN0YXRlLmZlYXR1cmVkSW1nLmlkLFxyXG4gICAgICAgICAgICBnYWxsZXJ5X2ltZ3M6IHN0YXRlLmdhbGxlcnlJbWdzLm1hcCgoaW1hZ2UpID0+IGltYWdlLmlkKSxcclxuICAgICAgICAgICAgaW1hZ2VzOiBzdGF0ZS5pbWFnZXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkaXNwYXRjaChwcm9wZXJ0eUFjdGlvbnMudXBkYXRlUHJvcGVydHkocHJvcGVydHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNldCgpIHtcclxuICAgICAgICBzZXRTdGF0ZSh7bmV3UHJvcGVydHl9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJPcHRpb25WYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIxXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjBcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlUm9vbXNBcnJheSgpIHtcclxuICAgICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5yb29tcy5tYXAoKHJvb20pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb20uaWQgPiAxMDAwMFxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcm9vbS5uYW1lID8gcm9vbS5uYW1lIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBiZWRfdHlwZTogcm9vbS5iZWRUeXBlID8gcm9vbS5iZWRUeXBlIDogXCJcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiByb29tLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSA/IHJvb20ubmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVkX3R5cGU6IHJvb20uYmVkVHlwZSA/IHJvb20uYmVkVHlwZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0b3JPcHRpb24gPSB7XHJcbiAgICAgICAgc3R5bGU6IHt3aWR0aDogXCI5MCVcIiwgaGVpZ2h0OiBcIjcwJVwifSxcclxuICAgICAgICB0b29sYmFyQ2xhc3NOYW1lOiBcImhvbWUtdG9vbGJhclwiLFxyXG4gICAgICAgIHdyYXBwZXJDbGFzc05hbWU6IFwiaG9tZS13cmFwcGVyXCIsXHJcbiAgICAgICAgZWRpdG9yQ2xhc3NOYW1lOiBcImhvbWUtZWRpdG9yXCIsXHJcbiAgICAgICAgdXBsb2FkQ2FsbGJhY2s6IHVwbG9hZENhbGxiYWNrLFxyXG4gICAgICAgIHRvb2xiYXI6IHtpbWFnZToge3VwbG9hZENhbGxiYWNrOiB1cGxvYWRDYWxsYmFja319LFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQbGFjZUNoYW5nZShwbGFjZSkge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzLFxyXG4gICAgICAgICAgICBsYXQ6IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpLFxyXG4gICAgICAgICAgICBsbmc6IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYWNlUmVzZXQoKSB7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgICAgICAgbGF0OiBcIlwiLFxyXG4gICAgICAgICAgICBsbmc6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2V0dGluZ0NoYW5nZShjaGFuZ2VkVmFsdWVzLCBhbGxWYWx1ZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVNldHRpbmdDaGFuZ2VcIiwgY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKTtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAuLi5hbGxWYWx1ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTWFpbkluZm9DaGFuZ2UoY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVNYWluSW5mb0NoYW5nZVwiLCBjaGFuZ2VkVmFsdWVzLCBhbGxWYWx1ZXMpO1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIC4uLmFsbFZhbHVlcyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVUb2dnbGVBbWVuaXR5T3B0aW9uKGFtZW5pdHlJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW1lbml0eUlkXCIsIHN0YXRlLmFtZW5pdGllcywgYW1lbml0eUlkKTtcclxuICAgICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5hbWVuaXRpZXM7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihhbWVuaXR5SWQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYW1lbml0aWVzOiBhcnJheSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChhbWVuaXR5SWQpO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFtZW5pdGllczogYXJyYXksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVRvZ2dsZUFtZW5pdHlPcHRpb25cIiwgYXJyYXksIHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VSb29tKHZhbHVlcywgaWQpIHtcclxuICAgICAgICBjb25zdCBuZXdSb29tcyA9IHN0YXRlLnJvb21zLm1hcCgocm9vbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvb20uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnJvb20sXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm9vbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUNoYW5nZVJvb21cIiwgbmV3Um9vbXMpO1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgcm9vbXM6IG5ld1Jvb21zfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkUm9vbSgpIHtcclxuICAgICAgICBjb25zdCBnZW5lcmF0ZWRJZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJyYXlcIiwgYXJyYXksIGdlbmVyYXRlZElkKTtcclxuICAgICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5yb29tcztcclxuICAgICAgICBhcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IGdlbmVyYXRlZElkLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBiZWRUeXBlOiBcIlFcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUFkZFJvb21cIiwgYXJyYXkpO1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHJvb21zOiBhcnJheSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVSb29tKHJvb21JZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUmVtb3ZlUm9vbVwiLCByb29tSWQpO1xyXG4gICAgICAgIGxldCBhcnJheSA9IHN0YXRlLnJvb21zO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcm9vbUlkKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBhcnJheVtpbmRleF0ubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGFycmF5W2luZGV4XS5iZWRUeXBlID0gXCJcIjtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByb29tczogYXJyYXksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGxvYWRTdWNjZXNzKGltYWdlKSB7XHJcbiAgICAgICAgY29uc3Qge2dhbGxlcnlJbWdzfSA9IHN0YXRlO1xyXG4gICAgICAgIGdhbGxlcnlJbWdzLnB1c2goaW1hZ2UpO1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgZ2FsbGVyeUltZ3N9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTb3J0RW5kKHtvbGRJbmRleCwgbmV3SW5kZXh9KSB7XHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBhcnJheU1vdmUoc3RhdGUuZ2FsbGVyeUltZ3MsIG9sZEluZGV4LCBuZXdJbmRleCk7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGdhbGxlcnlJbWdzOiBuZXdBcnJheSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RGZWF0dXJlZChpbWFnZSkge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgZmVhdHVyZWRJbWc6IGltYWdlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2ltaWxhclByb3BlcnR5Q2hhbmdlKHByb3BlcnR5SWRzKSB7XHJcbiAgICAgICAgc2V0U3RhdGUoey4uLnN0YXRlLCBzaW1pbGFyUHJvcGVydGllczogcHJvcGVydHlJZHN9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtyb3dTdHlsZSwgY29sU3R5bGV9ID0gYmFzaWNTdHlsZTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2hhbmRsZVNhdmV9PlxyXG4gICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwiZGVmYXVsdFwiIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fT5cclxuICAgICAgICAgICAgICAgICAgICBSZXNldFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhGbG93OiBcInJvdyB3cmFwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3Jvd1N0eWxlfSBndXR0ZXI9ezB9IGp1c3RpZnk9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0gc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiBcIjAgMjBweFwiLCBiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgcGFkZGluZzogMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLm5hbWUgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tlcnZpbGxlSWQ9e3N0YXRlLmJvb2tlcnZpbGxlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e3N0YXRlLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtoYW5kbGVNYWluSW5mb0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R2FsbGVyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3N0YXRlLmdhbGxlcnlJbWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0RW5kPXtoYW5kbGVTb3J0RW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRTdWNjZXNzPXtoYW5kbGVVcGxvYWRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3N0YXRlLmdhbGxlcnlJbWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzdGF0ZS5mZWF0dXJlZEltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkU3VjY2Vzcz17aGFuZGxlVXBsb2FkU3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0SW1hZ2U9e2hhbmRsZVNlbGVjdEZlYXR1cmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsxNn0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0gc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjYWxsYmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMCAyMHB4XCIsIGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBwYWRkaW5nOiAyMH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7W1wiZGVzY3JpcHRpb25cIiwgXCJuZWlnaGJvdXJob29kXCIsIFwidHJhbnNpdFwiXS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiPXtpdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zbGljZSgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlPy5baXRlbV0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZWRpdG9yT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbD17c3RhdGVbaXRlbV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXsoaHRtbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIFtpdGVtXTogaHRtbH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIkxvY2F0aW9uXCIga2V5PVwibG9jYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3N0YXRlLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogc3RhdGUubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHN0YXRlLmxuZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGxhY2VDaGFuZ2U9e2hhbmRsZVBsYWNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzZXQ9e2hhbmRsZVBsYWNlUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIlNldHRpbmdcIiBrZXk9XCJzZXR0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZyBzZXR0aW5nPXtzdGF0ZX0gb25WYWx1ZXNDaGFuZ2U9e2hhbmRsZVNldHRpbmdDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCJBbWVuaXR5XCIga2V5PVwiYW1lbml0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtZW5pdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbWVuaXRpZXM9e3N0YXRlLmFtZW5pdGllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZU9wdGlvbj17aGFuZGxlVG9nZ2xlQW1lbml0eU9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiQmVkdHlwZVwiIGtleT1cInJvb21zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tcz17c3RhdGUucm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb29tQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkUm9vbT17aGFuZGxlQWRkUm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZVJvb209e2hhbmRsZVJlbW92ZVJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e2hhbmRsZVNldHRpbmdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIlByaWNpbmdcIiBrZXk9XCJwcmljaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlJZD17cHJvcGVydHlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJpY2U9e3N0YXRlLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCJTaW1pbGFyIFByb3BlcnRpZXNcIiBrZXk9XCJzaW1pbGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2ltaWxhclByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c3RhdGUuc2ltaWxhclByb3BlcnRpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb3dTZWxlY3Rpb249e2hhbmRsZVNpbWlsYXJQcm9wZXJ0eUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9MYXlvdXRXcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsb25lIGZyb20gXCJjbG9uZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2JveFwiO1xyXG5pbXBvcnQgSGVscGVyVGV4dCBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvaGVscGVyLXRleHRcIjtcclxuaW1wb3J0IExheW91dFdyYXBwZXIgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2xheW91dFdyYXBwZXJcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L3BhZ2VIZWFkZXJcIjtcclxuaW1wb3J0IFNjcm9sbGJhcnMgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2N1c3RvbVNjcm9sbEJhclwiO1xyXG5pbXBvcnQgVGFibGVXcmFwcGVyIGZyb20gXCJAaXNvL2NvbnRhaW5lcnMvVGFibGVzL0FudFRhYmxlcy9BbnRUYWJsZXMuc3R5bGVzXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHByb3BlcnR5QWN0aW9ucyBmcm9tIFwiQHJlZHV4L3Byb3BlcnRpZXMvYWN0aW9uc1wiO1xyXG5cclxuXHJcbmNvbnN0IHRhYmxlQ29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJJRFwiLFxyXG4gICAgICAgIGtleTogXCJpZFwiLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgcmVuZGVyOiAob2JqZWN0KSA9PiA8cD57b2JqZWN0LmlkfTwvcD4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk5hbWVcIixcclxuICAgICAgICBrZXk6IFwibmFtZVwiLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgcmVuZGVyOiAob2JqZWN0KSA9PiA8cD57b2JqZWN0Lm5hbWV9PC9wPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQWRkcmVzc1wiLFxyXG4gICAgICAgIGtleTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICByZW5kZXI6IChvYmplY3QpID0+IDxwPntvYmplY3QuYWRkcmVzc308L3A+LFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbWlsYXJQcm9wZXJ0eShwcm9wcykge1xyXG4gICAgY29uc3Qge3NlbGVjdGVkSXRlbXMsIG9uUm93U2VsZWN0aW9ufSA9IHByb3BzXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qge2l0ZW1zLCBsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuUHJvcGVydGllcyk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjb2x1bW5zOiB0YWJsZUNvbHVtbnMsXHJcbiAgICAgICAgZGF0YUxpc3Q6IGl0ZW1zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwcm9wZXJ0eUFjdGlvbnMuZ2V0QWxsUHJvcGVydGllcygpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGRhdGFMaXN0OiBpdGVtc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2l0ZW1zXSk7XHJcblxyXG4gICAgY29uc3Qge2NvbHVtbnMsIGRhdGFMaXN0fSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkSXRlbXMsXHJcbiAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykgPT4ge1xyXG4gICAgICAgICAgICBvblJvd1NlbGVjdGlvbihzZWxlY3RlZFJvd0tleXMpXHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBzZWxlY3RlZFJvd0tleXM6ICR7c2VsZWN0ZWRSb3dLZXlzfWAsICdzZWxlY3RlZFJvd3M6ICcsIHNlbGVjdGVkUm93cyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDaGVja2JveFByb3BzOiAocmVjb3JkKSA9PiAoe1xyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZDogc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBwYXJzZUludChyZWNvcmQuaWQpKSA+IC0xLFxyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZDogcmVjb3JkLm5hbWUgPT09ICdEaXNhYmxlZCBVc2VyJyxcclxuICAgICAgICAgICAgbmFtZTogcmVjb3JkLmlkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXRXcmFwcGVyPlxyXG4gICAgICAgICAgICA8UGFnZUhlYWRlcj5DYXRlZ29yeTwvUGFnZUhlYWRlcj5cclxuICAgICAgICAgICAgPEJveD5cclxuXHJcbiAgICAgICAgICAgICAgICB7aXRlbXM/Lmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICA8SGVscGVyVGV4dCB0ZXh0PVwiTm8gUHJvcGVydGllcyBmb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Qcm9wZXJ0eVRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTY3JvbGxiYXJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImNhbGMoNjB2aCAtIDcwcHgpXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVXcmFwcGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93S2V5PVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yb3dTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhdGVnb3J5TGlzdFRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvTGF5b3V0V3JhcHBlcj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==