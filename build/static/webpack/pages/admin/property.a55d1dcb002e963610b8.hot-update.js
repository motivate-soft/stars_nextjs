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

  var rowStyle = _iso_assets_styles_constants__WEBPACK_IMPORTED_MODULE_11__["default"].rowStyle,
      colStyle = _iso_assets_styles_constants__WEBPACK_IMPORTED_MODULE_11__["default"].colStyle;
  return __jsx(_iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 9
    }
  }, __jsx(_iso_components_utility_box__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 13
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "primary",
    onClick: handleSave,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 17
    }
  }, "Save"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_3___default.a, {
    type: "default",
    onClick: handleReset,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331,
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
      lineNumber: 335,
      columnNumber: 13
    }
  }), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343,
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
      lineNumber: 344,
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
      lineNumber: 345,
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
      lineNumber: 347,
      columnNumber: 29
    }
  }), __jsx(_components_Admin_Property_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_17__["default"], {
    items: state.galleryImgs,
    onSortEnd: handleSortEnd,
    onUploadSuccess: handleUploadSuccess,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355,
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
      lineNumber: 360,
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
      lineNumber: 368,
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
      lineNumber: 369,
      columnNumber: 21
    }
  }, ["description", "neighbourhood", "transit"].map(function (item) {
    return __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
      tab: item.charAt(0).toUpperCase() + item.slice(1),
      key: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375,
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
        lineNumber: 380,
        columnNumber: 37
      }
    })));
  }), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Location",
    key: "location",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 390,
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
      lineNumber: 391,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Setting",
    key: "setting",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Setting_Setting__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setting: state,
    onValuesChange: handleSettingChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Amenity",
    key: "amenity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Amenity_Amenity__WEBPACK_IMPORTED_MODULE_14__["default"], {
    amenities: state.amenities,
    onToggleOption: handleToggleAmenityOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Bedtype",
    key: "rooms",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410,
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
      lineNumber: 411,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Pricing",
    key: "pricing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_PricingCalendar_PricingCalendar__WEBPACK_IMPORTED_MODULE_22__["default"], {
    propertyId: propertyId,
    defaultPrice: state.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Similar Properties",
    key: "similar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_SimilarProperty_SimilarProperty__WEBPACK_IMPORTED_MODULE_23__["default"], {
    selectedItems: state.similarProperties,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426,
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
/* harmony import */ var _iso_components_uielements_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/components/uielements/button */ "./shared/components/uielements/button.js");
/* harmony import */ var _iso_components_Feedback_Popconfirm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @iso/components/Feedback/Popconfirm */ "./shared/components/Feedback/Popconfirm.js");
/* harmony import */ var _iso_components_Tables_HelperCells__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @iso/components/Tables/HelperCells */ "./shared/components/Tables/HelperCells.js");
/* harmony import */ var _iso_containers_Tables_AntTables_AntTables_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @iso/containers/Tables/AntTables/AntTables.styles */ "./shared/containers/Tables/AntTables/AntTables.styles.js");
/* harmony import */ var _redux_categories_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redux/categories/actions */ "./redux/categories/actions.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_properties_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @redux/properties/actions */ "./redux/properties/actions.js");


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
        lineNumber: 31,
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
        lineNumber: 37,
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
        lineNumber: 43,
        columnNumber: 29
      }
    }, object.address);
  }
}];
function SimilarProperty(props) {
  _s();

  var selectedItems = props.selectedItems;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"])(function (state) {
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
    dispatch(_redux_properties_actions__WEBPACK_IMPORTED_MODULE_15__["default"].getAllProperties());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      dataList: items
    }));
  }, [items]);
  var columns = state.columns,
      dataList = state.dataList;
  var rowSelection = {
    onChange: function onChange(selectedRowKeys, selectedRows) {
      console.log("selectedRowKeys: ".concat(selectedRowKeys), 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: function getCheckboxProps(record) {
      return {
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.id
      };
    }
  };
  return __jsx(_iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(_iso_components_utility_pageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "Category"), __jsx(_iso_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, (items === null || items === void 0 ? void 0 : items.length) === 0 ? __jsx(_iso_components_utility_helper_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "No Properties found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }) : __jsx("div", {
    className: "isoPropertyTable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 90,
      columnNumber: 25
    }
  }, __jsx(_iso_containers_Tables_AntTables_AntTables_styles__WEBPACK_IMPORTED_MODULE_12__["default"], {
    rowSelection: _objectSpread({
      type: 'checkbox'
    }, rowSelection),
    columns: columns,
    dataSource: items,
    className: "categoryListTable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 29
    }
  })))));
}

