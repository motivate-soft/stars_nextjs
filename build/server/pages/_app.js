module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/HOC/WithGATracker.js":
/*!*****************************************!*\
  !*** ./components/HOC/WithGATracker.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../env-config */ "./env-config.js");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_env_config__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\components\\HOC\\WithGATracker.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




react_ga__WEBPACK_IMPORTED_MODULE_1___default.a.initialize(_env_config__WEBPACK_IMPORTED_MODULE_2__["GA_ID"]);
/* harmony default export */ __webpack_exports__["default"] = ((WrappedComponent, options = {}) => {
  const trackPage = page => {
    react_ga__WEBPACK_IMPORTED_MODULE_1___default.a.set(_objectSpread({
      page
    }, options));
    react_ga__WEBPACK_IMPORTED_MODULE_1___default.a.pageview(page);
  };

  const HOC = props => {
    // useEffect(() => trackPage(props.location.pathname), [props.location.pathname]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      console.log("__ReactGA", props);
    });
    return __jsx(WrappedComponent, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 16
      }
    }));
  };

  return HOC;
});

/***/ }),

/***/ "./components/HOC/WithPixel.js":
/*!*************************************!*\
  !*** ./components/HOC/WithPixel.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../env-config */ "./env-config.js");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_env_config__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\components\\HOC\\WithPixel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

 // import ReactPixel from 'react-facebook-pixel';


 // ReactPixel.init(PIXEL_ID);

/* harmony default export */ __webpack_exports__["default"] = (Component => props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! react-facebook-pixel */ "react-facebook-pixel", 7)).then(x => x.default).then(ReactPixel => {
      ReactPixel.init(_env_config__WEBPACK_IMPORTED_MODULE_1__["PIXEL_ID"]);
      ReactPixel.pageView();
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', () => {
        ReactPixel.pageView();
      });
    });
  }, []);
  return __jsx(Component, _extends({}, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 12
    }
  }));
});

/***/ }),

/***/ "./containers/Admin/ThemeProvider.js":
/*!*******************************************!*\
  !*** ./containers/Admin/ThemeProvider.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppProvider; });
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/config-provider */ "antd/lib/config-provider");
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/config/theme/theme.config */ "./shared/config/theme/theme.config.js");
/* harmony import */ var _iso_config_translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/config/translation */ "./shared/config/translation/index.js");
/* harmony import */ var _iso_lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/lib/hooks/useWindowSize */ "./shared/library/hooks/useWindowSize.js");
/* harmony import */ var _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/redux/app/actions */ "./shared/redux/app/actions.js");

var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\containers\\Admin\\ThemeProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const {
  toggleAll
} = _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_8__["default"];
function AppProvider({
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    locale
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.LanguageSwitcher.language);
  const {
    themeName
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.ThemeSwitcher.changeThemes);
  const currentAppLocale = _iso_config_translation__WEBPACK_IMPORTED_MODULE_6__["default"][locale];
  const {
    width,
    height
  } = Object(_iso_lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__["default"])();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [dispatch]);
  return __jsx(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default.a, {
    locale: currentAppLocale.antd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_5__["default"][themeName],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, children)));
}

/***/ }),

/***/ "./containers/Guest/GuestThemeProvider.js":
/*!************************************************!*\
  !*** ./containers/Guest/GuestThemeProvider.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GuestThemeProvider; });
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/config-provider */ "antd/lib/config-provider");
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intl */ "react-intl");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/config/theme/theme.config */ "./shared/config/theme/theme.config.js");
/* harmony import */ var _iso_config_translation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/config/translation */ "./shared/config/translation/index.js");
/* harmony import */ var _iso_lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/lib/hooks/useWindowSize */ "./shared/library/hooks/useWindowSize.js");
/* harmony import */ var _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/redux/app/actions */ "./shared/redux/app/actions.js");

var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\containers\\Guest\\GuestThemeProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const {
  toggleAll
} = _iso_redux_app_actions__WEBPACK_IMPORTED_MODULE_8__["default"];
function GuestThemeProvider({
  children
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    locale
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.LanguageSwitcher.language);
  const {
    themeName
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.ThemeSwitcher.changeThemes);
  const currentAppLocale = _iso_config_translation__WEBPACK_IMPORTED_MODULE_6__["default"][locale];
  const {
    width,
    height
  } = Object(_iso_lib_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_7__["default"])();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [dispatch]);
  return __jsx(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default.a, {
    locale: currentAppLocale.antd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(react_intl__WEBPACK_IMPORTED_MODULE_2__["IntlProvider"], {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_4__["ThemeProvider"], {
    theme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_5__["default"].guestTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, children)));
}

/***/ }),

/***/ "./context/BookingProvider.js":
/*!************************************!*\
  !*** ./context/BookingProvider.js ***!
  \************************************/
/*! exports provided: BookingContext, initBooking, BookingProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingContext", function() { return BookingContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initBooking", function() { return initBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingProvider", function() { return BookingProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\context\\BookingProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const BookingContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
const initBooking = {
  propertyId: null,
  propertySlug: null,
  bookervilleId: null,
  checkinDate: null,
  checkoutDate: null,
  adults: 0,
  children: 0,
  propertyFee: '',
  cleaningFee: '',
  refundableAmount: '',
  transactionFee: '',
  tax: '',
  total: '',
  nights: '',
  quote: '',
  guest: {},
  billing: {}
};

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_BOOKING_INFORMATION':
      return _objectSpread(_objectSpread({}, state), action.payload);

    case 'RESET_BOOKING_INFORMATION':
      return initBooking;

    default:
      return state;
  }
}

const BookingProvider = ({
  children,
  booking
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, booking);
  return __jsx(BookingContext.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./context/SearchProvider.js":
/*!***********************************!*\
  !*** ./context/SearchProvider.js ***!
  \***********************************/
/*! exports provided: SearchContext, SearchProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchContext", function() { return SearchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProvider", function() { return SearchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\context\\SearchProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SearchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_QUERY':
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      return state;
  }
}

const SearchProvider = ({
  children,
  query
}) => {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, query);
  return __jsx(SearchContext.Provider, {
    value: {
      state,
      dispatch
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, children);
};

/***/ }),

/***/ "./env-config.js":
/*!***********************!*\
  !*** ./env-config.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

const prod = false;
module.exports = {
  BACKEND_URL: 'http://localhost:8000',
  // BACKEND_URL: prod ? 'http://www.starsofboston.com/' : 'http://localhost:8000',
  RECAPTCHA_KEY: "6LffDNoZAAAAAA3a5FIcMwHJSB3V4wJ5_U5w60GH",
  PIXEL_ID: "339821513993100",
  GA_ID: "UA-129107246-1",
  ZENDESK_KEY: "fb706650-c59e-4f45-b7b3-f601aec370db"
};

/***/ }),

/***/ "./node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-dates/lib/css/_datepicker.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-dates/lib/css/_datepicker.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-image-gallery/styles/css/image-gallery.css":
/*!***********************************************************************!*\
  !*** ./node_modules/react-image-gallery/styles/css/image-gallery.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-phone-input-2/lib/bootstrap.css":
/*!************************************************************!*\
  !*** ./node_modules/react-phone-input-2/lib/bootstrap.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-quill/dist/quill.core.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.core.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-quill/dist/quill.snow.css":
/*!******************************************************!*\
  !*** ./node_modules/react-quill/dist/quill.snow.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_Admin_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/Admin/ThemeProvider */ "./containers/Admin/ThemeProvider.js");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_phone_input_2_lib_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-phone-input-2/lib/bootstrap.css */ "./node_modules/react-phone-input-2/lib/bootstrap.css");
/* harmony import */ var react_phone_input_2_lib_bootstrap_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2_lib_bootstrap_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dates/lib/css/_datepicker.css */ "./node_modules/react-dates/lib/css/_datepicker.css");
/* harmony import */ var react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dates_lib_css_datepicker_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "./node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-quill/dist/quill.snow.css */ "./node_modules/react-quill/dist/quill.snow.css");
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-quill/dist/quill.core.css */ "./node_modules/react-quill/dist/quill.core.css");
/* harmony import */ var react_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-image-gallery/styles/css/image-gallery.css */ "./node_modules/react-image-gallery/styles/css/image-gallery.css");
/* harmony import */ var react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_image_gallery_styles_css_image_gallery_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../style/global.css */ "./style/global.css");
/* harmony import */ var _style_global_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_style_global_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _containers_Guest_GuestThemeProvider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../containers/Guest/GuestThemeProvider */ "./containers/Guest/GuestThemeProvider.js");
/* harmony import */ var _context_SearchProvider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @context/SearchProvider */ "./context/SearchProvider.js");
/* harmony import */ var _context_BookingProvider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @context/BookingProvider */ "./context/BookingProvider.js");
/* harmony import */ var _style_GlobalStyles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../style/GlobalStyles */ "./style/GlobalStyles.js");
/* harmony import */ var _components_HOC_WithGATracker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/HOC/WithGATracker */ "./components/HOC/WithGATracker.js");
/* harmony import */ var _components_HOC_WithPixel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @components/HOC/WithPixel */ "./components/HOC/WithPixel.js");
var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













 // import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";









class CustomApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      router,
      pageProps,
      store
    } = this.props;
    const {
      query
    } = router;

    if (router.pathname.split('/')[0] === 'admin') {
      return (// <Provider store={store}>
        __jsx(_containers_Admin_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["default"], {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }
        }, __jsx(Component, _extends({}, pageProps, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 21
          }
        }))) // </Provider>

      );
    }

    return __jsx(_containers_Guest_GuestThemeProvider__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }, __jsx(_context_SearchProvider__WEBPACK_IMPORTED_MODULE_15__["SearchProvider"], {
      query: query,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }
    }, __jsx(_context_BookingProvider__WEBPACK_IMPORTED_MODULE_16__["BookingProvider"], {
      booking: _context_BookingProvider__WEBPACK_IMPORTED_MODULE_16__["initBooking"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, __jsx(_style_GlobalStyles__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    }), __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 25
      }
    }))))); // return WithGATracker(WithPixel((
    //     // <Provider store={store}>
    //     <GuestThemeProvider>
    //         <SearchProvider query={query}>
    //             <BookingProvider booking={initBooking}>
    //                 <GlobalStyles/>
    //                 <Component {...pageProps} />
    //             </BookingProvider>
    //         </SearchProvider>
    //     </GuestThemeProvider>
    //     // </Provider>
    // )))
  }

}

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__["createWrapper"])(_redux_store__WEBPACK_IMPORTED_MODULE_5__["default"], {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper.withRedux(CustomApp)); // export default withRedux(initStore)(CustomApp);

/***/ }),

/***/ "./redux/amenities/actions.js":
/*!************************************!*\
  !*** ./redux/amenities/actions.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const amenityActions = {
  GET_ALL_AMENITIES_REQUEST: "GET_ALL_AMENITIES_REQUEST",
  GET_ALL_AMENITIES_SUCCESS: "GET_ALL_AMENITIES_SUCCESS",
  GET_ALL_AMENITIES_FAILURE: "GET_ALL_AMENITIES_FAILURE",
  GET_AMENITY_REQUEST: "GET_AMENITY_REQUEST",
  GET_AMENITY_SUCCESS: "GET_AMENITY_SUCCESS",
  GET_AMENITY_FAILURE: "GET_AMENITY_FAILURE",
  ADD_AMENITY_REQUEST: "ADD_AMENITY_REQUEST",
  ADD_AMENITY_SUCCESS: "ADD_AMENITY_SUCCESS",
  ADD_AMENITY_FAILURE: "ADD_AMENITY_FAILURE",
  UPDATE_AMENITY_REQUEST: "UPDATE_AMENITY_REQUEST",
  UPDATE_AMENITY_SUCCESS: "UPDATE_AMENITY_SUCCESS",
  UPDATE_AMENITY_FAILURE: "UPDATE_AMENITY_FAILURE",
  DELETE_AMENITY_REQUEST: "DELETE_AMENITY_REQUEST",
  DELETE_AMENITY_SUCCESS: "DELETE_AMENITY_SUCCESS",
  DELETE_AMENITY_FAILURE: "DELETE_AMENITY_FAILURE",
  getAllAmenities: () => ({
    type: amenityActions.GET_ALL_AMENITIES_REQUEST
  }),
  getAmenity: amenityId => ({
    type: amenityActions.GET_AMENITY_REQUEST,
    amenityId
  }),
  addAmenity: newAmenity => ({
    type: amenityActions.ADD_AMENITY_REQUEST,
    amenity: newAmenity
  }),
  updateAmenity: newAmenity => ({
    type: amenityActions.UPDATE_AMENITY_REQUEST,
    amenity: newAmenity
  }),
  deleteAmenity: amenityId => ({
    type: amenityActions.DELETE_AMENITY_REQUEST,
    amenityId
  })
};
/* harmony default export */ __webpack_exports__["default"] = (amenityActions);

/***/ }),

/***/ "./redux/amenities/reducer.js":
/*!************************************!*\
  !*** ./redux/amenities/reducer.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propertiesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/amenities/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function propertiesReducer(state = initState, action) {
  switch (action.type) {
    // List
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_AMENITIES_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_AMENITIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_AMENITIES_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_AMENITY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_AMENITY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: items,
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_AMENITY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: null,
        error: action.error,
        loading: false
      });
    // Add

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_AMENITY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_AMENITY_SUCCESS:
      const {
        items
      } = state;
      items.push(action.item);
      return _objectSpread(_objectSpread({}, state), {}, {
        items: items,
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_AMENITY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_AMENITY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_AMENITY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        // items: state.items.map((item) => {
        //   if (item.id === action.item.id) {
        //     item = action.item;
        //   }
        // }),
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_AMENITY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_AMENITY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_AMENITY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.amenityId),
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_AMENITY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/amenities/saga.js":
/*!*********************************!*\
  !*** ./redux/amenities/saga.js ***!
  \*********************************/
/*! exports provided: getAllAmenities, getAmenity, addAmenity, updateAmenity, deleteAmenity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllAmenities", function() { return getAllAmenities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAmenity", function() { return getAmenity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAmenity", function() { return addAmenity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAmenity", function() { return updateAmenity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAmenity", function() { return deleteAmenity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/amenities/actions.js");
/* harmony import */ var _service_amenityApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/amenityApi */ "./service/amenityApi.js");
/* harmony import */ var _iso_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components */ "./shared/components/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function* getAllAmenities() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_AMENITIES_REQUEST, function* () {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_amenityApi__WEBPACK_IMPORTED_MODULE_2__["default"].getAll);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_AMENITIES_SUCCESS,
        items: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_3__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_AMENITIES_FAILURE,
        error: error.message
      });
    }
  });
}
function* getAmenity() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_AMENITY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_amenityApi__WEBPACK_IMPORTED_MODULE_2__["default"].getOne, payload.amenityId);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_AMENITY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_3__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_AMENITY_FAILURE,
        error: error.message
      });
    }
  });
}
function* addAmenity() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_AMENITY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_amenityApi__WEBPACK_IMPORTED_MODULE_2__["default"].add, payload.amenity);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_3__["notification"])('success', 'New amenity has been created successfully');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_AMENITY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_3__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_AMENITY_FAILURE,
        error: error.message
      });
    }
  });
}
function* updateAmenity() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_AMENITY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_amenityApi__WEBPACK_IMPORTED_MODULE_2__["default"].update, payload.amenity);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_3__["notification"])('success', 'Amenity has been updated successfully');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_AMENITY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_3__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_AMENITY_FAILURE,
        error: error.message
      });
    }
  });
}
function* deleteAmenity() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_AMENITY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_amenityApi__WEBPACK_IMPORTED_MODULE_2__["default"].delete, payload.amenityId);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_3__["notification"])('success', 'Amenity has been deleted successfully');
      next_router__WEBPACK_IMPORTED_MODULE_4__["Router"].push('/admin/amenity');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_AMENITY_SUCCESS,
        amenityId: payload.amenityId
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_3__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_AMENITY_FAILURE,
        error: error.message
      });
    }
  });
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getAllAmenities), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getAmenity), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(addAmenity), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(updateAmenity), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(deleteAmenity)]);
}

/***/ }),

/***/ "./redux/authentication/actions.js":
/*!*****************************************!*\
  !*** ./redux/authentication/actions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const actions = {
  // LOGIN_REQUEST_START: 'LOGIN_REQUEST_START',
  JWT_LOGIN_REQUEST_START: 'JWT_LOGIN_REQUEST_START',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAILURE: 'LOGIN_REQUEST_FAILURE',
  LOGOUT_REQUEST_START: 'LOGOUT_REQUEST_START',
  LOGOUT_REQUEST_SUCCESS: 'LOGOUT_REQUEST_SUCCESS',
  LOGOUT_REQUEST_FAILURE: 'LOGOUT_REQUEST_FAILURE',
  // login: credentials => ({
  //   type: actions.LOGIN_REQUEST_START,
  //   payload: credentials,
  // }),
  jwtLogin: (history, userInfo) => ({
    type: actions.JWT_LOGIN_REQUEST_START,
    payload: {
      history,
      userInfo
    }
  }),
  loginRequestSuccess: credentials => ({
    type: actions.LOGIN_REQUEST_SUCCESS,
    payload: credentials
  }),
  loginRequestFailure: error => ({
    type: actions.LOGOUT_REQUEST_FAILURE,
    payload: error
  }),
  logout: () => ({
    type: actions.LOGOUT_REQUEST_START
  }),
  logoutRequestSuccess: () => ({
    type: actions.LOGOUT_REQUEST_SUCCESS
  }),
  logoutRequestFailure: error => ({
    type: actions.LOGOUT_REQUEST_FAILURE,
    payload: error
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./redux/authentication/auth.utils.js":
/*!********************************************!*\
  !*** ./redux/authentication/auth.utils.js ***!
  \********************************************/
/*! exports provided: setCookie, removeCookie, getCookie, auth, logout, withAuthSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withAuthSync", function() { return withAuthSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\redux\\authentication\\auth.utils.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
};
const getCookie = (key, req) => {
  return false ? undefined : getCookieFromServer(key, req);
};

const getCookieFromBrowser = key => {
  return js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }

  const rawCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${key}=`));

  if (!rawCookie) {
    return undefined;
  }

  return rawCookie.split('=')[1];
}; // export const login = ({token}) => {
//     cookie.set('token', token, {expires: 1});
//     Router.push('/admin');
// };


const auth = ctx => {
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);
  /*
   * If `ctx.req` is available it means we are on the server.
   * Additionally if there's no token it means the user is not logged in.
   */

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/admin/signin'
    });
    ctx.res.end();
  } // We already checked for server. This should only happen on client.


  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/admin/signin');
  }

  return token;
};
const logout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('token'); // to support logging out from all windows

  window.localStorage.setItem('logout', Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/admin/signin');
};
const withAuthSync = WrappedComponent => {
  const Wrapper = props => {
    const syncLogout = event => {
      if (event.key === 'logout') {
        console.log('logged out from storage!');
        next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/admin/signin');
      }
    };

    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener('storage', syncLogout);
      return () => {
        window.removeEventListener('storage', syncLogout);
        window.localStorage.removeItem('logout');
      };
    }, [null]);
    return __jsx(WrappedComponent, _extends({}, props, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 16
      }
    }));
  };

  Wrapper.getInitialProps = async ctx => {
    const token = auth(ctx);
    const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
    return _objectSpread(_objectSpread({}, componentProps), {}, {
      token
    });
  };

  return Wrapper;
};

/***/ }),

/***/ "./redux/authentication/jwtAuthentication.js":
/*!***************************************************!*\
  !*** ./redux/authentication/jwtAuthentication.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _iso_config_jwt_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/config/jwt.config */ "./shared/config/jwt.config.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let resStatus = 0;

class JwtAuth {
  constructor() {
    _defineProperty(this, "login", async userInfo => {
      return await fetch(_iso_config_jwt_config__WEBPACK_IMPORTED_MODULE_0__["default"].fetchUrl, {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      }).then(res => {
        if (res.ok) {
          return res.json();
        }

        throw res;
      }).catch(res => {
        console.log("___", res);

        if (res instanceof Error) {
          throw Error('Network error');
        }

        let error = new Error(); // res.json().then((responseJson) => {
        //     error = {
        //         status: res.status,
        //         statusText: res.statusText,
        //         message: responseJson.detail || 'Application Error'
        //     }
        //     throw error
        // })

        if (res.status >= 400 && res.status < 500) {
          console.log(res.text());
          error = {
            status: res.status,
            statusText: res.statusText,
            message: res.detail || 'Application Error'
          };
          throw error;
        }

        if (res.status >= 500) {
          error = {
            status: res.status,
            statusText: res.statusText,
            message: res.detail || 'Server Error'
          };
          throw error;
        }

        error = _objectSpread(_objectSpread({}, error), {}, {
          status: res.status,
          statusText: res.statusText,
          message: res.detail || 'Error'
        });
        throw error;
      });
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new JwtAuth());

/***/ }),

/***/ "./redux/authentication/reducer.js":
/*!*****************************************!*\
  !*** ./redux/authentication/reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return authReducer; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/authentication/actions.js");
/* harmony import */ var _redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/authentication/auth.utils */ "./redux/authentication/auth.utils.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






let initState = {
  idToken: null,
  profile: null,
  error: null
}; // if (process.browser) {
//     if (cookie.get('token') !== null) {
//         const token = cookie.get('token')
//         console.log("___", token)
//         const profile = jwtDecode(token);
//         initState = {
//             idToken: token,
//             profile,
//             error: null,
//         };
//     }
// }

function authReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGIN_REQUEST_SUCCESS:
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace('/admin');
      return _objectSpread(_objectSpread({}, state), {}, {
        idToken: action.token,
        profile: action.profile
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGOUT_REQUEST_FAILURE:
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGIN_REQUEST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        idToken: null,
        error: action.payload
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].LOGOUT_REQUEST_SUCCESS:
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace('/admin/signin');
      return initState;

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/authentication/sagas.js":
/*!***************************************!*\
  !*** ./redux/authentication/sagas.js ***!
  \***************************************/
/*! exports provided: jwtLoginRequest, loginSuccess, loginError, onLogout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jwtLoginRequest", function() { return jwtLoginRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginError", function() { return loginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onLogout", function() { return onLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.utils */ "./redux/authentication/auth.utils.js");
/* harmony import */ var _iso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components */ "./shared/components/index.js");
/* harmony import */ var _jwtAuthentication__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jwtAuthentication */ "./redux/authentication/jwtAuthentication.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./redux/authentication/actions.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);






function* jwtLoginRequest() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_4__["default"].JWT_LOGIN_REQUEST_START, function* ({
    payload: {
      userInfo,
      history
    }
  }) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_jwtAuthentication__WEBPACK_IMPORTED_MODULE_3__["default"].login, userInfo);
      let token, profile;

      if (res.access) {
        token = res.access;
        profile = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(res.access);
        Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('success', 'login success');
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
          type: _actions__WEBPACK_IMPORTED_MODULE_4__["default"].LOGIN_REQUEST_SUCCESS,
          token,
          profile
        });
      } else {
        Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', 'Response type is invalid');
        yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["default"].loginRequestFailure("Invalid server response"));
      }
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('error', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["default"].loginRequestFailure(error.message));
    }
  });
}

function* logoutRequest() {
  try {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_auth_utils__WEBPACK_IMPORTED_MODULE_1__["logout"]);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["default"].logoutRequestSuccess());
  } catch (error) {
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(_actions__WEBPACK_IMPORTED_MODULE_4__["default"].logoutRequestFailure(error));
  }
}

function* loginSuccess() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_4__["default"].LOGIN_REQUEST_SUCCESS, function* (payload) {
    Object(_auth_utils__WEBPACK_IMPORTED_MODULE_1__["setCookie"])('login_saga', payload.token);
    yield Object(_auth_utils__WEBPACK_IMPORTED_MODULE_1__["setCookie"])('token', payload.token);
  });
}
function* loginError() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_4__["default"].LOGOUT_REQUEST_FAILURE, function* (payload) {
    console.log("loginError", payload);
  });
}
function* onLogout() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_4__["default"].LOGOUT_REQUEST_START, logoutRequest);
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(jwtLoginRequest), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loginSuccess), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(onLogout)]);
}

/***/ }),

/***/ "./redux/categories/actions.js":
/*!*************************************!*\
  !*** ./redux/categories/actions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const categoryActions = {
  GET_ALL_CATEGORIES_REQUEST: "GET_ALL_CATEGORIES_REQUEST",
  GET_ALL_CATEGORIES_SUCCESS: "GET_ALL_CATEGORIES_SUCCESS",
  GET_ALL_CATEGORIES_FAILURE: "GET_ALL_CATEGORIES_FAILURE",
  GET_CATEGORY_REQUEST: "GET_CATEGORY_REQUEST",
  GET_CATEGORY_SUCCESS: "GET_CATEGORY_SUCCESS",
  GET_CATEGORY_FAILURE: "GET_CATEGORY_FAILURE",
  ADD_CATEGORY_REQUEST: "ADD_CATEGORY_REQUEST",
  ADD_CATEGORY_SUCCESS: "ADD_CATEGORY_SUCCESS",
  ADD_CATEGORY_FAILURE: "ADD_CATEGORY_FAILURE",
  UPDATE_CATEGORY_REQUEST: "UPDATE_CATEGORY_REQUEST",
  UPDATE_CATEGORY_SUCCESS: "UPDATE_CATEGORY_SUCCESS",
  UPDATE_CATEGORY_FAILURE: "UPDATE_CATEGORY_FAILURE",
  DELETE_CATEGORY_REQUEST: "DELETE_CATEGORY_REQUEST",
  DELETE_CATEGORY_SUCCESS: "DELETE_CATEGORY_SUCCESS",
  DELETE_CATEGORY_FAILURE: "DELETE_CATEGORY_FAILURE",
  getAllCategories: () => ({
    type: categoryActions.GET_ALL_CATEGORIES_REQUEST
  }),
  getCategory: categoryId => ({
    type: categoryActions.GET_CATEGORY_REQUEST,
    categoryId
  }),
  addCategory: newCategory => ({
    type: categoryActions.ADD_CATEGORY_REQUEST,
    category: newCategory
  }),
  updateCategory: newCategory => ({
    type: categoryActions.UPDATE_CATEGORY_REQUEST,
    category: newCategory
  }),
  deleteCategory: categoryId => ({
    type: categoryActions.DELETE_CATEGORY_REQUEST,
    categoryId
  })
};
/* harmony default export */ __webpack_exports__["default"] = (categoryActions);

/***/ }),

/***/ "./redux/categories/reducer.js":
/*!*************************************!*\
  !*** ./redux/categories/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propertiesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/categories/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function propertiesReducer(state = initState, action) {
  switch (action.type) {
    // List
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_CATEGORIES_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_CATEGORIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_CATEGORIES_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CATEGORY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CATEGORY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_CATEGORY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: null,
        error: action.error,
        loading: false
      });
    // Add

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_CATEGORY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_CATEGORY_SUCCESS:
      state.items.push(action.item);
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items,
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_CATEGORY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CATEGORY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CATEGORY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        // items: state.items.map((item) => {
        //   if (item.id === action.item.id) {
        //     item = action.item;
        //   }
        // }),
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CATEGORY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_CATEGORY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_CATEGORY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.categoryId),
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_CATEGORY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/categories/saga.js":
/*!**********************************!*\
  !*** ./redux/categories/saga.js ***!
  \**********************************/
/*! exports provided: getAllCategories, getCategory, addCategory, updateCategory, deleteCategory, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCategories", function() { return getAllCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCategory", function() { return getCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCategory", function() { return addCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategory", function() { return updateCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/categories/actions.js");
/* harmony import */ var _iso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components */ "./shared/components/index.js");
/* harmony import */ var _service_categoryApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/categoryApi */ "./service/categoryApi.js");




function* getAllCategories() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_CATEGORIES_REQUEST, function* () {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_categoryApi__WEBPACK_IMPORTED_MODULE_3__["default"].getAll);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_CATEGORIES_SUCCESS,
        items: res
      });
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_CATEGORIES_FAILURE,
        error: error.message
      });
    }
  });
}
function* getCategory() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_CATEGORY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_categoryApi__WEBPACK_IMPORTED_MODULE_3__["default"].getOne, payload.categoryId);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_CATEGORY_SUCCESS,
        item: res
      });
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_CATEGORY_FAILURE,
        error: error.message
      });
    }
  });
}
function* addCategory() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CATEGORY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_categoryApi__WEBPACK_IMPORTED_MODULE_3__["default"].add, payload.category);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])("success", "New category has been created");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CATEGORY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])("warning", error);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CATEGORY_FAILURE,
        error: error.message
      });
    }
  });
}
function* updateCategory() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_CATEGORY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_categoryApi__WEBPACK_IMPORTED_MODULE_3__["default"].update, payload.category);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])("success", "Category has been updated");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_CATEGORY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])("warning", error);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_CATEGORY_FAILURE,
        error: error.message
      });
    }
  });
}
function* deleteCategory() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_CATEGORY_REQUEST, function* (payload) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_categoryApi__WEBPACK_IMPORTED_MODULE_3__["default"].delete, payload.categoryId);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])("success", "Category has been deleted");
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_CATEGORY_SUCCESS,
        categoryId: payload.categoryId
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])("warning", error);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_CATEGORY_FAILURE,
        error: error.message
      });
    }
  });
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getAllCategories), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(addCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(updateCategory), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(deleteCategory)]);
}

/***/ }),

/***/ "./redux/posts/actions.js":
/*!********************************!*\
  !*** ./redux/posts/actions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const postActions = {
  GET_ALL_POSTS_REQUEST: "GET_ALL_POSTS_REQUEST",
  GET_ALL_POSTS_SUCCESS: "GET_ALL_POSTS_SUCCESS",
  GET_ALL_POSTS_FAILURE: "GET_ALL_POSTS_FAILURE",
  GET_POST_REQUEST: "GET_POST_REQUEST",
  GET_POST_SUCCESS: "GET_POST_SUCCESS",
  GET_POST_FAILURE: "GET_POST_FAILURE",
  ADD_POST_REQUEST: "ADD_POST_REQUEST",
  ADD_POST_SUCCESS: "ADD_POST_SUCCESS",
  ADD_POST_FAILURE: "ADD_POST_FAILURE",
  UPDATE_POST_REQUEST: "UPDATE_POST_REQUEST",
  UPDATE_POST_SUCCESS: "UPDATE_POST_SUCCESS",
  UPDATE_POST_FAILURE: "UPDATE_POST_FAILURE",
  DELETE_POST_REQUEST: "DELETE_POST_REQUEST",
  DELETE_POST_SUCCESS: "DELETE_POST_SUCCESS",
  DELETE_POST_FAILURE: "DELETE_POST_FAILURE",
  getAllPosts: () => ({
    type: postActions.GET_ALL_POSTS_REQUEST
  }),
  getPost: postId => ({
    type: postActions.GET_POST_REQUEST,
    postId
  }),
  addPost: newPost => ({
    type: postActions.ADD_POST_REQUEST,
    post: newPost
  }),
  updatePost: newPost => ({
    type: postActions.UPDATE_POST_REQUEST,
    post: newPost
  }),
  deletePost: postId => ({
    type: postActions.DELETE_POST_REQUEST,
    postId
  })
};
/* harmony default export */ __webpack_exports__["default"] = (postActions);

/***/ }),

/***/ "./redux/posts/reducer.js":
/*!********************************!*\
  !*** ./redux/posts/reducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propertiesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/posts/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function propertiesReducer(state = initState, action) {
  switch (action.type) {
    // List
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_POSTS_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_POSTS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_POSTS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: items,
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: null,
        error: action.error,
        loading: false
      });
    // Add

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_POST_SUCCESS:
      const {
        items
      } = state;
      items.push(action.item);
      return _objectSpread(_objectSpread({}, state), {}, {
        items: items,
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        // items: state.items.map((item) => {
        //   if (item.id === action.item.id) {
        //     item = action.item;
        //   }
        // }),
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_POST_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_POST_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.postId),
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_POST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/posts/saga.js":
/*!*****************************!*\
  !*** ./redux/posts/saga.js ***!
  \*****************************/
/*! exports provided: getAllPosts, getPost, addPost, updatePost, deletePost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllPosts", function() { return getAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePost", function() { return updatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePost", function() { return deletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/posts/actions.js");
/* harmony import */ var _iso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components */ "./shared/components/index.js");
/* harmony import */ var _service_postApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/postApi */ "./service/postApi.js");




function* getAllPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_POSTS_REQUEST, function* () {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_postApi__WEBPACK_IMPORTED_MODULE_3__["default"].getAll);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_POSTS_SUCCESS,
        items: res
      });
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_POSTS_FAILURE,
        error: error.message
      });
    }
  });
}
function* getPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_POST_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_postApi__WEBPACK_IMPORTED_MODULE_3__["default"].getOne, payload.postId);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_POST_SUCCESS,
        item: res
      });
    } catch (error) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_POST_FAILURE,
        error: error.message
      });
    }
  });
}
function* addPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_POST_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_postApi__WEBPACK_IMPORTED_MODULE_3__["default"].add, payload.post);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', 'New post created');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_POST_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_POST_FAILURE,
        error: error.message
      });
    }
  });
}
function* updatePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_POST_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_postApi__WEBPACK_IMPORTED_MODULE_3__["default"].update, payload.post);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', 'Post has been updated successfully');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_POST_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_POST_FAILURE,
        error: error.message
      });
    }
  });
}
function* deletePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_POST_REQUEST, function* (payload) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_postApi__WEBPACK_IMPORTED_MODULE_3__["default"].delete, payload.postId);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', 'Post has been deleted successfully');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_POST_SUCCESS,
        postId: payload.postId
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_POST_FAILURE,
        error: error.message
      });
    }
  });
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getAllPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(addPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(updatePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(deletePost)]);
}

/***/ }),

/***/ "./redux/properties/actions.js":
/*!*************************************!*\
  !*** ./redux/properties/actions.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./redux/properties/reducer.js");


function ascendingSort(property1, property2) {
  const name1 = property1.name ? property1.name.toUpperCase() : "~";
  const name2 = property2.name ? property2.name.toUpperCase() : "~";
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const propertyActions = {
  GET_ALL_PROPERTIES_REQUEST: "GET_ALL_PROPERTIES_REQUEST",
  GET_ALL_PROPERTIES_SUCCESS: "GET_ALL_PROPERTIES_SUCCESS",
  GET_ALL_PROPERTIES_FAILURE: "GET_ALL_PROPERTIES_FAILURE",
  GET_PROPERTY_REQUEST: "GET_PROPERTY_REQUEST",
  GET_PROPERTY_SUCCESS: "GET_PROPERTY_SUCCESS",
  GET_PROPERTY_FAILURE: "GET_PROPERTY_FAILURE",
  ADD_PROPERTY_REQUEST: "ADD_PROPERTY_REQUEST",
  ADD_PROPERTY_SUCCESS: "ADD_PROPERTY_SUCCESS",
  ADD_PROPERTY_FAILURE: "ADD_PROPERTY_FAILURE",
  UPDATE_PROPERTY_REQUEST: "UPDATE_PROPERTY_REQUEST",
  UPDATE_PROPERTY_SUCCESS: "UPDATE_PROPERTY_SUCCESS",
  UPDATE_PROPERTY_FAILURE: "UPDATE_PROPERTY_FAILURE",
  DELETE_PROPERTY_REQUEST: "DELETE_PROPERTY_REQUEST",
  DELETE_PROPERTY_SUCCESS: "DELETE_PROPERTY_SUCCESS",
  DELETE_PROPERTY_FAILURE: "DELETE_PROPERTY_FAILURE",
  GET_PRICE_ITEMS_REQUEST: "GET_PRICE_ITEMS_REQUEST",
  GET_PRICE_ITEMS_SUCCESS: "GET_PRICE_ITEMS_SUCCESS",
  GET_PRICE_ITEMS_FAILURE: "GET_PRICE_ITEMS_FAILURE",
  CREATE_PRICE_ITEM_REQUEST: "CREATE_PRICE_ITEM_REQUEST",
  CREATE_PRICE_ITEM_SUCCESS: "CREATE_PRICE_ITEM_SUCCESS",
  CREATE_PRICE_ITEM_FAILURE: "CREATE_PRICE_ITEM_FAILURE",
  getAllProperties: () => ({
    type: propertyActions.GET_ALL_PROPERTIES_REQUEST
  }),
  getProperty: propertyId => ({
    type: propertyActions.GET_PROPERTY_REQUEST,
    propertyId
  }),
  addProperty: newProperty => ({
    type: propertyActions.ADD_PROPERTY_REQUEST,
    property: newProperty
  }),
  updateProperty: newProperty => ({
    type: propertyActions.UPDATE_PROPERTY_REQUEST,
    property: newProperty
  }),
  deleteProperty: propertyId => ({
    type: propertyActions.DELETE_PROPERTY_REQUEST,
    propertyId
  }),
  getPriceItems: propertyId => ({
    type: propertyActions.GET_PRICE_ITEMS_REQUEST,
    propertyId
  }),
  createPriceItem: (pricing, dispatch) => ({
    type: propertyActions.CREATE_PRICE_ITEM_REQUEST,
    pricing
  })
};
/* harmony default export */ __webpack_exports__["default"] = (propertyActions);

/***/ }),

/***/ "./redux/properties/reducer.js":
/*!*************************************!*\
  !*** ./redux/properties/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propertiesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/properties/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function propertiesReducer(state = initState, action) {
  switch (action.type) {
    // List
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_PROPERTIES_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_PROPERTIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_PROPERTIES_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PROPERTY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PROPERTY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PROPERTY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Add

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_PROPERTY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_PROPERTY_SUCCESS:
      state.items.push(action.item);
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items,
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_PROPERTY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_PROPERTY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_PROPERTY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.map(item => {
          if (item.id === action.item.id) {
            item = action.item;
          }
        }),
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_PROPERTY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_PROPERTY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_PROPERTY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.propertyId),
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_PROPERTY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PRICE_ITEMS_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PRICE_ITEMS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: _objectSpread(_objectSpread({}, state.selectedItem), {}, {
          pricingItems: action.items
        }),
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_PRICE_ITEMS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/properties/saga.js":
/*!**********************************!*\
  !*** ./redux/properties/saga.js ***!
  \**********************************/
/*! exports provided: getAllProperties, getProperty, addProperty, updateProperty, deleteProperty, getPriceItems, createPriceItem, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProperties", function() { return getAllProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProperty", function() { return addProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProperty", function() { return updateProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProperty", function() { return deleteProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPriceItems", function() { return getPriceItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPriceItem", function() { return createPriceItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/properties/actions.js");
/* harmony import */ var _iso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components */ "./shared/components/index.js");
/* harmony import */ var _service_propertyApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/propertyApi */ "./service/propertyApi.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function* getAllProperties() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_PROPERTIES_REQUEST, function* () {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_propertyApi__WEBPACK_IMPORTED_MODULE_3__["default"].getAll);
      console.log("___try", res);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_PROPERTIES_SUCCESS,
        items: res
      });
    } catch (error) {
      console.log("___catch", error);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_PROPERTIES_FAILURE,
        error: error.message
      });
    }
  });
}
function* getProperty() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PROPERTY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_propertyApi__WEBPACK_IMPORTED_MODULE_3__["default"].getOne, payload.propertyId);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PROPERTY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PROPERTY_FAILURE,
        error: error.message
      });
    }
  });
}
function* addProperty() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_PROPERTY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_propertyApi__WEBPACK_IMPORTED_MODULE_3__["default"].add, payload.property);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('success', 'New Property has been created successfully');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_PROPERTY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_PROPERTY_FAILURE,
        error: error.message
      });
    }
  });
}
function* updateProperty() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_PROPERTY_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_propertyApi__WEBPACK_IMPORTED_MODULE_3__["default"].update, payload.property);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('success', 'Property has been updated successfully');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_PROPERTY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_PROPERTY_FAILURE,
        error: error.message
      });
    }
  });
}
function* deleteProperty() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_PROPERTY_REQUEST, function* (payload) {
    try {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_propertyApi__WEBPACK_IMPORTED_MODULE_3__["default"].delete, payload.propertyId);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('success', 'Property has been deleted successfully');
      next_router__WEBPACK_IMPORTED_MODULE_4__["Router"].push('/admin/property');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_PROPERTY_SUCCESS,
        propertyId: payload.propertyId
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_PROPERTY_FAILURE,
        error: error.message
      });
    }
  });
}
function* getPriceItems() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PRICE_ITEMS_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_propertyApi__WEBPACK_IMPORTED_MODULE_3__["default"].getPriceItems, payload.propertyId);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PRICE_ITEMS_SUCCESS,
        items: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PRICE_ITEMS_FAILURE,
        error: error.message
      });
    }
  });
}
function* createPriceItem() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_PRICE_ITEM_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_propertyApi__WEBPACK_IMPORTED_MODULE_3__["default"].createPriceItem, payload.pricing);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_PRICE_ITEM_SUCCESS
      });
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('success', 'Pricing item created');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_PRICE_ITEMS_REQUEST,
        propertyId: payload.pricing.property
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CREATE_PRICE_ITEM_FAILURE
      });
    }
  });
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getAllProperties), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getProperty), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(addProperty), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(updateProperty), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(deleteProperty), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getPriceItems), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(createPriceItem)]);
}

/***/ }),

/***/ "./redux/root-reducer.js":
/*!*******************************!*\
  !*** ./redux/root-reducer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _authentication_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication/reducer */ "./redux/authentication/reducer.js");
/* harmony import */ var _iso_redux_app_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/redux/app/reducer */ "./shared/redux/app/reducer.js");
/* harmony import */ var _iso_redux_contacts_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/redux/contacts/reducer */ "./shared/redux/contacts/reducer.js");
/* harmony import */ var _iso_redux_themeSwitcher_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/redux/themeSwitcher/reducer */ "./shared/redux/themeSwitcher/reducer.js");
/* harmony import */ var _iso_redux_languageSwitcher_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/redux/languageSwitcher/reducer */ "./shared/redux/languageSwitcher/reducer.js");
/* harmony import */ var _iso_redux_modal_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @iso/redux/modal/reducer */ "./shared/redux/modal/reducer.js");
/* harmony import */ var _iso_redux_quiz_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/redux/quiz/reducer */ "./shared/redux/quiz/reducer.js");
/* harmony import */ var _iso_redux_profile_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @iso/redux/profile/reducer */ "./shared/redux/profile/reducer.js");
/* harmony import */ var _redux_users_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redux/users/reducer */ "./redux/users/reducer.js");
/* harmony import */ var _redux_properties_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redux/properties/reducer */ "./redux/properties/reducer.js");
/* harmony import */ var _redux_categories_reducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redux/categories/reducer */ "./redux/categories/reducer.js");
/* harmony import */ var _redux_amenities_reducer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @redux/amenities/reducer */ "./redux/amenities/reducer.js");
/* harmony import */ var _redux_posts_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @redux/posts/reducer */ "./redux/posts/reducer.js");














/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  Auth: _authentication_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  App: _iso_redux_app_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  ThemeSwitcher: _iso_redux_themeSwitcher_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  LanguageSwitcher: _iso_redux_languageSwitcher_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  Users: _redux_users_reducer__WEBPACK_IMPORTED_MODULE_9__["default"],
  Properties: _redux_properties_reducer__WEBPACK_IMPORTED_MODULE_10__["default"],
  Amenities: _redux_amenities_reducer__WEBPACK_IMPORTED_MODULE_12__["default"],
  Categories: _redux_categories_reducer__WEBPACK_IMPORTED_MODULE_11__["default"],
  Posts: _redux_posts_reducer__WEBPACK_IMPORTED_MODULE_13__["default"],
  Contacts: _iso_redux_contacts_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  modal: _iso_redux_modal_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  quiz: _iso_redux_quiz_reducer__WEBPACK_IMPORTED_MODULE_7__["default"],
  profile: _iso_redux_profile_reducer__WEBPACK_IMPORTED_MODULE_8__["default"]
}));

/***/ }),

/***/ "./redux/root-saga.js":
/*!****************************!*\
  !*** ./redux/root-saga.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_authentication_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux/authentication/sagas */ "./redux/authentication/sagas.js");
/* harmony import */ var _redux_users_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redux/users/saga */ "./redux/users/saga.js");
/* harmony import */ var _redux_properties_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redux/properties/saga */ "./redux/properties/saga.js");
/* harmony import */ var _redux_amenities_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @redux/amenities/saga */ "./redux/amenities/saga.js");
/* harmony import */ var _redux_categories_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @redux/categories/saga */ "./redux/categories/saga.js");
/* harmony import */ var _redux_posts_saga__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redux/posts/saga */ "./redux/posts/saga.js");
/* harmony import */ var _iso_redux_contacts_saga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @iso/redux/contacts/saga */ "./shared/redux/contacts/saga.js");








function* rootSaga(getState) {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_authentication_sagas__WEBPACK_IMPORTED_MODULE_1__["default"])(), Object(_redux_users_saga__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(_redux_properties_saga__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(_redux_amenities_saga__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(_redux_categories_saga__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(_redux_posts_saga__WEBPACK_IMPORTED_MODULE_6__["default"])(), Object(_iso_redux_contacts_saga__WEBPACK_IMPORTED_MODULE_7__["default"])()]);
}

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _root_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-reducer */ "./redux/root-reducer.js");
/* harmony import */ var _root_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./root-saga */ "./redux/root-saga.js");






const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();

const bindMiddleware = middleware => {
  if (true) {
    const {
      composeWithDevTools
    } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

    return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware));
  }

  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware);
};

function configureStore(initialState = {}) {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_root_reducer__WEBPACK_IMPORTED_MODULE_4__["default"], initialState, bindMiddleware([redux_thunk__WEBPACK_IMPORTED_MODULE_3___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a, sagaMiddleware]));

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(_root_saga__WEBPACK_IMPORTED_MODULE_5__["default"]);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(redux_saga__WEBPACK_IMPORTED_MODULE_1__["END"]);
    await store.saga.done;
    store.saga = null;
  };

  store.execSagaTasks = async (isServer, tasks) => {
    // run saga
    store.runSaga(); // dispatch saga tasks

    tasks(store.dispatch); // Stop running and wait for the tasks to be done

    await store.stopSaga(); // Re-run on client side

    if (!isServer) {
      store.runSaga();
    }
  }; // Initial run


  store.runSaga();
  return store;
}

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./redux/users/actions.js":
/*!********************************!*\
  !*** ./redux/users/actions.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const userActions = {
  GET_ALL_USERS_REQUEST: 'GET_ALL_USERS_REQUEST',
  GET_ALL_USERS_SUCCESS: 'GET_ALL_USERS_SUCCESS',
  GET_ALL_USERS_FAILURE: 'GET_ALL_USERS_FAILURE',
  GET_USER_REQUEST: "GET_USER_REQUEST",
  GET_USER_SUCCESS: "GET_USER_SUCCESS",
  GET_USER_FAILURE: "GET_USER_FAILURE",
  ADD_USER_REQUEST: "ADD_USER_REQUEST",
  ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
  ADD_USER_FAILURE: "ADD_USER_FAILURE",
  UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST",
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_FAILURE: "UPDATE_USER_FAILURE",
  DELETE_USER_REQUEST: "DELETE_USER_REQUEST",
  DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
  DELETE_USER_FAILURE: "DELETE_USER_FAILURE",
  getAllUsers: () => ({
    type: userActions.GET_ALL_USERS_REQUEST
  }),
  getUser: userId => ({
    type: userActions.GET_USER_REQUEST,
    userId
  }),
  addUser: newUser => ({
    type: userActions.ADD_USER_REQUEST,
    user: newUser
  }),
  updateUser: newUser => ({
    type: userActions.UPDATE_USER_REQUEST,
    user: newUser
  }),
  deleteUser: userId => ({
    type: userActions.DELETE_USER_REQUEST,
    userId
  })
};
/* harmony default export */ __webpack_exports__["default"] = (userActions);

/***/ }),

/***/ "./redux/users/reducer.js":
/*!********************************!*\
  !*** ./redux/users/reducer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return propertiesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./redux/users/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function propertiesReducer(state = initState, action) {
  switch (action.type) {
    // List
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_USERS_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_USERS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_ALL_USERS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_USER_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_USER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].GET_USER_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: null,
        error: action.error,
        loading: false
      });
    // Add

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_USER_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_USER_SUCCESS:
      state.items.push(action.item);
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items,
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_USER_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_USER_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_USER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.map(item => {
          if (item.id === action.item.id) {
            return action.item;
          } else {
            return item;
          }
        }),
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_USER_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_USER_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_USER_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.userId),
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_USER_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/users/saga.js":
/*!*****************************!*\
  !*** ./redux/users/saga.js ***!
  \*****************************/
/*! exports provided: getAllUsers, getUser, addUser, updateUser, deleteUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllUsers", function() { return getAllUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./redux/users/actions.js");
/* harmony import */ var _iso_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components */ "./shared/components/index.js");
/* harmony import */ var _service_userApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/userApi */ "./service/userApi.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





function* getAllUsers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_USERS_REQUEST, function* () {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_userApi__WEBPACK_IMPORTED_MODULE_3__["default"].getAll);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_USERS_SUCCESS,
        items: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_ALL_USERS_FAILURE,
        error: error.message
      });
    }
  });
}
function* getUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_USER_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_userApi__WEBPACK_IMPORTED_MODULE_3__["default"].getOne, payload.userId);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_USER_SUCCESS,
        item: res
      });
    } catch (e) {
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].GET_USER_FAILURE,
        error: error.message
      });
    }
  });
}
function* addUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_USER_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_userApi__WEBPACK_IMPORTED_MODULE_3__["default"].add, payload.user);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('success', 'New user created successfully!');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_USER_REQUEST,
        item: res
      });
    } catch (e) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_USER_FAILURE,
        error: error.message
      });
    }
  });
}
function* updateUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_USER_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_userApi__WEBPACK_IMPORTED_MODULE_3__["default"].update, payload.user);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('success', 'User has been updated successfully!');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_USER_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_USER_FAILURE,
        error: error.message
      });
    }
  });
}
function* deleteUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_USER_REQUEST, function* (payload) {
    try {
      const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_service_userApi__WEBPACK_IMPORTED_MODULE_3__["default"].delete, payload.userId);
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('success', 'User has been deleted successfully!');
      next_router__WEBPACK_IMPORTED_MODULE_4__["Router"].push('/admin/user');
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE_USER_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(_iso_components__WEBPACK_IMPORTED_MODULE_2__["notification"])('warning', error.message);
      yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
        type: _actions__WEBPACK_IMPORTED_MODULE_1__["default"].UPDATE_USER_FAILURE,
        error: error.message
      });
    }
  });
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(getAllUsers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(getUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(addUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(updateUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(deleteUser)]);
}

/***/ }),

/***/ "./service/amenityApi.js":
/*!*******************************!*\
  !*** ./service/amenityApi.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env-config */ "./env-config.js");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux/authentication/auth.utils */ "./redux/authentication/auth.utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const amenityApi = {
  getAll: async () => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/amenity/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  getOne: async id => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/amenity/${id}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  add: async (amenity) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/amenity/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(amenity)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  update: async (amenity) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/amenity/${amenity.id}/`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(amenity)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  delete: async (amenityId) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/amenity/${amenityId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(handleError)
};

const handleError = res => {
  console.log("___handleError___", res);

  if (res instanceof Error) {
    throw Error('Network error');
  }

  let error = new Error(); // res.json().then((responseJson) => {
  //     error = {
  //         status: res.status,
  //         statusText: res.statusText,
  //         message: responseJson.detail || 'Application Error'
  //     }
  //     throw error
  // })

  if (res.status >= 400 && res.status < 500) {
    console.log(res.text());
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Application Error'
    };
    throw error;
  }

  if (res.status >= 500) {
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Server Error'
    };
    throw error;
  }

  error = _objectSpread(_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ __webpack_exports__["default"] = (amenityApi);

/***/ }),

/***/ "./service/categoryApi.js":
/*!********************************!*\
  !*** ./service/categoryApi.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env-config */ "./env-config.js");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux/authentication/auth.utils */ "./redux/authentication/auth.utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const categoryApi = {
  getAll: async () => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/category/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  getOne: async id => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/category/${id}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  add: async (category) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/category/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(category)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  update: async (category) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/category/${category.id}/`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(category)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  delete: async (categoryId) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/category/${categoryId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(handleError)
};

const handleError = res => {
  console.log("___handleError___", res);

  if (res instanceof Error) {
    throw Error('Network error');
  }

  let error = new Error(); // res.json().then((responseJson) => {
  //     error = {
  //         status: res.status,
  //         statusText: res.statusText,
  //         message: responseJson.detail || 'Application Error'
  //     }
  //     throw error
  // })

  if (res.status >= 400 && res.status < 500) {
    console.log(res.text());
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Application Error'
    };
    throw error;
  }

  if (res.status >= 500) {
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Server Error'
    };
    throw error;
  }

  error = _objectSpread(_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ __webpack_exports__["default"] = (categoryApi);

/***/ }),

/***/ "./service/postApi.js":
/*!****************************!*\
  !*** ./service/postApi.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env-config */ "./env-config.js");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux/authentication/auth.utils */ "./redux/authentication/auth.utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const postApi = {
  getAll: async () => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  getOne: async id => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/${id}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  add: async (post) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(post)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  update: async (post) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/${post.id}/`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(post)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  delete: async (postId) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/${postId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(handleError)
};

const handleError = res => {
  if (res instanceof Error) {
    throw Error('Network error');
  }

  let error = new Error(); // res.json().then((responseJson) => {
  //     error = {
  //         status: res.status,
  //         statusText: res.statusText,
  //         message: responseJson.detail || 'Application Error'
  //     }
  //     throw error
  // })

  if (res.status >= 400 && res.status < 500) {
    console.log(res.text());
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Application Error'
    };
    throw error;
  }

  if (res.status >= 500) {
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Server Error'
    };
    throw error;
  }

  error = _objectSpread(_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ __webpack_exports__["default"] = (postApi);

/***/ }),

/***/ "./service/propertyApi.js":
/*!********************************!*\
  !*** ./service/propertyApi.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env-config */ "./env-config.js");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux/authentication/auth.utils */ "./redux/authentication/auth.utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const propertyApi = {
  getAll: async () => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/property/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  getOne: async id => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/property/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  add: async (property) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/property/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(property)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  update: async (property) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/property/${property.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(property)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  delete: async (propertyId) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/property/${propertyId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(handleError),
  getPriceItems: async (propertyId) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/pricing/filtered_list/?property_id=${propertyId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(handleError),
  createPriceItem: async (pricing) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/accommodation/pricing/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(pricing)
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(handleError)
};

const handleError = res => {
  console.log("___handleError___", res);

  if (res instanceof Error) {
    throw Error('Network error');
  }

  let error = new Error(); // res.json().then((responseJson) => {
  //     error = {
  //         status: res.status,
  //         statusText: res.statusText,
  //         message: responseJson.detail || 'Application Error'
  //     }
  //     throw error
  // })

  if (res.status >= 400 && res.status < 500) {
    console.log(res.text());
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Application Error'
    };
    throw error;
  }

  if (res.status >= 500) {
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Server Error'
    };
    throw error;
  }

  error = _objectSpread(_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ __webpack_exports__["default"] = (propertyApi);

/***/ }),

/***/ "./service/userApi.js":
/*!****************************!*\
  !*** ./service/userApi.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../env-config */ "./env-config.js");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redux/authentication/auth.utils */ "./redux/authentication/auth.utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const userApi = {
  getAll: async () => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/users/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  getOne: async id => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/users/${id}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  add: async (user) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/users/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(user)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  update: async (user) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/users/${user.id}/`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    },
    body: JSON.stringify(user)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  delete: async (userId) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/users/${userId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__["getCookie"])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(handleError)
};

const handleError = res => {
  console.log("___handleError___", res);

  if (res instanceof Error) {
    throw Error('Network error');
  }

  let error = new Error(); // res.json().then((responseJson) => {
  //     error = {
  //         status: res.status,
  //         statusText: res.statusText,
  //         message: responseJson.detail || 'Application Error'
  //     }
  //     throw error
  // })

  if (res.status >= 400 && res.status < 500) {
    console.log(res.text());
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Application Error'
    };
    throw error;
  }

  if (res.status >= 500) {
    error = {
      status: res.status,
      statusText: res.statusText,
      message: res.detail || 'Server Error'
    };
    throw error;
  }

  error = _objectSpread(_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ __webpack_exports__["default"] = (userApi);

/***/ }),

/***/ "./shared/assets/images/flag/china.svg":
/*!*********************************************!*\
  !*** ./shared/assets/images/flag/china.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDgwMCA4MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwMCA4MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNFRDFGMzQ7IiBkPSJNMjQuODA3LDY0Ni4xNlYxNTMuODM4aDc1MC4zODd2NDAxYzAsNi41NjMsNS4zNCwxMS45MDMsMTEuOTAzLDExLjkwM2gxdjI3LjgwN2gtMQ0KCQljLTYuNTYzLDAtMTEuOTAzLDUuMzQtMTEuOTAzLDExLjkwMnYzOS43MUgyNC44MDd6IE0yNzMuNDM1LDQzNS4xOGMtNC40OTMsMC04LjcxNywxLjc1LTExLjg5NCw0LjkyOA0KCQljLTMuMTc3LDMuMTc2LTQuOTI2LDcuMzk5LTQuOTI2LDExLjg5M2MwLDQuNDkyLDEuNzUsOC43MTcsNC45MjYsMTEuODk1YzMuMTc3LDMuMTc3LDcuNDAxLDQuOTI3LDExLjg5NCw0LjkyNw0KCQljNC40OTIsMCw4LjcxNi0xLjc1LDExLjg5My00LjkyN2MzLjE3Ny0zLjE3OCw0LjkyNy03LjQwMiw0LjkyNy0xMS44OTVjMC00LjQ5My0xLjc1LTguNzE3LTQuOTI3LTExLjg5Mw0KCQlDMjgyLjE1MSw0MzYuOTMsMjc3LjkyNyw0MzUuMTgsMjczLjQzNSw0MzUuMTh6IE0yMDAuNDIsNDExLjYzNGMxLjkzNiwxLjI2LDQuMTc5LDEuOTI2LDYuNDg5LDEuOTI2DQoJCWMyLjUyOSwwLDQuOTQ5LTAuNzg3LDYuOTk4LTIuMjc1YzMuOTYyLTIuODc3LDUuNzcxLTcuOTg4LDQuNS0xMi43MTlsLTExLjk4MS00NC41ODVsMzUuODk4LTI5LjAyNw0KCQljMy44MDgtMy4wNzgsNS4zNDktOC4yNzYsMy44MzYtMTIuOTM1cy01LjgxNi03Ljk1OC0xMC43MDctOC4yMWwtNDYuMTA1LTIuMzgxbC0xNi41MTEtNDMuMTExDQoJCWMtMS43NTEtNC41NzMtNi4yMTktNy42NDUtMTEuMTE2LTcuNjQ1cy05LjM2NCwzLjA3Mi0xMS4xMTYsNy42NDVsLTE2LjUxMSw0My4xMTFsLTQ2LjEwNCwyLjM4MQ0KCQljLTQuODkxLDAuMjUyLTkuMTkzLDMuNTUyLTEwLjcwNyw4LjIxYy0xLjUxMyw0LjY1OCwwLjAyOSw5Ljg1NSwzLjgzNiwxMi45MzNsMzUuODk5LDI5LjAyN2wtMTEuOTgxLDQ0LjU4NQ0KCQljLTEuMjcxLDQuNzMsMC41MzgsOS44NDEsNC41LDEyLjcxOWMyLjA0NywxLjQ4Nyw0LjQ2NywyLjI3Myw2Ljk5OCwyLjI3M2MyLjMxLDAsNC41NTQtMC42NjUsNi40ODktMS45MjVsMzguNjk5LTI1LjE3Mw0KCQlMMjAwLjQyLDQxMS42MzR6IE0zMTQuMzEzLDM2NC4zNTRjLTcuNTg5LDAtMTQuMjYzLDUuMTI3LTE2LjIzLDEyLjQ2OGMtMS4xNjMsNC4zMzktMC41NjcsOC44NzEsMS42NzgsMTIuNzYNCgkJYzIuMjQ2LDMuODg5LDUuODczLDYuNjcyLDEwLjIxMiw3LjgzNWMxLjQzLDAuMzgzLDIuODk5LDAuNTc4LDQuMzY1LDAuNTc4YzcuNTg5LDAsMTQuMjY0LTUuMTI3LDE2LjIzMS0xMi40NjgNCgkJYzIuMzk5LTguOTU2LTIuOTM1LTE4LjE5NS0xMS44OTEtMjAuNTk2QzMxNy4yNDcsMzY0LjU0OSwzMTUuNzc4LDM2NC4zNTQsMzE0LjMxMywzNjQuMzU0eiBNMzE0LjMzNCwyODIuNTc0DQoJCWMtMS40NjYsMC0yLjkzNCwwLjE5NC00LjM2NCwwLjU3OGMtOC45NTYsMi40MDEtMTQuMjksMTEuNjQtMTEuODksMjAuNTk2YzEuOTY3LDcuMzQsOC42NDIsMTIuNDY3LDE2LjIzMywxMi40NjcNCgkJYzEuNDY1LDAsMi45MzMtMC4xOTQsNC4zNjMtMC41NzdjNC4zMzktMS4xNjIsNy45NjUtMy45NDQsMTAuMjExLTcuODM0czIuODQyLTguNDIyLDEuNjc5LTEyLjc2Mg0KCQlDMzI4LjU5OSwyODcuNzAxLDMyMS45MjQsMjgyLjU3NCwzMTQuMzM0LDI4Mi41NzR6IE0yNzMuNDM1LDIxMS43NTJjLTQuNDkzLDAtOC43MTcsMS43NS0xMS44OTQsNC45MjgNCgkJYy0zLjE3NywzLjE3Ni00LjkyNiw3LjM5OS00LjkyNiwxMS44OTJzMS43NSw4LjcxNyw0LjkyNiwxMS44OTVzNy40MDEsNC45MjcsMTEuODk0LDQuOTI3YzQuNDkyLDAsOC43MTYtMS43NSwxMS44OTMtNC45MjcNCgkJYzMuMTc3LTMuMTc4LDQuOTI3LTcuNDAyLDQuOTI3LTExLjg5NXMtMS43NS04LjcxNi00LjkyNy0xMS44OTJDMjgyLjE1MSwyMTMuNTAyLDI3Ny45MjcsMjExLjc1MiwyNzMuNDM1LDIxMS43NTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0VEMUYzNDsiIGQ9Ik03NzQuMTkzLDU1NC44Mzh2LTQwMEgyNS44MDdWNjQ1LjE2aDc0OC4zODd2LTM4LjcxYzAtNy4xMjcsNS43NzUtMTIuOTAyLDEyLjkwMy0xMi45MDJ2LTI1LjgwNw0KCQlDNzc5Ljk2OSw1NjcuNzQxLDc3NC4xOTMsNTYxLjk2Niw3NzQuMTkzLDU1NC44Mzh6IE0yNDIuOTUyLDMyNS43MzFsLTM1LjM5MiwyOC42MThsMTEuODEzLDQzLjk1Nw0KCQljMS4zODcsNS4xNjItMC41NTIsMTAuNjQ2LTQuODc3LDEzLjc4OGMtMi4yNTcsMS42NC00LjkxOCwyLjQ2Ni03LjU4NSwyLjQ2NmMtMi40NDUsMC00Ljg5MS0wLjY5Mi03LjAzNS0yLjA4OGwtMzguMTU0LTI0LjgyDQoJCWwtMzguMTU0LDI0LjgxOGMtNC40OCwyLjkxNS0xMC4yOTUsMi43NjYtMTQuNjItMC4zNzhjLTQuMzI1LTMuMTQyLTYuMjY0LTguNjI2LTQuODc3LTEzLjc4OGwxMS44MTMtNDMuOTU3bC0zNS4zOTUtMjguNjE4DQoJCWMtNC4xNTctMy4zNi01LjgxLTguOTM2LTQuMTU5LTE0LjAyYzEuNjUyLTUuMDg0LDYuMjY4LTguNjI1LDExLjYwNi04LjlsNDUuNDU1LTIuMzQ4bDE2LjI3OS00Mi41MDMNCgkJYzEuOTEyLTQuOTkxLDYuNzA1LTguMjg3LDEyLjA1LTguMjg3YzUuMzQ2LDAsMTAuMTM5LDMuMjk2LDEyLjA1LDguMjg3bDE2LjI3OCw0Mi41MDNsNDUuNDU2LDIuMzQ4DQoJCWM1LjMzOCwwLjI3NSw5Ljk1NSwzLjgxNiwxMS42MDYsOC45QzI0OC43NjIsMzE2Ljc5NSwyNDcuMTA5LDMyMi4zNzIsMjQyLjk1MiwzMjUuNzMxeiBNMjg2LjAzNSw0NjQuNjAyDQoJCWMtNi45NTksNi45NTktMTguMjQyLDYuOTU5LTI1LjIwMSwwYy02Ljk1OS02Ljk2MS02Ljk1OS0xOC4yNDQsMC0yNS4yMDFjNi45NTktNi45NjEsMTguMjQyLTYuOTYxLDI1LjIwMSwwDQoJCUMyOTIuOTk1LDQ0Ni4zNTcsMjkyLjk5NSw0NTcuNjQxLDI4Ni4wMzUsNDY0LjYwMnogTTI4Ni4wMzUsMjQxLjE3NGMtNi45NTksNi45NTktMTguMjQyLDYuOTU5LTI1LjIwMSwwDQoJCWMtNi45NTktNi45Ni02Ljk1OS0xOC4yNDMsMC0yNS4yMDFjNi45NTktNi45NjEsMTguMjQyLTYuOTYxLDI1LjIwMSwwQzI5Mi45OTUsMjIyLjkzMSwyOTIuOTk1LDIzNC4yMTMsMjg2LjAzNSwyNDEuMTc0eg0KCQkgTTMzMS41MzQsMzg1Ljc4N2MtMi41NDcsOS41MDMtMTIuMzE1LDE1LjE0NS0yMS44MiwxMi41OTdjLTkuNTA2LTIuNTQ4LTE1LjE0Ni0xMi4zMTUtMTIuNTk3LTIxLjgyDQoJCWMyLjU0Ny05LjUwNSwxMi4zMTUtMTUuMTQ1LDIxLjgyLTEyLjU5N0MzMjguNDQyLDM2Ni41MTQsMzM0LjA4LDM3Ni4yODMsMzMxLjUzNCwzODUuNzg3eiBNMzE4LjkzNiwzMTYuNjAzDQoJCWMtOS41MDQsMi41NDYtMTkuMjc0LTMuMDkzLTIxLjgyMS0xMi41OTdzMy4wOTMtMTkuMjcyLDEyLjU5Ny0yMS44MnMxOS4yNzMsMy4wOTUsMjEuODIsMTIuNTk3DQoJCUMzMzQuMDgsMzA0LjI4OCwzMjguNDQsMzE0LjA1OSwzMTguOTM2LDMxNi42MDN6Ii8+DQoJPHBhdGggZD0iTTc3NC4xOTMsNjA2LjQ1djM4LjcxSDI1LjgwN1YxNTQuODM4aDc0OC4zODd2NDAwYzAsNy4xMjgsNS43NzUsMTIuOTAzLDEyLjkwMywxMi45MDNTODAwLDU2MS45NjYsODAwLDU1NC44MzhWMTQxLjkzNQ0KCQljMC03LjEyOC01Ljc3NS0xMi45MDMtMTIuOTAzLTEyLjkwM0gxMi45MDNDNS43NzcsMTI5LjAzMSwwLDEzNC44MDcsMCwxNDEuOTM1djUxNi4xMjljMCw3LjEyOCw1Ljc3NywxMi45MDMsMTIuOTAzLDEyLjkwMw0KCQloNzc0LjE5M2M3LjEyOCwwLDEyLjkwMy01Ljc3NSwxMi45MDMtMTIuOTAzdi01MS42MTNjMC03LjEyNy01Ljc3NS0xMi45MDItMTIuOTAzLTEyLjkwMlM3NzQuMTkzLDU5OS4zMjMsNzc0LjE5Myw2MDYuNDV6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRTAwMDsiIGQ9Ik0xNjguMjA4LDM2Mi4yODNjLTEuOTM1LTEuMjYtNC4xNzgtMS45MjUtNi40ODktMS45MjVzLTQuNTU1LDAuNjY2LTYuNDg5LDEuOTI1bC0xOS4xMzgsMTIuNDQ4DQoJCWw1LjkyNC0yMi4wNDhjMS4yMjEtNC41NDItMC4zNTQtOS4zODctNC4wMTEtMTIuMzQ1bC0xNy43NTUtMTQuMzU2bDIyLjgwMi0xLjE3N2M0LjY5OC0wLjI0NCw4LjgyLTMuMjM5LDEwLjUwMi03LjYzMQ0KCQlsOC4xNjctMjEuMzE5bDguMTY3LDIxLjMxN2MxLjY4Myw0LjM5Myw1LjgwNCw3LjM4OSwxMC40OTksNy42MzNsMjIuODAyLDEuMTc3bC0xNy43NTUsMTQuMzU2DQoJCWMtMy42NTcsMi45NTgtNS4yMzEsNy44MDMtNC4wMSwxMi4zNDRsNS45MjQsMjIuMDQ4TDE2OC4yMDgsMzYyLjI4M3oiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkZFMDAwOyIgZD0iTTE2OC45NTMsMzE3LjUzbC03LjIzMy0xOC44OGwtNy4yMzIsMTguODgxYy0xLjgyNSw0Ljc2Ni02LjI4OCw4LjAwNy0xMS4zODQsOC4yNzJsLTIwLjE5NCwxLjA0Mg0KCQlsMTUuNzI1LDEyLjcxNGMzLjk2NywzLjIwOCw1LjY3Miw4LjQ1NCw0LjM0OCwxMy4zODFsLTUuMjQ3LDE5LjUyN2wxNi45NS0xMS4wMjRjMi4xMzgtMS4zOTIsNC41ODYtMi4wODcsNy4wMzUtMi4wODcNCgkJczQuODk2LDAuNjk1LDcuMDM1LDIuMDg3bDE2Ljk1LDExLjAyNGwtNS4yNDctMTkuNTI3Yy0xLjMyNS00LjkyNywwLjM4LTEwLjE3Myw0LjM0Ny0xMy4zODFsMTUuNzI1LTEyLjcxNGwtMjAuMTk0LTEuMDQyDQoJCUMxNzUuMjQsMzI1LjUzOSwxNzAuNzc4LDMyMi4yOTYsMTY4Ljk1MywzMTcuNTN6Ii8+DQoJPHBhdGggZD0iTTIzNS41MDQsMzAyLjgxMmwtNDUuNDU2LTIuMzQ5TDE3My43NywyNTcuOTZjLTEuOTEyLTQuOTkxLTYuNzA1LTguMjg4LTEyLjA1LTguMjg4cy0xMC4xMzgsMy4yOTYtMTIuMDUsOC4yODgNCgkJbC0xNi4yNzksNDIuNTAzbC00NS40NTUsMi4zNDljLTUuMzM5LDAuMjc1LTkuOTU1LDMuODE2LTExLjYwNiw4LjljLTEuNjUyLDUuMDgzLDAuMDAxLDEwLjY2LDQuMTU4LDE0LjAybDM1LjM5MywyOC42MTgNCgkJbC0xMS44MTMsNDMuOTU3Yy0xLjM4Nyw1LjE2MiwwLjU1MiwxMC42NDYsNC44NzcsMTMuNzg4YzQuMzIzLDMuMTQ0LDEwLjE0LDMuMjkzLDE0LjYyLDAuMzc4bDM4LjE1NC0yNC44MmwzOC4xNTQsMjQuODE4DQoJCWMyLjE0NCwxLjM5Niw0LjU5LDIuMDg4LDcuMDM1LDIuMDg4YzIuNjY3LDAsNS4zMjgtMC44MjQsNy41ODUtMi40NjZjNC4zMjUtMy4xNDIsNi4yNjQtOC42MjYsNC44NzctMTMuNzg4bC0xMS44MTMtNDMuOTU3DQoJCWwzNS4zOTMtMjguNjE4YzQuMTU3LTMuMzYsNS44MS04LjkzNiw0LjE1OC0xNC4wMkMyNDUuNDU5LDMwNi42MjgsMjQwLjg0MywzMDMuMDg3LDIzNS41MDQsMzAyLjgxMnogTTE4NC44MDUsMzM5LjU1OQ0KCQljLTMuOTY3LDMuMjA4LTUuNjcyLDguNDU0LTQuMzQ4LDEzLjM4MWw1LjI0OCwxOS41MjdsLTE2Ljk1LTExLjAyNGMtMi4xMzktMS4zOTItNC41ODctMi4wODctNy4wMzUtMi4wODcNCgkJcy00Ljg5NiwwLjY5NS03LjAzNSwyLjA4N2wtMTYuOTUsMTEuMDI0bDUuMjQ4LTE5LjUyN2MxLjMyNS00LjkyNy0wLjM4LTEwLjE3My00LjM0OC0xMy4zODFsLTE1LjcyNS0xMi43MTRsMjAuMTk0LTEuMDQyDQoJCWM1LjA5Ni0wLjI2Myw5LjU1OS0zLjUwNiwxMS4zODQtOC4yNzJsNy4yMzEtMTguODhsNy4yMzMsMTguODgxYzEuODI1LDQuNzY2LDYuMjg4LDguMDA3LDExLjM4NCw4LjI3MmwyMC4xOTQsMS4wNDINCgkJTDE4NC44MDUsMzM5LjU1OXoiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkUwMDA7IiBjeD0iMzE0LjMyNCIgY3k9IjI5OS4zOTUiIHI9IjE3LjgxNSIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRTAwMDsiIGN4PSIyNzMuNDM1IiBjeT0iMjI4LjU3MiIgcj0iMTcuODIiLz4NCgk8Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkUwMDA7IiBjeD0iMzE0LjMyNCIgY3k9IjM4MS4xNzYiIHI9IjE3LjgxNSIvPg0KCTxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRTAwMDsiIGN4PSIyNzMuNDM1IiBjeT0iNDUyLjAwMSIgcj0iMTcuODIiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");

/***/ }),

/***/ "./shared/assets/images/flag/france.svg":
/*!**********************************************!*\
  !*** ./shared/assets/images/flag/france.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwMCA4MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUxNi4xMjksMjQ1LjE2MXYtOTAuMzIySDI4My44NzF2NDkwLjMyMmgyMzIuMjU4VjI5Ni43NzRjMC03LjEyNiw1Ljc3NS0xMi45MDMsMTIuOTAzLTEyLjkwM3YtMjUuODA3DQoJCUM1MjEuOTA0LDI1OC4wNjQsNTE2LjEyOSwyNTIuMjg3LDUxNi4xMjksMjQ1LjE2MXoiLz4NCgk8cmVjdCB4PSIyNC44MDciIHk9IjE1My44MzkiIGZpbGw9IiMxNjRGQ0UiIHdpZHRoPSIyMzQuMjU4IiBoZWlnaHQ9IjQ5Mi4zMjIiLz4NCgk8cmVjdCB4PSIyNS44MDciIHk9IjE1NC44MzkiIGZpbGw9IiMxNjRGQ0UiIHdpZHRoPSIyMzIuMjU4IiBoZWlnaHQ9IjQ5MC4zMjIiLz4NCgk8cGF0aCBmaWxsPSIjRUQxRjM0IiBkPSJNNTQwLjkzNiw2NDYuMTYxVjI5Ni43NzRjMC02LjU2My01LjM0LTExLjkwMy0xMS45MDMtMTEuOTAzaC0xdi0yNy44MDdoMQ0KCQljNi41NjMsMCwxMS45MDMtNS4zNCwxMS45MDMtMTEuOTAzdi05MS4zMjJoMjM0LjI1OHY0OTIuMzIySDU0MC45MzZ6Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTU0MS45MzYsMjQ1LjE2MWMwLDcuMTI2LTUuNzc1LDEyLjkwMy0xMi45MDMsMTIuOTAzdjI1LjgwN2M3LjEyOCwwLDEyLjkwMyw1Ljc3NywxMi45MDMsMTIuOTAzdjM0OC4zODcNCgkJaDIzMi4yNThWMTU0LjgzOUg1NDEuOTM2VjI0NS4xNjF6Ii8+DQoJPHBhdGggZD0iTTc4Ny4wOTcsMTI5LjAzMkgxMi45MDNDNS43NzcsMTI5LjAzMiwwLDEzNC44MSwwLDE0MS45MzZ2NTE2LjEyOWMwLDcuMTI2LDUuNzc3LDEyLjkwMywxMi45MDMsMTIuOTAzaDc3NC4xOTMNCgkJYzcuMTI4LDAsMTIuOTAzLTUuNzc3LDEyLjkwMy0xMi45MDNWMTQxLjkzNkM4MDAsMTM0LjgxLDc5NC4yMjUsMTI5LjAzMiw3ODcuMDk3LDEyOS4wMzJ6IE03NzQuMTkzLDY0NS4xNjFINTQxLjkzNlYyOTYuNzc0DQoJCWMwLTcuMTI2LTUuNzc1LTEyLjkwMy0xMi45MDMtMTIuOTAzcy0xMi45MDMsNS43NzctMTIuOTAzLDEyLjkwM3YzNDguMzg3SDI4My44NzFWMTU0LjgzOWgyMzIuMjU4djkwLjMyMg0KCQljMCw3LjEyNiw1Ljc3NSwxMi45MDMsMTIuOTAzLDEyLjkwM3MxMi45MDMtNS43NzcsMTIuOTAzLTEyLjkwM3YtOTAuMzIyaDIzMi4yNThWNjQ1LjE2MXogTTI1LjgwNywxNTQuODM5aDIzMi4yNTh2NDkwLjMyMkgyNS44MDcNCgkJVjE1NC44Mzl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ "./shared/assets/images/flag/italy.svg":
/*!*********************************************!*\
  !*** ./shared/assets/images/flag/italy.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwMCA4MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTUxNi4xMjksMjQ1LjE2MXYtOTAuMzIySDI4My44NzF2NDkwLjMyMmgyMzIuMjU4VjI5Ni43NzRjMC03LjEyNiw1Ljc3Ny0xMi45MDMsMTIuOTAzLTEyLjkwM3YtMjUuODA3DQoJCUM1MjEuOTA2LDI1OC4wNjQsNTE2LjEyOSwyNTIuMjg3LDUxNi4xMjksMjQ1LjE2MXoiLz4NCgk8cmVjdCB4PSIyNC44MDciIHk9IjE1My44MzkiIGZpbGw9IiMyNTkyNDUiIHdpZHRoPSIyMzQuMjU4IiBoZWlnaHQ9IjQ5Mi4zMjIiLz4NCgk8cmVjdCB4PSIyNS44MDciIHk9IjE1NC44MzkiIGZpbGw9IiMyNTkyNDUiIHdpZHRoPSIyMzIuMjU4IiBoZWlnaHQ9IjQ5MC4zMjIiLz4NCgk8cGF0aCBmaWxsPSIjRUQxRjM0IiBkPSJNNTQwLjkzNiw2NDYuMTYxVjI5Ni43NzRjMC02LjU2My01LjM0LTExLjkwMy0xMS45MDMtMTEuOTAzaC0xdi0yNy44MDdoMQ0KCQljNi41NjMsMCwxMS45MDMtNS4zNCwxMS45MDMtMTEuOTAzdi05MS4zMjJoMjM0LjI1OHY0OTIuMzIySDU0MC45MzZ6Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTU0MS45MzYsMjQ1LjE2MWMwLDcuMTI2LTUuNzc3LDEyLjkwMy0xMi45MDMsMTIuOTAzdjI1LjgwN2M3LjEyNiwwLDEyLjkwMyw1Ljc3NywxMi45MDMsMTIuOTAzdjM0OC4zODcNCgkJaDIzMi4yNThWMTU0LjgzOUg1NDEuOTM2VjI0NS4xNjF6Ii8+DQoJPHBhdGggZD0iTTc4Ny4wOTcsMTI5LjAzMkgxMi45MDNDNS43NzcsMTI5LjAzMiwwLDEzNC44MSwwLDE0MS45MzZ2NTE2LjEyOWMwLDcuMTI2LDUuNzc3LDEyLjkwMywxMi45MDMsMTIuOTAzaDc3NC4xOTMNCgkJYzcuMTI2LDAsMTIuOTAzLTUuNzc3LDEyLjkwMy0xMi45MDNWMTQxLjkzNkM4MDAsMTM0LjgxLDc5NC4yMjMsMTI5LjAzMiw3ODcuMDk3LDEyOS4wMzJ6IE03NzQuMTkzLDY0NS4xNjFINTQxLjkzNlYyOTYuNzc0DQoJCWMwLTcuMTI2LTUuNzc3LTEyLjkwMy0xMi45MDMtMTIuOTAzcy0xMi45MDMsNS43NzctMTIuOTAzLDEyLjkwM3YzNDguMzg3SDI4My44NzFWMTU0LjgzOWgyMzIuMjU4djkwLjMyMg0KCQljMCw3LjEyNiw1Ljc3NywxMi45MDMsMTIuOTAzLDEyLjkwM3MxMi45MDMtNS43NzcsMTIuOTAzLTEyLjkwM3YtOTAuMzIyaDIzMi4yNThWNjQ1LjE2MXogTTI1LjgwNywxNTQuODM5aDIzMi4yNTh2NDkwLjMyMkgyNS44MDcNCgkJVjE1NC44Mzl6Ii8+DQo8L2c+DQo8L3N2Zz4NCg==");

/***/ }),

/***/ "./shared/assets/images/flag/spain.svg":
/*!*********************************************!*\
  !*** ./shared/assets/images/flag/spain.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSI4MDBweCIgaGVpZ2h0PSI4MDBweCIgdmlld0JveD0iMCAwIDgwMCA4MDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwMCA4MDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZmlsbD0iI0ZGRTAwMCIgZD0iTTY0NC4xNjEsNTMwLjAzMnYtMWMwLTYuNTYzLTUuMzQtMTEuOTAzLTExLjkwMy0xMS45MDNIMjQuODA3VjI4Mi44NzFoNzUwLjM4N3YyMzQuMjU4aC05MS4zMjINCgkJYy02LjU2MywwLTExLjkwMyw1LjM0LTExLjkwMywxMS45MDN2MUg2NDQuMTYxeiIvPg0KCTxwYXRoIGZpbGw9IiNGRkUwMDAiIGQ9Ik02ODMuODcxLDUxNi4xMjloOTAuMzIyVjI4My44NzFIMjUuODA3djIzMi4yNThoNjA2LjQ1MWM3LjEyNiwwLDEyLjkwMyw1Ljc3NywxMi45MDMsMTIuOTAzaDI1LjgwNw0KCQlDNjcwLjk2OCw1MjEuOTA2LDY3Ni43NDUsNTE2LjEyOSw2ODMuODcxLDUxNi4xMjl6Ii8+DQoJPHJlY3QgeD0iMjQuODA3IiB5PSIxNTMuODM5IiBmaWxsPSIjRUQxRjM0IiB3aWR0aD0iNzUwLjM4NyIgaGVpZ2h0PSIxMDUuMjI2Ii8+DQoJPHJlY3QgeD0iMjUuODA3IiB5PSIxNTQuODM5IiBmaWxsPSIjRUQxRjM0IiB3aWR0aD0iNzQ4LjM4NyIgaGVpZ2h0PSIxMDMuMjI2Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTI0LjgwNyw2NDYuMTYxVjU0MC45MzZoNjA3LjQ1MWM2LjU2MywwLDExLjkwMy01LjM0LDExLjkwMy0xMS45MDN2LTFoMjcuODA3djENCgkJYzAsNi41NjMsNS4zNCwxMS45MDMsMTEuOTAzLDExLjkwM2g5MS4zMjJ2MTA1LjIyNkgyNC44MDd6Ii8+DQoJPHBhdGggZmlsbD0iI0VEMUYzNCIgZD0iTTY4My44NzEsNTQxLjkzNmMtNy4xMjYsMC0xMi45MDMtNS43NzctMTIuOTAzLTEyLjkwM2gtMjUuODA3YzAsNy4xMjYtNS43NzcsMTIuOTAzLTEyLjkwMywxMi45MDNIMjUuODA3DQoJCXYxMDMuMjI2aDc0OC4zODdWNTQxLjkzNkg2ODMuODcxeiIvPg0KCTxwYXRoIGQ9Ik03ODcuMDk3LDEyOS4wMzJIMTIuOTAzQzUuNzc3LDEyOS4wMzIsMCwxMzQuODEsMCwxNDEuOTM2djUxNi4xMjljMCw3LjEyNiw1Ljc3NywxMi45MDMsMTIuOTAzLDEyLjkwM2g3NzQuMTkzDQoJCWM3LjEyNiwwLDEyLjkwMy01Ljc3NywxMi45MDMtMTIuOTAzVjE0MS45MzZDODAwLDEzNC44MSw3OTQuMjIzLDEyOS4wMzIsNzg3LjA5NywxMjkuMDMyeiBNNzc0LjE5MywxNTQuODM5djEwMy4yMjZIMjUuODA3DQoJCVYxNTQuODM5SDc3NC4xOTN6IE0yNS44MDcsNjQ1LjE2MVY1NDEuOTM2aDYwNi40NTFjNy4xMjYsMCwxMi45MDMtNS43NzcsMTIuOTAzLTEyLjkwM3MtNS43NzctMTIuOTAzLTEyLjkwMy0xMi45MDNIMjUuODA3DQoJCVYyODMuODcxaDc0OC4zODd2MjMyLjI1OGgtOTAuMzIyYy03LjEyNiwwLTEyLjkwMyw1Ljc3Ny0xMi45MDMsMTIuOTAzczUuNzc3LDEyLjkwMywxMi45MDMsMTIuOTAzaDkwLjMyMnYxMDMuMjI2SDI1LjgwN3oiLz4NCjwvZz4NCjwvc3ZnPg0K");

/***/ }),

/***/ "./shared/assets/images/flag/uk.svg":
/*!******************************************!*\
  !*** ./shared/assets/images/flag/uk.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/uk-bc48afcc15d5d9d51255de0b2ee708be.svg";

/***/ }),

/***/ "./shared/components/ColorChooser.style.js":
/*!*************************************************!*\
  !*** ./shared/components/ColorChooser.style.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "./shared/library/helpers/style_utils.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "./shared/library/helpers/rtl.js");



const ColorChooserDropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ColorChooserstyle__ColorChooserDropdown",
  componentId: "yqgxfr-0"
})(["display:flex;flex-flow:row wrap;max-width:160px;.ant-btn{width:20px;height:20px;border:0;outline:0;padding:0;margin:", ";", ";&:empty{visibility:visible;}&:last-child{margin:0;}&:nth-child(n + 6){margin-top:15px;}&:nth-child(5n){margin-right:0;margin-left:0;}}"], props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_1__["borderRadius"])('3px'));
/* harmony default export */ __webpack_exports__["default"] = (Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(ColorChooserDropdown));

/***/ }),

/***/ "./shared/components/ColorChoser.js":
/*!******************************************!*\
  !*** ./shared/components/ColorChoser.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _uielements_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uielements/popover */ "./shared/components/uielements/popover.js");
/* harmony import */ var _ColorChooser_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ColorChooser.style */ "./shared/components/ColorChooser.style.js");

var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\shared\\components\\ColorChoser.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function ({
  colors,
  seectedColor,
  changeColor
}) {
  const [visible, setVisibility] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);

  function hide() {
    setVisibility(false);
  }

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = () => __jsx(_ColorChooser_style__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "isoColorOptions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, colors.map((color, index) => {
    const onClick = () => {
      hide();
      changeColor(index);
    };

    const style = {
      background: color
    };
    return __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
      key: index,
      onClick: onClick,
      style: style,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 16
      }
    });
  }));

  return __jsx(_uielements_popover__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: content(),
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 5
    }
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default.a, {
    style: {
      backgroundColor: colors[seectedColor]
    },
    className: "isoColorChooser",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./shared/components/EditableComponent.js":
/*!************************************************!*\
  !*** ./shared/components/EditableComponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableComponent; });
/* harmony import */ var _ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons/lib/icons/EditOutlined */ "@ant-design/icons/lib/icons/EditOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CheckOutlined */ "@ant-design/icons/lib/icons/CheckOutlined");
/* harmony import */ var _ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uielements_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uielements/input */ "./shared/components/uielements/input.js");


var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\shared\\components\\EditableComponent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function EditableComponent(props) {
  const [state, setState] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({
    value: props.value,
    editable: false
  });

  function handleChange(event) {
    const value = event.target.value;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      value
    }));
  }

  function check() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      editable: false
    }));

    if (props.onChange) {
      props.onChange(props.itemKey, state.value);
    }
  }

  function edit() {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      editable: true
    }));
  }

  const {
    value,
    editable
  } = state;
  return __jsx("div", {
    className: "isoNoteContent",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, editable ? __jsx("div", {
    className: "isoNoteEditWrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_uielements_input__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    rows: 3,
    value: value,
    onChange: handleChange,
    onPressEnter: check,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }), __jsx(_ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "isoNoteEditIcon",
    onClick: check,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  })) : __jsx("p", {
    className: "isoNoteTextWrapper",
    onClick: edit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, value || ' ', __jsx(_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: "isoNoteEditIcon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })));
}

/***/ }),

/***/ "./shared/components/Notification.js":
/*!*******************************************!*\
  !*** ./shared/components/Notification.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/notification */ "antd/lib/notification");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__);


const createNotification = (type, message, description) => {
  antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default.a[type]({
    message,
    description
  });
};

/* harmony default export */ __webpack_exports__["default"] = (createNotification);

/***/ }),

/***/ "./shared/components/index.js":
/*!************************************!*\
  !*** ./shared/components/index.js ***!
  \************************************/
/*! exports provided: notification, ColorChoser, EditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notification */ "./shared/components/Notification.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notification", function() { return _Notification__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ColorChoser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorChoser */ "./shared/components/ColorChoser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorChoser", function() { return _ColorChoser__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _EditableComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditableComponent */ "./shared/components/EditableComponent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableComponent", function() { return _EditableComponent__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./shared/components/uielements/input.js":
/*!***********************************************!*\
  !*** ./shared/components/uielements/input.js ***!
  \***********************************************/
/*! exports provided: default, InputSearch, InputGroup, Textarea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearch", function() { return InputSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return InputGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Textarea", function() { return Textarea; });
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_input_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/input.style */ "./shared/components/uielements/styles/input.style.js");
/* harmony import */ var _iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/rtl */ "./shared/library/helpers/rtl.js");



const {
  Search,
  TextArea,
  Group
} = antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default.a;
const WDStyledInput = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_1__["InputWrapper"])(antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default.a);
const StyledInput = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(WDStyledInput);
const WDInputGroup = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_1__["InputGroupWrapper"])(Group);
const InputGroup = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(WDInputGroup);
const WDInputSearch = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_1__["InputSearchWrapper"])(Search);
const InputSearch = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(WDInputSearch);
const WDTextarea = Object(_styles_input_style__WEBPACK_IMPORTED_MODULE_1__["TextAreaWrapper"])(TextArea);
const Textarea = Object(_iso_lib_helpers_rtl__WEBPACK_IMPORTED_MODULE_2__["default"])(WDTextarea);
/* harmony default export */ __webpack_exports__["default"] = (StyledInput);


/***/ }),

/***/ "./shared/components/uielements/popover.js":
/*!*************************************************!*\
  !*** ./shared/components/uielements/popover.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/popover */ "antd/lib/popover");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./shared/components/uielements/styles/input.style.js":
/*!************************************************************!*\
  !*** ./shared/components/uielements/styles/input.style.js ***!
  \************************************************************/
/*! exports provided: InputWrapper, InputGroupWrapper, InputSearchWrapper, TextAreaWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputWrapper", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroupWrapper", function() { return InputGroupWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputSearchWrapper", function() { return InputSearchWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextAreaWrapper", function() { return TextAreaWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-theme */ "styled-theme");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/style_utils */ "./shared/library/helpers/style_utils.js");




const InputWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__InputWrapper",
  componentId: "lmpumv-0"
})(["&.ant-input{padding:4px 10px;width:100%;height:35px;cursor:text;text-align:", ";font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&.ant-input-lg{height:42px;padding:6px 10px;}&.ant-input-sm{padding:1px 10px;height:30px;}&::-webkit-input-placeholder{text-align:", ";color:", ";}&:-moz-placeholder{text-align:", ";color:", ";}&::-moz-placeholder{text-align:", ";color:", ";}&:-ms-input-placeholder{text-align:", ";color:", ";}}"], props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0));

const InputGroupWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__InputGroupWrapper",
  componentId: "lmpumv-1"
})(["&.ant-input-group{margin-bottom:10px;.ant-select{.ant-select-selector{height:35px;}}.ant-input{height:35px;}.ant-select-auto-complete{margin-right:", ";}.ant-input{border:1px solid ", ";&:first-child{border-radius:", ";}}.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child),> .ant-input:not(:first-child):not(:last-child){padding:0 7px;border-left-width:", ";margin-right:", ";}.ant-input-group-addon{padding:4px 7px;font-size:12px;color:", ";text-align:center;background-color:", ";border:1px solid ", ";", ";&:first-child{border-right-width:", ";border-left-width:", ";border-radius:", ";}&:last-child{border-right-width:", ";border-left-width:", ";border-radius:", ";}.ant-select{.ant-select-selector{height:35px;background-color:inherit;margin:-1px;border:1px solid transparent;", ";}}}.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child){border-left:0;border-right:0;}& > .ant-input:not(:first-child):not(:last-child){", ";}.ant-input:first-child:last-child{border-radius:4px;}&.ant-input-group-compact > *{border-right-width:", ";}&.ant-input-group-compact > .ant-select > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker .ant-input,&.ant-input-group-compact > .ant-select-auto-complete .ant-input,&.ant-input-group-compact > .ant-cascader-picker .ant-input,&.ant-input-group-compact > .ant-mention-wrapper .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker .ant-time-picker-input{border-right-width:", ";}&.ant-input-group-compact > *:first-child,&.ant-input-group-compact > .ant-select:first-child > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker:first-child .ant-input,&.ant-input-group-compact > .ant-select-auto-complete:first-child .ant-input,&.ant-input-group-compact > .ant-cascader-picker:first-child .ant-input,&.ant-input-group-compact > .ant-mention-wrapper:first-child .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker:first-child .ant-time-picker-input{border-radius:", ";border-left-width:1px ", ";}&.ant-input-group-compact > *:last-child,&.ant-input-group-compact > .ant-select:last-child > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input,&.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input,&.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input,&.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input{border-radius:", ";border-right-width:", ";}.ant-calendar-picker-clear,.ant-calendar-picker-icon{right:", ";left:", ";}}&.ant-input-group-lg{.ant-input,> .ant-input-group-addon{padding:6px 10px;height:35px;}}"], props => props['data-rtl'] === 'rtl' ? '-1px' : '0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0', Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 4), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), props => props['data-rtl'] === 'rtl' ? '1px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '1px' : '0', props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["boxShadow"])(), ''
/* border-left: 0; */
, props => props['data-rtl'] === 'rtl' ? '1px ' : '0', props => props['data-rtl'] === 'rtl' ? '1px ' : '0', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', ''
/* border-right-width: ${props =>
props['data-rtl'] === 'rtl' ? '1px' : '0'}; */
, props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', props => props['data-rtl'] === 'rtl' ? '0 ' : '1px', props => props['data-rtl'] === 'rtl' ? 'inherit' : '8px', props => props['data-rtl'] === 'rtl' ? '8px' : 'inherit');

const TextAreaWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__TextAreaWrapper",
  componentId: "lmpumv-2"
})(["&.ant-input{padding:4px 10px;width:100%;height:auto;cursor:text;font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0));

const InputSearchWrapper = ComponentName => styled_components__WEBPACK_IMPORTED_MODULE_0___default()(ComponentName).withConfig({
  displayName: "inputstyle__InputSearchWrapper",
  componentId: "lmpumv-3"
})(["&.ant-input-affix-wrapper{background-color:#fff;background-image:none;border:1px solid ", ";padding:4px 10px;width:100%;height:35px;max-height:35px;", ";", ";.ant-input{height:auto}&:focus,&.ant-input-affix-wrapper-focused{border-color:", ";}&.ant-input-affix-wrapper-lg{height:42px;padding:6px 10px;}&.ant-input-affix-wrapper-sm{padding:1px 10px;height:30px;}&.ant-input-search:not(.ant-input-search-enter-button){padding-right:0;}.ant-input{cursor:text;font-size:13px;line-height:1.5;color:", ";&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}.ant-input-search-icon{color:", ";&:hover{color:", ";}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('border', 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["borderRadius"])('4px'), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__["transition"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('text', 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('grayscale', 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));



/***/ }),

/***/ "./shared/config/jwt.config.js":
/*!*************************************!*\
  !*** ./shared/config/jwt.config.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  enabled: true,
  fetchUrl: "http://localhost:8000/api/rest-auth/token/obtain/",
  secretKey: "x=y#mma+9+3cixlanut$c3wnbjc)#^6qvg&jz)8p0^e3ybg&80"
});

/***/ }),

/***/ "./shared/config/language.config.js":
/*!******************************************!*\
  !*** ./shared/config/language.config.js ***!
  \******************************************/
/*! exports provided: langDir, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "langDir", function() { return langDir; });
const language = 'english';
const langDir = 'ltr';
/* harmony default export */ __webpack_exports__["default"] = (language);

/***/ }),

/***/ "./shared/config/theme/custom.js":
/*!***************************************!*\
  !*** ./shared/config/theme/custom.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./shared/config/theme/default.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({}, _default__WEBPACK_IMPORTED_MODULE_0__["default"]), {}, {
  palette: {
    primary: ['#f00'],
    secondary: ['#0f0']
  }
}));

/***/ }),

/***/ "./shared/config/theme/default.js":
/*!****************************************!*\
  !*** ./shared/config/theme/default.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {};
theme.palette = {
  primary: ['#4482FF', // 0: Default
  '#3A78F5', // 1: Darken 4%
  '#3775F2', // 2: Darken 5%
  'rgba(68, 130, 255, 0.2)', // 3: Fade 20%
  '#4C8AFF', // 4: Lighten 3%
  'rgba(68, 130, 255, 0.75)', // 5: Fade 75%
  '#6AA8FF', // 6: Lighten 15%
  '#63A1FF', // 7: Lighten 12%
  '#3F7DFA', // 8: Darken 2%
  '#3369e7', // 9: Algolia color
  '#5896FF', // 10: Lighten 8%
  '#2b69e6', // 11:
  '#236cfe', // 12: darken 10%
  '#4d88ff' // 13: Lighten 5%
  ],
  secondary: ['#2d3446', // 0: DarkBlue
  '#f1f3f6', // 1: LightBluish
  '#788195', // 2: LightBlue
  '#E4E6E9', // 3: LightBluish Darken 5%
  '#364d79', // 4:
  '#202739', // 5: DarkBlue Darken 5%
  '#f5f6f8', // 6: LighterBluish
  '#e9ebf1', // 7: DarkBluish
  '#F6F8FB', // 8: LighterBluish Lighten 2%
  '#E9EBEE', // 9: LighterBluish Darken 3%
  '#1a1a1a' // 10: Sidebar submenu select
  ],
  color: ['#FEAC01', // 0: Orange
  '#42299a', // 1: Purple
  '#F75D81', // 2: Pink
  '#7ED321', // 3: LimeGreen
  '#39435f', // 4: BlueShade
  '#FFCA28', // 5: Yellow
  '#F2BD1B', // 6: Yellow Darken 5%
  '#3b5998', // 7: Facebook
  '#344e86', // 8: Facebook Darken 5%
  '#dd4b39', // 9: Google Plus
  '#d73925', // 10: Google Plus Darken 5%
  '#e14615', // 11: Auth0
  '#ca3f13', // 12: Auth0
  '#e0364c' // 13: themeColor--AlizarinCrimson
  ],
  warning: ['#ffbf00' // 0: Warning
  ],
  success: ['#00b16a' // 0: Success
  ],
  error: ['#f64744', // 0: Error
  '#EC3D3A', // 1: Darken 4%
  '#FF5B58' // 2: Lighten 8%
  ],
  grayscale: ['#bababa', // 0: GreyShade
  '#c1c1c1', // 1: GreyDark
  '#D8D8D8', // 2: Grey
  '#f1f1f1', // 3: GreyAlt
  '#F3F3F3', // 4: GreyLight
  '#fafafa', // 5: DarkWhite
  '#F9F9F9', // 6: DarkerWhite
  '#fcfcfc', // 7: #fff Darken 1%
  '#eeeeee', // 8:
  '#fbfbfb', // 9:
  '#f5f5f5', // 10:
  '#f7f8f9' // 11: today-highlight-bg
  ],
  text: ['#323332', // 0: Heading
  '#595959', // 1: HeadingLight
  '#979797', // 2: Text
  '#797979', // 3: TextDark
  '#6a6c6a' // 4: Heading Lighten 22%
  ],
  border: ['#e9e9e9', // 0: Border
  '#d8d8d8', // 1: BorderDark
  '#ebebeb', // 2: BorderLight
  '#d3d3d3', // 3:
  'rgba(228, 228, 228, 0.65)' // 4:
  ],
  calendar: ['#905', // 0:
  '#690', // 1:
  '#a67f59', // 2:
  '#07a', // 3:
  '#dd4a68', // 4:
  '#e90' // 5:
  ]
};
theme.fonts = {
  primary: 'Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace'
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./shared/config/theme/guest.js":
/*!**************************************!*\
  !*** ./shared/config/theme/guest.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const theme = {};
theme.palette = {
  primary: ['#0071aa', // 0: Default
  '#3B87AE', '#1a2b57'],
  secondary: ['#121821', // 0: DarkBlue
  '#1a1a1a' //
  ],
  gray: ['#f8faff', '#8f8f8f', '#3a3a3a'],
  warning: ['#e8c36a', '#ffbf00' // 0: Warning
  ],
  // color: [
  //     '#0071aa', // 0: Default
  //     '#1a2b57',
  //     '#3B87AE',
  //     '#8f8f8f',
  //     '#f8faff',
  //     '#3a3a3a',
  //     '#121821',
  //     '#e8c36a',
  // ],
  success: ['#00b16a' // 0: Success
  ],
  error: ['#f64744', // 0: Error
  '#EC3D3A', // 1: Darken 4%
  '#FF5B58' // 2: Lighten 8%
  ],
  grayscale: ['#bababa', // 0: GreyShade
  '#c1c1c1', // 1: GreyDark
  '#D8D8D8', // 2: Grey
  '#f1f1f1', // 3: GreyAlt
  '#F3F3F3', // 4: GreyLight
  '#fafafa', // 5: DarkWhite
  '#F9F9F9', // 6: DarkerWhite
  '#fcfcfc', // 7: #fff Darken 1%
  '#eeeeee', // 8:
  '#fbfbfb', // 9:
  '#f5f5f5', // 10:
  '#f7f8f9' // 11: today-highlight-bg
  ],
  text: ['#2C2C2C', '#323332', // 0: Heading
  '#595959', // 1: HeadingLight
  '#979797', // 2: Text
  '#797979', // 3: TextDark
  '#6a6c6a' // 4: Heading Lighten 22%
  ],
  border: ['#e9e9e9', // 0: Border
  '#d8d8d8', // 1: BorderDark
  '#ebebeb', // 2: BorderLight
  '#d3d3d3', // 3:
  'rgba(228, 228, 228, 0.65)' // 4:
  ]
};
theme.fonts = {
  primary: 'PT Serif, serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace'
};
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./shared/config/theme/theme.config.js":
/*!*********************************************!*\
  !*** ./shared/config/theme/theme.config.js ***!
  \*********************************************/
/*! exports provided: themeConfig, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeConfig", function() { return themeConfig; });
/* harmony import */ var _default__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default */ "./shared/config/theme/default.js");
/* harmony import */ var _custom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom */ "./shared/config/theme/custom.js");
/* harmony import */ var _guest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest */ "./shared/config/theme/guest.js");



const themes = {
  defaultTheme: _default__WEBPACK_IMPORTED_MODULE_0__["default"],
  guestTheme: _guest__WEBPACK_IMPORTED_MODULE_2__["default"],
  customTheme: _custom__WEBPACK_IMPORTED_MODULE_1__["default"]
};
const themeConfig = {
  topbar: 'defaultTheme',
  sidebar: 'defaultTheme',
  layout: 'defaultTheme',
  theme: 'defaultTheme'
};
/* harmony default export */ __webpack_exports__["default"] = (themes);

/***/ }),

/***/ "./shared/config/translation/entries/en-US.js":
/*!****************************************************!*\
  !*** ./shared/config/translation/entries/en-US.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/locale-provider/en_US */ "antd/lib/locale-provider/en_US");
/* harmony import */ var antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locales/en_US.json */ "./shared/config/translation/locales/en_US.json");
var _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/en_US.json */ "./shared/config/translation/locales/en_US.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const EnLang = {
  messages: _objectSpread({}, _locales_en_US_json__WEBPACK_IMPORTED_MODULE_1__),
  antd: antd_lib_locale_provider_en_US__WEBPACK_IMPORTED_MODULE_0___default.a,
  locale: 'en-US'
};
/* harmony default export */ __webpack_exports__["default"] = (EnLang);

/***/ }),

/***/ "./shared/config/translation/entries/zh-Hans-CN.js":
/*!*********************************************************!*\
  !*** ./shared/config/translation/entries/zh-Hans-CN.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../locales/zh-Hans.json */ "./shared/config/translation/locales/zh-Hans.json");
var _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../locales/zh-Hans.json */ "./shared/config/translation/locales/zh-Hans.json", 1);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ZhLan = {
  messages: _objectSpread({}, _locales_zh_Hans_json__WEBPACK_IMPORTED_MODULE_0__),
  antd: null,
  locale: 'zh-Hans-CN'
};
/* harmony default export */ __webpack_exports__["default"] = (ZhLan);

/***/ }),

/***/ "./shared/config/translation/index.js":
/*!********************************************!*\
  !*** ./shared/config/translation/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entries_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entries/en-US */ "./shared/config/translation/entries/en-US.js");
/* harmony import */ var _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entries/zh-Hans-CN */ "./shared/config/translation/entries/zh-Hans-CN.js");


const AppLocale = {
  en: _entries_en_US__WEBPACK_IMPORTED_MODULE_0__["default"],
  zh: _entries_zh_Hans_CN__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (AppLocale);

/***/ }),

/***/ "./shared/config/translation/locales/en_US.json":
/*!******************************************************!*\
  !*** ./shared/config/translation/locales/en_US.json ***!
  \******************************************************/
/*! exports provided: sidebar.dashboard, sidebar.accommodation, sidebar.category, sidebar.amenity, sidebar.property, sidebar.users, sidebar.posts, Component.users.noOption, userlist.searchUsers, userlist.addNewUser, sidebar.email, sidebar.chat, sidebar.ecommerce, sidebar.shop, sidebar.cart, sidebar.checkout, sidebar.cards, sidebar.maps, sidebar.firestorecrud, sidebar.firestorecrudarticle, sidebar.firestorecrudinvestor, sidebar.googleMap, sidebar.leafletMap, sidebar.calendar, sidebar.notes, sidebar.todos, sidebar.contacts, sidebar.shuffle, sidebar.charts, sidebar.googleCharts, sidebar.recharts, sidebar.reactVis, sidebar.reactChart2, sidebar.reactTrend, sidebar.eChart, sidebar.forms, sidebar.input, sidebar.editor, sidebar.formsWithValidation, sidebar.progress, sidebar.button, sidebar.tab, sidebar.checkbox, sidebar.radiobox, sidebar.transfer, sidebar.autocomplete, sidebar.boxOptions, sidebar.uiElements, sidebar.badge, sidebar.card2, sidebar.corusel, sidebar.collapse, sidebar.popover, sidebar.tooltip, sidebar.tag, sidebar.timeline, sidebar.dropdown, sidebar.pagination, sidebar.rating, sidebar.tree, sidebar.advancedElements, sidebar.reactDates, sidebar.swiperslider, sidebar.codeMirror, sidebar.uppy, sidebar.dropzone, sidebar.feedback, sidebar.alert, sidebar.modal, sidebar.message, sidebar.notification, sidebar.popConfirm, sidebar.spin, sidebar.tables, sidebar.antTables, sidebar.pages, sidebar.500, sidebar.404, sidebar.signIn, sidebar.signUp, sidebar.forgotPw, sidebar.resetPw, sidebar.invoice, sidebar.menuLevels, sidebar.item1, sidebar.item2, sidebar.option1, sidebar.option2, sidebar.option3, sidebar.option4, sidebar.blankPage, sidebar.githubSearch, sidebar.youtubeSearch, sidebar.scrumboard, sidebar.profile, sidebar.quiz, sidebar.authCheck, sidebar.swiperSlider, languageSwitcher.label, themeSwitcher, themeSwitcher.Sidebar, themeSwitcher.Topbar, themeSwitcher.Background, feedback.alert.basicTitle, feedback.alert.successText, feedback.alert.infoText, feedback.alert.warningText, feedback.alert.errorText, feedback.alert.closableAlertType, feedback.alert.iconAlertType, feedback.alert.iconInfoAlertType, feedback.alert.successTips, feedback.alert.successTipsDescription, feedback.alert.informationTips, feedback.alert.informationDescription, feedback.alert.warningTips, feedback.alert.warningDescription, feedback.alert.errorTips, feedback.alert.errorDescription, feedback.alert.modalTitle, feedback.alert.modalSubTitle, feedback.alert.successTitle, feedback.alert.infoTitle, feedback.alert.errorTitle, feedback.alert.warningTitle, feedback.alert.modalBlockTitle, feedback.alert.confirmationModalDialogue, feedback.alert.simpleModalDialogue, feedback.alert.message, feedback.alert.normalMessageTitle, feedback.alert.normalMessageSubtitle, feedback.alert.displayMessage, feedback.alert.displayOtherTypeMessageTitle, feedback.alert.displayOtherTypeMessageSubTitle, feedback.alert.customizeDurationTitle, feedback.alert.customizeDurationSubTitle, feedback.alert.customizeDurationButton, feedback.alert.messageLoadingTitle, feedback.alert.messageLoadingSubTitle, feedback.alert.displayLoadIndicator, feedback.alert.notification, feedback.alert.notificationBasicTitle, feedback.alert.notificationBasicSubTitle, feedback.alert.notificationBasicDescription, feedback.alert.notificationDurationTitle, feedback.alert.notificationDurationSubTitle, feedback.alert.notificationwithIconTitle, feedback.alert.notificationwithIconSubTitle, feedback.alert.notificationwithCustomIconTitle, feedback.alert.notificationwithCustomIconSubTitle, feedback.alert.notificationwithCustomButtonTitle, feedback.alert.notificationwithCustomButtonSubTitle, feedback.alert.popConfirm, feedback.alert.popConfirm.basicTitle, feedback.alert.popConfirm.basicSubTitle, feedback.alert.popConfirm.delete, feedback.alert.popConfirm.notiWithIconTitle, feedback.alert.popConfirm.notiWithIconSubTitle, feedback.alert.popConfirm.TL, feedback.alert.popConfirm.top, feedback.alert.popConfirm.TR, feedback.alert.popConfirm.LT, feedback.alert.popConfirm.left, feedback.alert.popConfirm.LB, feedback.alert.popConfirm.RT, feedback.alert.popConfirm.right, feedback.alert.popConfirm.RB, feedback.alert.popConfirm.Bl, feedback.alert.popConfirm.bottom, feedback.alert.popConfirm.BR, feedback.alert.spin, feedback.alert.spin.basicTitle, feedback.alert.spin.background, feedback.alert.spin.backgroundDescription, feedback.alert.spin.loadingState, feedback.alert.spin.alertTitle, feedback.alert.spin.alertDescription, forms.input.header, forms.input.basicTitle, forms.input.basicSubTitle, forms.input.variationsTitle, forms.input.variationsSubtitle, forms.input.groupTitle, forms.input.groupSubTitle, forms.input.autoSizingTitle, forms.input.autoSizingSubTitle, forms.input.prePostTabTitle, forms.input.prePostTabSubTitle, forms.input.textAreaTitle, forms.input.textAreaSubTitle, forms.input.searchTitle, forms.input.searchSubTitle, forms.editor.header, forms.formsWithValidation.header, forms.formsWithValidation.failLabel, forms.formsWithValidation.failHelp, forms.formsWithValidation.warningLabel, forms.formsWithValidation.ValidatingLabel, forms.formsWithValidation.ValidatingHelp, forms.formsWithValidation.SuccessLabel, forms.formsWithValidation.WarninghasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackHelp, forms.progressBar.header, forms.progressBar.standardTitle, forms.progressBar.standardSubTitle, forms.progressBar.circularTitle, forms.progressBar.circularSubTitle, forms.progressBar.miniTitle, forms.progressBar.miniSubTitle, forms.progressBar.miniCircularTitle, forms.progressBar.dynamicCircularTitle, forms.progressBar.dynamicCircularSubTitle, forms.progressBar.customTextTitle, forms.progressBar.customTextSubTitle, forms.progressBar.dashboardTitle, forms.progressBar.dashboardSubTitle, forms.button.header, forms.button.simpleButton, forms.button.iconButton, forms.button.simpleButtonPrimaryText, forms.button.simpleButtonDefaultText, forms.button.simpleButtonDashedText, forms.button.simpleButtonDangerText, forms.button.iconPrimaryButton, forms.button.iconSimpleButton, forms.button.iconCirculerButton, forms.button.iconDashedButton, forms.button.SizedButton, forms.button.DisabledButton, forms.button.LoadingButton, forms.button.MultipleButton, forms.button.groupButton, forms.Tabs.header, forms.Tabs.simpleTabTitle, forms.Tabs.simpleTabSubTitle, forms.Tabs.iconTabTitle, forms.Tabs.miniTabTitle, forms.Tabs.extraTabTitle, forms.Tabs.TabpositionTitle, forms.Tabs.TabpositionSubTitle, forms.Tabs.cardTitle, forms.Tabs.editableTitle, forms.Tabs.verticalTitle, forms.Tabs.basicTitle, forms.checkbox.header, forms.checkbox.basicTitle, forms.checkbox.basicSubTitle, forms.checkbox.groupTitle, forms.checkbox.groupSubTitle, forms.checkbox.groupCheckTitle, forms.checkbox.groupCheckSubTitle, forms.radio.header, forms.radio.simpleTitle, forms.radio.simpleSubTitle, forms.radio.groupTitle, forms.radio.groupSubTitle, forms.radio.groupSecondTitle, forms.radio.groupSecondSubTitle, forms.radio.groupThirdTitle, forms.radio.groupThirdSubTitle, forms.transfer.header, forms.transfer.SubTitle, forms.transfer.Title, forms.autocomplete.header, forms.autocomplete.simpleTitle, forms.autocomplete.simpleSubTitle, forms.autocomplete.customizeTitle, forms.autocomplete.customizeSubTitle, uiElements.badge.badge, uiElements.badge.basicExample, uiElements.badge.basicExampleSubTitle, uiElements.badge.overflowCount, uiElements.badge.overflowCountSubTitle, uiElements.badge.status, uiElements.badge.statusSubTitle, uiElements.badge.success, uiElements.badge.error, uiElements.badge.default, uiElements.badge.processing, uiElements.badge.warning, uiElements.badge.redBadge, uiElements.badge.redBadgeSubTitle, uiElements.badge.linkSomething, uiElements.cards.cards, uiElements.cards.basicCard, uiElements.cards.basicCardSubTitle, uiElements.cards.more, uiElements.cards.cardTitle, uiElements.cards.cardContent, uiElements.cards.lorem, uiElements.cards.noBorder, uiElements.cards.noBorderSubTitle, uiElements.cards.gridCard, uiElements.cards.gridCardSubTitle, uiElements.cards.loadingCard, uiElements.cards.loadingCardSubTitle, uiElements.cards.whateverContent, uiElements.cards.customizedContentTitle, uiElements.cards.customizedContent, uiElements.cards.europeStreetBeat, uiElements.cards.instagram, uiElements.carousel.carousel, uiElements.carousel.verticalCarousel, uiElements.carousel.verticalCarouselSubTitle, uiElements.carousel.basicCarousel, uiElements.carousel.basicCarouselSubTitle, uiElements.carousel.fadeInTransition, uiElements.carousel.fadeInTransitionSubTitle, uiElements.carousel.scrollAutomatically, uiElements.carousel.scrollAutomaticallySubTitle, uiElements.collapse.collapse, uiElements.collapse.collapseSubTitle, uiElements.collapse.text, uiElements.collapse.headerOne, uiElements.collapse.headerTwo, uiElements.collapse.headerThree, uiElements.collapse.headerNested, uiElements.collapse.nestedExample, uiElements.collapse.nestedExampleSubTitle, uiElements.collapse.borderlessExample, uiElements.collapse.borderlessExampleSubTitle, uiElements.collapse.accordion, uiElements.collapse.accordionSubTitle, uiElements.popover.popover, uiElements.popover.basicExample, uiElements.popover.basicExampleSubTitle, uiElements.popover.hoverMe, uiElements.popover.title, uiElements.popover.titleTrigger, uiElements.popover.titleTriggerSubTitle, uiElements.popover.focusMe, uiElements.popover.clickMe, uiElements.popover.placement, uiElements.popover.placementSubTitle, uiElements.popover.top, uiElements.popover.topLeft, uiElements.popover.topRight, uiElements.popover.leftTop, uiElements.popover.left, uiElements.popover.leftBottom, uiElements.popover.rightTop, uiElements.popover.right, uiElements.popover.bottom, uiElements.popover.bottomLeft, uiElements.popover.bottomRight, uiElements.popover.boxTitle, uiElements.popover.boxSubTitle, uiElements.popover.TR, uiElements.popover.TL, uiElements.popover.LT, uiElements.popover.LB, uiElements.popover.RT, uiElements.popover.RB, uiElements.popover.BL, uiElements.popover.BR, uiElements.popover.close, uiElements.tooltip.tooltip, uiElements.tooltip.tooltipContent, uiElements.tooltip.basicExample, uiElements.tooltip.basicExampleSubTitle, uiElements.tooltip.placementTitle, uiElements.tooltip.placementSubTitle, uiElements.tooltip.TL, uiElements.tooltip.TR, uiElements.tooltip.LT, uiElements.tooltip.LB, uiElements.tooltip.RT, uiElements.tooltip.RB, uiElements.tooltip.BL, uiElements.tooltip.BR, uiElements.tooltip.bottom, uiElements.tooltip.right, uiElements.tooltip.left, uiElements.tooltip.top, uiElements.tooltip.tooltipContentSpan, uiElements.tooltip.contentSpan, uiElements.tags.tags, uiElements.tags.basicExample, uiElements.tags.basicExampleSubTitle, uiElements.tags.tagOne, uiElements.tags.tagTwo, uiElements.tags.link, uiElements.tags.preventDefault, uiElements.tags.colorfulTag, uiElements.tags.hotTags, uiElements.tags.hotTagsSubTitle, uiElements.tags.hots, uiElements.tags.addRemoveDynamically, uiElements.tags.addRemoveDynamicallySubTitle, uiElements.tags.newTag, uiElements.timeline.timeline, uiElements.timeline.basicExample, uiElements.timeline.basicTimeline, uiElements.timeline.lastNode, uiElements.timeline.lastNodeContent, uiElements.timeline.seeMore, uiElements.timeline.custom, uiElements.timeline.customContent, uiElements.timeline.colorExample, uiElements.timeline.colorExampleContent, uiElements.timeline.createServiceSite, uiElements.timeline.solveInitialNetwork, uiElements.timeline.networkProblemSolved, uiElements.timeline.technicalTesting, uiElements.dropdown.dropdown, uiElements.dropdown.hoverDropdown, uiElements.dropdown.hoverMe, uiElements.dropdown.hoverPlacement, uiElements.dropdown.hoverDisableLink, uiElements.dropdown.clickedDropdown, uiElements.dropdown.buttonDropdown, uiElements.pagination.pagination, uiElements.pagination.basic, uiElements.pagination.more, uiElements.pagination.changer, uiElements.pagination.jumper, uiElements.pagination.miniSize, uiElements.pagination.simpleMode, uiElements.pagination.controlled, uiElements.pagination.totalNumber, uiElements.rating.rating, uiElements.rating.basicExample, uiElements.rating.basicExampleSubTitle, uiElements.rating.halfStar, uiElements.rating.halfStarSubTitle, uiElements.rating.showCopywriting, uiElements.rating.showCopywritingSubTitle, uiElements.rating.readOnly, uiElements.rating.readOnlySubTitle, uiElements.rating.otherCharacter, uiElements.rating.otherCharacterSubTitle, uiElements.tree.tree, uiElements.tree.basicExample, uiElements.tree.basicExampleSubTitle, uiElements.tree.basicControlledExample, uiElements.tree.basicControlledExampleSubTitle, uiElements.tree.draggableExample, uiElements.tree.draggableExampleSubTitle, uiElements.tree.loadAsync, uiElements.tree.loadAsyncSubTitle, uiElements.tree.searchableExample, uiElements.tree.searchableExampleSubTitle, uiElements.tree.treeWithLine, shuffle.descriptionOne, shuffle.descriptionTwo, shuffle.descriptionThree, shuffle.descriptionFour, shuffle.descriptionFive, shuffle.descriptionSix, shuffle.descriptionSeven, toggle.list, toggle.grid, toggle.ascending, toggle.descending, toggle.shuffle, toggle.rotate, toggle.addItem, toggle.removeItem, contactlist.searchContacts, contactlist.addNewContact, notes.ChoseColor, notes.addNote, page404.title, page404.subTitle, page404.description, page404.backButton, page500.title, page500.subTitle, page500.description, page500.backButton, page.forgetPassTitle, page.forgetPassSubTitle, page.forgetPassDescription, page.sendRequest, page.resetPassTitle, page.resetPassSubTitle, page.resetPassDescription, page.resetPassSave, page.signInTitle, page.signInRememberMe, page.signInButton, page.signInPreview, page.signInFacebook, page.signInGooglePlus, page.signInAuth0, page.signInMobile, page.signUpMobile, page.signInForgotPass, page.signInCreateAccount, page.signUpTitle, page.signUpTermsConditions, page.signUpButton, page.signUpFacebook, page.signUpGooglePlus, page.signUpAuth0, page.signUpAlreadyAccount, widget.reportswidget.label, widget.reportswidget.details, widget.singleprogresswidget1.label, widget.singleprogresswidget2.label, widget.singleprogresswidget3.label, widget.singleprogresswidget4.label, widget.stickerwidget1.number, widget.stickerwidget1.text, widget.stickerwidget2.number, widget.stickerwidget2.text, widget.stickerwidget3.number, widget.stickerwidget3.text, widget.stickerwidget4.number, widget.stickerwidget4.text, widget.salewidget1.label, widget.salewidget1.price, widget.salewidget1.details, widget.salewidget2.label, widget.salewidget2.price, widget.salewidget2.details, widget.salewidget3.label, widget.salewidget3.price, widget.salewidget3.details, widget.salewidget4.label, widget.salewidget4.price, widget.salewidget4.details, widget.cardwidget1.number, widget.cardwidget1.text, widget.cardwidget2.number, widget.cardwidget2.text, widget.cardwidget3.number, widget.cardwidget3.text, widget.progresswidget1.label, widget.progresswidget1.details, widget.progresswidget2.label, widget.progresswidget2.details, widget.progresswidget3.label, widget.progresswidget3.details, widget.vcardwidget.name, widget.vcardwidget.title, widget.vcardwidget.description, checkout.billingform.firstname, checkout.billingform.lastname, checkout.billingform.company, checkout.billingform.email, checkout.billingform.mobile, checkout.billingform.country, checkout.billingform.city, checkout.billingform.address, checkout.billingform.addressoptional, checkout.billingform.checkbox, antTable.title.image, antTable.title.firstName, antTable.title.lastName, antTable.title.city, antTable.title.street, antTable.title.email, antTable.title.dob, Map.leaflet.basicTitle, Map.leaflet.basicMarkerTitle, Map.leaflet.leafletCustomMarkerTitle, Map.leaflet.leafletCustomHtmlMarkerTitle, Map.leaflet.leafletMarkerClusterTitle, Map.leaflet.leafletRoutingTitle, Component.contacts.noOption, email.send, email.cancel, email.compose, email.noMessage, themeSwitcher.purchase, themeSwitcher.settings, sidebar.selectbox, sidebar.frappeChart, topbar.myprofile, topbar.help, topbar.logout, topbar.viewAll, topbar.viewCart, topbar.totalPrice, Swiper.basic.basicTitle, Swiper.bullet.bulletTitle, Swiper.progress.progressTitle, Swiper.fraction.fractionTitle, Swiper.numbered.numberedTitle, Swiper.scroll.scrollTitle, Swiper.verticle.verticleTitle, Swiper.multiple.multipleGridTitle, Swiper.free.freeTitle, Swiper.multirow.multirowTitle, Swiper.cursor.cursorTitle, Swiper.loop.infiniteTitle, Swiper.wheel.wheelTitle, Swiper.auto.autoPlayTitle, Swiper.lazy.lazyTitle, Swiper.custom.customScrollTitle, Swiper.custom.basicNavTitle, Swiper.custom.buttonNavTitle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.dashboard\":\"Dashboard\",\"sidebar.accommodation\":\"Accommodation\",\"sidebar.category\":\"Category\",\"sidebar.amenity\":\"Amenity\",\"sidebar.property\":\"Property\",\"sidebar.users\":\"Users\",\"sidebar.posts\":\"Posts\",\"Component.users.noOption\":\"No user found\",\"userlist.searchUsers\":\"Search Users\",\"userlist.addNewUser\":\"Add New User\",\"sidebar.email\":\"Email\",\"sidebar.chat\":\"Chat\",\"sidebar.ecommerce\":\"Ecommerce\",\"sidebar.shop\":\"Shop\",\"sidebar.cart\":\"Cart\",\"sidebar.checkout\":\"Checkout\",\"sidebar.cards\":\"Cards\",\"sidebar.maps\":\"Maps\",\"sidebar.firestorecrud\":\"Firestore CRUD\",\"sidebar.firestorecrudarticle\":\"Articles\",\"sidebar.firestorecrudinvestor\":\"Investors\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.leafletMap\":\"Leaflet Map\",\"sidebar.calendar\":\"Calendar\",\"sidebar.notes\":\"Notes\",\"sidebar.todos\":\"Todos\",\"sidebar.contacts\":\"Contacts\",\"sidebar.shuffle\":\"Shuffle\",\"sidebar.charts\":\"Charts\",\"sidebar.googleCharts\":\"Google Carts\",\"sidebar.recharts\":\"Recharts\",\"sidebar.reactVis\":\"React Vis\",\"sidebar.reactChart2\":\"React-Chart-2\",\"sidebar.reactTrend\":\"React-Trend\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"Forms\",\"sidebar.input\":\"Input\",\"sidebar.editor\":\"Editor\",\"sidebar.formsWithValidation\":\"Forms With Validation\",\"sidebar.progress\":\"Progress\",\"sidebar.button\":\"Button\",\"sidebar.tab\":\"Tab\",\"sidebar.checkbox\":\"Checkbox\",\"sidebar.radiobox\":\"Radiobox\",\"sidebar.transfer\":\"Transfer\",\"sidebar.autocomplete\":\"AutoComplete\",\"sidebar.boxOptions\":\"Box Options\",\"sidebar.uiElements\":\"UI Elements\",\"sidebar.badge\":\"Badge\",\"sidebar.card2\":\"Card\",\"sidebar.corusel\":\"Carousal\",\"sidebar.collapse\":\"Collapse\",\"sidebar.popover\":\"Pop Over\",\"sidebar.tooltip\":\"Tooltip\",\"sidebar.tag\":\"Tag\",\"sidebar.timeline\":\"Timeline\",\"sidebar.dropdown\":\"Dropdown\",\"sidebar.pagination\":\"Pagination\",\"sidebar.rating\":\"Rating\",\"sidebar.tree\":\"Tree\",\"sidebar.advancedElements\":\"Advanced Elements\",\"sidebar.reactDates\":\"React Dates\",\"sidebar.swiperslider\":\"Swiper Slider\",\"sidebar.codeMirror\":\"Code Mirror\",\"sidebar.uppy\":\"Uppy Uploader\",\"sidebar.dropzone\":\"Drop Zone\",\"sidebar.feedback\":\"Feedback\",\"sidebar.alert\":\"Alert\",\"sidebar.modal\":\"Modal\",\"sidebar.message\":\"Message\",\"sidebar.notification\":\"Notification\",\"sidebar.popConfirm\":\"Pop Confirm\",\"sidebar.spin\":\"Spin\",\"sidebar.tables\":\"Tables\",\"sidebar.antTables\":\"Ant Tables\",\"sidebar.pages\":\"Pages\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"Sign In\",\"sidebar.signUp\":\"Sign Up\",\"sidebar.forgotPw\":\"Forgot Passwords\",\"sidebar.resetPw\":\"Reset Passwords\",\"sidebar.invoice\":\"Invoice\",\"sidebar.menuLevels\":\"Menu Levels\",\"sidebar.item1\":\"Item 1\",\"sidebar.item2\":\"Item 2\",\"sidebar.option1\":\"Option 1\",\"sidebar.option2\":\"Option 2\",\"sidebar.option3\":\"Option 3\",\"sidebar.option4\":\"Option 4\",\"sidebar.blankPage\":\"Blank Page\",\"sidebar.githubSearch\":\"Github Search\",\"sidebar.youtubeSearch\":\"Youtube Search\",\"sidebar.scrumboard\":\"Scrum Board\",\"sidebar.profile\":\"Profile\",\"sidebar.quiz\":\"Quiz\",\"sidebar.authCheck\":\"Check Auth Status\",\"sidebar.swiperSlider\":\"Swiper Slider\",\"languageSwitcher.label\":\"Change Language\",\"themeSwitcher\":\"Theme Switcher\",\"themeSwitcher.Sidebar\":\"Sidebar\",\"themeSwitcher.Topbar\":\"Topbar\",\"themeSwitcher.Background\":\"Background\",\"feedback.alert.basicTitle\":\"Basic Title\",\"feedback.alert.successText\":\"Success text\",\"feedback.alert.infoText\":\"Info Text\",\"feedback.alert.warningText\":\"Warning Text\",\"feedback.alert.errorText\":\"Error Text\",\"feedback.alert.closableAlertType\":\"Closable Alert Type\",\"feedback.alert.iconAlertType\":\"Icon Alert Type\",\"feedback.alert.iconInfoAlertType\":\"Icon Info Alert Type\",\"feedback.alert.successTips\":\"success tips\",\"feedback.alert.successTipsDescription\":\"Detailed description and advices about successful copywriting.\",\"feedback.alert.informationTips\":\"Informational Notes\",\"feedback.alert.informationDescription\":\"Additional description and informations about copywriting.\",\"feedback.alert.warningTips\":\"Warning\",\"feedback.alert.warningDescription\":\"This is a warning notice about copywriting.\",\"feedback.alert.errorTips\":\"Error\",\"feedback.alert.errorDescription\":\"This is an error message about copywriting.\",\"feedback.alert.modalTitle\":\"Modal one with customize Footer\",\"feedback.alert.modalSubTitle\":\"Basic modal dialog.\",\"feedback.alert.successTitle\":\"Success\",\"feedback.alert.infoTitle\":\"Info\",\"feedback.alert.errorTitle\":\"Error\",\"feedback.alert.warningTitle\":\"Warning\",\"feedback.alert.modalBlockTitle\":\"Modal\",\"feedback.alert.confirmationModalDialogue\":\"Confirmation modal dialog\",\"feedback.alert.simpleModalDialogue\":\"Simple modal dialog\",\"feedback.alert.message\":\"Message\",\"feedback.alert.normalMessageTitle\":\"Normal Message\",\"feedback.alert.normalMessageSubtitle\":\"Normal messages as feedbacks.\",\"feedback.alert.displayMessage\":\"Display normal message\",\"feedback.alert.displayOtherTypeMessageTitle\":\"Other Types of Message\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"Messages of success   error and warning types.\",\"feedback.alert.customizeDurationTitle\":\"Customize duration\",\"feedback.alert.customizeDurationSubTitle\":\"ustomize message display duration from default 1.5s to 10s.\",\"feedback.alert.customizeDurationButton\":\"Customized display duration\",\"feedback.alert.messageLoadingTitle\":\"Message of loading\",\"feedback.alert.messageLoadingSubTitle\":\"Display a global loading indicator   which is dismissed by itself asynchronously.\",\"feedback.alert.displayLoadIndicator\":\"Display a loading indicator\",\"feedback.alert.notification\":\"Notification\",\"feedback.alert.notificationBasicTitle\":\"Basic\",\"feedback.alert.notificationBasicSubTitle\":\"The simplest usage that close the notification box after 4.5s.\",\"feedback.alert.notificationBasicDescription\":\"Open the notification box\",\"feedback.alert.notificationDurationTitle\":\"Duration after which the notification box is closed\",\"feedback.alert.notificationDurationSubTitle\":\"Duration can be used to specify how long the notification stays open. After the duration time elapses   the notification closes automatically. If not specified   default value is 4.5 seconds. If you set the value to 0   the notification box will never close automatically.\",\"feedback.alert.notificationwithIconTitle\":\"Notification with icon\",\"feedback.alert.notificationwithIconSubTitle\":\"A notification box with a icon at the left side.\",\"feedback.alert.notificationwithCustomIconTitle\":\"Notification with custom icon\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"Normal messages as feedbacks.\",\"feedback.alert.notificationwithCustomButtonTitle\":\"Notification with custom button\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"Normal messages as feedbacks.\",\"feedback.alert.popConfirm\":\"Pop Confirm\",\"feedback.alert.popConfirm.basicTitle\":\"Basic Confirm\",\"feedback.alert.popConfirm.basicSubTitle\":\"The basic example.\",\"feedback.alert.popConfirm.delete\":\"Delete\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"Notification with custom icon\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"Normal messages as feedbacks.\",\"feedback.alert.popConfirm.TL\":\"TL\",\"feedback.alert.popConfirm.top\":\"Top\",\"feedback.alert.popConfirm.TR\":\"TR\",\"feedback.alert.popConfirm.LT\":\"LT\",\"feedback.alert.popConfirm.left\":\"Left\",\"feedback.alert.popConfirm.LB\":\"LB\",\"feedback.alert.popConfirm.RT\":\"RT\",\"feedback.alert.popConfirm.right\":\"Right\",\"feedback.alert.popConfirm.RB\":\"RB\",\"feedback.alert.popConfirm.Bl\":\"BL\",\"feedback.alert.popConfirm.bottom\":\"Bottom\",\"feedback.alert.popConfirm.BR\":\"BR\",\"feedback.alert.spin\":\"Spin\",\"feedback.alert.spin.basicTitle\":\"Size Spin\",\"feedback.alert.spin.background\":\"Spin With Background\",\"feedback.alert.spin.backgroundDescription\":\"Spin With Background description\",\"feedback.alert.spin.loadingState\":\"Loading State\",\"feedback.alert.spin.alertTitle\":\"Alert message title\",\"feedback.alert.spin.alertDescription\":\"Further details about the context of this alert.\",\"forms.input.header\":\"Input\",\"forms.input.basicTitle\":\"Basic usage\",\"forms.input.basicSubTitle\":\"Basic usage example.\",\"forms.input.variationsTitle\":\"Three sizes of Input\",\"forms.input.variationsSubtitle\":\"There are three sizes of an Input box  large (42px  、default (35px   and small (30px  . Note  Inside of forms   only the large size is used.\",\"forms.input.groupTitle\":\"Input Group\",\"forms.input.groupSubTitle\":\"Input.Group example Note  You dont need Col to control the width in the compact mode.\",\"forms.input.autoSizingTitle\":\"Autosizing the height to fit the content\",\"forms.input.autoSizingSubTitle\":\"autosize prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to autosize to specify the minimum and maximum number of lines the textarea will automatically adjust.\",\"forms.input.prePostTabTitle\":\"Pre    Post tab\",\"forms.input.prePostTabSubTitle\":\"Using pre &amp; post tabs example..\",\"forms.input.textAreaTitle\":\"Textarea\",\"forms.input.textAreaSubTitle\":\"For multi-line user input cases   an input whose type prop has the value of textarea can be used.\",\"forms.input.searchTitle\":\"Search\",\"forms.input.searchSubTitle\":\"Example of creating a search box by grouping a standard input with a search button\",\"forms.editor.header\":\"Editor\",\"forms.formsWithValidation.header\":\"Customized Validation Form\",\"forms.formsWithValidation.failLabel\":\"Fail\",\"forms.formsWithValidation.failHelp\":\"Should be combination of numbers & alphabets\",\"forms.formsWithValidation.warningLabel\":\"Warning\",\"forms.formsWithValidation.ValidatingLabel\":\"Validating\",\"forms.formsWithValidation.ValidatingHelp\":\"The information is being validated...\",\"forms.formsWithValidation.SuccessLabel\":\"Success\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"Warning\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"Fail\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"Should be combination of numbers & alphabets\",\"forms.progressBar.header\":\"Progress Bar\",\"forms.progressBar.standardTitle\":\"Progress bar\",\"forms.progressBar.standardSubTitle\":\"A standard progress bar.\",\"forms.progressBar.circularTitle\":\"Circular Progress bar\",\"forms.progressBar.circularSubTitle\":\"A circular progress bar.\",\"forms.progressBar.miniTitle\":\"Mini size progress bar\",\"forms.progressBar.miniSubTitle\":\"Appropriate for a narrow area.\",\"forms.progressBar.miniCircularTitle\":\"A smaller circular progress bar.\",\"forms.progressBar.dynamicCircularTitle\":\"Dynamic circular progress bar\",\"forms.progressBar.dynamicCircularSubTitle\":\"A dynamic progress bar is better.\",\"forms.progressBar.customTextTitle\":\"Custom text format\",\"forms.progressBar.customTextSubTitle\":\"You can custom text format by setting format.\",\"forms.progressBar.dashboardTitle\":\"Dashboard\",\"forms.progressBar.dashboardSubTitle\":\"A dashboard style of progress.\",\"forms.button.header\":\"Buttons\",\"forms.button.simpleButton\":\"Button Type\",\"forms.button.iconButton\":\"Button Icon\",\"forms.button.simpleButtonPrimaryText\":\"Primary\",\"forms.button.simpleButtonDefaultText\":\"Default\",\"forms.button.simpleButtonDashedText\":\"Dashed\",\"forms.button.simpleButtonDangerText\":\"Danger\",\"forms.button.iconPrimaryButton\":\"search\",\"forms.button.iconSimpleButton\":\"search\",\"forms.button.iconCirculerButton\":\"search\",\"forms.button.iconDashedButton\":\"search\",\"forms.button.SizedButton\":\"Button Size\",\"forms.button.DisabledButton\":\"Button Disabled\",\"forms.button.LoadingButton\":\"Button Loading\",\"forms.button.MultipleButton\":\"Multiple Button\",\"forms.button.groupButton\":\"Button Group\",\"forms.Tabs.header\":\"Tabs\",\"forms.Tabs.simpleTabTitle\":\"search\",\"forms.Tabs.simpleTabSubTitle\":\"Disabled Tabs\",\"forms.Tabs.iconTabTitle\":\"Icon Tabs\",\"forms.Tabs.miniTabTitle\":\"Mini Tabs\",\"forms.Tabs.extraTabTitle\":\"Extra Action Tabs\",\"forms.Tabs.TabpositionTitle\":\"Position\",\"forms.Tabs.TabpositionSubTitle\":\"Tabss position  left   right   top or bottom\",\"forms.Tabs.cardTitle\":\"Card Type Tabs\",\"forms.Tabs.editableTitle\":\"Add and Close Tabs\",\"forms.Tabs.verticalTitle\":\"Vertical Type Tabs\",\"forms.Tabs.basicTitle\":\"Basic Tabs\",\"forms.checkbox.header\":\"Checkbox\",\"forms.checkbox.basicTitle\":\"Basic Checkbox\",\"forms.checkbox.basicSubTitle\":\"Basic usage of checkbox.\",\"forms.checkbox.groupTitle\":\"Checkbox Group\",\"forms.checkbox.groupSubTitle\":\"Generate a group of checkboxes from an array. Use disabled to disable a checkbox.\",\"forms.checkbox.groupCheckTitle\":\"Checkbox Group\",\"forms.checkbox.groupCheckSubTitle\":\"Generate a group of checkboxes from an array. Use disabled to disable a checkbox.\",\"forms.radio.header\":\"Radio\",\"forms.radio.simpleTitle\":\"Basic Radio\",\"forms.radio.simpleSubTitle\":\"The simplest use. Use disabled to disable a radio.\",\"forms.radio.groupTitle\":\"Vertical RadioGroup\",\"forms.radio.groupSubTitle\":\"Vertical RadioGroup   with more radios.\",\"forms.radio.groupSecondTitle\":\"RadioGroup\",\"forms.radio.groupSecondSubTitle\":\"A group of radio components.\",\"forms.radio.groupThirdTitle\":\"RadioGroup\",\"forms.radio.groupThirdSubTitle\":\"A group of radio components.\",\"forms.transfer.header\":\"Transfer\",\"forms.transfer.SubTitle\":\"Transfer with a search box.\",\"forms.transfer.Title\":\"Search\",\"forms.autocomplete.header\":\"Autocomplete\",\"forms.autocomplete.simpleTitle\":\"Customized\",\"forms.autocomplete.simpleSubTitle\":\"You could pass AutoComplete.Option as children of AutoComplete   instead of using dataSource\",\"forms.autocomplete.customizeTitle\":\"Customize Input Component\",\"forms.autocomplete.customizeSubTitle\":\"Customize Input Component\",\"uiElements.badge.badge\":\"Badge\",\"uiElements.badge.basicExample\":\"Basic Example\",\"uiElements.badge.basicExampleSubTitle\":\"Simplest Usage. Badge will be hidden when count is 0   but we can use showZero to show it.\",\"uiElements.badge.overflowCount\":\"Overflow Count\",\"uiElements.badge.overflowCountSubTitle\":\"OverflowCount is displayed when count is larger than overflowCount. The default value of overflowCount is 99.\",\"uiElements.badge.status\":\"Status\",\"uiElements.badge.statusSubTitle\":\"Standalone badge with status.\",\"uiElements.badge.success\":\"Success\",\"uiElements.badge.error\":\"Error\",\"uiElements.badge.default\":\"Default\",\"uiElements.badge.processing\":\"Processing\",\"uiElements.badge.warning\":\"Warning\",\"uiElements.badge.redBadge\":\"Red badge\",\"uiElements.badge.redBadgeSubTitle\":\"This will simply display a red badge   without a specific count.\",\"uiElements.badge.linkSomething\":\"Link something\",\"uiElements.cards.cards\":\"Cards\",\"uiElements.cards.basicCard\":\"Basic card\",\"uiElements.cards.basicCardSubTitle\":\"A basic card containing a title   content and an extra corner content.\",\"uiElements.cards.more\":\"More\",\"uiElements.cards.cardTitle\":\"Card Title\",\"uiElements.cards.cardContent\":\"Card content\",\"uiElements.cards.lorem\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\",\"uiElements.cards.noBorder\":\"No Border\",\"uiElements.cards.noBorderSubTitle\":\"A borderless card on a gray background.\",\"uiElements.cards.gridCard\":\"Grid card\",\"uiElements.cards.gridCardSubTitle\":\"Cards usually cooperate with grid layout in overview page.\",\"uiElements.cards.loadingCard\":\"Loading card\",\"uiElements.cards.loadingCardSubTitle\":\"Shows a loading indicator while the contents of the card is being fetched.\",\"uiElements.cards.whateverContent\":\"Whatever content\",\"uiElements.cards.customizedContentTitle\":\"Customized Content\",\"uiElements.cards.customizedContent\":\"Shows a loading indicator while the contents of the card is being fetched.\",\"uiElements.cards.europeStreetBeat\":\"Europe Street beat\",\"uiElements.cards.instagram\":\"www.instagram.com\",\"uiElements.carousel.carousel\":\"Carousal\",\"uiElements.carousel.verticalCarousel\":\"Vertical Carousel\",\"uiElements.carousel.verticalCarouselSubTitle\":\"Vertical pagination. use   vertical=true\",\"uiElements.carousel.basicCarousel\":\"Basic Carousel\",\"uiElements.carousel.basicCarouselSubTitle\":\"Basic usage\",\"uiElements.carousel.fadeInTransition\":\"Fade In Transition\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"Slides use fade for transition.   effect=fade\",\"uiElements.carousel.scrollAutomatically\":\"Scroll Automatically\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"Timing of scrolling to the next card  picture. autoplay\",\"uiElements.collapse.collapse\":\"Collapse\",\"uiElements.collapse.collapseSubTitle\":\"More than one panel can be expanded at a time   the first panel is initialized to be active in this case. use   defaultActiveKey=  [keyNum]\",\"uiElements.collapse.text\":\"A dog is a type of domesticated animal. Known for its loyalty and faithfulness   it can be found as a welcome guest in many households across the world.\",\"uiElements.collapse.headerOne\":\"This is panel header 1\",\"uiElements.collapse.headerTwo\":\"This is panel header 2\",\"uiElements.collapse.headerThree\":\"This is panel header 3\",\"uiElements.collapse.headerNested\":\"This is panel nest panel\",\"uiElements.collapse.nestedExample\":\"Nested Example\",\"uiElements.collapse.nestedExampleSubTitle\":\"Collapse is nested inside the Collapse.\",\"uiElements.collapse.borderlessExample\":\"Borderless Example\",\"uiElements.collapse.borderlessExampleSubTitle\":\"A borderless style of Collapse. use   bordered=  false\",\"uiElements.collapse.accordion\":\"Accordion\",\"uiElements.collapse.accordionSubTitle\":\"Accordion mode   only one panel can be expanded at a time. The first panel will be expanded by default. use accordion\",\"uiElements.popover.popover\":\"Popover\",\"uiElements.popover.basicExample\":\"Basic Example\",\"uiElements.popover.basicExampleSubTitle\":\"The most basic example. The size of the floating layer depends on the contents region.\",\"uiElements.popover.hoverMe\":\"Hover me\",\"uiElements.popover.title\":\"Title\",\"uiElements.popover.titleTrigger\":\"Three ways to trigger\",\"uiElements.popover.titleTriggerSubTitle\":\"Mouse to click   focus and move in.\",\"uiElements.popover.focusMe\":\"Focus me\",\"uiElements.popover.clickMe\":\"Click me\",\"uiElements.popover.placement\":\"Placement\",\"uiElements.popover.placementSubTitle\":\"There are 12 placement options available.\",\"uiElements.popover.top\":\"Top\",\"uiElements.popover.topLeft\":\"Top Left\",\"uiElements.popover.topRight\":\"Top Right\",\"uiElements.popover.leftTop\":\"Left Top\",\"uiElements.popover.left\":\"Left\",\"uiElements.popover.leftBottom\":\"Left Bottom\",\"uiElements.popover.rightTop\":\"Right Top\",\"uiElements.popover.right\":\"Right\",\"uiElements.popover.bottom\":\"Bottom\",\"uiElements.popover.bottomLeft\":\"Bottom Left\",\"uiElements.popover.bottomRight\":\"Bottom Right\",\"uiElements.popover.boxTitle\":\"Controlling the close of the dialog\",\"uiElements.popover.boxSubTitle\":\"Use visible prop to control the display of the card.\",\"uiElements.popover.TR\":\"TR\",\"uiElements.popover.TL\":\"TL\",\"uiElements.popover.LT\":\"LT\",\"uiElements.popover.LB\":\"LB\",\"uiElements.popover.RT\":\"RT\",\"uiElements.popover.RB\":\"RB\",\"uiElements.popover.BL\":\"BL\",\"uiElements.popover.BR\":\"BR\",\"uiElements.popover.close\":\"Close\",\"uiElements.tooltip.tooltip\":\"Tooltip\",\"uiElements.tooltip.tooltipContent\":\"Tooltip Content\",\"uiElements.tooltip.basicExample\":\"Basic Example\",\"uiElements.tooltip.basicExampleSubTitle\":\"The simplest usage.\",\"uiElements.tooltip.placementTitle\":\"Placement\",\"uiElements.tooltip.placementSubTitle\":\"The ToolTip has 12 placements choice.\",\"uiElements.tooltip.TL\":\"TL\",\"uiElements.tooltip.TR\":\"TR\",\"uiElements.tooltip.LT\":\"LT\",\"uiElements.tooltip.LB\":\"LB\",\"uiElements.tooltip.RT\":\"RT\",\"uiElements.tooltip.RB\":\"RB\",\"uiElements.tooltip.BL\":\"BL\",\"uiElements.tooltip.BR\":\"BR\",\"uiElements.tooltip.bottom\":\"Bottom\",\"uiElements.tooltip.right\":\"Right\",\"uiElements.tooltip.left\":\"Left\",\"uiElements.tooltip.top\":\"Top\",\"uiElements.tooltip.tooltipContentSpan\":\"Tooltip will show when mouse enter.\",\"uiElements.tooltip.contentSpan\":\"Tooltip Content\",\"uiElements.tags.tags\":\"Tags\",\"uiElements.tags.basicExample\":\"Basic Example\",\"uiElements.tags.basicExampleSubTitle\":\"Usage of basic Tag   and it could be closable by set closable property. Closable Tag supports onClose afterClose events.\",\"uiElements.tags.tagOne\":\"Tag 1\",\"uiElements.tags.tagTwo\":\"Tag 2\",\"uiElements.tags.link\":\"Link\",\"uiElements.tags.preventDefault\":\"Prevent Default\",\"uiElements.tags.colorfulTag\":\"Colorful Tag\",\"uiElements.tags.hotTags\":\"Hot Tags\",\"uiElements.tags.hotTagsSubTitle\":\"Select your favourite topics.\",\"uiElements.tags.hots\":\"Hots\",\"uiElements.tags.addRemoveDynamically\":\"Add & Remove Dynamically\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"Generating a set of Tags by array   you can add and remove dynamically. Its based on afterClose event   which will be triggered while the close animation end.\",\"uiElements.tags.newTag\":\"+ New Tag\",\"uiElements.timeline.timeline\":\"Timeline\",\"uiElements.timeline.basicExample\":\"Basic Example\",\"uiElements.timeline.basicTimeline\":\"Basic timeline\",\"uiElements.timeline.lastNode\":\"Last Node\",\"uiElements.timeline.lastNodeContent\":\"When the timeline is incomplete and ongoing   put a ghost node at last. set   pending=  true     or   pending=  a React Element\",\"uiElements.timeline.seeMore\":\"See more\",\"uiElements.timeline.custom\":\"Custom\",\"uiElements.timeline.customContent\":\"Set a node as an icon or other custom element.\",\"uiElements.timeline.colorExample\":\"Color Example\",\"uiElements.timeline.colorExampleContent\":\"Set the color of circles. green means completed or success status   red means warning or error   and blue means ongoing or other default status.\",\"uiElements.timeline.createServiceSite\":\"Create a services site 2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"Solve initial network problems 2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"Network problems being solved 2015-09-01\",\"uiElements.timeline.technicalTesting\":\"Technical testing 2015-09-01\",\"uiElements.dropdown.dropdown\":\"Dropdown\",\"uiElements.dropdown.hoverDropdown\":\"Hover Drop Down\",\"uiElements.dropdown.hoverMe\":\"Hover me\",\"uiElements.dropdown.hoverPlacement\":\"Hover Placement Drop Down\",\"uiElements.dropdown.hoverDisableLink\":\"Hover Drop Down with Disable link\",\"uiElements.dropdown.clickedDropdown\":\"Clicked Drop Down\",\"uiElements.dropdown.buttonDropdown\":\"Button with dropdown menu\",\"uiElements.pagination.pagination\":\"Pagination\",\"uiElements.pagination.basic\":\"Basic\",\"uiElements.pagination.more\":\"More\",\"uiElements.pagination.changer\":\"Changer\",\"uiElements.pagination.jumper\":\"Jumper\",\"uiElements.pagination.miniSize\":\"Mini Size\",\"uiElements.pagination.simpleMode\":\"Simple Mode\",\"uiElements.pagination.controlled\":\"Controlled\",\"uiElements.pagination.totalNumber\":\"Total Number\",\"uiElements.rating.rating\":\"Rating\",\"uiElements.rating.basicExample\":\"Basic Example\",\"uiElements.rating.basicExampleSubTitle\":\"The simplest usage.\",\"uiElements.rating.halfStar\":\"Half star\",\"uiElements.rating.halfStarSubTitle\":\"Support select half star.\",\"uiElements.rating.showCopywriting\":\"Show copywriting\",\"uiElements.rating.showCopywritingSubTitle\":\"Add copywriting in rate components.\",\"uiElements.rating.readOnly\":\"Read only\",\"uiElements.rating.readOnlySubTitle\":\"Read only   cant use mouse to interact.\",\"uiElements.rating.otherCharacter\":\"Other Character\",\"uiElements.rating.otherCharacterSubTitle\":\"Replace the default star to other character like alphabet   digit   iconfont or even Chinese word.\",\"uiElements.tree.tree\":\"Tree\",\"uiElements.tree.basicExample\":\"Basic example\",\"uiElements.tree.basicExampleSubTitle\":\"The most basic usage   tell you how to use checkable   selectable   disabled   defaultExpandKeys   and etc.\",\"uiElements.tree.basicControlledExample\":\"Basic controlled example\",\"uiElements.tree.basicControlledExampleSubTitle\":\"basic controlled example\",\"uiElements.tree.draggableExample\":\"Draggable example\",\"uiElements.tree.draggableExampleSubTitle\":\"Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.\",\"uiElements.tree.loadAsync\":\"Load data asynchronously\",\"uiElements.tree.loadAsyncSubTitle\":\"To load data asynchronously when click to expand a treeNode.\",\"uiElements.tree.searchableExample\":\"Searchable example\",\"uiElements.tree.searchableExampleSubTitle\":\"Searchable Tree\",\"uiElements.tree.treeWithLine\":\"Tree With Line\",\"shuffle.descriptionOne\":\"Netscape 2.0 ships   introducing Javascript\",\"shuffle.descriptionTwo\":\"Jesse James Garrett releases AJAX spec\",\"shuffle.descriptionThree\":\"jQuery 1.0 released\",\"shuffle.descriptionFour\":\"First underscore.js commit\",\"shuffle.descriptionFive\":\"Backbone.js becomes a thing\",\"shuffle.descriptionSix\":\"Angular 1.0 released\",\"shuffle.descriptionSeven\":\"React is open-sourced; developers rejoice\",\"toggle.list\":\"List\",\"toggle.grid\":\"Grid\",\"toggle.ascending\":\"Ascending\",\"toggle.descending\":\"Descending\",\"toggle.shuffle\":\"Shuffle\",\"toggle.rotate\":\"Rotate\",\"toggle.addItem\":\"Add Item\",\"toggle.removeItem\":\"Remove Item\",\"contactlist.searchContacts\":\"Search Contacts\",\"contactlist.addNewContact\":\"Add New Contact\",\"notes.ChoseColor\":\"Choose a color for your note\",\"notes.addNote\":\"Add New Note\",\"page404.title\":\"404\",\"page404.subTitle\":\"Looks like you got lost\",\"page404.description\":\"The page youre looking for doesnt exist or has been moved.\",\"page404.backButton\":\"BACK HOME\",\"page500.title\":\"500\",\"page500.subTitle\":\"Internal Server Error\",\"page500.description\":\"Something went wrong. Please try again later.\",\"page500.backButton\":\"BACK HOME\",\"page.forgetPassTitle\":\"Isomorphic\",\"page.forgetPassSubTitle\":\"Forgot Password?\",\"page.forgetPassDescription\":\"Enter your email and we send you a reset link.\",\"page.sendRequest\":\"Send request\",\"page.resetPassTitle\":\"Isomorphic\",\"page.resetPassSubTitle\":\"Reset Password\",\"page.resetPassDescription\":\"Enter new password and confirm it.\",\"page.resetPassSave\":\"Save\",\"page.signInTitle\":\"Isomorphic\",\"page.signInRememberMe\":\"Remember me\",\"page.signInButton\":\"Sign in\",\"page.signInPreview\":\"username: demo   password: demodemo   or just click on any button.\",\"page.signInFacebook\":\"Sign in with Facebook\",\"page.signInGooglePlus\":\"Sign in with Google Plus\",\"page.signInAuth0\":\"Sign in with Auth0\",\"page.signInMobile\":\"Sign in with Phone\",\"page.signUpMobile\":\"Sign up with Phone\",\"page.signInForgotPass\":\"Forgot password\",\"page.signInCreateAccount\":\"Create an Isomorphoic account\",\"page.signUpTitle\":\"Isomorphic\",\"page.signUpTermsConditions\":\"I agree with terms and condtions\",\"page.signUpButton\":\"Sign Up\",\"page.signUpFacebook\":\"Sign up with Facebook\",\"page.signUpGooglePlus\":\"Sign up with Google Plus\",\"page.signUpAuth0\":\"Sign Up with Auth0\",\"page.signUpAlreadyAccount\":\"Already have an account? Sign in.\",\"widget.reportswidget.label\":\"Income\",\"widget.reportswidget.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.singleprogresswidget1.label\":\"Marketing\",\"widget.singleprogresswidget2.label\":\"Addvertisement\",\"widget.singleprogresswidget3.label\":\"Consulting\",\"widget.singleprogresswidget4.label\":\"Development\",\"widget.stickerwidget1.number\":\"210\",\"widget.stickerwidget1.text\":\"Unread Email\",\"widget.stickerwidget2.number\":\"1749\",\"widget.stickerwidget2.text\":\"Image Upload\",\"widget.stickerwidget3.number\":\"3024\",\"widget.stickerwidget3.text\":\"Total Message\",\"widget.stickerwidget4.number\":\"54\",\"widget.stickerwidget4.text\":\"Orders Post\",\"widget.salewidget1.label\":\"Income\",\"widget.salewidget1.price\":\"$15000\",\"widget.salewidget1.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.salewidget2.label\":\"Income\",\"widget.salewidget2.price\":\"$15000\",\"widget.salewidget2.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.salewidget3.label\":\"Income\",\"widget.salewidget3.price\":\"$15000\",\"widget.salewidget3.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.salewidget4.label\":\"Income\",\"widget.salewidget4.price\":\"$15000\",\"widget.salewidget4.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.cardwidget1.number\":\"110\",\"widget.cardwidget1.text\":\"New Messages\",\"widget.cardwidget2.number\":\"100%\",\"widget.cardwidget2.text\":\"Volume\",\"widget.cardwidget3.number\":\"137\",\"widget.cardwidget3.text\":\"Achievement\",\"widget.progresswidget1.label\":\"Download\",\"widget.progresswidget1.details\":\"50% Complete\",\"widget.progresswidget2.label\":\"Support\",\"widget.progresswidget2.details\":\"80% Satisfied Customer\",\"widget.progresswidget3.label\":\"Upload\",\"widget.progresswidget3.details\":\"65% Complete\",\"widget.vcardwidget.name\":\"Jhon Doe\",\"widget.vcardwidget.title\":\"Sr. iOS Developer\",\"widget.vcardwidget.description\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor ammet dolar consectetur adipisicing elit\",\"checkout.billingform.firstname\":\"First Name\",\"checkout.billingform.lastname\":\"Last Name\",\"checkout.billingform.company\":\"Company Name\",\"checkout.billingform.email\":\"Email Address\",\"checkout.billingform.mobile\":\"Mobile No\",\"checkout.billingform.country\":\"Country\",\"checkout.billingform.city\":\"City\",\"checkout.billingform.address\":\"Address\",\"checkout.billingform.addressoptional\":\"Apartment   suite   unit etc. (optional\",\"checkout.billingform.checkbox\":\"Create an account?\",\"antTable.title.image\":\"Image\",\"antTable.title.firstName\":\"First Name\",\"antTable.title.lastName\":\"Last Name\",\"antTable.title.city\":\"City\",\"antTable.title.street\":\"Street\",\"antTable.title.email\":\"Email\",\"antTable.title.dob\":\"DOB\",\"Map.leaflet.basicTitle\":\"Basic Map\",\"Map.leaflet.basicMarkerTitle\":\"Basic Map(With Default Marker\",\"Map.leaflet.leafletCustomMarkerTitle\":\"Basic Map(With Custom Icon Marker)\",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"Basic Map(With Custom Html Marker\",\"Map.leaflet.leafletMarkerClusterTitle\":\"Basic Map(With Marker Cluster\",\"Map.leaflet.leafletRoutingTitle\":\"Basic Map Routing\",\"Component.contacts.noOption\":\"No contact found\",\"email.send\":\"SEND\",\"email.cancel\":\"CANCEL\",\"email.compose\":\"COMPOSE\",\"email.noMessage\":\"Please select a mail to read\",\"themeSwitcher.purchase\":\"PURCHASE NOW\",\"themeSwitcher.settings\":\"Settings\",\"sidebar.selectbox\":\"Select\",\"sidebar.frappeChart\":\"Frappe Charts\",\"topbar.myprofile\":\"My Profile\",\"topbar.help\":\"Help\",\"topbar.logout\":\"Logout\",\"topbar.viewAll\":\"View All\",\"topbar.viewCart\":\"View Cart\",\"topbar.totalPrice\":\"Total Price\",\"Swiper.basic.basicTitle\":\"Basic Slider\",\"Swiper.bullet.bulletTitle\":\"Bullet Pagination\",\"Swiper.progress.progressTitle\":\"Progress Pagination\",\"Swiper.fraction.fractionTitle\":\"Fraction Pagination\",\"Swiper.numbered.numberedTitle\":\"Numbered Pagination\",\"Swiper.scroll.scrollTitle\":\"Scrollbar\",\"Swiper.verticle.verticleTitle\":\"Verticle Slider\",\"Swiper.multiple.multipleGridTitle\":\"Multiple Grid Slider\",\"Swiper.free.freeTitle\":\"Swiper Free Mode\",\"Swiper.multirow.multirowTitle\":\"Multiple row On View\",\"Swiper.cursor.cursorTitle\":\"Slider with Cursor\",\"Swiper.loop.infiniteTitle\":\"Slider with Infinite Loop\",\"Swiper.wheel.wheelTitle\":\"Slider with Mouse Wheel\",\"Swiper.auto.autoPlayTitle\":\"Slider with Autoplay\",\"Swiper.lazy.lazyTitle\":\"Slider with Lazyload\",\"Swiper.custom.customScrollTitle\":\"Custom view with all Naviation\",\"Swiper.custom.basicNavTitle\":\"Basic Naviation\",\"Swiper.custom.buttonNavTitle\":\"Custom Naviation\"}");

/***/ }),

/***/ "./shared/config/translation/locales/zh-Hans.json":
/*!********************************************************!*\
  !*** ./shared/config/translation/locales/zh-Hans.json ***!
  \********************************************************/
/*! exports provided: sidebar.swiperslider, sidebar.email, sidebar.chat, sidebar.ecommerce, sidebar.shop, sidebar.cart, sidebar.checkout, sidebar.cards, sidebar.maps, sidebar.googleMap, sidebar.leafletMap, sidebar.calendar, sidebar.notes, sidebar.todos, sidebar.contacts, sidebar.shuffle, sidebar.charts, sidebar.googleCharts, sidebar.recharts, sidebar.reactVis, sidebar.reactChart2, sidebar.reactTrend, sidebar.eChart, sidebar.forms, sidebar.input, sidebar.editor, sidebar.formsWithValidation, sidebar.progress, sidebar.button, sidebar.tab, sidebar.checkbox, sidebar.radiobox, sidebar.transfer, sidebar.autocomplete, sidebar.boxOptions, sidebar.uiElements, sidebar.badge, sidebar.card2, sidebar.corusel, sidebar.collapse, sidebar.popover, sidebar.tooltip, sidebar.tag, sidebar.timeline, sidebar.dropdown, sidebar.pagination, sidebar.rating, sidebar.tree, sidebar.advancedElements, sidebar.reactDates, sidebar.codeMirror, sidebar.uppy, sidebar.dropzone, sidebar.feedback, sidebar.alert, sidebar.modal, sidebar.message, sidebar.notification, sidebar.popConfirm, sidebar.spin, sidebar.tables, sidebar.antTables, sidebar.pages, sidebar.500, sidebar.404, sidebar.signIn, sidebar.signUp, sidebar.forgotPw, sidebar.resetPw, sidebar.invoice, sidebar.menuLevels, sidebar.item1, sidebar.item2, sidebar.option1, sidebar.option2, sidebar.option3, sidebar.option4, sidebar.blankPage, sidebar.githubSearch, sidebar.youtubeSearch, languageSwitcher.label, themeSwitcher, themeSwitcher.Sidebar, themeSwitcher.Topbar, themeSwitcher.Background, feedback.alert.basicTitle, feedback.alert.successText, feedback.alert.infoText, feedback.alert.warningText, feedback.alert.errorText, feedback.alert.closableAlertType, feedback.alert.iconAlertType, feedback.alert.iconInfoAlertType, feedback.alert.successTips, feedback.alert.successTipsDescription, feedback.alert.informationTips, feedback.alert.informationDescription, feedback.alert.warningTips, feedback.alert.warningDescription, feedback.alert.errorTips, feedback.alert.errorDescription, feedback.alert.modalTitle, feedback.alert.modalSubTitle, feedback.alert.successTitle, feedback.alert.infoTitle, feedback.alert.errorTitle, feedback.alert.warningTitle, feedback.alert.modalBlockTitle, feedback.alert.confirmationModalDialogue, feedback.alert.simpleModalDialogue, feedback.alert.message, feedback.alert.normalMessageTitle, feedback.alert.normalMessageSubtitle, feedback.alert.displayMessage, feedback.alert.displayOtherTypeMessageTitle, feedback.alert.displayOtherTypeMessageSubTitle, feedback.alert.customizeDurationTitle, feedback.alert.customizeDurationSubTitle, feedback.alert.customizeDurationButton, feedback.alert.messageLoadingTitle, feedback.alert.messageLoadingSubTitle, feedback.alert.displayLoadIndicator, feedback.alert.notification, feedback.alert.notificationBasicTitle, feedback.alert.notificationBasicSubTitle, feedback.alert.notificationBasicDescription, feedback.alert.notificationDurationTitle, feedback.alert.notificationDurationSubTitle, feedback.alert.notificationwithIconTitle, feedback.alert.notificationwithIconSubTitle, feedback.alert.notificationwithCustomIconTitle, feedback.alert.notificationwithCustomIconSubTitle, feedback.alert.notificationwithCustomButtonTitle, feedback.alert.notificationwithCustomButtonSubTitle, feedback.alert.popConfirm, feedback.alert.popConfirm.basicTitle, feedback.alert.popConfirm.basicSubTitle, feedback.alert.popConfirm.delete, feedback.alert.popConfirm.notiWithIconTitle, feedback.alert.popConfirm.notiWithIconSubTitle, feedback.alert.popConfirm.TL, feedback.alert.popConfirm.top, feedback.alert.popConfirm.TR, feedback.alert.popConfirm.LT, feedback.alert.popConfirm.left, feedback.alert.popConfirm.LB, feedback.alert.popConfirm.RT, feedback.alert.popConfirm.right, feedback.alert.popConfirm.RB, feedback.alert.popConfirm.Bl, feedback.alert.popConfirm.bottom, feedback.alert.popConfirm.BR, feedback.alert.spin, feedback.alert.spin.basicTitle, feedback.alert.spin.background, feedback.alert.spin.backgroundDescription, feedback.alert.spin.loadingState, feedback.alert.spin.alertTitle, feedback.alert.spin.alertDescription, forms.input.header, forms.input.basicTitle, forms.input.basicSubTitle, forms.input.variationsTitle, forms.input.variationsSubtitle, forms.input.groupTitle, forms.input.groupSubTitle, forms.input.autoSizingTitle, forms.input.autoSizingSubTitle, forms.input.prePostTabTitle, forms.input.prePostTabSubTitle, forms.input.textAreaTitle, forms.input.textAreaSubTitle, forms.input.searchTitle, forms.input.searchSubTitle, forms.editor.header, forms.formsWithValidation.header, forms.formsWithValidation.failLabel, forms.formsWithValidation.failHelp, forms.formsWithValidation.warningLabel, forms.formsWithValidation.ValidatingLabel, forms.formsWithValidation.ValidatingHelp, forms.formsWithValidation.SuccessLabel, forms.formsWithValidation.WarninghasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackLabel, forms.formsWithValidation.FailhasFeedbackHelp, forms.progressBar.header, forms.progressBar.standardTitle, forms.progressBar.standardSubTitle, forms.progressBar.circularTitle, forms.progressBar.circularSubTitle, forms.progressBar.miniTitle, forms.progressBar.miniSubTitle, forms.progressBar.miniCircularTitle, forms.progressBar.dynamicCircularTitle, forms.progressBar.dynamicCircularSubTitle, forms.progressBar.customTextTitle, forms.progressBar.customTextSubTitle, forms.progressBar.dashboardTitle, forms.progressBar.dashboardSubTitle, forms.button.header, forms.button.simpleButton, forms.button.iconButton, forms.button.simpleButtonPrimaryText, forms.button.simpleButtonDefaultText, forms.button.simpleButtonDashedText, forms.button.simpleButtonDangerText, forms.button.iconPrimaryButton, forms.button.iconSimpleButton, forms.button.iconCirculerButton, forms.button.iconDashedButton, forms.button.SizedButton, forms.button.DisabledButton, forms.button.LoadingButton, forms.button.MultipleButton, forms.button.groupButton, forms.Tabs.header, forms.Tabs.simpleTabTitle, forms.Tabs.simpleTabSubTitle, forms.Tabs.iconTabTitle, forms.Tabs.miniTabTitle, forms.Tabs.extraTabTitle, forms.Tabs.TabpositionTitle, forms.Tabs.TabpositionSubTitle, forms.Tabs.cardTitle, forms.Tabs.editableTitle, forms.Tabs.verticalTitle, forms.Tabs.basicTitle, forms.checkbox.header, forms.checkbox.basicTitle, forms.checkbox.basicSubTitle, forms.checkbox.groupTitle, forms.checkbox.groupSubTitle, forms.checkbox.groupCheckTitle, forms.checkbox.groupCheckSubTitle, forms.radio.header, forms.radio.simpleTitle, forms.radio.simpleSubTitle, forms.radio.groupTitle, forms.radio.groupSubTitle, forms.radio.groupSecondTitle, forms.radio.groupSecondSubTitle, forms.radio.groupThirdTitle, forms.radio.groupThirdSubTitle, forms.transfer.header, forms.transfer.SubTitle, forms.transfer.Title, forms.autocomplete.header, forms.autocomplete.simpleTitle, forms.autocomplete.simpleSubTitle, forms.autocomplete.customizeTitle, forms.autocomplete.customizeSubTitle, uiElements.badge.badge, uiElements.badge.basicExample, uiElements.badge.basicExampleSubTitle, uiElements.badge.overflowCount, uiElements.badge.overflowCountSubTitle, uiElements.badge.status, uiElements.badge.statusSubTitle, uiElements.badge.success, uiElements.badge.error, uiElements.badge.default, uiElements.badge.processing, uiElements.badge.warning, uiElements.badge.redBadge, uiElements.badge.redBadgeSubTitle, uiElements.badge.linkSomething, uiElements.cards.cards, uiElements.cards.basicCard, uiElements.cards.basicCardSubTitle, uiElements.cards.more, uiElements.cards.cardTitle, uiElements.cards.cardContent, uiElements.cards.lorem, uiElements.cards.noBorder, uiElements.cards.noBorderSubTitle, uiElements.cards.gridCard, uiElements.cards.gridCardSubTitle, uiElements.cards.loadingCard, uiElements.cards.loadingCardSubTitle, uiElements.cards.whateverContent, uiElements.cards.customizedContentTitle, uiElements.cards.customizedContent, uiElements.cards.europeStreetBeat, uiElements.cards.instagram, uiElements.carousel.carousel, uiElements.carousel.verticalCarousel, uiElements.carousel.verticalCarouselSubTitle, uiElements.carousel.basicCarousel, uiElements.carousel.basicCarouselSubTitle, uiElements.carousel.fadeInTransition, uiElements.carousel.fadeInTransitionSubTitle, uiElements.carousel.scrollAutomatically, uiElements.carousel.scrollAutomaticallySubTitle, uiElements.collapse.collapse, uiElements.collapse.collapseSubTitle, uiElements.collapse.text, uiElements.collapse.headerOne, uiElements.collapse.headerTwo, uiElements.collapse.headerThree, uiElements.collapse.headerNested, uiElements.collapse.nestedExample, uiElements.collapse.nestedExampleSubTitle, uiElements.collapse.borderlessExample, uiElements.collapse.borderlessExampleSubTitle, uiElements.collapse.accordion, uiElements.collapse.accordionSubTitle, uiElements.popover.popover, uiElements.popover.basicExample, uiElements.popover.basicExampleSubTitle, uiElements.popover.hoverMe, uiElements.popover.title, uiElements.popover.titleTrigger, uiElements.popover.titleTriggerSubTitle, uiElements.popover.focusMe, uiElements.popover.clickMe, uiElements.popover.placement, uiElements.popover.placementSubTitle, uiElements.popover.top, uiElements.popover.topLeft, uiElements.popover.topRight, uiElements.popover.leftTop, uiElements.popover.left, uiElements.popover.leftBottom, uiElements.popover.rightTop, uiElements.popover.right, uiElements.popover.bottom, uiElements.popover.bottomLeft, uiElements.popover.bottomRight, uiElements.popover.boxTitle, uiElements.popover.boxSubTitle, uiElements.popover.TR, uiElements.popover.TL, uiElements.popover.LT, uiElements.popover.LB, uiElements.popover.RT, uiElements.popover.RB, uiElements.popover.BL, uiElements.popover.BR, uiElements.popover.close, uiElements.tooltip.tooltip, uiElements.tooltip.tooltipContent, uiElements.tooltip.basicExample, uiElements.tooltip.basicExampleSubTitle, uiElements.tooltip.placementTitle, uiElements.tooltip.placementSubTitle, uiElements.tooltip.TL, uiElements.tooltip.TR, uiElements.tooltip.LT, uiElements.tooltip.LB, uiElements.tooltip.RT, uiElements.tooltip.RB, uiElements.tooltip.BL, uiElements.tooltip.BR, uiElements.tooltip.bottom, uiElements.tooltip.right, uiElements.tooltip.left, uiElements.tooltip.top, uiElements.tooltip.tooltipContentSpan, uiElements.tooltip.contentSpan, uiElements.tags.tags, uiElements.tags.basicExample, uiElements.tags.basicExampleSubTitle, uiElements.tags.tagOne, uiElements.tags.tagTwo, uiElements.tags.link, uiElements.tags.preventDefault, uiElements.tags.colorfulTag, uiElements.tags.hotTags, uiElements.tags.hotTagsSubTitle, uiElements.tags.hots, uiElements.tags.addRemoveDynamically, uiElements.tags.addRemoveDynamicallySubTitle, uiElements.tags.newTag, uiElements.timeline.timeline, uiElements.timeline.basicExample, uiElements.timeline.basicTimeline, uiElements.timeline.lastNode, uiElements.timeline.lastNodeContent, uiElements.timeline.seeMore, uiElements.timeline.custom, uiElements.timeline.customContent, uiElements.timeline.colorExample, uiElements.timeline.colorExampleContent, uiElements.timeline.createServiceSite, uiElements.timeline.solveInitialNetwork, uiElements.timeline.networkProblemSolved, uiElements.timeline.technicalTesting, uiElements.dropdown.dropdown, uiElements.dropdown.hoverDropdown, uiElements.dropdown.hoverMe, uiElements.dropdown.hoverPlacement, uiElements.dropdown.hoverDisableLink, uiElements.dropdown.clickedDropdown, uiElements.dropdown.buttonDropdown, uiElements.pagination.pagination, uiElements.pagination.basic, uiElements.pagination.more, uiElements.pagination.changer, uiElements.pagination.jumper, uiElements.pagination.miniSize, uiElements.pagination.simpleMode, uiElements.pagination.controlled, uiElements.pagination.totalNumber, uiElements.rating.rating, uiElements.rating.basicExample, uiElements.rating.basicExampleSubTitle, uiElements.rating.halfStar, uiElements.rating.halfStarSubTitle, uiElements.rating.showCopywriting, uiElements.rating.showCopywritingSubTitle, uiElements.rating.readOnly, uiElements.rating.readOnlySubTitle, uiElements.rating.otherCharacter, uiElements.rating.otherCharacterSubTitle, uiElements.tree.tree, uiElements.tree.basicExample, uiElements.tree.basicExampleSubTitle, uiElements.tree.basicControlledExample, uiElements.tree.basicControlledExampleSubTitle, uiElements.tree.draggableExample, uiElements.tree.draggableExampleSubTitle, uiElements.tree.loadAsync, uiElements.tree.loadAsyncSubTitle, uiElements.tree.searchableExample, uiElements.tree.searchableExampleSubTitle, uiElements.tree.treeWithLine, shuffle.descriptionOne, shuffle.descriptionTwo, shuffle.descriptionThree, shuffle.descriptionFour, shuffle.descriptionFive, shuffle.descriptionSix, shuffle.descriptionSeven, toggle.list, toggle.grid, toggle.ascending, toggle.descending, toggle.shuffle, toggle.rotate, toggle.addItem, toggle.removeItem, contactlist.searchContacts, contactlist.addNewContact, notes.ChoseColor, notes.addNote, page404.title, page404.subTitle, page404.description, page404.backButton, page500.title, page500.subTitle, page500.description, page500.backButton, page.forgetPassTitle, page.forgetPassSubTitle, page.forgetPassDescription, page.sendRequest, page.resetPassTitle, page.resetPassSubTitle, page.resetPassDescription, page.resetPassSave, page.signInTitle, page.signInRememberMe, page.signInButton, page.signInPreview, page.signInFacebook, page.signInGooglePlus, page.signInAuth0, page.signInForgotPass, page.signInCreateAccount, page.signUpTitle, page.signUpTermsConditions, page.signUpButton, page.signUpFacebook, page.signUpGooglePlus, page.signUpAuth0, page.signUpAlreadyAccount, widget.reportswidget.label, widget.reportswidget.details, widget.singleprogresswidget1.label, widget.singleprogresswidget2.label, widget.singleprogresswidget3.label, widget.singleprogresswidget4.label, widget.stickerwidget1.number, widget.stickerwidget1.text, widget.stickerwidget2.number, widget.stickerwidget2.text, widget.stickerwidget3.number, widget.stickerwidget3.text, widget.stickerwidget4.number, widget.stickerwidget4.text, widget.salewidget1.label, widget.salewidget1.price, widget.salewidget1.details, widget.salewidget2.label, widget.salewidget2.price, widget.salewidget2.details, widget.salewidget3.label, widget.salewidget3.price, widget.salewidget3.details, widget.salewidget4.label, widget.salewidget4.price, widget.salewidget4.details, widget.cardwidget1.number, widget.cardwidget1.text, widget.cardwidget2.number, widget.cardwidget2.text, widget.cardwidget3.number, widget.cardwidget3.text, widget.progresswidget1.label, widget.progresswidget1.details, widget.progresswidget2.label, widget.progresswidget2.details, widget.progresswidget3.label, widget.progresswidget3.details, widget.vcardwidget.name, widget.vcardwidget.title, widget.vcardwidget.description, checkout.billingform.firstname, checkout.billingform.lastname, checkout.billingform.company, checkout.billingform.email, checkout.billingform.mobile, checkout.billingform.country, checkout.billingform.city, checkout.billingform.address, checkout.billingform.addressoptional, checkout.billingform.checkbox, antTable.title.image, antTable.title.firstName, antTable.title.lastName, antTable.title.city, antTable.title.street, antTable.title.email, antTable.title.dob, Map.leaflet.basicTitle, Map.leaflet.basicMarkerTitle, Map.leaflet.leafletCustomMarkerTitle, Map.leaflet.leafletCustomHtmlMarkerTitle, Map.leaflet.leafletMarkerClusterTitle, Map.leaflet.leafletRoutingTitle, Component.contacts.noOption, email.send, email.cancel, email.compose, email.noMessage, themeSwitcher.purchase, themeSwitcher.settings, sidebar.selectbox, sidebar.frappeChart, topbar.myprofile, topbar.help, topbar.logout, topbar.viewAll, topbar.viewCart, topbar.totalPrice, sidebar.scrumboard, sidebar.firestorecrud, sidebar.firestorecrudarticle, sidebar.firestorecrudinvestor, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.swiperslider\":\"滑塊\",\"sidebar.email\":\"电子邮件\",\"sidebar.chat\":\"聊\",\"sidebar.ecommerce\":\"电子商务\",\"sidebar.shop\":\"店\",\"sidebar.cart\":\"大车\",\"sidebar.checkout\":\"查看\",\"sidebar.cards\":\"牌\",\"sidebar.maps\":\"地图\",\"sidebar.googleMap\":\"谷歌地图\",\"sidebar.leafletMap\":\"传单地图\",\"sidebar.calendar\":\"日历\",\"sidebar.notes\":\"笔记\",\"sidebar.todos\":\"待办事项\",\"sidebar.contacts\":\"往来\",\"sidebar.shuffle\":\"拖曳\",\"sidebar.charts\":\"图表\",\"sidebar.googleCharts\":\"Google购物车\",\"sidebar.recharts\":\"重新图表\",\"sidebar.reactVis\":\"反应可见\",\"sidebar.reactChart2\":\"反应 - 图2\",\"sidebar.reactTrend\":\"反应-趋势\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"形式\",\"sidebar.input\":\"输入\",\"sidebar.editor\":\"编辑\",\"sidebar.formsWithValidation\":\"验证形式\",\"sidebar.progress\":\"进展\",\"sidebar.button\":\"按键\",\"sidebar.tab\":\"标签\",\"sidebar.checkbox\":\"复选框\",\"sidebar.radiobox\":\"收音机盒\",\"sidebar.transfer\":\"转让\",\"sidebar.autocomplete\":\"自动完成\",\"sidebar.boxOptions\":\"框选项\",\"sidebar.uiElements\":\"UI元素\",\"sidebar.badge\":\"徽章\",\"sidebar.card2\":\"卡\",\"sidebar.corusel\":\"狂欢游行\",\"sidebar.collapse\":\"坍方\",\"sidebar.popover\":\"流行\",\"sidebar.tooltip\":\"提示\",\"sidebar.tag\":\"标签\",\"sidebar.timeline\":\"时间线\",\"sidebar.dropdown\":\"落下\",\"sidebar.pagination\":\"分页\",\"sidebar.rating\":\"评分\",\"sidebar.tree\":\"树\",\"sidebar.advancedElements\":\"高级元素\",\"sidebar.reactDates\":\"反应日期\",\"sidebar.codeMirror\":\"代码镜\",\"sidebar.uppy\":\"Uppy上传器\",\"sidebar.dropzone\":\"拖放区\",\"sidebar.feedback\":\"反馈\",\"sidebar.alert\":\"警报\",\"sidebar.modal\":\"语气\",\"sidebar.message\":\"信息\",\"sidebar.notification\":\"通知\",\"sidebar.popConfirm\":\"流行确认\",\"sidebar.spin\":\"纺\",\"sidebar.tables\":\"表\",\"sidebar.antTables\":\"蚂蚁表\",\"sidebar.pages\":\"网页\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"签到\",\"sidebar.signUp\":\"注册\",\"sidebar.forgotPw\":\"忘记密码\",\"sidebar.resetPw\":\"重置密码\",\"sidebar.invoice\":\"发票\",\"sidebar.menuLevels\":\"菜单级别\",\"sidebar.item1\":\"项目1\",\"sidebar.item2\":\"项目2\",\"sidebar.option1\":\"选项1\",\"sidebar.option2\":\"选项2\",\"sidebar.option3\":\"选项3\",\"sidebar.option4\":\"选项4\",\"sidebar.blankPage\":\"空白页\",\"sidebar.githubSearch\":\"Github搜索\",\"sidebar.youtubeSearch\":\"Youtube搜索\",\"languageSwitcher.label\":\"改变语言\",\"themeSwitcher\":\"主题切换器\",\"themeSwitcher.Sidebar\":\"侧边栏\",\"themeSwitcher.Topbar\":\"顶栏\",\"themeSwitcher.Background\":\"背景\",\"feedback.alert.basicTitle\":\"基本标题\",\"feedback.alert.successText\":\"成功文本\",\"feedback.alert.infoText\":\"信息文本\",\"feedback.alert.warningText\":\"警告文字\",\"feedback.alert.errorText\":\"错误文本\",\"feedback.alert.closableAlertType\":\"可关闭警报类型\",\"feedback.alert.iconAlertType\":\"图标警报类型\",\"feedback.alert.iconInfoAlertType\":\"图标信息警报类型\",\"feedback.alert.successTips\":\"成功提示\",\"feedback.alert.successTipsDescription\":\"关于成功写作的详细描述和建议。\",\"feedback.alert.informationTips\":\"信息备注\",\"feedback.alert.informationDescription\":\"关于文案的附加说明和信息。\",\"feedback.alert.warningTips\":\"警告\",\"feedback.alert.warningDescription\":\"这是关于文案的警告通知。\",\"feedback.alert.errorTips\":\"错误\",\"feedback.alert.errorDescription\":\"这是关于文案的错误信息。\",\"feedback.alert.modalTitle\":\"具有自定义页脚的模态\",\"feedback.alert.modalSubTitle\":\"基本模态对话框\",\"feedback.alert.successTitle\":\"成功\",\"feedback.alert.infoTitle\":\"信息\",\"feedback.alert.errorTitle\":\"错误\",\"feedback.alert.warningTitle\":\"警告\",\"feedback.alert.modalBlockTitle\":\"语气\",\"feedback.alert.confirmationModalDialogue\":\"确认模态对话框\",\"feedback.alert.simpleModalDialogue\":\"简单的模态对话框\",\"feedback.alert.message\":\"信息\",\"feedback.alert.normalMessageTitle\":\"正常讯息\",\"feedback.alert.normalMessageSubtitle\":\"正常消息作为反馈。\",\"feedback.alert.displayMessage\":\"显示正常消息\",\"feedback.alert.displayOtherTypeMessageTitle\":\"其他类型的消息\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"消息的成功，错误和警告类型。\",\"feedback.alert.customizeDurationTitle\":\"自定义持续时间\",\"feedback.alert.customizeDurationSubTitle\":\"自定义消息显示持续时间从默认值1.5s到10s。\",\"feedback.alert.customizeDurationButton\":\"定制显示持续时间\",\"feedback.alert.messageLoadingTitle\":\"加载消息\",\"feedback.alert.messageLoadingSubTitle\":\"显示一个全局加载指示器，它自身被异步地关闭。\",\"feedback.alert.displayLoadIndicator\":\"显示装载指示灯\",\"feedback.alert.notification\":\"通知\",\"feedback.alert.notificationBasicTitle\":\"基本\",\"feedback.alert.notificationBasicSubTitle\":\"4.5s后关闭通知框的最简单的用法。\",\"feedback.alert.notificationBasicDescription\":\"打开通知框\",\"feedback.alert.notificationDurationTitle\":\"通知框关闭之后的时间\",\"feedback.alert.notificationDurationSubTitle\":\"持续时间可用于指定通知保持打开的时间。持续时间过后，通知自动关闭。如果未指定，默认值为4.5秒。如果将值设置为0，则通知框将永远不会自动关闭。\",\"feedback.alert.notificationwithIconTitle\":\"通知图标\",\"feedback.alert.notificationwithIconSubTitle\":\"具有左侧图标的通知框。\",\"feedback.alert.notificationwithCustomIconTitle\":\"通知与自定义图标\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"正常消息作为反馈。\",\"feedback.alert.notificationwithCustomButtonTitle\":\"通知使用自定义按钮\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"正常消息作为反馈。\",\"feedback.alert.popConfirm\":\"流行确认\",\"feedback.alert.popConfirm.basicTitle\":\"基本确认\",\"feedback.alert.popConfirm.basicSubTitle\":\"的基本例子。\",\"feedback.alert.popConfirm.delete\":\"删除\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"通知与自定义图标\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"正常消息作为反馈。\",\"feedback.alert.popConfirm.TL\":\"TL\",\"feedback.alert.popConfirm.top\":\"最佳\",\"feedback.alert.popConfirm.TR\":\"TR\",\"feedback.alert.popConfirm.LT\":\"LT\",\"feedback.alert.popConfirm.left\":\"剩下\",\"feedback.alert.popConfirm.LB\":\"磅\",\"feedback.alert.popConfirm.RT\":\"RT\",\"feedback.alert.popConfirm.right\":\"对\",\"feedback.alert.popConfirm.RB\":\"RB\",\"feedback.alert.popConfirm.Bl\":\"BL\",\"feedback.alert.popConfirm.bottom\":\"底部\",\"feedback.alert.popConfirm.BR\":\"BR\",\"feedback.alert.spin\":\"纺\",\"feedback.alert.spin.basicTitle\":\"尺寸旋转\",\"feedback.alert.spin.background\":\"旋转背景\",\"feedback.alert.spin.backgroundDescription\":\"旋转背景描述\",\"feedback.alert.spin.loadingState\":\"装载状态：\",\"feedback.alert.spin.alertTitle\":\"提醒消息标题\",\"feedback.alert.spin.alertDescription\":\"有关此警报的上下文的更多详细信息。\",\"forms.input.header\":\"输入\",\"forms.input.basicTitle\":\"基本用法\",\"forms.input.basicSubTitle\":\"基本使用示例。\",\"forms.input.variationsTitle\":\"三种尺寸的输入\",\"forms.input.variationsSubtitle\":\"输入框有三种尺寸：大（42像素），默认（35像素）和小（30像素）。注意：在表格内部，只使用大尺寸。\",\"forms.input.groupTitle\":\"输入组\",\"forms.input.groupSubTitle\":\"Input.Group示例注意：您不需要Col来控制紧凑模式下的宽度。\",\"forms.input.autoSizingTitle\":\"自动调整高度以适应内容\",\"forms.input.autoSizingSubTitle\":\"对于textarea类型的输入，autosize prop可以根据内容自动调整高度。可以提供一个选项对象来自动调整，以指定textarea将自动调整的最小和最大行数。\",\"forms.input.prePostTabTitle\":\"前  后选项卡\",\"forms.input.prePostTabSubTitle\":\"使用前＆amp;帖子标签示例..\",\"forms.input.textAreaTitle\":\"多行文本\",\"forms.input.textAreaSubTitle\":\"对于多行用户输入案例，可以使用类型prop具有textarea值的输入。\",\"forms.input.searchTitle\":\"搜索\",\"forms.input.searchSubTitle\":\"通过使用搜索按钮对标准输入进行分组来创建搜索框的示例\",\"forms.editor.header\":\"编辑\",\"forms.formsWithValidation.header\":\"定制验证表\",\"forms.formsWithValidation.failLabel\":\"失败\",\"forms.formsWithValidation.failHelp\":\"应该是数字＆amp;字母\",\"forms.formsWithValidation.warningLabel\":\"警告\",\"forms.formsWithValidation.ValidatingLabel\":\"证实\",\"forms.formsWithValidation.ValidatingHelp\":\"信息正在验证...\",\"forms.formsWithValidation.SuccessLabel\":\"成功\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"警告\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"失败\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"应该是数字＆amp;字母\",\"forms.progressBar.header\":\"进度条\",\"forms.progressBar.standardTitle\":\"进度条\",\"forms.progressBar.standardSubTitle\":\"标准进度条。\",\"forms.progressBar.circularTitle\":\"循环进度栏\",\"forms.progressBar.circularSubTitle\":\"一个循环进度条。\",\"forms.progressBar.miniTitle\":\"迷你尺寸进度条\",\"forms.progressBar.miniSubTitle\":\"适合狭窄的地区。\",\"forms.progressBar.miniCircularTitle\":\"一个较小的圆形进度条。\",\"forms.progressBar.dynamicCircularTitle\":\"动态循环进度条\",\"forms.progressBar.dynamicCircularSubTitle\":\"动态进度条更好。\",\"forms.progressBar.customTextTitle\":\"自定义文本格式\",\"forms.progressBar.customTextSubTitle\":\"您可以通过设置格式自定义文本格式。\",\"forms.progressBar.dashboardTitle\":\"仪表板\",\"forms.progressBar.dashboardSubTitle\":\"仪表板风格的进步。\",\"forms.button.header\":\"纽扣\",\"forms.button.simpleButton\":\"按钮类型\",\"forms.button.iconButton\":\"按钮图标\",\"forms.button.simpleButtonPrimaryText\":\"主\",\"forms.button.simpleButtonDefaultText\":\"默认\",\"forms.button.simpleButtonDashedText\":\"虚线\",\"forms.button.simpleButtonDangerText\":\"危险\",\"forms.button.iconPrimaryButton\":\"搜索\",\"forms.button.iconSimpleButton\":\"搜索\",\"forms.button.iconCirculerButton\":\"搜索\",\"forms.button.iconDashedButton\":\"搜索\",\"forms.button.SizedButton\":\"按钮大小\",\"forms.button.DisabledButton\":\"按钮禁用\",\"forms.button.LoadingButton\":\"按钮加载\",\"forms.button.MultipleButton\":\"多重按钮\",\"forms.button.groupButton\":\"按钮组\",\"forms.Tabs.header\":\"标签\",\"forms.Tabs.simpleTabTitle\":\"搜索\",\"forms.Tabs.simpleTabSubTitle\":\"禁用标签\",\"forms.Tabs.iconTabTitle\":\"图标标签\",\"forms.Tabs.miniTabTitle\":\"迷你标签\",\"forms.Tabs.extraTabTitle\":\"额外动作标签\",\"forms.Tabs.TabpositionTitle\":\"位置\",\"forms.Tabs.TabpositionSubTitle\":\"标签的位置：左，右，上或下\",\"forms.Tabs.cardTitle\":\"卡类型选项卡\",\"forms.Tabs.editableTitle\":\"添加和关闭选项卡\",\"forms.Tabs.verticalTitle\":\"垂直类型标签\",\"forms.Tabs.basicTitle\":\"基本标签\",\"forms.checkbox.header\":\"复选框\",\"forms.checkbox.basicTitle\":\"基本复选框\",\"forms.checkbox.basicSubTitle\":\"复选框的基本用法\",\"forms.checkbox.groupTitle\":\"复选框组\",\"forms.checkbox.groupSubTitle\":\"从数组生成一组复选框。禁用此功能可禁用复选框。\",\"forms.checkbox.groupCheckTitle\":\"复选框组\",\"forms.checkbox.groupCheckSubTitle\":\"从数组生成一组复选框。禁用此功能可禁用复选框。\",\"forms.radio.header\":\"无线电\",\"forms.radio.simpleTitle\":\"基本电台\",\"forms.radio.simpleSubTitle\":\"最简单的用法禁用禁用广播。\",\"forms.radio.groupTitle\":\"垂直无线电组\",\"forms.radio.groupSubTitle\":\"垂直无线电组，更多收音机。\",\"forms.radio.groupSecondTitle\":\"RadioGroup中\",\"forms.radio.groupSecondSubTitle\":\"一组无线电组件。\",\"forms.radio.groupThirdTitle\":\"RadioGroup中\",\"forms.radio.groupThirdSubTitle\":\"一组无线电组件。\",\"forms.transfer.header\":\"转让\",\"forms.transfer.SubTitle\":\"使用搜索框转移。\",\"forms.transfer.Title\":\"搜索\",\"forms.autocomplete.header\":\"自动完成\",\"forms.autocomplete.simpleTitle\":\"定制\",\"forms.autocomplete.simpleSubTitle\":\"您可以将AutoComplete.Option作为AutoComplete的子代码，而不是使用dataSource\",\"forms.autocomplete.customizeTitle\":\"自定义输入组件\",\"forms.autocomplete.customizeSubTitle\":\"自定义输入组件\",\"uiElements.badge.badge\":\"徽章\",\"uiElements.badge.basicExample\":\"基本例子\",\"uiElements.badge.basicExampleSubTitle\":\"最简单的用法当count为0时，徽章将被隐藏，但是我们可以使用showZero来显示。\",\"uiElements.badge.overflowCount\":\"溢出计数\",\"uiElements.badge.overflowCountSubTitle\":\"当count大于overflowCount时，会显示OverflowCount。 overflowCount的默认值为99。\",\"uiElements.badge.status\":\"状态\",\"uiElements.badge.statusSubTitle\":\"独立徽章与状态。\",\"uiElements.badge.success\":\"成功\",\"uiElements.badge.error\":\"错误\",\"uiElements.badge.default\":\"默认\",\"uiElements.badge.processing\":\"处理\",\"uiElements.badge.warning\":\"警告\",\"uiElements.badge.redBadge\":\"红色徽章\",\"uiElements.badge.redBadgeSubTitle\":\"这只会显示一个红色的徽章，没有特定的数字。\",\"uiElements.badge.linkSomething\":\"链接一些东西\",\"uiElements.cards.cards\":\"牌\",\"uiElements.cards.basicCard\":\"基本卡\",\"uiElements.cards.basicCardSubTitle\":\"包含标题，内容和额外角落内容的基本卡。\",\"uiElements.cards.more\":\"更多\",\"uiElements.cards.cardTitle\":\"卡标题\",\"uiElements.cards.cardContent\":\"卡内容\",\"uiElements.cards.lorem\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor incididunt ut labore et dolore magna aliqua。 Ut enim ad minim veniam，quis nostrud exerciseitation ullamco laboris nisi ut aliquip ex ea commodo因此。\",\"uiElements.cards.noBorder\":\"没有边界\",\"uiElements.cards.noBorderSubTitle\":\"在灰色背景上的无边界的卡。\",\"uiElements.cards.gridCard\":\"网格卡\",\"uiElements.cards.gridCardSubTitle\":\"卡通常在概览页面中与网格布局配合使用。\",\"uiElements.cards.loadingCard\":\"装卡\",\"uiElements.cards.loadingCardSubTitle\":\"显示加载指示符，同时正在取出卡的内容。\",\"uiElements.cards.whateverContent\":\"无论内容\",\"uiElements.cards.customizedContentTitle\":\"定制内容\",\"uiElements.cards.customizedContent\":\"显示加载指示符，同时正在取出卡的内容。\",\"uiElements.cards.europeStreetBeat\":\"欧洲街拍\",\"uiElements.cards.instagram\":\"www.instagram.com\",\"uiElements.carousel.carousel\":\"狂欢游行\",\"uiElements.carousel.verticalCarousel\":\"垂直旋转木马\",\"uiElements.carousel.verticalCarouselSubTitle\":\"垂直分页。使用  vertical =true\",\"uiElements.carousel.basicCarousel\":\"基本转盘\",\"uiElements.carousel.basicCarouselSubTitle\":\"基本用法\",\"uiElements.carousel.fadeInTransition\":\"淡入淡出\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"幻灯片使用淡入淡出。   效果= 淡入\",\"uiElements.carousel.scrollAutomatically\":\"自动滚动\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"滚动到下一张卡  图片的时间。自动播放\",\"uiElements.collapse.collapse\":\"坍方\",\"uiElements.collapse.collapseSubTitle\":\"一次可以扩展多个面板，在这种情况下，第一个面板被初始化为活动状态。使用  defaultActiveKey =   [keyNum]\",\"uiElements.collapse.text\":\"狗是一种驯养动物。以其忠诚和忠诚而闻名，可以作为世界各地许多家庭的欢迎客人。\",\"uiElements.collapse.headerOne\":\"这是面板标题1\",\"uiElements.collapse.headerTwo\":\"这是面板标题2\",\"uiElements.collapse.headerThree\":\"这是面板标题3\",\"uiElements.collapse.headerNested\":\"这是面板嵌套面板\",\"uiElements.collapse.nestedExample\":\"嵌套示例\",\"uiElements.collapse.nestedExampleSubTitle\":\"折叠嵌套在折叠中。\",\"uiElements.collapse.borderlessExample\":\"无边界的例子\",\"uiElements.collapse.borderlessExampleSubTitle\":\"无边界风格的折叠。使用  bordered =   false\",\"uiElements.collapse.accordion\":\"手风琴\",\"uiElements.collapse.accordionSubTitle\":\"手风琴模式，一次只能扩展一个面板。默认情况下，第一个面板将被扩展。使用手风琴\",\"uiElements.popover.popover\":\"酥料饼\",\"uiElements.popover.basicExample\":\"基本例子\",\"uiElements.popover.basicExampleSubTitle\":\"最基本的例子。浮动层的大小取决于内容区域。\",\"uiElements.popover.hoverMe\":\"悬停我\",\"uiElements.popover.title\":\"标题\",\"uiElements.popover.titleTrigger\":\"三种触发方式\",\"uiElements.popover.titleTriggerSubTitle\":\"鼠标点击，对焦和移动。\",\"uiElements.popover.focusMe\":\"聚焦我\",\"uiElements.popover.clickMe\":\"点击我\",\"uiElements.popover.placement\":\"放置\",\"uiElements.popover.placementSubTitle\":\"有12个放置选项可用。\",\"uiElements.popover.top\":\"最佳\",\"uiElements.popover.topLeft\":\"左上角\",\"uiElements.popover.topRight\":\"右上\",\"uiElements.popover.leftTop\":\"左上\",\"uiElements.popover.left\":\"剩下\",\"uiElements.popover.leftBottom\":\"左下\",\"uiElements.popover.rightTop\":\"右上\",\"uiElements.popover.right\":\"对\",\"uiElements.popover.bottom\":\"底部\",\"uiElements.popover.bottomLeft\":\"左下方\",\"uiElements.popover.bottomRight\":\"右下\",\"uiElements.popover.boxTitle\":\"控制对话框的关闭\",\"uiElements.popover.boxSubTitle\":\"使用可见支柱来控制显卡的显示。\",\"uiElements.popover.TR\":\"TR\",\"uiElements.popover.TL\":\"TL\",\"uiElements.popover.LT\":\"LT\",\"uiElements.popover.LB\":\"磅\",\"uiElements.popover.RT\":\"RT\",\"uiElements.popover.RB\":\"RB\",\"uiElements.popover.BL\":\"BL\",\"uiElements.popover.BR\":\"BR\",\"uiElements.popover.close\":\"关\",\"uiElements.tooltip.tooltip\":\"提示\",\"uiElements.tooltip.tooltipContent\":\"工具提示内容\",\"uiElements.tooltip.basicExample\":\"基本例子\",\"uiElements.tooltip.basicExampleSubTitle\":\"最简单的用法\",\"uiElements.tooltip.placementTitle\":\"放置\",\"uiElements.tooltip.placementSubTitle\":\"工具提示有12个布局选择。\",\"uiElements.tooltip.TL\":\"TL\",\"uiElements.tooltip.TR\":\"TR\",\"uiElements.tooltip.LT\":\"LT\",\"uiElements.tooltip.LB\":\"磅\",\"uiElements.tooltip.RT\":\"RT\",\"uiElements.tooltip.RB\":\"RB\",\"uiElements.tooltip.BL\":\"BL\",\"uiElements.tooltip.BR\":\"BR\",\"uiElements.tooltip.bottom\":\"底部\",\"uiElements.tooltip.right\":\"对\",\"uiElements.tooltip.left\":\"剩下\",\"uiElements.tooltip.top\":\"最佳\",\"uiElements.tooltip.tooltipContentSpan\":\"鼠标进入时会显示工具提示。\",\"uiElements.tooltip.contentSpan\":\"工具提示内容\",\"uiElements.tags.tags\":\"标签\",\"uiElements.tags.basicExample\":\"基本例子\",\"uiElements.tags.basicExampleSubTitle\":\"使用基本标签，它可以通过set closable属性来关闭。关闭标签支持onClose afterClose事件。\",\"uiElements.tags.tagOne\":\"标签1\",\"uiElements.tags.tagTwo\":\"标签2\",\"uiElements.tags.link\":\"链接\",\"uiElements.tags.preventDefault\":\"防止默认\",\"uiElements.tags.colorfulTag\":\"多彩标签\",\"uiElements.tags.hotTags\":\"热门标签\",\"uiElements.tags.hotTagsSubTitle\":\"选择您最喜欢的主题。\",\"uiElements.tags.hots\":\"热门活动：\",\"uiElements.tags.addRemoveDynamically\":\"动态添加和删除\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"通过数组生成一组标签，可以动态添加和删除。它基于afterClose事件，这将在关闭动画结束时触发。\",\"uiElements.tags.newTag\":\"+新标签\",\"uiElements.timeline.timeline\":\"时间线\",\"uiElements.timeline.basicExample\":\"基本例子\",\"uiElements.timeline.basicTimeline\":\"基本时间表\",\"uiElements.timeline.lastNode\":\"上一个节点\",\"uiElements.timeline.lastNodeContent\":\"当时间轴不完整和持续时，最后放一个鬼节点。 set   pending =   true    或  pending =   a React Element\",\"uiElements.timeline.seeMore\":\"查看更多\",\"uiElements.timeline.custom\":\"习惯\",\"uiElements.timeline.customContent\":\"将节点设置为图标或其他自定义元素。\",\"uiElements.timeline.colorExample\":\"颜色示例\",\"uiElements.timeline.colorExampleContent\":\"设置圈子的颜色。绿色表示完成或成功状态，红色表示警告或错误，蓝色表示正在进行或其他默认状态。\",\"uiElements.timeline.createServiceSite\":\"创建服务网站2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"解决初始网络问题2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"网络问题正在解决2015-09-01\",\"uiElements.timeline.technicalTesting\":\"技术测试2015-09-01\",\"uiElements.dropdown.dropdown\":\"落下\",\"uiElements.dropdown.hoverDropdown\":\"悬停下拉\",\"uiElements.dropdown.hoverMe\":\"悬停我\",\"uiElements.dropdown.hoverPlacement\":\"悬停放置下拉\",\"uiElements.dropdown.hoverDisableLink\":\"悬停下拉与禁用链接\",\"uiElements.dropdown.clickedDropdown\":\"点击下拉\",\"uiElements.dropdown.buttonDropdown\":\"按钮与下拉菜单\",\"uiElements.pagination.pagination\":\"分页\",\"uiElements.pagination.basic\":\"基本\",\"uiElements.pagination.more\":\"更多\",\"uiElements.pagination.changer\":\"换\",\"uiElements.pagination.jumper\":\"跨接器\",\"uiElements.pagination.miniSize\":\"迷你尺寸\",\"uiElements.pagination.simpleMode\":\"简单模式\",\"uiElements.pagination.controlled\":\"受控\",\"uiElements.pagination.totalNumber\":\"总数\",\"uiElements.rating.rating\":\"评分\",\"uiElements.rating.basicExample\":\"基本例子\",\"uiElements.rating.basicExampleSubTitle\":\"最简单的用法\",\"uiElements.rating.halfStar\":\"半星\",\"uiElements.rating.halfStarSubTitle\":\"支持选择半星。\",\"uiElements.rating.showCopywriting\":\"显示文案\",\"uiElements.rating.showCopywritingSubTitle\":\"以速率组件添加文案。\",\"uiElements.rating.readOnly\":\"只读\",\"uiElements.rating.readOnlySubTitle\":\"只读，不能使用鼠标进行交互。\",\"uiElements.rating.otherCharacter\":\"其他性格\",\"uiElements.rating.otherCharacterSubTitle\":\"将默认明星替换为其他字符，如字母，数字，iconfont甚至中文字。\",\"uiElements.tree.tree\":\"树\",\"uiElements.tree.basicExample\":\"基本例子\",\"uiElements.tree.basicExampleSubTitle\":\"最基本的用法，告诉你如何使用可检查，可选择，禁用，defaultExpandKeys等。\",\"uiElements.tree.basicControlledExample\":\"基本控制示例\",\"uiElements.tree.basicControlledExampleSubTitle\":\"基本控制示例\",\"uiElements.tree.draggableExample\":\"可拖曳的例子\",\"uiElements.tree.draggableExampleSubTitle\":\"拖动treeNode插入另一个treeNode或插入到另一个父TreeNode中。\",\"uiElements.tree.loadAsync\":\"异步加载数据\",\"uiElements.tree.loadAsyncSubTitle\":\"单击以展开treeNode时异步加载数据。\",\"uiElements.tree.searchableExample\":\"可搜索的例子\",\"uiElements.tree.searchableExampleSubTitle\":\"可搜索的树\",\"uiElements.tree.treeWithLine\":\"树与线\",\"shuffle.descriptionOne\":\"Netscape 2.0发布，引入Javascript\",\"shuffle.descriptionTwo\":\"Jesse James Garrett发布了AJAX规范\",\"shuffle.descriptionThree\":\"jQuery 1.0发布\",\"shuffle.descriptionFour\":\"首先下划线\",\"shuffle.descriptionFive\":\"Backbone.js成为一件事情\",\"shuffle.descriptionSix\":\"角度1.0发布\",\"shuffle.descriptionSeven\":\"反应是开源的开发商高兴\",\"toggle.list\":\"名单\",\"toggle.grid\":\"格\",\"toggle.ascending\":\"上升\",\"toggle.descending\":\"降序\",\"toggle.shuffle\":\"拖曳\",\"toggle.rotate\":\"旋转\",\"toggle.addItem\":\"新增项目\",\"toggle.removeItem\":\"除去项目\",\"contactlist.searchContacts\":\"搜索联系人\",\"contactlist.addNewContact\":\"添加新联系人\",\"notes.ChoseColor\":\"为您的笔记选择一种颜色\",\"notes.addNote\":\"添加新注\",\"page404.title\":\"404\",\"page404.subTitle\":\"看起来你已经迷路了\",\"page404.description\":\"您正在寻找的页面不存在或已被移动。\",\"page404.backButton\":\"回家\",\"page500.title\":\"500\",\"page500.subTitle\":\"内部服务器错误\",\"page500.description\":\"出了些问题。请再试一次信。\",\"page500.backButton\":\"回家\",\"page.forgetPassTitle\":\"同构\",\"page.forgetPassSubTitle\":\"忘记密码？\",\"page.forgetPassDescription\":\"输入您的电子邮件，我们向您发送重置链接。\",\"page.sendRequest\":\"发送请求\",\"page.resetPassTitle\":\"同构\",\"page.resetPassSubTitle\":\"重设密码\",\"page.resetPassDescription\":\"输入新密码并进行确认。\",\"page.resetPassSave\":\"保存\",\"page.signInTitle\":\"同构\",\"page.signInRememberMe\":\"记住我\",\"page.signInButton\":\"签到\",\"page.signInPreview\":\"用户名：demo，密码：demodemo，或者点击任意按钮。\",\"page.signInFacebook\":\"用Facebook登录\",\"page.signInGooglePlus\":\"使用Google Plus登录\",\"page.signInAuth0\":\"用Auth0登录\",\"page.signInForgotPass\":\"忘记密码\",\"page.signInCreateAccount\":\"创建一个异构帐户\",\"page.signUpTitle\":\"同构\",\"page.signUpTermsConditions\":\"我同意条款和条件\",\"page.signUpButton\":\"注册\",\"page.signUpFacebook\":\"用Facebook注册\",\"page.signUpGooglePlus\":\"用Google Plus注册\",\"page.signUpAuth0\":\"注册Auth0\",\"page.signUpAlreadyAccount\":\"已经有账户？签到。\",\"widget.reportswidget.label\":\"收入\",\"widget.reportswidget.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.singleprogresswidget1.label\":\"营销\",\"widget.singleprogresswidget2.label\":\"Addvertisement\",\"widget.singleprogresswidget3.label\":\"咨询\",\"widget.singleprogresswidget4.label\":\"发展\",\"widget.stickerwidget1.number\":\"210\",\"widget.stickerwidget1.text\":\"未读电子邮件\",\"widget.stickerwidget2.number\":\"1749\",\"widget.stickerwidget2.text\":\"图片上传\",\"widget.stickerwidget3.number\":\"3024\",\"widget.stickerwidget3.text\":\"总信息\",\"widget.stickerwidget4.number\":\"54\",\"widget.stickerwidget4.text\":\"订单发布\",\"widget.salewidget1.label\":\"收入\",\"widget.salewidget1.price\":\"$ 15000\",\"widget.salewidget1.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.salewidget2.label\":\"收入\",\"widget.salewidget2.price\":\"$ 15000\",\"widget.salewidget2.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.salewidget3.label\":\"收入\",\"widget.salewidget3.price\":\"$ 15000\",\"widget.salewidget3.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.salewidget4.label\":\"收入\",\"widget.salewidget4.price\":\"$ 15000\",\"widget.salewidget4.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.cardwidget1.number\":\"110\",\"widget.cardwidget1.text\":\"新消息\",\"widget.cardwidget2.number\":\"100％\",\"widget.cardwidget2.text\":\"卷\",\"widget.cardwidget3.number\":\"137\",\"widget.cardwidget3.text\":\"成就\",\"widget.progresswidget1.label\":\"下载\",\"widget.progresswidget1.details\":\"50％完成\",\"widget.progresswidget2.label\":\"支持\",\"widget.progresswidget2.details\":\"80％满意客户\",\"widget.progresswidget3.label\":\"上传\",\"widget.progresswidget3.details\":\"65％完成\",\"widget.vcardwidget.name\":\"Jhon Doe\",\"widget.vcardwidget.title\":\"高级iOS开发人员\",\"widget.vcardwidget.description\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor ammet dolar consectetur adipisicing elit\",\"checkout.billingform.firstname\":\"名字\",\"checkout.billingform.lastname\":\"姓\",\"checkout.billingform.company\":\"公司名\",\"checkout.billingform.email\":\"电子邮件地址\",\"checkout.billingform.mobile\":\"手机号码\",\"checkout.billingform.country\":\"国家\",\"checkout.billingform.city\":\"市\",\"checkout.billingform.address\":\"地址\",\"checkout.billingform.addressoptional\":\"公寓，套房，单位等（可选）\",\"checkout.billingform.checkbox\":\"创建一个帐户？\",\"antTable.title.image\":\"图片\",\"antTable.title.firstName\":\"名字\",\"antTable.title.lastName\":\"姓\",\"antTable.title.city\":\"市\",\"antTable.title.street\":\"街\",\"antTable.title.email\":\"电子邮件\",\"antTable.title.dob\":\"DOB\",\"Map.leaflet.basicTitle\":\"基本地图\",\"Map.leaflet.basicMarkerTitle\":\"基本地图（带默认标记）\",\"Map.leaflet.leafletCustomMarkerTitle\":\"基本地图（使用自定义图标标记）\",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"基本地图（使用自定义Html标记）\",\"Map.leaflet.leafletMarkerClusterTitle\":\"基本地图（带标记群集）\",\"Map.leaflet.leafletRoutingTitle\":\"基本地图路由\",\"Component.contacts.noOption\":\"找不到联系\",\"email.send\":\"发送\",\"email.cancel\":\"取消\",\"email.compose\":\"撰写\",\"email.noMessage\":\"请选择一个邮件阅读\",\"themeSwitcher.purchase\":\"现在买\",\"themeSwitcher.settings\":\"设置\",\"sidebar.selectbox\":\"选择\",\"sidebar.frappeChart\":\"图表\",\"topbar.myprofile\":\"我的简历\",\"topbar.help\":\"帮帮我\",\"topbar.logout\":\"登出\",\"topbar.viewAll\":\"查看全部\",\"topbar.viewCart\":\"查看购物车\",\"topbar.totalPrice\":\"总价格\",\"sidebar.scrumboard\":\"Scrum板\",\"sidebar.firestorecrud\":\"Firestore CRUD\",\"sidebar.firestorecrudarticle\":\"用品\",\"sidebar.firestorecrudinvestor\":\"投资者\"}");

/***/ }),

/***/ "./shared/library/helpers/isServer.js":
/*!********************************************!*\
  !*** ./shared/library/helpers/isServer.js ***!
  \********************************************/
/*! exports provided: isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
const isServer = true;

/***/ }),

/***/ "./shared/library/helpers/options.js":
/*!*******************************************!*\
  !*** ./shared/library/helpers/options.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const options = [{
  key: 'mailbox',
  label: 'sidebar.email',
  leftIcon: 'ion-android-mail'
}, {
  key: 'chat',
  label: 'sidebar.chat',
  leftIcon: 'ion-chatbubbles'
}, {
  key: 'ecommerce',
  label: 'sidebar.ecommerce',
  leftIcon: 'ion-bag',
  children: [{
    key: 'shop',
    label: 'sidebar.shop'
  }, {
    key: 'cart',
    label: 'sidebar.cart'
  }, {
    key: 'checkout',
    label: 'sidebar.checkout'
  }, {
    key: 'card',
    label: 'sidebar.cards'
  }]
}, {
  key: 'maps',
  label: 'sidebar.maps',
  leftIcon: 'ion-map',
  children: [{
    key: 'googlemap',
    label: 'sidebar.googleMap'
  }, {
    key: 'leafletmap',
    label: 'sidebar.leafletMap'
  }]
}, {
  key: 'my-profile',
  label: 'sidebar.profile',
  leftIcon: 'ion-person'
}, {
  key: 'scrum-board',
  label: 'sidebar.scrumboard',
  leftIcon: 'ion-android-checkbox-outline'
}, {
  key: 'invoice',
  label: 'sidebar.invoice',
  leftIcon: 'ion-clipboard'
}, {
  key: 'youtubeSearch',
  label: 'sidebar.youtubeSearch',
  leftIcon: 'ion-social-youtube'
}, {
  key: 'calendar',
  label: 'sidebar.calendar',
  leftIcon: 'ion-calendar'
}, {
  key: 'notes',
  label: 'sidebar.notes',
  leftIcon: 'ion-ios-paper'
}, {
  key: 'todo',
  label: 'sidebar.todos',
  leftIcon: 'ion-android-checkbox-outline'
}, {
  key: 'firestorecrud',
  label: 'sidebar.firestorecrud',
  leftIcon: 'ion-fireball',
  children: [{
    key: 'articles',
    label: 'sidebar.firestorecrudarticle'
  }, {
    key: 'investors',
    label: 'sidebar.firestorecrudinvestor'
  }]
}, {
  key: 'contacts',
  label: 'sidebar.contacts',
  leftIcon: 'ion-android-person-add'
}, {
  key: 'shuffle',
  label: 'sidebar.shuffle',
  leftIcon: 'ion-grid'
}, {
  key: 'charts',
  label: 'sidebar.charts',
  leftIcon: 'ion-arrow-graph-up-right',
  children: [{
    key: 'googleChart',
    label: 'sidebar.googleCharts'
  }, {
    key: 'reecharts',
    label: 'sidebar.recharts'
  }, {
    key: 'reactChart2',
    label: 'sidebar.reactChart2'
  }, {
    key: 'frappeChart',
    label: 'sidebar.frappeChart'
  }]
}, {
  key: 'Forms',
  label: 'sidebar.forms',
  leftIcon: 'ion-android-mail',
  children: [{
    key: 'InputField',
    label: 'sidebar.input'
  }, {
    key: 'editor',
    label: 'sidebar.editor'
  }, {
    key: 'FormsWithValidation',
    label: 'sidebar.formsWithValidation'
  }, {
    key: 'progress',
    label: 'sidebar.progress'
  }, {
    key: 'button',
    label: 'sidebar.button'
  }, {
    key: 'tab',
    label: 'sidebar.tab'
  }, {
    key: 'checkbox',
    label: 'sidebar.checkbox'
  }, {
    key: 'radiobox',
    label: 'sidebar.radiobox'
  }, {
    key: 'selectbox',
    label: 'sidebar.selectbox'
  }, {
    key: 'transfer',
    label: 'sidebar.transfer'
  }, {
    key: 'autocomplete',
    label: 'sidebar.autocomplete'
  }]
}, // {
//   key: 'gridLayout',
//   label: 'sidebar.boxOptions',
//   leftIcon: 'ion-cube'
// },
{
  key: 'uielements',
  label: 'sidebar.uiElements',
  leftIcon: 'ion-leaf',
  children: [{
    key: 'op_badge',
    label: 'sidebar.badge'
  }, {
    key: 'op_card',
    label: 'sidebar.card2'
  }, {
    key: 'op_carousel',
    label: 'sidebar.corusel'
  }, {
    key: 'op_collapse',
    label: 'sidebar.collapse'
  }, {
    key: 'op_popover',
    label: 'sidebar.popover'
  }, {
    key: 'op_tooltip',
    label: 'sidebar.tooltip'
  }, {
    key: 'op_tag',
    label: 'sidebar.tag'
  }, {
    key: 'op_timeline',
    label: 'sidebar.timeline'
  }, {
    key: 'dropdown',
    label: 'sidebar.dropdown'
  }, {
    key: 'pagination',
    label: 'sidebar.pagination'
  }, {
    key: 'rating',
    label: 'sidebar.rating'
  }, {
    key: 'tree',
    label: 'sidebar.tree'
  }, {
    key: 'swiperslider',
    label: 'sidebar.swiperslider'
  }]
}, {
  key: 'advancedUielements',
  label: 'sidebar.advancedElements',
  leftIcon: 'ion-flash',
  children: [{
    key: 'reactDates',
    label: 'sidebar.reactDates'
  }, {
    key: 'codeMirror',
    label: 'sidebar.codeMirror'
  }, {
    key: 'uppy',
    label: 'sidebar.uppy'
  }, {
    key: 'dropzone',
    label: 'sidebar.dropzone'
  }]
}, {
  key: 'feedback',
  label: 'sidebar.feedback',
  leftIcon: 'ion-thumbsup',
  children: [{
    key: 'alert',
    label: 'sidebar.alert'
  }, {
    key: 'modal',
    label: 'sidebar.modal'
  }, {
    key: 'message',
    label: 'sidebar.message'
  }, {
    key: 'notification',
    label: 'sidebar.notification'
  }, {
    key: 'popConfirm',
    label: 'sidebar.popConfirm'
  }, {
    key: 'spin',
    label: 'sidebar.spin'
  }]
}, {
  key: 'table',
  label: 'sidebar.tables',
  leftIcon: 'ion-android-menu',
  children: [{
    key: 'table_ant',
    label: 'sidebar.antTables'
  }]
}, {
  key: 'pages',
  label: 'sidebar.pages',
  leftIcon: 'ion-document-text',
  children: [{
    key: '404',
    label: 'sidebar.404',
    withoutDashboard: true
  }, {
    key: '500',
    label: 'sidebar.500',
    withoutDashboard: true
  }, {
    key: 'signin',
    label: 'sidebar.signIn',
    withoutDashboard: true
  }, {
    key: 'signup',
    label: 'sidebar.signUp',
    withoutDashboard: true
  }, {
    key: 'forgotpassword',
    label: 'sidebar.forgotPw',
    withoutDashboard: true
  }, {
    key: 'resetpassword',
    label: 'sidebar.resetPw',
    withoutDashboard: true
  } // {
  //   key: 'comingSoon',
  //   label: 'sidebar.comingSoon',
  //    withoutDashboard: true
  // }
  ]
}, {
  key: 'githubSearch',
  label: 'sidebar.githubSearch',
  leftIcon: 'ion-social-github'
}, {
  key: 'blank_page',
  label: 'sidebar.blankPage',
  leftIcon: 'ion-document'
}];
/* harmony default export */ __webpack_exports__["default"] = (options);

/***/ }),

/***/ "./shared/library/helpers/rtl.js":
/*!***************************************!*\
  !*** ./shared/library/helpers/rtl.js ***!
  \***************************************/
/*! exports provided: default, direction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "direction", function() { return direction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "E:\\Projects\\starsofboston\\next-django\\isomorphic-next\\shared\\library\\helpers\\rtl.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


let direction = 'ltr';

if (false) {}

const withDirection = Component => props => {
  return __jsx(Component, _extends({}, props, {
    "data-rtl": direction,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (withDirection);


/***/ }),

/***/ "./shared/library/helpers/style_utils.js":
/*!***********************************************!*\
  !*** ./shared/library/helpers/style_utils.js ***!
  \***********************************************/
/*! exports provided: transition, borderRadius, boxShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "borderRadius", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boxShadow", function() { return boxShadow; });
// Transition
function transition(timing = 0.3) {
  return `
      -webkit-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -moz-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -ms-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      -o-transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
      transition: all ${timing}s cubic-bezier(0.215, 0.61, 0.355, 1);
  `;
} // Border Radius

function borderRadius(radius = 0) {
  return `
      -webkit-border-radius: ${radius};
      -moz-border-radius: ${radius};
      -ms-transition: ${radius};
      -o-border-radius: ${radius};
      border-radius: ${radius};
  `;
} // Box Shadow

function boxShadow(shadow = 'none') {
  return `
      -webkit-box-shadow: ${shadow};
      -moz-box-shadow: ${shadow};
      box-shadow: ${shadow};
  `;
}

/***/ }),

/***/ "./shared/library/helpers/url_sync.js":
/*!********************************************!*\
  !*** ./shared/library/helpers/url_sync.js ***!
  \********************************************/
/*! exports provided: getInitData, setUrl, getDefaultPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitData", function() { return getInitData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUrl", function() { return setUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultPath", function() { return getDefaultPath; });
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qs */ "qs");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ "./shared/library/helpers/options.js");
/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isServer */ "./shared/library/helpers/isServer.js");



function getInitData() {
  if (!_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"]) {
    const initData = qs__WEBPACK_IMPORTED_MODULE_0___default.a.parse(window.location.search.slice(1));
    if (initData.toggle) initData.toggle.free_shipping = initData.toggle.free_shipping === 'true' ? true : undefined;
    return initData;
  }

  return false;
}
function setUrl(searchState) {
  if (!_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"]) {
    const search = searchState ? `${window.location.pathname}?${qs__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(searchState)}` : '';
    window.history.pushState(searchState, null, search);
  }

  return;
}
function getDefaultPath() {
  const getParent = lastRoute => {
    const parent = [];
    if (!lastRoute) return parent;
    parent.push(lastRoute);
    _options__WEBPACK_IMPORTED_MODULE_1__["default"].forEach(option => {
      if (option.children) {
        option.children.forEach(child => {
          if (child.key === lastRoute) {
            parent.push(option.key);
          }
        });
      }
    });
    return parent;
  };

  if (!_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"] && window.location.pathname) {
    const routes = window.location.pathname.split('/');

    if (routes.length > 1) {
      const lastRoute = routes[routes.length - 1];
      return getParent(lastRoute);
    }
  }

  return [];
}

/***/ }),

/***/ "./shared/library/helpers/utility.js":
/*!*******************************************!*\
  !*** ./shared/library/helpers/utility.js ***!
  \*******************************************/
/*! exports provided: clearToken, getToken, arrayEqual, timeDifference, stringToInt, stringToPosetiveInt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearToken", function() { return clearToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return arrayEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeDifference", function() { return timeDifference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToInt", function() { return stringToInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToPosetiveInt", function() { return stringToPosetiveInt; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);

function clearToken() {
  localStorage.removeItem('id_token');
}
function getToken() {
  try {
    const idToken = localStorage.getItem('id_token');
    return new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]({
      idToken
    });
  } catch (err) {
    clearToken();
    return new immutable__WEBPACK_IMPORTED_MODULE_0__["Map"]();
  }
}
function arrayEqual(array1, array2) {
  return array1.sort().toString() == array2.sort().toString();
}
function timeDifference(givenTime) {
  givenTime = new Date(givenTime);
  const milliseconds = new Date().getTime() - givenTime.getTime();

  const numberEnding = number => {
    return number > 1 ? 's' : '';
  };

  const number = num => num > 9 ? '' + num : '0' + num;

  const getTime = () => {
    let temp = Math.floor(milliseconds / 1000);
    const years = Math.floor(temp / 31536000);

    if (years) {
      const month = number(givenTime.getUTCMonth() + 1);
      const day = number(givenTime.getUTCDate());
      const year = givenTime.getUTCFullYear() % 100;
      return `${day}-${month}-${year}`;
    }

    const days = Math.floor((temp %= 31536000) / 86400);

    if (days) {
      if (days < 28) {
        return days + ' day' + numberEnding(days);
      } else {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const month = months[givenTime.getUTCMonth()];
        const day = number(givenTime.getUTCDate());
        return `${day} ${month}`;
      }
    }

    const hours = Math.floor((temp %= 86400) / 3600);

    if (hours) {
      return `${hours} hour${numberEnding(hours)} ago`;
    }

    const minutes = Math.floor((temp %= 3600) / 60);

    if (minutes) {
      return `${minutes} minute${numberEnding(minutes)} ago`;
    }

    return 'a few seconds ago';
  };

  return getTime();
}
function stringToInt(value, defValue = 0) {
  if (!value) {
    return 0;
  } else if (!isNaN(value)) {
    return parseInt(value, 10);
  }

  return defValue;
}
function stringToPosetiveInt(value, defValue = 0) {
  const val = stringToInt(value, defValue);
  return val > -1 ? val : defValue;
}

/***/ }),

/***/ "./shared/library/hooks/useWindowSize.js":
/*!***********************************************!*\
  !*** ./shared/library/hooks/useWindowSize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useWindowSize = () => {
  const isClient = false;
  const getSize = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  }), [isClient]);
  const [size, setSize] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(getSize);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!isClient) {
      return false;
    }

    const onHandleResize = () => {
      setSize(getSize);
    };

    window.addEventListener('resize', onHandleResize);
    return () => window.removeEventListener('resize', onHandleResize);
  }, [getSize, isClient]);
  return size;
};

/* harmony default export */ __webpack_exports__["default"] = (useWindowSize);

/***/ }),

/***/ "./shared/redux/app/actions.js":
/*!*************************************!*\
  !*** ./shared/redux/app/actions.js ***!
  \*************************************/
/*! exports provided: getView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getView", function() { return getView; });
function getView(width) {
  let newView = 'MobileView';

  if (width > 1220) {
    newView = 'DesktopView';
  } else if (width > 767) {
    newView = 'TabView';
  }

  return newView;
}
const actions = {
  COLLPSE_CHANGE: 'COLLPSE_CHANGE',
  COLLPSE_OPEN_DRAWER: 'COLLPSE_OPEN_DRAWER',
  CHANGE_OPEN_KEYS: 'CHANGE_OPEN_KEYS',
  TOGGLE_ALL: 'TOGGLE_ALL',
  CHANGE_CURRENT: 'CHANGE_CURRENT',
  CLEAR_MENU: 'CLEAR_MENU',
  toggleCollapsed: () => ({
    type: actions.COLLPSE_CHANGE
  }),
  toggleAll: (width, height) => {
    const view = getView(width);
    const collapsed = view !== 'DesktopView';
    return {
      type: actions.TOGGLE_ALL,
      collapsed,
      view,
      height
    };
  },
  toggleOpenDrawer: () => ({
    type: actions.COLLPSE_OPEN_DRAWER
  }),
  changeOpenKeys: openKeys => ({
    type: actions.CHANGE_OPEN_KEYS,
    openKeys
  }),
  changeCurrent: current => ({
    type: actions.CHANGE_CURRENT,
    current
  }),
  clearMenu: () => ({
    type: actions.CLEAR_MENU
  })
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./shared/redux/app/reducer.js":
/*!*************************************!*\
  !*** ./shared/redux/app/reducer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return appReducer; });
/* harmony import */ var _iso_lib_helpers_url_sync__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/lib/helpers/url_sync */ "./shared/library/helpers/url_sync.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./shared/redux/app/actions.js");
/* harmony import */ var _iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/lib/helpers/isServer */ "./shared/library/helpers/isServer.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const preKeys = Object(_iso_lib_helpers_url_sync__WEBPACK_IMPORTED_MODULE_0__["getDefaultPath"])();
const initState = {
  collapsed: !_iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"] && window.innerWidth > 1220 ? false : true,
  view: !_iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"] && Object(_actions__WEBPACK_IMPORTED_MODULE_1__["getView"])(window.innerWidth),
  height: !_iso_lib_helpers_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"] && window.innerHeight,
  openDrawer: false,
  openKeys: preKeys,
  current: preKeys
};
function appReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].COLLPSE_CHANGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        collapsed: !state.collapsed
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].COLLPSE_OPEN_DRAWER:
      return _objectSpread(_objectSpread({}, state), {}, {
        openDrawer: !state.openDrawer
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return _objectSpread(_objectSpread({}, state), {}, {
          collapsed: action.collapsed,
          view: action.view,
          height
        });
      }

      break;

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE_OPEN_KEYS:
      return _objectSpread(_objectSpread({}, state), {}, {
        openKeys: action.openKeys
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE_CURRENT:
      return _objectSpread(_objectSpread({}, state), {}, {
        current: action.current
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CLEAR_MENU:
      return _objectSpread(_objectSpread({}, state), {}, {
        openKeys: [],
        current: []
      });

    default:
      return state;
  }

  return state;
}

/***/ }),

/***/ "./shared/redux/contacts/actions.js":
/*!******************************************!*\
  !*** ./shared/redux/contacts/actions.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducer */ "./shared/redux/contacts/reducer.js");


function ascendingSort(contact1, contact2) {
  const name1 = contact1.name ? contact1.name.toUpperCase() : '~';
  const name2 = contact2.name ? contact2.name.toUpperCase() : '~';
  return name1 > name2 ? 1 : name1 === name2 ? 0 : -1;
}

const contactActions = {
  ADD_CONTACT: 'ADD_CONTACT',
  EDIT_CONTACT: 'EDIT_CONTACT',
  DELETE__CONTACT: 'DELETE__CONTACT',
  CHANGE_CONTACT: 'CHANGE_CONTACT',
  EDIT_VIEW: 'EDIT_VIEW',
  changeContact: id => ({
    type: contactActions.CHANGE_CONTACT,
    id
  }),
  addContact: () => {
    const newContact = {
      id: new Date(),
      firstName: '',
      avatar: _reducer__WEBPACK_IMPORTED_MODULE_0__["contacts"][new Date() % 10].avatar,
      LastName: '',
      mobile: '',
      home: '',
      name: '',
      company: '',
      work: '',
      note: ''
    };
    return (dispatch, getState) => {
      dispatch({
        type: contactActions.ADD_CONTACT,
        contacts: [...getState().Contacts.contacts, newContact],
        selectedId: newContact.id
      });
    };
  },
  editContact: newContact => {
    return (dispatch, getState) => {
      const contacts = getState().Contacts.contacts;
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === newContact.id) {
          newContacts.push(newContact);
        } else {
          newContacts.push(contact);
        }
      });
      dispatch({
        type: contactActions.EDIT_CONTACT,
        contacts: newContacts.sort(ascendingSort)
      });
    };
  },
  deleteContact: id => {
    return (dispatch, getState) => {
      const contacts = getState().Contacts.contacts;
      const seectedId = getState().Contacts.seectedId;
      const newContacts = [];
      contacts.forEach(contact => {
        if (contact.id === id) {} else {
          newContacts.push(contact);
        }
      });
      dispatch({
        type: contactActions.DELETE__CONTACT,
        contacts: newContacts,
        seectedId: id === seectedId ? undefined : seectedId
      });
    };
  },
  viewChange: view => ({
    type: contactActions.EDIT_VIEW,
    view
  })
};
/* harmony default export */ __webpack_exports__["default"] = (contactActions);

/***/ }),

/***/ "./shared/redux/contacts/data.js":
/*!***************************************!*\
  !*** ./shared/redux/contacts/data.js ***!
  \***************************************/
/*! exports provided: otherAttributes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otherAttributes", function() { return otherAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return fakeData; });
const otherAttributes = [{
  title: 'Mobile',
  value: 'mobile',
  type: 'phoneNumber'
}, {
  title: 'Home',
  value: 'home',
  type: 'phoneNumber'
}, {
  title: 'Company',
  value: 'company',
  type: 'company'
}, {
  title: 'Work',
  value: 'work',
  type: 'phoneNumber'
}, {
  title: 'Notes',
  value: 'note',
  type: 'paragraph'
}];
const contactList = JSON.parse(`[{
  "id": 22143,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg",
  "firstName": "Benjamin",
  "lastName": "Jacobi",
  "name": "Benjamin Jacobi",
  "mobile": "(023) 302-3161 x60451",
  "home": "(136) 403-0476 x8388",
  "company": "Casper Inc",
  "work": "(399) 506-9438",
  "note": "Quisquam et nisi. Dicta in ut eos consequatur ipsum omnis. Quisquam doloremque error praesentium sapiente et vitae. Omnis facere sint nulla similique vel voluptatem officia deleniti."
}, {
  "id": 17385,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/antonyzotov/128.jpg",
  "firstName": "Clementina",
  "lastName": "Hahn",
  "name": "Clementina Hahn",
  "mobile": "686.292.3548 x7219",
  "home": "447-343-4864 x414",
  "company": "Marquardt Inc",
  "work": "299-721-6828 x856",
  "note": "Distinctio voluptas repellendus rerum temporibus deserunt et corrupti sint. Odit sit labore quia. Perferendis iure eos qui tempore ex saepe consequuntur accusamus ipsa. Eius consectetur nam quas. Laborum aperiam hic dolorum quae autem consequatur."
}, {
  "id": 85838,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bungiwan/128.jpg",
  "firstName": "Clinton",
  "lastName": "Goyette",
  "name": "Clinton Goyette",
  "mobile": "(913) 127-1563 x082",
  "home": "(843) 501-8804",
  "company": "Feil - Goodwin",
  "work": "732.111.8883",
  "note": "Maiores animi et quidem. Ducimus voluptate est consequatur ut vitae in. Ut fugit sit ab blanditiis ab occaecati soluta quis."
}, {
  "id": 2791,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg",
  "firstName": "Forrest",
  "lastName": "Klein",
  "name": "Forrest Klein",
  "mobile": "174-628-5802 x8324",
  "home": "(047) 141-0247",
  "company": "Wilkinson - Howe",
  "work": "1-624-238-9252",
  "note": "Sit et non debitis. Quis atque facilis et sed. Illum adipisci deserunt corporis modi necessitatibus at numquam neque sint."
}, {
  "id": 67493,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/salleedesign/128.jpg",
  "firstName": "General",
  "lastName": "Kub",
  "name": "General Kub",
  "mobile": "779.482.9824",
  "home": "(698) 858-0337 x3273",
  "company": "Moen Group",
  "work": "881.768.7522",
  "note": "Quibusdam dolorem minima ea enim nostrum eos. Corrupti dolore velit molestiae nostrum error qui. Sit qui maxime sed quisquam rem cupiditate. Iste ex quidem. Ipsam et quia omnis facere blanditiis."
}, {
  "id": 75593,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stalewine/128.jpg",
  "firstName": "Lon",
  "lastName": "Wunsch",
  "name": "Lon Wunsch",
  "mobile": "(792) 607-6366 x88975",
  "home": "447.683.3799 x38668",
  "company": "Johns, Gibson and Schinner",
  "work": "(735) 859-7674",
  "note": "Velit non voluptas sed sit pariatur earum unde neque. Incidunt nam reprehenderit non mollitia. Incidunt quo illum modi ex eos consequuntur eius nihil itaque. Quis tenetur ratione repudiandae ea et architecto dolorem porro. Rem non consectetur ea iste."
}, {
  "id": 90096,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/cherif_b/128.jpg",
  "firstName": "Mabelle",
  "lastName": "Kling",
  "name": "Mabelle Kling",
  "mobile": "499-736-0779 x2409",
  "home": "1-910-529-7393 x222",
  "company": "Bins, Murray and Ryan",
  "work": "905.098.6372",
  "note": "Et et rerum placeat beatae doloribus earum et reiciendis. Nisi suscipit ad dolor. Tenetur hic quia nihil deleniti inventore. Blanditiis aliquam ea ea. Omnis consequatur itaque est rerum sed reiciendis laboriosam reiciendis. Consectetur ullam et laudantium at itaque aut qui et molestiae."
}, {
  "id": 15783,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ponchomendivil/128.jpg",
  "firstName": "Maryse",
  "lastName": "Koss",
  "name": "Maryse Koss",
  "mobile": "668-920-9662 x610",
  "home": "075.864.1819 x8265",
  "company": "Smitham Inc",
  "work": "468.534.0931",
  "note": "Libero perferendis aut repudiandae quas. Omnis aut enim voluptas magnam harum quisquam illo aliquid aliquam. Dolor et et vel nihil quibusdam fugit facere adipisci aut. Repellat quia est beatae animi ipsa. Ad sit eligendi pariatur quia illo atque qui voluptatem excepturi."
}, {
  "id": 42122,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/traneblow/128.jpg",
  "firstName": "Maude",
  "lastName": "Grant",
  "name": "Maude Grant",
  "mobile": "1-077-505-0657",
  "home": "062.968.4841 x62748",
  "company": "Thiel, Bauch and Mosciski",
  "work": "1-318-593-2619 x206",
  "note": "Ut sit fuga quibusdam. Ullam non necessitatibus voluptatem quidem est dignissimos dolores quaerat. Aspernatur fugiat et."
}, {
  "id": 5869,
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/silv3rgvn/128.jpg",
  "firstName": "Orrin",
  "lastName": "Harris",
  "name": "Orrin Harris",
  "mobile": "871.567.4877",
  "home": "(466) 574-3352",
  "company": "Haag Group",
  "work": "1-908-422-4964",
  "note": "Aut sequi quae omnis ut qui quaerat. Dolor et fugit blanditiis laudantium. Libero modi officiis consequatur corrupti reiciendis aut qui nemo doloribus. Consequatur voluptatibus quis vero numquam aspernatur a sit laborum voluptates."
}]`);
class fakeData {
  constructor(size = 10) {
    this.size = size;
    this.datas = [];
  }

  dataModel(index) {
    return contactList[index];
  }

  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }

    return this.datas[index];
  }

  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }

    return this.datas.slice().sort((contact1, contact2) => `${contact1.firstName}${contact1.LastName}`.toUpperCase() > `${contact2.firstName}${contact2.LastName}`.toUpperCase());
  }

  getSize() {
    return this.size;
  }

}

/***/ }),

/***/ "./shared/redux/contacts/reducer.js":
/*!******************************************!*\
  !*** ./shared/redux/contacts/reducer.js ***!
  \******************************************/
/*! exports provided: default, contacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return contactReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacts", function() { return contacts; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./shared/redux/contacts/data.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./shared/redux/contacts/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const contacts = new _data__WEBPACK_IMPORTED_MODULE_0__["default"](10).getAll();
const initState = {
  contacts,
  selectedId: contacts[0].id,
  editView: false
};
function contactReducer(state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE_CONTACT:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedId: action.id,
        editView: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CONTACT:
      return _objectSpread(_objectSpread({}, state), {}, {
        contacts: action.contacts,
        selectedId: action.selectedId,
        editView: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].EDIT_CONTACT:
      return _objectSpread(_objectSpread({}, state), {}, {
        contacts: action.contacts
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE__CONTACT:
      return _objectSpread(_objectSpread({}, state), {}, {
        contacts: action.contacts,
        selectedId: action.selectedId
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].EDIT_VIEW:
      return _objectSpread(_objectSpread({}, state), {}, {
        editView: action.view
      });

    default:
      return state;
  }
}


/***/ }),

/***/ "./shared/redux/contacts/saga.js":
/*!***************************************!*\
  !*** ./shared/redux/contacts/saga.js ***!
  \***************************************/
/*! exports provided: addContact, editContact, deleteContact, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addContact", function() { return addContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editContact", function() { return editContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContact", function() { return deleteContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./shared/redux/contacts/actions.js");


function* addContact() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].ADD_CONTACT, function* () {});
}
function* editContact() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].EDIT_CONTACT, function* () {});
}
function* deleteContact() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_actions__WEBPACK_IMPORTED_MODULE_1__["default"].DELETE__CONTACT, function* () {});
}
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(addContact), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(editContact), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(deleteContact)]);
}

/***/ }),

/***/ "./shared/redux/languageSwitcher/actions.js":
/*!**************************************************!*\
  !*** ./shared/redux/languageSwitcher/actions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./shared/redux/languageSwitcher/config.js");

const actions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  ACTIVATE_LANG_MODAL: 'ACTIVATE_LANG_MODAL',
  switchActivation: () => ({
    type: actions.ACTIVATE_LANG_MODAL
  }),
  changeLanguage: language => {
    return {
      type: actions.CHANGE_LANGUAGE,
      language: Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentLanguage"])(language)
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./shared/redux/languageSwitcher/config.js":
/*!*************************************************!*\
  !*** ./shared/redux/languageSwitcher/config.js ***!
  \*************************************************/
/*! exports provided: getCurrentLanguage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentLanguage", function() { return getCurrentLanguage; });
/* harmony import */ var _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/config/language.config */ "./shared/config/language.config.js");
/* harmony import */ var _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/assets/images/flag/uk.svg */ "./shared/assets/images/flag/uk.svg");
/* harmony import */ var _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/assets/images/flag/china.svg */ "./shared/assets/images/flag/china.svg");
/* harmony import */ var _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/assets/images/flag/spain.svg */ "./shared/assets/images/flag/spain.svg");
/* harmony import */ var _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/assets/images/flag/france.svg */ "./shared/assets/images/flag/france.svg");
/* harmony import */ var _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/assets/images/flag/italy.svg */ "./shared/assets/images/flag/italy.svg");






const config = {
  defaultLanguage: _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__["default"],
  options: [{
    languageId: 'english',
    locale: 'en',
    text: 'English',
    icon: _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1___default.a
  }, {
    languageId: 'chinese',
    locale: 'zh',
    text: 'Chinese',
    icon: _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    languageId: 'spanish',
    locale: 'es',
    text: 'Spanish',
    icon: _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }, {
    languageId: 'french',
    locale: 'fr',
    text: 'French',
    icon: _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    languageId: 'italian',
    locale: 'it',
    text: 'Italian',
    icon: _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
  }]
};
function getCurrentLanguage(lang) {
  let selecetedLanguage = config.options[0];
  config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
/* harmony default export */ __webpack_exports__["default"] = (config);

/***/ }),

/***/ "./shared/redux/languageSwitcher/reducer.js":
/*!**************************************************!*\
  !*** ./shared/redux/languageSwitcher/reducer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./shared/redux/languageSwitcher/config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./shared/redux/languageSwitcher/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initState = {
  isActivated: false,
  language: Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentLanguage"])(_config__WEBPACK_IMPORTED_MODULE_0__["default"].defaultLanguage || 'english')
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].ACTIVATE_LANG_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, {
        isActivated: !state.isActivated
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE_LANGUAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        language: action.language
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./shared/redux/modal/actions.js":
/*!***************************************!*\
  !*** ./shared/redux/modal/actions.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const modalActions = {
  SHOW_MODAL: 'SHOW_MODAL',
  HIDE_MODAL: 'HIDE_MODAL',
  openModal: payload => ({
    type: modalActions.SHOW_MODAL,
    payload
  }),
  closeModal: () => ({
    type: modalActions.HIDE_MODAL
  })
};
/* harmony default export */ __webpack_exports__["default"] = (modalActions);

/***/ }),

/***/ "./shared/redux/modal/reducer.js":
/*!***************************************!*\
  !*** ./shared/redux/modal/reducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modalReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./shared/redux/modal/actions.js");

const initialState = {
  modalVisibility: false,
  modalType: '',
  modalProps: {}
};
function modalReducer(state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].SHOW_MODAL:
      return {
        modalVisibility: true,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps
      };

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].HIDE_MODAL:
      return initialState;

    default:
      return state;
  }
}

/***/ }),

/***/ "./shared/redux/profile/actions.js":
/*!*****************************************!*\
  !*** ./shared/redux/profile/actions.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const profileActions = {
  FETCH_PROFILE_DATA_START: 'FETCH_PROFILE_DATA_START',
  FETCH_PROFILE_DATA_SUCCESS: 'FETCH_PROFILE_DATA_SUCCESS',
  FETCH_PROFILE_DATA_FAILURE: 'FETCH_PROFILE_DATA_FAILURE',
  SET_PROFILE_DATA: 'SET_PROFILE_DATA',
  fetchProfileDataStart: () => ({
    type: profileActions.FETCH_PROFILE_DATA_START
  }),
  fetchProfileDataSuccess: profile => ({
    type: profileActions.FETCH_PROFILE_DATA_SUCCESS,
    payload: profile
  }),
  fetchProfileDataFailure: error => ({
    type: profileActions.FETCH_PROFILE_DATA_FAILURE,
    payload: error
  })
};
/* harmony default export */ __webpack_exports__["default"] = (profileActions);

/***/ }),

/***/ "./shared/redux/profile/reducer.js":
/*!*****************************************!*\
  !*** ./shared/redux/profile/reducer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return profileReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./shared/redux/profile/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_DATA = {
  data: null,
  loading: true,
  error: null
};
function profileReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].FETCH_PROFILE_DATA_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        data: action.payload,
        loading: false,
        error: null
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].FETCH_PROFILE_DATA_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./shared/redux/quiz/actions.js":
/*!**************************************!*\
  !*** ./shared/redux/quiz/actions.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const quizActions = {
  START_QUIZ: 'START_QUIZ',
  GET_QUIZ_DATA: 'GET_QUIZ_DATA',
  GET_QUESTION_DATA: 'GET_QUESTION_DATA',
  SET_QUESTION_DATA: 'SET_QUESTION_DATA',
  SET_QUIZ_DATA: 'SET_QUIZ_DATA',
  SET_QUESTION_ANSWER: 'SET_QUESTION_ANSWER',
  NEXT_QUESTION: 'NEXT_QUESTION',
  // Load Data Actions
  startQuiz: () => ({
    type: quizActions.START_QUIZ
  }),
  getQuestionData: () => ({
    type: quizActions.GET_QUESTION_DATA
  }),
  getQuizData: () => ({
    type: quizActions.GET_QUIZ_DATA
  }),
  setQuizData: payload => ({
    type: quizActions.SET_QUIZ_DATA,
    payload
  }),
  setQuestionData: payload => ({
    type: quizActions.SET_QUESTION_DATA,
    payload
  }),
  setQuestionAnswer: payload => ({
    type: quizActions.SET_QUESTION_ANSWER,
    payload
  }),
  nextQuestion: payload => ({
    type: quizActions.NEXT_QUESTION,
    payload
  })
};
/* harmony default export */ __webpack_exports__["default"] = (quizActions);

/***/ }),

/***/ "./shared/redux/quiz/reducer.js":
/*!**************************************!*\
  !*** ./shared/redux/quiz/reducer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return questionReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./shared/redux/quiz/actions.js");
/* harmony import */ var _iso_lib_helpers_utility__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @iso/lib/helpers/utility */ "./shared/library/helpers/utility.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  quizes: {},
  questions: {},
  gettingStarted: false,
  activeQuestion: 0,
  total: 0,
  correct: 0,
  wrong: 0,
  submitted: false,
  answers: false
};
function questionReducer(state = initialState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].START_QUIZ:
      return _objectSpread(_objectSpread({}, state), {}, {
        gettingStarted: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_QUIZ_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        quizes: action.payload,
        gettingStarted: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_QUESTION_DATA:
      return _objectSpread(_objectSpread({}, state), {}, {
        questions: action.payload,
        total: action.payload.total
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].SET_QUESTION_ANSWER:
      const {
        questions,
        activeQuestion,
        correct,
        wrong
      } = state;
      const currentQuizz = questions.data[activeQuestion];
      let rightAnswer = false;

      if (Array.isArray(action.payload)) {
        rightAnswer = Object(_iso_lib_helpers_utility__WEBPACK_IMPORTED_MODULE_1__["arrayEqual"])(action.payload, currentQuizz['answers']);
      } else {
        rightAnswer = currentQuizz['answers'] === action.payload ? true : false;
      }

      let correctAnswer = rightAnswer ? correct + 1 : correct;
      let wrongAnswer = !rightAnswer ? wrong + 1 : wrong;
      return _objectSpread(_objectSpread({}, state), {}, {
        correct: correctAnswer,
        wrong: wrongAnswer,
        submitted: true,
        answers: rightAnswer,
        questions: {
          data: [...questions.data.slice(0, activeQuestion), _objectSpread(_objectSpread({}, questions.data[activeQuestion]), {}, {
            showAnswer: true
          }), ...questions.data.slice(activeQuestion + 1)]
        }
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__["default"].NEXT_QUESTION:
      return _objectSpread(_objectSpread({}, state), {}, {
        activeQuestion: state.activeQuestion + 1,
        submitted: false,
        answers: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./shared/redux/themeSwitcher/actions.js":
/*!***********************************************!*\
  !*** ./shared/redux/themeSwitcher/actions.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./shared/redux/themeSwitcher/config.js");

const actions = {
  CHANGE_THEME: 'CHANGE_THEME',
  SWITCH_ACTIVATION: 'SWITCH_ACTIVATION',
  switchActivation: () => ({
    type: actions.SWITCH_ACTIVATION
  }),
  changeTheme: (attribute, themeName) => {
    const theme = Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentTheme"])(attribute, themeName);

    if (attribute === 'layoutTheme') {
      document.getElementsByClassName('isomorphicContent')[0].style.backgroundColor = theme.backgroundColor;
    }

    return {
      type: actions.CHANGE_THEME,
      attribute,
      theme
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (actions);

/***/ }),

/***/ "./shared/redux/themeSwitcher/config.js":
/*!**********************************************!*\
  !*** ./shared/redux/themeSwitcher/config.js ***!
  \**********************************************/
/*! exports provided: getCurrentTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentTheme", function() { return getCurrentTheme; });
/* harmony import */ var _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @iso/config/theme/theme.config */ "./shared/config/theme/theme.config.js");

const changeThemes = {
  id: 'changeThemes',
  label: 'themeSwitcher',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].theme,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }, {
    themeName: 'customTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }]
};
const topbarTheme = {
  id: 'topbarTheme',
  label: 'themeSwitcher.Topbar',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].topbar,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }, {
    themeName: 'theme1',
    buttonColor: '#e0364c',
    backgroundColor: '#e0364c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme2',
    buttonColor: '#6534ff',
    backgroundColor: '#6534ff',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#4482FF',
    backgroundColor: '#4482FF',
    textColor: '#ffffff'
  }, {
    themeName: 'theme4',
    buttonColor: '#422e62',
    backgroundColor: '#422e62',
    textColor: '#ffffff'
  }, {
    themeName: 'theme5',
    buttonColor: '#22144c',
    backgroundColor: '#22144c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme6',
    buttonColor: '#4670a2',
    backgroundColor: '#4670a2',
    textColor: '#ffffff'
  }, {
    themeName: 'theme7',
    buttonColor: '#494982',
    backgroundColor: '#494982',
    textColor: '#ffffff'
  }]
};
const sidebarTheme = {
  id: 'sidebarTheme',
  label: 'themeSwitcher.Sidebar',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].sidebar,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#323332',
    backgroundColor: undefined,
    textColor: '#788195'
  }, {
    themeName: 'theme1',
    buttonColor: '#e0364c',
    backgroundColor: '#e0364c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme2',
    buttonColor: '#6534ff',
    backgroundColor: '#6534ff',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#4482FF',
    backgroundColor: '#4482FF',
    textColor: '#ffffff'
  }, {
    themeName: 'theme4',
    buttonColor: '#422e62',
    backgroundColor: '#422e62',
    textColor: '#ffffff'
  }, {
    themeName: 'theme5',
    buttonColor: '#22144c',
    backgroundColor: '#22144c',
    textColor: '#ffffff'
  }, {
    themeName: 'theme6',
    buttonColor: '#4670a2',
    backgroundColor: '#4670a2',
    textColor: '#ffffff'
  }, {
    themeName: 'theme7',
    buttonColor: '#494982',
    backgroundColor: '#494982',
    textColor: '#ffffff'
  }]
};
const layoutTheme = {
  id: 'layoutTheme',
  label: 'themeSwitcher.Background',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__["themeConfig"].layout,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    backgroundColor: '#F1F3F6',
    textColor: undefined
  }, {
    themeName: 'theme1',
    buttonColor: '#ffffff',
    backgroundColor: '#ffffff',
    textColor: '#323232'
  }, {
    themeName: 'theme2',
    buttonColor: '#F9F9F9',
    backgroundColor: '#F9F9F9',
    textColor: '#ffffff'
  }, {
    themeName: 'theme3',
    buttonColor: '#ebebeb',
    backgroundColor: '#ebebeb',
    textColor: '#ffffff'
  }]
};
const customizedThemes = {
  changeThemes,
  topbarTheme,
  sidebarTheme,
  layoutTheme
};
function getCurrentTheme(attribute, selectedThemename) {
  let selecetedTheme = {};
  customizedThemes[attribute].options.forEach(theme => {
    if (theme.themeName === selectedThemename) {
      selecetedTheme = theme;
    }
  });
  return selecetedTheme;
}
/* harmony default export */ __webpack_exports__["default"] = (customizedThemes);

/***/ }),

/***/ "./shared/redux/themeSwitcher/reducer.js":
/*!***********************************************!*\
  !*** ./shared/redux/themeSwitcher/reducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./shared/redux/themeSwitcher/config.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./shared/redux/themeSwitcher/actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initState = {
  isActivated: false,
  changeThemes: Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentTheme"])('changeThemes', _config__WEBPACK_IMPORTED_MODULE_0__["default"].changeThemes.defaultTheme || 'themedefault'),
  topbarTheme: Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentTheme"])('topbarTheme', _config__WEBPACK_IMPORTED_MODULE_0__["default"].topbarTheme.defaultTheme || 'themedefault'),
  sidebarTheme: Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentTheme"])('sidebarTheme', _config__WEBPACK_IMPORTED_MODULE_0__["default"].sidebarTheme.defaultTheme || 'themedefault'),
  layoutTheme: Object(_config__WEBPACK_IMPORTED_MODULE_0__["getCurrentTheme"])('layoutTheme', _config__WEBPACK_IMPORTED_MODULE_0__["default"].layoutTheme.defaultTheme || 'themedefault')
};
/* harmony default export */ __webpack_exports__["default"] = (function (state = initState, action) {
  switch (action.type) {
    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].SWITCH_ACTIVATION:
      return _objectSpread(_objectSpread({}, state), {}, {
        isActivated: !state.isActivated
      });

    case _actions__WEBPACK_IMPORTED_MODULE_1__["default"].CHANGE_THEME:
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.attribute]: action.theme
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./style/GlobalStyles.js":
/*!*******************************!*\
  !*** ./style/GlobalStyles.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-tools */ "styled-tools");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_1__);


const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

  /*------------------------------------------*/
  // style for reservation form
  /*------------------------------------------*/

  .reservation_modal {
    .ant-modal {
      width: 100% !important;
      max-width: 450px;
      padding: 0 15px;
    }

    .ant-modal-content {
      box-shadow: none;

      .ant-modal-body {
        padding: 0;
        position: relative;

        .reservation_sidebar {
          box-shadow: 0 1px 10px rgba(0, 0, 0, 0.16);

          header {
            padding-top: 50px;
            padding-bottom: 20px;
            border-color: #EBEBEB;
            @media only screen and (max-width: 375px) {
              padding-top: 30px;
            }
          }

          .DateInput__small {
            width: 112px;
          }

          input,
          .DateRangePickerInput {
            padding: 0 9px;
          }

          footer {
            border-color: #EBEBEB;
          }
        }

        > button.close {
          border: 0;
          padding: 0;
          top: 15px;
          right: 15px;
          height: auto;
          line-height: 1;
          position: absolute;
          font-size: 32px;
          background-color: transparent;
          color: #909090;
          transition: all 0.3s ease;
          @media only screen and (max-width: 375px) {
            top: 10px;
            right: 10px;
            font-size: 25px;
          }

          &:hover,
          &:focus {
            outline: none;
            color: #2C2C2C;
          }

          &::after {
            display: none;
          }
        }
      }
    }
  }

  .reservation_sidebar {
    padding: 0 !important;
    background-color: #ffffff;
    min-height: 70vh;

    header {
      margin-bottom: 29px;
      padding: 25px 30px 26px;
      border-bottom: 1px solid #EBEBEB;

      h3 {
        margin-bottom: 0;
      }

      @media only screen and (max-width: 375px) {
        padding: 25px 15px 26px 15px;
      }
    }

    p {
      font-size: 16px;
      font-weight: 400;
      text-align: center;

      a {
        font-weight: 700;

        &:hover,
        &:focus {
          outline: 0;
          text-decoration: underline;
        }
      }
    }

    footer {
      padding: 25px 30px 28px 30px;
      margin-top: 29px;
      border-top: 1px solid #EBEBEB;
      @media only screen and (max-width: 375px) {
        padding: 20px 15px 25px 15px;
      }

      p {
        margin-bottom: 0;
      }
    }
  }


  /*------------------------------------------*/
  // style for property gallery modal
  /*------------------------------------------*/
  .ant-modal-wrap {
    &.image_gallery_modal {
      .ant-modal {
        top: 50px;

        .ant-modal-content {
          box-shadow: none;
          padding: 0 30px;
          background: transparent;
          @media (max-width: 480px) {
            padding: 0 20px;
          }

          .ant-modal-body {
            max-width: 1170px;
            padding: 0;
            margin: 0 auto;
            @media (max-width: 1440px) {
              position: relative;
            }
          }
        }

        .image_gallery_close {
          background: transparent;
          border: 0;
          width: 60px;
          height: 60px;
          position: absolute;
          top: -20px;
          right: 40px;

          &:focus,
          &:hover {
            outline: none;
          }

          @media (max-width: 1440px) {
            top: 0;
            right: 0;
            svg {
              path {
                opacity: 0.8;
                fill: #ffffff;
                transition: all 0.3s ease;
              }
            }

            &:hover {
              svg {
                path {
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
  }

  /*------------------------------------------*/
  // style for react-phone-input2
  /*------------------------------------------*/
  .react-tel-input {
    .form-control {
      height: 48px;
      width: 100%;
      border: 2px solid #e4e7ea;
      border-radius: 4px;
      transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

      &:focus,
      &:active {
        border: 2px solid ${Object(styled_tools__WEBPACK_IMPORTED_MODULE_1__["palette"])('warning', 0)};
        box-shadow: none !important;
      }
    }
  }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./style/global.css":
/*!**************************!*\
  !*** ./style/global.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@ant-design/icons/lib/icons/CheckOutlined":
/*!************************************************************!*\
  !*** external "@ant-design/icons/lib/icons/CheckOutlined" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/CheckOutlined");

/***/ }),

/***/ "@ant-design/icons/lib/icons/EditOutlined":
/*!***********************************************************!*\
  !*** external "@ant-design/icons/lib/icons/EditOutlined" ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/EditOutlined");

/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/config-provider":
/*!*******************************************!*\
  !*** external "antd/lib/config-provider" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/config-provider");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "antd/lib/locale-provider/en_US":
/*!*************************************************!*\
  !*** external "antd/lib/locale-provider/en_US" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

/***/ }),

/***/ "antd/lib/notification":
/*!****************************************!*\
  !*** external "antd/lib/notification" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "antd/lib/popover":
/*!***********************************!*\
  !*** external "antd/lib/popover" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-pixel":
/*!***************************************!*\
  !*** external "react-facebook-pixel" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-pixel");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "react-intl":
/*!*****************************!*\
  !*** external "react-intl" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-theme":
/*!*******************************!*\
  !*** external "styled-theme" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),

/***/ "styled-tools":
/*!*******************************!*\
  !*** external "styled-tools" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSE9DL1dpdGhHQVRyYWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IT0MvV2l0aFBpeGVsLmpzIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQWRtaW4vVGhlbWVQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0d1ZXN0L0d1ZXN0VGhlbWVQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L0Jvb2tpbmdQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZXh0L1NlYXJjaFByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2Vudi1jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uLi8uLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hbWVuaXRpZXMvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hbWVuaXRpZXMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hbWVuaXRpZXMvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hdXRoZW50aWNhdGlvbi9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2F1dGhlbnRpY2F0aW9uL2F1dGgudXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYXV0aGVudGljYXRpb24vand0QXV0aGVudGljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvYXV0aGVudGljYXRpb24vcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9hdXRoZW50aWNhdGlvbi9zYWdhcy5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9jYXRlZ29yaWVzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvY2F0ZWdvcmllcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L2NhdGVnb3JpZXMvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9wb3N0cy9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3Bvc3RzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcG9zdHMvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9wcm9wZXJ0aWVzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcHJvcGVydGllcy9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3Byb3BlcnRpZXMvc2FnYS5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yb290LXJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvcm9vdC1zYWdhLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3VzZXJzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlcnMvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC91c2Vycy9zYWdhLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvYW1lbml0eUFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL2NhdGVnb3J5QXBpLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvcG9zdEFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlL3Byb3BlcnR5QXBpLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2UvdXNlckFwaS5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvYXNzZXRzL2ltYWdlcy9mbGFnL2NoaW5hLnN2ZyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvYXNzZXRzL2ltYWdlcy9mbGFnL2ZyYW5jZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2Fzc2V0cy9pbWFnZXMvZmxhZy9pdGFseS5zdmciLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2Fzc2V0cy9pbWFnZXMvZmxhZy9zcGFpbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2Fzc2V0cy9pbWFnZXMvZmxhZy91ay5zdmciLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2NvbXBvbmVudHMvQ29sb3JDaG9vc2VyLnN0eWxlLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb21wb25lbnRzL0NvbG9yQ2hvc2VyLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb21wb25lbnRzL0VkaXRhYmxlQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb21wb25lbnRzL05vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29tcG9uZW50cy91aWVsZW1lbnRzL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb21wb25lbnRzL3VpZWxlbWVudHMvcG9wb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29tcG9uZW50cy91aWVsZW1lbnRzL3N0eWxlcy9pbnB1dC5zdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvY29uZmlnL2p3dC5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2NvbmZpZy9sYW5ndWFnZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2NvbmZpZy90aGVtZS9jdXN0b20uanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2NvbmZpZy90aGVtZS9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcvdGhlbWUvZ3Vlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2NvbmZpZy90aGVtZS90aGVtZS5jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2NvbmZpZy90cmFuc2xhdGlvbi9lbnRyaWVzL2VuLVVTLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcvdHJhbnNsYXRpb24vZW50cmllcy96aC1IYW5zLUNOLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9jb25maWcvdHJhbnNsYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2xpYnJhcnkvaGVscGVycy9pc1NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvbGlicmFyeS9oZWxwZXJzL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2xpYnJhcnkvaGVscGVycy9ydGwuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL2xpYnJhcnkvaGVscGVycy9zdHlsZV91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvbGlicmFyeS9oZWxwZXJzL3VybF9zeW5jLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9saWJyYXJ5L2hlbHBlcnMvdXRpbGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvbGlicmFyeS9ob29rcy91c2VXaW5kb3dTaXplLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9yZWR1eC9hcHAvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvcmVkdXgvYXBwL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3JlZHV4L2NvbnRhY3RzL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3JlZHV4L2NvbnRhY3RzL2RhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3JlZHV4L2NvbnRhY3RzL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3JlZHV4L2NvbnRhY3RzL3NhZ2EuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3JlZHV4L2xhbmd1YWdlU3dpdGNoZXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvcmVkdXgvbGFuZ3VhZ2VTd2l0Y2hlci9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3JlZHV4L2xhbmd1YWdlU3dpdGNoZXIvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvcmVkdXgvbW9kYWwvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvcmVkdXgvbW9kYWwvcmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvcmVkdXgvcHJvZmlsZS9hY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9yZWR1eC9wcm9maWxlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3JlZHV4L3F1aXovYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zaGFyZWQvcmVkdXgvcXVpei9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9yZWR1eC90aGVtZVN3aXRjaGVyL2FjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc2hhcmVkL3JlZHV4L3RoZW1lU3dpdGNoZXIvY29uZmlnLmpzIiwid2VicGFjazovLy8uL3NoYXJlZC9yZWR1eC90aGVtZVN3aXRjaGVyL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGUvR2xvYmFsU3R5bGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zL2xpYi9pY29ucy9DaGVja091dGxpbmVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFudC1kZXNpZ24vaWNvbnMvbGliL2ljb25zL0VkaXRPdXRsaW5lZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2J1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2NvbmZpZy1wcm92aWRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2lucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2VuX1VTXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvbm90aWZpY2F0aW9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvcG9wb3ZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbXV0YWJsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImp3dC1kZWNvZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWNvb2tpZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInFzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1mYWNlYm9vay1waXhlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaW50bFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtdGh1bmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC10aGVtZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC10b29sc1wiIl0sIm5hbWVzIjpbIlJlYWN0R0EiLCJpbml0aWFsaXplIiwiR0FfSUQiLCJXcmFwcGVkQ29tcG9uZW50Iiwib3B0aW9ucyIsInRyYWNrUGFnZSIsInBhZ2UiLCJzZXQiLCJwYWdldmlldyIsIkhPQyIsInByb3BzIiwidXNlRWZmZWN0IiwiY29uc29sZSIsImxvZyIsIkNvbXBvbmVudCIsInRoZW4iLCJ4IiwiZGVmYXVsdCIsIlJlYWN0UGl4ZWwiLCJpbml0IiwiUElYRUxfSUQiLCJwYWdlVmlldyIsIlJvdXRlciIsImV2ZW50cyIsIm9uIiwidG9nZ2xlQWxsIiwiYXBwQWN0aW9ucyIsIkFwcFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwibG9jYWxlIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIkxhbmd1YWdlU3dpdGNoZXIiLCJsYW5ndWFnZSIsInRoZW1lTmFtZSIsIlRoZW1lU3dpdGNoZXIiLCJjaGFuZ2VUaGVtZXMiLCJjdXJyZW50QXBwTG9jYWxlIiwiQXBwTG9jYWxlIiwid2lkdGgiLCJoZWlnaHQiLCJ1c2VXaW5kb3dTaXplIiwiUmVhY3QiLCJhbnRkIiwibWVzc2FnZXMiLCJ0aGVtZXMiLCJHdWVzdFRoZW1lUHJvdmlkZXIiLCJndWVzdFRoZW1lIiwiQm9va2luZ0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiaW5pdEJvb2tpbmciLCJwcm9wZXJ0eUlkIiwicHJvcGVydHlTbHVnIiwiYm9va2VydmlsbGVJZCIsImNoZWNraW5EYXRlIiwiY2hlY2tvdXREYXRlIiwiYWR1bHRzIiwicHJvcGVydHlGZWUiLCJjbGVhbmluZ0ZlZSIsInJlZnVuZGFibGVBbW91bnQiLCJ0cmFuc2FjdGlvbkZlZSIsInRheCIsInRvdGFsIiwibmlnaHRzIiwicXVvdGUiLCJndWVzdCIsImJpbGxpbmciLCJyZWR1Y2VyIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJCb29raW5nUHJvdmlkZXIiLCJib29raW5nIiwidXNlUmVkdWNlciIsIlNlYXJjaENvbnRleHQiLCJTZWFyY2hQcm92aWRlciIsInF1ZXJ5IiwicHJvZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJCQUNLRU5EX1VSTCIsIlJFQ0FQVENIQV9LRVkiLCJaRU5ERVNLX0tFWSIsInBhZ2VQcm9wcyIsImNvbXBvbmVudERpZENhdGNoIiwicmVuZGVyIiwiX19OX1NTRyIsInVybCIsImNyZWF0ZVVybCIsIkFwcCIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJnZXRJbml0aWFsUHJvcHMiLCJ3YXJuQ29udGFpbmVyIiwid2FyblVybCIsInAiLCJiYWNrIiwicm91dGVyIiwicHVzaCIsInB1c2hUbyIsInB1c2hSb3V0ZSIsImFzIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwiQ3VzdG9tQXBwIiwic3RvcmUiLCJwYXRobmFtZSIsInNwbGl0Iiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJpbml0U3RvcmUiLCJkZWJ1ZyIsIndpdGhSZWR1eCIsImFtZW5pdHlBY3Rpb25zIiwiR0VUX0FMTF9BTUVOSVRJRVNfUkVRVUVTVCIsIkdFVF9BTExfQU1FTklUSUVTX1NVQ0NFU1MiLCJHRVRfQUxMX0FNRU5JVElFU19GQUlMVVJFIiwiR0VUX0FNRU5JVFlfUkVRVUVTVCIsIkdFVF9BTUVOSVRZX1NVQ0NFU1MiLCJHRVRfQU1FTklUWV9GQUlMVVJFIiwiQUREX0FNRU5JVFlfUkVRVUVTVCIsIkFERF9BTUVOSVRZX1NVQ0NFU1MiLCJBRERfQU1FTklUWV9GQUlMVVJFIiwiVVBEQVRFX0FNRU5JVFlfUkVRVUVTVCIsIlVQREFURV9BTUVOSVRZX1NVQ0NFU1MiLCJVUERBVEVfQU1FTklUWV9GQUlMVVJFIiwiREVMRVRFX0FNRU5JVFlfUkVRVUVTVCIsIkRFTEVURV9BTUVOSVRZX1NVQ0NFU1MiLCJERUxFVEVfQU1FTklUWV9GQUlMVVJFIiwiZ2V0QWxsQW1lbml0aWVzIiwiZ2V0QW1lbml0eSIsImFtZW5pdHlJZCIsImFkZEFtZW5pdHkiLCJuZXdBbWVuaXR5IiwiYW1lbml0eSIsInVwZGF0ZUFtZW5pdHkiLCJkZWxldGVBbWVuaXR5IiwiaW5pdFN0YXRlIiwiaXRlbXMiLCJzZWxlY3RlZEl0ZW0iLCJlcnJvciIsImxvYWRpbmciLCJwcm9wZXJ0aWVzUmVkdWNlciIsIml0ZW0iLCJmaWx0ZXIiLCJpZCIsInRha2VMYXRlc3QiLCJhY3Rpb25zIiwicmVzIiwiY2FsbCIsImFtZW5pdHlBcGkiLCJnZXRBbGwiLCJwdXQiLCJub3RpZmljYXRpb24iLCJtZXNzYWdlIiwidGFrZUV2ZXJ5IiwiZ2V0T25lIiwiYWRkIiwidXBkYXRlIiwiZGVsZXRlIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwiSldUX0xPR0lOX1JFUVVFU1RfU1RBUlQiLCJMT0dJTl9SRVFVRVNUX1NVQ0NFU1MiLCJMT0dJTl9SRVFVRVNUX0ZBSUxVUkUiLCJMT0dPVVRfUkVRVUVTVF9TVEFSVCIsIkxPR09VVF9SRVFVRVNUX1NVQ0NFU1MiLCJMT0dPVVRfUkVRVUVTVF9GQUlMVVJFIiwiand0TG9naW4iLCJoaXN0b3J5IiwidXNlckluZm8iLCJsb2dpblJlcXVlc3RTdWNjZXNzIiwiY3JlZGVudGlhbHMiLCJsb2dpblJlcXVlc3RGYWlsdXJlIiwibG9nb3V0IiwibG9nb3V0UmVxdWVzdFN1Y2Nlc3MiLCJsb2dvdXRSZXF1ZXN0RmFpbHVyZSIsInNldENvb2tpZSIsImtleSIsInZhbHVlIiwicmVtb3ZlQ29va2llIiwiZ2V0Q29va2llIiwicmVxIiwiZ2V0Q29va2llRnJvbUJyb3dzZXIiLCJnZXRDb29raWVGcm9tU2VydmVyIiwiY29va2llIiwiZ2V0IiwiaGVhZGVycyIsInVuZGVmaW5lZCIsInJhd0Nvb2tpZSIsImZpbmQiLCJjIiwidHJpbSIsInN0YXJ0c1dpdGgiLCJhdXRoIiwiY3R4IiwidG9rZW4iLCJuZXh0Q29va2llIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJyZW1vdmUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiRGF0ZSIsIm5vdyIsIndpdGhBdXRoU3luYyIsIldyYXBwZXIiLCJzeW5jTG9nb3V0IiwiZXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUl0ZW0iLCJjb21wb25lbnRQcm9wcyIsInJlc1N0YXR1cyIsIkp3dEF1dGgiLCJmZXRjaCIsImp3dENvbmZpZyIsImZldGNoVXJsIiwibWV0aG9kIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImpzb24iLCJjYXRjaCIsIkVycm9yIiwic3RhdHVzIiwidGV4dCIsInN0YXR1c1RleHQiLCJkZXRhaWwiLCJpZFRva2VuIiwicHJvZmlsZSIsImF1dGhSZWR1Y2VyIiwiand0TG9naW5SZXF1ZXN0IiwiSnd0QXV0aGVudGljYXRpb24iLCJsb2dpbiIsImFjY2VzcyIsImp3dERlY29kZSIsImxvZ291dFJlcXVlc3QiLCJsb2dpblN1Y2Nlc3MiLCJsb2dpbkVycm9yIiwib25Mb2dvdXQiLCJjYXRlZ29yeUFjdGlvbnMiLCJHRVRfQUxMX0NBVEVHT1JJRVNfUkVRVUVTVCIsIkdFVF9BTExfQ0FURUdPUklFU19TVUNDRVNTIiwiR0VUX0FMTF9DQVRFR09SSUVTX0ZBSUxVUkUiLCJHRVRfQ0FURUdPUllfUkVRVUVTVCIsIkdFVF9DQVRFR09SWV9TVUNDRVNTIiwiR0VUX0NBVEVHT1JZX0ZBSUxVUkUiLCJBRERfQ0FURUdPUllfUkVRVUVTVCIsIkFERF9DQVRFR09SWV9TVUNDRVNTIiwiQUREX0NBVEVHT1JZX0ZBSUxVUkUiLCJVUERBVEVfQ0FURUdPUllfUkVRVUVTVCIsIlVQREFURV9DQVRFR09SWV9TVUNDRVNTIiwiVVBEQVRFX0NBVEVHT1JZX0ZBSUxVUkUiLCJERUxFVEVfQ0FURUdPUllfUkVRVUVTVCIsIkRFTEVURV9DQVRFR09SWV9TVUNDRVNTIiwiREVMRVRFX0NBVEVHT1JZX0ZBSUxVUkUiLCJnZXRBbGxDYXRlZ29yaWVzIiwiZ2V0Q2F0ZWdvcnkiLCJjYXRlZ29yeUlkIiwiYWRkQ2F0ZWdvcnkiLCJuZXdDYXRlZ29yeSIsImNhdGVnb3J5IiwidXBkYXRlQ2F0ZWdvcnkiLCJkZWxldGVDYXRlZ29yeSIsImNhdGVnb3J5QXBpIiwicG9zdEFjdGlvbnMiLCJHRVRfQUxMX1BPU1RTX1JFUVVFU1QiLCJHRVRfQUxMX1BPU1RTX1NVQ0NFU1MiLCJHRVRfQUxMX1BPU1RTX0ZBSUxVUkUiLCJHRVRfUE9TVF9SRVFVRVNUIiwiR0VUX1BPU1RfU1VDQ0VTUyIsIkdFVF9QT1NUX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJVUERBVEVfUE9TVF9SRVFVRVNUIiwiVVBEQVRFX1BPU1RfU1VDQ0VTUyIsIlVQREFURV9QT1NUX0ZBSUxVUkUiLCJERUxFVEVfUE9TVF9SRVFVRVNUIiwiREVMRVRFX1BPU1RfU1VDQ0VTUyIsIkRFTEVURV9QT1NUX0ZBSUxVUkUiLCJnZXRBbGxQb3N0cyIsImdldFBvc3QiLCJwb3N0SWQiLCJhZGRQb3N0IiwibmV3UG9zdCIsInBvc3QiLCJ1cGRhdGVQb3N0IiwiZGVsZXRlUG9zdCIsInBvc3RBcGkiLCJhc2NlbmRpbmdTb3J0IiwicHJvcGVydHkxIiwicHJvcGVydHkyIiwibmFtZTEiLCJuYW1lIiwidG9VcHBlckNhc2UiLCJuYW1lMiIsInByb3BlcnR5QWN0aW9ucyIsIkdFVF9BTExfUFJPUEVSVElFU19SRVFVRVNUIiwiR0VUX0FMTF9QUk9QRVJUSUVTX1NVQ0NFU1MiLCJHRVRfQUxMX1BST1BFUlRJRVNfRkFJTFVSRSIsIkdFVF9QUk9QRVJUWV9SRVFVRVNUIiwiR0VUX1BST1BFUlRZX1NVQ0NFU1MiLCJHRVRfUFJPUEVSVFlfRkFJTFVSRSIsIkFERF9QUk9QRVJUWV9SRVFVRVNUIiwiQUREX1BST1BFUlRZX1NVQ0NFU1MiLCJBRERfUFJPUEVSVFlfRkFJTFVSRSIsIlVQREFURV9QUk9QRVJUWV9SRVFVRVNUIiwiVVBEQVRFX1BST1BFUlRZX1NVQ0NFU1MiLCJVUERBVEVfUFJPUEVSVFlfRkFJTFVSRSIsIkRFTEVURV9QUk9QRVJUWV9SRVFVRVNUIiwiREVMRVRFX1BST1BFUlRZX1NVQ0NFU1MiLCJERUxFVEVfUFJPUEVSVFlfRkFJTFVSRSIsIkdFVF9QUklDRV9JVEVNU19SRVFVRVNUIiwiR0VUX1BSSUNFX0lURU1TX1NVQ0NFU1MiLCJHRVRfUFJJQ0VfSVRFTVNfRkFJTFVSRSIsIkNSRUFURV9QUklDRV9JVEVNX1JFUVVFU1QiLCJDUkVBVEVfUFJJQ0VfSVRFTV9TVUNDRVNTIiwiQ1JFQVRFX1BSSUNFX0lURU1fRkFJTFVSRSIsImdldEFsbFByb3BlcnRpZXMiLCJnZXRQcm9wZXJ0eSIsImFkZFByb3BlcnR5IiwibmV3UHJvcGVydHkiLCJwcm9wZXJ0eSIsInVwZGF0ZVByb3BlcnR5IiwiZGVsZXRlUHJvcGVydHkiLCJnZXRQcmljZUl0ZW1zIiwiY3JlYXRlUHJpY2VJdGVtIiwicHJpY2luZyIsIm1hcCIsInByaWNpbmdJdGVtcyIsInByb3BlcnR5QXBpIiwiY29tYmluZVJlZHVjZXJzIiwiQXV0aCIsIlVzZXJzIiwiUHJvcGVydGllcyIsIkFtZW5pdGllcyIsIkNhdGVnb3JpZXMiLCJQb3N0cyIsIkNvbnRhY3RzIiwibW9kYWwiLCJxdWl6IiwiZ2V0U3RhdGUiLCJhdXRoU2FnYXMiLCJ1c2VyU2FnYXMiLCJwcm9wZXJ0eVNhZ2FzIiwiYW1lbml0eVNhZ2FzIiwiY2F0ZWdvcnlTYWdhcyIsInBvc3RTYWdhcyIsImNvbnRhY3RTYWdhcyIsInNhZ2FNaWRkbGV3YXJlIiwiY3JlYXRlU2FnYU1pZGRsZXdhcmUiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwicmVxdWlyZSIsImFwcGx5TWlkZGxld2FyZSIsImNvbmZpZ3VyZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInRodW5rIiwibG9nZ2VyIiwicnVuU2FnYSIsInNhZ2EiLCJydW4iLCJzdG9wU2FnYSIsIkVORCIsImRvbmUiLCJleGVjU2FnYVRhc2tzIiwiaXNTZXJ2ZXIiLCJ0YXNrcyIsInVzZXJBY3Rpb25zIiwiR0VUX0FMTF9VU0VSU19SRVFVRVNUIiwiR0VUX0FMTF9VU0VSU19TVUNDRVNTIiwiR0VUX0FMTF9VU0VSU19GQUlMVVJFIiwiR0VUX1VTRVJfUkVRVUVTVCIsIkdFVF9VU0VSX1NVQ0NFU1MiLCJHRVRfVVNFUl9GQUlMVVJFIiwiQUREX1VTRVJfUkVRVUVTVCIsIkFERF9VU0VSX1NVQ0NFU1MiLCJBRERfVVNFUl9GQUlMVVJFIiwiVVBEQVRFX1VTRVJfUkVRVUVTVCIsIlVQREFURV9VU0VSX1NVQ0NFU1MiLCJVUERBVEVfVVNFUl9GQUlMVVJFIiwiREVMRVRFX1VTRVJfUkVRVUVTVCIsIkRFTEVURV9VU0VSX1NVQ0NFU1MiLCJERUxFVEVfVVNFUl9GQUlMVVJFIiwiZ2V0QWxsVXNlcnMiLCJnZXRVc2VyIiwidXNlcklkIiwiYWRkVXNlciIsIm5ld1VzZXIiLCJ1c2VyIiwidXBkYXRlVXNlciIsImRlbGV0ZVVzZXIiLCJ1c2VyQXBpIiwiZSIsIkF1dGhvcml6YXRpb24iLCJoYW5kbGVFcnJvciIsIkNvbG9yQ2hvb3NlckRyb3Bkb3duIiwic3R5bGVkIiwiZGl2IiwiYm9yZGVyUmFkaXVzIiwiV2l0aERpcmVjdGlvbiIsImNvbG9ycyIsInNlZWN0ZWRDb2xvciIsImNoYW5nZUNvbG9yIiwidmlzaWJsZSIsInNldFZpc2liaWxpdHkiLCJ1c2VTdGF0ZSIsImhpZGUiLCJoYW5kbGVWaXNpYmxlQ2hhbmdlIiwiY29udGVudCIsImNvbG9yIiwiaW5kZXgiLCJvbkNsaWNrIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZENvbG9yIiwiRWRpdGFibGVDb21wb25lbnQiLCJzZXRTdGF0ZSIsImVkaXRhYmxlIiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwiY2hlY2siLCJvbkNoYW5nZSIsIml0ZW1LZXkiLCJlZGl0IiwiY3JlYXRlTm90aWZpY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJTZWFyY2giLCJUZXh0QXJlYSIsIkdyb3VwIiwiV0RTdHlsZWRJbnB1dCIsIklucHV0V3JhcHBlciIsIlN0eWxlZElucHV0IiwiV0RJbnB1dEdyb3VwIiwiSW5wdXRHcm91cFdyYXBwZXIiLCJJbnB1dEdyb3VwIiwiV0RJbnB1dFNlYXJjaCIsIklucHV0U2VhcmNoV3JhcHBlciIsIklucHV0U2VhcmNoIiwiV0RUZXh0YXJlYSIsIlRleHRBcmVhV3JhcHBlciIsIlRleHRhcmVhIiwiQ29tcG9uZW50TmFtZSIsInBhbGV0dGUiLCJ0cmFuc2l0aW9uIiwiYm94U2hhZG93IiwiZW5hYmxlZCIsInNlY3JldEtleSIsImxhbmdEaXIiLCJkZWZhdWx0VGhlbWUiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwidGhlbWUiLCJ3YXJuaW5nIiwic3VjY2VzcyIsImdyYXlzY2FsZSIsImJvcmRlciIsImNhbGVuZGFyIiwiZm9udHMiLCJwcmUiLCJncmF5IiwiY3VzdG9tVGhlbWUiLCJ0aGVtZUNvbmZpZyIsInRvcGJhciIsInNpZGViYXIiLCJsYXlvdXQiLCJFbkxhbmciLCJlbk1lc3NhZ2VzIiwiYW50ZEVuIiwiWmhMYW4iLCJ6aE1lc3NhZ2VzIiwiZW4iLCJFbmxhbmciLCJ6aCIsIlpobGFuZyIsImxhYmVsIiwibGVmdEljb24iLCJ3aXRob3V0RGFzaGJvYXJkIiwiZGlyZWN0aW9uIiwid2l0aERpcmVjdGlvbiIsInRpbWluZyIsInJhZGl1cyIsInNoYWRvdyIsImdldEluaXREYXRhIiwiaW5pdERhdGEiLCJxcyIsInBhcnNlIiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsInRvZ2dsZSIsImZyZWVfc2hpcHBpbmciLCJzZXRVcmwiLCJzZWFyY2hTdGF0ZSIsInB1c2hTdGF0ZSIsImdldERlZmF1bHRQYXRoIiwiZ2V0UGFyZW50IiwibGFzdFJvdXRlIiwicGFyZW50IiwiZm9yRWFjaCIsIm9wdGlvbiIsImNoaWxkIiwicm91dGVzIiwibGVuZ3RoIiwiY2xlYXJUb2tlbiIsImdldFRva2VuIiwiZ2V0SXRlbSIsIk1hcCIsImVyciIsImFycmF5RXF1YWwiLCJhcnJheTEiLCJhcnJheTIiLCJzb3J0IiwidG9TdHJpbmciLCJ0aW1lRGlmZmVyZW5jZSIsImdpdmVuVGltZSIsIm1pbGxpc2Vjb25kcyIsImdldFRpbWUiLCJudW1iZXJFbmRpbmciLCJudW1iZXIiLCJudW0iLCJ0ZW1wIiwiTWF0aCIsImZsb29yIiwieWVhcnMiLCJtb250aCIsImdldFVUQ01vbnRoIiwiZGF5IiwiZ2V0VVRDRGF0ZSIsInllYXIiLCJnZXRVVENGdWxsWWVhciIsImRheXMiLCJtb250aHMiLCJob3VycyIsIm1pbnV0ZXMiLCJzdHJpbmdUb0ludCIsImRlZlZhbHVlIiwiaXNOYU4iLCJwYXJzZUludCIsInN0cmluZ1RvUG9zZXRpdmVJbnQiLCJ2YWwiLCJpc0NsaWVudCIsImdldFNpemUiLCJ1c2VDYWxsYmFjayIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNpemUiLCJzZXRTaXplIiwib25IYW5kbGVSZXNpemUiLCJnZXRWaWV3IiwibmV3VmlldyIsIkNPTExQU0VfQ0hBTkdFIiwiQ09MTFBTRV9PUEVOX0RSQVdFUiIsIkNIQU5HRV9PUEVOX0tFWVMiLCJUT0dHTEVfQUxMIiwiQ0hBTkdFX0NVUlJFTlQiLCJDTEVBUl9NRU5VIiwidG9nZ2xlQ29sbGFwc2VkIiwidmlldyIsImNvbGxhcHNlZCIsInRvZ2dsZU9wZW5EcmF3ZXIiLCJjaGFuZ2VPcGVuS2V5cyIsIm9wZW5LZXlzIiwiY2hhbmdlQ3VycmVudCIsImN1cnJlbnQiLCJjbGVhck1lbnUiLCJwcmVLZXlzIiwib3BlbkRyYXdlciIsImFwcFJlZHVjZXIiLCJjb250YWN0MSIsImNvbnRhY3QyIiwiY29udGFjdEFjdGlvbnMiLCJBRERfQ09OVEFDVCIsIkVESVRfQ09OVEFDVCIsIkRFTEVURV9fQ09OVEFDVCIsIkNIQU5HRV9DT05UQUNUIiwiRURJVF9WSUVXIiwiY2hhbmdlQ29udGFjdCIsImFkZENvbnRhY3QiLCJuZXdDb250YWN0IiwiZmlyc3ROYW1lIiwiYXZhdGFyIiwiY29udGFjdHMiLCJMYXN0TmFtZSIsIm1vYmlsZSIsImhvbWUiLCJjb21wYW55Iiwid29yayIsIm5vdGUiLCJzZWxlY3RlZElkIiwiZWRpdENvbnRhY3QiLCJuZXdDb250YWN0cyIsImNvbnRhY3QiLCJkZWxldGVDb250YWN0Iiwic2VlY3RlZElkIiwidmlld0NoYW5nZSIsIm90aGVyQXR0cmlidXRlcyIsInRpdGxlIiwiY29udGFjdExpc3QiLCJmYWtlRGF0YSIsImNvbnN0cnVjdG9yIiwiZGF0YXMiLCJkYXRhTW9kZWwiLCJnZXRPYmplY3RBdCIsImkiLCJlZGl0VmlldyIsImNvbnRhY3RSZWR1Y2VyIiwiQ0hBTkdFX0xBTkdVQUdFIiwiQUNUSVZBVEVfTEFOR19NT0RBTCIsInN3aXRjaEFjdGl2YXRpb24iLCJjaGFuZ2VMYW5ndWFnZSIsImdldEN1cnJlbnRMYW5ndWFnZSIsImNvbmZpZyIsImRlZmF1bHRMYW5ndWFnZSIsImxhbmd1YWdlSWQiLCJpY29uIiwiZW5nbGlzaExhbmciLCJjaGluZXNlTGFuZyIsInNwYW5pc2hMYW5nIiwiZnJlbmNoTGFuZyIsIml0YWxpYW5MYW5nIiwibGFuZyIsInNlbGVjZXRlZExhbmd1YWdlIiwiaXNBY3RpdmF0ZWQiLCJtb2RhbEFjdGlvbnMiLCJTSE9XX01PREFMIiwiSElERV9NT0RBTCIsIm9wZW5Nb2RhbCIsImNsb3NlTW9kYWwiLCJtb2RhbFZpc2liaWxpdHkiLCJtb2RhbFR5cGUiLCJtb2RhbFByb3BzIiwibW9kYWxSZWR1Y2VyIiwicHJvZmlsZUFjdGlvbnMiLCJGRVRDSF9QUk9GSUxFX0RBVEFfU1RBUlQiLCJGRVRDSF9QUk9GSUxFX0RBVEFfU1VDQ0VTUyIsIkZFVENIX1BST0ZJTEVfREFUQV9GQUlMVVJFIiwiU0VUX1BST0ZJTEVfREFUQSIsImZldGNoUHJvZmlsZURhdGFTdGFydCIsImZldGNoUHJvZmlsZURhdGFTdWNjZXNzIiwiZmV0Y2hQcm9maWxlRGF0YUZhaWx1cmUiLCJJTklUSUFMX0RBVEEiLCJkYXRhIiwicHJvZmlsZVJlZHVjZXIiLCJxdWl6QWN0aW9ucyIsIlNUQVJUX1FVSVoiLCJHRVRfUVVJWl9EQVRBIiwiR0VUX1FVRVNUSU9OX0RBVEEiLCJTRVRfUVVFU1RJT05fREFUQSIsIlNFVF9RVUlaX0RBVEEiLCJTRVRfUVVFU1RJT05fQU5TV0VSIiwiTkVYVF9RVUVTVElPTiIsInN0YXJ0UXVpeiIsImdldFF1ZXN0aW9uRGF0YSIsImdldFF1aXpEYXRhIiwic2V0UXVpekRhdGEiLCJzZXRRdWVzdGlvbkRhdGEiLCJzZXRRdWVzdGlvbkFuc3dlciIsIm5leHRRdWVzdGlvbiIsInF1aXplcyIsInF1ZXN0aW9ucyIsImdldHRpbmdTdGFydGVkIiwiYWN0aXZlUXVlc3Rpb24iLCJjb3JyZWN0Iiwid3JvbmciLCJzdWJtaXR0ZWQiLCJhbnN3ZXJzIiwicXVlc3Rpb25SZWR1Y2VyIiwiY3VycmVudFF1aXp6IiwicmlnaHRBbnN3ZXIiLCJBcnJheSIsImlzQXJyYXkiLCJjb3JyZWN0QW5zd2VyIiwid3JvbmdBbnN3ZXIiLCJzaG93QW5zd2VyIiwiQ0hBTkdFX1RIRU1FIiwiU1dJVENIX0FDVElWQVRJT04iLCJjaGFuZ2VUaGVtZSIsImF0dHJpYnV0ZSIsImdldEN1cnJlbnRUaGVtZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImJ1dHRvbkNvbG9yIiwidGV4dENvbG9yIiwidG9wYmFyVGhlbWUiLCJzaWRlYmFyVGhlbWUiLCJsYXlvdXRUaGVtZSIsImN1c3RvbWl6ZWRUaGVtZXMiLCJzZWxlY3RlZFRoZW1lbmFtZSIsInNlbGVjZXRlZFRoZW1lIiwiR2xvYmFsU3R5bGUiLCJjcmVhdGVHbG9iYWxTdHlsZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtR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Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvX2FwcFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSc7XHJcbmltcG9ydCB7R0FfSUR9IGZyb20gXCIuLi8uLi9lbnYtY29uZmlnXCI7XHJcblxyXG5SZWFjdEdBLmluaXRpYWxpemUoR0FfSUQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKFdyYXBwZWRDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkgPT4ge1xyXG4gICAgY29uc3QgdHJhY2tQYWdlID0gKHBhZ2UpID0+IHtcclxuICAgICAgICBSZWFjdEdBLnNldCh7XHJcbiAgICAgICAgICAgIHBhZ2UsXHJcbiAgICAgICAgICAgIC4uLm9wdGlvbnNcclxuICAgICAgICB9KTtcclxuICAgICAgICBSZWFjdEdBLnBhZ2V2aWV3KHBhZ2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBIT0MgPSAocHJvcHMpID0+IHtcclxuICAgICAgICAvLyB1c2VFZmZlY3QoKCkgPT4gdHJhY2tQYWdlKHByb3BzLmxvY2F0aW9uLnBhdGhuYW1lKSwgW3Byb3BzLmxvY2F0aW9uLnBhdGhuYW1lXSk7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJfX1JlYWN0R0FcIiwgcHJvcHMpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+O1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gSE9DO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuLy8gaW1wb3J0IFJlYWN0UGl4ZWwgZnJvbSAncmVhY3QtZmFjZWJvb2stcGl4ZWwnO1xyXG5pbXBvcnQge1BJWEVMX0lEfSBmcm9tIFwiLi4vLi4vZW52LWNvbmZpZ1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuLy8gUmVhY3RQaXhlbC5pbml0KFBJWEVMX0lEKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChDb21wb25lbnQpID0+IChwcm9wcykgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaW1wb3J0KCdyZWFjdC1mYWNlYm9vay1waXhlbCcpXHJcbiAgICAgICAgICAgIC50aGVuKCh4KSA9PiB4LmRlZmF1bHQpXHJcbiAgICAgICAgICAgIC50aGVuKChSZWFjdFBpeGVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBSZWFjdFBpeGVsLmluaXQoUElYRUxfSUQpO1xyXG4gICAgICAgICAgICAgICAgUmVhY3RQaXhlbC5wYWdlVmlldygpO1xyXG5cclxuICAgICAgICAgICAgICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUmVhY3RQaXhlbC5wYWdlVmlldygpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxbXSlcclxuICAgIHJldHVybiA8Q29tcG9uZW50IHsuLi5wcm9wc30gLz47XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb25maWdQcm92aWRlciB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgSW50bFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lcyBmcm9tICdAaXNvL2NvbmZpZy90aGVtZS90aGVtZS5jb25maWcnO1xuaW1wb3J0IEFwcExvY2FsZSBmcm9tICdAaXNvL2NvbmZpZy90cmFuc2xhdGlvbic7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tICdAaXNvL2xpYi9ob29rcy91c2VXaW5kb3dTaXplJztcbmltcG9ydCBhcHBBY3Rpb25zIGZyb20gJ0Bpc28vcmVkdXgvYXBwL2FjdGlvbnMnO1xuXG5jb25zdCB7IHRvZ2dsZUFsbCB9ID0gYXBwQWN0aW9ucztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHsgbG9jYWxlIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5MYW5ndWFnZVN3aXRjaGVyLmxhbmd1YWdlKTtcbiAgY29uc3QgeyB0aGVtZU5hbWUgfSA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLlRoZW1lU3dpdGNoZXIuY2hhbmdlVGhlbWVzKTtcbiAgY29uc3QgY3VycmVudEFwcExvY2FsZSA9IEFwcExvY2FsZVtsb2NhbGVdO1xuICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHVzZVdpbmRvd1NpemUoKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHRvZ2dsZUFsbCh3aWR0aCwgaGVpZ2h0KSk7XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbmZpZ1Byb3ZpZGVyIGxvY2FsZT17Y3VycmVudEFwcExvY2FsZS5hbnRkfT5cbiAgICAgIDxJbnRsUHJvdmlkZXJcbiAgICAgICAgbG9jYWxlPXtjdXJyZW50QXBwTG9jYWxlLmxvY2FsZX1cbiAgICAgICAgbWVzc2FnZXM9e2N1cnJlbnRBcHBMb2NhbGUubWVzc2FnZXN9XG4gICAgICA+XG4gICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZXNbdGhlbWVOYW1lXX0+e2NoaWxkcmVufTwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvSW50bFByb3ZpZGVyPlxuICAgIDwvQ29uZmlnUHJvdmlkZXI+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29uZmlnUHJvdmlkZXIgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IEludGxQcm92aWRlciB9IGZyb20gJ3JlYWN0LWludGwnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0aGVtZXMgZnJvbSAnQGlzby9jb25maWcvdGhlbWUvdGhlbWUuY29uZmlnJztcbmltcG9ydCBBcHBMb2NhbGUgZnJvbSAnQGlzby9jb25maWcvdHJhbnNsYXRpb24nO1xuaW1wb3J0IHVzZVdpbmRvd1NpemUgZnJvbSAnQGlzby9saWIvaG9va3MvdXNlV2luZG93U2l6ZSc7XG5pbXBvcnQgYXBwQWN0aW9ucyBmcm9tICdAaXNvL3JlZHV4L2FwcC9hY3Rpb25zJztcblxuY29uc3QgeyB0b2dnbGVBbGwgfSA9IGFwcEFjdGlvbnM7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEd1ZXN0VGhlbWVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCB7IGxvY2FsZSB9ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUuTGFuZ3VhZ2VTd2l0Y2hlci5sYW5ndWFnZSk7XG4gIGNvbnN0IHsgdGhlbWVOYW1lIH0gPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5UaGVtZVN3aXRjaGVyLmNoYW5nZVRoZW1lcyk7XG4gIGNvbnN0IGN1cnJlbnRBcHBMb2NhbGUgPSBBcHBMb2NhbGVbbG9jYWxlXTtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VXaW5kb3dTaXplKCk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBkaXNwYXRjaCh0b2dnbGVBbGwod2lkdGgsIGhlaWdodCkpO1xuICB9LCBbZGlzcGF0Y2hdKTtcbiAgcmV0dXJuIChcbiAgICAgIDxDb25maWdQcm92aWRlciBsb2NhbGU9e2N1cnJlbnRBcHBMb2NhbGUuYW50ZH0+XG4gICAgICAgIDxJbnRsUHJvdmlkZXJcbiAgICAgICAgICAgIGxvY2FsZT17Y3VycmVudEFwcExvY2FsZS5sb2NhbGV9XG4gICAgICAgICAgICBtZXNzYWdlcz17Y3VycmVudEFwcExvY2FsZS5tZXNzYWdlc31cbiAgICAgICAgPlxuICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZXMuZ3Vlc3RUaGVtZX0+e2NoaWxkcmVufTwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgPC9JbnRsUHJvdmlkZXI+XG4gICAgICA8L0NvbmZpZ1Byb3ZpZGVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVkdWNlcn0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJvb2tpbmdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0Qm9va2luZyA9IHtcclxuICAgIHByb3BlcnR5SWQ6IG51bGwsXHJcbiAgICBwcm9wZXJ0eVNsdWc6IG51bGwsXHJcbiAgICBib29rZXJ2aWxsZUlkOiBudWxsLFxyXG4gICAgY2hlY2tpbkRhdGU6IG51bGwsXHJcbiAgICBjaGVja291dERhdGU6IG51bGwsXHJcbiAgICBhZHVsdHM6IDAsXHJcbiAgICBjaGlsZHJlbjogMCxcclxuICAgIHByb3BlcnR5RmVlOiAnJyxcclxuICAgIGNsZWFuaW5nRmVlOiAnJyxcclxuICAgIHJlZnVuZGFibGVBbW91bnQ6ICcnLFxyXG4gICAgdHJhbnNhY3Rpb25GZWU6ICcnLFxyXG4gICAgdGF4OiAnJyxcclxuICAgIHRvdGFsOiAnJyxcclxuICAgIG5pZ2h0czogJycsXHJcbiAgICBxdW90ZTogJycsXHJcbiAgICBndWVzdDoge30sXHJcbiAgICBiaWxsaW5nOiB7fVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdVUERBVEVfQk9PS0lOR19JTkZPUk1BVElPTic6XHJcbiAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcclxuICAgICAgICBjYXNlICdSRVNFVF9CT09LSU5HX0lORk9STUFUSU9OJzpcclxuICAgICAgICAgICAgcmV0dXJuIGluaXRCb29raW5nO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEJvb2tpbmdQcm92aWRlciA9ICh7Y2hpbGRyZW4sIGJvb2tpbmd9KSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgYm9va2luZyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb29raW5nQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e3N0YXRlLCBkaXNwYXRjaH19PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9Cb29raW5nQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlYXJjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XHJcblxyXG5mdW5jdGlvbiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdVUERBVEVfUVVFUlknOlxyXG4gICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTZWFyY2hQcm92aWRlciA9ICh7IGNoaWxkcmVuLCBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgcXVlcnkpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8U2VhcmNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzdGF0ZSwgZGlzcGF0Y2ggfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L1NlYXJjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG59O1xyXG4iLCJjb25zdCBwcm9kID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgQkFDS0VORF9VUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnLFxuICAgIC8vIEJBQ0tFTkRfVVJMOiBwcm9kID8gJ2h0dHA6Ly93d3cuc3RhcnNvZmJvc3Rvbi5jb20vJyA6ICdodHRwOi8vbG9jYWxob3N0OjgwMDAnLFxuICAgIFJFQ0FQVENIQV9LRVk6IFwiNkxmZkROb1pBQUFBQUEzYTVGSWNNd0hKU0IzVjR3SjVfVTV3NjBHSFwiLFxuICAgIFBJWEVMX0lEOiBcIjMzOTgyMTUxMzk5MzEwMFwiLFxuICAgIEdBX0lEOiBcIlVBLTEyOTEwNzI0Ni0xXCIsXG4gICAgWkVOREVTS19LRVk6IFwiZmI3MDY2NTAtYzU5ZS00ZjQ1LWI3YjMtZjYwMWFlYzM3MGRiXCIsXG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiaW1wb3J0IFJlYWN0LCB7IEVycm9ySW5mbyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZSxcbiAgTmV4dFdlYlZpdGFsc01ldHJpYyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnLi4vY2xpZW50L3JvdXRlcidcblxuZXhwb3J0IHsgQXBwSW5pdGlhbFByb3BzIH1cblxuZXhwb3J0IHsgTmV4dFdlYlZpdGFsc01ldHJpYyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB3aXRoUmVkdXgsIHtjcmVhdGVXcmFwcGVyfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IFRoZW1lUHJvdmlkZXIgZnJvbSAnLi4vY29udGFpbmVycy9BZG1pbi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCBpbml0U3RvcmUgZnJvbSAnLi4vcmVkdXgvc3RvcmUnO1xuaW1wb3J0ICdhbnRkL2Rpc3QvYW50ZC5jc3MnO1xuaW1wb3J0ICdyZWFjdC1waG9uZS1pbnB1dC0yL2xpYi9ib290c3RyYXAuY3NzJztcbmltcG9ydCAncmVhY3QtZGF0ZXMvbGliL2Nzcy9fZGF0ZXBpY2tlci5jc3MnO1xuaW1wb3J0ICdAZ2xpZGVqcy9nbGlkZS9kaXN0L2Nzcy9nbGlkZS5jb3JlLm1pbi5jc3MnO1xuaW1wb3J0ICdyZWFjdC1xdWlsbC9kaXN0L3F1aWxsLnNub3cuY3NzJztcbmltcG9ydCAncmVhY3QtcXVpbGwvZGlzdC9xdWlsbC5jb3JlLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LWltYWdlLWdhbGxlcnkvc3R5bGVzL2Nzcy9pbWFnZS1nYWxsZXJ5LmNzcyc7XG4vLyBpbXBvcnQgXCJzbGljay1jYXJvdXNlbC9zbGljay9zbGljay5jc3NcIjtcbi8vIGltcG9ydCBcInNsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzc1wiO1xuaW1wb3J0ICcuLi9zdHlsZS9nbG9iYWwuY3NzJztcbmltcG9ydCBHdWVzdFRoZW1lUHJvdmlkZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvR3Vlc3QvR3Vlc3RUaGVtZVByb3ZpZGVyXCI7XG5pbXBvcnQge1NlYXJjaFByb3ZpZGVyfSBmcm9tIFwiQGNvbnRleHQvU2VhcmNoUHJvdmlkZXJcIjtcbmltcG9ydCB7Qm9va2luZ1Byb3ZpZGVyLCBpbml0Qm9va2luZ30gZnJvbSBcIkBjb250ZXh0L0Jvb2tpbmdQcm92aWRlclwiO1xuaW1wb3J0IEdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vc3R5bGUvR2xvYmFsU3R5bGVzXCI7XG5pbXBvcnQgV2l0aEdBVHJhY2tlciBmcm9tIFwiQGNvbXBvbmVudHMvSE9DL1dpdGhHQVRyYWNrZXJcIjtcbmltcG9ydCBXaXRoUGl4ZWwgZnJvbSBcIkBjb21wb25lbnRzL0hPQy9XaXRoUGl4ZWxcIjtcblxuXG5jbGFzcyBDdXN0b21BcHAgZXh0ZW5kcyBBcHAge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge0NvbXBvbmVudCwgcm91dGVyLCBwYWdlUHJvcHMsIHN0b3JlfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IHtxdWVyeX0gPSByb3V0ZXJcblxuICAgICAgICBpZiAocm91dGVyLnBhdGhuYW1lLnNwbGl0KCcvJylbMF0gPT09ICdhZG1pbicpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgLy8gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgLy8gPC9Qcm92aWRlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxHdWVzdFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAgPFNlYXJjaFByb3ZpZGVyIHF1ZXJ5PXtxdWVyeX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb29raW5nUHJvdmlkZXIgYm9va2luZz17aW5pdEJvb2tpbmd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEdsb2JhbFN0eWxlcy8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQm9va2luZ1Byb3ZpZGVyPlxuICAgICAgICAgICAgICAgIDwvU2VhcmNoUHJvdmlkZXI+XG4gICAgICAgICAgICA8L0d1ZXN0VGhlbWVQcm92aWRlcj5cbiAgICAgICAgKVxuICAgICAgICAvLyByZXR1cm4gV2l0aEdBVHJhY2tlcihXaXRoUGl4ZWwoKFxuICAgICAgICAvLyAgICAgLy8gPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIC8vICAgICA8R3Vlc3RUaGVtZVByb3ZpZGVyPlxuICAgICAgICAvLyAgICAgICAgIDxTZWFyY2hQcm92aWRlciBxdWVyeT17cXVlcnl9PlxuICAgICAgICAvLyAgICAgICAgICAgICA8Qm9va2luZ1Byb3ZpZGVyIGJvb2tpbmc9e2luaXRCb29raW5nfT5cbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxHbG9iYWxTdHlsZXMvPlxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAvLyAgICAgICAgICAgICA8L0Jvb2tpbmdQcm92aWRlcj5cbiAgICAgICAgLy8gICAgICAgICA8L1NlYXJjaFByb3ZpZGVyPlxuICAgICAgICAvLyAgICAgPC9HdWVzdFRoZW1lUHJvdmlkZXI+XG4gICAgICAgIC8vICAgICAvLyA8L1Byb3ZpZGVyPlxuICAgICAgICAvLyApKSlcbiAgICB9XG59XG5cbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGluaXRTdG9yZSwge2RlYnVnOiB0cnVlfSlcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEN1c3RvbUFwcClcblxuLy8gZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSkoQ3VzdG9tQXBwKTtcblxuIiwiY29uc3QgYW1lbml0eUFjdGlvbnMgPSB7XG4gIEdFVF9BTExfQU1FTklUSUVTX1JFUVVFU1Q6IFwiR0VUX0FMTF9BTUVOSVRJRVNfUkVRVUVTVFwiLFxuICBHRVRfQUxMX0FNRU5JVElFU19TVUNDRVNTOiBcIkdFVF9BTExfQU1FTklUSUVTX1NVQ0NFU1NcIixcbiAgR0VUX0FMTF9BTUVOSVRJRVNfRkFJTFVSRTogXCJHRVRfQUxMX0FNRU5JVElFU19GQUlMVVJFXCIsXG4gIEdFVF9BTUVOSVRZX1JFUVVFU1Q6IFwiR0VUX0FNRU5JVFlfUkVRVUVTVFwiLFxuICBHRVRfQU1FTklUWV9TVUNDRVNTOiBcIkdFVF9BTUVOSVRZX1NVQ0NFU1NcIixcbiAgR0VUX0FNRU5JVFlfRkFJTFVSRTogXCJHRVRfQU1FTklUWV9GQUlMVVJFXCIsXG4gIEFERF9BTUVOSVRZX1JFUVVFU1Q6IFwiQUREX0FNRU5JVFlfUkVRVUVTVFwiLFxuICBBRERfQU1FTklUWV9TVUNDRVNTOiBcIkFERF9BTUVOSVRZX1NVQ0NFU1NcIixcbiAgQUREX0FNRU5JVFlfRkFJTFVSRTogXCJBRERfQU1FTklUWV9GQUlMVVJFXCIsXG4gIFVQREFURV9BTUVOSVRZX1JFUVVFU1Q6IFwiVVBEQVRFX0FNRU5JVFlfUkVRVUVTVFwiLFxuICBVUERBVEVfQU1FTklUWV9TVUNDRVNTOiBcIlVQREFURV9BTUVOSVRZX1NVQ0NFU1NcIixcbiAgVVBEQVRFX0FNRU5JVFlfRkFJTFVSRTogXCJVUERBVEVfQU1FTklUWV9GQUlMVVJFXCIsXG4gIERFTEVURV9BTUVOSVRZX1JFUVVFU1Q6IFwiREVMRVRFX0FNRU5JVFlfUkVRVUVTVFwiLFxuICBERUxFVEVfQU1FTklUWV9TVUNDRVNTOiBcIkRFTEVURV9BTUVOSVRZX1NVQ0NFU1NcIixcbiAgREVMRVRFX0FNRU5JVFlfRkFJTFVSRTogXCJERUxFVEVfQU1FTklUWV9GQUlMVVJFXCIsXG5cbiAgZ2V0QWxsQW1lbml0aWVzOiAoKSA9PiAoe1xuICAgIHR5cGU6IGFtZW5pdHlBY3Rpb25zLkdFVF9BTExfQU1FTklUSUVTX1JFUVVFU1QsXG4gIH0pLFxuICBnZXRBbWVuaXR5OiAoYW1lbml0eUlkKSA9PiAoe1xuICAgIHR5cGU6IGFtZW5pdHlBY3Rpb25zLkdFVF9BTUVOSVRZX1JFUVVFU1QsXG4gICAgYW1lbml0eUlkLFxuICB9KSxcbiAgYWRkQW1lbml0eTogKG5ld0FtZW5pdHkpID0+ICh7XG4gICAgdHlwZTogYW1lbml0eUFjdGlvbnMuQUREX0FNRU5JVFlfUkVRVUVTVCxcbiAgICBhbWVuaXR5OiBuZXdBbWVuaXR5LFxuICB9KSxcbiAgdXBkYXRlQW1lbml0eTogKG5ld0FtZW5pdHkpID0+ICh7XG4gICAgdHlwZTogYW1lbml0eUFjdGlvbnMuVVBEQVRFX0FNRU5JVFlfUkVRVUVTVCxcbiAgICBhbWVuaXR5OiBuZXdBbWVuaXR5LFxuICB9KSxcbiAgZGVsZXRlQW1lbml0eTogKGFtZW5pdHlJZCkgPT4gKHtcbiAgICB0eXBlOiBhbWVuaXR5QWN0aW9ucy5ERUxFVEVfQU1FTklUWV9SRVFVRVNULFxuICAgIGFtZW5pdHlJZCxcbiAgfSksXG59O1xuZXhwb3J0IGRlZmF1bHQgYW1lbml0eUFjdGlvbnM7XG4iLCJpbXBvcnQgYW1lbml0eUFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIGl0ZW1zOiBbXSxcbiAgc2VsZWN0ZWRJdGVtOiBcIlwiLFxuICBlcnJvcjogXCJcIixcbiAgbG9hZGluZzogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0aWVzUmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAvLyBMaXN0XG4gICAgY2FzZSBhbWVuaXR5QWN0aW9ucy5HRVRfQUxMX0FNRU5JVElFU19SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBhbWVuaXR5QWN0aW9ucy5HRVRfQUxMX0FNRU5JVElFU19TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIGFtZW5pdHlBY3Rpb25zLkdFVF9BTExfQU1FTklUSUVTX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAvLyBHZXQgb25lXG4gICAgY2FzZSBhbWVuaXR5QWN0aW9ucy5HRVRfQU1FTklUWV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgYW1lbml0eUFjdGlvbnMuR0VUX0FNRU5JVFlfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIGFtZW5pdHlBY3Rpb25zLkdFVF9BTUVOSVRZX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgLy8gQWRkXG4gICAgY2FzZSBhbWVuaXR5QWN0aW9ucy5BRERfQU1FTklUWV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgYW1lbml0eUFjdGlvbnMuQUREX0FNRU5JVFlfU1VDQ0VTUzpcbiAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHN0YXRlO1xuICAgICAgaXRlbXMucHVzaChhY3Rpb24uaXRlbSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIGFtZW5pdHlBY3Rpb25zLkFERF9BTUVOSVRZX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIC8vIFVwZGF0ZVxuICAgIGNhc2UgYW1lbml0eUFjdGlvbnMuVVBEQVRFX0FNRU5JVFlfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIGFtZW5pdHlBY3Rpb25zLlVQREFURV9BTUVOSVRZX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLy8gaXRlbXM6IHN0YXRlLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAvLyAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaXRlbS5pZCkge1xuICAgICAgICAvLyAgICAgaXRlbSA9IGFjdGlvbi5pdGVtO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSksXG4gICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIGFtZW5pdHlBY3Rpb25zLlVQREFURV9BTUVOSVRZX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIC8vIERlbGV0ZVxuICAgIGNhc2UgYW1lbml0eUFjdGlvbnMuREVMRVRFX0FNRU5JVFlfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIGFtZW5pdHlBY3Rpb25zLkRFTEVURV9BTUVOSVRZX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLmFtZW5pdHlJZCksXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIGFtZW5pdHlBY3Rpb25zLkRFTEVURV9BTUVOSVRZX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcclxuICAgIGFsbCxcclxuICAgIHRha2VFdmVyeSxcclxuICAgIGZvcmssXHJcbiAgICB0YWtlTGF0ZXN0LFxyXG4gICAgY2FsbCxcclxuICAgIHB1dCxcclxufSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IGFtZW5pdHlBcGkgZnJvbSBcIi4uLy4uL3NlcnZpY2UvYW1lbml0eUFwaVwiO1xyXG5pbXBvcnQge25vdGlmaWNhdGlvbn0gZnJvbSBcIkBpc28vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1JvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRBbGxBbWVuaXRpZXMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KGFjdGlvbnMuR0VUX0FMTF9BTUVOSVRJRVNfUkVRVUVTVCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGFtZW5pdHlBcGkuZ2V0QWxsKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuR0VUX0FMTF9BTUVOSVRJRVNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiByZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignd2FybmluZycsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfQUxMX0FNRU5JVElFU19GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldEFtZW5pdHkoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5HRVRfQU1FTklUWV9SRVFVRVNULCBmdW5jdGlvbiogKHBheWxvYWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGFtZW5pdHlBcGkuZ2V0T25lLCBwYXlsb2FkLmFtZW5pdHlJZCk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkdFVF9BTUVOSVRZX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBpdGVtOiByZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignd2FybmluZycsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfQU1FTklUWV9GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGFkZEFtZW5pdHkoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5BRERfQU1FTklUWV9SRVFVRVNULCBmdW5jdGlvbiogKHBheWxvYWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGFtZW5pdHlBcGkuYWRkLCBwYXlsb2FkLmFtZW5pdHkpO1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCAnTmV3IGFtZW5pdHkgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHknKTtcclxuXHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkFERF9BTUVOSVRZX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBpdGVtOiByZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignd2FybmluZycsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5BRERfQU1FTklUWV9GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIHVwZGF0ZUFtZW5pdHkoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5VUERBVEVfQU1FTklUWV9SRVFVRVNULCBmdW5jdGlvbiogKHBheWxvYWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGFtZW5pdHlBcGkudXBkYXRlLCBwYXlsb2FkLmFtZW5pdHkpO1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCAnQW1lbml0eSBoYXMgYmVlbiB1cGRhdGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5VUERBVEVfQU1FTklUWV9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgaXRlbTogcmVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3dhcm5pbmcnLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX0FNRU5JVFlfRkFJTFVSRSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBkZWxldGVBbWVuaXR5KCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuREVMRVRFX0FNRU5JVFlfUkVRVUVTVCwgZnVuY3Rpb24qIChwYXlsb2FkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbChhbWVuaXR5QXBpLmRlbGV0ZSwgcGF5bG9hZC5hbWVuaXR5SWQpO1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCAnQW1lbml0eSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL2FtZW5pdHknKVxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfQU1FTklUWV9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgYW1lbml0eUlkOiBwYXlsb2FkLmFtZW5pdHlJZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCd3YXJuaW5nJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9BTUVOSVRZX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgY2FsbChnZXRBbGxBbWVuaXRpZXMpLFxyXG4gICAgICAgIGZvcmsoZ2V0QW1lbml0eSksXHJcbiAgICAgICAgZm9yayhhZGRBbWVuaXR5KSxcclxuICAgICAgICBmb3JrKHVwZGF0ZUFtZW5pdHkpLFxyXG4gICAgICAgIGZvcmsoZGVsZXRlQW1lbml0eSksXHJcbiAgICBdKTtcclxufVxyXG4iLCJjb25zdCBhY3Rpb25zID0ge1xuICAvLyBMT0dJTl9SRVFVRVNUX1NUQVJUOiAnTE9HSU5fUkVRVUVTVF9TVEFSVCcsXG4gIEpXVF9MT0dJTl9SRVFVRVNUX1NUQVJUOiAnSldUX0xPR0lOX1JFUVVFU1RfU1RBUlQnLFxuICBMT0dJTl9SRVFVRVNUX1NVQ0NFU1M6ICdMT0dJTl9SRVFVRVNUX1NVQ0NFU1MnLFxuICBMT0dJTl9SRVFVRVNUX0ZBSUxVUkU6ICdMT0dJTl9SRVFVRVNUX0ZBSUxVUkUnLFxuICBMT0dPVVRfUkVRVUVTVF9TVEFSVDogJ0xPR09VVF9SRVFVRVNUX1NUQVJUJyxcbiAgTE9HT1VUX1JFUVVFU1RfU1VDQ0VTUzogJ0xPR09VVF9SRVFVRVNUX1NVQ0NFU1MnLFxuICBMT0dPVVRfUkVRVUVTVF9GQUlMVVJFOiAnTE9HT1VUX1JFUVVFU1RfRkFJTFVSRScsXG5cbiAgLy8gbG9naW46IGNyZWRlbnRpYWxzID0+ICh7XG4gIC8vICAgdHlwZTogYWN0aW9ucy5MT0dJTl9SRVFVRVNUX1NUQVJULFxuICAvLyAgIHBheWxvYWQ6IGNyZWRlbnRpYWxzLFxuICAvLyB9KSxcbiAgand0TG9naW46IChoaXN0b3J5LCB1c2VySW5mbykgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkpXVF9MT0dJTl9SRVFVRVNUX1NUQVJULFxuICAgIHBheWxvYWQ6IHsgaGlzdG9yeSwgdXNlckluZm8gfSxcbiAgfSksXG4gIGxvZ2luUmVxdWVzdFN1Y2Nlc3M6IGNyZWRlbnRpYWxzID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dJTl9SRVFVRVNUX1NVQ0NFU1MsXG4gICAgcGF5bG9hZDogY3JlZGVudGlhbHMsXG4gIH0pLFxuICBsb2dpblJlcXVlc3RGYWlsdXJlOiBlcnJvciA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuTE9HT1VUX1JFUVVFU1RfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJvcixcbiAgfSksXG4gIGxvZ291dDogKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkxPR09VVF9SRVFVRVNUX1NUQVJULFxuICB9KSxcbiAgbG9nb3V0UmVxdWVzdFN1Y2Nlc3M6ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dPVVRfUkVRVUVTVF9TVUNDRVNTLFxuICB9KSxcbiAgbG9nb3V0UmVxdWVzdEZhaWx1cmU6IGVycm9yID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5MT0dPVVRfUkVRVUVTVF9GQUlMVVJFLFxuICAgIHBheWxvYWQ6IGVycm9yLFxuICB9KSxcbn07XG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zO1xuIiwiaW1wb3J0IHt1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IG5leHRDb29raWUgZnJvbSAnbmV4dC1jb29raWVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcblxuZXhwb3J0IGNvbnN0IHNldENvb2tpZSA9IChrZXksIHZhbHVlKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xuICAgICAgICBjb29raWUuc2V0KGtleSwgdmFsdWUsIHtcbiAgICAgICAgICAgIGV4cGlyZXM6IDEsXG4gICAgICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVDb29raWUgPSBrZXkgPT4ge1xuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICAgICAgY29va2llLnJlbW92ZShrZXksIHtcbiAgICAgICAgICAgIGV4cGlyZXM6IDEsXG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5cbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5LCByZXEpID0+IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5icm93c2VyXG4gICAgICAgID8gZ2V0Q29va2llRnJvbUJyb3dzZXIoa2V5KVxuICAgICAgICA6IGdldENvb2tpZUZyb21TZXJ2ZXIoa2V5LCByZXEpO1xufTtcblxuY29uc3QgZ2V0Q29va2llRnJvbUJyb3dzZXIgPSBrZXkgPT4ge1xuICAgIHJldHVybiBjb29raWUuZ2V0KGtleSk7XG59O1xuXG5jb25zdCBnZXRDb29raWVGcm9tU2VydmVyID0gKGtleSwgcmVxKSA9PiB7XG4gICAgaWYgKCFyZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgcmF3Q29va2llID0gcmVxLmhlYWRlcnMuY29va2llXG4gICAgICAgIC5zcGxpdCgnOycpXG4gICAgICAgIC5maW5kKGMgPT4gYy50cmltKCkuc3RhcnRzV2l0aChgJHtrZXl9PWApKTtcbiAgICBpZiAoIXJhd0Nvb2tpZSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gcmF3Q29va2llLnNwbGl0KCc9JylbMV07XG59O1xuXG4vLyBleHBvcnQgY29uc3QgbG9naW4gPSAoe3Rva2VufSkgPT4ge1xuLy8gICAgIGNvb2tpZS5zZXQoJ3Rva2VuJywgdG9rZW4sIHtleHBpcmVzOiAxfSk7XG4vLyAgICAgUm91dGVyLnB1c2goJy9hZG1pbicpO1xuLy8gfTtcblxuZXhwb3J0IGNvbnN0IGF1dGggPSBjdHggPT4ge1xuICAgIGNvbnN0IHt0b2tlbn0gPSBuZXh0Q29va2llKGN0eCk7XG4gICAgLypcbiAgICAgKiBJZiBgY3R4LnJlcWAgaXMgYXZhaWxhYmxlIGl0IG1lYW5zIHdlIGFyZSBvbiB0aGUgc2VydmVyLlxuICAgICAqIEFkZGl0aW9uYWxseSBpZiB0aGVyZSdzIG5vIHRva2VuIGl0IG1lYW5zIHRoZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4uXG4gICAgICovXG4gICAgaWYgKGN0eC5yZXEgJiYgIXRva2VuKSB7XG4gICAgICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwge0xvY2F0aW9uOiAnL2FkbWluL3NpZ25pbid9KTtcbiAgICAgICAgY3R4LnJlcy5lbmQoKTtcbiAgICB9XG5cbiAgICAvLyBXZSBhbHJlYWR5IGNoZWNrZWQgZm9yIHNlcnZlci4gVGhpcyBzaG91bGQgb25seSBoYXBwZW4gb24gY2xpZW50LlxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9zaWduaW4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9rZW47XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuICAgIGNvb2tpZS5yZW1vdmUoJ3Rva2VuJyk7XG4gICAgLy8gdG8gc3VwcG9ydCBsb2dnaW5nIG91dCBmcm9tIGFsbCB3aW5kb3dzXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dvdXQnLCBEYXRlLm5vdygpKTtcbiAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3NpZ25pbicpO1xufTtcblxuZXhwb3J0IGNvbnN0IHdpdGhBdXRoU3luYyA9IFdyYXBwZWRDb21wb25lbnQgPT4ge1xuICAgIGNvbnN0IFdyYXBwZXIgPSBwcm9wcyA9PiB7XG4gICAgICAgIGNvbnN0IHN5bmNMb2dvdXQgPSBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnbG9nb3V0Jykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dnZWQgb3V0IGZyb20gc3RvcmFnZSEnKTtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL2FkbWluL3NpZ25pbicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIHN5bmNMb2dvdXQpO1xuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgc3luY0xvZ291dCk7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2dvdXQnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sIFtudWxsXSk7XG5cbiAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5wcm9wc30gLz47XG4gICAgfTtcblxuICAgIFdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhdXRoKGN0eCk7XG5cbiAgICAgICAgY29uc3QgY29tcG9uZW50UHJvcHMgPVxuICAgICAgICAgICAgV3JhcHBlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAgIChhd2FpdCBXcmFwcGVkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpKTtcblxuICAgICAgICByZXR1cm4gey4uLmNvbXBvbmVudFByb3BzLCB0b2tlbn07XG4gICAgfTtcblxuICAgIHJldHVybiBXcmFwcGVyO1xufTtcbiIsImltcG9ydCBqd3RDb25maWcgZnJvbSAnQGlzby9jb25maWcvand0LmNvbmZpZyc7XHJcbmltcG9ydCBqd3REZWNvZGUgZnJvbSAnand0LWRlY29kZSc7XHJcblxyXG5sZXQgcmVzU3RhdHVzID0gMFxyXG5cclxuY2xhc3MgSnd0QXV0aCB7XHJcbiAgICBsb2dpbiA9IGFzeW5jIHVzZXJJbmZvID0+IHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgZmV0Y2goand0Q29uZmlnLmZldGNoVXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJJbmZvKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJfX19cIiwgcmVzKVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIC8vIHJlcy5qc29uKCkudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZXJyb3IgPSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlSnNvbi5kZXRhaWwgfHwgJ0FwcGxpY2F0aW9uIEVycm9yJ1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vICAgICB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgICAgICAgLy8gfSlcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID49IDQwMCAmJiByZXMuc3RhdHVzIDwgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRleHQoKSlcclxuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzLmRldGFpbCB8fCAnQXBwbGljYXRpb24gRXJyb3InXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPj0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IHJlcy5kZXRhaWwgfHwgJ1NlcnZlciBFcnJvcidcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBlcnJvciA9IHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5lcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogcmVzLmRldGFpbCB8fCAnRXJyb3InXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBKd3RBdXRoKCk7XHJcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7Z2V0Q29va2llfSBmcm9tIFwiQHJlZHV4L2F1dGhlbnRpY2F0aW9uL2F1dGgudXRpbHNcIjtcbmltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xuXG5sZXQgaW5pdFN0YXRlID0ge1xuICAgIGlkVG9rZW46IG51bGwsXG4gICAgcHJvZmlsZTogbnVsbCxcbiAgICBlcnJvcjogbnVsbCxcbn07XG5cbi8vIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbi8vICAgICBpZiAoY29va2llLmdldCgndG9rZW4nKSAhPT0gbnVsbCkge1xuLy8gICAgICAgICBjb25zdCB0b2tlbiA9IGNvb2tpZS5nZXQoJ3Rva2VuJylcbi8vICAgICAgICAgY29uc29sZS5sb2coXCJfX19cIiwgdG9rZW4pXG4vLyAgICAgICAgIGNvbnN0IHByb2ZpbGUgPSBqd3REZWNvZGUodG9rZW4pO1xuLy8gICAgICAgICBpbml0U3RhdGUgPSB7XG4vLyAgICAgICAgICAgICBpZFRva2VuOiB0b2tlbixcbi8vICAgICAgICAgICAgIHByb2ZpbGUsXG4vLyAgICAgICAgICAgICBlcnJvcjogbnVsbCxcbi8vICAgICAgICAgfTtcbi8vICAgICB9XG4vLyB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGF1dGhSZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9ucy5MT0dJTl9SRVFVRVNUX1NVQ0NFU1M6XG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2FkbWluJyk7XG4gICAgICAgICAgICByZXR1cm4gey4uLnN0YXRlLCBpZFRva2VuOiBhY3Rpb24udG9rZW4sIHByb2ZpbGU6IGFjdGlvbi5wcm9maWxlfTtcbiAgICAgICAgY2FzZSBhY3Rpb25zLkxPR09VVF9SRVFVRVNUX0ZBSUxVUkU6XG4gICAgICAgIGNhc2UgYWN0aW9ucy5MT0dJTl9SRVFVRVNUX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGlkVG9rZW46IG51bGwsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBhY3Rpb25zLkxPR09VVF9SRVFVRVNUX1NVQ0NFU1M6XG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnL2FkbWluL3NpZ25pbicpO1xuICAgICAgICAgICAgcmV0dXJuIGluaXRTdGF0ZTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG4iLCJpbXBvcnQge2FsbCwgdGFrZUxhdGVzdCwgcHV0LCBjYWxsLCBmb3JrfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xuaW1wb3J0IHsgbG9nb3V0LCByZW1vdmVDb29raWUsIHNldENvb2tpZX0gZnJvbSAnLi9hdXRoLnV0aWxzJztcbmltcG9ydCB7bm90aWZpY2F0aW9ufSBmcm9tICdAaXNvL2NvbXBvbmVudHMnO1xuaW1wb3J0IEp3dEF1dGhlbnRpY2F0aW9uIGZyb20gJy4vand0QXV0aGVudGljYXRpb24nO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24qIGp3dExvZ2luUmVxdWVzdCgpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KGFjdGlvbnMuSldUX0xPR0lOX1JFUVVFU1RfU1RBUlQsIGZ1bmN0aW9uKiAoe3BheWxvYWQ6IHt1c2VySW5mbywgaGlzdG9yeX19KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKEp3dEF1dGhlbnRpY2F0aW9uLmxvZ2luLCB1c2VySW5mbyk7XG4gICAgICAgICAgICBsZXQgdG9rZW4sIHByb2ZpbGU7XG4gICAgICAgICAgICBpZiAocmVzLmFjY2Vzcykge1xuICAgICAgICAgICAgICAgIHRva2VuID0gcmVzLmFjY2VzcztcbiAgICAgICAgICAgICAgICBwcm9maWxlID0gand0RGVjb2RlKHJlcy5hY2Nlc3MpO1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbignc3VjY2VzcycsICdsb2dpbiBzdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkxPR0lOX1JFUVVFU1RfU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGUsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbignd2FybmluZycsICdSZXNwb25zZSB0eXBlIGlzIGludmFsaWQnKTtcbiAgICAgICAgICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5sb2dpblJlcXVlc3RGYWlsdXJlKFwiSW52YWxpZCBzZXJ2ZXIgcmVzcG9uc2VcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCdlcnJvcicsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICAgICAgeWllbGQgcHV0KGFjdGlvbnMubG9naW5SZXF1ZXN0RmFpbHVyZShlcnJvci5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24qIGxvZ291dFJlcXVlc3QoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgeWllbGQgY2FsbChsb2dvdXQpO1xuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5sb2dvdXRSZXF1ZXN0U3VjY2VzcygpKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICB5aWVsZCBwdXQoYWN0aW9ucy5sb2dvdXRSZXF1ZXN0RmFpbHVyZShlcnJvcikpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBsb2dpblN1Y2Nlc3MoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChhY3Rpb25zLkxPR0lOX1JFUVVFU1RfU1VDQ0VTUywgZnVuY3Rpb24qIChwYXlsb2FkKSB7XG4gICAgICAgIHNldENvb2tpZSgnbG9naW5fc2FnYScsIHBheWxvYWQudG9rZW4pO1xuICAgICAgICB5aWVsZCBzZXRDb29raWUoJ3Rva2VuJywgcGF5bG9hZC50b2tlbik7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogbG9naW5FcnJvcigpIHtcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KGFjdGlvbnMuTE9HT1VUX1JFUVVFU1RfRkFJTFVSRSwgZnVuY3Rpb24qIChwYXlsb2FkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9naW5FcnJvclwiLCBwYXlsb2FkKVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIG9uTG9nb3V0KCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QoYWN0aW9ucy5MT0dPVVRfUkVRVUVTVF9TVEFSVCwgbG9nb3V0UmVxdWVzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcbiAgICB5aWVsZCBhbGwoW2NhbGwoand0TG9naW5SZXF1ZXN0KSwgY2FsbChsb2dpblN1Y2Nlc3MpLCBjYWxsKG9uTG9nb3V0KV0pO1xufVxuIiwiY29uc3QgY2F0ZWdvcnlBY3Rpb25zID0ge1xuICBHRVRfQUxMX0NBVEVHT1JJRVNfUkVRVUVTVDogXCJHRVRfQUxMX0NBVEVHT1JJRVNfUkVRVUVTVFwiLFxuICBHRVRfQUxMX0NBVEVHT1JJRVNfU1VDQ0VTUzogXCJHRVRfQUxMX0NBVEVHT1JJRVNfU1VDQ0VTU1wiLFxuICBHRVRfQUxMX0NBVEVHT1JJRVNfRkFJTFVSRTogXCJHRVRfQUxMX0NBVEVHT1JJRVNfRkFJTFVSRVwiLFxuICBHRVRfQ0FURUdPUllfUkVRVUVTVDogXCJHRVRfQ0FURUdPUllfUkVRVUVTVFwiLFxuICBHRVRfQ0FURUdPUllfU1VDQ0VTUzogXCJHRVRfQ0FURUdPUllfU1VDQ0VTU1wiLFxuICBHRVRfQ0FURUdPUllfRkFJTFVSRTogXCJHRVRfQ0FURUdPUllfRkFJTFVSRVwiLFxuICBBRERfQ0FURUdPUllfUkVRVUVTVDogXCJBRERfQ0FURUdPUllfUkVRVUVTVFwiLFxuICBBRERfQ0FURUdPUllfU1VDQ0VTUzogXCJBRERfQ0FURUdPUllfU1VDQ0VTU1wiLFxuICBBRERfQ0FURUdPUllfRkFJTFVSRTogXCJBRERfQ0FURUdPUllfRkFJTFVSRVwiLFxuICBVUERBVEVfQ0FURUdPUllfUkVRVUVTVDogXCJVUERBVEVfQ0FURUdPUllfUkVRVUVTVFwiLFxuICBVUERBVEVfQ0FURUdPUllfU1VDQ0VTUzogXCJVUERBVEVfQ0FURUdPUllfU1VDQ0VTU1wiLFxuICBVUERBVEVfQ0FURUdPUllfRkFJTFVSRTogXCJVUERBVEVfQ0FURUdPUllfRkFJTFVSRVwiLFxuICBERUxFVEVfQ0FURUdPUllfUkVRVUVTVDogXCJERUxFVEVfQ0FURUdPUllfUkVRVUVTVFwiLFxuICBERUxFVEVfQ0FURUdPUllfU1VDQ0VTUzogXCJERUxFVEVfQ0FURUdPUllfU1VDQ0VTU1wiLFxuICBERUxFVEVfQ0FURUdPUllfRkFJTFVSRTogXCJERUxFVEVfQ0FURUdPUllfRkFJTFVSRVwiLFxuXG4gIGdldEFsbENhdGVnb3JpZXM6ICgpID0+ICh7XG4gICAgdHlwZTogY2F0ZWdvcnlBY3Rpb25zLkdFVF9BTExfQ0FURUdPUklFU19SRVFVRVNULFxuICB9KSxcbiAgZ2V0Q2F0ZWdvcnk6IChjYXRlZ29yeUlkKSA9PiAoe1xuICAgIHR5cGU6IGNhdGVnb3J5QWN0aW9ucy5HRVRfQ0FURUdPUllfUkVRVUVTVCxcbiAgICBjYXRlZ29yeUlkLFxuICB9KSxcbiAgYWRkQ2F0ZWdvcnk6IChuZXdDYXRlZ29yeSkgPT4gKHtcbiAgICB0eXBlOiBjYXRlZ29yeUFjdGlvbnMuQUREX0NBVEVHT1JZX1JFUVVFU1QsXG4gICAgY2F0ZWdvcnk6IG5ld0NhdGVnb3J5LFxuICB9KSxcbiAgdXBkYXRlQ2F0ZWdvcnk6IChuZXdDYXRlZ29yeSkgPT4gKHtcbiAgICB0eXBlOiBjYXRlZ29yeUFjdGlvbnMuVVBEQVRFX0NBVEVHT1JZX1JFUVVFU1QsXG4gICAgY2F0ZWdvcnk6IG5ld0NhdGVnb3J5LFxuICB9KSxcbiAgZGVsZXRlQ2F0ZWdvcnk6IChjYXRlZ29yeUlkKSA9PiAoe1xuICAgIHR5cGU6IGNhdGVnb3J5QWN0aW9ucy5ERUxFVEVfQ0FURUdPUllfUkVRVUVTVCxcbiAgICBjYXRlZ29yeUlkLFxuICB9KSxcbn07XG5leHBvcnQgZGVmYXVsdCBjYXRlZ29yeUFjdGlvbnM7XG4iLCJpbXBvcnQgY2F0ZWdvcnlBY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICBpdGVtczogW10sXG4gIHNlbGVjdGVkSXRlbTogXCJcIixcbiAgZXJyb3I6IFwiXCIsXG4gIGxvYWRpbmc6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvcGVydGllc1JlZHVjZXIoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgLy8gTGlzdFxuICAgIGNhc2UgY2F0ZWdvcnlBY3Rpb25zLkdFVF9BTExfQ0FURUdPUklFU19SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgIH07XG4gICAgY2FzZSBjYXRlZ29yeUFjdGlvbnMuR0VUX0FMTF9DQVRFR09SSUVTX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IGFjdGlvbi5pdGVtcyxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgY2F0ZWdvcnlBY3Rpb25zLkdFVF9BTExfQ0FURUdPUklFU19GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgLy8gR2V0IG9uZVxuICAgIGNhc2UgY2F0ZWdvcnlBY3Rpb25zLkdFVF9DQVRFR09SWV9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgY2F0ZWdvcnlBY3Rpb25zLkdFVF9DQVRFR09SWV9TVUNDRVNTOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIGNhdGVnb3J5QWN0aW9ucy5HRVRfQ0FURUdPUllfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBzZWxlY3RlZEl0ZW06IG51bGwsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICAvLyBBZGRcbiAgICBjYXNlIGNhdGVnb3J5QWN0aW9ucy5BRERfQ0FURUdPUllfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIGNhdGVnb3J5QWN0aW9ucy5BRERfQ0FURUdPUllfU1VDQ0VTUzpcbiAgICAgIHN0YXRlLml0ZW1zLnB1c2goYWN0aW9uLml0ZW0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcyxcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBhY3Rpb24uaXRlbSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgY2F0ZWdvcnlBY3Rpb25zLkFERF9DQVRFR09SWV9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICAvLyBVcGRhdGVcbiAgICBjYXNlIGNhdGVnb3J5QWN0aW9ucy5VUERBVEVfQ0FURUdPUllfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIGNhdGVnb3J5QWN0aW9ucy5VUERBVEVfQ0FURUdPUllfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAvLyBpdGVtczogc3RhdGUuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIC8vICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5pdGVtLmlkKSB7XG4gICAgICAgIC8vICAgICBpdGVtID0gYWN0aW9uLml0ZW07XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9KSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBhY3Rpb24uaXRlbSxcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgY2F0ZWdvcnlBY3Rpb25zLlVQREFURV9DQVRFR09SWV9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICAvLyBEZWxldGVcbiAgICBjYXNlIGNhdGVnb3J5QWN0aW9ucy5ERUxFVEVfQ0FURUdPUllfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIGNhdGVnb3J5QWN0aW9ucy5ERUxFVEVfQ0FURUdPUllfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24uY2F0ZWdvcnlJZCksXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIGNhdGVnb3J5QWN0aW9ucy5ERUxFVEVfQ0FURUdPUllfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQge1xyXG4gICAgYWxsLFxyXG4gICAgdGFrZUV2ZXJ5LFxyXG4gICAgZm9yayxcclxuICAgIHRha2VMYXRlc3QsXHJcbiAgICBjYWxsLFxyXG4gICAgcHV0LFxyXG59IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuaW1wb3J0IGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5pbXBvcnQge25vdGlmaWNhdGlvbn0gZnJvbSBcIkBpc28vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgY2F0ZWdvcnlBcGkgZnJvbSBcIi4uLy4uL3NlcnZpY2UvY2F0ZWdvcnlBcGlcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldEFsbENhdGVnb3JpZXMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KGFjdGlvbnMuR0VUX0FMTF9DQVRFR09SSUVTX1JFUVVFU1QsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbChjYXRlZ29yeUFwaS5nZXRBbGwpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfQUxMX0NBVEVHT1JJRVNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiByZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkdFVF9BTExfQ0FURUdPUklFU19GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGdldENhdGVnb3J5KCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuR0VUX0NBVEVHT1JZX1JFUVVFU1QsIGZ1bmN0aW9uKiAocGF5bG9hZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwoY2F0ZWdvcnlBcGkuZ2V0T25lLCBwYXlsb2FkLmNhdGVnb3J5SWQpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfQ0FURUdPUllfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGl0ZW06IHJlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuR0VUX0NBVEVHT1JZX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogYWRkQ2F0ZWdvcnkoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5BRERfQ0FURUdPUllfUkVRVUVTVCwgZnVuY3Rpb24qIChwYXlsb2FkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbChjYXRlZ29yeUFwaS5hZGQsIHBheWxvYWQuY2F0ZWdvcnkpO1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24oXCJzdWNjZXNzXCIsIFwiTmV3IGNhdGVnb3J5IGhhcyBiZWVuIGNyZWF0ZWRcIik7XHJcblxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5BRERfQ0FURUdPUllfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGl0ZW06IHJlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uKFwid2FybmluZ1wiLCBlcnJvcik7XHJcblxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5BRERfQ0FURUdPUllfRkFJTFVSRSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiB1cGRhdGVDYXRlZ29yeSgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShhY3Rpb25zLlVQREFURV9DQVRFR09SWV9SRVFVRVNULCBmdW5jdGlvbiogKHBheWxvYWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKGNhdGVnb3J5QXBpLnVwZGF0ZSwgcGF5bG9hZC5jYXRlZ29yeSk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbihcInN1Y2Nlc3NcIiwgXCJDYXRlZ29yeSBoYXMgYmVlbiB1cGRhdGVkXCIpO1xyXG5cclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX0NBVEVHT1JZX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBpdGVtOiByZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbihcIndhcm5pbmdcIiwgZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX0NBVEVHT1JZX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZGVsZXRlQ2F0ZWdvcnkoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5ERUxFVEVfQ0FURUdPUllfUkVRVUVTVCwgZnVuY3Rpb24qIChwYXlsb2FkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgeWllbGQgY2FsbChjYXRlZ29yeUFwaS5kZWxldGUsIHBheWxvYWQuY2F0ZWdvcnlJZCk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbihcInN1Y2Nlc3NcIiwgXCJDYXRlZ29yeSBoYXMgYmVlbiBkZWxldGVkXCIpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfQ0FURUdPUllfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQ6IHBheWxvYWQuY2F0ZWdvcnlJZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uKFwid2FybmluZ1wiLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9DQVRFR09SWV9GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGNhbGwoZ2V0QWxsQ2F0ZWdvcmllcyksXHJcbiAgICAgICAgZm9yayhnZXRDYXRlZ29yeSksXHJcbiAgICAgICAgZm9yayhhZGRDYXRlZ29yeSksXHJcbiAgICAgICAgZm9yayh1cGRhdGVDYXRlZ29yeSksXHJcbiAgICAgICAgZm9yayhkZWxldGVDYXRlZ29yeSksXHJcbiAgICBdKTtcclxufVxyXG4iLCJjb25zdCBwb3N0QWN0aW9ucyA9IHtcbiAgR0VUX0FMTF9QT1NUU19SRVFVRVNUOiBcIkdFVF9BTExfUE9TVFNfUkVRVUVTVFwiLFxuICBHRVRfQUxMX1BPU1RTX1NVQ0NFU1M6IFwiR0VUX0FMTF9QT1NUU19TVUNDRVNTXCIsXG4gIEdFVF9BTExfUE9TVFNfRkFJTFVSRTogXCJHRVRfQUxMX1BPU1RTX0ZBSUxVUkVcIixcbiAgR0VUX1BPU1RfUkVRVUVTVDogXCJHRVRfUE9TVF9SRVFVRVNUXCIsXG4gIEdFVF9QT1NUX1NVQ0NFU1M6IFwiR0VUX1BPU1RfU1VDQ0VTU1wiLFxuICBHRVRfUE9TVF9GQUlMVVJFOiBcIkdFVF9QT1NUX0ZBSUxVUkVcIixcbiAgQUREX1BPU1RfUkVRVUVTVDogXCJBRERfUE9TVF9SRVFVRVNUXCIsXG4gIEFERF9QT1NUX1NVQ0NFU1M6IFwiQUREX1BPU1RfU1VDQ0VTU1wiLFxuICBBRERfUE9TVF9GQUlMVVJFOiBcIkFERF9QT1NUX0ZBSUxVUkVcIixcbiAgVVBEQVRFX1BPU1RfUkVRVUVTVDogXCJVUERBVEVfUE9TVF9SRVFVRVNUXCIsXG4gIFVQREFURV9QT1NUX1NVQ0NFU1M6IFwiVVBEQVRFX1BPU1RfU1VDQ0VTU1wiLFxuICBVUERBVEVfUE9TVF9GQUlMVVJFOiBcIlVQREFURV9QT1NUX0ZBSUxVUkVcIixcbiAgREVMRVRFX1BPU1RfUkVRVUVTVDogXCJERUxFVEVfUE9TVF9SRVFVRVNUXCIsXG4gIERFTEVURV9QT1NUX1NVQ0NFU1M6IFwiREVMRVRFX1BPU1RfU1VDQ0VTU1wiLFxuICBERUxFVEVfUE9TVF9GQUlMVVJFOiBcIkRFTEVURV9QT1NUX0ZBSUxVUkVcIixcblxuICBnZXRBbGxQb3N0czogKCkgPT4gKHtcbiAgICB0eXBlOiBwb3N0QWN0aW9ucy5HRVRfQUxMX1BPU1RTX1JFUVVFU1QsXG4gIH0pLFxuICBnZXRQb3N0OiAocG9zdElkKSA9PiAoe1xuICAgIHR5cGU6IHBvc3RBY3Rpb25zLkdFVF9QT1NUX1JFUVVFU1QsXG4gICAgcG9zdElkLFxuICB9KSxcbiAgYWRkUG9zdDogKG5ld1Bvc3QpID0+ICh7XG4gICAgdHlwZTogcG9zdEFjdGlvbnMuQUREX1BPU1RfUkVRVUVTVCxcbiAgICBwb3N0OiBuZXdQb3N0LFxuICB9KSxcbiAgdXBkYXRlUG9zdDogKG5ld1Bvc3QpID0+ICh7XG4gICAgdHlwZTogcG9zdEFjdGlvbnMuVVBEQVRFX1BPU1RfUkVRVUVTVCxcbiAgICBwb3N0OiBuZXdQb3N0LFxuICB9KSxcbiAgZGVsZXRlUG9zdDogKHBvc3RJZCkgPT4gKHtcbiAgICB0eXBlOiBwb3N0QWN0aW9ucy5ERUxFVEVfUE9TVF9SRVFVRVNULFxuICAgIHBvc3RJZCxcbiAgfSksXG59O1xuZXhwb3J0IGRlZmF1bHQgcG9zdEFjdGlvbnM7XG4iLCJpbXBvcnQgcG9zdEFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIGl0ZW1zOiBbXSxcbiAgc2VsZWN0ZWRJdGVtOiBcIlwiLFxuICBlcnJvcjogXCJcIixcbiAgbG9hZGluZzogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9wZXJ0aWVzUmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAvLyBMaXN0XG4gICAgY2FzZSBwb3N0QWN0aW9ucy5HRVRfQUxMX1BPU1RTX1JFUVVFU1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIHBvc3RBY3Rpb25zLkdFVF9BTExfUE9TVFNfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogYWN0aW9uLml0ZW1zLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgY2FzZSBwb3N0QWN0aW9ucy5HRVRfQUxMX1BPU1RTX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG5cbiAgICAvLyBHZXQgb25lXG4gICAgY2FzZSBwb3N0QWN0aW9ucy5HRVRfUE9TVF9GQUlMVVJFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgcG9zdEFjdGlvbnMuR0VUX1BPU1RfU1VDQ0VTUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIHBvc3RBY3Rpb25zLkdFVF9QT1NUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxuICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIH07XG4gICAgLy8gQWRkXG4gICAgY2FzZSBwb3N0QWN0aW9ucy5BRERfUE9TVF9SRVFVRVNUOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICB9O1xuICAgIGNhc2UgcG9zdEFjdGlvbnMuQUREX1BPU1RfU1VDQ0VTUzpcbiAgICAgIGNvbnN0IHsgaXRlbXMgfSA9IHN0YXRlO1xuICAgICAgaXRlbXMucHVzaChhY3Rpb24uaXRlbSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpdGVtczogaXRlbXMsXG4gICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIHBvc3RBY3Rpb25zLkFERF9QT1NUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIC8vIFVwZGF0ZVxuICAgIGNhc2UgcG9zdEFjdGlvbnMuVVBEQVRFX1BPU1RfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIHBvc3RBY3Rpb25zLlVQREFURV9QT1NUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgLy8gaXRlbXM6IHN0YXRlLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAvLyAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaXRlbS5pZCkge1xuICAgICAgICAvLyAgICAgaXRlbSA9IGFjdGlvbi5pdGVtO1xuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfSksXG4gICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIHBvc3RBY3Rpb25zLlVQREFURV9QT1NUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuICAgIC8vIERlbGV0ZVxuICAgIGNhc2UgcG9zdEFjdGlvbnMuREVMRVRFX1BPU1RfUkVRVUVTVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIHBvc3RBY3Rpb25zLkRFTEVURV9QT1NUX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBvc3RJZCksXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgfTtcbiAgICBjYXNlIHBvc3RBY3Rpb25zLkRFTEVURV9QT1NUX0ZBSUxVUkU6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcclxuICAgIGFsbCxcclxuICAgIHRha2VFdmVyeSxcclxuICAgIGZvcmssXHJcbiAgICB0YWtlTGF0ZXN0LFxyXG4gICAgY2FsbCxcclxuICAgIHB1dCxcclxufSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBhY3Rpb25zIGZyb20gXCIuL2FjdGlvbnNcIjtcclxuaW1wb3J0IHtub3RpZmljYXRpb259IGZyb20gXCJAaXNvL2NvbXBvbmVudHNcIjtcclxuaW1wb3J0IHBvc3RBcGkgZnJvbSBcIi4uLy4uL3NlcnZpY2UvcG9zdEFwaVwiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0QWxsUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KGFjdGlvbnMuR0VUX0FMTF9QT1NUU19SRVFVRVNULCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwocG9zdEFwaS5nZXRBbGwpO1xyXG5cclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuR0VUX0FMTF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHJlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkdFVF9BTExfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuR0VUX1BPU1RfUkVRVUVTVCwgZnVuY3Rpb24qIChwYXlsb2FkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbChwb3N0QXBpLmdldE9uZSwgcGF5bG9hZC5wb3N0SWQpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgaXRlbTogcmVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5BRERfUE9TVF9SRVFVRVNULCBmdW5jdGlvbiogKHBheWxvYWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKHBvc3RBcGkuYWRkLCBwYXlsb2FkLnBvc3QpO1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3dhcm5pbmcnLCAnTmV3IHBvc3QgY3JlYXRlZCcpO1xyXG5cclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGl0ZW06IHJlcyxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCd3YXJuaW5nJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdXBkYXRlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShhY3Rpb25zLlVQREFURV9QT1NUX1JFUVVFU1QsIGZ1bmN0aW9uKiAocGF5bG9hZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwocG9zdEFwaS51cGRhdGUsIHBheWxvYWQucG9zdCk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignd2FybmluZycsICdQb3N0IGhhcyBiZWVuIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBpdGVtOiByZXMsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignd2FybmluZycsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5VUERBVEVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGRlbGV0ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5ERUxFVEVfUE9TVF9SRVFVRVNULCBmdW5jdGlvbiogKHBheWxvYWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB5aWVsZCBjYWxsKHBvc3RBcGkuZGVsZXRlLCBwYXlsb2FkLnBvc3RJZCk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignd2FybmluZycsICdQb3N0IGhhcyBiZWVuIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcblxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5ERUxFVEVfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAgICAgcG9zdElkOiBwYXlsb2FkLnBvc3RJZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCd3YXJuaW5nJywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgY2FsbChnZXRBbGxQb3N0cyksXHJcbiAgICAgICAgZm9yayhnZXRQb3N0KSxcclxuICAgICAgICBmb3JrKGFkZFBvc3QpLFxyXG4gICAgICAgIGZvcmsodXBkYXRlUG9zdCksXHJcbiAgICAgICAgZm9yayhkZWxldGVQb3N0KSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IHByb3BlcnR5cyB9IGZyb20gXCIuL3JlZHVjZXJcIjtcblxuZnVuY3Rpb24gYXNjZW5kaW5nU29ydChwcm9wZXJ0eTEsIHByb3BlcnR5Mikge1xuICBjb25zdCBuYW1lMSA9IHByb3BlcnR5MS5uYW1lID8gcHJvcGVydHkxLm5hbWUudG9VcHBlckNhc2UoKSA6IFwiflwiO1xuICBjb25zdCBuYW1lMiA9IHByb3BlcnR5Mi5uYW1lID8gcHJvcGVydHkyLm5hbWUudG9VcHBlckNhc2UoKSA6IFwiflwiO1xuICByZXR1cm4gbmFtZTEgPiBuYW1lMiA/IDEgOiBuYW1lMSA9PT0gbmFtZTIgPyAwIDogLTE7XG59XG5cbmNvbnN0IHByb3BlcnR5QWN0aW9ucyA9IHtcbiAgR0VUX0FMTF9QUk9QRVJUSUVTX1JFUVVFU1Q6IFwiR0VUX0FMTF9QUk9QRVJUSUVTX1JFUVVFU1RcIixcbiAgR0VUX0FMTF9QUk9QRVJUSUVTX1NVQ0NFU1M6IFwiR0VUX0FMTF9QUk9QRVJUSUVTX1NVQ0NFU1NcIixcbiAgR0VUX0FMTF9QUk9QRVJUSUVTX0ZBSUxVUkU6IFwiR0VUX0FMTF9QUk9QRVJUSUVTX0ZBSUxVUkVcIixcbiAgR0VUX1BST1BFUlRZX1JFUVVFU1Q6IFwiR0VUX1BST1BFUlRZX1JFUVVFU1RcIixcbiAgR0VUX1BST1BFUlRZX1NVQ0NFU1M6IFwiR0VUX1BST1BFUlRZX1NVQ0NFU1NcIixcbiAgR0VUX1BST1BFUlRZX0ZBSUxVUkU6IFwiR0VUX1BST1BFUlRZX0ZBSUxVUkVcIixcbiAgQUREX1BST1BFUlRZX1JFUVVFU1Q6IFwiQUREX1BST1BFUlRZX1JFUVVFU1RcIixcbiAgQUREX1BST1BFUlRZX1NVQ0NFU1M6IFwiQUREX1BST1BFUlRZX1NVQ0NFU1NcIixcbiAgQUREX1BST1BFUlRZX0ZBSUxVUkU6IFwiQUREX1BST1BFUlRZX0ZBSUxVUkVcIixcbiAgVVBEQVRFX1BST1BFUlRZX1JFUVVFU1Q6IFwiVVBEQVRFX1BST1BFUlRZX1JFUVVFU1RcIixcbiAgVVBEQVRFX1BST1BFUlRZX1NVQ0NFU1M6IFwiVVBEQVRFX1BST1BFUlRZX1NVQ0NFU1NcIixcbiAgVVBEQVRFX1BST1BFUlRZX0ZBSUxVUkU6IFwiVVBEQVRFX1BST1BFUlRZX0ZBSUxVUkVcIixcbiAgREVMRVRFX1BST1BFUlRZX1JFUVVFU1Q6IFwiREVMRVRFX1BST1BFUlRZX1JFUVVFU1RcIixcbiAgREVMRVRFX1BST1BFUlRZX1NVQ0NFU1M6IFwiREVMRVRFX1BST1BFUlRZX1NVQ0NFU1NcIixcbiAgREVMRVRFX1BST1BFUlRZX0ZBSUxVUkU6IFwiREVMRVRFX1BST1BFUlRZX0ZBSUxVUkVcIixcblxuICBHRVRfUFJJQ0VfSVRFTVNfUkVRVUVTVDogXCJHRVRfUFJJQ0VfSVRFTVNfUkVRVUVTVFwiLFxuICBHRVRfUFJJQ0VfSVRFTVNfU1VDQ0VTUzogXCJHRVRfUFJJQ0VfSVRFTVNfU1VDQ0VTU1wiLFxuICBHRVRfUFJJQ0VfSVRFTVNfRkFJTFVSRTogXCJHRVRfUFJJQ0VfSVRFTVNfRkFJTFVSRVwiLFxuXG4gIENSRUFURV9QUklDRV9JVEVNX1JFUVVFU1Q6IFwiQ1JFQVRFX1BSSUNFX0lURU1fUkVRVUVTVFwiLFxuICBDUkVBVEVfUFJJQ0VfSVRFTV9TVUNDRVNTOiBcIkNSRUFURV9QUklDRV9JVEVNX1NVQ0NFU1NcIixcbiAgQ1JFQVRFX1BSSUNFX0lURU1fRkFJTFVSRTogXCJDUkVBVEVfUFJJQ0VfSVRFTV9GQUlMVVJFXCIsXG5cbiAgZ2V0QWxsUHJvcGVydGllczogKCkgPT4gKHtcbiAgICB0eXBlOiBwcm9wZXJ0eUFjdGlvbnMuR0VUX0FMTF9QUk9QRVJUSUVTX1JFUVVFU1QsXG4gIH0pLFxuICBnZXRQcm9wZXJ0eTogKHByb3BlcnR5SWQpID0+ICh7XG4gICAgdHlwZTogcHJvcGVydHlBY3Rpb25zLkdFVF9QUk9QRVJUWV9SRVFVRVNULFxuICAgIHByb3BlcnR5SWQsXG4gIH0pLFxuICBhZGRQcm9wZXJ0eTogKG5ld1Byb3BlcnR5KSA9PiAoe1xuICAgIHR5cGU6IHByb3BlcnR5QWN0aW9ucy5BRERfUFJPUEVSVFlfUkVRVUVTVCxcbiAgICBwcm9wZXJ0eTogbmV3UHJvcGVydHksXG4gIH0pLFxuICB1cGRhdGVQcm9wZXJ0eTogKG5ld1Byb3BlcnR5KSA9PiAoe1xuICAgIHR5cGU6IHByb3BlcnR5QWN0aW9ucy5VUERBVEVfUFJPUEVSVFlfUkVRVUVTVCxcbiAgICBwcm9wZXJ0eTogbmV3UHJvcGVydHksXG4gIH0pLFxuICBkZWxldGVQcm9wZXJ0eTogKHByb3BlcnR5SWQpID0+ICh7XG4gICAgdHlwZTogcHJvcGVydHlBY3Rpb25zLkRFTEVURV9QUk9QRVJUWV9SRVFVRVNULFxuICAgIHByb3BlcnR5SWQsXG4gIH0pLFxuICBnZXRQcmljZUl0ZW1zOiAocHJvcGVydHlJZCkgPT4gKHtcbiAgICB0eXBlOiBwcm9wZXJ0eUFjdGlvbnMuR0VUX1BSSUNFX0lURU1TX1JFUVVFU1QsXG4gICAgcHJvcGVydHlJZCxcbiAgfSksXG4gIGNyZWF0ZVByaWNlSXRlbTogKHByaWNpbmcsIGRpc3BhdGNoKSA9PiAoe1xuICAgIHR5cGU6IHByb3BlcnR5QWN0aW9ucy5DUkVBVEVfUFJJQ0VfSVRFTV9SRVFVRVNULFxuICAgIHByaWNpbmcsXG4gIH0pLFxufTtcbmV4cG9ydCBkZWZhdWx0IHByb3BlcnR5QWN0aW9ucztcbiIsImltcG9ydCBwcm9wZXJ0eUFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gICAgaXRlbXM6IFtdLFxuICAgIHNlbGVjdGVkSXRlbTogXCJcIixcbiAgICBlcnJvcjogXCJcIixcbiAgICBsb2FkaW5nOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb3BlcnRpZXNSZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIC8vIExpc3RcbiAgICAgICAgY2FzZSBwcm9wZXJ0eUFjdGlvbnMuR0VUX0FMTF9QUk9QRVJUSUVTX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBwcm9wZXJ0eUFjdGlvbnMuR0VUX0FMTF9QUk9QRVJUSUVTX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIHByb3BlcnR5QWN0aW9ucy5HRVRfQUxMX1BST1BFUlRJRVNfRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIC8vIEdldCBvbmVcbiAgICAgICAgY2FzZSBwcm9wZXJ0eUFjdGlvbnMuR0VUX1BST1BFUlRZX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIHByb3BlcnR5QWN0aW9ucy5HRVRfUFJPUEVSVFlfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBhY3Rpb24uaXRlbSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgcHJvcGVydHlBY3Rpb25zLkdFVF9QUk9QRVJUWV9GQUlMVVJFOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLmVycm9yLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgLy8gQWRkXG4gICAgICAgIGNhc2UgcHJvcGVydHlBY3Rpb25zLkFERF9QUk9QRVJUWV9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBwcm9wZXJ0eUFjdGlvbnMuQUREX1BST1BFUlRZX1NVQ0NFU1M6XG4gICAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5pdGVtKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbTogYWN0aW9uLml0ZW0sXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIHByb3BlcnR5QWN0aW9ucy5BRERfUFJPUEVSVFlfRkFJTFVSRTpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgLy8gVXBkYXRlXG4gICAgICAgIGNhc2UgcHJvcGVydHlBY3Rpb25zLlVQREFURV9QUk9QRVJUWV9SRVFVRVNUOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBwcm9wZXJ0eUFjdGlvbnMuVVBEQVRFX1BST1BFUlRZX1NVQ0NFU1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGl0ZW1zOiBzdGF0ZS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPT09IGFjdGlvbi5pdGVtLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gYWN0aW9uLml0ZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW06IGFjdGlvbi5pdGVtLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBwcm9wZXJ0eUFjdGlvbnMuVVBEQVRFX1BST1BFUlRZX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAvLyBEZWxldGVcbiAgICAgICAgY2FzZSBwcm9wZXJ0eUFjdGlvbnMuREVMRVRFX1BST1BFUlRZX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIHByb3BlcnR5QWN0aW9ucy5ERUxFVEVfUFJPUEVSVFlfU1VDQ0VTUzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnByb3BlcnR5SWQpLFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBwcm9wZXJ0eUFjdGlvbnMuREVMRVRFX1BST1BFUlRZX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIHByb3BlcnR5QWN0aW9ucy5HRVRfUFJJQ0VfSVRFTVNfUkVRVUVTVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgcHJvcGVydHlBY3Rpb25zLkdFVF9QUklDRV9JVEVNU19TVUNDRVNTOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW06IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUuc2VsZWN0ZWRJdGVtLFxuICAgICAgICAgICAgICAgICAgICBwcmljaW5nSXRlbXM6IGFjdGlvbi5pdGVtcyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBwcm9wZXJ0eUFjdGlvbnMuR0VUX1BSSUNFX0lURU1TX0ZBSUxVUkU6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBhbGwsXG4gICAgdGFrZUV2ZXJ5LFxuICAgIGZvcmssXG4gICAgdGFrZUxhdGVzdCxcbiAgICBjYWxsLFxuICAgIHB1dCxcbn0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xuaW1wb3J0IGFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xuaW1wb3J0IHtub3RpZmljYXRpb259IGZyb20gXCJAaXNvL2NvbXBvbmVudHNcIjtcbmltcG9ydCBwcm9wZXJ0eUFwaSBmcm9tIFwiLi4vLi4vc2VydmljZS9wcm9wZXJ0eUFwaVwiO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24qIGdldEFsbFByb3BlcnRpZXMoKSB7XG4gICAgeWllbGQgdGFrZUxhdGVzdChhY3Rpb25zLkdFVF9BTExfUFJPUEVSVElFU19SRVFVRVNULCBmdW5jdGlvbiogKCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbChwcm9wZXJ0eUFwaS5nZXRBbGwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJfX190cnlcIiwgcmVzKTtcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfQUxMX1BST1BFUlRJRVNfU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICBpdGVtczogcmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIl9fX2NhdGNoXCIsIGVycm9yKTtcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfQUxMX1BST1BFUlRJRVNfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogZ2V0UHJvcGVydHkoKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuR0VUX1BST1BFUlRZX1JFUVVFU1QsIGZ1bmN0aW9uKiAocGF5bG9hZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbChwcm9wZXJ0eUFwaS5nZXRPbmUsIHBheWxvYWQucHJvcGVydHlJZCk7XG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuR0VUX1BST1BFUlRZX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgaXRlbTogcmVzLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3dhcm5pbmcnLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkdFVF9QUk9QRVJUWV9GQUlMVVJFLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBhZGRQcm9wZXJ0eSgpIHtcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5BRERfUFJPUEVSVFlfUkVRVUVTVCwgZnVuY3Rpb24qIChwYXlsb2FkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKHByb3BlcnR5QXBpLmFkZCwgcGF5bG9hZC5wcm9wZXJ0eSk7XG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3N1Y2Nlc3MnLCAnTmV3IFByb3BlcnR5IGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5JylcblxuICAgICAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkFERF9QUk9QRVJUWV9TVUNDRVNTLFxuICAgICAgICAgICAgICAgIGl0ZW06IHJlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCd3YXJuaW5nJywgZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5BRERfUFJPUEVSVFlfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogdXBkYXRlUHJvcGVydHkoKSB7XG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuVVBEQVRFX1BST1BFUlRZX1JFUVVFU1QsIGZ1bmN0aW9uKiAocGF5bG9hZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbChwcm9wZXJ0eUFwaS51cGRhdGUsIHBheWxvYWQucHJvcGVydHkpO1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCdzdWNjZXNzJywgJ1Byb3BlcnR5IGhhcyBiZWVuIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5JylcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5VUERBVEVfUFJPUEVSVFlfU1VDQ0VTUyxcbiAgICAgICAgICAgICAgICBpdGVtOiByZXMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignd2FybmluZycsIGVycm9yLm1lc3NhZ2UpXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuVVBEQVRFX1BST1BFUlRZX0ZBSUxVUkUsXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24qIGRlbGV0ZVByb3BlcnR5KCkge1xuICAgIHlpZWxkIHRha2VFdmVyeShhY3Rpb25zLkRFTEVURV9QUk9QRVJUWV9SRVFVRVNULCBmdW5jdGlvbiogKHBheWxvYWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHlpZWxkIGNhbGwocHJvcGVydHlBcGkuZGVsZXRlLCBwYXlsb2FkLnByb3BlcnR5SWQpO1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCdzdWNjZXNzJywgJ1Byb3BlcnR5IGhhcyBiZWVuIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5JylcblxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9hZG1pbi9wcm9wZXJ0eScpXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuREVMRVRFX1BST1BFUlRZX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlJZDogcGF5bG9hZC5wcm9wZXJ0eUlkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3dhcm5pbmcnLCBlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9QUk9QRVJUWV9GQUlMVVJFLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uKiBnZXRQcmljZUl0ZW1zKCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QoYWN0aW9ucy5HRVRfUFJJQ0VfSVRFTVNfUkVRVUVTVCwgZnVuY3Rpb24qIChwYXlsb2FkKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKHByb3BlcnR5QXBpLmdldFByaWNlSXRlbXMsIHBheWxvYWQucHJvcGVydHlJZCk7XG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuR0VUX1BSSUNFX0lURU1TX1NVQ0NFU1MsXG4gICAgICAgICAgICAgICAgaXRlbXM6IHJlcyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCd3YXJuaW5nJywgZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfUFJJQ0VfSVRFTVNfRkFJTFVSRSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiogY3JlYXRlUHJpY2VJdGVtKCkge1xuICAgIHlpZWxkIHRha2VMYXRlc3QoYWN0aW9ucy5DUkVBVEVfUFJJQ0VfSVRFTV9SRVFVRVNULCBmdW5jdGlvbiogKHBheWxvYWQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwocHJvcGVydHlBcGkuY3JlYXRlUHJpY2VJdGVtLCBwYXlsb2FkLnByaWNpbmcpO1xuICAgICAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkNSRUFURV9QUklDRV9JVEVNX1NVQ0NFU1MsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignc3VjY2VzcycsICdQcmljaW5nIGl0ZW0gY3JlYXRlZCcpXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuR0VUX1BSSUNFX0lURU1TX1JFUVVFU1QsXG4gICAgICAgICAgICAgICAgcHJvcGVydHlJZDogcGF5bG9hZC5wcmljaW5nLnByb3BlcnR5XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCd3YXJuaW5nJywgZXJyb3IubWVzc2FnZSlcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5DUkVBVEVfUFJJQ0VfSVRFTV9GQUlMVVJFLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICAgIHlpZWxkIGFsbChbXG4gICAgICAgIGNhbGwoZ2V0QWxsUHJvcGVydGllcyksXG4gICAgICAgIGZvcmsoZ2V0UHJvcGVydHkpLFxuICAgICAgICBmb3JrKGFkZFByb3BlcnR5KSxcbiAgICAgICAgZm9yayh1cGRhdGVQcm9wZXJ0eSksXG4gICAgICAgIGZvcmsoZGVsZXRlUHJvcGVydHkpLFxuICAgICAgICBmb3JrKGdldFByaWNlSXRlbXMpLFxuICAgICAgICBmb3JrKGNyZWF0ZVByaWNlSXRlbSksXG4gICAgXSk7XG59XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCBBdXRoIGZyb20gXCIuL2F1dGhlbnRpY2F0aW9uL3JlZHVjZXJcIjtcbmltcG9ydCBBcHAgZnJvbSBcIkBpc28vcmVkdXgvYXBwL3JlZHVjZXJcIjtcbmltcG9ydCBDb250YWN0cyBmcm9tIFwiQGlzby9yZWR1eC9jb250YWN0cy9yZWR1Y2VyXCI7XG5pbXBvcnQgVGhlbWVTd2l0Y2hlciBmcm9tIFwiQGlzby9yZWR1eC90aGVtZVN3aXRjaGVyL3JlZHVjZXJcIjtcbmltcG9ydCBMYW5ndWFnZVN3aXRjaGVyIGZyb20gXCJAaXNvL3JlZHV4L2xhbmd1YWdlU3dpdGNoZXIvcmVkdWNlclwiO1xuaW1wb3J0IG1vZGFsIGZyb20gXCJAaXNvL3JlZHV4L21vZGFsL3JlZHVjZXJcIjtcbmltcG9ydCBxdWl6IGZyb20gXCJAaXNvL3JlZHV4L3F1aXovcmVkdWNlclwiO1xuaW1wb3J0IHByb2ZpbGUgZnJvbSBcIkBpc28vcmVkdXgvcHJvZmlsZS9yZWR1Y2VyXCI7XG5pbXBvcnQgVXNlcnMgZnJvbSBcIkByZWR1eC91c2Vycy9yZWR1Y2VyXCI7XG5pbXBvcnQgUHJvcGVydGllcyBmcm9tIFwiQHJlZHV4L3Byb3BlcnRpZXMvcmVkdWNlclwiO1xuaW1wb3J0IENhdGVnb3JpZXMgZnJvbSBcIkByZWR1eC9jYXRlZ29yaWVzL3JlZHVjZXJcIjtcbmltcG9ydCBBbWVuaXRpZXMgZnJvbSBcIkByZWR1eC9hbWVuaXRpZXMvcmVkdWNlclwiO1xuaW1wb3J0IFBvc3RzIGZyb20gXCJAcmVkdXgvcG9zdHMvcmVkdWNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBBdXRoLFxuICBBcHAsXG4gIFRoZW1lU3dpdGNoZXIsXG4gIExhbmd1YWdlU3dpdGNoZXIsXG4gIFVzZXJzLFxuICBQcm9wZXJ0aWVzLFxuICBBbWVuaXRpZXMsXG4gIENhdGVnb3JpZXMsXG4gIFBvc3RzLFxuICBDb250YWN0cyxcbiAgbW9kYWwsXG4gIHF1aXosXG4gIHByb2ZpbGUsXG59KTtcbiIsImltcG9ydCB7IGFsbCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBhdXRoU2FnYXMgZnJvbSBcIkByZWR1eC9hdXRoZW50aWNhdGlvbi9zYWdhc1wiO1xuaW1wb3J0IHVzZXJTYWdhcyBmcm9tIFwiQHJlZHV4L3VzZXJzL3NhZ2FcIjtcbmltcG9ydCBwcm9wZXJ0eVNhZ2FzIGZyb20gXCJAcmVkdXgvcHJvcGVydGllcy9zYWdhXCI7XG5pbXBvcnQgYW1lbml0eVNhZ2FzIGZyb20gXCJAcmVkdXgvYW1lbml0aWVzL3NhZ2FcIjtcbmltcG9ydCBjYXRlZ29yeVNhZ2FzIGZyb20gXCJAcmVkdXgvY2F0ZWdvcmllcy9zYWdhXCI7XG5pbXBvcnQgcG9zdFNhZ2FzIGZyb20gXCJAcmVkdXgvcG9zdHMvc2FnYVwiO1xuaW1wb3J0IGNvbnRhY3RTYWdhcyBmcm9tIFwiQGlzby9yZWR1eC9jb250YWN0cy9zYWdhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYShnZXRTdGF0ZSkge1xuICB5aWVsZCBhbGwoW1xuICAgIGF1dGhTYWdhcygpLFxuICAgIHVzZXJTYWdhcygpLFxuICAgIHByb3BlcnR5U2FnYXMoKSxcbiAgICBhbWVuaXR5U2FnYXMoKSxcbiAgICBjYXRlZ29yeVNhZ2FzKCksXG4gICAgcG9zdFNhZ2FzKCksXG4gICAgY29udGFjdFNhZ2FzKCksXG4gIF0pO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gXCJyZWR1eFwiO1xuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlLCB7IEVORCB9IGZyb20gXCJyZWR1eC1zYWdhXCI7XG5pbXBvcnQgbG9nZ2VyIGZyb20gXCJyZWR1eC1sb2dnZXJcIjtcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcblxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3Jvb3QtcmVkdWNlclwiO1xuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuL3Jvb3Qtc2FnYVwiO1xuXG5jb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmUpID0+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgIGNvbnN0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9ID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTtcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xuICB9XG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XG59O1xuXG5mdW5jdGlvbiBjb25maWd1cmVTdG9yZShpbml0aWFsU3RhdGUgPSB7fSkge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIHJvb3RSZWR1Y2VyLFxuXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIGJpbmRNaWRkbGV3YXJlKFt0aHVuaywgbG9nZ2VyLCBzYWdhTWlkZGxld2FyZV0pXG4gICk7XG5cbiAgc3RvcmUucnVuU2FnYSA9ICgpID0+IHtcbiAgICAvLyBBdm9pZCBydW5uaW5nIHR3aWNlXG4gICAgaWYgKHN0b3JlLnNhZ2EpIHJldHVybjtcbiAgICBzdG9yZS5zYWdhID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcbiAgfTtcblxuICBzdG9yZS5zdG9wU2FnYSA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBBdm9pZCBydW5uaW5nIHR3aWNlXG4gICAgaWYgKCFzdG9yZS5zYWdhKSByZXR1cm47XG4gICAgc3RvcmUuZGlzcGF0Y2goRU5EKTtcbiAgICBhd2FpdCBzdG9yZS5zYWdhLmRvbmU7XG4gICAgc3RvcmUuc2FnYSA9IG51bGw7XG4gIH07XG5cbiAgc3RvcmUuZXhlY1NhZ2FUYXNrcyA9IGFzeW5jIChpc1NlcnZlciwgdGFza3MpID0+IHtcbiAgICAvLyBydW4gc2FnYVxuICAgIHN0b3JlLnJ1blNhZ2EoKTtcbiAgICAvLyBkaXNwYXRjaCBzYWdhIHRhc2tzXG4gICAgdGFza3Moc3RvcmUuZGlzcGF0Y2gpO1xuICAgIC8vIFN0b3AgcnVubmluZyBhbmQgd2FpdCBmb3IgdGhlIHRhc2tzIHRvIGJlIGRvbmVcbiAgICBhd2FpdCBzdG9yZS5zdG9wU2FnYSgpO1xuICAgIC8vIFJlLXJ1biBvbiBjbGllbnQgc2lkZVxuICAgIGlmICghaXNTZXJ2ZXIpIHtcbiAgICAgIHN0b3JlLnJ1blNhZ2EoKTtcbiAgICB9XG4gIH07XG5cbiAgLy8gSW5pdGlhbCBydW5cbiAgc3RvcmUucnVuU2FnYSgpO1xuXG4gIHJldHVybiBzdG9yZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29uZmlndXJlU3RvcmU7XG4iLCJjb25zdCB1c2VyQWN0aW9ucyA9IHtcclxuICAgIEdFVF9BTExfVVNFUlNfUkVRVUVTVDogJ0dFVF9BTExfVVNFUlNfUkVRVUVTVCcsXHJcbiAgICBHRVRfQUxMX1VTRVJTX1NVQ0NFU1M6ICdHRVRfQUxMX1VTRVJTX1NVQ0NFU1MnLFxyXG4gICAgR0VUX0FMTF9VU0VSU19GQUlMVVJFOiAnR0VUX0FMTF9VU0VSU19GQUlMVVJFJyxcclxuICAgIEdFVF9VU0VSX1JFUVVFU1Q6IFwiR0VUX1VTRVJfUkVRVUVTVFwiLFxyXG4gICAgR0VUX1VTRVJfU1VDQ0VTUzogXCJHRVRfVVNFUl9TVUNDRVNTXCIsXHJcbiAgICBHRVRfVVNFUl9GQUlMVVJFOiBcIkdFVF9VU0VSX0ZBSUxVUkVcIixcclxuICAgIEFERF9VU0VSX1JFUVVFU1Q6IFwiQUREX1VTRVJfUkVRVUVTVFwiLFxyXG4gICAgQUREX1VTRVJfU1VDQ0VTUzogXCJBRERfVVNFUl9TVUNDRVNTXCIsXHJcbiAgICBBRERfVVNFUl9GQUlMVVJFOiBcIkFERF9VU0VSX0ZBSUxVUkVcIixcclxuICAgIFVQREFURV9VU0VSX1JFUVVFU1Q6IFwiVVBEQVRFX1VTRVJfUkVRVUVTVFwiLFxyXG4gICAgVVBEQVRFX1VTRVJfU1VDQ0VTUzogXCJVUERBVEVfVVNFUl9TVUNDRVNTXCIsXHJcbiAgICBVUERBVEVfVVNFUl9GQUlMVVJFOiBcIlVQREFURV9VU0VSX0ZBSUxVUkVcIixcclxuICAgIERFTEVURV9VU0VSX1JFUVVFU1Q6IFwiREVMRVRFX1VTRVJfUkVRVUVTVFwiLFxyXG4gICAgREVMRVRFX1VTRVJfU1VDQ0VTUzogXCJERUxFVEVfVVNFUl9TVUNDRVNTXCIsXHJcbiAgICBERUxFVEVfVVNFUl9GQUlMVVJFOiBcIkRFTEVURV9VU0VSX0ZBSUxVUkVcIixcclxuICAgIGdldEFsbFVzZXJzOiAoKSA9PiAoe1xyXG4gICAgICAgIHR5cGU6IHVzZXJBY3Rpb25zLkdFVF9BTExfVVNFUlNfUkVRVUVTVCxcclxuICAgIH0pLFxyXG4gICAgZ2V0VXNlcjogKHVzZXJJZCkgPT4gKHtcclxuICAgICAgICB0eXBlOiB1c2VyQWN0aW9ucy5HRVRfVVNFUl9SRVFVRVNULFxyXG4gICAgICAgIHVzZXJJZCxcclxuICAgIH0pLFxyXG4gICAgYWRkVXNlcjogKG5ld1VzZXIpID0+ICh7XHJcbiAgICAgICAgdHlwZTogdXNlckFjdGlvbnMuQUREX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICB1c2VyOiBuZXdVc2VyLFxyXG4gICAgfSksXHJcbiAgICB1cGRhdGVVc2VyOiAobmV3VXNlcikgPT4gKHtcclxuICAgICAgICB0eXBlOiB1c2VyQWN0aW9ucy5VUERBVEVfVVNFUl9SRVFVRVNULFxyXG4gICAgICAgIHVzZXI6IG5ld1VzZXIsXHJcbiAgICB9KSxcclxuICAgIGRlbGV0ZVVzZXI6ICh1c2VySWQpID0+ICh7XHJcbiAgICAgICAgdHlwZTogdXNlckFjdGlvbnMuREVMRVRFX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICB1c2VySWQsXHJcbiAgICB9KSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJBY3Rpb25zO1xyXG4iLCJpbXBvcnQgdXNlckFjdGlvbnMgZnJvbSBcIi4vYWN0aW9uc1wiO1xyXG5cclxuY29uc3QgaW5pdFN0YXRlID0ge1xyXG4gICAgaXRlbXM6IFtdLFxyXG4gICAgc2VsZWN0ZWRJdGVtOiBcIlwiLFxyXG4gICAgZXJyb3I6IFwiXCIsXHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb3BlcnRpZXNSZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAvLyBMaXN0XHJcbiAgICAgICAgY2FzZSB1c2VyQWN0aW9ucy5HRVRfQUxMX1VTRVJTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSB1c2VyQWN0aW9ucy5HRVRfQUxMX1VTRVJTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBhY3Rpb24uaXRlbXMsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBjYXNlIHVzZXJBY3Rpb25zLkdFVF9BTExfVVNFUlNfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBHZXQgb25lXHJcbiAgICAgICAgY2FzZSB1c2VyQWN0aW9ucy5HRVRfVVNFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgdXNlckFjdGlvbnMuR0VUX1VTRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBhY3Rpb24uaXRlbSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgdXNlckFjdGlvbnMuR0VUX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBBZGRcclxuICAgICAgICBjYXNlIHVzZXJBY3Rpb25zLkFERF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSB1c2VyQWN0aW9ucy5BRERfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICBzdGF0ZS5pdGVtcy5wdXNoKGFjdGlvbi5pdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IHN0YXRlLml0ZW1zLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBhY3Rpb24uaXRlbSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgdXNlckFjdGlvbnMuQUREX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBVcGRhdGVcclxuICAgICAgICBjYXNlIHVzZXJBY3Rpb25zLlVQREFURV9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSB1c2VyQWN0aW9ucy5VUERBVEVfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID09PSBhY3Rpb24uaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLml0ZW1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtOiBhY3Rpb24uaXRlbSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgdXNlckFjdGlvbnMuVVBEQVRFX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEZWxldGVcclxuICAgICAgICBjYXNlIHVzZXJBY3Rpb25zLkRFTEVURV9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSB1c2VyQWN0aW9ucy5ERUxFVEVfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogc3RhdGUuaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBhY3Rpb24udXNlcklkKSxcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIGNhc2UgdXNlckFjdGlvbnMuREVMRVRFX1VTRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHthbGwsIHRha2VFdmVyeSwgZm9yaywgdGFrZUxhdGVzdCwgY2FsbCwgcHV0fSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xyXG5pbXBvcnQge25vdGlmaWNhdGlvbn0gZnJvbSBcIkBpc28vY29tcG9uZW50c1wiO1xyXG5pbXBvcnQgdXNlckFwaSBmcm9tIFwiLi4vLi4vc2VydmljZS91c2VyQXBpXCI7XHJcbmltcG9ydCB7Um91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0QWxsVXNlcnMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KGFjdGlvbnMuR0VUX0FMTF9VU0VSU19SRVFVRVNULCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwodXNlckFwaS5nZXRBbGwpO1xyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfQUxMX1VTRVJTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogcmVzLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3dhcm5pbmcnLCBlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5HRVRfQUxMX1VTRVJTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogZ2V0VXNlcigpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShhY3Rpb25zLkdFVF9VU0VSX1JFUVVFU1QsIGZ1bmN0aW9uKiAocGF5bG9hZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwodXNlckFwaS5nZXRPbmUsIHBheWxvYWQudXNlcklkKTtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuR0VUX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgICAgIGl0ZW06IHJlc1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IGFjdGlvbnMuR0VUX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJvci5tZXNzYWdlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uKiBhZGRVc2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuQUREX1VTRVJfUkVRVUVTVCwgZnVuY3Rpb24qIChwYXlsb2FkKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0geWllbGQgY2FsbCh1c2VyQXBpLmFkZCwgcGF5bG9hZC51c2VyKTtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uKCdzdWNjZXNzJywgJ05ldyB1c2VyIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5IScpXHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkFERF9VU0VSX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBpdGVtOiByZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignd2FybmluZycsIGVycm9yLm1lc3NhZ2UpXHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkFERF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogdXBkYXRlVXNlcigpIHtcclxuICAgIHlpZWxkIHRha2VFdmVyeShhY3Rpb25zLlVQREFURV9VU0VSX1JFUVVFU1QsIGZ1bmN0aW9uKiAocGF5bG9hZCkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IHlpZWxkIGNhbGwodXNlckFwaS51cGRhdGUsIHBheWxvYWQudXNlcik7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignc3VjY2VzcycsICdVc2VyIGhhcyBiZWVuIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5IScpXHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLlVQREFURV9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBpdGVtOiByZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3dhcm5pbmcnLCBlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5VUERBVEVfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGRlbGV0ZVVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5ERUxFVEVfVVNFUl9SRVFVRVNULCBmdW5jdGlvbiogKHBheWxvYWQpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBjYWxsKHVzZXJBcGkuZGVsZXRlLCBwYXlsb2FkLnVzZXJJZCk7XHJcbiAgICAgICAgICAgIG5vdGlmaWNhdGlvbignc3VjY2VzcycsICdVc2VyIGhhcyBiZWVuIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5IScpXHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvYWRtaW4vdXNlcicpXHJcbiAgICAgICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBhY3Rpb25zLkRFTEVURV9VU0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgICAgICBpdGVtOiByZXNcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24oJ3dhcm5pbmcnLCBlcnJvci5tZXNzYWdlKVxyXG4gICAgICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9ucy5VUERBVEVfVVNFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW2NhbGwoZ2V0QWxsVXNlcnMpLCBmb3JrKGdldFVzZXIpLCBmb3JrKGFkZFVzZXIpLCBmb3JrKHVwZGF0ZVVzZXIpLCBmb3JrKGRlbGV0ZVVzZXIpXSk7XHJcbn1cclxuIiwiaW1wb3J0IHtCQUNLRU5EX1VSTH0gZnJvbSBcIi4uL2Vudi1jb25maWdcIjtcclxuaW1wb3J0IHtnZXRDb29raWV9IGZyb20gXCJAcmVkdXgvYXV0aGVudGljYXRpb24vYXV0aC51dGlsc1wiO1xyXG5cclxuY29uc3QgYW1lbml0eUFwaSA9IHtcclxuICAgIGdldEFsbDogYXN5bmMgKCkgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2FjY29tbW9kYXRpb24vYW1lbml0eS9gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpLFxyXG5cclxuICAgIGdldE9uZTogYXN5bmMgKGlkKSA9PiBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2FjY29tbW9kYXRpb24vYW1lbml0eS8ke2lkfS9gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKSxcclxuXHJcbiAgICBhZGQ6IGFzeW5jIChhbWVuaXR5KSA9PlxyXG4gICAgICAgIGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9hcGkvYWNjb21tb2RhdGlvbi9hbWVuaXR5L2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFtZW5pdHkpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IHJlcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKSxcclxuXHJcbiAgICB1cGRhdGU6IGFzeW5jIChhbWVuaXR5KSA9PlxyXG4gICAgICAgIGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9hcGkvYWNjb21tb2RhdGlvbi9hbWVuaXR5LyR7YW1lbml0eS5pZH0vYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFtZW5pdHkpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IHJlcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKSxcclxuXHJcbiAgICBkZWxldGU6IGFzeW5jIChhbWVuaXR5SWQpID0+XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS9hY2NvbW1vZGF0aW9uL2FtZW5pdHkvJHthbWVuaXR5SWR9L2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVFcnJvciA9IChyZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiX19faGFuZGxlRXJyb3JfX19cIiwgcmVzKVxyXG4gICAgaWYgKHJlcyBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoKTtcclxuICAgIC8vIHJlcy5qc29uKCkudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAvLyAgICAgZXJyb3IgPSB7XHJcbiAgICAvLyAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcclxuICAgIC8vICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAvLyAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlSnNvbi5kZXRhaWwgfHwgJ0FwcGxpY2F0aW9uIEVycm9yJ1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aHJvdyBlcnJvclxyXG4gICAgLy8gfSlcclxuICAgIGlmIChyZXMuc3RhdHVzID49IDQwMCAmJiByZXMuc3RhdHVzIDwgNTAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRleHQoKSlcclxuICAgICAgICBlcnJvciA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxyXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgbWVzc2FnZTogcmVzLmRldGFpbCB8fCAnQXBwbGljYXRpb24gRXJyb3InXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gNTAwKSB7XHJcbiAgICAgICAgZXJyb3IgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcclxuICAgICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlcy5kZXRhaWwgfHwgJ1NlcnZlciBFcnJvcidcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuXHJcbiAgICBlcnJvciA9IHtcclxuICAgICAgICAuLi5lcnJvcixcclxuICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXHJcbiAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAgICAgbWVzc2FnZTogcmVzLmRldGFpbCB8fCAnRXJyb3InXHJcbiAgICB9XHJcbiAgICB0aHJvdyBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbWVuaXR5QXBpIiwiaW1wb3J0IHtCQUNLRU5EX1VSTH0gZnJvbSBcIi4uL2Vudi1jb25maWdcIjtcclxuaW1wb3J0IHtnZXRDb29raWV9IGZyb20gXCJAcmVkdXgvYXV0aGVudGljYXRpb24vYXV0aC51dGlsc1wiO1xyXG5cclxuY29uc3QgY2F0ZWdvcnlBcGkgPSB7XHJcbiAgICBnZXRBbGw6IGFzeW5jICgpID0+XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS9hY2NvbW1vZGF0aW9uL2NhdGVnb3J5L2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcblxyXG4gICAgZ2V0T25lOiBhc3luYyAoaWQpID0+IGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9hcGkvYWNjb21tb2RhdGlvbi9jYXRlZ29yeS8ke2lkfS9gLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgcmVzO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKSxcclxuXHJcbiAgICBhZGQ6IGFzeW5jIChjYXRlZ29yeSkgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2FjY29tbW9kYXRpb24vY2F0ZWdvcnkvYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoY2F0ZWdvcnkpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IHJlcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKSxcclxuXHJcbiAgICB1cGRhdGU6IGFzeW5jIChjYXRlZ29yeSkgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2FjY29tbW9kYXRpb24vY2F0ZWdvcnkvJHtjYXRlZ29yeS5pZH0vYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhdGVnb3J5KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcblxyXG4gICAgZGVsZXRlOiBhc3luYyAoY2F0ZWdvcnlJZCkgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2FjY29tbW9kYXRpb24vY2F0ZWdvcnkvJHtjYXRlZ29yeUlkfS9gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpLFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlRXJyb3IgPSAocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIl9fX2hhbmRsZUVycm9yX19fXCIsIHJlcylcclxuICAgIGlmIChyZXMgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgIHRocm93IEVycm9yKCdOZXR3b3JrIGVycm9yJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKCk7XHJcbiAgICAvLyByZXMuanNvbigpLnRoZW4oKHJlc3BvbnNlSnNvbikgPT4ge1xyXG4gICAgLy8gICAgIGVycm9yID0ge1xyXG4gICAgLy8gICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXHJcbiAgICAvLyAgICAgICAgIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNUZXh0LFxyXG4gICAgLy8gICAgICAgICBtZXNzYWdlOiByZXNwb25zZUpzb24uZGV0YWlsIHx8ICdBcHBsaWNhdGlvbiBFcnJvcidcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhyb3cgZXJyb3JcclxuICAgIC8vIH0pXHJcbiAgICBpZiAocmVzLnN0YXR1cyA+PSA0MDAgJiYgcmVzLnN0YXR1cyA8IDUwMCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZXh0KCkpXHJcbiAgICAgICAgZXJyb3IgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcclxuICAgICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlcy5kZXRhaWwgfHwgJ0FwcGxpY2F0aW9uIEVycm9yJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgfVxyXG5cclxuICAgIGlmIChyZXMuc3RhdHVzID49IDUwMCkge1xyXG4gICAgICAgIGVycm9yID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXMuZGV0YWlsIHx8ICdTZXJ2ZXIgRXJyb3InXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgZXJyb3IgPSB7XHJcbiAgICAgICAgLi4uZXJyb3IsXHJcbiAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxyXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNUZXh0LFxyXG4gICAgICAgIG1lc3NhZ2U6IHJlcy5kZXRhaWwgfHwgJ0Vycm9yJ1xyXG4gICAgfVxyXG4gICAgdGhyb3cgZXJyb3JcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0ZWdvcnlBcGkiLCJpbXBvcnQge0JBQ0tFTkRfVVJMfSBmcm9tIFwiLi4vZW52LWNvbmZpZ1wiO1xyXG5pbXBvcnQge2dldENvb2tpZX0gZnJvbSBcIkByZWR1eC9hdXRoZW50aWNhdGlvbi9hdXRoLnV0aWxzXCI7XHJcblxyXG5jb25zdCBwb3N0QXBpID0ge1xyXG4gICAgZ2V0QWxsOiBhc3luYyAoKSA9PlxyXG4gICAgICAgIGF3YWl0IGZldGNoKGAke0JBQ0tFTkRfVVJMfS9hcGkvY29udGVudC9gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpLFxyXG5cclxuICAgIGdldE9uZTogYXN5bmMgKGlkKSA9PiBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2NvbnRlbnQvJHtpZH0vYCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlcztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcblxyXG4gICAgYWRkOiBhc3luYyAocG9zdCkgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2NvbnRlbnQvYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocG9zdCksXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpLFxyXG5cclxuICAgIHVwZGF0ZTogYXN5bmMgKHBvc3QpID0+XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS9jb250ZW50LyR7cG9zdC5pZH0vYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3QpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IHJlcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKSxcclxuXHJcbiAgICBkZWxldGU6IGFzeW5jIChwb3N0SWQpID0+XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS9jb250ZW50LyR7cG9zdElkfS9gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpLFxyXG59O1xyXG5cclxuY29uc3QgaGFuZGxlRXJyb3IgPSAocmVzKSA9PiB7XHJcbiAgICBpZiAocmVzIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcignTmV0d29yayBlcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcigpO1xyXG4gICAgLy8gcmVzLmpzb24oKS50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgIC8vICAgICBlcnJvciA9IHtcclxuICAgIC8vICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxyXG4gICAgLy8gICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCxcclxuICAgIC8vICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VKc29uLmRldGFpbCB8fCAnQXBwbGljYXRpb24gRXJyb3InXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRocm93IGVycm9yXHJcbiAgICAvLyB9KVxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gNDAwICYmIHJlcy5zdGF0dXMgPCA1MDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGV4dCgpKVxyXG4gICAgICAgIGVycm9yID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXMuZGV0YWlsIHx8ICdBcHBsaWNhdGlvbiBFcnJvcidcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA+PSA1MDApIHtcclxuICAgICAgICBlcnJvciA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxyXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgbWVzc2FnZTogcmVzLmRldGFpbCB8fCAnU2VydmVyIEVycm9yJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgfVxyXG5cclxuICAgIGVycm9yID0ge1xyXG4gICAgICAgIC4uLmVycm9yLFxyXG4gICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcclxuICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCxcclxuICAgICAgICBtZXNzYWdlOiByZXMuZGV0YWlsIHx8ICdFcnJvcidcclxuICAgIH1cclxuICAgIHRocm93IGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RBcGkiLCJpbXBvcnQge0JBQ0tFTkRfVVJMfSBmcm9tIFwiLi4vZW52LWNvbmZpZ1wiO1xyXG5pbXBvcnQge2dldENvb2tpZX0gZnJvbSBcIkByZWR1eC9hdXRoZW50aWNhdGlvbi9hdXRoLnV0aWxzXCI7XHJcblxyXG5jb25zdCBwcm9wZXJ0eUFwaSA9IHtcclxuICAgIGdldEFsbDogYXN5bmMgKCkgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2FjY29tbW9kYXRpb24vcHJvcGVydHkvYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IHJlcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKSxcclxuXHJcbiAgICBnZXRPbmU6IGFzeW5jIChpZCkgPT4gYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS9hY2NvbW1vZGF0aW9uL3Byb3BlcnR5LyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcclxuICAgICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IHJlcztcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcblxyXG4gICAgYWRkOiBhc3luYyAocHJvcGVydHkpID0+XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS9hY2NvbW1vZGF0aW9uL3Byb3BlcnR5L2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByb3BlcnR5KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcblxyXG4gICAgdXBkYXRlOiBhc3luYyAocHJvcGVydHkpID0+XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS9hY2NvbW1vZGF0aW9uL3Byb3BlcnR5LyR7cHJvcGVydHkuaWR9YCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHByb3BlcnR5KSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcblxyXG4gICAgZGVsZXRlOiBhc3luYyAocHJvcGVydHlJZCkgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2FjY29tbW9kYXRpb24vcHJvcGVydHkvJHtwcm9wZXJ0eUlkfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0Q29va2llKFwidG9rZW5cIil9YCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcbiAgICBnZXRQcmljZUl0ZW1zOiBhc3luYyAocHJvcGVydHlJZCkgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChcclxuICAgICAgICAgICAgYCR7QkFDS0VORF9VUkx9L2FwaS9hY2NvbW1vZGF0aW9uL3ByaWNpbmcvZmlsdGVyZWRfbGlzdC8/cHJvcGVydHlfaWQ9JHtwcm9wZXJ0eUlkfWAsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpLFxyXG4gICAgY3JlYXRlUHJpY2VJdGVtOiBhc3luYyAocHJpY2luZykgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL2FjY29tbW9kYXRpb24vcHJpY2luZy9gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcmljaW5nKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVFcnJvciA9IChyZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiX19faGFuZGxlRXJyb3JfX19cIiwgcmVzKVxyXG4gICAgaWYgKHJlcyBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ05ldHdvcmsgZXJyb3InKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZXJyb3IgPSBuZXcgRXJyb3IoKTtcclxuICAgIC8vIHJlcy5qc29uKCkudGhlbigocmVzcG9uc2VKc29uKSA9PiB7XHJcbiAgICAvLyAgICAgZXJyb3IgPSB7XHJcbiAgICAvLyAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcclxuICAgIC8vICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAvLyAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlSnNvbi5kZXRhaWwgfHwgJ0FwcGxpY2F0aW9uIEVycm9yJ1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aHJvdyBlcnJvclxyXG4gICAgLy8gfSlcclxuICAgIGlmIChyZXMuc3RhdHVzID49IDQwMCAmJiByZXMuc3RhdHVzIDwgNTAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnRleHQoKSlcclxuICAgICAgICBlcnJvciA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxyXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgbWVzc2FnZTogcmVzLmRldGFpbCB8fCAnQXBwbGljYXRpb24gRXJyb3InXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gNTAwKSB7XHJcbiAgICAgICAgZXJyb3IgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcclxuICAgICAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlcy5kZXRhaWwgfHwgJ1NlcnZlciBFcnJvcidcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuXHJcbiAgICBlcnJvciA9IHtcclxuICAgICAgICAuLi5lcnJvcixcclxuICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXHJcbiAgICAgICAgc3RhdHVzVGV4dDogcmVzLnN0YXR1c1RleHQsXHJcbiAgICAgICAgbWVzc2FnZTogcmVzLmRldGFpbCB8fCAnRXJyb3InXHJcbiAgICB9XHJcbiAgICB0aHJvdyBlcnJvclxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcm9wZXJ0eUFwaSIsImltcG9ydCB7QkFDS0VORF9VUkx9IGZyb20gXCIuLi9lbnYtY29uZmlnXCI7XHJcbmltcG9ydCB7Z2V0Q29va2llfSBmcm9tIFwiQHJlZHV4L2F1dGhlbnRpY2F0aW9uL2F1dGgudXRpbHNcIjtcclxuXHJcbmNvbnN0IHVzZXJBcGkgPSB7XHJcbiAgICBnZXRBbGw6IGFzeW5jICgpID0+XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS91c2Vycy9gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMub2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgcmVzO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpLFxyXG5cclxuICAgIGdldE9uZTogYXN5bmMgKGlkKSA9PiBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL3VzZXJzLyR7aWR9L2AsIHtcclxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpLFxyXG5cclxuICAgIGFkZDogYXN5bmMgKHVzZXIpID0+XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS91c2Vycy9gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyByZXM7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChoYW5kbGVFcnJvciksXHJcblxyXG4gICAgdXBkYXRlOiBhc3luYyAodXNlcikgPT5cclxuICAgICAgICBhd2FpdCBmZXRjaChgJHtCQUNLRU5EX1VSTH0vYXBpL3VzZXJzLyR7dXNlci5pZH0vYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2dldENvb2tpZShcInRva2VuXCIpfWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IHJlcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKSxcclxuXHJcbiAgICBkZWxldGU6IGFzeW5jICh1c2VySWQpID0+XHJcbiAgICAgICAgYXdhaXQgZmV0Y2goYCR7QkFDS0VORF9VUkx9L2FwaS91c2Vycy8ke3VzZXJJZH0vYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRDb29raWUoXCJ0b2tlblwiKX1gLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRocm93IHJlcztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKSxcclxufTtcclxuXHJcbmNvbnN0IGhhbmRsZUVycm9yID0gKHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJfX19oYW5kbGVFcnJvcl9fX1wiLCByZXMpXHJcbiAgICBpZiAocmVzIGluc3RhbmNlb2YgRXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBFcnJvcignTmV0d29yayBlcnJvcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcigpO1xyXG4gICAgLy8gcmVzLmpzb24oKS50aGVuKChyZXNwb25zZUpzb24pID0+IHtcclxuICAgIC8vICAgICBlcnJvciA9IHtcclxuICAgIC8vICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxyXG4gICAgLy8gICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCxcclxuICAgIC8vICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2VKc29uLmRldGFpbCB8fCAnQXBwbGljYXRpb24gRXJyb3InXHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRocm93IGVycm9yXHJcbiAgICAvLyB9KVxyXG4gICAgaWYgKHJlcy5zdGF0dXMgPj0gNDAwICYmIHJlcy5zdGF0dXMgPCA1MDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGV4dCgpKVxyXG4gICAgICAgIGVycm9yID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6IHJlcy5zdGF0dXMsXHJcbiAgICAgICAgICAgIHN0YXR1c1RleHQ6IHJlcy5zdGF0dXNUZXh0LFxyXG4gICAgICAgICAgICBtZXNzYWdlOiByZXMuZGV0YWlsIHx8ICdBcHBsaWNhdGlvbiBFcnJvcidcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzLnN0YXR1cyA+PSA1MDApIHtcclxuICAgICAgICBlcnJvciA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiByZXMuc3RhdHVzLFxyXG4gICAgICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCxcclxuICAgICAgICAgICAgbWVzc2FnZTogcmVzLmRldGFpbCB8fCAnU2VydmVyIEVycm9yJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgfVxyXG5cclxuICAgIGVycm9yID0ge1xyXG4gICAgICAgIC4uLmVycm9yLFxyXG4gICAgICAgIHN0YXR1czogcmVzLnN0YXR1cyxcclxuICAgICAgICBzdGF0dXNUZXh0OiByZXMuc3RhdHVzVGV4dCxcclxuICAgICAgICBtZXNzYWdlOiByZXMuZGV0YWlsIHx8ICdFcnJvcidcclxuICAgIH1cclxuICAgIHRocm93IGVycm9yXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJBcGkiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWFYTnZMVGc0TlRrdE1TSS9QZzBLUENFdExTQkhaVzVsY21GMGIzSTZJRUZrYjJKbElFbHNiSFZ6ZEhKaGRHOXlJREU1TGpBdU1Dd2dVMVpISUVWNGNHOXlkQ0JRYkhWbkxVbHVJQzRnVTFaSElGWmxjbk5wYjI0NklEWXVNREFnUW5WcGJHUWdNQ2tnSUMwdFBnMEtQSE4yWnlCMlpYSnphVzl1UFNJeExqRWlJR2xrUFNKTVlYbGxjbDh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSU5DZ2tnZG1sbGQwSnZlRDBpTUNBd0lEZ3dNQ0E0TURBaUlITjBlV3hsUFNKbGJtRmliR1V0WW1GamEyZHliM1Z1WkRwdVpYY2dNQ0F3SURnd01DQTRNREE3SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5DanhuUGcwS0NUeHdZWFJvSUhOMGVXeGxQU0ptYVd4c09pTkZSREZHTXpRN0lpQmtQU0pOTWpRdU9EQTNMRFkwTmk0eE5sWXhOVE11T0RNNGFEYzFNQzR6T0RkMk5EQXhZekFzTmk0MU5qTXNOUzR6TkN3eE1TNDVNRE1zTVRFdU9UQXpMREV4TGprd00yZ3hkakkzTGpnd04yZ3RNUTBLQ1FsakxUWXVOVFl6TERBdE1URXVPVEF6TERVdU16UXRNVEV1T1RBekxERXhMamt3TW5Zek9TNDNNVWd5TkM0NE1EZDZJRTB5TnpNdU5ETTFMRFF6TlM0eE9HTXROQzQwT1RNc01DMDRMamN4Tnl3eExqYzFMVEV4TGpnNU5DdzBMamt5T0EwS0NRbGpMVE11TVRjM0xETXVNVGMyTFRRdU9USTJMRGN1TXprNUxUUXVPVEkyTERFeExqZzVNMk13TERRdU5Ea3lMREV1TnpVc09DNDNNVGNzTkM0NU1qWXNNVEV1T0RrMVl6TXVNVGMzTERNdU1UYzNMRGN1TkRBeExEUXVPVEkzTERFeExqZzVOQ3cwTGpreU53MEtDUWxqTkM0ME9USXNNQ3c0TGpjeE5pMHhMamMxTERFeExqZzVNeTAwTGpreU4yTXpMakUzTnkwekxqRTNPQ3cwTGpreU55MDNMalF3TWl3MExqa3lOeTB4TVM0NE9UVmpNQzAwTGpRNU15MHhMamMxTFRndU56RTNMVFF1T1RJM0xURXhMamc1TXcwS0NRbERNamd5TGpFMU1TdzBNell1T1RNc01qYzNMamt5Tnl3ME16VXVNVGdzTWpjekxqUXpOU3cwTXpVdU1UaDZJRTB5TURBdU5ESXNOREV4TGpZek5HTXhMamt6Tml3eExqSTJMRFF1TVRjNUxERXVPVEkyTERZdU5EZzVMREV1T1RJMkRRb0pDV015TGpVeU9Td3dMRFF1T1RRNUxUQXVOemczTERZdU9UazRMVEl1TWpjMVl6TXVPVFl5TFRJdU9EYzNMRFV1TnpjeExUY3VPVGc0TERRdU5TMHhNaTQzTVRsc0xURXhMams0TVMwME5DNDFPRFZzTXpVdU9EazRMVEk1TGpBeU53MEtDUWxqTXk0NE1EZ3RNeTR3Tnpnc05TNHpORGt0T0M0eU56WXNNeTQ0TXpZdE1USXVPVE0xY3kwMUxqZ3hOaTAzTGprMU9DMHhNQzQzTURjdE9DNHlNV3d0TkRZdU1UQTFMVEl1TXpneGJDMHhOaTQxTVRFdE5ETXVNVEV4RFFvSkNXTXRNUzQzTlRFdE5DNDFOek10Tmk0eU1Ua3ROeTQyTkRVdE1URXVNVEUyTFRjdU5qUTFjeTA1TGpNMk5Dd3pMakEzTWkweE1TNHhNVFlzTnk0Mk5EVnNMVEUyTGpVeE1TdzBNeTR4TVRGc0xUUTJMakV3TkN3eUxqTTRNUTBLQ1FsakxUUXVPRGt4TERBdU1qVXlMVGt1TVRrekxETXVOVFV5TFRFd0xqY3dOeXc0TGpJeFl5MHhMalV4TXl3MExqWTFPQ3d3TGpBeU9TdzVMamcxTlN3ekxqZ3pOaXd4TWk0NU16TnNNelV1T0RrNUxESTVMakF5TjJ3dE1URXVPVGd4TERRMExqVTROUTBLQ1FsakxURXVNamN4TERRdU56TXNNQzQxTXpnc09TNDROREVzTkM0MUxERXlMamN4T1dNeUxqQTBOeXd4TGpRNE55dzBMalEyTnl3eUxqSTNNeXcyTGprNU9Dd3lMakkzTTJNeUxqTXhMREFzTkM0MU5UUXRNQzQyTmpVc05pNDBPRGt0TVM0NU1qVnNNemd1TmprNUxUSTFMakUzTXcwS0NRbE1NakF3TGpReUxEUXhNUzQyTXpSNklFMHpNVFF1TXpFekxETTJOQzR6TlRSakxUY3VOVGc1TERBdE1UUXVNall6TERVdU1USTNMVEUyTGpJekxERXlMalEyT0dNdE1TNHhOak1zTkM0ek16a3RNQzQxTmpjc09DNDROekVzTVM0Mk56Z3NNVEl1TnpZTkNna0pZekl1TWpRMkxETXVPRGc1TERVdU9EY3pMRFl1TmpjeUxERXdMakl4TWl3M0xqZ3pOV014TGpRekxEQXVNemd6TERJdU9EazVMREF1TlRjNExEUXVNelkxTERBdU5UYzRZemN1TlRnNUxEQXNNVFF1TWpZMExUVXVNVEkzTERFMkxqSXpNUzB4TWk0ME5qZ05DZ2tKWXpJdU16azVMVGd1T1RVMkxUSXVPVE0xTFRFNExqRTVOUzB4TVM0NE9URXRNakF1TlRrMlF6TXhOeTR5TkRjc016WTBMalUwT1N3ek1UVXVOemM0TERNMk5DNHpOVFFzTXpFMExqTXhNeXd6TmpRdU16VTBlaUJOTXpFMExqTXpOQ3d5T0RJdU5UYzBEUW9KQ1dNdE1TNDBOallzTUMweUxqa3pOQ3d3TGpFNU5DMDBMak0yTkN3d0xqVTNPR010T0M0NU5UWXNNaTQwTURFdE1UUXVNamtzTVRFdU5qUXRNVEV1T0Rrc01qQXVOVGsyWXpFdU9UWTNMRGN1TXpRc09DNDJORElzTVRJdU5EWTNMREUyTGpJek15d3hNaTQwTmpjTkNna0pZekV1TkRZMUxEQXNNaTQ1TXpNdE1DNHhPVFFzTkM0ek5qTXRNQzQxTnpkak5DNHpNemt0TVM0eE5qSXNOeTQ1TmpVdE15NDVORFFzTVRBdU1qRXhMVGN1T0RNMGN6SXVPRFF5TFRndU5ESXlMREV1TmpjNUxURXlMamMyTWcwS0NRbERNekk0TGpVNU9Td3lPRGN1TnpBeExETXlNUzQ1TWpRc01qZ3lMalUzTkN3ek1UUXVNek0wTERJNE1pNDFOelI2SUUweU56TXVORE0xTERJeE1TNDNOVEpqTFRRdU5Ea3pMREF0T0M0M01UY3NNUzQzTlMweE1TNDRPVFFzTkM0NU1qZ05DZ2tKWXkwekxqRTNOeXd6TGpFM05pMDBMamt5Tml3M0xqTTVPUzAwTGpreU5pd3hNUzQ0T1RKek1TNDNOU3c0TGpjeE55dzBMamt5Tml3eE1TNDRPVFZ6Tnk0ME1ERXNOQzQ1TWpjc01URXVPRGswTERRdU9USTNZelF1TkRreUxEQXNPQzQzTVRZdE1TNDNOU3d4TVM0NE9UTXROQzQ1TWpjTkNna0pZek11TVRjM0xUTXVNVGM0TERRdU9USTNMVGN1TkRBeUxEUXVPVEkzTFRFeExqZzVOWE10TVM0M05TMDRMamN4TmkwMExqa3lOeTB4TVM0NE9USkRNamd5TGpFMU1Td3lNVE11TlRBeUxESTNOeTQ1TWpjc01qRXhMamMxTWl3eU56TXVORE0xTERJeE1TNDNOVEo2SWk4K0RRb0pQSEJoZEdnZ2MzUjViR1U5SW1acGJHdzZJMFZFTVVZek5Ec2lJR1E5SWswM056UXVNVGt6TERVMU5DNDRNemgyTFRRd01FZ3lOUzQ0TURkV05qUTFMakUyYURjME9DNHpPRGQyTFRNNExqY3hZekF0Tnk0eE1qY3NOUzQzTnpVdE1USXVPVEF5TERFeUxqa3dNeTB4TWk0NU1ESjJMVEkxTGpnd053MEtDUWxETnpjNUxqazJPU3cxTmpjdU56UXhMRGMzTkM0eE9UTXNOVFl4TGprMk5pdzNOelF1TVRrekxEVTFOQzQ0TXpoNklFMHlOREl1T1RVeUxETXlOUzQzTXpGc0xUTTFMak01TWl3eU9DNDJNVGhzTVRFdU9ERXpMRFF6TGprMU53MEtDUWxqTVM0ek9EY3NOUzR4TmpJdE1DNDFOVElzTVRBdU5qUTJMVFF1T0RjM0xERXpMamM0T0dNdE1pNHlOVGNzTVM0Mk5DMDBMamt4T0N3eUxqUTJOaTAzTGpVNE5Td3lMalEyTm1NdE1pNDBORFVzTUMwMExqZzVNUzB3TGpZNU1pMDNMakF6TlMweUxqQTRPR3d0TXpndU1UVTBMVEkwTGpneURRb0pDV3d0TXpndU1UVTBMREkwTGpneE9HTXROQzQwT0N3eUxqa3hOUzB4TUM0eU9UVXNNaTQzTmpZdE1UUXVOakl0TUM0ek56aGpMVFF1TXpJMUxUTXVNVFF5TFRZdU1qWTBMVGd1TmpJMkxUUXVPRGMzTFRFekxqYzRPR3d4TVM0NE1UTXRORE11T1RVM2JDMHpOUzR6T1RVdE1qZ3VOakU0RFFvSkNXTXROQzR4TlRjdE15NHpOaTAxTGpneExUZ3VPVE0yTFRRdU1UVTVMVEUwTGpBeVl6RXVOalV5TFRVdU1EZzBMRFl1TWpZNExUZ3VOakkxTERFeExqWXdOaTA0TGpsc05EVXVORFUxTFRJdU16UTRiREUyTGpJM09TMDBNaTQxTURNTkNna0pZekV1T1RFeUxUUXVPVGt4TERZdU56QTFMVGd1TWpnM0xERXlMakExTFRndU1qZzNZelV1TXpRMkxEQXNNVEF1TVRNNUxETXVNamsyTERFeUxqQTFMRGd1TWpnM2JERTJMakkzT0N3ME1pNDFNRE5zTkRVdU5EVTJMREl1TXpRNERRb0pDV00xTGpNek9Dd3dMakkzTlN3NUxqazFOU3d6TGpneE5pd3hNUzQyTURZc09DNDVRekkwT0M0M05qSXNNekUyTGpjNU5Td3lORGN1TVRBNUxETXlNaTR6TnpJc01qUXlMamsxTWl3ek1qVXVOek14ZWlCTk1qZzJMakF6TlN3ME5qUXVOakF5RFFvSkNXTXROaTQ1TlRrc05pNDVOVGt0TVRndU1qUXlMRFl1T1RVNUxUSTFMakl3TVN3d1l5MDJMamsxT1MwMkxqazJNUzAyTGprMU9TMHhPQzR5TkRRc01DMHlOUzR5TURGak5pNDVOVGt0Tmk0NU5qRXNNVGd1TWpReUxUWXVPVFl4TERJMUxqSXdNU3d3RFFvSkNVTXlPVEl1T1RrMUxEUTBOaTR6TlRjc01qa3lMams1TlN3ME5UY3VOalF4TERJNE5pNHdNelVzTkRZMExqWXdNbm9nVFRJNE5pNHdNelVzTWpReExqRTNOR010Tmk0NU5Ua3NOaTQ1TlRrdE1UZ3VNalF5TERZdU9UVTVMVEkxTGpJd01Td3dEUW9KQ1dNdE5pNDVOVGt0Tmk0NU5pMDJMamsxT1MweE9DNHlORE1zTUMweU5TNHlNREZqTmk0NU5Ua3ROaTQ1TmpFc01UZ3VNalF5TFRZdU9UWXhMREkxTGpJd01Td3dRekk1TWk0NU9UVXNNakl5TGprek1Td3lPVEl1T1RrMUxESXpOQzR5TVRNc01qZzJMakF6TlN3eU5ERXVNVGMwZWcwS0NRa2dUVE16TVM0MU16UXNNemcxTGpjNE4yTXRNaTQxTkRjc09TNDFNRE10TVRJdU16RTFMREUxTGpFME5TMHlNUzQ0TWl3eE1pNDFPVGRqTFRrdU5UQTJMVEl1TlRRNExURTFMakUwTmkweE1pNHpNVFV0TVRJdU5UazNMVEl4TGpneURRb0pDV015TGpVME55MDVMalV3TlN3eE1pNHpNVFV0TVRVdU1UUTFMREl4TGpneUxURXlMalU1TjBNek1qZ3VORFF5TERNMk5pNDFNVFFzTXpNMExqQTRMRE0zTmk0eU9ETXNNek14TGpVek5Dd3pPRFV1TnpnM2VpQk5NekU0TGprek5pd3pNVFl1TmpBekRRb0pDV010T1M0MU1EUXNNaTQxTkRZdE1Ua3VNamMwTFRNdU1Ea3pMVEl4TGpneU1TMHhNaTQxT1Rkek15NHdPVE10TVRrdU1qY3lMREV5TGpVNU55MHlNUzQ0TW5NeE9TNHlOek1zTXk0d09UVXNNakV1T0RJc01USXVOVGszRFFvSkNVTXpNelF1TURnc016QTBMakk0T0N3ek1qZ3VORFFzTXpFMExqQTFPU3d6TVRndU9UTTJMRE14Tmk0Mk1ETjZJaTgrRFFvSlBIQmhkR2dnWkQwaVRUYzNOQzR4T1RNc05qQTJMalExZGpNNExqY3hTREkxTGpnd04xWXhOVFF1T0RNNGFEYzBPQzR6T0RkMk5EQXdZekFzTnk0eE1qZ3NOUzQzTnpVc01USXVPVEF6TERFeUxqa3dNeXd4TWk0NU1ETlRPREF3TERVMk1TNDVOallzT0RBd0xEVTFOQzQ0TXpoV01UUXhMamt6TlEwS0NRbGpNQzAzTGpFeU9DMDFMamMzTlMweE1pNDVNRE10TVRJdU9UQXpMVEV5TGprd00wZ3hNaTQ1TURORE5TNDNOemNzTVRJNUxqQXpNU3d3TERFek5DNDRNRGNzTUN3eE5ERXVPVE0xZGpVeE5pNHhNamxqTUN3M0xqRXlPQ3cxTGpjM055d3hNaTQ1TURNc01USXVPVEF6TERFeUxqa3dNdzBLQ1Fsb056YzBMakU1TTJNM0xqRXlPQ3d3TERFeUxqa3dNeTAxTGpjM05Td3hNaTQ1TURNdE1USXVPVEF6ZGkwMU1TNDJNVE5qTUMwM0xqRXlOeTAxTGpjM05TMHhNaTQ1TURJdE1USXVPVEF6TFRFeUxqa3dNbE0zTnpRdU1Ua3pMRFU1T1M0ek1qTXNOemMwTGpFNU15dzJNRFl1TkRWNklpOCtEUW9KUEhCaGRHZ2djM1I1YkdVOUltWnBiR3c2STBaR1JUQXdNRHNpSUdROUlrMHhOamd1TWpBNExETTJNaTR5T0ROakxURXVPVE0xTFRFdU1qWXROQzR4TnpndE1TNDVNalV0Tmk0ME9Ea3RNUzQ1TWpWekxUUXVOVFUxTERBdU5qWTJMVFl1TkRnNUxERXVPVEkxYkMweE9TNHhNemdzTVRJdU5EUTREUW9KQ1d3MUxqa3lOQzB5TWk0d05EaGpNUzR5TWpFdE5DNDFOREl0TUM0ek5UUXRPUzR6T0RjdE5DNHdNVEV0TVRJdU16UTFiQzB4Tnk0M05UVXRNVFF1TXpVMmJESXlMamd3TWkweExqRTNOMk0wTGpZNU9DMHdMakkwTkN3NExqZ3lMVE11TWpNNUxERXdMalV3TWkwM0xqWXpNUTBLQ1Fsc09DNHhOamN0TWpFdU16RTViRGd1TVRZM0xESXhMak14TjJNeExqWTRNeXcwTGpNNU15dzFMamd3TkN3M0xqTTRPU3d4TUM0ME9Ua3NOeTQyTXpOc01qSXVPREF5TERFdU1UYzNiQzB4Tnk0M05UVXNNVFF1TXpVMkRRb0pDV010TXk0Mk5UY3NNaTQ1TlRndE5TNHlNekVzTnk0NE1ETXROQzR3TVN3eE1pNHpORFJzTlM0NU1qUXNNakl1TURRNFRERTJPQzR5TURnc016WXlMakk0TTNvaUx6NE5DZ2s4Y0dGMGFDQnpkSGxzWlQwaVptbHNiRG9qUmtaRk1EQXdPeUlnWkQwaVRURTJPQzQ1TlRNc016RTNMalV6YkMwM0xqSXpNeTB4T0M0NE9Hd3ROeTR5TXpJc01UZ3VPRGd4WXkweExqZ3lOU3cwTGpjMk5pMDJMakk0T0N3NExqQXdOeTB4TVM0ek9EUXNPQzR5TnpKc0xUSXdMakU1TkN3eExqQTBNZzBLQ1Fsc01UVXVOekkxTERFeUxqY3hOR016TGprMk55d3pMakl3T0N3MUxqWTNNaXc0TGpRMU5DdzBMak0wT0N3eE15NHpPREZzTFRVdU1qUTNMREU1TGpVeU4yd3hOaTQ1TlMweE1TNHdNalJqTWk0eE16Z3RNUzR6T1RJc05DNDFPRFl0TWk0d09EY3NOeTR3TXpVdE1pNHdPRGNOQ2drSmN6UXVPRGsyTERBdU5qazFMRGN1TURNMUxESXVNRGczYkRFMkxqazFMREV4TGpBeU5Hd3ROUzR5TkRjdE1Ua3VOVEkzWXkweExqTXlOUzAwTGpreU55d3dMak00TFRFd0xqRTNNeXcwTGpNME55MHhNeTR6T0RGc01UVXVOekkxTFRFeUxqY3hOR3d0TWpBdU1UazBMVEV1TURReURRb0pDVU14TnpVdU1qUXNNekkxTGpVek9Td3hOekF1TnpjNExETXlNaTR5T1RZc01UWTRMamsxTXl3ek1UY3VOVE42SWk4K0RRb0pQSEJoZEdnZ1pEMGlUVEl6TlM0MU1EUXNNekF5TGpneE1td3RORFV1TkRVMkxUSXVNelE1VERFM015NDNOeXd5TlRjdU9UWmpMVEV1T1RFeUxUUXVPVGt4TFRZdU56QTFMVGd1TWpnNExURXlMakExTFRndU1qZzRjeTB4TUM0eE16Z3NNeTR5T1RZdE1USXVNRFVzT0M0eU9EZ05DZ2tKYkMweE5pNHlOemtzTkRJdU5UQXpiQzAwTlM0ME5UVXNNaTR6TkRsakxUVXVNek01TERBdU1qYzFMVGt1T1RVMUxETXVPREUyTFRFeExqWXdOaXc0TGpsakxURXVOalV5TERVdU1EZ3pMREF1TURBeExERXdMalkyTERRdU1UVTRMREUwTGpBeWJETTFMak01TXl3eU9DNDJNVGdOQ2drSmJDMHhNUzQ0TVRNc05ETXVPVFUzWXkweExqTTROeXcxTGpFMk1pd3dMalUxTWl3eE1DNDJORFlzTkM0NE56Y3NNVE11TnpnNFl6UXVNekl6TERNdU1UUTBMREV3TGpFMExETXVNamt6TERFMExqWXlMREF1TXpjNGJETTRMakUxTkMweU5DNDRNbXd6T0M0eE5UUXNNalF1T0RFNERRb0pDV015TGpFME5Dd3hMak01Tml3MExqVTVMREl1TURnNExEY3VNRE0xTERJdU1EZzRZekl1TmpZM0xEQXNOUzR6TWpndE1DNDRNalFzTnk0MU9EVXRNaTQwTmpaak5DNHpNalV0TXk0eE5ESXNOaTR5TmpRdE9DNDJNallzTkM0NE56Y3RNVE11TnpnNGJDMHhNUzQ0TVRNdE5ETXVPVFUzRFFvSkNXd3pOUzR6T1RNdE1qZ3VOakU0WXpRdU1UVTNMVE11TXpZc05TNDRNUzA0TGprek5pdzBMakUxT0MweE5DNHdNa015TkRVdU5EVTVMRE13Tmk0Mk1qZ3NNalF3TGpnME15d3pNRE11TURnM0xESXpOUzQxTURRc016QXlMamd4TW5vZ1RURTROQzQ0TURVc016TTVMalUxT1EwS0NRbGpMVE11T1RZM0xETXVNakE0TFRVdU5qY3lMRGd1TkRVMExUUXVNelE0TERFekxqTTRNV3cxTGpJME9Dd3hPUzQxTWpkc0xURTJMamsxTFRFeExqQXlOR010TWk0eE16a3RNUzR6T1RJdE5DNDFPRGN0TWk0d09EY3ROeTR3TXpVdE1pNHdPRGNOQ2drSmN5MDBMamc1Tml3d0xqWTVOUzAzTGpBek5Td3lMakE0TjJ3dE1UWXVPVFVzTVRFdU1ESTBiRFV1TWpRNExURTVMalV5TjJNeExqTXlOUzAwTGpreU55MHdMak00TFRFd0xqRTNNeTAwTGpNME9DMHhNeTR6T0RGc0xURTFMamN5TlMweE1pNDNNVFJzTWpBdU1UazBMVEV1TURReURRb0pDV00xTGpBNU5pMHdMakkyTXl3NUxqVTFPUzB6TGpVd05pd3hNUzR6T0RRdE9DNHlOekpzTnk0eU16RXRNVGd1T0Roc055NHlNek1zTVRndU9EZ3hZekV1T0RJMUxEUXVOelkyTERZdU1qZzRMRGd1TURBM0xERXhMak00TkN3NExqSTNNbXd5TUM0eE9UUXNNUzR3TkRJTkNna0pUREU0TkM0NE1EVXNNek01TGpVMU9Yb2lMejROQ2drOFkybHlZMnhsSUhOMGVXeGxQU0ptYVd4c09pTkdSa1V3TURBN0lpQmplRDBpTXpFMExqTXlOQ0lnWTNrOUlqSTVPUzR6T1RVaUlISTlJakUzTGpneE5TSXZQZzBLQ1R4amFYSmpiR1VnYzNSNWJHVTlJbVpwYkd3NkkwWkdSVEF3TURzaUlHTjRQU0l5TnpNdU5ETTFJaUJqZVQwaU1qSTRMalUzTWlJZ2NqMGlNVGN1T0RJaUx6NE5DZ2s4WTJseVkyeGxJSE4wZVd4bFBTSm1hV3hzT2lOR1JrVXdNREE3SWlCamVEMGlNekUwTGpNeU5DSWdZM2s5SWpNNE1TNHhOellpSUhJOUlqRTNMamd4TlNJdlBnMEtDVHhqYVhKamJHVWdjM1I1YkdVOUltWnBiR3c2STBaR1JUQXdNRHNpSUdONFBTSXlOek11TkRNMUlpQmplVDBpTkRVeUxqQXdNU0lnY2owaU1UY3VPRElpTHo0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqeG5QZzBLUEM5blBnMEtQR2MrRFFvOEwyYytEUW84Wno0TkNqd3ZaejROQ2p4blBnMEtQQzluUGcwS1BHYytEUW84TDJjK0RRbzhaejROQ2p3dlp6NE5DanhuUGcwS1BDOW5QZzBLUEdjK0RRbzhMMmMrRFFvOFp6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXhOaTR3TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0RRbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWtOaGNHRmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaURRb0pJSGRwWkhSb1BTSTRNREJ3ZUNJZ2FHVnBaMmgwUFNJNE1EQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lEZ3dNQ0E0TURBaUlHVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a1BTSnVaWGNnTUNBd0lEZ3dNQ0E0TURBaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZzBLUEdjK0RRb0pQSEJoZEdnZ1ptbHNiRDBpSTBaR1JrWkdSaUlnWkQwaVRUVXhOaTR4TWprc01qUTFMakUyTVhZdE9UQXVNekl5U0RJNE15NDROekYyTkRrd0xqTXlNbWd5TXpJdU1qVTRWakk1Tmk0M056UmpNQzAzTGpFeU5pdzFMamMzTlMweE1pNDVNRE1zTVRJdU9UQXpMVEV5TGprd00zWXRNalV1T0RBM0RRb0pDVU0xTWpFdU9UQTBMREkxT0M0d05qUXNOVEUyTGpFeU9Td3lOVEl1TWpnM0xEVXhOaTR4TWprc01qUTFMakUyTVhvaUx6NE5DZ2s4Y21WamRDQjRQU0l5TkM0NE1EY2lJSGs5SWpFMU15NDRNemtpSUdacGJHdzlJaU14TmpSR1EwVWlJSGRwWkhSb1BTSXlNelF1TWpVNElpQm9aV2xuYUhROUlqUTVNaTR6TWpJaUx6NE5DZ2s4Y21WamRDQjRQU0l5TlM0NE1EY2lJSGs5SWpFMU5DNDRNemtpSUdacGJHdzlJaU14TmpSR1EwVWlJSGRwWkhSb1BTSXlNekl1TWpVNElpQm9aV2xuYUhROUlqUTVNQzR6TWpJaUx6NE5DZ2s4Y0dGMGFDQm1hV3hzUFNJalJVUXhSak0wSWlCa1BTSk5OVFF3TGprek5pdzJORFl1TVRZeFZqSTVOaTQzTnpSak1DMDJMalUyTXkwMUxqTTBMVEV4TGprd015MHhNUzQ1TURNdE1URXVPVEF6YUMweGRpMHlOeTQ0TURkb01RMEtDUWxqTmk0MU5qTXNNQ3d4TVM0NU1ETXROUzR6TkN3eE1TNDVNRE10TVRFdU9UQXpkaTA1TVM0ek1qSm9Nak0wTGpJMU9IWTBPVEl1TXpJeVNEVTBNQzQ1TXpaNklpOCtEUW9KUEhCaGRHZ2dabWxzYkQwaUkwVkVNVVl6TkNJZ1pEMGlUVFUwTVM0NU16WXNNalExTGpFMk1XTXdMRGN1TVRJMkxUVXVOemMxTERFeUxqa3dNeTB4TWk0NU1ETXNNVEl1T1RBemRqSTFMamd3TjJNM0xqRXlPQ3d3TERFeUxqa3dNeXcxTGpjM055d3hNaTQ1TURNc01USXVPVEF6ZGpNME9DNHpPRGNOQ2drSmFESXpNaTR5TlRoV01UVTBMamd6T1VnMU5ERXVPVE0yVmpJME5TNHhOakY2SWk4K0RRb0pQSEJoZEdnZ1pEMGlUVGM0Tnk0d09UY3NNVEk1TGpBek1rZ3hNaTQ1TURORE5TNDNOemNzTVRJNUxqQXpNaXd3TERFek5DNDRNU3d3TERFME1TNDVNeloyTlRFMkxqRXlPV013TERjdU1USTJMRFV1TnpjM0xERXlMamt3TXl3eE1pNDVNRE1zTVRJdU9UQXphRGMzTkM0eE9UTU5DZ2tKWXpjdU1USTRMREFzTVRJdU9UQXpMVFV1TnpjM0xERXlMamt3TXkweE1pNDVNRE5XTVRReExqa3pOa000TURBc01UTTBMamd4TERjNU5DNHlNalVzTVRJNUxqQXpNaXczT0RjdU1EazNMREV5T1M0d016SjZJRTAzTnpRdU1Ua3pMRFkwTlM0eE5qRklOVFF4TGprek5sWXlPVFl1TnpjMERRb0pDV013TFRjdU1USTJMVFV1TnpjMUxURXlMamt3TXkweE1pNDVNRE10TVRJdU9UQXpjeTB4TWk0NU1ETXNOUzQzTnpjdE1USXVPVEF6TERFeUxqa3dNM1l6TkRndU16ZzNTREk0TXk0NE56RldNVFUwTGpnek9XZ3lNekl1TWpVNGRqa3dMak15TWcwS0NRbGpNQ3czTGpFeU5pdzFMamMzTlN3eE1pNDVNRE1zTVRJdU9UQXpMREV5TGprd00zTXhNaTQ1TURNdE5TNDNOemNzTVRJdU9UQXpMVEV5TGprd00zWXRPVEF1TXpJeWFESXpNaTR5TlRoV05qUTFMakUyTVhvZ1RUSTFMamd3Tnl3eE5UUXVPRE01YURJek1pNHlOVGgyTkRrd0xqTXlNa2d5TlM0NE1EY05DZ2tKVmpFMU5DNDRNemw2SWk4K0RRbzhMMmMrRFFvOEwzTjJaejROQ2c9PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXhOaTR3TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0RRbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWtOaGNHRmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaURRb0pJSGRwWkhSb1BTSTRNREJ3ZUNJZ2FHVnBaMmgwUFNJNE1EQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lEZ3dNQ0E0TURBaUlHVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a1BTSnVaWGNnTUNBd0lEZ3dNQ0E0TURBaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZzBLUEdjK0RRb0pQSEJoZEdnZ1ptbHNiRDBpSTBaR1JrWkdSaUlnWkQwaVRUVXhOaTR4TWprc01qUTFMakUyTVhZdE9UQXVNekl5U0RJNE15NDROekYyTkRrd0xqTXlNbWd5TXpJdU1qVTRWakk1Tmk0M056UmpNQzAzTGpFeU5pdzFMamMzTnkweE1pNDVNRE1zTVRJdU9UQXpMVEV5TGprd00zWXRNalV1T0RBM0RRb0pDVU0xTWpFdU9UQTJMREkxT0M0d05qUXNOVEUyTGpFeU9Td3lOVEl1TWpnM0xEVXhOaTR4TWprc01qUTFMakUyTVhvaUx6NE5DZ2s4Y21WamRDQjRQU0l5TkM0NE1EY2lJSGs5SWpFMU15NDRNemtpSUdacGJHdzlJaU15TlRreU5EVWlJSGRwWkhSb1BTSXlNelF1TWpVNElpQm9aV2xuYUhROUlqUTVNaTR6TWpJaUx6NE5DZ2s4Y21WamRDQjRQU0l5TlM0NE1EY2lJSGs5SWpFMU5DNDRNemtpSUdacGJHdzlJaU15TlRreU5EVWlJSGRwWkhSb1BTSXlNekl1TWpVNElpQm9aV2xuYUhROUlqUTVNQzR6TWpJaUx6NE5DZ2s4Y0dGMGFDQm1hV3hzUFNJalJVUXhSak0wSWlCa1BTSk5OVFF3TGprek5pdzJORFl1TVRZeFZqSTVOaTQzTnpSak1DMDJMalUyTXkwMUxqTTBMVEV4TGprd015MHhNUzQ1TURNdE1URXVPVEF6YUMweGRpMHlOeTQ0TURkb01RMEtDUWxqTmk0MU5qTXNNQ3d4TVM0NU1ETXROUzR6TkN3eE1TNDVNRE10TVRFdU9UQXpkaTA1TVM0ek1qSm9Nak0wTGpJMU9IWTBPVEl1TXpJeVNEVTBNQzQ1TXpaNklpOCtEUW9KUEhCaGRHZ2dabWxzYkQwaUkwVkVNVVl6TkNJZ1pEMGlUVFUwTVM0NU16WXNNalExTGpFMk1XTXdMRGN1TVRJMkxUVXVOemMzTERFeUxqa3dNeTB4TWk0NU1ETXNNVEl1T1RBemRqSTFMamd3TjJNM0xqRXlOaXd3TERFeUxqa3dNeXcxTGpjM055d3hNaTQ1TURNc01USXVPVEF6ZGpNME9DNHpPRGNOQ2drSmFESXpNaTR5TlRoV01UVTBMamd6T1VnMU5ERXVPVE0yVmpJME5TNHhOakY2SWk4K0RRb0pQSEJoZEdnZ1pEMGlUVGM0Tnk0d09UY3NNVEk1TGpBek1rZ3hNaTQ1TURORE5TNDNOemNzTVRJNUxqQXpNaXd3TERFek5DNDRNU3d3TERFME1TNDVNeloyTlRFMkxqRXlPV013TERjdU1USTJMRFV1TnpjM0xERXlMamt3TXl3eE1pNDVNRE1zTVRJdU9UQXphRGMzTkM0eE9UTU5DZ2tKWXpjdU1USTJMREFzTVRJdU9UQXpMVFV1TnpjM0xERXlMamt3TXkweE1pNDVNRE5XTVRReExqa3pOa000TURBc01UTTBMamd4TERjNU5DNHlNak1zTVRJNUxqQXpNaXczT0RjdU1EazNMREV5T1M0d016SjZJRTAzTnpRdU1Ua3pMRFkwTlM0eE5qRklOVFF4TGprek5sWXlPVFl1TnpjMERRb0pDV013TFRjdU1USTJMVFV1TnpjM0xURXlMamt3TXkweE1pNDVNRE10TVRJdU9UQXpjeTB4TWk0NU1ETXNOUzQzTnpjdE1USXVPVEF6TERFeUxqa3dNM1l6TkRndU16ZzNTREk0TXk0NE56RldNVFUwTGpnek9XZ3lNekl1TWpVNGRqa3dMak15TWcwS0NRbGpNQ3czTGpFeU5pdzFMamMzTnl3eE1pNDVNRE1zTVRJdU9UQXpMREV5TGprd00zTXhNaTQ1TURNdE5TNDNOemNzTVRJdU9UQXpMVEV5TGprd00zWXRPVEF1TXpJeWFESXpNaTR5TlRoV05qUTFMakUyTVhvZ1RUSTFMamd3Tnl3eE5UUXVPRE01YURJek1pNHlOVGgyTkRrd0xqTXlNa2d5TlM0NE1EY05DZ2tKVmpFMU5DNDRNemw2SWk4K0RRbzhMMmMrRFFvOEwzTjJaejROQ2c9PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXhOaTR3TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0RRbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWtOaGNHRmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaURRb0pJSGRwWkhSb1BTSTRNREJ3ZUNJZ2FHVnBaMmgwUFNJNE1EQndlQ0lnZG1sbGQwSnZlRDBpTUNBd0lEZ3dNQ0E0TURBaUlHVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a1BTSnVaWGNnTUNBd0lEZ3dNQ0E0TURBaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQZzBLUEdjK0RRb0pQSEJoZEdnZ1ptbHNiRDBpSTBaR1JUQXdNQ0lnWkQwaVRUWTBOQzR4TmpFc05UTXdMakF6TW5ZdE1XTXdMVFl1TlRZekxUVXVNelF0TVRFdU9UQXpMVEV4TGprd015MHhNUzQ1TUROSU1qUXVPREEzVmpJNE1pNDROekZvTnpVd0xqTTROM1l5TXpRdU1qVTRhQzA1TVM0ek1qSU5DZ2tKWXkwMkxqVTJNeXd3TFRFeExqa3dNeXcxTGpNMExURXhMamt3TXl3eE1TNDVNRE4yTVVnMk5EUXVNVFl4ZWlJdlBnMEtDVHh3WVhSb0lHWnBiR3c5SWlOR1JrVXdNREFpSUdROUlrMDJPRE11T0RjeExEVXhOaTR4TWpsb09UQXVNekl5VmpJNE15NDROekZJTWpVdU9EQTNkakl6TWk0eU5UaG9OakEyTGpRMU1XTTNMakV5Tml3d0xERXlMamt3TXl3MUxqYzNOeXd4TWk0NU1ETXNNVEl1T1RBemFESTFMamd3TncwS0NRbEROamN3TGprMk9DdzFNakV1T1RBMkxEWTNOaTQzTkRVc05URTJMakV5T1N3Mk9ETXVPRGN4TERVeE5pNHhNamw2SWk4K0RRb0pQSEpsWTNRZ2VEMGlNalF1T0RBM0lpQjVQU0l4TlRNdU9ETTVJaUJtYVd4c1BTSWpSVVF4UmpNMElpQjNhV1IwYUQwaU56VXdMak00TnlJZ2FHVnBaMmgwUFNJeE1EVXVNakkySWk4K0RRb0pQSEpsWTNRZ2VEMGlNalV1T0RBM0lpQjVQU0l4TlRRdU9ETTVJaUJtYVd4c1BTSWpSVVF4UmpNMElpQjNhV1IwYUQwaU56UTRMak00TnlJZ2FHVnBaMmgwUFNJeE1ETXVNakkySWk4K0RRb0pQSEJoZEdnZ1ptbHNiRDBpSTBWRU1VWXpOQ0lnWkQwaVRUSTBMamd3Tnl3Mk5EWXVNVFl4VmpVME1DNDVNelpvTmpBM0xqUTFNV00yTGpVMk15d3dMREV4TGprd015MDFMak0wTERFeExqa3dNeTB4TVM0NU1ETjJMVEZvTWpjdU9EQTNkakVOQ2drSll6QXNOaTQxTmpNc05TNHpOQ3d4TVM0NU1ETXNNVEV1T1RBekxERXhMamt3TTJnNU1TNHpNakoyTVRBMUxqSXlOa2d5TkM0NE1EZDZJaTgrRFFvSlBIQmhkR2dnWm1sc2JEMGlJMFZFTVVZek5DSWdaRDBpVFRZNE15NDROekVzTlRReExqa3pObU10Tnk0eE1qWXNNQzB4TWk0NU1ETXROUzQzTnpjdE1USXVPVEF6TFRFeUxqa3dNMmd0TWpVdU9EQTNZekFzTnk0eE1qWXROUzQzTnpjc01USXVPVEF6TFRFeUxqa3dNeXd4TWk0NU1ETklNalV1T0RBM0RRb0pDWFl4TURNdU1qSTJhRGMwT0M0ek9EZFdOVFF4TGprek5rZzJPRE11T0RjeGVpSXZQZzBLQ1R4d1lYUm9JR1E5SWswM09EY3VNRGszTERFeU9TNHdNekpJTVRJdU9UQXpRelV1TnpjM0xERXlPUzR3TXpJc01Dd3hNelF1T0RFc01Dd3hOREV1T1RNMmRqVXhOaTR4TWpsak1DdzNMakV5Tml3MUxqYzNOeXd4TWk0NU1ETXNNVEl1T1RBekxERXlMamt3TTJnM056UXVNVGt6RFFvSkNXTTNMakV5Tml3d0xERXlMamt3TXkwMUxqYzNOeXd4TWk0NU1ETXRNVEl1T1RBelZqRTBNUzQ1TXpaRE9EQXdMREV6TkM0NE1TdzNPVFF1TWpJekxERXlPUzR3TXpJc056ZzNMakE1Tnl3eE1qa3VNRE15ZWlCTk56YzBMakU1TXl3eE5UUXVPRE01ZGpFd015NHlNalpJTWpVdU9EQTNEUW9KQ1ZZeE5UUXVPRE01U0RjM05DNHhPVE42SUUweU5TNDRNRGNzTmpRMUxqRTJNVlkxTkRFdU9UTTJhRFl3Tmk0ME5URmpOeTR4TWpZc01Dd3hNaTQ1TURNdE5TNDNOemNzTVRJdU9UQXpMVEV5TGprd00zTXROUzQzTnpjdE1USXVPVEF6TFRFeUxqa3dNeTB4TWk0NU1ETklNalV1T0RBM0RRb0pDVll5T0RNdU9EY3hhRGMwT0M0ek9EZDJNak15TGpJMU9HZ3RPVEF1TXpJeVl5MDNMakV5Tml3d0xURXlMamt3TXl3MUxqYzNOeTB4TWk0NU1ETXNNVEl1T1RBemN6VXVOemMzTERFeUxqa3dNeXd4TWk0NU1ETXNNVEl1T1RBemFEa3dMak15TW5ZeE1ETXVNakkyU0RJMUxqZ3dOM29pTHo0TkNqd3ZaejROQ2p3dmMzWm5QZzBLXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdWstYmM0OGFmY2MxNWQ1ZDlkNTEyNTVkZTBiMmVlNzA4YmUuc3ZnXCI7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5pbXBvcnQgeyBib3JkZXJSYWRpdXMgfSBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3N0eWxlX3V0aWxzJztcbmltcG9ydCBXaXRoRGlyZWN0aW9uIGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvcnRsJztcbmNvbnN0IENvbG9yQ2hvb3NlckRyb3Bkb3duID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgbWF4LXdpZHRoOiAxNjBweDtcblxuICAuYW50LWJ0biB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBvdXRsaW5lOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAkeyhwcm9wcykgPT5cbiAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDAgMCAxNXB4JyA6ICcwIDE1cHggMCAwJ307XG4gICAgJHtib3JkZXJSYWRpdXMoJzNweCcpfTtcblxuICAgICY6ZW1wdHkge1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKG4gKyA2KSB7XG4gICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDVuKSB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IFdpdGhEaXJlY3Rpb24oQ29sb3JDaG9vc2VyRHJvcGRvd24pO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFBvcG92ZXIgZnJvbSAnLi91aWVsZW1lbnRzL3BvcG92ZXInO1xuaW1wb3J0IENvbG9yQ2hvb3NlckRyb3Bkb3duIGZyb20gJy4vQ29sb3JDaG9vc2VyLnN0eWxlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHsgY29sb3JzLCBzZWVjdGVkQ29sb3IsIGNoYW5nZUNvbG9yIH0pIHtcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2liaWxpdHldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgc2V0VmlzaWJpbGl0eShmYWxzZSk7XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlVmlzaWJsZUNoYW5nZSgpIHtcbiAgICBzZXRWaXNpYmlsaXR5KCh2aXNpYmxlKSA9PiAhdmlzaWJsZSk7XG4gIH1cbiAgY29uc3QgY29udGVudCA9ICgpID0+IChcbiAgICA8Q29sb3JDaG9vc2VyRHJvcGRvd24gY2xhc3NOYW1lPVwiaXNvQ29sb3JPcHRpb25zXCI+XG4gICAgICB7Y29sb3JzLm1hcCgoY29sb3IsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgaGlkZSgpO1xuICAgICAgICAgIGNoYW5nZUNvbG9yKGluZGV4KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogY29sb3IsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiA8QnV0dG9uIGtleT17aW5kZXh9IG9uQ2xpY2s9e29uQ2xpY2t9IHN0eWxlPXtzdHlsZX0gLz47XG4gICAgICB9KX1cbiAgICA8L0NvbG9yQ2hvb3NlckRyb3Bkb3duPlxuICApO1xuICByZXR1cm4gKFxuICAgIDxQb3BvdmVyXG4gICAgICBjb250ZW50PXtjb250ZW50KCl9XG4gICAgICB0cmlnZ2VyPVwiY2xpY2tcIlxuICAgICAgdmlzaWJsZT17dmlzaWJsZX1cbiAgICAgIG9uVmlzaWJsZUNoYW5nZT17aGFuZGxlVmlzaWJsZUNoYW5nZX1cbiAgICA+XG4gICAgICA8QnV0dG9uXG4gICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogY29sb3JzW3NlZWN0ZWRDb2xvcl0gfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiaXNvQ29sb3JDaG9vc2VyXCJcbiAgICAgIC8+XG4gICAgPC9Qb3BvdmVyPlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENoZWNrT3V0bGluZWQsIEVkaXRPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IFRleHRhcmVhIGFzIElucHV0IH0gZnJvbSAnLi91aWVsZW1lbnRzL2lucHV0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGVDb21wb25lbnQocHJvcHMpIHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgIGVkaXRhYmxlOiBmYWxzZSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgdmFsdWUgfSk7XG4gIH1cbiAgZnVuY3Rpb24gY2hlY2soKSB7XG4gICAgc2V0U3RhdGUoeyAuLi5zdGF0ZSwgZWRpdGFibGU6IGZhbHNlIH0pO1xuICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgcHJvcHMub25DaGFuZ2UocHJvcHMuaXRlbUtleSwgc3RhdGUudmFsdWUpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBlZGl0KCkge1xuICAgIHNldFN0YXRlKHsgLi4uc3RhdGUsIGVkaXRhYmxlOiB0cnVlIH0pO1xuICB9XG5cbiAgY29uc3QgeyB2YWx1ZSwgZWRpdGFibGUgfSA9IHN0YXRlO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvTm90ZUNvbnRlbnRcIj5cbiAgICAgIHtlZGl0YWJsZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc29Ob3RlRWRpdFdyYXBwZXJcIj5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHJvd3M9ezN9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgb25QcmVzc0VudGVyPXtjaGVja31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDaGVja091dGxpbmVkIGNsYXNzTmFtZT1cImlzb05vdGVFZGl0SWNvblwiIG9uQ2xpY2s9e2NoZWNrfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImlzb05vdGVUZXh0V3JhcHBlclwiIG9uQ2xpY2s9e2VkaXR9PlxuICAgICAgICAgIHt2YWx1ZSB8fCAnICd9XG4gICAgICAgICAgPEVkaXRPdXRsaW5lZCBjbGFzc05hbWU9XCJpc29Ob3RlRWRpdEljb25cIiAvPlxuICAgICAgICA8L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IHsgbm90aWZpY2F0aW9uIH0gZnJvbSAnYW50ZCc7XG5cbmNvbnN0IGNyZWF0ZU5vdGlmaWNhdGlvbiA9ICh0eXBlLCBtZXNzYWdlLCBkZXNjcmlwdGlvbikgPT4ge1xuICBub3RpZmljYXRpb25bdHlwZV0oe1xuICAgIG1lc3NhZ2UsXG4gICAgZGVzY3JpcHRpb24sXG4gIH0pO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU5vdGlmaWNhdGlvbjtcbiIsImltcG9ydCBub3RpZmljYXRpb24gZnJvbSAnLi9Ob3RpZmljYXRpb24nO1xuaW1wb3J0IENvbG9yQ2hvc2VyIGZyb20gJy4vQ29sb3JDaG9zZXInO1xuaW1wb3J0IEVkaXRhYmxlQ29tcG9uZW50IGZyb20gJy4vRWRpdGFibGVDb21wb25lbnQnO1xuXG5leHBvcnQgeyBub3RpZmljYXRpb24sIENvbG9yQ2hvc2VyLCBFZGl0YWJsZUNvbXBvbmVudCB9O1xuIiwiaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdhbnRkJztcbmltcG9ydCB7XG4gIElucHV0V3JhcHBlcixcbiAgSW5wdXRHcm91cFdyYXBwZXIsXG4gIElucHV0U2VhcmNoV3JhcHBlcixcbiAgVGV4dEFyZWFXcmFwcGVyLFxufSBmcm9tICcuL3N0eWxlcy9pbnB1dC5zdHlsZSc7XG5pbXBvcnQgV2l0aERpcmVjdGlvbiBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3J0bCc7XG5jb25zdCB7IFNlYXJjaCwgVGV4dEFyZWEsIEdyb3VwIH0gPSBJbnB1dDtcblxuY29uc3QgV0RTdHlsZWRJbnB1dCA9IElucHV0V3JhcHBlcihJbnB1dCk7XG5jb25zdCBTdHlsZWRJbnB1dCA9IFdpdGhEaXJlY3Rpb24oV0RTdHlsZWRJbnB1dCk7XG5cbmNvbnN0IFdESW5wdXRHcm91cCA9IElucHV0R3JvdXBXcmFwcGVyKEdyb3VwKTtcbmNvbnN0IElucHV0R3JvdXAgPSBXaXRoRGlyZWN0aW9uKFdESW5wdXRHcm91cCk7XG5cbmNvbnN0IFdESW5wdXRTZWFyY2ggPSBJbnB1dFNlYXJjaFdyYXBwZXIoU2VhcmNoKTtcbmNvbnN0IElucHV0U2VhcmNoID0gV2l0aERpcmVjdGlvbihXRElucHV0U2VhcmNoKTtcblxuY29uc3QgV0RUZXh0YXJlYSA9IFRleHRBcmVhV3JhcHBlcihUZXh0QXJlYSk7XG5jb25zdCBUZXh0YXJlYSA9IFdpdGhEaXJlY3Rpb24oV0RUZXh0YXJlYSk7XG5cbmV4cG9ydCBkZWZhdWx0IFN0eWxlZElucHV0O1xuZXhwb3J0IHsgSW5wdXRTZWFyY2gsIElucHV0R3JvdXAsIFRleHRhcmVhIH07XG4iLCJpbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnYW50ZCc7XG5cbmV4cG9ydCBkZWZhdWx0IFBvcG92ZXI7XG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IHBhbGV0dGUgfSBmcm9tICdzdHlsZWQtdGhlbWUnO1xuaW1wb3J0IHtcbiAgdHJhbnNpdGlvbixcbiAgYm9yZGVyUmFkaXVzLFxuICBib3hTaGFkb3csXG59IGZyb20gJ0Bpc28vbGliL2hlbHBlcnMvc3R5bGVfdXRpbHMnO1xuXG5jb25zdCBJbnB1dFdyYXBwZXIgPSAoQ29tcG9uZW50TmFtZSkgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAmLmFudC1pbnB1dCB7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogdGV4dDtcbiAgICB0ZXh0LWFsaWduOiAkeyhwcm9wcykgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCcpfTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgICAke2JvcmRlclJhZGl1cygnNHB4Jyl9O1xuICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtbGcge1xuICAgICAgaGVpZ2h0OiA0MnB4O1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtc20ge1xuICAgICAgcGFkZGluZzogMXB4IDEwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICB0ZXh0LWFsaWduOiAkeyhwcm9wcykgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ3JpZ2h0JyA6ICdsZWZ0J307XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuXG4gICAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIHRleHQtYWxpZ246ICR7KHByb3BzKSA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnfTtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG5cbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIHRleHQtYWxpZ246ICR7KHByb3BzKSA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAncmlnaHQnIDogJ2xlZnQnfTtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgdGV4dC1hbGlnbjogJHsocHJvcHMpID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICdyaWdodCcgOiAnbGVmdCd9O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cbiAgfVxuYDtcbmNvbnN0IElucHV0R3JvdXBXcmFwcGVyID0gKENvbXBvbmVudE5hbWUpID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcbiAgJi5hbnQtaW5wdXQtZ3JvdXAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG5cbiAgICAuYW50LXNlbGVjdCB7XG4gICAgICAuYW50LXNlbGVjdC1zZWxlY3RvciB7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYW50LWlucHV0IHtcbiAgICAgIGhlaWdodDogMzVweDtcbiAgICB9XG5cbiAgICAuYW50LXNlbGVjdC1hdXRvLWNvbXBsZXRlIHtcbiAgICAgIG1hcmdpbi1yaWdodDogJHsocHJvcHMpID0+IChwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnLTFweCcgOiAnMCcpfTtcbiAgICB9XG5cbiAgICAuYW50LWlucHV0IHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHsocHJvcHMpID0+XG4gICAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgNHB4IDRweCAwJyA6ICc0cHggMCAwIDRweCd9O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hbnQtaW5wdXQtZ3JvdXAtYWRkb246bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcbiAgICAuYW50LWlucHV0LWdyb3VwLXdyYXA6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSxcbiAgICA+IC5hbnQtaW5wdXQ6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBwYWRkaW5nOiAwIDdweDtcbiAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAkeyhwcm9wcykgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAnIDogJzFweCd9O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAkeyhwcm9wcykgPT4gKHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICctMXB4JyA6ICcwJyl9O1xuICAgIH1cblxuICAgIC5hbnQtaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgICAgcGFkZGluZzogNHB4IDdweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3RleHQnLCAxKX07XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDQpfTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAkeyhwcm9wcykgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMXB4JyA6ICcwJ307XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAkeyhwcm9wcykgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCcgOiAnMXB4J307XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcwIDRweCA0cHggMCcgOiAnNHB4IDAgMCA0cHgnfTtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAkeyhwcm9wcykgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCcgOiAnMXB4J307XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAkeyhwcm9wcykgPT5cbiAgICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMXB4JyA6ICcwJ307XG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PlxuICAgICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICc0cHggMCAwIDRweCcgOiAnMCA0cHggNHB4IDAnfTtcbiAgICAgIH1cblxuICAgICAgLmFudC1zZWxlY3Qge1xuICAgICAgICAuYW50LXNlbGVjdC1zZWxlY3RvciB7XG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgbWFyZ2luOiAtMXB4O1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICR7Ym94U2hhZG93KCl9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dC1ncm91cC1hZGRvbjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpLFxuICAgIC5hbnQtaW5wdXQtZ3JvdXAtd3JhcDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xuICAgIH1cblxuICAgICYgPiAuYW50LWlucHV0Om5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgJHsnJyAvKiBib3JkZXItbGVmdDogMDsgKi99O1xuICAgIH1cblxuICAgIC5hbnQtaW5wdXQ6Zmlyc3QtY2hpbGQ6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+ICoge1xuICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAkeyhwcm9wcykgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzFweCAnIDogJzAnfTtcbiAgICB9XG5cbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1zZWxlY3QgPiAuYW50LXNlbGVjdC1zZWxlY3Rpb24sXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtY2FsZW5kYXItcGlja2VyIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtc2VsZWN0LWF1dG8tY29tcGxldGUgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1jYXNjYWRlci1waWNrZXIgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1tZW50aW9uLXdyYXBwZXIgLmFudC1tZW50aW9uLWVkaXRvcixcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC10aW1lLXBpY2tlciAuYW50LXRpbWUtcGlja2VyLWlucHV0IHtcbiAgICAgIGJvcmRlci1yaWdodC13aWR0aDogJHsocHJvcHMpID0+XG4gICAgICAgIHByb3BzWydkYXRhLXJ0bCddID09PSAncnRsJyA/ICcxcHggJyA6ICcwJ307XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+ICo6Zmlyc3QtY2hpbGQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtc2VsZWN0OmZpcnN0LWNoaWxkID4gLmFudC1zZWxlY3Qtc2VsZWN0aW9uLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LWNhbGVuZGFyLXBpY2tlcjpmaXJzdC1jaGlsZCAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RcbiAgICAgID4gLmFudC1zZWxlY3QtYXV0by1jb21wbGV0ZTpmaXJzdC1jaGlsZFxuICAgICAgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gLmFudC1jYXNjYWRlci1waWNrZXI6Zmlyc3QtY2hpbGQgLmFudC1pbnB1dCxcbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0XG4gICAgICA+IC5hbnQtbWVudGlvbi13cmFwcGVyOmZpcnN0LWNoaWxkXG4gICAgICAuYW50LW1lbnRpb24tZWRpdG9yLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RcbiAgICAgID4gLmFudC10aW1lLXBpY2tlcjpmaXJzdC1jaGlsZFxuICAgICAgLmFudC10aW1lLXBpY2tlci1pbnB1dCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAkeyhwcm9wcykgPT5cbiAgICAgICAgcHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzAgNHB4IDRweCAwJyA6ICc0cHggMCAwIDRweCd9O1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweFxuICAgICAgICAkeycnIC8qIGJvcmRlci1yaWdodC13aWR0aDogJHtwcm9wcyA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMXB4JyA6ICcwJ307ICovfTtcbiAgICB9XG5cbiAgICAmLmFudC1pbnB1dC1ncm91cC1jb21wYWN0ID4gKjpsYXN0LWNoaWxkLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LXNlbGVjdDpsYXN0LWNoaWxkID4gLmFudC1zZWxlY3Qtc2VsZWN0aW9uLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LWNhbGVuZGFyLXBpY2tlcjpsYXN0LWNoaWxkIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdCA+IC5hbnQtc2VsZWN0LWF1dG8tY29tcGxldGU6bGFzdC1jaGlsZCAuYW50LWlucHV0LFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3QgPiAuYW50LWNhc2NhZGVyLXBpY2tlcjpsYXN0LWNoaWxkIC5hbnQtaW5wdXQsXG4gICAgJi5hbnQtaW5wdXQtZ3JvdXAtY29tcGFjdFxuICAgICAgPiAuYW50LW1lbnRpb24td3JhcHBlcjpsYXN0LWNoaWxkXG4gICAgICAuYW50LW1lbnRpb24tZWRpdG9yLFxuICAgICYuYW50LWlucHV0LWdyb3VwLWNvbXBhY3RcbiAgICAgID4gLmFudC10aW1lLXBpY2tlcjpsYXN0LWNoaWxkXG4gICAgICAuYW50LXRpbWUtcGlja2VyLWlucHV0IHtcbiAgICAgIGJvcmRlci1yYWRpdXM6ICR7KHByb3BzKSA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnNHB4IDAgMCA0cHgnIDogJzAgNHB4IDRweCAwJ307XG4gICAgICBib3JkZXItcmlnaHQtd2lkdGg6ICR7KHByb3BzKSA9PlxuICAgICAgICBwcm9wc1snZGF0YS1ydGwnXSA9PT0gJ3J0bCcgPyAnMCAnIDogJzFweCd9O1xuICAgIH1cblxuICAgIC5hbnQtY2FsZW5kYXItcGlja2VyLWNsZWFyLFxuICAgIC5hbnQtY2FsZW5kYXItcGlja2VyLWljb24ge1xuICAgICAgcmlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzhweCcpfTtcbiAgICAgIGxlZnQ6ICR7KHByb3BzKSA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzhweCcgOiAnaW5oZXJpdCcpfTtcbiAgICB9XG4gIH1cblxuICAmLmFudC1pbnB1dC1ncm91cC1sZyB7XG4gICAgLmFudC1pbnB1dCxcbiAgICA+IC5hbnQtaW5wdXQtZ3JvdXAtYWRkb24ge1xuICAgICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBUZXh0QXJlYVdyYXBwZXIgPSAoQ29tcG9uZW50TmFtZSkgPT4gc3R5bGVkKENvbXBvbmVudE5hbWUpYFxuICAmLmFudC1pbnB1dCB7XG4gICAgcGFkZGluZzogNHB4IDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGN1cnNvcjogdGV4dDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogJHtwYWxldHRlKCd0ZXh0JywgMSl9O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUoJ2JvcmRlcicsIDApfTtcbiAgICAke2JvcmRlclJhZGl1cygnNHB4Jyl9O1xuICAgICR7dHJhbnNpdGlvbigpfTtcblxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgfVxuXG4gICAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG5cbiAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICB9XG4gICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgSW5wdXRTZWFyY2hXcmFwcGVyID0gKENvbXBvbmVudE5hbWUpID0+IHN0eWxlZChDb21wb25lbnROYW1lKWBcbiAgJi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZSgnYm9yZGVyJywgMCl9O1xuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMzVweDtcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xuICAgICR7Ym9yZGVyUmFkaXVzKCc0cHgnKX07XG4gICAgJHt0cmFuc2l0aW9uKCl9O1xuXG4gICAgLmFudC1pbnB1dHtcbiAgICAgIGhlaWdodDogYXV0b1xuICAgIH1cblxuICAgICY6Zm9jdXMsXG4gICAgJi5hbnQtaW5wdXQtYWZmaXgtd3JhcHBlci1mb2N1c2VkIHtcbiAgICAgIGJvcmRlci1jb2xvcjogJHtwYWxldHRlKCdwcmltYXJ5JywgMCl9O1xuICAgICAgLyogYm94LXNoYWRvdzogbm9uZTsgKi9cbiAgICB9XG5cbiAgICAmLmFudC1pbnB1dC1hZmZpeC13cmFwcGVyLWxnIHtcbiAgICAgIGhlaWdodDogNDJweDtcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xuICAgIH1cblxuICAgICYuYW50LWlucHV0LWFmZml4LXdyYXBwZXItc20ge1xuICAgICAgcGFkZGluZzogMXB4IDEwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgfVxuXG4gICAgJi5hbnQtaW5wdXQtc2VhcmNoOm5vdCguYW50LWlucHV0LXNlYXJjaC1lbnRlci1idXR0b24pIHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgfVxuXG4gICAgLmFudC1pbnB1dCB7XG4gICAgICBjdXJzb3I6IHRleHQ7XG4gICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgY29sb3I6ICR7cGFsZXR0ZSgndGV4dCcsIDEpfTtcblxuICAgICAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcbiAgICAgIH1cblxuICAgICAgJjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgfVxuXG4gICAgICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6ICR7cGFsZXR0ZSgnZ3JheXNjYWxlJywgMCl9O1xuICAgICAgfVxuICAgICAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogJHtwYWxldHRlKCdncmF5c2NhbGUnLCAwKX07XG4gICAgICB9XG4gICAgfVxuXG4gICAgLyogLmFudC1pbnB1dC1zdWZmaXgge1xuICAgICAgcmlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzdweCcpfTtcbiAgICAgIGxlZnQ6ICR7KHByb3BzKSA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzdweCcgOiAnaW5oZXJpdCcpfTtcbiAgICB9XG5cbiAgICAuYW50LWlucHV0LWFudC1pbnB1dC1wcmVmaXgge1xuICAgICAgcmlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJzdweCcgOiAnaW5oZXJpdCcpfTtcbiAgICAgIGxlZnQ6ICR7KHByb3BzKSA9PiAocHJvcHNbJ2RhdGEtcnRsJ10gPT09ICdydGwnID8gJ2luaGVyaXQnIDogJzdweCcpfTtcbiAgICB9ICovXG5cbiAgICAuYW50LWlucHV0LXNlYXJjaC1pY29uIHtcbiAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ2dyYXlzY2FsZScsIDApfTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAke3BhbGV0dGUoJ3ByaW1hcnknLCAwKX07XG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgeyBJbnB1dFdyYXBwZXIsIElucHV0R3JvdXBXcmFwcGVyLCBJbnB1dFNlYXJjaFdyYXBwZXIsIFRleHRBcmVhV3JhcHBlciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBlbmFibGVkOiB0cnVlLFxuICBmZXRjaFVybDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Jlc3QtYXV0aC90b2tlbi9vYnRhaW4vXCIsXG4gIHNlY3JldEtleTogXCJ4PXkjbW1hKzkrM2NpeGxhbnV0JGMzd25iamMpI142cXZnJmp6KThwMF5lM3liZyY4MFwiXG59O1xuIiwiY29uc3QgbGFuZ3VhZ2UgPSAnZW5nbGlzaCc7XG5leHBvcnQgY29uc3QgbGFuZ0RpciA9ICdsdHInO1xuXG5leHBvcnQgZGVmYXVsdCBsYW5ndWFnZTtcbiIsImltcG9ydCBkZWZhdWx0VGhlbWUgZnJvbSAnLi9kZWZhdWx0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAuLi5kZWZhdWx0VGhlbWUsXG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBbJyNmMDAnXSxcbiAgICBzZWNvbmRhcnk6IFsnIzBmMCddLFxuICB9LFxufTtcbiIsImNvbnN0IHRoZW1lID0ge307XG5cbnRoZW1lLnBhbGV0dGUgPSB7XG4gIHByaW1hcnk6IFtcbiAgICAnIzQ0ODJGRicsIC8vIDA6IERlZmF1bHRcbiAgICAnIzNBNzhGNScsIC8vIDE6IERhcmtlbiA0JVxuICAgICcjMzc3NUYyJywgLy8gMjogRGFya2VuIDUlXG4gICAgJ3JnYmEoNjgsIDEzMCwgMjU1LCAwLjIpJywgLy8gMzogRmFkZSAyMCVcbiAgICAnIzRDOEFGRicsIC8vIDQ6IExpZ2h0ZW4gMyVcbiAgICAncmdiYSg2OCwgMTMwLCAyNTUsIDAuNzUpJywgLy8gNTogRmFkZSA3NSVcbiAgICAnIzZBQThGRicsIC8vIDY6IExpZ2h0ZW4gMTUlXG4gICAgJyM2M0ExRkYnLCAvLyA3OiBMaWdodGVuIDEyJVxuICAgICcjM0Y3REZBJywgLy8gODogRGFya2VuIDIlXG4gICAgJyMzMzY5ZTcnLCAvLyA5OiBBbGdvbGlhIGNvbG9yXG4gICAgJyM1ODk2RkYnLCAvLyAxMDogTGlnaHRlbiA4JVxuICAgICcjMmI2OWU2JywgLy8gMTE6XG4gICAgJyMyMzZjZmUnLCAvLyAxMjogZGFya2VuIDEwJVxuICAgICcjNGQ4OGZmJywgLy8gMTM6IExpZ2h0ZW4gNSVcbiAgXSxcbiAgc2Vjb25kYXJ5OiBbXG4gICAgJyMyZDM0NDYnLCAvLyAwOiBEYXJrQmx1ZVxuICAgICcjZjFmM2Y2JywgLy8gMTogTGlnaHRCbHVpc2hcbiAgICAnIzc4ODE5NScsIC8vIDI6IExpZ2h0Qmx1ZVxuICAgICcjRTRFNkU5JywgLy8gMzogTGlnaHRCbHVpc2ggRGFya2VuIDUlXG4gICAgJyMzNjRkNzknLCAvLyA0OlxuICAgICcjMjAyNzM5JywgLy8gNTogRGFya0JsdWUgRGFya2VuIDUlXG4gICAgJyNmNWY2ZjgnLCAvLyA2OiBMaWdodGVyQmx1aXNoXG4gICAgJyNlOWViZjEnLCAvLyA3OiBEYXJrQmx1aXNoXG4gICAgJyNGNkY4RkInLCAvLyA4OiBMaWdodGVyQmx1aXNoIExpZ2h0ZW4gMiVcbiAgICAnI0U5RUJFRScsIC8vIDk6IExpZ2h0ZXJCbHVpc2ggRGFya2VuIDMlXG4gICAgJyMxYTFhMWEnLCAvLyAxMDogU2lkZWJhciBzdWJtZW51IHNlbGVjdFxuICBdLFxuICBjb2xvcjogW1xuICAgICcjRkVBQzAxJywgLy8gMDogT3JhbmdlXG4gICAgJyM0MjI5OWEnLCAvLyAxOiBQdXJwbGVcbiAgICAnI0Y3NUQ4MScsIC8vIDI6IFBpbmtcbiAgICAnIzdFRDMyMScsIC8vIDM6IExpbWVHcmVlblxuICAgICcjMzk0MzVmJywgLy8gNDogQmx1ZVNoYWRlXG4gICAgJyNGRkNBMjgnLCAvLyA1OiBZZWxsb3dcbiAgICAnI0YyQkQxQicsIC8vIDY6IFllbGxvdyBEYXJrZW4gNSVcbiAgICAnIzNiNTk5OCcsIC8vIDc6IEZhY2Vib29rXG4gICAgJyMzNDRlODYnLCAvLyA4OiBGYWNlYm9vayBEYXJrZW4gNSVcbiAgICAnI2RkNGIzOScsIC8vIDk6IEdvb2dsZSBQbHVzXG4gICAgJyNkNzM5MjUnLCAvLyAxMDogR29vZ2xlIFBsdXMgRGFya2VuIDUlXG4gICAgJyNlMTQ2MTUnLCAvLyAxMTogQXV0aDBcbiAgICAnI2NhM2YxMycsIC8vIDEyOiBBdXRoMFxuICAgICcjZTAzNjRjJywgLy8gMTM6IHRoZW1lQ29sb3ItLUFsaXphcmluQ3JpbXNvblxuICBdLFxuICB3YXJuaW5nOiBbXG4gICAgJyNmZmJmMDAnLCAvLyAwOiBXYXJuaW5nXG4gIF0sXG4gIHN1Y2Nlc3M6IFtcbiAgICAnIzAwYjE2YScsIC8vIDA6IFN1Y2Nlc3NcbiAgXSxcbiAgZXJyb3I6IFtcbiAgICAnI2Y2NDc0NCcsIC8vIDA6IEVycm9yXG4gICAgJyNFQzNEM0EnLCAvLyAxOiBEYXJrZW4gNCVcbiAgICAnI0ZGNUI1OCcsIC8vIDI6IExpZ2h0ZW4gOCVcbiAgXSxcbiAgZ3JheXNjYWxlOiBbXG4gICAgJyNiYWJhYmEnLCAvLyAwOiBHcmV5U2hhZGVcbiAgICAnI2MxYzFjMScsIC8vIDE6IEdyZXlEYXJrXG4gICAgJyNEOEQ4RDgnLCAvLyAyOiBHcmV5XG4gICAgJyNmMWYxZjEnLCAvLyAzOiBHcmV5QWx0XG4gICAgJyNGM0YzRjMnLCAvLyA0OiBHcmV5TGlnaHRcbiAgICAnI2ZhZmFmYScsIC8vIDU6IERhcmtXaGl0ZVxuICAgICcjRjlGOUY5JywgLy8gNjogRGFya2VyV2hpdGVcbiAgICAnI2ZjZmNmYycsIC8vIDc6ICNmZmYgRGFya2VuIDElXG4gICAgJyNlZWVlZWUnLCAvLyA4OlxuICAgICcjZmJmYmZiJywgLy8gOTpcbiAgICAnI2Y1ZjVmNScsIC8vIDEwOlxuICAgICcjZjdmOGY5JywgLy8gMTE6IHRvZGF5LWhpZ2hsaWdodC1iZ1xuICBdLFxuICB0ZXh0OiBbXG4gICAgJyMzMjMzMzInLCAvLyAwOiBIZWFkaW5nXG4gICAgJyM1OTU5NTknLCAvLyAxOiBIZWFkaW5nTGlnaHRcbiAgICAnIzk3OTc5NycsIC8vIDI6IFRleHRcbiAgICAnIzc5Nzk3OScsIC8vIDM6IFRleHREYXJrXG4gICAgJyM2YTZjNmEnLCAvLyA0OiBIZWFkaW5nIExpZ2h0ZW4gMjIlXG4gIF0sXG4gIGJvcmRlcjogW1xuICAgICcjZTllOWU5JywgLy8gMDogQm9yZGVyXG4gICAgJyNkOGQ4ZDgnLCAvLyAxOiBCb3JkZXJEYXJrXG4gICAgJyNlYmViZWInLCAvLyAyOiBCb3JkZXJMaWdodFxuICAgICcjZDNkM2QzJywgLy8gMzpcbiAgICAncmdiYSgyMjgsIDIyOCwgMjI4LCAwLjY1KScsIC8vIDQ6XG4gIF0sXG5cbiAgY2FsZW5kYXI6IFtcbiAgICAnIzkwNScsIC8vIDA6XG4gICAgJyM2OTAnLCAvLyAxOlxuICAgICcjYTY3ZjU5JywgLy8gMjpcbiAgICAnIzA3YScsIC8vIDM6XG4gICAgJyNkZDRhNjgnLCAvLyA0OlxuICAgICcjZTkwJywgLy8gNTpcbiAgXSxcbn07XG5cbnRoZW1lLmZvbnRzID0ge1xuICBwcmltYXJ5OiAnUm9ib3RvLCBzYW5zLXNlcmlmJyxcbiAgcHJlOiAnQ29uc29sYXMsIExpYmVyYXRpb24gTW9ubywgTWVubG8sIENvdXJpZXIsIG1vbm9zcGFjZScsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsImNvbnN0IHRoZW1lID0ge307XG5cbnRoZW1lLnBhbGV0dGUgPSB7XG4gICAgcHJpbWFyeTogW1xuICAgICAgICAnIzAwNzFhYScsIC8vIDA6IERlZmF1bHRcbiAgICAgICAgJyMzQjg3QUUnLFxuICAgICAgICAnIzFhMmI1NycsXG4gICAgXSxcbiAgICBzZWNvbmRhcnk6IFtcbiAgICAgICAgJyMxMjE4MjEnLCAvLyAwOiBEYXJrQmx1ZVxuICAgICAgICAnIzFhMWExYScsIC8vXG4gICAgXSxcbiAgICBncmF5OiBbXG4gICAgICAgICcjZjhmYWZmJyxcbiAgICAgICAgJyM4ZjhmOGYnLFxuICAgICAgICAnIzNhM2EzYScsXG4gICAgXSxcbiAgICB3YXJuaW5nOiBbXG4gICAgICAgICcjZThjMzZhJyxcbiAgICAgICAgJyNmZmJmMDAnLCAvLyAwOiBXYXJuaW5nXG4gICAgXSxcbiAgICAvLyBjb2xvcjogW1xuICAgIC8vICAgICAnIzAwNzFhYScsIC8vIDA6IERlZmF1bHRcbiAgICAvLyAgICAgJyMxYTJiNTcnLFxuICAgIC8vICAgICAnIzNCODdBRScsXG4gICAgLy8gICAgICcjOGY4ZjhmJyxcbiAgICAvLyAgICAgJyNmOGZhZmYnLFxuICAgIC8vICAgICAnIzNhM2EzYScsXG4gICAgLy8gICAgICcjMTIxODIxJyxcbiAgICAvLyAgICAgJyNlOGMzNmEnLFxuICAgIC8vIF0sXG4gICAgc3VjY2VzczogW1xuICAgICAgICAnIzAwYjE2YScsIC8vIDA6IFN1Y2Nlc3NcbiAgICBdLFxuICAgIGVycm9yOiBbXG4gICAgICAgICcjZjY0NzQ0JywgLy8gMDogRXJyb3JcbiAgICAgICAgJyNFQzNEM0EnLCAvLyAxOiBEYXJrZW4gNCVcbiAgICAgICAgJyNGRjVCNTgnLCAvLyAyOiBMaWdodGVuIDglXG4gICAgXSxcblxuICAgIGdyYXlzY2FsZTogW1xuICAgICAgICAnI2JhYmFiYScsIC8vIDA6IEdyZXlTaGFkZVxuICAgICAgICAnI2MxYzFjMScsIC8vIDE6IEdyZXlEYXJrXG4gICAgICAgICcjRDhEOEQ4JywgLy8gMjogR3JleVxuICAgICAgICAnI2YxZjFmMScsIC8vIDM6IEdyZXlBbHRcbiAgICAgICAgJyNGM0YzRjMnLCAvLyA0OiBHcmV5TGlnaHRcbiAgICAgICAgJyNmYWZhZmEnLCAvLyA1OiBEYXJrV2hpdGVcbiAgICAgICAgJyNGOUY5RjknLCAvLyA2OiBEYXJrZXJXaGl0ZVxuICAgICAgICAnI2ZjZmNmYycsIC8vIDc6ICNmZmYgRGFya2VuIDElXG4gICAgICAgICcjZWVlZWVlJywgLy8gODpcbiAgICAgICAgJyNmYmZiZmInLCAvLyA5OlxuICAgICAgICAnI2Y1ZjVmNScsIC8vIDEwOlxuICAgICAgICAnI2Y3ZjhmOScsIC8vIDExOiB0b2RheS1oaWdobGlnaHQtYmdcbiAgICBdLFxuICAgIHRleHQ6IFtcbiAgICAgICAgJyMyQzJDMkMnLFxuICAgICAgICAnIzMyMzMzMicsIC8vIDA6IEhlYWRpbmdcbiAgICAgICAgJyM1OTU5NTknLCAvLyAxOiBIZWFkaW5nTGlnaHRcbiAgICAgICAgJyM5Nzk3OTcnLCAvLyAyOiBUZXh0XG4gICAgICAgICcjNzk3OTc5JywgLy8gMzogVGV4dERhcmtcbiAgICAgICAgJyM2YTZjNmEnLCAvLyA0OiBIZWFkaW5nIExpZ2h0ZW4gMjIlXG4gICAgXSxcbiAgICBib3JkZXI6IFtcbiAgICAgICAgJyNlOWU5ZTknLCAvLyAwOiBCb3JkZXJcbiAgICAgICAgJyNkOGQ4ZDgnLCAvLyAxOiBCb3JkZXJEYXJrXG4gICAgICAgICcjZWJlYmViJywgLy8gMjogQm9yZGVyTGlnaHRcbiAgICAgICAgJyNkM2QzZDMnLCAvLyAzOlxuICAgICAgICAncmdiYSgyMjgsIDIyOCwgMjI4LCAwLjY1KScsIC8vIDQ6XG4gICAgXSxcbn07XG5cbnRoZW1lLmZvbnRzID0ge1xuICAgIHByaW1hcnk6ICdQVCBTZXJpZiwgc2VyaWYnLFxuICAgIHByZTogJ0NvbnNvbGFzLCBMaWJlcmF0aW9uIE1vbm8sIE1lbmxvLCBDb3VyaWVyLCBtb25vc3BhY2UnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iLCJpbXBvcnQgZGVmYXVsdFRoZW1lIGZyb20gJy4vZGVmYXVsdCc7XG5pbXBvcnQgY3VzdG9tVGhlbWUgZnJvbSAnLi9jdXN0b20nO1xuaW1wb3J0IGd1ZXN0VGhlbWUgZnJvbSAnLi9ndWVzdCc7XG5cbmNvbnN0IHRoZW1lcyA9IHtcbiAgZGVmYXVsdFRoZW1lLFxuICBndWVzdFRoZW1lLFxuICBjdXN0b21UaGVtZSxcbn07XG5cbmV4cG9ydCBjb25zdCB0aGVtZUNvbmZpZyA9IHtcbiAgdG9wYmFyOiAnZGVmYXVsdFRoZW1lJyxcbiAgc2lkZWJhcjogJ2RlZmF1bHRUaGVtZScsXG4gIGxheW91dDogJ2RlZmF1bHRUaGVtZScsXG4gIHRoZW1lOiAnZGVmYXVsdFRoZW1lJyxcbn07XG5leHBvcnQgZGVmYXVsdCB0aGVtZXM7XG4iLCJpbXBvcnQgYW50ZEVuIGZyb20gJ2FudGQvbGliL2xvY2FsZS1wcm92aWRlci9lbl9VUyc7XG5pbXBvcnQgZW5NZXNzYWdlcyBmcm9tICcuLi9sb2NhbGVzL2VuX1VTLmpzb24nO1xuXG5jb25zdCBFbkxhbmcgPSB7XG4gIG1lc3NhZ2VzOiB7XG4gICAgLi4uZW5NZXNzYWdlcyxcbiAgfSxcbiAgYW50ZDogYW50ZEVuLFxuICBsb2NhbGU6ICdlbi1VUycsXG59O1xuZXhwb3J0IGRlZmF1bHQgRW5MYW5nO1xuIiwiaW1wb3J0IHpoTWVzc2FnZXMgZnJvbSAnLi4vbG9jYWxlcy96aC1IYW5zLmpzb24nO1xuXG5jb25zdCBaaExhbiA9IHtcbiAgbWVzc2FnZXM6IHtcbiAgICAuLi56aE1lc3NhZ2VzLFxuICB9LFxuICBhbnRkOiBudWxsLFxuICBsb2NhbGU6ICd6aC1IYW5zLUNOJyxcbn07XG5leHBvcnQgZGVmYXVsdCBaaExhbjtcbiIsImltcG9ydCBFbmxhbmcgZnJvbSAnLi9lbnRyaWVzL2VuLVVTJztcbmltcG9ydCBaaGxhbmcgZnJvbSAnLi9lbnRyaWVzL3poLUhhbnMtQ04nO1xuXG5jb25zdCBBcHBMb2NhbGUgPSB7XG4gIGVuOiBFbmxhbmcsXG4gIHpoOiBaaGxhbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcHBMb2NhbGU7XG4iLCJleHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcbiIsImNvbnN0IG9wdGlvbnMgPSBbXG4gIHtcbiAgICBrZXk6ICdtYWlsYm94JyxcbiAgICBsYWJlbDogJ3NpZGViYXIuZW1haWwnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtbWFpbCcsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjaGF0JyxcbiAgICBsYWJlbDogJ3NpZGViYXIuY2hhdCcsXG4gICAgbGVmdEljb246ICdpb24tY2hhdGJ1YmJsZXMnLFxuICB9LFxuICB7XG4gICAga2V5OiAnZWNvbW1lcmNlJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuZWNvbW1lcmNlJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1iYWcnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ3Nob3AnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuc2hvcCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdjYXJ0JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNhcnQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2hlY2tvdXQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuY2hlY2tvdXQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY2FyZCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5jYXJkcycsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdtYXBzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIubWFwcycsXG4gICAgbGVmdEljb246ICdpb24tbWFwJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdnb29nbGVtYXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuZ29vZ2xlTWFwJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2xlYWZsZXRtYXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIubGVhZmxldE1hcCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdteS1wcm9maWxlJyxcbiAgICBsYWJlbDogJ3NpZGViYXIucHJvZmlsZScsXG4gICAgbGVmdEljb246ICdpb24tcGVyc29uJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ3NjcnVtLWJvYXJkJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuc2NydW1ib2FyZCcsXG4gICAgbGVmdEljb246ICdpb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2ludm9pY2UnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5pbnZvaWNlJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1jbGlwYm9hcmQnLFxuICB9LFxuICB7XG4gICAga2V5OiAneW91dHViZVNlYXJjaCcsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnlvdXR1YmVTZWFyY2gnLFxuICAgIGxlZnRJY29uOiAnaW9uLXNvY2lhbC15b3V0dWJlJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2NhbGVuZGFyJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuY2FsZW5kYXInLFxuICAgIGxlZnRJY29uOiAnaW9uLWNhbGVuZGFyJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ25vdGVzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIubm90ZXMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWlvcy1wYXBlcicsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICd0b2RvJyxcbiAgICBsYWJlbDogJ3NpZGViYXIudG9kb3MnLFxuICAgIGxlZnRJY29uOiAnaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZScsXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdmaXJlc3RvcmVjcnVkJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuZmlyZXN0b3JlY3J1ZCcsXG4gICAgbGVmdEljb246ICdpb24tZmlyZWJhbGwnLFxuXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYXJ0aWNsZXMnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuZmlyZXN0b3JlY3J1ZGFydGljbGUnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnaW52ZXN0b3JzJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmZpcmVzdG9yZWNydWRpbnZlc3RvcicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdjb250YWN0cycsXG4gICAgbGFiZWw6ICdzaWRlYmFyLmNvbnRhY3RzJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1hbmRyb2lkLXBlcnNvbi1hZGQnLFxuICB9LFxuICB7XG4gICAga2V5OiAnc2h1ZmZsZScsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnNodWZmbGUnLFxuICAgIGxlZnRJY29uOiAnaW9uLWdyaWQnLFxuICB9LFxuICB7XG4gICAga2V5OiAnY2hhcnRzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuY2hhcnRzJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1hcnJvdy1ncmFwaC11cC1yaWdodCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZ29vZ2xlQ2hhcnQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuZ29vZ2xlQ2hhcnRzJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JlZWNoYXJ0cycsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5yZWNoYXJ0cycsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdyZWFjdENoYXJ0MicsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5yZWFjdENoYXJ0MicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdmcmFwcGVDaGFydCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5mcmFwcGVDaGFydCcsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdGb3JtcycsXG4gICAgbGFiZWw6ICdzaWRlYmFyLmZvcm1zJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1hbmRyb2lkLW1haWwnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJ0lucHV0RmllbGQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuaW5wdXQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZWRpdG9yJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmVkaXRvcicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdGb3Jtc1dpdGhWYWxpZGF0aW9uJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmZvcm1zV2l0aFZhbGlkYXRpb24nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncHJvZ3Jlc3MnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucHJvZ3Jlc3MnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYnV0dG9uJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmJ1dHRvbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICd0YWInLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudGFiJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2NoZWNrYm94JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNoZWNrYm94JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3JhZGlvYm94JyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnJhZGlvYm94JyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3NlbGVjdGJveCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5zZWxlY3Rib3gnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAndHJhbnNmZXInLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudHJhbnNmZXInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYXV0b2NvbXBsZXRlJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmF1dG9jb21wbGV0ZScsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBrZXk6ICdncmlkTGF5b3V0JyxcbiAgLy8gICBsYWJlbDogJ3NpZGViYXIuYm94T3B0aW9ucycsXG4gIC8vICAgbGVmdEljb246ICdpb24tY3ViZSdcbiAgLy8gfSxcbiAge1xuICAgIGtleTogJ3VpZWxlbWVudHMnLFxuICAgIGxhYmVsOiAnc2lkZWJhci51aUVsZW1lbnRzJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1sZWFmJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdvcF9iYWRnZScsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5iYWRnZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdvcF9jYXJkJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNhcmQyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ29wX2Nhcm91c2VsJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmNvcnVzZWwnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3BfY29sbGFwc2UnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuY29sbGFwc2UnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3BfcG9wb3ZlcicsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5wb3BvdmVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ29wX3Rvb2x0aXAnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudG9vbHRpcCcsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdvcF90YWcnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudGFnJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ29wX3RpbWVsaW5lJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnRpbWVsaW5lJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ2Ryb3Bkb3duJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLmRyb3Bkb3duJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3BhZ2luYXRpb24nLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucGFnaW5hdGlvbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdyYXRpbmcnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIucmF0aW5nJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3RyZWUnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudHJlZScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdzd2lwZXJzbGlkZXInLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuc3dpcGVyc2xpZGVyJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGtleTogJ2FkdmFuY2VkVWllbGVtZW50cycsXG4gICAgbGFiZWw6ICdzaWRlYmFyLmFkdmFuY2VkRWxlbWVudHMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWZsYXNoJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICdyZWFjdERhdGVzJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLnJlYWN0RGF0ZXMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnY29kZU1pcnJvcicsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5jb2RlTWlycm9yJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3VwcHknLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIudXBweScsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdkcm9wem9uZScsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5kcm9wem9uZScsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICdmZWVkYmFjaycsXG4gICAgbGFiZWw6ICdzaWRlYmFyLmZlZWRiYWNrJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi10aHVtYnN1cCcsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAga2V5OiAnYWxlcnQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuYWxlcnQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbW9kYWwnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIubW9kYWwnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnbWVzc2FnZScsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5tZXNzYWdlJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ25vdGlmaWNhdGlvbicsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5ub3RpZmljYXRpb24nLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncG9wQ29uZmlybScsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5wb3BDb25maXJtJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3NwaW4nLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuc3BpbicsXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICBrZXk6ICd0YWJsZScsXG4gICAgbGFiZWw6ICdzaWRlYmFyLnRhYmxlcycsXG4gICAgbGVmdEljb246ICdpb24tYW5kcm9pZC1tZW51JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBrZXk6ICd0YWJsZV9hbnQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuYW50VGFibGVzJyxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIGtleTogJ3BhZ2VzJyxcbiAgICBsYWJlbDogJ3NpZGViYXIucGFnZXMnLFxuICAgIGxlZnRJY29uOiAnaW9uLWRvY3VtZW50LXRleHQnLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIGtleTogJzQwNCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci40MDQnLFxuICAgICAgICB3aXRob3V0RGFzaGJvYXJkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnNTAwJyxcbiAgICAgICAgbGFiZWw6ICdzaWRlYmFyLjUwMCcsXG4gICAgICAgIHdpdGhvdXREYXNoYm9hcmQ6IHRydWUsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBrZXk6ICdzaWduaW4nLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuc2lnbkluJyxcbiAgICAgICAgd2l0aG91dERhc2hib2FyZDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGtleTogJ3NpZ251cCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5zaWduVXAnLFxuICAgICAgICB3aXRob3V0RGFzaGJvYXJkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAnZm9yZ290cGFzc3dvcmQnLFxuICAgICAgICBsYWJlbDogJ3NpZGViYXIuZm9yZ290UHcnLFxuICAgICAgICB3aXRob3V0RGFzaGJvYXJkOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAga2V5OiAncmVzZXRwYXNzd29yZCcsXG4gICAgICAgIGxhYmVsOiAnc2lkZWJhci5yZXNldFB3JyxcbiAgICAgICAgd2l0aG91dERhc2hib2FyZDogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIHtcbiAgICAgIC8vICAga2V5OiAnY29taW5nU29vbicsXG4gICAgICAvLyAgIGxhYmVsOiAnc2lkZWJhci5jb21pbmdTb29uJyxcbiAgICAgIC8vICAgIHdpdGhvdXREYXNoYm9hcmQ6IHRydWVcbiAgICAgIC8vIH1cbiAgICBdLFxuICB9LFxuICB7XG4gICAga2V5OiAnZ2l0aHViU2VhcmNoJyxcbiAgICBsYWJlbDogJ3NpZGViYXIuZ2l0aHViU2VhcmNoJyxcbiAgICBsZWZ0SWNvbjogJ2lvbi1zb2NpYWwtZ2l0aHViJyxcbiAgfSxcbiAge1xuICAgIGtleTogJ2JsYW5rX3BhZ2UnLFxuICAgIGxhYmVsOiAnc2lkZWJhci5ibGFua1BhZ2UnLFxuICAgIGxlZnRJY29uOiAnaW9uLWRvY3VtZW50JyxcbiAgfSxcbl07XG5leHBvcnQgZGVmYXVsdCBvcHRpb25zO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxubGV0IGRpcmVjdGlvbiA9ICdsdHInO1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGRpcmVjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF0uZ2V0QXR0cmlidXRlKCdkaXInKTtcbn1cbmNvbnN0IHdpdGhEaXJlY3Rpb24gPSBDb21wb25lbnQgPT4gcHJvcHMgPT4ge1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucHJvcHN9IGRhdGEtcnRsPXtkaXJlY3Rpb259IC8+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aERpcmVjdGlvbjtcbmV4cG9ydCB7IGRpcmVjdGlvbiB9O1xuIiwiLy8gVHJhbnNpdGlvblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zaXRpb24odGltaW5nID0gMC4zKSB7XG4gIHJldHVybiBgXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAke3RpbWluZ31zIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgJHt0aW1pbmd9cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgJHt0aW1pbmd9cyBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKTtcbiAgICAgIC1vLXRyYW5zaXRpb246IGFsbCAke3RpbWluZ31zIGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpO1xuICAgICAgdHJhbnNpdGlvbjogYWxsICR7dGltaW5nfXMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSk7XG4gIGA7XG59XG5cbi8vIEJvcmRlciBSYWRpdXNcbmV4cG9ydCBmdW5jdGlvbiBib3JkZXJSYWRpdXMocmFkaXVzID0gMCkge1xuICByZXR1cm4gYFxuICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAke3JhZGl1c307XG4gICAgICAtbW96LWJvcmRlci1yYWRpdXM6ICR7cmFkaXVzfTtcbiAgICAgIC1tcy10cmFuc2l0aW9uOiAke3JhZGl1c307XG4gICAgICAtby1ib3JkZXItcmFkaXVzOiAke3JhZGl1c307XG4gICAgICBib3JkZXItcmFkaXVzOiAke3JhZGl1c307XG4gIGA7XG59XG5cbi8vIEJveCBTaGFkb3dcbmV4cG9ydCBmdW5jdGlvbiBib3hTaGFkb3coc2hhZG93ID0gJ25vbmUnKSB7XG4gIHJldHVybiBgXG4gICAgICAtd2Via2l0LWJveC1zaGFkb3c6ICR7c2hhZG93fTtcbiAgICAgIC1tb3otYm94LXNoYWRvdzogJHtzaGFkb3d9O1xuICAgICAgYm94LXNoYWRvdzogJHtzaGFkb3d9O1xuICBgO1xufVxuIiwiaW1wb3J0IHFzIGZyb20gJ3FzJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4vb3B0aW9ucyc7XG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJy4vaXNTZXJ2ZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5pdERhdGEoKSB7XG4gIGlmICghaXNTZXJ2ZXIpIHtcbiAgICBjb25zdCBpbml0RGF0YSA9IHFzLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkpO1xuICAgIGlmIChpbml0RGF0YS50b2dnbGUpXG4gICAgICBpbml0RGF0YS50b2dnbGUuZnJlZV9zaGlwcGluZyA9XG4gICAgICAgIGluaXREYXRhLnRvZ2dsZS5mcmVlX3NoaXBwaW5nID09PSAndHJ1ZScgPyB0cnVlIDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBpbml0RGF0YTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0VXJsKHNlYXJjaFN0YXRlKSB7XG4gIGlmICghaXNTZXJ2ZXIpIHtcbiAgICBjb25zdCBzZWFyY2ggPSBzZWFyY2hTdGF0ZVxuICAgICAgPyBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9PyR7cXMuc3RyaW5naWZ5KHNlYXJjaFN0YXRlKX1gXG4gICAgICA6ICcnO1xuICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZShzZWFyY2hTdGF0ZSwgbnVsbCwgc2VhcmNoKTtcbiAgfVxuICByZXR1cm47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0UGF0aCgpIHtcbiAgY29uc3QgZ2V0UGFyZW50ID0gbGFzdFJvdXRlID0+IHtcbiAgICBjb25zdCBwYXJlbnQgPSBbXTtcbiAgICBpZiAoIWxhc3RSb3V0ZSkgcmV0dXJuIHBhcmVudDtcbiAgICBwYXJlbnQucHVzaChsYXN0Um91dGUpO1xuICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xuICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlbikge1xuICAgICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgaWYgKGNoaWxkLmtleSA9PT0gbGFzdFJvdXRlKSB7XG4gICAgICAgICAgICBwYXJlbnQucHVzaChvcHRpb24ua2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBwYXJlbnQ7XG4gIH07XG4gIGlmICghaXNTZXJ2ZXIgJiYgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKSB7XG4gICAgY29uc3Qgcm91dGVzID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnNwbGl0KCcvJyk7XG4gICAgaWYgKHJvdXRlcy5sZW5ndGggPiAxKSB7XG4gICAgICBjb25zdCBsYXN0Um91dGUgPSByb3V0ZXNbcm91dGVzLmxlbmd0aCAtIDFdO1xuICAgICAgcmV0dXJuIGdldFBhcmVudChsYXN0Um91dGUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gW107XG59XG4iLCJpbXBvcnQgeyBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJUb2tlbigpIHtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2lkX3Rva2VuJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUb2tlbigpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBpZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJyk7XG4gICAgcmV0dXJuIG5ldyBNYXAoeyBpZFRva2VuIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjbGVhclRva2VuKCk7XG4gICAgcmV0dXJuIG5ldyBNYXAoKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJyYXlFcXVhbChhcnJheTEsIGFycmF5Mikge1xuICByZXR1cm4gYXJyYXkxLnNvcnQoKS50b1N0cmluZygpID09IGFycmF5Mi5zb3J0KCkudG9TdHJpbmcoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVEaWZmZXJlbmNlKGdpdmVuVGltZSkge1xuICBnaXZlblRpbWUgPSBuZXcgRGF0ZShnaXZlblRpbWUpO1xuICBjb25zdCBtaWxsaXNlY29uZHMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIGdpdmVuVGltZS5nZXRUaW1lKCk7XG4gIGNvbnN0IG51bWJlckVuZGluZyA9IG51bWJlciA9PiB7XG4gICAgcmV0dXJuIG51bWJlciA+IDEgPyAncycgOiAnJztcbiAgfTtcbiAgY29uc3QgbnVtYmVyID0gbnVtID0+IChudW0gPiA5ID8gJycgKyBudW0gOiAnMCcgKyBudW0pO1xuICBjb25zdCBnZXRUaW1lID0gKCkgPT4ge1xuICAgIGxldCB0ZW1wID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICBjb25zdCB5ZWFycyA9IE1hdGguZmxvb3IodGVtcCAvIDMxNTM2MDAwKTtcbiAgICBpZiAoeWVhcnMpIHtcbiAgICAgIGNvbnN0IG1vbnRoID0gbnVtYmVyKGdpdmVuVGltZS5nZXRVVENNb250aCgpICsgMSk7XG4gICAgICBjb25zdCBkYXkgPSBudW1iZXIoZ2l2ZW5UaW1lLmdldFVUQ0RhdGUoKSk7XG4gICAgICBjb25zdCB5ZWFyID0gZ2l2ZW5UaW1lLmdldFVUQ0Z1bGxZZWFyKCkgJSAxMDA7XG4gICAgICByZXR1cm4gYCR7ZGF5fS0ke21vbnRofS0ke3llYXJ9YDtcbiAgICB9XG4gICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IoKHRlbXAgJT0gMzE1MzYwMDApIC8gODY0MDApO1xuICAgIGlmIChkYXlzKSB7XG4gICAgICBpZiAoZGF5cyA8IDI4KSB7XG4gICAgICAgIHJldHVybiBkYXlzICsgJyBkYXknICsgbnVtYmVyRW5kaW5nKGRheXMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgbW9udGhzID0gW1xuICAgICAgICAgICdKYW4nLFxuICAgICAgICAgICdGZWInLFxuICAgICAgICAgICdNYXInLFxuICAgICAgICAgICdBcHInLFxuICAgICAgICAgICdNYXknLFxuICAgICAgICAgICdKdW4nLFxuICAgICAgICAgICdKdWwnLFxuICAgICAgICAgICdBdWcnLFxuICAgICAgICAgICdTZXAnLFxuICAgICAgICAgICdPY3QnLFxuICAgICAgICAgICdOb3YnLFxuICAgICAgICAgICdEZWMnLFxuICAgICAgICBdO1xuICAgICAgICBjb25zdCBtb250aCA9IG1vbnRoc1tnaXZlblRpbWUuZ2V0VVRDTW9udGgoKV07XG4gICAgICAgIGNvbnN0IGRheSA9IG51bWJlcihnaXZlblRpbWUuZ2V0VVRDRGF0ZSgpKTtcbiAgICAgICAgcmV0dXJuIGAke2RheX0gJHttb250aH1gO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IoKHRlbXAgJT0gODY0MDApIC8gMzYwMCk7XG4gICAgaWYgKGhvdXJzKSB7XG4gICAgICByZXR1cm4gYCR7aG91cnN9IGhvdXIke251bWJlckVuZGluZyhob3Vycyl9IGFnb2A7XG4gICAgfVxuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0ZW1wICU9IDM2MDApIC8gNjApO1xuICAgIGlmIChtaW51dGVzKSB7XG4gICAgICByZXR1cm4gYCR7bWludXRlc30gbWludXRlJHtudW1iZXJFbmRpbmcobWludXRlcyl9IGFnb2A7XG4gICAgfVxuICAgIHJldHVybiAnYSBmZXcgc2Vjb25kcyBhZ28nO1xuICB9O1xuICByZXR1cm4gZ2V0VGltZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9JbnQodmFsdWUsIGRlZlZhbHVlID0gMCkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoIWlzTmFOKHZhbHVlKSkge1xuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICB9XG4gIHJldHVybiBkZWZWYWx1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1Bvc2V0aXZlSW50KHZhbHVlLCBkZWZWYWx1ZSA9IDApIHtcbiAgY29uc3QgdmFsID0gc3RyaW5nVG9JbnQodmFsdWUsIGRlZlZhbHVlKTtcbiAgcmV0dXJuIHZhbCA+IC0xID8gdmFsIDogZGVmVmFsdWU7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICBjb25zdCBpc0NsaWVudCA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnO1xuXG4gIGNvbnN0IGdldFNpemUgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoKSA9PiAoe1xuICAgICAgd2lkdGg6IGlzQ2xpZW50ID8gd2luZG93LmlubmVyV2lkdGggOiB1bmRlZmluZWQsXG4gICAgICBoZWlnaHQ6IGlzQ2xpZW50ID8gd2luZG93LmlubmVySGVpZ2h0IDogdW5kZWZpbmVkLFxuICAgIH0pLFxuICAgIFtpc0NsaWVudF1cbiAgKTtcblxuICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSBSZWFjdC51c2VTdGF0ZShnZXRTaXplKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaXNDbGllbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qgb25IYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgICBzZXRTaXplKGdldFNpemUpO1xuICAgIH07XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uSGFuZGxlUmVzaXplKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uSGFuZGxlUmVzaXplKTtcbiAgfSwgW2dldFNpemUsIGlzQ2xpZW50XSk7XG5cbiAgcmV0dXJuIHNpemU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VXaW5kb3dTaXplO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFZpZXcod2lkdGgpIHtcbiAgbGV0IG5ld1ZpZXcgPSAnTW9iaWxlVmlldyc7XG4gIGlmICh3aWR0aCA+IDEyMjApIHtcbiAgICBuZXdWaWV3ID0gJ0Rlc2t0b3BWaWV3JztcbiAgfSBlbHNlIGlmICh3aWR0aCA+IDc2Nykge1xuICAgIG5ld1ZpZXcgPSAnVGFiVmlldyc7XG4gIH1cbiAgcmV0dXJuIG5ld1ZpZXc7XG59XG5jb25zdCBhY3Rpb25zID0ge1xuICBDT0xMUFNFX0NIQU5HRTogJ0NPTExQU0VfQ0hBTkdFJyxcbiAgQ09MTFBTRV9PUEVOX0RSQVdFUjogJ0NPTExQU0VfT1BFTl9EUkFXRVInLFxuICBDSEFOR0VfT1BFTl9LRVlTOiAnQ0hBTkdFX09QRU5fS0VZUycsXG4gIFRPR0dMRV9BTEw6ICdUT0dHTEVfQUxMJyxcbiAgQ0hBTkdFX0NVUlJFTlQ6ICdDSEFOR0VfQ1VSUkVOVCcsXG4gIENMRUFSX01FTlU6ICdDTEVBUl9NRU5VJyxcbiAgdG9nZ2xlQ29sbGFwc2VkOiAoKSA9PiAoe1xuICAgIHR5cGU6IGFjdGlvbnMuQ09MTFBTRV9DSEFOR0UsXG4gIH0pLFxuICB0b2dnbGVBbGw6ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XG4gICAgY29uc3QgdmlldyA9IGdldFZpZXcod2lkdGgpO1xuICAgIGNvbnN0IGNvbGxhcHNlZCA9IHZpZXcgIT09ICdEZXNrdG9wVmlldyc7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFjdGlvbnMuVE9HR0xFX0FMTCxcbiAgICAgIGNvbGxhcHNlZCxcbiAgICAgIHZpZXcsXG4gICAgICBoZWlnaHQsXG4gICAgfTtcbiAgfSxcbiAgdG9nZ2xlT3BlbkRyYXdlcjogKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkNPTExQU0VfT1BFTl9EUkFXRVIsXG4gIH0pLFxuICBjaGFuZ2VPcGVuS2V5czogb3BlbktleXMgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkNIQU5HRV9PUEVOX0tFWVMsXG4gICAgb3BlbktleXMsXG4gIH0pLFxuICBjaGFuZ2VDdXJyZW50OiBjdXJyZW50ID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5DSEFOR0VfQ1VSUkVOVCxcbiAgICBjdXJyZW50LFxuICB9KSxcbiAgY2xlYXJNZW51OiAoKSA9PiAoeyB0eXBlOiBhY3Rpb25zLkNMRUFSX01FTlUgfSksXG59O1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcbiIsImltcG9ydCB7IGdldERlZmF1bHRQYXRoIH0gZnJvbSAnQGlzby9saWIvaGVscGVycy91cmxfc3luYyc7XG5pbXBvcnQgYWN0aW9ucywgeyBnZXRWaWV3IH0gZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnQGlzby9saWIvaGVscGVycy9pc1NlcnZlcic7XG5jb25zdCBwcmVLZXlzID0gZ2V0RGVmYXVsdFBhdGgoKTtcbmNvbnN0IGluaXRTdGF0ZSA9IHtcbiAgY29sbGFwc2VkOiAhaXNTZXJ2ZXIgJiYgd2luZG93LmlubmVyV2lkdGggPiAxMjIwID8gZmFsc2UgOiB0cnVlLFxuICB2aWV3OiAhaXNTZXJ2ZXIgJiYgZ2V0Vmlldyh3aW5kb3cuaW5uZXJXaWR0aCksXG4gIGhlaWdodDogIWlzU2VydmVyICYmIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgb3BlbkRyYXdlcjogZmFsc2UsXG4gIG9wZW5LZXlzOiBwcmVLZXlzLFxuICBjdXJyZW50OiBwcmVLZXlzLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXBwUmVkdWNlcihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvbnMuQ09MTFBTRV9DSEFOR0U6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29sbGFwc2VkOiAhc3RhdGUuY29sbGFwc2VkLFxuICAgICAgfTtcbiAgICBjYXNlIGFjdGlvbnMuQ09MTFBTRV9PUEVOX0RSQVdFUjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcGVuRHJhd2VyOiAhc3RhdGUub3BlbkRyYXdlcixcbiAgICAgIH07XG4gICAgY2FzZSBhY3Rpb25zLlRPR0dMRV9BTEw6XG4gICAgICBpZiAoc3RhdGUudmlldyAhPT0gYWN0aW9uLnZpZXcgfHwgYWN0aW9uLmhlaWdodCAhPT0gc3RhdGUuaGVpZ2h0KSB7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGFjdGlvbi5oZWlnaHQgPyBhY3Rpb24uaGVpZ2h0IDogc3RhdGUuaGVpZ2h0O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGNvbGxhcHNlZDogYWN0aW9uLmNvbGxhcHNlZCxcbiAgICAgICAgICB2aWV3OiBhY3Rpb24udmlldyxcbiAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlIGFjdGlvbnMuQ0hBTkdFX09QRU5fS0VZUzpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBvcGVuS2V5czogYWN0aW9uLm9wZW5LZXlzLFxuICAgICAgfTtcbiAgICBjYXNlIGFjdGlvbnMuQ0hBTkdFX0NVUlJFTlQ6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY3VycmVudDogYWN0aW9uLmN1cnJlbnQsXG4gICAgICB9O1xuICAgIGNhc2UgYWN0aW9ucy5DTEVBUl9NRU5VOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIG9wZW5LZXlzOiBbXSxcbiAgICAgICAgY3VycmVudDogW10sXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIiwiaW1wb3J0IHsgY29udGFjdHMgfSBmcm9tICcuL3JlZHVjZXInO1xuXG5mdW5jdGlvbiBhc2NlbmRpbmdTb3J0KGNvbnRhY3QxLCBjb250YWN0Mikge1xuICBjb25zdCBuYW1lMSA9IGNvbnRhY3QxLm5hbWUgPyBjb250YWN0MS5uYW1lLnRvVXBwZXJDYXNlKCkgOiAnfic7XG4gIGNvbnN0IG5hbWUyID0gY29udGFjdDIubmFtZSA/IGNvbnRhY3QyLm5hbWUudG9VcHBlckNhc2UoKSA6ICd+JztcbiAgcmV0dXJuIG5hbWUxID4gbmFtZTIgPyAxIDogbmFtZTEgPT09IG5hbWUyID8gMCA6IC0xO1xufVxuXG5jb25zdCBjb250YWN0QWN0aW9ucyA9IHtcbiAgQUREX0NPTlRBQ1Q6ICdBRERfQ09OVEFDVCcsXG4gIEVESVRfQ09OVEFDVDogJ0VESVRfQ09OVEFDVCcsXG4gIERFTEVURV9fQ09OVEFDVDogJ0RFTEVURV9fQ09OVEFDVCcsXG4gIENIQU5HRV9DT05UQUNUOiAnQ0hBTkdFX0NPTlRBQ1QnLFxuICBFRElUX1ZJRVc6ICdFRElUX1ZJRVcnLFxuICBjaGFuZ2VDb250YWN0OiBpZCA9PiAoe1xuICAgIHR5cGU6IGNvbnRhY3RBY3Rpb25zLkNIQU5HRV9DT05UQUNULFxuICAgIGlkLFxuICB9KSxcbiAgYWRkQ29udGFjdDogKCkgPT4ge1xuICAgIGNvbnN0IG5ld0NvbnRhY3QgPSB7XG4gICAgICBpZDogbmV3IERhdGUoKSxcbiAgICAgIGZpcnN0TmFtZTogJycsXG4gICAgICBhdmF0YXI6IGNvbnRhY3RzW25ldyBEYXRlKCkgJSAxMF0uYXZhdGFyLFxuICAgICAgTGFzdE5hbWU6ICcnLFxuICAgICAgbW9iaWxlOiAnJyxcbiAgICAgIGhvbWU6ICcnLFxuICAgICAgbmFtZTogJycsXG4gICAgICBjb21wYW55OiAnJyxcbiAgICAgIHdvcms6ICcnLFxuICAgICAgbm90ZTogJycsXG4gICAgfTtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBjb250YWN0QWN0aW9ucy5BRERfQ09OVEFDVCxcbiAgICAgICAgY29udGFjdHM6IFsuLi5nZXRTdGF0ZSgpLkNvbnRhY3RzLmNvbnRhY3RzLCBuZXdDb250YWN0XSxcbiAgICAgICAgc2VsZWN0ZWRJZDogbmV3Q29udGFjdC5pZCxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG4gIGVkaXRDb250YWN0OiBuZXdDb250YWN0ID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgY29udGFjdHMgPSBnZXRTdGF0ZSgpLkNvbnRhY3RzLmNvbnRhY3RzO1xuICAgICAgY29uc3QgbmV3Q29udGFjdHMgPSBbXTtcbiAgICAgIGNvbnRhY3RzLmZvckVhY2goY29udGFjdCA9PiB7XG4gICAgICAgIGlmIChjb250YWN0LmlkID09PSBuZXdDb250YWN0LmlkKSB7XG4gICAgICAgICAgbmV3Q29udGFjdHMucHVzaChuZXdDb250YWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdDb250YWN0cy5wdXNoKGNvbnRhY3QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogY29udGFjdEFjdGlvbnMuRURJVF9DT05UQUNULFxuICAgICAgICBjb250YWN0czogbmV3Q29udGFjdHMuc29ydChhc2NlbmRpbmdTb3J0KSxcbiAgICAgIH0pO1xuICAgIH07XG4gIH0sXG4gIGRlbGV0ZUNvbnRhY3Q6IGlkID0+IHtcbiAgICByZXR1cm4gKGRpc3BhdGNoLCBnZXRTdGF0ZSkgPT4ge1xuICAgICAgY29uc3QgY29udGFjdHMgPSBnZXRTdGF0ZSgpLkNvbnRhY3RzLmNvbnRhY3RzO1xuICAgICAgY29uc3Qgc2VlY3RlZElkID0gZ2V0U3RhdGUoKS5Db250YWN0cy5zZWVjdGVkSWQ7XG4gICAgICBjb25zdCBuZXdDb250YWN0cyA9IFtdO1xuICAgICAgY29udGFjdHMuZm9yRWFjaChjb250YWN0ID0+IHtcbiAgICAgICAgaWYgKGNvbnRhY3QuaWQgPT09IGlkKSB7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV3Q29udGFjdHMucHVzaChjb250YWN0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IGNvbnRhY3RBY3Rpb25zLkRFTEVURV9fQ09OVEFDVCxcbiAgICAgICAgY29udGFjdHM6IG5ld0NvbnRhY3RzLFxuICAgICAgICBzZWVjdGVkSWQ6IGlkID09PSBzZWVjdGVkSWQgPyB1bmRlZmluZWQgOiBzZWVjdGVkSWQsXG4gICAgICB9KTtcbiAgICB9O1xuICB9LFxuICB2aWV3Q2hhbmdlOiB2aWV3ID0+ICh7XG4gICAgdHlwZTogY29udGFjdEFjdGlvbnMuRURJVF9WSUVXLFxuICAgIHZpZXcsXG4gIH0pLFxufTtcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RBY3Rpb25zO1xuIiwiZXhwb3J0IGNvbnN0IG90aGVyQXR0cmlidXRlcyA9IFtcbiAgeyB0aXRsZTogJ01vYmlsZScsIHZhbHVlOiAnbW9iaWxlJywgdHlwZTogJ3Bob25lTnVtYmVyJyB9LFxuICB7IHRpdGxlOiAnSG9tZScsIHZhbHVlOiAnaG9tZScsIHR5cGU6ICdwaG9uZU51bWJlcicgfSxcbiAgeyB0aXRsZTogJ0NvbXBhbnknLCB2YWx1ZTogJ2NvbXBhbnknLCB0eXBlOiAnY29tcGFueScgfSxcbiAgeyB0aXRsZTogJ1dvcmsnLCB2YWx1ZTogJ3dvcmsnLCB0eXBlOiAncGhvbmVOdW1iZXInIH0sXG4gIHsgdGl0bGU6ICdOb3RlcycsIHZhbHVlOiAnbm90ZScsIHR5cGU6ICdwYXJhZ3JhcGgnIH0sXG5dO1xuXG5jb25zdCBjb250YWN0TGlzdCA9IEpTT04ucGFyc2UoXG4gIGBbe1xuICBcImlkXCI6IDIyMTQzLFxuICBcImF2YXRhclwiOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvZHZkd2luZGVuLzEyOC5qcGdcIixcbiAgXCJmaXJzdE5hbWVcIjogXCJCZW5qYW1pblwiLFxuICBcImxhc3ROYW1lXCI6IFwiSmFjb2JpXCIsXG4gIFwibmFtZVwiOiBcIkJlbmphbWluIEphY29iaVwiLFxuICBcIm1vYmlsZVwiOiBcIigwMjMpIDMwMi0zMTYxIHg2MDQ1MVwiLFxuICBcImhvbWVcIjogXCIoMTM2KSA0MDMtMDQ3NiB4ODM4OFwiLFxuICBcImNvbXBhbnlcIjogXCJDYXNwZXIgSW5jXCIsXG4gIFwid29ya1wiOiBcIigzOTkpIDUwNi05NDM4XCIsXG4gIFwibm90ZVwiOiBcIlF1aXNxdWFtIGV0IG5pc2kuIERpY3RhIGluIHV0IGVvcyBjb25zZXF1YXR1ciBpcHN1bSBvbW5pcy4gUXVpc3F1YW0gZG9sb3JlbXF1ZSBlcnJvciBwcmFlc2VudGl1bSBzYXBpZW50ZSBldCB2aXRhZS4gT21uaXMgZmFjZXJlIHNpbnQgbnVsbGEgc2ltaWxpcXVlIHZlbCB2b2x1cHRhdGVtIG9mZmljaWEgZGVsZW5pdGkuXCJcbn0sIHtcbiAgXCJpZFwiOiAxNzM4NSxcbiAgXCJhdmF0YXJcIjogXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2FudG9ueXpvdG92LzEyOC5qcGdcIixcbiAgXCJmaXJzdE5hbWVcIjogXCJDbGVtZW50aW5hXCIsXG4gIFwibGFzdE5hbWVcIjogXCJIYWhuXCIsXG4gIFwibmFtZVwiOiBcIkNsZW1lbnRpbmEgSGFoblwiLFxuICBcIm1vYmlsZVwiOiBcIjY4Ni4yOTIuMzU0OCB4NzIxOVwiLFxuICBcImhvbWVcIjogXCI0NDctMzQzLTQ4NjQgeDQxNFwiLFxuICBcImNvbXBhbnlcIjogXCJNYXJxdWFyZHQgSW5jXCIsXG4gIFwid29ya1wiOiBcIjI5OS03MjEtNjgyOCB4ODU2XCIsXG4gIFwibm90ZVwiOiBcIkRpc3RpbmN0aW8gdm9sdXB0YXMgcmVwZWxsZW5kdXMgcmVydW0gdGVtcG9yaWJ1cyBkZXNlcnVudCBldCBjb3JydXB0aSBzaW50LiBPZGl0IHNpdCBsYWJvcmUgcXVpYS4gUGVyZmVyZW5kaXMgaXVyZSBlb3MgcXVpIHRlbXBvcmUgZXggc2FlcGUgY29uc2VxdXVudHVyIGFjY3VzYW11cyBpcHNhLiBFaXVzIGNvbnNlY3RldHVyIG5hbSBxdWFzLiBMYWJvcnVtIGFwZXJpYW0gaGljIGRvbG9ydW0gcXVhZSBhdXRlbSBjb25zZXF1YXR1ci5cIlxufSwge1xuICBcImlkXCI6IDg1ODM4LFxuICBcImF2YXRhclwiOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvYnVuZ2l3YW4vMTI4LmpwZ1wiLFxuICBcImZpcnN0TmFtZVwiOiBcIkNsaW50b25cIixcbiAgXCJsYXN0TmFtZVwiOiBcIkdveWV0dGVcIixcbiAgXCJuYW1lXCI6IFwiQ2xpbnRvbiBHb3lldHRlXCIsXG4gIFwibW9iaWxlXCI6IFwiKDkxMykgMTI3LTE1NjMgeDA4MlwiLFxuICBcImhvbWVcIjogXCIoODQzKSA1MDEtODgwNFwiLFxuICBcImNvbXBhbnlcIjogXCJGZWlsIC0gR29vZHdpblwiLFxuICBcIndvcmtcIjogXCI3MzIuMTExLjg4ODNcIixcbiAgXCJub3RlXCI6IFwiTWFpb3JlcyBhbmltaSBldCBxdWlkZW0uIER1Y2ltdXMgdm9sdXB0YXRlIGVzdCBjb25zZXF1YXR1ciB1dCB2aXRhZSBpbi4gVXQgZnVnaXQgc2l0IGFiIGJsYW5kaXRpaXMgYWIgb2NjYWVjYXRpIHNvbHV0YSBxdWlzLlwiXG59LCB7XG4gIFwiaWRcIjogMjc5MSxcbiAgXCJhdmF0YXJcIjogXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL2JlbmVmcml0ei8xMjguanBnXCIsXG4gIFwiZmlyc3ROYW1lXCI6IFwiRm9ycmVzdFwiLFxuICBcImxhc3ROYW1lXCI6IFwiS2xlaW5cIixcbiAgXCJuYW1lXCI6IFwiRm9ycmVzdCBLbGVpblwiLFxuICBcIm1vYmlsZVwiOiBcIjE3NC02MjgtNTgwMiB4ODMyNFwiLFxuICBcImhvbWVcIjogXCIoMDQ3KSAxNDEtMDI0N1wiLFxuICBcImNvbXBhbnlcIjogXCJXaWxraW5zb24gLSBIb3dlXCIsXG4gIFwid29ya1wiOiBcIjEtNjI0LTIzOC05MjUyXCIsXG4gIFwibm90ZVwiOiBcIlNpdCBldCBub24gZGViaXRpcy4gUXVpcyBhdHF1ZSBmYWNpbGlzIGV0IHNlZC4gSWxsdW0gYWRpcGlzY2kgZGVzZXJ1bnQgY29ycG9yaXMgbW9kaSBuZWNlc3NpdGF0aWJ1cyBhdCBudW1xdWFtIG5lcXVlIHNpbnQuXCJcbn0sIHtcbiAgXCJpZFwiOiA2NzQ5MyxcbiAgXCJhdmF0YXJcIjogXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL3NhbGxlZWRlc2lnbi8xMjguanBnXCIsXG4gIFwiZmlyc3ROYW1lXCI6IFwiR2VuZXJhbFwiLFxuICBcImxhc3ROYW1lXCI6IFwiS3ViXCIsXG4gIFwibmFtZVwiOiBcIkdlbmVyYWwgS3ViXCIsXG4gIFwibW9iaWxlXCI6IFwiNzc5LjQ4Mi45ODI0XCIsXG4gIFwiaG9tZVwiOiBcIig2OTgpIDg1OC0wMzM3IHgzMjczXCIsXG4gIFwiY29tcGFueVwiOiBcIk1vZW4gR3JvdXBcIixcbiAgXCJ3b3JrXCI6IFwiODgxLjc2OC43NTIyXCIsXG4gIFwibm90ZVwiOiBcIlF1aWJ1c2RhbSBkb2xvcmVtIG1pbmltYSBlYSBlbmltIG5vc3RydW0gZW9zLiBDb3JydXB0aSBkb2xvcmUgdmVsaXQgbW9sZXN0aWFlIG5vc3RydW0gZXJyb3IgcXVpLiBTaXQgcXVpIG1heGltZSBzZWQgcXVpc3F1YW0gcmVtIGN1cGlkaXRhdGUuIElzdGUgZXggcXVpZGVtLiBJcHNhbSBldCBxdWlhIG9tbmlzIGZhY2VyZSBibGFuZGl0aWlzLlwiXG59LCB7XG4gIFwiaWRcIjogNzU1OTMsXG4gIFwiYXZhdGFyXCI6IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9zdGFsZXdpbmUvMTI4LmpwZ1wiLFxuICBcImZpcnN0TmFtZVwiOiBcIkxvblwiLFxuICBcImxhc3ROYW1lXCI6IFwiV3Vuc2NoXCIsXG4gIFwibmFtZVwiOiBcIkxvbiBXdW5zY2hcIixcbiAgXCJtb2JpbGVcIjogXCIoNzkyKSA2MDctNjM2NiB4ODg5NzVcIixcbiAgXCJob21lXCI6IFwiNDQ3LjY4My4zNzk5IHgzODY2OFwiLFxuICBcImNvbXBhbnlcIjogXCJKb2hucywgR2lic29uIGFuZCBTY2hpbm5lclwiLFxuICBcIndvcmtcIjogXCIoNzM1KSA4NTktNzY3NFwiLFxuICBcIm5vdGVcIjogXCJWZWxpdCBub24gdm9sdXB0YXMgc2VkIHNpdCBwYXJpYXR1ciBlYXJ1bSB1bmRlIG5lcXVlLiBJbmNpZHVudCBuYW0gcmVwcmVoZW5kZXJpdCBub24gbW9sbGl0aWEuIEluY2lkdW50IHF1byBpbGx1bSBtb2RpIGV4IGVvcyBjb25zZXF1dW50dXIgZWl1cyBuaWhpbCBpdGFxdWUuIFF1aXMgdGVuZXR1ciByYXRpb25lIHJlcHVkaWFuZGFlIGVhIGV0IGFyY2hpdGVjdG8gZG9sb3JlbSBwb3Jyby4gUmVtIG5vbiBjb25zZWN0ZXR1ciBlYSBpc3RlLlwiXG59LCB7XG4gIFwiaWRcIjogOTAwOTYsXG4gIFwiYXZhdGFyXCI6IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci9jaGVyaWZfYi8xMjguanBnXCIsXG4gIFwiZmlyc3ROYW1lXCI6IFwiTWFiZWxsZVwiLFxuICBcImxhc3ROYW1lXCI6IFwiS2xpbmdcIixcbiAgXCJuYW1lXCI6IFwiTWFiZWxsZSBLbGluZ1wiLFxuICBcIm1vYmlsZVwiOiBcIjQ5OS03MzYtMDc3OSB4MjQwOVwiLFxuICBcImhvbWVcIjogXCIxLTkxMC01MjktNzM5MyB4MjIyXCIsXG4gIFwiY29tcGFueVwiOiBcIkJpbnMsIE11cnJheSBhbmQgUnlhblwiLFxuICBcIndvcmtcIjogXCI5MDUuMDk4LjYzNzJcIixcbiAgXCJub3RlXCI6IFwiRXQgZXQgcmVydW0gcGxhY2VhdCBiZWF0YWUgZG9sb3JpYnVzIGVhcnVtIGV0IHJlaWNpZW5kaXMuIE5pc2kgc3VzY2lwaXQgYWQgZG9sb3IuIFRlbmV0dXIgaGljIHF1aWEgbmloaWwgZGVsZW5pdGkgaW52ZW50b3JlLiBCbGFuZGl0aWlzIGFsaXF1YW0gZWEgZWEuIE9tbmlzIGNvbnNlcXVhdHVyIGl0YXF1ZSBlc3QgcmVydW0gc2VkIHJlaWNpZW5kaXMgbGFib3Jpb3NhbSByZWljaWVuZGlzLiBDb25zZWN0ZXR1ciB1bGxhbSBldCBsYXVkYW50aXVtIGF0IGl0YXF1ZSBhdXQgcXVpIGV0IG1vbGVzdGlhZS5cIlxufSwge1xuICBcImlkXCI6IDE1NzgzLFxuICBcImF2YXRhclwiOiBcImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS91aWZhY2VzL2ZhY2VzL3R3aXR0ZXIvcG9uY2hvbWVuZGl2aWwvMTI4LmpwZ1wiLFxuICBcImZpcnN0TmFtZVwiOiBcIk1hcnlzZVwiLFxuICBcImxhc3ROYW1lXCI6IFwiS29zc1wiLFxuICBcIm5hbWVcIjogXCJNYXJ5c2UgS29zc1wiLFxuICBcIm1vYmlsZVwiOiBcIjY2OC05MjAtOTY2MiB4NjEwXCIsXG4gIFwiaG9tZVwiOiBcIjA3NS44NjQuMTgxOSB4ODI2NVwiLFxuICBcImNvbXBhbnlcIjogXCJTbWl0aGFtIEluY1wiLFxuICBcIndvcmtcIjogXCI0NjguNTM0LjA5MzFcIixcbiAgXCJub3RlXCI6IFwiTGliZXJvIHBlcmZlcmVuZGlzIGF1dCByZXB1ZGlhbmRhZSBxdWFzLiBPbW5pcyBhdXQgZW5pbSB2b2x1cHRhcyBtYWduYW0gaGFydW0gcXVpc3F1YW0gaWxsbyBhbGlxdWlkIGFsaXF1YW0uIERvbG9yIGV0IGV0IHZlbCBuaWhpbCBxdWlidXNkYW0gZnVnaXQgZmFjZXJlIGFkaXBpc2NpIGF1dC4gUmVwZWxsYXQgcXVpYSBlc3QgYmVhdGFlIGFuaW1pIGlwc2EuIEFkIHNpdCBlbGlnZW5kaSBwYXJpYXR1ciBxdWlhIGlsbG8gYXRxdWUgcXVpIHZvbHVwdGF0ZW0gZXhjZXB0dXJpLlwiXG59LCB7XG4gIFwiaWRcIjogNDIxMjIsXG4gIFwiYXZhdGFyXCI6IFwiaHR0cHM6Ly9zMy5hbWF6b25hd3MuY29tL3VpZmFjZXMvZmFjZXMvdHdpdHRlci90cmFuZWJsb3cvMTI4LmpwZ1wiLFxuICBcImZpcnN0TmFtZVwiOiBcIk1hdWRlXCIsXG4gIFwibGFzdE5hbWVcIjogXCJHcmFudFwiLFxuICBcIm5hbWVcIjogXCJNYXVkZSBHcmFudFwiLFxuICBcIm1vYmlsZVwiOiBcIjEtMDc3LTUwNS0wNjU3XCIsXG4gIFwiaG9tZVwiOiBcIjA2Mi45NjguNDg0MSB4NjI3NDhcIixcbiAgXCJjb21wYW55XCI6IFwiVGhpZWwsIEJhdWNoIGFuZCBNb3NjaXNraVwiLFxuICBcIndvcmtcIjogXCIxLTMxOC01OTMtMjYxOSB4MjA2XCIsXG4gIFwibm90ZVwiOiBcIlV0IHNpdCBmdWdhIHF1aWJ1c2RhbS4gVWxsYW0gbm9uIG5lY2Vzc2l0YXRpYnVzIHZvbHVwdGF0ZW0gcXVpZGVtIGVzdCBkaWduaXNzaW1vcyBkb2xvcmVzIHF1YWVyYXQuIEFzcGVybmF0dXIgZnVnaWF0IGV0LlwiXG59LCB7XG4gIFwiaWRcIjogNTg2OSxcbiAgXCJhdmF0YXJcIjogXCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vdWlmYWNlcy9mYWNlcy90d2l0dGVyL3NpbHYzcmd2bi8xMjguanBnXCIsXG4gIFwiZmlyc3ROYW1lXCI6IFwiT3JyaW5cIixcbiAgXCJsYXN0TmFtZVwiOiBcIkhhcnJpc1wiLFxuICBcIm5hbWVcIjogXCJPcnJpbiBIYXJyaXNcIixcbiAgXCJtb2JpbGVcIjogXCI4NzEuNTY3LjQ4NzdcIixcbiAgXCJob21lXCI6IFwiKDQ2NikgNTc0LTMzNTJcIixcbiAgXCJjb21wYW55XCI6IFwiSGFhZyBHcm91cFwiLFxuICBcIndvcmtcIjogXCIxLTkwOC00MjItNDk2NFwiLFxuICBcIm5vdGVcIjogXCJBdXQgc2VxdWkgcXVhZSBvbW5pcyB1dCBxdWkgcXVhZXJhdC4gRG9sb3IgZXQgZnVnaXQgYmxhbmRpdGlpcyBsYXVkYW50aXVtLiBMaWJlcm8gbW9kaSBvZmZpY2lpcyBjb25zZXF1YXR1ciBjb3JydXB0aSByZWljaWVuZGlzIGF1dCBxdWkgbmVtbyBkb2xvcmlidXMuIENvbnNlcXVhdHVyIHZvbHVwdGF0aWJ1cyBxdWlzIHZlcm8gbnVtcXVhbSBhc3Blcm5hdHVyIGEgc2l0IGxhYm9ydW0gdm9sdXB0YXRlcy5cIlxufV1gXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBmYWtlRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHNpemUgPSAxMCkge1xuICAgIHRoaXMuc2l6ZSA9IHNpemU7XG4gICAgdGhpcy5kYXRhcyA9IFtdO1xuICB9XG4gIGRhdGFNb2RlbChpbmRleCkge1xuICAgIHJldHVybiBjb250YWN0TGlzdFtpbmRleF07XG4gIH1cbiAgZ2V0T2JqZWN0QXQoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID4gdGhpcy5zaXplKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhc1tpbmRleF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kYXRhc1tpbmRleF0gPSB0aGlzLmRhdGFNb2RlbChpbmRleCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRhdGFzW2luZGV4XTtcbiAgfVxuICBnZXRBbGwoKSB7XG4gICAgaWYgKHRoaXMuZGF0YXMubGVuZ3RoIDwgdGhpcy5zaXplKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICAgIHRoaXMuZ2V0T2JqZWN0QXQoaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmRhdGFzXG4gICAgICAuc2xpY2UoKVxuICAgICAgLnNvcnQoXG4gICAgICAgIChjb250YWN0MSwgY29udGFjdDIpID0+XG4gICAgICAgICAgYCR7Y29udGFjdDEuZmlyc3ROYW1lfSR7Y29udGFjdDEuTGFzdE5hbWV9YC50b1VwcGVyQ2FzZSgpID5cbiAgICAgICAgICBgJHtjb250YWN0Mi5maXJzdE5hbWV9JHtjb250YWN0Mi5MYXN0TmFtZX1gLnRvVXBwZXJDYXNlKClcbiAgICAgICk7XG4gIH1cblxuICBnZXRTaXplKCkge1xuICAgIHJldHVybiB0aGlzLnNpemU7XG4gIH1cbn1cbiIsImltcG9ydCBmYWtlRGF0YSBmcm9tICcuL2RhdGEnO1xuaW1wb3J0IGNvbnRhY3RBY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5cbmNvbnN0IGNvbnRhY3RzID0gbmV3IGZha2VEYXRhKDEwKS5nZXRBbGwoKTtcblxuY29uc3QgaW5pdFN0YXRlID0ge1xuICBjb250YWN0cyxcbiAgc2VsZWN0ZWRJZDogY29udGFjdHNbMF0uaWQsXG4gIGVkaXRWaWV3OiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RSZWR1Y2VyKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgY29udGFjdEFjdGlvbnMuQ0hBTkdFX0NPTlRBQ1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgc2VsZWN0ZWRJZDogYWN0aW9uLmlkLFxuICAgICAgICBlZGl0VmlldzogZmFsc2UsXG4gICAgICB9O1xuICAgIGNhc2UgY29udGFjdEFjdGlvbnMuQUREX0NPTlRBQ1Q6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgY29udGFjdHM6IGFjdGlvbi5jb250YWN0cyxcbiAgICAgICAgc2VsZWN0ZWRJZDogYWN0aW9uLnNlbGVjdGVkSWQsXG4gICAgICAgIGVkaXRWaWV3OiB0cnVlLFxuICAgICAgfTtcbiAgICBjYXNlIGNvbnRhY3RBY3Rpb25zLkVESVRfQ09OVEFDVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250YWN0czogYWN0aW9uLmNvbnRhY3RzLFxuICAgICAgfTtcbiAgICBjYXNlIGNvbnRhY3RBY3Rpb25zLkRFTEVURV9fQ09OVEFDVDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBjb250YWN0czogYWN0aW9uLmNvbnRhY3RzLFxuICAgICAgICBzZWxlY3RlZElkOiBhY3Rpb24uc2VsZWN0ZWRJZCxcbiAgICAgIH07XG4gICAgY2FzZSBjb250YWN0QWN0aW9ucy5FRElUX1ZJRVc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZWRpdFZpZXc6IGFjdGlvbi52aWV3LFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCB7IGNvbnRhY3RzIH07XG4iLCJpbXBvcnQgeyBhbGwsIHRha2VFdmVyeSwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24qIGFkZENvbnRhY3QoKSB7XG4gIHlpZWxkIHRha2VFdmVyeShhY3Rpb25zLkFERF9DT05UQUNULCBmdW5jdGlvbiooKSB7fSk7XG59XG5leHBvcnQgZnVuY3Rpb24qIGVkaXRDb250YWN0KCkge1xuICB5aWVsZCB0YWtlRXZlcnkoYWN0aW9ucy5FRElUX0NPTlRBQ1QsIGZ1bmN0aW9uKigpIHt9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiogZGVsZXRlQ29udGFjdCgpIHtcbiAgeWllbGQgdGFrZUV2ZXJ5KGFjdGlvbnMuREVMRVRFX19DT05UQUNULCBmdW5jdGlvbiooKSB7fSk7XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gIHlpZWxkIGFsbChbZm9yayhhZGRDb250YWN0KSwgZm9yayhlZGl0Q29udGFjdCksIGZvcmsoZGVsZXRlQ29udGFjdCldKTtcbn1cbiIsImltcG9ydCB7IGdldEN1cnJlbnRMYW5ndWFnZSB9IGZyb20gJy4vY29uZmlnJztcbmNvbnN0IGFjdGlvbnMgPSB7XG4gIENIQU5HRV9MQU5HVUFHRTogJ0NIQU5HRV9MQU5HVUFHRScsXG4gIEFDVElWQVRFX0xBTkdfTU9EQUw6ICdBQ1RJVkFURV9MQU5HX01PREFMJyxcbiAgc3dpdGNoQWN0aXZhdGlvbjogKCkgPT4gKHtcbiAgICB0eXBlOiBhY3Rpb25zLkFDVElWQVRFX0xBTkdfTU9EQUwsXG4gIH0pLFxuICBjaGFuZ2VMYW5ndWFnZTogbGFuZ3VhZ2UgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhY3Rpb25zLkNIQU5HRV9MQU5HVUFHRSxcbiAgICAgIGxhbmd1YWdlOiBnZXRDdXJyZW50TGFuZ3VhZ2UobGFuZ3VhZ2UpLFxuICAgIH07XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcbiIsImltcG9ydCBsYW5ndWFnZSBmcm9tICdAaXNvL2NvbmZpZy9sYW5ndWFnZS5jb25maWcnO1xuXG5pbXBvcnQgZW5nbGlzaExhbmcgZnJvbSAnQGlzby9hc3NldHMvaW1hZ2VzL2ZsYWcvdWsuc3ZnJztcbmltcG9ydCBjaGluZXNlTGFuZyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9jaGluYS5zdmcnO1xuaW1wb3J0IHNwYW5pc2hMYW5nIGZyb20gJ0Bpc28vYXNzZXRzL2ltYWdlcy9mbGFnL3NwYWluLnN2Zyc7XG5pbXBvcnQgZnJlbmNoTGFuZyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9mcmFuY2Uuc3ZnJztcbmltcG9ydCBpdGFsaWFuTGFuZyBmcm9tICdAaXNvL2Fzc2V0cy9pbWFnZXMvZmxhZy9pdGFseS5zdmcnO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIGRlZmF1bHRMYW5ndWFnZTogbGFuZ3VhZ2UsXG4gIG9wdGlvbnM6IFtcbiAgICB7XG4gICAgICBsYW5ndWFnZUlkOiAnZW5nbGlzaCcsXG4gICAgICBsb2NhbGU6ICdlbicsXG4gICAgICB0ZXh0OiAnRW5nbGlzaCcsXG4gICAgICBpY29uOiBlbmdsaXNoTGFuZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmd1YWdlSWQ6ICdjaGluZXNlJyxcbiAgICAgIGxvY2FsZTogJ3poJyxcbiAgICAgIHRleHQ6ICdDaGluZXNlJyxcbiAgICAgIGljb246IGNoaW5lc2VMYW5nLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFuZ3VhZ2VJZDogJ3NwYW5pc2gnLFxuICAgICAgbG9jYWxlOiAnZXMnLFxuICAgICAgdGV4dDogJ1NwYW5pc2gnLFxuICAgICAgaWNvbjogc3BhbmlzaExhbmcsXG4gICAgfSxcbiAgICB7XG4gICAgICBsYW5ndWFnZUlkOiAnZnJlbmNoJyxcbiAgICAgIGxvY2FsZTogJ2ZyJyxcbiAgICAgIHRleHQ6ICdGcmVuY2gnLFxuICAgICAgaWNvbjogZnJlbmNoTGFuZyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhbmd1YWdlSWQ6ICdpdGFsaWFuJyxcbiAgICAgIGxvY2FsZTogJ2l0JyxcbiAgICAgIHRleHQ6ICdJdGFsaWFuJyxcbiAgICAgIGljb246IGl0YWxpYW5MYW5nLFxuICAgIH0sXG4gIF0sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudExhbmd1YWdlKGxhbmcpIHtcbiAgbGV0IHNlbGVjZXRlZExhbmd1YWdlID0gY29uZmlnLm9wdGlvbnNbMF07XG4gIGNvbmZpZy5vcHRpb25zLmZvckVhY2gobGFuZ3VhZ2UgPT4ge1xuICAgIGlmIChsYW5ndWFnZS5sYW5ndWFnZUlkID09PSBsYW5nKSB7XG4gICAgICBzZWxlY2V0ZWRMYW5ndWFnZSA9IGxhbmd1YWdlO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzZWxlY2V0ZWRMYW5ndWFnZTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsImltcG9ydCBjb25maWcsIHsgZ2V0Q3VycmVudExhbmd1YWdlIH0gZnJvbSAnLi9jb25maWcnO1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgbGFuZ3VhZ2U6IGdldEN1cnJlbnRMYW5ndWFnZShjb25maWcuZGVmYXVsdExhbmd1YWdlIHx8ICdlbmdsaXNoJyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihzdGF0ZSA9IGluaXRTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvbnMuQUNUSVZBVEVfTEFOR19NT0RBTDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0FjdGl2YXRlZDogIXN0YXRlLmlzQWN0aXZhdGVkLFxuICAgICAgfTtcbiAgICBjYXNlIGFjdGlvbnMuQ0hBTkdFX0xBTkdVQUdFOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGxhbmd1YWdlOiBhY3Rpb24ubGFuZ3VhZ2UsXG4gICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImNvbnN0IG1vZGFsQWN0aW9ucyA9IHtcbiAgU0hPV19NT0RBTDogJ1NIT1dfTU9EQUwnLFxuICBISURFX01PREFMOiAnSElERV9NT0RBTCcsXG5cbiAgb3Blbk1vZGFsOiBwYXlsb2FkID0+ICh7XG4gICAgdHlwZTogbW9kYWxBY3Rpb25zLlNIT1dfTU9EQUwsXG4gICAgcGF5bG9hZCxcbiAgfSksXG4gIGNsb3NlTW9kYWw6ICgpID0+ICh7XG4gICAgdHlwZTogbW9kYWxBY3Rpb25zLkhJREVfTU9EQUwsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxBY3Rpb25zO1xuIiwiaW1wb3J0IG1vZGFsQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIG1vZGFsVmlzaWJpbGl0eTogZmFsc2UsXG4gIG1vZGFsVHlwZTogJycsXG4gIG1vZGFsUHJvcHM6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWxSZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgbW9kYWxBY3Rpb25zLlNIT1dfTU9EQUw6XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtb2RhbFZpc2liaWxpdHk6IHRydWUsXG4gICAgICAgIG1vZGFsVHlwZTogYWN0aW9uLnBheWxvYWQubW9kYWxUeXBlLFxuICAgICAgICBtb2RhbFByb3BzOiBhY3Rpb24ucGF5bG9hZC5tb2RhbFByb3BzLFxuICAgICAgfTtcbiAgICBjYXNlIG1vZGFsQWN0aW9ucy5ISURFX01PREFMOlxuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJjb25zdCBwcm9maWxlQWN0aW9ucyA9IHtcbiAgRkVUQ0hfUFJPRklMRV9EQVRBX1NUQVJUOiAnRkVUQ0hfUFJPRklMRV9EQVRBX1NUQVJUJyxcbiAgRkVUQ0hfUFJPRklMRV9EQVRBX1NVQ0NFU1M6ICdGRVRDSF9QUk9GSUxFX0RBVEFfU1VDQ0VTUycsXG4gIEZFVENIX1BST0ZJTEVfREFUQV9GQUlMVVJFOiAnRkVUQ0hfUFJPRklMRV9EQVRBX0ZBSUxVUkUnLFxuICBTRVRfUFJPRklMRV9EQVRBOiAnU0VUX1BST0ZJTEVfREFUQScsXG4gIGZldGNoUHJvZmlsZURhdGFTdGFydDogKCkgPT4gKHtcbiAgICB0eXBlOiBwcm9maWxlQWN0aW9ucy5GRVRDSF9QUk9GSUxFX0RBVEFfU1RBUlQsXG4gIH0pLFxuICBmZXRjaFByb2ZpbGVEYXRhU3VjY2VzczogcHJvZmlsZSA9PiAoe1xuICAgIHR5cGU6IHByb2ZpbGVBY3Rpb25zLkZFVENIX1BST0ZJTEVfREFUQV9TVUNDRVNTLFxuICAgIHBheWxvYWQ6IHByb2ZpbGUsXG4gIH0pLFxuICBmZXRjaFByb2ZpbGVEYXRhRmFpbHVyZTogZXJyb3IgPT4gKHtcbiAgICB0eXBlOiBwcm9maWxlQWN0aW9ucy5GRVRDSF9QUk9GSUxFX0RBVEFfRkFJTFVSRSxcbiAgICBwYXlsb2FkOiBlcnJvcixcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlQWN0aW9ucztcbiIsImltcG9ydCBwcm9maWxlQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBJTklUSUFMX0RBVEEgPSB7XG4gIGRhdGE6IG51bGwsXG4gIGxvYWRpbmc6IHRydWUsXG4gIGVycm9yOiBudWxsLFxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByb2ZpbGVSZWR1Y2VyKHN0YXRlID0gSU5JVElBTF9EQVRBLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgcHJvZmlsZUFjdGlvbnMuRkVUQ0hfUFJPRklMRV9EQVRBX1NVQ0NFU1M6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZGF0YTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBlcnJvcjogbnVsbCxcbiAgICAgIH07XG4gICAgY2FzZSBwcm9maWxlQWN0aW9ucy5GRVRDSF9QUk9GSUxFX0RBVEFfRkFJTFVSRTpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgZXJyb3I6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJjb25zdCBxdWl6QWN0aW9ucyA9IHtcbiAgU1RBUlRfUVVJWjogJ1NUQVJUX1FVSVonLFxuICBHRVRfUVVJWl9EQVRBOiAnR0VUX1FVSVpfREFUQScsXG4gIEdFVF9RVUVTVElPTl9EQVRBOiAnR0VUX1FVRVNUSU9OX0RBVEEnLFxuICBTRVRfUVVFU1RJT05fREFUQTogJ1NFVF9RVUVTVElPTl9EQVRBJyxcbiAgU0VUX1FVSVpfREFUQTogJ1NFVF9RVUlaX0RBVEEnLFxuICBTRVRfUVVFU1RJT05fQU5TV0VSOiAnU0VUX1FVRVNUSU9OX0FOU1dFUicsXG4gIE5FWFRfUVVFU1RJT046ICdORVhUX1FVRVNUSU9OJyxcbiAgLy8gTG9hZCBEYXRhIEFjdGlvbnNcbiAgc3RhcnRRdWl6OiAoKSA9PiAoe1xuICAgIHR5cGU6IHF1aXpBY3Rpb25zLlNUQVJUX1FVSVosXG4gIH0pLFxuICBnZXRRdWVzdGlvbkRhdGE6ICgpID0+ICh7XG4gICAgdHlwZTogcXVpekFjdGlvbnMuR0VUX1FVRVNUSU9OX0RBVEEsXG4gIH0pLFxuICBnZXRRdWl6RGF0YTogKCkgPT4gKHtcbiAgICB0eXBlOiBxdWl6QWN0aW9ucy5HRVRfUVVJWl9EQVRBLFxuICB9KSxcbiAgc2V0UXVpekRhdGE6IHBheWxvYWQgPT4gKHtcbiAgICB0eXBlOiBxdWl6QWN0aW9ucy5TRVRfUVVJWl9EQVRBLFxuICAgIHBheWxvYWQsXG4gIH0pLFxuICBzZXRRdWVzdGlvbkRhdGE6IHBheWxvYWQgPT4gKHtcbiAgICB0eXBlOiBxdWl6QWN0aW9ucy5TRVRfUVVFU1RJT05fREFUQSxcbiAgICBwYXlsb2FkLFxuICB9KSxcbiAgc2V0UXVlc3Rpb25BbnN3ZXI6IHBheWxvYWQgPT4gKHtcbiAgICB0eXBlOiBxdWl6QWN0aW9ucy5TRVRfUVVFU1RJT05fQU5TV0VSLFxuICAgIHBheWxvYWQsXG4gIH0pLFxuICBuZXh0UXVlc3Rpb246IHBheWxvYWQgPT4gKHtcbiAgICB0eXBlOiBxdWl6QWN0aW9ucy5ORVhUX1FVRVNUSU9OLFxuICAgIHBheWxvYWQsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgcXVpekFjdGlvbnM7XG4iLCJpbXBvcnQgcXVpekFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcbmltcG9ydCB7IGFycmF5RXF1YWwgfSBmcm9tICdAaXNvL2xpYi9oZWxwZXJzL3V0aWxpdHknO1xuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBxdWl6ZXM6IHt9LFxuICBxdWVzdGlvbnM6IHt9LFxuICBnZXR0aW5nU3RhcnRlZDogZmFsc2UsXG4gIGFjdGl2ZVF1ZXN0aW9uOiAwLFxuICB0b3RhbDogMCxcbiAgY29ycmVjdDogMCxcbiAgd3Jvbmc6IDAsXG4gIHN1Ym1pdHRlZDogZmFsc2UsXG4gIGFuc3dlcnM6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVlc3Rpb25SZWR1Y2VyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgcXVpekFjdGlvbnMuU1RBUlRfUVVJWjpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBnZXR0aW5nU3RhcnRlZDogdHJ1ZSB9O1xuICAgIGNhc2UgcXVpekFjdGlvbnMuU0VUX1FVSVpfREFUQTpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBxdWl6ZXM6IGFjdGlvbi5wYXlsb2FkLCBnZXR0aW5nU3RhcnRlZDogZmFsc2UgfTtcbiAgICBjYXNlIHF1aXpBY3Rpb25zLlNFVF9RVUVTVElPTl9EQVRBOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHF1ZXN0aW9uczogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgIHRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgIH07XG4gICAgY2FzZSBxdWl6QWN0aW9ucy5TRVRfUVVFU1RJT05fQU5TV0VSOlxuICAgICAgY29uc3QgeyBxdWVzdGlvbnMsIGFjdGl2ZVF1ZXN0aW9uLCBjb3JyZWN0LCB3cm9uZyB9ID0gc3RhdGU7XG4gICAgICBjb25zdCBjdXJyZW50UXVpenogPSBxdWVzdGlvbnMuZGF0YVthY3RpdmVRdWVzdGlvbl07XG4gICAgICBsZXQgcmlnaHRBbnN3ZXIgPSBmYWxzZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbi5wYXlsb2FkKSkge1xuICAgICAgICByaWdodEFuc3dlciA9IGFycmF5RXF1YWwoYWN0aW9uLnBheWxvYWQsIGN1cnJlbnRRdWl6elsnYW5zd2VycyddKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJpZ2h0QW5zd2VyID0gY3VycmVudFF1aXp6WydhbnN3ZXJzJ10gPT09IGFjdGlvbi5wYXlsb2FkID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IGNvcnJlY3RBbnN3ZXIgPSByaWdodEFuc3dlciA/IGNvcnJlY3QgKyAxIDogY29ycmVjdDtcbiAgICAgIGxldCB3cm9uZ0Fuc3dlciA9ICFyaWdodEFuc3dlciA/IHdyb25nICsgMSA6IHdyb25nO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGNvcnJlY3Q6IGNvcnJlY3RBbnN3ZXIsXG4gICAgICAgIHdyb25nOiB3cm9uZ0Fuc3dlcixcbiAgICAgICAgc3VibWl0dGVkOiB0cnVlLFxuICAgICAgICBhbnN3ZXJzOiByaWdodEFuc3dlcixcbiAgICAgICAgcXVlc3Rpb25zOiB7XG4gICAgICAgICAgZGF0YTogW1xuICAgICAgICAgICAgLi4ucXVlc3Rpb25zLmRhdGEuc2xpY2UoMCwgYWN0aXZlUXVlc3Rpb24pLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAuLi5xdWVzdGlvbnMuZGF0YVthY3RpdmVRdWVzdGlvbl0sXG4gICAgICAgICAgICAgIHNob3dBbnN3ZXI6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLi4ucXVlc3Rpb25zLmRhdGEuc2xpY2UoYWN0aXZlUXVlc3Rpb24gKyAxKSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICBjYXNlIHF1aXpBY3Rpb25zLk5FWFRfUVVFU1RJT046XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlUXVlc3Rpb246IHN0YXRlLmFjdGl2ZVF1ZXN0aW9uICsgMSxcbiAgICAgICAgc3VibWl0dGVkOiBmYWxzZSxcbiAgICAgICAgYW5zd2VyczogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Q3VycmVudFRoZW1lIH0gZnJvbSAnLi9jb25maWcnO1xuY29uc3QgYWN0aW9ucyA9IHtcbiAgQ0hBTkdFX1RIRU1FOiAnQ0hBTkdFX1RIRU1FJyxcbiAgU1dJVENIX0FDVElWQVRJT046ICdTV0lUQ0hfQUNUSVZBVElPTicsXG4gIHN3aXRjaEFjdGl2YXRpb246ICgpID0+ICh7XG4gICAgdHlwZTogYWN0aW9ucy5TV0lUQ0hfQUNUSVZBVElPTixcbiAgfSksXG4gIGNoYW5nZVRoZW1lOiAoYXR0cmlidXRlLCB0aGVtZU5hbWUpID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IGdldEN1cnJlbnRUaGVtZShhdHRyaWJ1dGUsIHRoZW1lTmFtZSk7XG4gICAgaWYgKGF0dHJpYnV0ZSA9PT0gJ2xheW91dFRoZW1lJykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgJ2lzb21vcnBoaWNDb250ZW50J1xuICAgICAgKVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGVtZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhY3Rpb25zLkNIQU5HRV9USEVNRSxcbiAgICAgIGF0dHJpYnV0ZSxcbiAgICAgIHRoZW1lLFxuICAgIH07XG4gIH0sXG59O1xuZXhwb3J0IGRlZmF1bHQgYWN0aW9ucztcbiIsImltcG9ydCB7IHRoZW1lQ29uZmlnIH0gZnJvbSAnQGlzby9jb25maWcvdGhlbWUvdGhlbWUuY29uZmlnJztcbmNvbnN0IGNoYW5nZVRoZW1lcyA9IHtcbiAgaWQ6ICdjaGFuZ2VUaGVtZXMnLFxuICBsYWJlbDogJ3RoZW1lU3dpdGNoZXInLFxuICBkZWZhdWx0VGhlbWU6IHRoZW1lQ29uZmlnLnRoZW1lLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAnZGVmYXVsdFRoZW1lJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMzIzMzMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2N1c3RvbVRoZW1lJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMzIzMzMyJyxcbiAgICB9LFxuICBdLFxufTtcbmNvbnN0IHRvcGJhclRoZW1lID0ge1xuICBpZDogJ3RvcGJhclRoZW1lJyxcbiAgbGFiZWw6ICd0aGVtZVN3aXRjaGVyLlRvcGJhcicsXG4gIGRlZmF1bHRUaGVtZTogdGhlbWVDb25maWcudG9wYmFyLFxuICBvcHRpb25zOiBbXG4gICAge1xuICAgICAgdGhlbWVOYW1lOiAnZGVmYXVsdFRoZW1lJyxcbiAgICAgIGJ1dHRvbkNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMzIzMzMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMScsXG4gICAgICBidXR0b25Db2xvcjogJyNlMDM2NGMnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UwMzY0YycsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMicsXG4gICAgICBidXR0b25Db2xvcjogJyM2NTM0ZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzY1MzRmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMycsXG4gICAgICBidXR0b25Db2xvcjogJyM0NDgyRkYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ0ODJGRicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNCcsXG4gICAgICBidXR0b25Db2xvcjogJyM0MjJlNjInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyMmU2MicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNScsXG4gICAgICBidXR0b25Db2xvcjogJyMyMjE0NGMnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyMTQ0YycsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNicsXG4gICAgICBidXR0b25Db2xvcjogJyM0NjcwYTInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ2NzBhMicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNycsXG4gICAgICBidXR0b25Db2xvcjogJyM0OTQ5ODInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ5NDk4MicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICBdLFxufTtcbmNvbnN0IHNpZGViYXJUaGVtZSA9IHtcbiAgaWQ6ICdzaWRlYmFyVGhlbWUnLFxuICBsYWJlbDogJ3RoZW1lU3dpdGNoZXIuU2lkZWJhcicsXG4gIGRlZmF1bHRUaGVtZTogdGhlbWVDb25maWcuc2lkZWJhcixcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2RlZmF1bHRUaGVtZScsXG4gICAgICBidXR0b25Db2xvcjogJyMzMjMzMzInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB1bmRlZmluZWQsXG4gICAgICB0ZXh0Q29sb3I6ICcjNzg4MTk1JyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMScsXG4gICAgICBidXR0b25Db2xvcjogJyNlMDM2NGMnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2UwMzY0YycsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMicsXG4gICAgICBidXR0b25Db2xvcjogJyM2NTM0ZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzY1MzRmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMycsXG4gICAgICBidXR0b25Db2xvcjogJyM0NDgyRkYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ0ODJGRicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNCcsXG4gICAgICBidXR0b25Db2xvcjogJyM0MjJlNjInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQyMmU2MicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNScsXG4gICAgICBidXR0b25Db2xvcjogJyMyMjE0NGMnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyMTQ0YycsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNicsXG4gICAgICBidXR0b25Db2xvcjogJyM0NjcwYTInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ2NzBhMicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lNycsXG4gICAgICBidXR0b25Db2xvcjogJyM0OTQ5ODInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzQ5NDk4MicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICBdLFxufTtcbmNvbnN0IGxheW91dFRoZW1lID0ge1xuICBpZDogJ2xheW91dFRoZW1lJyxcbiAgbGFiZWw6ICd0aGVtZVN3aXRjaGVyLkJhY2tncm91bmQnLFxuICBkZWZhdWx0VGhlbWU6IHRoZW1lQ29uZmlnLmxheW91dCxcbiAgb3B0aW9uczogW1xuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ2RlZmF1bHRUaGVtZScsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0YxRjNGNicsXG4gICAgICB0ZXh0Q29sb3I6IHVuZGVmaW5lZCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMScsXG4gICAgICBidXR0b25Db2xvcjogJyNmZmZmZmYnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMzIzMjMyJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMicsXG4gICAgICBidXR0b25Db2xvcjogJyNGOUY5RjknLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RjlGOScsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRoZW1lTmFtZTogJ3RoZW1lMycsXG4gICAgICBidXR0b25Db2xvcjogJyNlYmViZWInLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ViZWJlYicsXG4gICAgICB0ZXh0Q29sb3I6ICcjZmZmZmZmJyxcbiAgICB9LFxuICBdLFxufTtcbmNvbnN0IGN1c3RvbWl6ZWRUaGVtZXMgPSB7XG4gIGNoYW5nZVRoZW1lcyxcbiAgdG9wYmFyVGhlbWUsXG4gIHNpZGViYXJUaGVtZSxcbiAgbGF5b3V0VGhlbWUsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRUaGVtZShhdHRyaWJ1dGUsIHNlbGVjdGVkVGhlbWVuYW1lKSB7XG4gIGxldCBzZWxlY2V0ZWRUaGVtZSA9IHt9O1xuICBjdXN0b21pemVkVGhlbWVzW2F0dHJpYnV0ZV0ub3B0aW9ucy5mb3JFYWNoKHRoZW1lID0+IHtcbiAgICBpZiAodGhlbWUudGhlbWVOYW1lID09PSBzZWxlY3RlZFRoZW1lbmFtZSkge1xuICAgICAgc2VsZWNldGVkVGhlbWUgPSB0aGVtZTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc2VsZWNldGVkVGhlbWU7XG59XG5leHBvcnQgZGVmYXVsdCBjdXN0b21pemVkVGhlbWVzO1xuIiwiaW1wb3J0IGNvbmZpZywgeyBnZXRDdXJyZW50VGhlbWUgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCBpbml0U3RhdGUgPSB7XG4gIGlzQWN0aXZhdGVkOiBmYWxzZSxcbiAgY2hhbmdlVGhlbWVzOiBnZXRDdXJyZW50VGhlbWUoXG4gICAgJ2NoYW5nZVRoZW1lcycsXG4gICAgY29uZmlnLmNoYW5nZVRoZW1lcy5kZWZhdWx0VGhlbWUgfHwgJ3RoZW1lZGVmYXVsdCdcbiAgKSxcbiAgdG9wYmFyVGhlbWU6IGdldEN1cnJlbnRUaGVtZShcbiAgICAndG9wYmFyVGhlbWUnLFxuICAgIGNvbmZpZy50b3BiYXJUaGVtZS5kZWZhdWx0VGhlbWUgfHwgJ3RoZW1lZGVmYXVsdCdcbiAgKSxcbiAgc2lkZWJhclRoZW1lOiBnZXRDdXJyZW50VGhlbWUoXG4gICAgJ3NpZGViYXJUaGVtZScsXG4gICAgY29uZmlnLnNpZGViYXJUaGVtZS5kZWZhdWx0VGhlbWUgfHwgJ3RoZW1lZGVmYXVsdCdcbiAgKSxcbiAgbGF5b3V0VGhlbWU6IGdldEN1cnJlbnRUaGVtZShcbiAgICAnbGF5b3V0VGhlbWUnLFxuICAgIGNvbmZpZy5sYXlvdXRUaGVtZS5kZWZhdWx0VGhlbWUgfHwgJ3RoZW1lZGVmYXVsdCdcbiAgKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXRlID0gaW5pdFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgYWN0aW9ucy5TV0lUQ0hfQUNUSVZBVElPTjpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0FjdGl2YXRlZDogIXN0YXRlLmlzQWN0aXZhdGVkLFxuICAgICAgfTtcbiAgICBjYXNlIGFjdGlvbnMuQ0hBTkdFX1RIRU1FOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIFthY3Rpb24uYXR0cmlidXRlXTogYWN0aW9uLnRoZW1lLFxuICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQge2NyZWF0ZUdsb2JhbFN0eWxlfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB7cGFsZXR0ZX0gZnJvbSBcInN0eWxlZC10b29sc1wiO1xyXG5cclxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC8vIHN0eWxlIGZvciByZXNlcnZhdGlvbiBmb3JtXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5cclxuICAucmVzZXJ2YXRpb25fbW9kYWwge1xyXG4gICAgLmFudC1tb2RhbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1heC13aWR0aDogNDUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuYW50LW1vZGFsLWNvbnRlbnQge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG5cclxuICAgICAgLmFudC1tb2RhbC1ib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgLnJlc2VydmF0aW9uX3NpZGViYXIge1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xyXG5cclxuICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRUJFQkVCO1xyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuRGF0ZUlucHV0X19zbWFsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTJweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCxcclxuICAgICAgICAgIC5EYXRlUmFuZ2VQaWNrZXJJbnB1dCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOXB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvb3RlciB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0VCRUJFQjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4gYnV0dG9uLmNsb3NlIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB0b3A6IDE1cHg7XHJcbiAgICAgICAgICByaWdodDogMTVweDtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBjb2xvcjogIzkwOTA5MDtcclxuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyLFxyXG4gICAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMkMyQzJDO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZXNlcnZhdGlvbl9zaWRlYmFyIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHZoO1xyXG5cclxuICAgIGhlYWRlciB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDI5cHg7XHJcbiAgICAgIHBhZGRpbmc6IDI1cHggMzBweCAyNnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0VCRUJFQjtcclxuXHJcbiAgICAgIGgzIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgcGFkZGluZzogMjVweCAxNXB4IDI2cHggMTVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblxyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9vdGVyIHtcclxuICAgICAgcGFkZGluZzogMjVweCAzMHB4IDI4cHggMzBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjlweDtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFQkVCRUI7XHJcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDE1cHggMjVweCAxNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC8vIHN0eWxlIGZvciBwcm9wZXJ0eSBnYWxsZXJ5IG1vZGFsXHJcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4gIC5hbnQtbW9kYWwtd3JhcCB7XHJcbiAgICAmLmltYWdlX2dhbGxlcnlfbW9kYWwge1xyXG4gICAgICAuYW50LW1vZGFsIHtcclxuICAgICAgICB0b3A6IDUwcHg7XHJcblxyXG4gICAgICAgIC5hbnQtbW9kYWwtY29udGVudCB7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5hbnQtbW9kYWwtYm9keSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmltYWdlX2dhbGxlcnlfY2xvc2Uge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICByaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgICAmOmZvY3VzLFxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgIHBhdGgge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgZmlsbDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgcGF0aCB7XHJcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLy8gc3R5bGUgZm9yIHJlYWN0LXBob25lLWlucHV0MlxyXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuICAucmVhY3QtdGVsLWlucHV0IHtcclxuICAgIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZTRlN2VhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAmOmZvY3VzLFxyXG4gICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtwYWxldHRlKCd3YXJuaW5nJywgMCl9O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2xvYmFsU3R5bGUiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvQ2hlY2tPdXRsaW5lZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29ucy9saWIvaWNvbnMvRWRpdE91dGxpbmVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9jb25maWctcHJvdmlkZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvaW5wdXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbG9jYWxlLXByb3ZpZGVyL2VuX1VTXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL25vdGlmaWNhdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9wb3BvdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbXV0YWJsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJqcy1jb29raWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWNvb2tpZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInFzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWZhY2Vib29rLXBpeGVsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWludGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtdGhlbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLXRvb2xzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=