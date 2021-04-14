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
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/col */ "./node_modules/antd/lib/col/index.js");
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/row */ "./node_modules/antd/lib/row/index.js");
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_2__);
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
  }, __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    gutter: 32,
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
  }, "Reset")), __jsx(antd_lib_row__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340,
      columnNumber: 13
    }
  }, __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
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
      lineNumber: 342,
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
      lineNumber: 344,
      columnNumber: 29
    }
  }), __jsx(_components_Admin_Property_Gallery_Gallery__WEBPACK_IMPORTED_MODULE_17__["default"], {
    items: state.galleryImgs,
    onSortEnd: handleSortEnd,
    onUploadSuccess: handleUploadSuccess,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352,
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
      lineNumber: 357,
      columnNumber: 25
    }
  }))), __jsx(antd_lib_col__WEBPACK_IMPORTED_MODULE_1___default.a, {
    lg: 16,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 365,
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
      lineNumber: 366,
      columnNumber: 21
    }
  }, ["description", "neighbourhood", "transit"].map(function (item) {
    return __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
      tab: item.charAt(0).toUpperCase() + item.slice(1),
      key: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
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
        lineNumber: 377,
        columnNumber: 37
      }
    })));
  }), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Location",
    key: "location",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
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
      lineNumber: 388,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Setting",
    key: "setting",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Setting_Setting__WEBPACK_IMPORTED_MODULE_12__["default"], {
    setting: state,
    onValuesChange: handleSettingChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Amenity",
    key: "amenity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_Amenity_Amenity__WEBPACK_IMPORTED_MODULE_14__["default"], {
    amenities: state.amenities,
    onToggleOption: handleToggleAmenityOption,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Bedtype",
    key: "rooms",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407,
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
      lineNumber: 408,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Pricing",
    key: "pricing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_PricingCalendar_PricingCalendar__WEBPACK_IMPORTED_MODULE_22__["default"], {
    propertyId: propertyId,
    defaultPrice: state.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417,
      columnNumber: 29
    }
  })), __jsx(_iso_components_uielements_tabs__WEBPACK_IMPORTED_MODULE_9__["TabPane"], {
    tab: "Similar Properties",
    key: "similar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 25
    }
  }, __jsx(_components_Admin_Property_SimilarProperty_SimilarProperty__WEBPACK_IMPORTED_MODULE_23__["default"], {
    selectedItems: state.similarProperties,
    onRowSelection: handleSimilarPropertyChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 423,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9FZGl0UHJvcGVydHkuanMiXSwibmFtZXMiOlsidXBsb2FkQ2FsbGJhY2siLCJmaWxlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwiZGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNwb25zZSIsIkpTT04iLCJwYXJzZSIsInJlc3BvbnNlVGV4dCIsImVycm9yIiwibmV3UHJvcGVydHkiLCJuYW1lIiwiY2F0ZWdvcnkiLCJib29rZXJ2aWxsZUlkIiwiZGVzY3JpcHRpb24iLCJuZWlnaGJvdXJob29kIiwidHJhbnNpdCIsImFkZHJlc3MiLCJsYXQiLCJsbmciLCJyb29tcyIsImFtZW5pdGllcyIsImdhbGxlcnlJbWdzIiwiZmVhdHVyZWRJbWciLCJzaW1pbGFyUHJvcGVydGllcyIsInByaWNlIiwibWluUHJpY2UiLCJtaW5Nb250aFByaWNlIiwiYmF0aHJvb21Db3VudCIsImJlZHJvb21Db3VudCIsInNsZWVwcyIsIm1pblNsZWVwcyIsImNsZWFuaW5nRmVlIiwidHJhbnNhY3Rpb25GZWVSYXRlIiwidGF4UmF0ZSIsInRvdXIzNjAiLCJyZWZ1bmRhYmxlQW1vdW50IiwiZnVybmlzaGVkIiwicmVudGFsUGFya2luZyIsInBldHNDb25zaWRlcmVkIiwiRWRpdFByb3BlcnR5IiwicHJvcHMiLCJwcm9wZXJ0eUlkIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0YXRlIiwic2V0U3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJQcm9wZXJ0aWVzIiwic2VsZWN0ZWRJdGVtIiwidXNlRWZmZWN0IiwicHJvcGVydHlBY3Rpb25zIiwiZ2V0UHJvcGVydHkiLCJpZCIsImJvb2tlcnZpbGxlX2lkIiwibWluX3ByaWNlIiwibWluX21vbnRoX3ByaWNlIiwiYmVkcm9vbV9jb3VudCIsImJhdGhyb29tX2NvdW50Iiwic2ltaWxhcl9wcm9wZXJ0aWVzIiwibWluX3NsZWVwcyIsImNsZWFuaW5nX2ZlZSIsInRyYW5zYWN0aW9uZmVlX3JhdGUiLCJ0YXhfcmF0ZSIsInJlZnVuZGFibGVfYW1vdW50IiwicmVuZGVyT3B0aW9uVmFsdWUiLCJyZW50YWxfcGFya2luZyIsInBldHNfY29uc2lkZXJlZCIsInByb3BlcnR5X3Jvb21zIiwibWFwIiwicm9vbSIsImJlZFR5cGUiLCJiZWRfdHlwZSIsImZlYXR1cmVkX2ltZyIsImdhbGxlcnlfaW1ncyIsImNvbnNvbGUiLCJsb2ciLCJjYWxsYmFjayIsImtleSIsImhhbmRsZVNhdmUiLCJwcm9wZXJ0eSIsIm1ha2VSb29tc0FycmF5IiwiaW1hZ2UiLCJpbWFnZXMiLCJ1cGRhdGVQcm9wZXJ0eSIsImhhbmRsZVJlc2V0IiwidmFsdWUiLCJhcnJheSIsImVkaXRvck9wdGlvbiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJ0b29sYmFyQ2xhc3NOYW1lIiwid3JhcHBlckNsYXNzTmFtZSIsImVkaXRvckNsYXNzTmFtZSIsInRvb2xiYXIiLCJoYW5kbGVQbGFjZUNoYW5nZSIsInBsYWNlIiwiZm9ybWF0dGVkX2FkZHJlc3MiLCJnZW9tZXRyeSIsImxvY2F0aW9uIiwiaGFuZGxlUGxhY2VSZXNldCIsImhhbmRsZVNldHRpbmdDaGFuZ2UiLCJjaGFuZ2VkVmFsdWVzIiwiYWxsVmFsdWVzIiwiaGFuZGxlTWFpbkluZm9DaGFuZ2UiLCJoYW5kbGVUb2dnbGVBbWVuaXR5T3B0aW9uIiwiYW1lbml0eUlkIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwicHVzaCIsImhhbmRsZUNoYW5nZVJvb20iLCJ2YWx1ZXMiLCJuZXdSb29tcyIsImhhbmRsZUFkZFJvb20iLCJnZW5lcmF0ZWRJZCIsIkRhdGUiLCJnZXRUaW1lIiwiaGFuZGxlUmVtb3ZlUm9vbSIsInJvb21JZCIsImZpbmRJbmRleCIsIml0ZW0iLCJoYW5kbGVVcGxvYWRTdWNjZXNzIiwiaGFuZGxlU29ydEVuZCIsIm9sZEluZGV4IiwibmV3SW5kZXgiLCJuZXdBcnJheSIsImFycmF5TW92ZSIsImhhbmRsZVNlbGVjdEZlYXR1cmVkIiwiaGFuZGxlU2ltaWxhclByb3BlcnR5Q2hhbmdlIiwicHJvcGVydHlJZHMiLCJyb3dTdHlsZSIsImJhc2ljU3R5bGUiLCJjb2xTdHlsZSIsIm1hcmdpbiIsImJhY2tncm91bmQiLCJwYWRkaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxJQUF4QixFQUE4QjtBQUMxQixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsUUFBTUMsR0FBRyxHQUFHLElBQUlDLGNBQUosRUFBWjtBQUNBRCxPQUFHLENBQUNFLElBQUosQ0FBUyxNQUFULEVBQWlCLCtCQUFqQjtBQUNBRixPQUFHLENBQUNHLGdCQUFKLENBQXFCLGVBQXJCLEVBQXNDLDJCQUF0QztBQUNBLFFBQU1DLElBQUksR0FBRyxJQUFJQyxRQUFKLEVBQWI7QUFDQUQsUUFBSSxDQUFDRSxNQUFMLENBQVksT0FBWixFQUFxQlYsSUFBckI7QUFDQUksT0FBRyxDQUFDTyxJQUFKLENBQVNILElBQVQ7QUFDQUosT0FBRyxDQUFDUSxnQkFBSixDQUFxQixNQUFyQixFQUE2QixZQUFNO0FBQy9CLFVBQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdYLEdBQUcsQ0FBQ1ksWUFBZixDQUFqQjtBQUNBZCxhQUFPLENBQUNXLFFBQUQsQ0FBUDtBQUNI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O0FBRUksZ0JBQVksRUFBRUcsS0FBSyxDQUFDcEIsS0FGeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBbERKLEVBd0RJLE1BQUMsdUVBQUQ7QUFBUyxPQUFHLEVBQUMsb0JBQWI7QUFBa0MsT0FBRyxFQUFDLFNBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1HQUFEO0FBQ0ksaUJBQWEsRUFBRW9CLEtBQUssQ0FBQ3JCLGlCQUR6QjtBQUVJLGtCQUFjLEVBQUU0RywyQkFGcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBeERKLENBREosQ0F6QkosQ0FWSixDQURKO0FBd0dIOztHQXhXdUI1RixZO1VBSUhRLHdELEVBQ01DLHdEOzs7S0FMSFQsWSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9wcm9wZXJ0eS5hMTMyZTYyZDdjNGFjNTZhYTI4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExheW91dFdyYXBwZXIgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2xheW91dFdyYXBwZXJcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvYm94XCI7XHJcbmltcG9ydCBUYWJzLCB7VGFiUGFuZX0gZnJvbSBcIkBpc28vY29tcG9uZW50cy91aWVsZW1lbnRzL3RhYnNcIjtcclxuaW1wb3J0IExvY2F0aW9uIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9Mb2NhdGlvbi9Mb2NhdGlvblwiO1xyXG5pbXBvcnQgYmFzaWNTdHlsZSBmcm9tIFwiQGlzby9hc3NldHMvc3R5bGVzL2NvbnN0YW50c1wiO1xyXG5pbXBvcnQge1JvdywgQ29sLCBCdXR0b259IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBTZXR0aW5nIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9TZXR0aW5nL1NldHRpbmdcIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L01haW4vTWFpblwiO1xyXG5pbXBvcnQgQW1lbml0eSBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvQW1lbml0eS9BbWVuaXR5XCI7XHJcbmltcG9ydCBSb29tcyBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvUm9vbS9Sb29tc1wiO1xyXG5pbXBvcnQgYXJyYXlNb3ZlIGZyb20gXCJhcnJheS1tb3ZlXCI7XHJcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9HYWxsZXJ5L0dhbGxlcnlcIjtcclxuaW1wb3J0IEVkaXRvciBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvRWRpdG9yL0VkaXRvclwiO1xyXG5pbXBvcnQgRmVhdHVyZWRJbWFnZSBmcm9tIFwiQGNvbXBvbmVudHMvQWRtaW4vUHJvcGVydHkvRmVhdHVyZWRJbWFnZS9GZWF0dXJlZEltYWdlXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHByb3BlcnR5QWN0aW9ucyBmcm9tIFwiQHJlZHV4L3Byb3BlcnRpZXMvYWN0aW9uc1wiO1xyXG5pbXBvcnQgUHJpY2luZ0NhbGVuZGFyIGZyb20gXCJAY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9QcmljaW5nQ2FsZW5kYXIvUHJpY2luZ0NhbGVuZGFyXCI7XHJcbmltcG9ydCBTaW1pbGFyUHJvcGVydHkgZnJvbSBcIkBjb21wb25lbnRzL0FkbWluL1Byb3BlcnR5L1NpbWlsYXJQcm9wZXJ0eS9TaW1pbGFyUHJvcGVydHlcIjtcclxuXHJcbmZ1bmN0aW9uIHVwbG9hZENhbGxiYWNrKGZpbGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9hcGkuaW1ndXIuY29tLzMvaW1hZ2VcIik7XHJcbiAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsIFwiQ2xpZW50LUlEIDhkMjZjY2QxMjcxMmZjYVwiKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBmaWxlKTtcclxuICAgICAgICB4aHIuc2VuZChkYXRhKTtcclxuICAgICAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgbmV3UHJvcGVydHkgPSB7XHJcbiAgICBuYW1lOiBcIlwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICBib29rZXJ2aWxsZUlkOiBcIlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiXCIsXHJcbiAgICBuZWlnaGJvdXJob29kOiBcIlwiLFxyXG4gICAgdHJhbnNpdDogXCJcIixcclxuICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICBsYXQ6IFwiXCIsXHJcbiAgICBsbmc6IFwiXCIsXHJcbiAgICByb29tczogW10sXHJcbiAgICBhbWVuaXRpZXM6IFtdLFxyXG4gICAgZ2FsbGVyeUltZ3M6IFtdLFxyXG4gICAgZmVhdHVyZWRJbWc6IG51bGwsXHJcbiAgICBzaW1pbGFyUHJvcGVydGllczogW10sXHJcblxyXG4gICAgcHJpY2U6IFwiXCIsXHJcbiAgICBtaW5QcmljZTogXCJcIixcclxuICAgIG1pbk1vbnRoUHJpY2U6IFwiXCIsXHJcbiAgICBiYXRocm9vbUNvdW50OiBcIlwiLFxyXG4gICAgYmVkcm9vbUNvdW50OiBcIlwiLFxyXG4gICAgc2xlZXBzOiBcIlwiLFxyXG4gICAgbWluU2xlZXBzOiAyLFxyXG4gICAgY2xlYW5pbmdGZWU6IFwiXCIsXHJcbiAgICB0cmFuc2FjdGlvbkZlZVJhdGU6IFwiXCIsXHJcbiAgICB0YXhSYXRlOiBcIlwiLFxyXG4gICAgdG91cjM2MDogXCJcIixcclxuICAgIHJlZnVuZGFibGVBbW91bnQ6IFwiXCIsXHJcbiAgICBmdXJuaXNoZWQ6IHRydWUsXHJcbiAgICByZW50YWxQYXJraW5nOiB0cnVlLFxyXG4gICAgcGV0c0NvbnNpZGVyZWQ6IHRydWUsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0UHJvcGVydHkocHJvcHMpIHtcclxuICAgIGNvbnN0IHtwcm9wZXJ0eUlkfSA9IHByb3BzO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZShuZXdQcm9wZXJ0eSk7XHJcblxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3Qge3NlbGVjdGVkSXRlbX0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlByb3BlcnRpZXMpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHJvcGVydHlBY3Rpb25zLmdldFByb3BlcnR5KHByb3BlcnR5SWQpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChgJHtzZWxlY3RlZEl0ZW0uaWR9YCA9PT0gYCR7cHJvcGVydHlJZH1gKSB7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGlkOiBzZWxlY3RlZEl0ZW0uaWQsXHJcbiAgICAgICAgICAgICAgICBib29rZXJ2aWxsZUlkOiBzZWxlY3RlZEl0ZW0uYm9va2VydmlsbGVfaWQsXHJcbiAgICAgICAgICAgICAgICBuYW1lOiBzZWxlY3RlZEl0ZW0ubmFtZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBgJHtzZWxlY3RlZEl0ZW0uY2F0ZWdvcnl9YCxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IHNlbGVjdGVkSXRlbS5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgbGF0OiBzZWxlY3RlZEl0ZW0ubGF0LFxyXG4gICAgICAgICAgICAgICAgbG5nOiBzZWxlY3RlZEl0ZW0ubG5nLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHNlbGVjdGVkSXRlbS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIG5laWdoYm91cmhvb2Q6IHNlbGVjdGVkSXRlbS5uZWlnaGJvdXJob29kLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdDogc2VsZWN0ZWRJdGVtLnRyYW5zaXQsXHJcbiAgICAgICAgICAgICAgICBwcmljZTogc2VsZWN0ZWRJdGVtLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgbWluUHJpY2U6IHNlbGVjdGVkSXRlbS5taW5fcHJpY2UsXHJcbiAgICAgICAgICAgICAgICBtaW5Nb250aFByaWNlOiBzZWxlY3RlZEl0ZW0ubWluX21vbnRoX3ByaWNlLFxyXG4gICAgICAgICAgICAgICAgYmVkcm9vbUNvdW50OiBzZWxlY3RlZEl0ZW0uYmVkcm9vbV9jb3VudCxcclxuICAgICAgICAgICAgICAgIGJhdGhyb29tQ291bnQ6IHNlbGVjdGVkSXRlbS5iYXRocm9vbV9jb3VudCxcclxuICAgICAgICAgICAgICAgIHNpbWlsYXJQcm9wZXJ0aWVzOiBzZWxlY3RlZEl0ZW0uc2ltaWxhcl9wcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgc2xlZXBzOiBzZWxlY3RlZEl0ZW0uc2xlZXBzLFxyXG4gICAgICAgICAgICAgICAgbWluU2xlZXBzOiBzZWxlY3RlZEl0ZW0ubWluX3NsZWVwcyxcclxuICAgICAgICAgICAgICAgIGNsZWFuaW5nRmVlOiBzZWxlY3RlZEl0ZW0uY2xlYW5pbmdfZmVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb25GZWVSYXRlOiBzZWxlY3RlZEl0ZW0udHJhbnNhY3Rpb25mZWVfcmF0ZSxcclxuICAgICAgICAgICAgICAgIHRheFJhdGU6IHNlbGVjdGVkSXRlbS50YXhfcmF0ZSxcclxuICAgICAgICAgICAgICAgIHJlZnVuZGFibGVBbW91bnQ6IHNlbGVjdGVkSXRlbS5yZWZ1bmRhYmxlX2Ftb3VudCxcclxuICAgICAgICAgICAgICAgIHRvdXIzNjA6IHNlbGVjdGVkSXRlbS50b3VyMzYwLFxyXG4gICAgICAgICAgICAgICAgZnVybmlzaGVkOiByZW5kZXJPcHRpb25WYWx1ZShzZWxlY3RlZEl0ZW0uZnVybmlzaGVkKSxcclxuICAgICAgICAgICAgICAgIHJlbnRhbFBhcmtpbmc6IHJlbmRlck9wdGlvblZhbHVlKHNlbGVjdGVkSXRlbS5yZW50YWxfcGFya2luZyksXHJcbiAgICAgICAgICAgICAgICBwZXRzQ29uc2lkZXJlZDogcmVuZGVyT3B0aW9uVmFsdWUoc2VsZWN0ZWRJdGVtLnBldHNfY29uc2lkZXJlZCksXHJcbiAgICAgICAgICAgICAgICByb29tczogc2VsZWN0ZWRJdGVtLnByb3BlcnR5X3Jvb21zLm1hcCgocm9vbSkgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcm9vbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByb29tLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVkVHlwZTogcm9vbS5iZWRfdHlwZSxcclxuICAgICAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgICAgIGFtZW5pdGllczogc2VsZWN0ZWRJdGVtLmFtZW5pdGllcyxcclxuICAgICAgICAgICAgICAgIGZlYXR1cmVkSW1nOiBzZWxlY3RlZEl0ZW0uZmVhdHVyZWRfaW1nLFxyXG4gICAgICAgICAgICAgICAgZ2FsbGVyeUltZ3M6IHNlbGVjdGVkSXRlbS5nYWxsZXJ5X2ltZ3MsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtzZWxlY3RlZEl0ZW1dKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3RhdGVcIiwgc3RhdGUpO1xyXG4gICAgfSwgW3N0YXRlXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gY2FsbGJhY2soa2V5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTYXZlKCkge1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnR5ID0ge1xyXG4gICAgICAgICAgICBpZDogc2VsZWN0ZWRJdGVtLmlkLFxyXG4gICAgICAgICAgICBib29rZXJ2aWxsZV9pZDogc3RhdGUuYm9va2VydmlsbGVJZCxcclxuICAgICAgICAgICAgbmFtZTogc3RhdGUubmFtZSxcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHN0YXRlLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBzdGF0ZS5hZGRyZXNzLFxyXG4gICAgICAgICAgICBsYXQ6IHN0YXRlLmxhdCxcclxuICAgICAgICAgICAgbG5nOiBzdGF0ZS5sbmcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzdGF0ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgbmVpZ2hib3VyaG9vZDogc3RhdGUubmVpZ2hib3VyaG9vZCxcclxuICAgICAgICAgICAgdHJhbnNpdDogc3RhdGUudHJhbnNpdCxcclxuICAgICAgICAgICAgcHJpY2U6IHN0YXRlLnByaWNlLFxyXG4gICAgICAgICAgICBtaW5fcHJpY2U6IHN0YXRlLm1pblByaWNlLFxyXG4gICAgICAgICAgICBtaW5fbW9udGhfcHJpY2U6IHN0YXRlLm1pbk1vbnRoUHJpY2UsXHJcbiAgICAgICAgICAgIGJlZHJvb21fY291bnQ6IHN0YXRlLmJlZHJvb21Db3VudCxcclxuICAgICAgICAgICAgYmF0aHJvb21fY291bnQ6IHN0YXRlLmJhdGhyb29tQ291bnQsXHJcbiAgICAgICAgICAgIHNpbWlsYXJfcHJvcGVydGllczogc3RhdGUuc2ltaWxhclByb3BlcnRpZXMsXHJcbiAgICAgICAgICAgIHNsZWVwczogc3RhdGUuc2xlZXBzLFxyXG4gICAgICAgICAgICBtaW5fc2xlZXBzOiBzdGF0ZS5taW5TbGVlcHMsXHJcbiAgICAgICAgICAgIGNsZWFuaW5nX2ZlZTogc3RhdGUuY2xlYW5pbmdGZWUsXHJcbiAgICAgICAgICAgIHRyYW5zYWN0aW9uZmVlX3JhdGU6IHN0YXRlLnRyYW5zYWN0aW9uRmVlUmF0ZSxcclxuICAgICAgICAgICAgdGF4X3JhdGU6IHN0YXRlLnRheFJhdGUsXHJcbiAgICAgICAgICAgIHJlZnVuZGFibGVfYW1vdW50OiBzdGF0ZS5yZWZ1bmRhYmxlQW1vdW50LFxyXG4gICAgICAgICAgICB0b3VyMzYwOiBzdGF0ZS50b3VyMzYwLFxyXG4gICAgICAgICAgICBmdXJuaXNoZWQ6IHN0YXRlLmZ1cm5pc2hlZCxcclxuICAgICAgICAgICAgcmVudGFsX3Bhcmtpbmc6IHN0YXRlLnJlbnRhbFBhcmtpbmcsXHJcbiAgICAgICAgICAgIHBldHNfY29uc2lkZXJlZDogc3RhdGUucGV0c0NvbnNpZGVyZWQsXHJcbiAgICAgICAgICAgIHByb3BlcnR5X3Jvb21zOiBtYWtlUm9vbXNBcnJheSgpLFxyXG4gICAgICAgICAgICBhbWVuaXRpZXM6IHN0YXRlLmFtZW5pdGllcyxcclxuICAgICAgICAgICAgZmVhdHVyZWRfaW1nOiBzdGF0ZS5mZWF0dXJlZEltZy5pZCxcclxuICAgICAgICAgICAgZ2FsbGVyeV9pbWdzOiBzdGF0ZS5nYWxsZXJ5SW1ncy5tYXAoKGltYWdlKSA9PiBpbWFnZS5pZCksXHJcbiAgICAgICAgICAgIGltYWdlczogc3RhdGUuaW1hZ2VzLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZGlzcGF0Y2gocHJvcGVydHlBY3Rpb25zLnVwZGF0ZVByb3BlcnR5KHByb3BlcnR5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzZXQoKSB7XHJcbiAgICAgICAgc2V0U3RhdGUoe25ld1Byb3BlcnR5fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVuZGVyT3B0aW9uVmFsdWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiMVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCIwXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbWFrZVJvb21zQXJyYXkoKSB7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gc3RhdGUucm9vbXMubWFwKChyb29tKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByb29tLmlkID4gMTAwMDBcclxuICAgICAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJvb20ubmFtZSA/IHJvb20ubmFtZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYmVkX3R5cGU6IHJvb20uYmVkVHlwZSA/IHJvb20uYmVkVHlwZSA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcm9vbS5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiByb29tLm5hbWUgPyByb29tLm5hbWUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGJlZF90eXBlOiByb29tLmJlZFR5cGUgPyByb29tLmJlZFR5cGUgOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gYXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdG9yT3B0aW9uID0ge1xyXG4gICAgICAgIHN0eWxlOiB7d2lkdGg6IFwiOTAlXCIsIGhlaWdodDogXCI3MCVcIn0sXHJcbiAgICAgICAgdG9vbGJhckNsYXNzTmFtZTogXCJob21lLXRvb2xiYXJcIixcclxuICAgICAgICB3cmFwcGVyQ2xhc3NOYW1lOiBcImhvbWUtd3JhcHBlclwiLFxyXG4gICAgICAgIGVkaXRvckNsYXNzTmFtZTogXCJob21lLWVkaXRvclwiLFxyXG4gICAgICAgIHVwbG9hZENhbGxiYWNrOiB1cGxvYWRDYWxsYmFjayxcclxuICAgICAgICB0b29sYmFyOiB7aW1hZ2U6IHt1cGxvYWRDYWxsYmFjazogdXBsb2FkQ2FsbGJhY2t9fSxcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUGxhY2VDaGFuZ2UocGxhY2UpIHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRyZXNzOiBwbGFjZS5mb3JtYXR0ZWRfYWRkcmVzcyxcclxuICAgICAgICAgICAgbGF0OiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQoKSxcclxuICAgICAgICAgICAgbG5nOiBwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVQbGFjZVJlc2V0KCkge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGFkZHJlc3M6IFwiXCIsXHJcbiAgICAgICAgICAgIGxhdDogXCJcIixcclxuICAgICAgICAgICAgbG5nOiBcIlwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNldHRpbmdDaGFuZ2UoY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVTZXR0aW5nQ2hhbmdlXCIsIGNoYW5nZWRWYWx1ZXMsIGFsbFZhbHVlcyk7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgLi4uYWxsVmFsdWVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZU1haW5JbmZvQ2hhbmdlKGNoYW5nZWRWYWx1ZXMsIGFsbFZhbHVlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlTWFpbkluZm9DaGFuZ2VcIiwgY2hhbmdlZFZhbHVlcywgYWxsVmFsdWVzKTtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAuLi5hbGxWYWx1ZXMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVG9nZ2xlQW1lbml0eU9wdGlvbihhbWVuaXR5SWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFtZW5pdHlJZFwiLCBzdGF0ZS5hbWVuaXRpZXMsIGFtZW5pdHlJZCk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gc3RhdGUuYW1lbml0aWVzO1xyXG4gICAgICAgIGxldCBpbmRleCA9IGFycmF5LmluZGV4T2YoYW1lbml0eUlkKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFtZW5pdGllczogYXJyYXksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFycmF5LnB1c2goYW1lbml0eUlkKTtcclxuICAgICAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhbWVuaXRpZXM6IGFycmF5LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVUb2dnbGVBbWVuaXR5T3B0aW9uXCIsIGFycmF5LCBzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlUm9vbSh2YWx1ZXMsIGlkKSB7XHJcbiAgICAgICAgY29uc3QgbmV3Um9vbXMgPSBzdGF0ZS5yb29tcy5tYXAoKHJvb20sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyb29tLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5yb29tLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnZhbHVlcyxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJvb207XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVDaGFuZ2VSb29tXCIsIG5ld1Jvb21zKTtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIHJvb21zOiBuZXdSb29tc30pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUFkZFJvb20oKSB7XHJcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkSWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFycmF5XCIsIGFycmF5LCBnZW5lcmF0ZWRJZCk7XHJcbiAgICAgICAgbGV0IGFycmF5ID0gc3RhdGUucm9vbXM7XHJcbiAgICAgICAgYXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgIGlkOiBnZW5lcmF0ZWRJZCxcclxuICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgYmVkVHlwZTogXCJRXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGVBZGRSb29tXCIsIGFycmF5KTtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICByb29tczogYXJyYXksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVtb3ZlUm9vbShyb29tSWQpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsZVJlbW92ZVJvb21cIiwgcm9vbUlkKTtcclxuICAgICAgICBsZXQgYXJyYXkgPSBzdGF0ZS5yb29tcztcclxuICAgICAgICBsZXQgaW5kZXggPSBhcnJheS5maW5kSW5kZXgoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHJvb21JZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgYXJyYXlbaW5kZXhdLm5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBhcnJheVtpbmRleF0uYmVkVHlwZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgcm9vbXM6IGFycmF5LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVXBsb2FkU3VjY2VzcyhpbWFnZSkge1xyXG4gICAgICAgIGNvbnN0IHtnYWxsZXJ5SW1nc30gPSBzdGF0ZTtcclxuICAgICAgICBnYWxsZXJ5SW1ncy5wdXNoKGltYWdlKTtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIGdhbGxlcnlJbWdzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU29ydEVuZCh7b2xkSW5kZXgsIG5ld0luZGV4fSkge1xyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5ID0gYXJyYXlNb3ZlKHN0YXRlLmdhbGxlcnlJbWdzLCBvbGRJbmRleCwgbmV3SW5kZXgpO1xyXG5cclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBnYWxsZXJ5SW1nczogbmV3QXJyYXksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaGFuZGxlU2VsZWN0RmVhdHVyZWQoaW1hZ2UpIHtcclxuICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIGZlYXR1cmVkSW1nOiBpbWFnZX0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZVNpbWlsYXJQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eUlkcykge1xyXG4gICAgICAgIHNldFN0YXRlKHsuLi5zdGF0ZSwgc2ltaWxhclByb3BlcnRpZXM6IHByb3BlcnR5SWRzfSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7cm93U3R5bGUsIGNvbFN0eWxlfSA9IGJhc2ljU3R5bGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0V3JhcHBlcj5cclxuICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezMyfT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBvbkNsaWNrPXtoYW5kbGVTYXZlfT5cclxuICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cImRlZmF1bHRcIiBvbkNsaWNrPXtoYW5kbGVSZXNldH0+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuXHJcbiAgICAgICAgICAgIDxSb3cgc3R5bGU9e3Jvd1N0eWxlfSBndXR0ZXI9ezB9IGp1c3RpZnk9XCJzdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgPENvbCBsZz17OH0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0gc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiBcIjAgMjBweFwiLCBiYWNrZ3JvdW5kOiBcIiNmZmZcIiwgcGFkZGluZzogMjB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlLm5hbWUgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1haW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPXtzdGF0ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tlcnZpbGxlSWQ9e3N0YXRlLmJvb2tlcnZpbGxlSWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk9e3N0YXRlLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVmFsdWVzQ2hhbmdlPXtoYW5kbGVNYWluSW5mb0NoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8R2FsbGVyeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3N0YXRlLmdhbGxlcnlJbWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Tb3J0RW5kPXtoYW5kbGVTb3J0RW5kfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25VcGxvYWRTdWNjZXNzPXtoYW5kbGVVcGxvYWRTdWNjZXNzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmVhdHVyZWRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3N0YXRlLmdhbGxlcnlJbWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtPXtzdGF0ZS5mZWF0dXJlZEltZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uVXBsb2FkU3VjY2Vzcz17aGFuZGxlVXBsb2FkU3VjY2Vzc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0SW1hZ2U9e2hhbmRsZVNlbGVjdEZlYXR1cmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIGxnPXsxNn0gbWQ9ezEyfSBzbT17MjR9IHhzPXsyNH0gc3R5bGU9e2NvbFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8VGFic1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtjYWxsYmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW46IFwiMCAyMHB4XCIsIGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBwYWRkaW5nOiAyMH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7W1wiZGVzY3JpcHRpb25cIiwgXCJuZWlnaGJvdXJob29kXCIsIFwidHJhbnNpdFwiXS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiPXtpdGVtLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgaXRlbS5zbGljZSgxKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0YXRlPy5baXRlbV0gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uZWRpdG9yT3B0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHRtbD17c3RhdGVbaXRlbV19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkVkaXRvclN0YXRlQ2hhbmdlPXsoaHRtbCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSh7Li4uc3RhdGUsIFtpdGVtXTogaHRtbH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIkxvY2F0aW9uXCIga2V5PVwibG9jYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3N0YXRlLmFkZHJlc3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VudGVyPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhdDogc3RhdGUubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsbmc6IHN0YXRlLmxuZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUGxhY2VDaGFuZ2U9e2hhbmRsZVBsYWNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzZXQ9e2hhbmRsZVBsYWNlUmVzZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIlNldHRpbmdcIiBrZXk9XCJzZXR0aW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2V0dGluZyBzZXR0aW5nPXtzdGF0ZX0gb25WYWx1ZXNDaGFuZ2U9e2hhbmRsZVNldHRpbmdDaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCJBbWVuaXR5XCIga2V5PVwiYW1lbml0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFtZW5pdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbWVuaXRpZXM9e3N0YXRlLmFtZW5pdGllc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblRvZ2dsZU9wdGlvbj17aGFuZGxlVG9nZ2xlQW1lbml0eU9wdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmUgdGFiPVwiQmVkdHlwZVwiIGtleT1cInJvb21zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Um9vbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb29tcz17c3RhdGUucm9vbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb29tQ2hhbmdlPXtoYW5kbGVDaGFuZ2VSb29tfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQWRkUm9vbT17aGFuZGxlQWRkUm9vbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlbW92ZVJvb209e2hhbmRsZVJlbW92ZVJvb219XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25WYWx1ZXNDaGFuZ2U9e2hhbmRsZVNldHRpbmdDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lIHRhYj1cIlByaWNpbmdcIiBrZXk9XCJwcmljaW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlJZD17cHJvcGVydHlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0UHJpY2U9e3N0YXRlLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZSB0YWI9XCJTaW1pbGFyIFByb3BlcnRpZXNcIiBrZXk9XCJzaW1pbGFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2ltaWxhclByb3BlcnR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c3RhdGUuc2ltaWxhclByb3BlcnRpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Sb3dTZWxlY3Rpb249e2hhbmRsZVNpbWlsYXJQcm9wZXJ0eUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZT5cclxuICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9MYXlvdXRXcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9