_s(SimilarProperty, "qpeHnE+SslkS2arFeVN7aen49Tk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_14__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_14__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9FZGl0UHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvU2ltaWxhclByb3BlcnR5L1NpbWlsYXJQcm9wZXJ0eS5qcyJdLCJuYW1lcyI6WyJ1cGxvYWRDYWxsYmFjayIsImZpbGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzZW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3BvbnNlIiwiSlNPTiIsInBhcnNlIiwicmVzcG9uc2VUZXh0IiwiZXJyb3IiLCJuZXdQcm9wZXJ0eSIsIm5hbWUiLCJjYXRlZ29yeSIsImJvb2tlcnZpbGxlSWQiLCJkZXNjcmlwdGlvbiIsIm5laWdoYm91cmhvb2QiLCJ0cmFuc2l0IiwiYWRkcmVzcyIsImxhdCIsImxuZyIsInJvb21zIiwiYW1lbml0aWVzIiwiZ2FsbGVyeUltZ3MiLCJmZWF0dXJlZEltZyIsInNpbWlsYXJQcm9wZXJ0aWVzIiwicHJpY2UiLCJtaW5QcmljZSIsIm1pbk1vbnRoUHJpY2UiLCJiYXRocm9vbUNvdW50IiwiYmVkcm9vbUNvdW50Iiwic2xlZXBzIiwibWluU2xlZXBzIiwiY2xlYW5pbmdGZWUiLCJ0cmFuc2FjdGlvbkZlZVJhdGUiLCJ0YXhSYXRlIiwidG91cjM2MCIsInJlZnVuZGFibGVBbW91bnQiLCJmdXJuaXNoZWQiLCJyZW50YWxQYXJraW5nIiwicGV0c0NvbnNpZGVyZWQiLCJFZGl0UHJvcGVydHkiLCJwcm9wcyIsInByb3BlcnR5SWQiLCJSZWFjdCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsIlByb3BlcnRpZXMiLCJzZWxlY3RlZEl0ZW0iLCJ1c2VFZmZlY3QiLCJwcm9wZXJ0eUFjdGlvbnMiLCJnZXRQcm9wZXJ0eSIsImlkIiwiYm9va2VydmlsbGVfaWQiLCJtaW5fcHJpY2UiLCJtaW5fbW9udGhfcHJpY2UiLCJiZWRyb29tX2NvdW50IiwiYmF0aHJvb21fY291bnQiLCJzaW1pbGFyX3Byb3BlcnRpZXMiLCJtaW5fc2xlZXBzIiwiY2xlYW5pbmdfZmVlIiwidHJhbnNhY3Rpb25mZWVfcmF0ZSIsInRheF9yYXRlIiwicmVmdW5kYWJsZV9hbW91bnQiLCJyZW5kZXJPcHRpb25WYWx1ZSIsInJlbnRhbF9wYXJraW5nIiwicGV0c19jb25zaWRlcmVkIiwicHJvcGVydHlfcm9vbXMiLCJtYXAiLCJyb29tIiwiYmVkVHlwZSIsImJlZF90eXBlIiwiZmVhdHVyZWRfaW1nIiwiZ2FsbGVyeV9pbWdzIiwiY29uc29sZSIsImxvZyIsImNhbGxiYWNrIiwia2V5IiwiaGFuZGxlU2F2ZSIsInByb3BlcnR5IiwibWFrZVJvb21zQXJyYXkiLCJpbWFnZSIsImltYWdlcyIsInVwZGF0ZVByb3BlcnR5IiwiaGFuZGxlUmVzZXQiLCJ2YWx1ZSIsImFycmF5IiwiZWRpdG9yT3B0aW9uIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsInRvb2xiYXJDbGFzc05hbWUiLCJ3cmFwcGVyQ2xhc3NOYW1lIiwiZWRpdG9yQ2xhc3NOYW1lIiwidG9vbGJhciIsImhhbmRsZVBsYWNlQ2hhbmdlIiwicGxhY2UiLCJmb3JtYXR0ZWRfYWRkcmVzcyIsImdlb21ldHJ5IiwibG9jYXRpb24iLCJoYW5kbGVQbGFjZVJlc2V0IiwiaGFuZGxlU2V0dGluZ0NoYW5nZSIsImNoYW5nZWRWYWx1ZXMiLCJhbGxWYWx1ZXMiLCJoYW5kbGVNYWluSW5mb0NoYW5nZSIsImhhbmRsZVRvZ2dsZUFtZW5pdHlPcHRpb24iLCJhbWVuaXR5SWQiLCJpbmRleCIsImluZGV4T2YiLCJzcGxpY2UiLCJwdXNoIiwiaGFuZGxlQ2hhbmdlUm9vbSIsInZhbHVlcyIsIm5ld1Jvb21zIiwiaGFuZGxlQWRkUm9vbSIsImdlbmVyYXRlZElkIiwiRGF0ZSIsImdldFRpbWUiLCJoYW5kbGVSZW1vdmVSb29tIiwicm9vbUlkIiwiZmluZEluZGV4IiwiaXRlbSIsImhhbmRsZVVwbG9hZFN1Y2Nlc3MiLCJoYW5kbGVTb3J0RW5kIiwib2xkSW5kZXgiLCJuZXdJbmRleCIsIm5ld0FycmF5IiwiYXJyYXlNb3ZlIiwiaGFuZGxlU2VsZWN0RmVhdHVyZWQiLCJyb3dTdHlsZSIsImJhc2ljU3R5bGUiLCJjb2xTdHlsZSIsImRpc3BsYXkiLCJmbGV4RmxvdyIsImFsaWduSXRlbXMiLCJvdmVyZmxvdyIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImh0bWwiLCJ0YWJsZUNvbHVtbnMiLCJ0aXRsZSIsInJlbmRlciIsIm9iamVjdCIsIlNpbWlsYXJQcm9wZXJ0eSIsInNlbGVjdGVkSXRlbXMiLCJpdGVtcyIsImxvYWRpbmciLCJjb2x1bW5zIiwiZGF0YUxpc3QiLCJnZXRBbGxQcm9wZXJ0aWVzIiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJnZXRDaGVja2JveFByb3BzIiwicmVjb3JkIiwiZGlzYWJsZWQiLCJsZW5ndGgiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkMsSUFBeEIsRUFBOEI7QUFDMUIsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDLFFBQU1DLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVo7QUFDQUQsT0FBRyxDQUFDRSxJQUFKLENB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SyxDQUFFWSxNQUFQLE1BQWtCLENBQWxCLEdBQ0csTUFBQywyRUFBRDtBQUFZLFFBQUksRUFBQyxxQkFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURILEdBR0c7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0VBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBQ3hFLFdBQUssRUFBRSxNQUFSO0FBQWdCQyxZQUFNLEVBQUU7QUFBeEIsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQywwRkFBRDtBQUNJLGdCQUFZO0FBQ1J3RSxVQUFJLEVBQUU7QUFERSxPQUVMUixZQUZLLENBRGhCO0FBS0ksV0FBTyxFQUFFSCxPQUxiO0FBTUksY0FBVSxFQUFFRixLQU5oQjtBQU9JLGFBQVMsRUFBQyxtQkFQZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixDQUxSLENBRkosQ0FESjtBQTJCSDs7R0E3RHVCRixlO1VBRUh0Ryx3RCxFQUVRQyx3RDs7O0tBSkxxRyxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Byb3BlcnR5LmE1NWQxZGNiMDAyZTk2MzYxMGI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0V3JhcHBlciBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvbGF5b3V0V3JhcHBlclwiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9ib3hcIjtcclxuaW1wb3J0IFRhYnMsIHtUYWJQYW5lfSBmcm9tIFwiQGlzby9jb21wb25lbnRzL3VpZWxlbWVudHMvdGFic1wiO1xyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L0xvY2F0aW9uL0xvY2F0aW9uXCI7XHJcbmltcG9ydCBiYXNpY1N0eWxlIGZyb20gXCJAaXNvL2Fzc2V0cy9zdHlsZXMvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7Um93LCBDb2wsIEJ1dHRvbn0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFNldHRpbmcgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L1NldHRpbmcvU2V0dGluZ1wiO1xyXG5pbXBvcnQgTWFpbiBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvTWFpbi9NYWluXCI7XHJcbmltcG9ydCBBbWVuaXR5IGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9BbWVuaXR5L0FtZW5pdHlcIjtcclxuaW1wb3J0IFJvb21zIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9Sb29tL1Jvb21zXCI7XHJcbmltcG9ydCBhcnJheU1vdmUgZnJvbSBcImFycmF5LW1vdmVcIjtcclxuaW1wb3J0IEdhbGxlcnkgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L0dhbGxlcnkvR2FsbGVyeVwiO1xyXG5pbXBvcnQgRWRpdG9yIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9FZGl0b3IvRWRpdG9yXCI7XHJcbmltcG9ydCBGZWF0dXJlZEltYWdlIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9GZWF0dXJlZEltYWdlL0ZlYXR1cmVkSW1hZ2VcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgcHJvcGVydHlBY3Rpb25zIGZyb20gXCJAcmVkdXgvcHJvcGVydGllcy9hY3Rpb25zXCI7XHJcbmltcG9ydCBQcmljaW5nQ2FsZW5kYXIgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L1ByaWNpbmdDYWxlbmRhci9QcmljaW5nQ2FsZW5kYXJcIjtcclxuaW1wb3J0IFNpbWlsYXJQcm9wZXJ0eSBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvU2ltaWxhclByb3BlcnR5L1NpbWlsYXJQcm9wZXJ0eVwiO1xyXG5cclxuZnVuY3Rpb24gdXBsb2FkQ2FsbGJhY2soZmlsZSkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwczovL2FwaS5pbWd1ci5jb20vMy9pbWFnZVwiKTtcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgXCJDbGllbnQtSUQgOGQyNmNjZDEyNzEyZmNhXCIpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgICAgICBkYXRhLmFwcGVuZChcImltYWdlXCIsIGZpbGUpO1xyXG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5jb25zdCBuZXdQcm9wZXJ0eSA9IHtcclxuICAgIG5hbWU6IFwiXCIsXHJcbiAgICBjYXRlZ29yeTogXCJcIixcclxuICAgIGJvb2tlcnZpbGxlSWQ6IFwiXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgIG5laWdoYm91cmhvb2Q6IFwiXCIsXHJcbiAgICB0cmFuc2l0OiBcIlwiLFxyXG4gICAgYWRkcmVzczogXCJcIixcclxuICAgIGxhdDogXCJcIixcclxuICAgIGxuZzogXCJcIixcclxuICAgIHJvb21zOiBbXSxcclxuICAgIGFtZW5pdGllczogW10sXHJcbiAgICBnYWxsZXJ5SW1nczogW10sXHJcbiAgICBmZWF0dXJlZEltZzogbnVsbCxcclxuICAgIHNpbWlsYXJQcm9wZXJ0aWVzOiBbXSxcclxuXHJcbiAgICBwcmljZTogXCJcIixcclxuICAgIG1pblByaWNlOiBcIlwiLFxyXG4gICAgbWluTW9udGhQcmljZTogXCJcIixcclxuICAgIGJhdGhyb29tQ291bnQ6IFwiXCIsXHJcbiAgICBiZWRyb29tQ291bnQ6IFwiXCIsXHJcbiAgICBzbGVlcHM6IFwiXCIsXHJcbiAgICBtaW5TbGVlcHM6IDIsXHJcbiAgICBjbGVhbmluZ0ZlZTogXCJcIixcclxuICAgIHRyYW5zYWN0aW9uRmVlUmF0ZTogXCJcIixcclxuICAgIHRheFJhdGU6IFwiXCIsXHJcbiAgICB0b3VyMzYwOiBcIlwiLFxyXG4gICAgcmVmdW5kYWJsZUFtb3VudDogXCJcIixcclxuICAgIGZ1cm5pc2hlZDogdHJ1ZSxcclxuICAgIHJlbnRhbFBhcmtpbmc6IHRydWUsXHJcbiAgICBwZXRzQ29uc2lkZXJlZDogdHJ1ZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRQcm9wZXJ0eShwcm9wcykge1xyXG4gICAgY29uc3Qge3Byb3BlcnR5SWR9ID0gcHJvcHM7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKG5ld1Byb3BlcnR5KTtcclxuXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7c2VsZWN0ZWRJdGVtfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuUHJvcGVydGllcyk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwcm9wZXJ0eUFjdGlvbnMuZ2V0UHJvcGVydHkocHJvcGVydHlJZCkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGAke3NlbGVjdGVkSXRlbS5pZH1gID09PSBgJHtwcm9wZXJ0eUlkfWApIHtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNlbGVjdGVkSXRlbS5pZCxcclxuICAgICAgICAgICAgICAgIGJvb2tlcnZpbGxlSWQ6IHNlbGVjdGVkSXRlbS5ib29rZXJ2aWxsZV9pZCxcclxuICAgICAgICAgICAgICAgIG5hbWU6IHNlbGVjdGVkSXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGAke3NlbGVjdGVkSXRlbS5jYXRlZ29yeX1gLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRJdGVtLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBsYXQ6IHNlbGVjdGVkSXRlbS5sYXQsXHJcbiAgICAgICAgICAgICAgICBsbmc6IHNlbGVjdGVkSXRlbS5sbmcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc2VsZWN0ZWRJdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3VyaG9vZDogc2VsZWN0ZWRJdGVtLm5laWdoYm91cmhvb2QsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0OiBzZWxlY3RlZEl0ZW0udHJhbnNpdCxcclxuICAgICAgICAgICAgICAgIHByaWNlOiBzZWxlY3RlZEl0ZW0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICBtaW5QcmljZTogc2VsZWN0ZWRJdGVtLm1pbl9wcmljZSxcclxuICAgICAgICAgICAgICAgIG1pbk1vbnRoUHJpY2U6IHNlbGVjdGVkSXRlbS5taW5fbW9udGhfcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBiZWRyb29tQ291bnQ6IHNlbGVjdGVkSXRlbS5iZWRyb29tX2NvdW50LFxyXG4gICAgICAgICAgICAgICAgYmF0aHJvb21Db3VudDogc2VsZWN0ZWRJdGVtLmJhdGhyb29tX2NvdW50LFxyXG4gICAgICAgICAgICAgICAgc2ltaWxhclByb3BlcnRpZXM6IHNlbGVjdGVkSXRlbS5zaW1pbGFyX3Byb3BlcnRpZXMsXHJcbiAgICAgICAgICAgICAgICBzbGVlcHM6IHNlbGVjdGVkSXRlbS5zbGVlcHMsXHJcbiAgICAgICAgICAgICAgICBtaW5TbGVlcHM6IHNlbGVjdGVkSXRlbS5taW5fc2xlZXBzLFxyXG4gICAgICAgICAgICAgICAgY2xlYW5pbmdGZWU6IHNlbGVjdGVkSXRlbS5jbGVhbmluZ19mZWUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2FjdGlvbkZlZVJhdGU6IHNlbGVjdGVkSXRlbS50cmFuc2FjdGlvbmZlZV9yYXRlLFxyXG4gICAgICAgICAgICAgICAgdGF4UmF0ZTogc2VsZWN0ZWRJdGVtLnRheF9yYXRlLFxyXG4gICAgICAgICAgICAgICAgcmVmdW5kYWJsZUFtb3VudDogc2VsZWN0ZWRJdGVtLnJlZnVuZGFibGVfYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdG91cjM2MDogc2VsZWN0ZWRJdGVtLnRvdXIzNjAsXHJcbiAgICAgICAgICAgICAgICBmdXJuaXNoZWQ6IHJlbmRlck9wdGlvblZhbHVlKHNlbGVjdGVkSXRlbS5mdXJuaXNoZWQpLFxyXG4gICAgICAgICAgICAgICAgcmVudGFsUGFya2luZzogcmVuZGVyT3B0aW9uVmFsdWUoc2VsZWN0ZWRJdGVtLnJlbnRhbF9wYXJraW5nKSxcclxuICAgICAgICAgICAgICAgIHBldHNDb25zaWRlcmVkOiByZW5kZXJPcHRpb25WYWx1ZShzZWxlY3RlZEl0ZW0ucGV0c19jb25zaWRlcmVkKSxcclxuICAgICAgICAgICAgICAgIHJvb21zOiBzZWxlY3RlZEl0ZW0ucHJvcGVydHlfcm9vbXMubWFwKChyb29tKSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiByb29tLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBiZWRUeXBlOiByb29tLmJlZF90eXBlLFxyXG4gICAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgICAgYW1lbml0aWVzOiBzZWxlY3RlZEl0ZW0uYW1lbml0aWVzLFxyXG4gICAgICAgICAgICAgICAgZmVhdHVyZWRJbWc6IHNlbGVjdGVkSXRlbS5mZWF0dXJlZF9pbWcsXHJcbiAgICAgICAgICAgICAgICBnYWxsZXJ5SW1nczogc2VsZWN0ZWRJdGVtLmdhbGxlcnlfaW1ncyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW3NlbGVjdGVkSXRlbV0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdGF0ZVwiLCBzdGF0ZSk7XHJcbiAgICB9LCBbc3RhdGVdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjYWxsYmFjayhrZXkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNhdmUoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHkgPSB7XHJcbiAgICAgICAgICAgIGlkOiBzZWxlY3RlZEl0ZW0uaWQsXHJcbiAgICAgICAgICAgIGJvb2tlcnZpbGxlX2lkOiBzdGF0ZS5ib29rZXJ2aWxsZUlkLFxyXG4gICAgICAgICAgICBuYW1lOiBzdGF0ZS5uYW1lLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogc3RhdGUuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHN0YXRlLmFkZHJlc3MsXHJcbiAgICAgICAgICAgIGxhdDogc3RhdGUubGF0LFxyXG4gICAgICAgICAgICBsbmc6IHN0YXRlLmxuZyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHN0YXRlLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBuZWlnaGJvdXJob29kOiBzdGF0ZS5uZWlnaGJvdXJob29kLFxyXG4gICAgICAgICAgICB0cmFuc2l0OiBzdGF0ZS50cmFuc2l0LFxyXG4gICAgICAgICAgICBwcmljZTogc3RhdGUucHJpY2UsXHJcbiAgICAgICAgICAgIG1pbl9wcmljZTogc3RhdGUubWluUHJpY2UsXHJcbiAgICAgICAgICAgIG1pbl9tb250aF9wcmljZTogc3RhdGUubWluTW9udGhQcmljZSxcclxuICAgICAgICAgICAgYmVkcm9vbV9jb3VudDogc3RhdGUuYmVkcm9vbUNvdW50LFxyXG4gICAgICAgICAgICBiYXRocm9vbV9jb3VudDogc3RhdGUuYmF0aHJvb21Db3VudCxcclxuICAgICAgICAgICAgc2ltaWxhcl9wcm9wZXJ0aWVzOiBzdGF0ZS5zaW1pbGFyUHJvcGVydGllcyxcclxuICAgICAgICAgICAgc2xlZXBzOiBzdGF0ZS5zbGVlcHMsXHJcbiAgICAgICAgICAgIG1pbl9zbGVlcHM6IHN0YXRlLm1pblNsZWVwcyxcclxuICAgICAgICAgICAgY2xlYW5pbmdfZmVlOiBzdGF0ZS5jbGVhbmluZ0ZlZSxcclxuICAgICAgICAgICAgdHJhbnNhY3Rpb25mZWVfcmF0ZTogc3RhdGUudHJhbnNhY3Rpb25GZWVSYXRlLFxyXG4gICAgICAgICAgICB0YXhfcmF0ZTogc3RhdGUudGF4UmF0ZSxcclxuICAgICAgICAgICAgcmVmdW5kYWJsZV9hbW91bnQ6IHN0YXRlLnJlZnVuZGFibGVBbW91bnQsXHJcbiAgICAgICAgICAgIHRvdXIzNjA6IHN0YXRlLnRvdXIzNjAsXHJcbiAgICAgICAgICAgIGZ1cm5pc2hlZDogc3RhdGUuZnVybmlzaGVkLFxyXG4gICAgICAgICAgICByZW50YWxfcGFya2luZzogc3RhdGUucmVudGFsUGFya2luZyxcclxuICAgICAgICAgICAgcGV0c19jb25zaWRlcmVkOiBzdGF0ZS5wZXRzQ29uc2lkZXJlZCxcclxuICAgICAgICAgICAgcHJvcGVydHlfcm9vbXM6IG1ha2VSb29tc0FycmF5KCksXHJcbiAgICAgICAgICAgIGFtZW5pdGllczogc3RhdGUuYW1lbml0aWVzLFxyXG4gICAgICAgICAgICBmZWF0dXJlZF9pbWc6IHN0YXRlLmZlYXR1cmVkSW1nLmlkLFxyXG4gICAgICAgICAgICBnYWxsZXJ5X2ltZ3M6IHN0YXRlLmdhbGxlcnlJbWdzLm1hcCgoaW1hZ2UpID0+IGltYWdlLmlkKSxcclxuICAgICAgICAgICAgaW1hZ2VzOiBzdGF0ZS5pbWFnZXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkaXNwYXRjaChwcm9wZXJ0eUFjdGlvbnMudXBkYXRlUHJvcGVydHkocHJvcGVydHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNldCgpIHtcclxuICAgICAgICBzZXRTdGF0ZSh7bmV3UHJvcGVydHl9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiByZW5kZXJPcHRpb25WYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCIxXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBcIjBcIjtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBtYWtlUm9vbXNBcnJheSgpIHtcclxuICAgICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5yb29tcy5tYXAoKHJvb20pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJvb20uaWQgPiAxMDAwMFxyXG4gICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcm9vbS5uYW1lID8gcm9vbS5uYW1lIDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBiZWRfdHlwZTogcm9vbS5iZWRUeXBlID8gcm9vbS5iZWRUeXBlIDogXCJcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiByb29tLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSA/IHJvb20ubmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVkX3R5cGU6IHJvb20uYmVkVHlwZSA/IHJvb20uYmVkVHlwZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBhcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0b3JPcHRpb24gPSB7XHJcbiAgICAgICAgc3R5bGU6IHt3aWR0aDogXCI5MCVcIiwgaGVpZ2h0OiBcIjcwJVwifSxcclxuICAgICAgICB0b29sYmFyQ2xhc3NOYW1lOiBcImhvbWUtdG9vbGJhclwiLFxyXG4gICAgICAgIHdyYXBwZXJDbGFzc05hbWU6IFwiaG9tZS13cmFwcGVyXCIsXHJcbiAgICAgICAgZWRpdG9yQ2xhc3NOYW1lOiBcImhvbWUtZWRpdG9yXCIsXHJcbiAgICAgICAgdXBsb2FkQ2FsbGJhY2s6IHVwbG9hZENhbGxiYWNrLFxyXG4gICAgICAgIHRvb2xiYXI6IHtpbWFnZToge3VwbG9hZENhbGxiYWNrOiB1cGxvYWRDYWxsYmFja319LFxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQbGFjZUNoYW5nZShwbGFjZSkge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzLFxyXG4gICAgICAgICAgICBsYXQ6IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpLFxyXG4gICAgICAgICAgICBsbmc6IHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYWNlUmVzZXQoKSB7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkcmVzczogXCJcIixcclxuICAgICAgICAgICAgbGF0OiBcIlwiLFxyXG4gICAgICAgICAgICBsbmc6IFwiXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2V0dGluZ0NoYW5nZShjaGFuZ2VkVmFsdWVzLCBhbGxWYWx1ZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVNldHRpbmdDaGFuZ2VcIiwgY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKTtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAuLi5hbGxWYWx1ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlTWFpbkluZm9DaGFuZ2UoY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVNYWluSW5mb0NoYW5nZVwiLCBjaGFuZ2VkVmFsdWVzLCBhbGxWYWx1ZXMpO1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIC4uLmFsbFZhbHVlcyxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVUb2dnbGVBbWVuaXR5T3B0aW9uKGFtZW5pdHlJZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYW1lbml0eUlkXCIsIHN0YXRlLmFtZW5pdGllcywgYW1lbml0eUlkKTtcclxuICAgICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5hbWVuaXRpZXM7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyYXkuaW5kZXhPZihhbWVuaXR5SWQpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgYW1lbml0aWVzOiBhcnJheSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYXJyYXkucHVzaChhbWVuaXR5SWQpO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFtZW5pdGllczogYXJyYXksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVRvZ2dsZUFtZW5pdHlPcHRpb25cIiwgYXJyYXksIHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VSb29tKHZhbHVlcywgaWQpIHtcclxuICAgICAgICBjb25zdCBuZXdSb29tcyA9IHN0YXRlLnJvb21zLm1hcCgocm9vbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJvb20uaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnJvb20sXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udmFsdWVzLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcm9vbTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUNoYW5nZVJvb21cIiwgbmV3Um9vbXMpO1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgcm9vbXM6IG5ld1Jvb21zfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkUm9vbSgpIHtcclxuICAgICAgICBjb25zdCBnZW5lcmF0ZWRJZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXJyYXlcIiwgYXJyYXksIGdlbmVyYXRlZElkKTtcclxuICAgICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5yb29tcztcclxuICAgICAgICBhcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgaWQ6IGdlbmVyYXRlZElkLFxyXG4gICAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBiZWRUeXBlOiBcIlFcIixcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZUFkZFJvb21cIiwgYXJyYXkpO1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHJvb21zOiBhcnJheSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZW1vdmVSb29tKHJvb21JZCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlUmVtb3ZlUm9vbVwiLCByb29tSWQpO1xyXG4gICAgICAgIGxldCBhcnJheSA9IHN0YXRlLnJvb21zO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5LmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcm9vbUlkKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBhcnJheVtpbmRleF0ubmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIGFycmF5W2luZGV4XS5iZWRUeXBlID0gXCJcIjtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICByb29tczogYXJyYXksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVVcGxvYWRTdWNjZXNzKGltYWdlKSB7XHJcbiAgICAgICAgY29uc3Qge2dhbGxlcnlJbWdzfSA9IHN0YXRlO1xyXG4gICAgICAgIGdhbGxlcnlJbWdzLnB1c2goaW1hZ2UpO1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgZ2FsbGVyeUltZ3N9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTb3J0RW5kKHtvbGRJbmRleCwgbmV3SW5kZXh9KSB7XHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBhcnJheU1vdmUoc3RhdGUuZ2FsbGVyeUltZ3MsIG9sZEluZGV4LCBuZXdJbmRleCk7XHJcblxyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGdhbGxlcnlJbWdzOiBuZXdBcnJheSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTZWxlY3RGZWF0dXJlZChpbWFnZSkge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgZmVhdHVyZWRJbWc6IGltYWdlfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge3Jvd1N0eWxlLCBjb2xTdHlsZX0gPSBiYXNpY1N0eWxlO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgb25DbGljaz17aGFuZGxlU2F2ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJkZWZhdWx0XCIgb25DbGljaz17aGFuZGxlUmVzZXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIFJlc2V0XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleEZsb3c6IFwicm93IHdyYXBcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgPFJvdyBzdHlsZT17cm93U3R5bGV9IGd1dHRlcj17MH0ganVzdGlmeT1cInN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXs4fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fSBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46IFwiMCAyMHB4XCIsIGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBwYWRkaW5nOiAyMH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGUubmFtZSAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWFpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e3N0YXRlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9va2VydmlsbGVJZD17c3RhdGUuYm9va2VydmlsbGVJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeT17c3RhdGUuY2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e2hhbmRsZU1haW5JbmZvQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHYWxsZXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17c3RhdGUuZ2FsbGVyeUltZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNvcnRFbmQ9e2hhbmRsZVNvcnRFbmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblVwbG9hZFN1Y2Nlc3M9e2hhbmRsZVVwbG9hZFN1Y2Nlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGZWF0dXJlZEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17c3RhdGUuZ2FsbGVyeUltZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW09e3N0YXRlLmZlYXR1cmVkSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRTdWNjZXNzPXtoYW5kbGVVcGxvYWRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3RJbWFnZT17aGFuZGxlU2VsZWN0RmVhdHVyZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbGc9ezE2fSBtZD17MTJ9IHNtPXsyNH0geHM9ezI0fSBzdHlsZT17Y29sU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUYWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2NhbGxiYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpbjogXCIwIDIwcHhcIiwgYmFja2dyb3VuZDogXCIjZmZmXCIsIHBhZGRpbmc6IDIwfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtbXCJkZXNjcmlwdGlvblwiLCBcIm5laWdoYm91cmhvb2RcIiwgXCJ0cmFuc2l0XCJdLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWI9e2l0ZW0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBpdGVtLnNsaWNlKDEpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdGU/LltpdGVtXSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5lZGl0b3JPcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBodG1sPXtzdGF0ZVtpdGVtXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRWRpdG9yU3RhdGVDaGFuZ2U9eyhodG1sKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgW2l0ZW1dOiBodG1sfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiTG9jYXRpb25cIiBrZXk9XCJsb2NhdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17c3RhdGUuYWRkcmVzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZW50ZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0OiBzdGF0ZS5sYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxuZzogc3RhdGUubG5nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25QbGFjZUNoYW5nZT17aGFuZGxlUGxhY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNldD17aGFuZGxlUGxhY2VSZXNldH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiU2V0dGluZ1wiIGtleT1cInNldHRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nIHNldHRpbmc9e3N0YXRlfSBvblZhbHVlc0NoYW5nZT17aGFuZGxlU2V0dGluZ0NoYW5nZX0vPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIkFtZW5pdHlcIiBrZXk9XCJhbWVuaXR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW1lbml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFtZW5pdGllcz17c3RhdGUuYW1lbml0aWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVG9nZ2xlT3B0aW9uPXtoYW5kbGVUb2dnbGVBbWVuaXR5T3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCJCZWR0eXBlXCIga2V5PVwicm9vbXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSb29tc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb21zPXtzdGF0ZS5yb29tc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJvb21DaGFuZ2U9e2hhbmRsZUNoYW5nZVJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BZGRSb29tPXtoYW5kbGVBZGRSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVtb3ZlUm9vbT17aGFuZGxlUmVtb3ZlUm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblZhbHVlc0NoYW5nZT17aGFuZGxlU2V0dGluZ0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiUHJpY2luZ1wiIGtleT1cInByaWNpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUlkPXtwcm9wZXJ0eUlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcmljZT17c3RhdGUucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIlNpbWlsYXIgUHJvcGVydGllc1wiIGtleT1cInNpbWlsYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaW1pbGFyUHJvcGVydHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzdGF0ZS5zaW1pbGFyUHJvcGVydGllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9MYXlvdXRXcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsb25lIGZyb20gXCJjbG9uZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2JveFwiO1xyXG5pbXBvcnQgSGVscGVyVGV4dCBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvaGVscGVyLXRleHRcIjtcclxuaW1wb3J0IExheW91dFdyYXBwZXIgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2xheW91dFdyYXBwZXJcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L3BhZ2VIZWFkZXJcIjtcclxuaW1wb3J0IFNjcm9sbGJhcnMgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2N1c3RvbVNjcm9sbEJhclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9idXR0b25cIjtcclxuaW1wb3J0IFBvcGNvbmZpcm0gZnJvbSBcIkBpc28vY29tcG9uZW50cy9GZWVkYmFjay9Qb3Bjb25maXJtXCI7XHJcbmltcG9ydCB7XHJcbiAgICBEYXRlQ2VsbCxcclxuICAgIEltYWdlQ2VsbCxcclxuICAgIExpbmtDZWxsLFxyXG4gICAgVGV4dENlbGwsXHJcbn0gZnJvbSBcIkBpc28vY29tcG9uZW50cy9UYWJsZXMvSGVscGVyQ2VsbHNcIjtcclxuaW1wb3J0IHtFZGl0T3V0bGluZWQsIERlbGV0ZU91dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFRhYmxlV3JhcHBlciBmcm9tIFwiQGlzby9jb250YWluZXJzL1RhYmxlcy9BbnRUYWJsZXMvQW50VGFibGVzLnN0eWxlc1wiO1xyXG5cclxuaW1wb3J0IGNhdGVnb3J5QWN0aW9ucyBmcm9tIFwiQHJlZHV4L2NhdGVnb3JpZXMvYWN0aW9uc1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7RGl2aWRlciwgUmFkaW99IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBwcm9wZXJ0eUFjdGlvbnMgZnJvbSBcIkByZWR1eC9wcm9wZXJ0aWVzL2FjdGlvbnNcIjtcclxuXHJcblxyXG5jb25zdCB0YWJsZUNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSURcIixcclxuICAgICAgICBrZXk6IFwiaWRcIixcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHJlbmRlcjogKG9iamVjdCkgPT4gPHA+e29iamVjdC5pZH08L3A+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJOYW1lXCIsXHJcbiAgICAgICAga2V5OiBcIm5hbWVcIixcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHJlbmRlcjogKG9iamVjdCkgPT4gPHA+e29iamVjdC5uYW1lfTwvcD4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkFkZHJlc3NcIixcclxuICAgICAgICBrZXk6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgcmVuZGVyOiAob2JqZWN0KSA9PiA8cD57b2JqZWN0LmFkZHJlc3N9PC9wPixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1pbGFyUHJvcGVydHkocHJvcHMpIHtcclxuICAgIGNvbnN0IHtzZWxlY3RlZEl0ZW1zfSA9IHByb3BzXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qge2l0ZW1zLCBsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuUHJvcGVydGllcyk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjb2x1bW5zOiB0YWJsZUNvbHVtbnMsXHJcbiAgICAgICAgZGF0YUxpc3Q6IGl0ZW1zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwcm9wZXJ0eUFjdGlvbnMuZ2V0QWxsUHJvcGVydGllcygpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGRhdGFMaXN0OiBpdGVtcyxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtpdGVtc10pO1xyXG5cclxuICAgIGNvbnN0IHtjb2x1bW5zLCBkYXRhTGlzdH0gPSBzdGF0ZTtcclxuXHJcbiAgICBjb25zdCByb3dTZWxlY3Rpb24gPSB7XHJcbiAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRSb3dLZXlzOiAke3NlbGVjdGVkUm93S2V5c31gLCAnc2VsZWN0ZWRSb3dzOiAnLCBzZWxlY3RlZFJvd3MpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q2hlY2tib3hQcm9wczogKHJlY29yZCkgPT4gKHtcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IHJlY29yZC5uYW1lID09PSAnRGlzYWJsZWQgVXNlcicsXHJcbiAgICAgICAgICAgIC8vIENvbHVtbiBjb25maWd1cmF0aW9uIG5vdCB0byBiZSBjaGVja2VkXHJcbiAgICAgICAgICAgIG5hbWU6IHJlY29yZC5pZCxcclxuICAgICAgICB9KSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0V3JhcHBlcj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXI+Q2F0ZWdvcnk8L1BhZ2VIZWFkZXI+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcblxyXG4gICAgICAgICAgICAgICAge2l0ZW1zPy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlbHBlclRleHQgdGV4dD1cIk5vIFByb3BlcnRpZXMgZm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvUHJvcGVydHlUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsYmFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJjYWxjKDYwdmggLSA3MHB4KVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdGlvbj17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY2hlY2tib3gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yb3dTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtjb2x1bW5zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhdGVnb3J5TGlzdFRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvTGF5b3V0V3JhcHBlcj5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==