module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		27: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "11tx":
/***/ (function(module, exports) {

module.exports = require("react-facebook-pixel");

/***/ }),

/***/ "1exS":
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3qoQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/bf76eb2560efdc993ea7c5acff35a895.jpg");

/***/ }),

/***/ "4GXx":
/***/ (function(module, exports) {

module.exports = require("react-dates");

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8gEg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react-dates/initialize"
var initialize_ = __webpack_require__("hgiS");

// EXTERNAL MODULE: external "react-dates"
var external_react_dates_ = __webpack_require__("4GXx");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./shared/components/DatePicker/ReactDates.style.js


const ReactDatesStyleWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ReactDatesstyle__ReactDatesStyleWrapper",
  componentId: "sc-15o2fqn-0"
})(["display:flex;flex-wrap:wrap;align-items:center;margin-bottom:40px;.ant-form-item{display:flex;align-items:center;margin-right:30px;margin-bottom:0;margin-left:0;&:last-child{margin-right:0;}.ant-form-item-label{label{font-size:13px;}}}"]);

const ReactDateWrapper = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "ReactDatesstyle__ReactDateWrapper",
  componentId: "sc-15o2fqn-1"
})([".isoReactDate{height:100vh;.DateInput__display-text--focused{color:#fff;font-weight:400;}.CalendarDay--selected-start,.CalendarDay--selected-end,.CalendarDay--selected{color:#fff;}.CalendarDay--selected-span{color:#fff;}.CalendarDay--hovered-span,.CalendarDay--after-hovered-start{color:#fff;}.DayPickerKeyboardShortcuts__show--bottom-right{border-top:26px solid transparent;bottom:0;right:0;}.DayPicker--horizontal{.DayPickerNavigation--horizontal{.DayPickerNavigation__prev,.DayPickerNavigation__next{-webkit-transform:", ";-ms-transform:", ";transform:", ";}}}.DateRangePickerInput{.DateRangePickerInput__arrow{-webkit-transform:", ";-ms-transform:", ";transform:", ";}}}"], props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'inherit');

const ReactDatesWrapper = Object(rtl["a" /* default */])(ReactDateWrapper);

// CONCATENATED MODULE: ./shared/components/DatePicker/ReactDates.js
var __jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/*
 * For Localization enable this code [example : French language as "fr"]
 */
// import moment from 'moment';
// import 'moment/locale/fr';

class ReactDates_DateRangePickerBox extends external_react_["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "onDateChangeFunc", ({
      startDate,
      endDate
    }) => {
      const {
        dateFormat
      } = this.state;
      this.setState({
        startDate,
        endDate
      }); // if (startDate !== null && endDate !== null) {
      //     this.props.updateSearchData({
      //         setStartDate: startDate.format(dateFormat),
      //         setEndDate: endDate.format(dateFormat),
      //     });
      // }

      this.props.updateSearchData({
        setStartDate: startDate ? startDate.format(dateFormat) : null,
        setEndDate: endDate ? endDate.format(dateFormat) : null
      });
    });

    _defineProperty(this, "onFocusChangeFunc", focusedInput => {
      return this.setState({
        focusedInput
      });
    });

    const separator = this.props.item && this.props.item.separator ? this.props.item.separator : '/';

    const _dateFormat = this.props.item && this.props.item.format ? this.props.item.format : 'llll';

    this.state = {
      focusedInput: null,
      startDate: this.props.startDate ? this.props.startDate : null,
      endDate: this.props.endDate ? this.props.endDate : null,
      dateFormat: _dateFormat,
      separator
    };
    this.onDateChangeFunc = this.onDateChangeFunc.bind(this);
    this.onFocusChangeFunc = this.onFocusChangeFunc.bind(this);
    /*
     * For Localization enable this code [example : French language as "fr"]
     */
    // moment.locale('fr');
  }

  render() {
    const {
      focusedInput,
      startDate,
      endDate
    } = this.state; // DateRangePickerBox props list

    const {
      className,
      startDateId,
      endDateId,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      showClearDates,
      isRTL,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      block,
      numberOfMonths,
      regular,
      noBorder,
      renderDayContents,
      isDayBlocked,
      minimumNights
    } = this.props; // Add all classs to an array **************

    const addAllClasses = ['date_picker']; // className prop checking **************

    if (className) {
      addAllClasses.push(className);
    } // React-Dates DateRangePicker Props List


    const defaultCalenderProps = {
      startDateId: startDateId ? startDateId : 'start_unique_id',
      endDateId: endDateId ? endDateId : 'end_date_unique_id',
      startDate,
      endDate,
      focusedInput,
      onFocusChange: this.onFocusChangeFunc,
      onDatesChange: this.onDateChangeFunc,
      startDatePlaceholderText,
      endDatePlaceholderText,
      disabled,
      isRTL,
      showClearDates: showClearDates ? showClearDates : false,
      orientation,
      anchorDirection,
      withPortal,
      withFullScreenPortal,
      small,
      numberOfMonths: numberOfMonths ? numberOfMonths : 2,
      block,
      regular,
      noBorder,
      renderDayContents,
      isDayBlocked,
      minimumNights
    };
    console.log("____startdate", startDate);
    return __jsx(ReactDatesStyleWrapper, {
      className: addAllClasses.join(' ')
    }, __jsx(external_react_dates_["DateRangePicker"], defaultCalenderProps));
  }

}

/* harmony default export */ var ReactDates = __webpack_exports__["a"] = (ReactDates_DateRangePickerBox);

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "AwK5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export direction */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


let direction = 'ltr';

if (false) {}

const withDirection = Component => props => {
  return __jsx(Component, _extends({}, props, {
    "data-rtl": direction
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (withDirection);


/***/ }),

/***/ "BL1r":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/MinusOutlined");

/***/ }),

/***/ "BnVt":
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EDUr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BnVt");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const LoaderComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "loaderstyle__LoaderComponent",
  componentId: "sc-1pxv3ii-0"
})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;z-index:10000000000;top:0;right:0;@media only screen and (min-width:768px) and (max-width:1220px){width:calc(100% - 80px);}@media only screen and (max-width:767px){width:100%;}.isoContentLoader{width:50px;height:50px;animation:svgSpinner 1.4s linear infinite;}.isoContentLoaderCircle{animation:svgSpinnerCircle 1.4s ease-in-out infinite;stroke-dasharray:80px,200px;stroke-dashoffset:0px;stroke:", ";stroke-linecap:round;}@keyframes svgSpinner{100%{transform:rotate(360deg);}}@keyframes svgSpinnerCircle{0%{stroke-dasharray:1px,200px;stroke-dashoffset:0px;}50%{stroke-dasharray:100px,200px;stroke-dashoffset:-15px;}100%{stroke-dasharray:100px,200px;stroke-dashoffset:-120px;}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])('primary', 0));
/* harmony default export */ __webpack_exports__["a"] = (LoaderComponent);

/***/ }),

/***/ "EKex":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ ViewWithPopup; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__("faye");
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./shared/components/Portal/Portal.js
// The portal element is inserted in the DOM tree after
// the Modal's children are mounted, meaning that children
// will be mounted on a detached DOM node. If a child
// component requires to be attached to the DOM tree
// immediately when mounted, for example to measure a
// DOM node, or uses 'autoFocus' in a descendant, add
// state to Modal and only render the children when Modal
// is inserted in the DOM tree.


function Portal({
  children,
  rendererId
}) {
  const {
    0: containerEl
  } = Object(external_react_["useState"])(document.createElement('div'));
  Object(external_react_["useEffect"])(() => {
    let portalRoot = document.getElementById(rendererId) || document.body;
    portalRoot.appendChild(containerEl);
    return () => portalRoot.removeChild(containerEl);
  });
  return /*#__PURE__*/external_react_dom_default.a.createPortal(children, containerEl);
}
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Common/ViewWithPopup/ViewWithPopup.style.js

const Container = external_styled_components_default.a.div.withConfig({
  displayName: "ViewWithPopupstyle__Container",
  componentId: "sc-2fb6i1-0"
})(["border-radius:", "px;", " .ant-checkbox-group{display:flex;flex-direction:column;.ant-checkbox-group-item{margin:9px 0;&:first-child{margin-top:0;}&:last-child{margin-bottom:0;}}}.date_picker{margin-bottom:0;.DateRangePicker{.DateRangePickerInput{border-radius:3px;}}}"], props => props.radius ? props.radius : 3, props => props.showPopup && Object(external_styled_components_["css"])(["box-shadow:0 2px 20px rgba(0,0,0,0.16);position:absolute;width:100%;z-index:999;min-width:300px;padding:30px;background-color:#ffffff;"]));
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ViewWithPopupstyle__Wrapper",
  componentId: "sc-2fb6i1-1"
})(["position:relative;width:100%;"]);
// CONCATENATED MODULE: ./components/Common/ViewWithPopup/useOnClickOutside.js
// Hook

function useOnClickOutside(ref, handler) {
  Object(external_react_["useEffect"])(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]); // Empty array ensures that effect is only run on mount and unmount
}
// CONCATENATED MODULE: ./components/Common/ViewWithPopup/ViewWithPopup.js
var __jsx = external_react_default.a.createElement;




function ViewWithPopup({
  view,
  popup,
  noView = false,
  style,
  className
}) {
  const {
    0: showPopup,
    1: setShowPopup
  } = Object(external_react_["useState"])(false);
  const ref = Object(external_react_["useRef"])();
  useOnClickOutside(ref, () => setShowPopup(false)); // Add all classs to an array

  const addAllClasses = ['view_with__popup']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(Wrapper, {
    className: `${addAllClasses.join(' ')} ${showPopup ? 'active' : ''}`,
    ref: ref
  }, view && noView && __jsx("div", {
    className: "popup_handler",
    onClick: () => setShowPopup(!showPopup)
  }, view), __jsx(Container, {
    className: "popup_container",
    showPopup: showPopup,
    onClick: () => setShowPopup(true),
    style: style
  }, view && !noView && view, showPopup && __jsx("div", {
    id: "popup"
  }, __jsx(Portal, {
    rendererId: "popup"
  }, popup && popup))));
}

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "L3BB":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/PlusOutlined");

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ HomePage; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./containers/Guest/GuestLayout/GuestLayout.js + 9 modules
var GuestLayout = __webpack_require__("mq74");

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// EXTERNAL MODULE: ./shared/assets/images/couch-background.jpg
var couch_background = __webpack_require__("3qoQ");

// EXTERNAL MODULE: external "styled-tools"
var external_styled_tools_ = __webpack_require__("1exS");

// CONCATENATED MODULE: ./components/Guest/Home/Search/Search.style.js




const BannerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__BannerWrapper",
  componentId: "qmc439-0"
})(["width:100%;min-height:70vh;position:relative;background:linear-gradient(to bottom,rgba(255,255,255,1),rgba(255,255,255,0.3),transparent),url(", ") no-repeat center center;@media (max-width:991px){> div{max-width:100%;}}> div{position:relative;min-height:70vh;}&:after{display:block;content:'';width:100%;height:60%;position:absolute;bottom:0;background:linear-gradient(transparent,rgba(0,0,0,0.5));pointer-events:none;z-index:0;}"], couch_background["a" /* default */]);
const SearchWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__SearchWrapper",
  componentId: "qmc439-1"
})(["width:calc(100% - 60px);padding:28px 30px 30px;border-radius:6px;background-color:#ffffff;box-shadow:0 1px 20px rgba(0,0,0,0.08);position:absolute;bottom:-100px;z-index:1;h2{color:", "}h6{margin-top:20px;text-align:center;}@media (min-width:569px) and (max-width:991px){width:414px;left:30px;}@media (max-width:480px){width:calc(100% - 30px);padding:15px;left:15px;> p{display:none;}}h2{margin-bottom:10px;}"], Object(external_styled_tools_["palette"])('primary', 0));
const FormWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__FormWrapper",
  componentId: "qmc439-2"
})(["display:flex;border-radius:3px 0 0 3px;min-height:60px;.ant-row{width:100%;}@media (max-width:991px){flex-direction:column;}@media (max-width:480px){margin-top:10px;}.ant-btn-default{display:flex;justify-content:space-between;}.search-form-buttons{display:flex;justify-content:space-between;@media (max-width:991px){flex-direction:column;}@media (max-width:480px){margin-top:10px;}}button[type='submit'].ant-btn{height:60px;@media (max-width:991px){min-width:100%;border-radius:0 0 3px 3px;}@media (max-width:480px){height:47px;}&::after{display:none;}&:hover{opacity:0.85;}}"]);
const ComponentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__ComponentWrapper",
  componentId: "qmc439-3"
})(["display:flex;justify-content:space-between;width:100%;height:100%;align-items:center;position:relative;background-color:#F7F7F7;.target{right:10px;left:auto;@media (max-width:480px){right:25px;}}.date_picker{min-width:calc(250px - 14px);width:calc(100% - 14px);margin:0 0 0 14px;display:flex;justify-content:center;align-items:center;@media (max-width:991px){justify-content:flex-start;height:60px;}@media (max-width:480px){height:47px;}.DayPicker__withBorder{box-shadow:0 15px 46px -10px rgba(26,26,29,0.3);}.DateRangePicker{display:block;width:100%;.DateRangePickerInput{border:0;padding-right:0;display:flex;align-items:center;justify-content:space-between;background:transparent;.DateRangePickerInput_clearDates,.DateRangePickerInput_clearDates{&.DateRangePickerInput_clearDates__small{display:none;}}.DateInput{width:100%;padding:0 15px 0 30px;background:transparent;@media (min-width:569px) and (max-width:991px){padding:0 25px 0 30px;}@media (max-width:568px){padding:0 15px 0 25px;}.DateInput_fang{display:none;}.DateInput_input{font-family:\"Raleway\",sans-serif;padding:0;font-weight:400;color:#2C2C2C;background:transparent;&.DateInput_input__focused{border-color:transparent;}&::placeholder{color:#2C2C2C !important;font-weight:bold;}}}.DateRangePickerInput_arrow{& + .DateInput{input{text-align:right;}}}}.DateRangePicker_picker{margin-top:-12px;z-index:2;@media (max-width:991px){top:47px !important;}@media (max-width:320px){left:-29px !important;.DayPicker,.DayPicker > div > div,.DayPicker > div > div .DayPicker_transitionContainer{width:294px !important;}.DayPicker{.DayPicker_weekHeader{padding:0 !important;}.CalendarMonth{padding:0 !important;}}}}}}.view_with__popup{max-width:100%;position:relative;&::before{content:'';width:1px;height:20px;display:inline-block;position:absolute;top:calc(50% - 10px);right:auto;left:0;z-index:1;background-color:", ";@media (max-width:991px){top:0;bottom:auto;height:1px;width:calc(100% - 40px);left:20px;}@media (max-width:480px){width:calc(100% - 30px);left:15px;}}.popup_handler{width:calc(100% - 14px);margin-left:14px;button.ant-btn{min-width:auto;width:100%;height:60px;border:0;padding:0 30px;border-radius:0;box-shadow:none;font-weight:400;font-size:15px;color:", ";background-color:#F7F7F7;span{display:flex;align-items:center;color:#797979;font-weight:bold;height:100%;}@media (max-width:991px){text-align:left;padding:0 25px 0 30px;}@media (max-width:480px){height:47px;padding:0 20px 0 25px;}&::after{display:none;}}}&.room_guest{.popup_handler{button.ant-btn{display:flex;align-items:center;justify-content:space-between;}}}&.active{.popup_container{margin-top:0;padding:22px;box-shadow:0 15px 46px -10px rgba(26,26,29,0.3);@media (max-width:991px){margin-top:0;}@media (max-width:480px){min-width:auto;}}}}> svg{position:absolute;z-index:1;top:auto;&.map-marker,&.calendar,&.user-friends{left:15px;right:auto;fill:", ";}&.calendar{@media (max-width:480px){width:14px;height:14px;}}&.user-friends{width:17px;height:17px;@media (max-width:480px){width:16px;height:16px;}}&.caret-down{right:12px;left:auto;fill:", ";@media (max-width:991px){right:20px;}@media (max-width:991px){right:15px;}}}"], Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(external_styled_tools_["palette"])('text', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0));
const GuestWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__GuestWrapper",
  componentId: "qmc439-4"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Searchstyle__ItemWrapper",
  componentId: "qmc439-5"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;&:last-child{margin-bottom:5px;}.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
/* harmony default export */ var Search_style = (BannerWrapper);
// EXTERNAL MODULE: ./context/SearchProvider.js
var SearchProvider = __webpack_require__("l0iN");

// EXTERNAL MODULE: ./shared/components/DatePicker/ReactDates.js + 1 modules
var ReactDates = __webpack_require__("8gEg");

// EXTERNAL MODULE: ./components/Common/ViewWithPopup/ViewWithPopup.js + 3 modules
var ViewWithPopup = __webpack_require__("EKex");

// EXTERNAL MODULE: ./components/Common/InputIncDec/InputIncDec.js + 1 modules
var InputIncDec = __webpack_require__("tC0J");

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__("lJcc");
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: ./env-config.js
var env_config = __webpack_require__("Ye+W");

// CONCATENATED MODULE: ./components/Guest/Home/Search/SearchForm.js



var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const calendarItem = {
  separator: '-',
  format: 'MM-DD-YYYY',
  locale: 'en'
};

const SearchForm = () => {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(SearchProvider["a" /* SearchContext */]);
  const {
    0: searchDate,
    1: setSearchDate
  } = Object(external_react_["useState"])({
    setStartDate: null,
    setEndDate: null
  });
  const {
    0: guest,
    1: setGuest
  } = Object(external_react_["useState"])({
    children: 0,
    adults: 0
  });

  const handleIncrement = type => {
    setGuest(_objectSpread(_objectSpread({}, guest), {}, {
      [type]: parseInt(guest[type]) + 1
    }));
  };

  const handleDecrement = type => {
    if (guest[type] <= 0) {
      return false;
    }

    setGuest(_objectSpread(_objectSpread({}, guest), {}, {
      [type]: parseInt(guest[type]) - 1
    }));
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setGuest(_objectSpread(_objectSpread({}, guest), {}, {
      [type]: parseInt(currentValue)
    }));
  };

  const goToListingPage = () => {
    external_react_ga_default.a.event({
      category: 'engagement',
      action: 'browse',
      label: 'browse rentals'
    });
    Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "11tx", 7)).then(x => x.default).then(ReactPixel => {
      ReactPixel.init(env_config["PIXEL_ID"]);
      ReactPixel.track('Search');
    });
    dispatch({
      type: 'UPDATE_QUERY',
      payload: _objectSpread(_objectSpread({}, state), {}, {
        checkin_date: null,
        checkout_date: null,
        children: null,
        adults: null
      })
    });
    router_default.a.push({
      pathname: `/listing`
    }, {
      pathname: `/listing`
    }, {
      shallow: true
    });
  };

  const goToFilteredListingPage = () => {
    external_react_ga_default.a.event({
      category: 'engagement',
      action: 'search',
      label: 'search rentals'
    });
    external_react_ga_default.a.event({
      category: 'engagement',
      action: 'view_search_results',
      label: 'view rentals search results'
    });
    let query = {
      checkin_date: searchDate.setStartDate,
      checkout_date: searchDate.setEndDate,
      adults: guest.adults,
      children: guest.children
    };

    for (const key in query) {
      if (query[key] === '' || query[key] === null || query[key] === 0) {
        delete query[key];
      }
    }

    dispatch({
      type: 'UPDATE_QUERY',
      payload: _objectSpread(_objectSpread({}, state), query)
    });
    router_default.a.push({
      pathname: `/listing`,
      query: query
    }, {
      pathname: `/listing`,
      query: query
    }, {
      shallow: true
    });
  };

  return __jsx(FormWrapper, null, __jsx(row_default.a, {
    gutter: 32
  }, __jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, __jsx(ComponentWrapper, null, __jsx(fa_["FaRegCalendar"], {
    className: "calendar"
  }), __jsx(ReactDates["a" /* default */], {
    startDatePlaceholderText: "Check In",
    endDatePlaceholderText: "Check Out",
    item: calendarItem,
    startDateId: "startDateId-id-home",
    endDateId: "endDateId-id-home",
    updateSearchData: setDateValue => setSearchDate(setDateValue),
    showClearDates: true,
    small: true,
    numberOfMonths: 1
  }))), __jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, __jsx(ComponentWrapper, null, __jsx(fa_["FaUserFriends"], {
    className: "user-friends"
  }), __jsx(ViewWithPopup["a" /* default */], {
    key: 200,
    noView: true,
    className: "children_adults",
    view: __jsx(button_default.a, {
      type: "default"
    }, __jsx("span", null, "Adults ", guest.children > 0 && `: ${guest.children}`), __jsx("span", null, "-"), __jsx("span", null, "Children", guest.adults > 0 && `: ${guest.adults}`)),
    popup: __jsx(GuestWrapper, null, __jsx(ItemWrapper, null, __jsx("strong", null, "Adults"), __jsx(InputIncDec["a" /* default */], {
      id: "adults",
      increment: () => handleIncrement('adults'),
      decrement: () => handleDecrement('adults'),
      onChange: e => handleIncDecOnChnage(e, 'adults'),
      value: guest.adults
    })), __jsx(ItemWrapper, null, __jsx("strong", null, "Children"), __jsx(InputIncDec["a" /* default */], {
      id: "children",
      increment: () => handleIncrement('children'),
      decrement: () => handleDecrement('children'),
      onChange: e => handleIncDecOnChnage(e, 'children'),
      value: guest.children
    })))
  }))), __jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, __jsx("div", {
    className: "search-form-buttons"
  }, __jsx(button_default.a, {
    type: "secondary",
    htmlType: "submit",
    size: "large",
    onClick: goToFilteredListingPage
  }, "Search"), __jsx(button_default.a, {
    type: "secondary",
    htmlType: "submit",
    size: "large",
    onClick: goToListingPage
  }, "Browse All Rentals")))));
};

/* harmony default export */ var Search_SearchForm = (Object(router_["withRouter"])(SearchForm));
// EXTERNAL MODULE: ./shared/UI/UI/Container/Container.js + 1 modules
var Container = __webpack_require__("iDsv");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Common/PostBlock/EditPost.js
var EditPost = __webpack_require__("eJju");

// CONCATENATED MODULE: ./components/Guest/Home/Search/HomePageSearch.js
var HomePageSearch_jsx = external_react_default.a.createElement;







const HomePageSearch = ({
  posts
}) => {
  return HomePageSearch_jsx(Search_style, null, HomePageSearch_jsx(Container["a" /* default */], null, HomePageSearch_jsx(SearchWrapper, null, HomePageSearch_jsx(EditPost["a" /* default */], {
    index: 93,
    posts: posts,
    size: "lg"
  }), HomePageSearch_jsx(Search_SearchForm, null), HomePageSearch_jsx("h6", null, "Please ", HomePageSearch_jsx(link_default.a, {
    href: "/contact"
  }, "Contact us"), " for best rates for long-term stays of 28 nights or more"))));
};

/* harmony default export */ var Search_HomePageSearch = (HomePageSearch);
// CONCATENATED MODULE: ./shared/assets/images/room1.jpg
/* harmony default export */ var room1 = ("/static/assets/9d676f5034d3f97570716478fb116a36.jpg");
// CONCATENATED MODULE: ./shared/assets/images/room2.jpg
/* harmony default export */ var room2 = ("/static/assets/c1f5c38f94fcc6b8f7d8d28394bcbe87.jpg");
// CONCATENATED MODULE: ./shared/assets/images/room3.jpg
/* harmony default export */ var room3 = ("/static/assets/7459786ba86f557fb3b2707ec8b5f386.jpg");
// CONCATENATED MODULE: ./shared/assets/images/doctor.jpg
/* harmony default export */ var doctor = ("/static/assets/dcffa16a07f934d18e666e475ff46234.jpg");
// CONCATENATED MODULE: ./shared/assets/images/family.jpg
/* harmony default export */ var family = ("/static/assets/3c4ab9d2c78438b29c6b64e1c89d34d0.jpg");
// CONCATENATED MODULE: ./shared/assets/images/dining.jpg
/* harmony default export */ var dining = ("/static/assets/dd3ddede7156f7626875f9f2a7da3ab8.jpg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_1.svg
/* harmony default export */ var icons_1 = ("/static/assets/492f2ad0b78391eecdd374eacb7f412f.svg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_2.svg
/* harmony default export */ var icons_2 = ("/static/assets/3338898a74e51bd4871ec58bc784eed8.svg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_3.svg
/* harmony default export */ var icons_3 = ("/static/assets/461aecdef9cb605887f728126e5c3e2f.svg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_4.svg
/* harmony default export */ var icons_4 = ("/static/assets/0447dd0727a1a2ec9b4092d229863e5a.svg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_5.svg
/* harmony default export */ var icons_5 = ("/static/assets/809bfdbad3be49ed5e20eff532f6e01c.svg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_6.svg
/* harmony default export */ var icons_6 = ("/static/assets/53ea659ffbfec7ca5c73370481a9dcf9.svg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_7.svg
/* harmony default export */ var icons_7 = ("/static/assets/bdc9d30a37a6607ac95dcd725d005dca.svg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_8.svg
/* harmony default export */ var icons_8 = ("/static/assets/e017fae8f394a203034fde89e7aed6fb.svg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_9.svg
/* harmony default export */ var icons_9 = ("/static/assets/e79a38f4ed532d324b2a3144c88df921.svg");
// CONCATENATED MODULE: ./shared/assets/images/icon/icons_10.svg
/* harmony default export */ var icons_10 = ("/static/assets/19fd25d61f04bce1de22fda90ebd64ac.svg");
// CONCATENATED MODULE: ./shared/assets/images/stayinboston.jpg
/* harmony default export */ var stayinboston = ("/static/assets/6b11a6ec40939939279497572a552ecc.jpg");
// CONCATENATED MODULE: ./shared/assets/images/location_boston.jpg
/* harmony default export */ var location_boston = ("/static/assets/ed415444d074232884316dc666609e63.jpg");
// CONCATENATED MODULE: ./shared/assets/images/location_brookline.jpg
/* harmony default export */ var location_brookline = ("/static/assets/f4e5e3b4baa9daf6c81cabe7fc38d0ab.jpg");
// CONCATENATED MODULE: ./shared/assets/images/location_cambridge.jpg
/* harmony default export */ var location_cambridge = ("/static/assets/fa098c343e114d596bd28e32624087d3.jpg");
// CONCATENATED MODULE: ./shared/assets/images/location_quincy.jpg
/* harmony default export */ var location_quincy = ("/static/assets/e447712cf0bd901bc3ded127c1f0c26d.jpg");
// CONCATENATED MODULE: ./components/Guest/Home/Home.styles.js





const HomeWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Homestyles__HomeWrapper",
  componentId: "sc-7mpmsq-0"
})([".rental-solution-block{padding:130px 0 50px;h2{color:", ";}p{margin-bottom:40px;}.solution-card{margin:0 auto;max-width:370px;min-height:550px;width:100%;height:100%;padding:0;display:flex;flex-direction:column;border-radius:10px;box-shadow:0 6px 12px 0 rgba(0,0,0,0.15);img{max-width:100%;border-radius:8px 8px 0 0;margin:0;padding:0;}.solution-content{display:flex;flex-direction:column;flex-grow:1;padding:30px 28px;h4{margin-top:0;color:", "}p{font-size:1rem;}a{margin:auto 0 0 auto;display:flex;justify-content:center;align-items:center;font-size:16px;min-width:8rem;border-radius:10px;}button{margin-top:auto;margin-left:auto;max-width:150px;display:flex;justify-content:center;align-items:center;border-radius:10px}}}}.medical-travel-block{padding:40px 0;background:", ";h2{text-align:center;margin:18px auto 80px;color:#fff;}img{width:100%;display:block;border-radius:8px;height:auto;}.texts-block{padding-left:128px;p{color:#fff;margin-bottom:30px;}@media (max-width:992px){padding-left:0;}}}.insurance-block{padding:96px 0;background:#f8f8f8;img{width:100%;}.texts-block{padding-left:128px;h2{margin:0 auto 33px;color:", ";}}@media (max-width:992px){padding:50px 0;.texts-block{padding-left:0;}}}.corporate-housing-block{padding:96px 0;h2{margin:0 auto 33px;color:", ";line-height:1.2;}img{display:block;border-radius:8px;box-shadow:0 10px 20px #ccc;max-width:100%;height:auto;}.ant-btn{min-width:240px;}@media (max-width:992px){padding:50px 0;}}.stars-background{background:linear-gradient(to right,rgba(255,255,255,0.85),rgba(255,255,255,0.85)),url(", ") no-repeat center;background-size:cover;padding:145px 24px;.stars-icon{max-width:120px;}.stars-experience-block{h2{text-align:center;margin:0 auto 76px;color:", ";}h4{color:", " !important;}.stars-item{text-align:center;margin-bottom:3rem;img{margin:0 0 1.5rem;}h4{font-family:Raleway,sans-serif;font-size:1.2rem;font-weight:bold;text-transform:uppercase;color:#3a3a3a;margin:0 0 1rem 0;}p{font-size:1.125rem !important;}}}.vip-services-block{h3{margin:0 0 48px;font-size:30px;font-weight:700;}h5{font-size:20px;font-weight:bold;color:", " !important;}}}.stay-boston-block{padding:77px 24px;background-color:#F8F8F8;h2{margin:0 auto 25px;color:", ";}.stay-feature-item{display:flex;align-items:center;padding-bottom:20px;svg{fill:", ";width:16px;height:16px;line-height:30px;margin-right:8px;}h4{font-family:\"Raleway\",sans-serif;margin-bottom:0;color:#3a3a3a;font-size:16px;}}img{width:100%;border-radius:8px;box-shadow:0 10px 20px #ccc;max-width:100%;height:auto;}.ant-btn-secondary{min-width:240px;}}.explore-locations-block{padding:120px 0;h2{margin:0 auto 45px;color:", ";text-align:center;}.location-card{position:relative;max-width:350px;box-shadow:0 5px 25px 0 rgba(0,0,0,0.16);border-radius:10px;transition:all ease 0.3s;.bg-box{width:100%;padding-top:100%;background-position:center;background-size:cover;border-radius:10px;opacity:1;transition:opacity ease-in-out 300ms;}&:hover{.bg-box{opacity:.7;}}a{position:absolute;top:18px;left:18px;right:18px;padding:18px 20px;background-color:white;border-radius:10px;font-family:PT Serif,sans-serif;font-size:24px;line-height:1;text-align:center;color:", ";}}.btn{min-width:15rem;}@media screen and (max-width:992px){padding:50px 0;}}.reviews-block{padding:140px 24px;h2{margin:0 auto 16px;text-align:center;color:", ";}.carousel-container{position:relative;margin:0 auto;padding:0 50px;width:100%;.slick-slider{.slick-list{padding:50px 0;.slick-track{display:flex;align-items:stretch;.slick-slide{display:flex;height:auto;margin:0 12px;justify-content:center;& > div{display:flex;justify-content:center;align-items:center;height:100%;.review-card{display:flex;flex-direction:column;margin:0 auto;padding:0 0 24px;max-width:370px;min-height:450px;height:100%;border-radius:8px;background-color:#e8c36a;box-shadow:0px 5px 25px 0px rgba(0,0,0,0.16);p{padding:2rem;line-height:2rem;}.reviewer-box{flex-grow:1;display:flex;flex-direction:column;justify-content:flex-end;align-items:center;h4{text-align:center;}svg{width:20px;height:20px;margin-right:4px;fill:", ";}}}}}}}.slick-arrow{width:50px;height:50px;fill:", ";path{fill:", ";}&.slick-prev{left:-50px;}&.slick-next{right:-50px;}}}}@media screen and (max-width:992px){padding:50px 0;.carousel-container{padding:0 25px;.slick-slider{.slick-list{.slick-slide{.review-card{p{font-size:1rem;}}}}.slick-arrow{width:25px;height:25px;&.slick-prev{left:-25px;}&.slick-next{right:-25px;}}}}}}"], Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 1), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), room3, Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('gray', 2), Object(external_styled_tools_["palette"])('gray', 2), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0));
/* harmony default export */ var Home_styles = (HomeWrapper);
// EXTERNAL MODULE: ./shared/UI/Box/Box.js + 1 modules
var Box = __webpack_require__("Wasw");

// EXTERNAL MODULE: external "react-star-rating-component"
var external_react_star_rating_component_ = __webpack_require__("txVm");
var external_react_star_rating_component_default = /*#__PURE__*/__webpack_require__.n(external_react_star_rating_component_);

// CONCATENATED MODULE: ./components/Guest/Review/GuestReviewCard.js
var GuestReviewCard_jsx = external_react_default.a.createElement;





function GuestReviewCard(props) {
  const {
    index,
    posts,
    rating
  } = props;
  return GuestReviewCard_jsx("div", {
    className: "review-card"
  }, GuestReviewCard_jsx(EditPost["a" /* default */], {
    index: index,
    content: true,
    posts: posts
  }), GuestReviewCard_jsx("div", {
    className: "reviewer-box"
  }, GuestReviewCard_jsx(EditPost["a" /* default */], {
    title: true,
    index: index,
    posts: posts
  }), GuestReviewCard_jsx(external_react_star_rating_component_default.a, {
    name: "GuestRating",
    editing: false,
    starCount: 5,
    value: parseInt(rating),
    renderStarIcon: () => GuestReviewCard_jsx(fa_["FaStar"], null)
  })));
}

/* harmony default export */ var Review_GuestReviewCard = (GuestReviewCard);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/Guest/Review/GuestReview.js
var GuestReview_jsx = external_react_default.a.createElement;





const settings = {
  dots: false,
  arrows: true,
  nextArrow: GuestReview_jsx(NextArrow, null),
  prevArrow: GuestReview_jsx(PrevArrow, null),
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2
    }
  }]
};

function NextArrow(props) {
  const {
    className,
    onClick
  } = props;
  return GuestReview_jsx(fa_["FaChevronRight"], {
    className: className,
    onClick: onClick
  });
}

function PrevArrow(props) {
  const {
    className,
    onClick
  } = props;
  return GuestReview_jsx(fa_["FaChevronLeft"], {
    className: className,
    onClick: onClick
  });
}

function GuestReviews({
  posts
}) {
  return GuestReview_jsx(external_react_default.a.Fragment, null, GuestReview_jsx("h2", null, "Guest Reviews"), GuestReview_jsx(Container["a" /* default */], null, GuestReview_jsx("div", {
    className: "carousel-container"
  }, GuestReview_jsx(external_react_slick_default.a, settings, GuestReview_jsx(Review_GuestReviewCard, {
    key: 4,
    index: 88,
    posts: posts,
    rating: 5
  }), GuestReview_jsx(Review_GuestReviewCard, {
    key: 1,
    index: 89,
    posts: posts,
    rating: 5
  }), GuestReview_jsx(Review_GuestReviewCard, {
    key: 2,
    index: 90,
    posts: posts,
    rating: 5
  }), GuestReview_jsx(Review_GuestReviewCard, {
    key: 3,
    index: 91,
    posts: posts,
    rating: 5
  })))));
}
// CONCATENATED MODULE: ./components/Guest/Home/index.js



var Home_jsx = external_react_default.a.createElement;

function Home_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Home_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Home_ownKeys(Object(source), true).forEach(function (key) { Home_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Home_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Home_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


































function Home({
  posts
}) {
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(SearchProvider["a" /* SearchContext */]);

  function gotoListingPage(category) {
    let query = {
      category: category
    };
    dispatch({
      type: 'UPDATE_QUERY',
      payload: Home_objectSpread(Home_objectSpread({}, state), {}, {
        category: category
      })
    });

    if (false) {}
  }

  return Home_jsx(Home_styles, null, Home_jsx(Search_HomePageSearch, {
    posts: posts
  }), Home_jsx(Box["a" /* default */], {
    as: "section",
    className: "rental-solution-block"
  }, Home_jsx(Container["a" /* default */], null, Home_jsx(EditPost["a" /* default */], {
    index: 0,
    posts: posts,
    size: "lg"
  }), Home_jsx(row_default.a, {
    gutter: 32
  }, Home_jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, Home_jsx("div", {
    className: "solution-card"
  }, Home_jsx("img", {
    src: room1,
    alt: "private rooom"
  }), Home_jsx("div", {
    className: "solution-content"
  }, Home_jsx(EditPost["a" /* default */], {
    index: 1,
    posts: posts
  }), Home_jsx(button_default.a, {
    type: "secondary",
    size: "large",
    onClick: () => gotoListingPage("Private Rooms")
  }, "Explore")))), Home_jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, Home_jsx("div", {
    className: "solution-card"
  }, Home_jsx("img", {
    src: room2,
    alt: "apartments"
  }), Home_jsx("div", {
    className: "solution-content"
  }, Home_jsx(EditPost["a" /* default */], {
    index: 2,
    posts: posts
  }), Home_jsx(button_default.a, {
    type: "secondary",
    size: "large",
    onClick: () => gotoListingPage("Studios")
  }, "Explore")))), Home_jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, Home_jsx("div", {
    className: "solution-card"
  }, Home_jsx("img", {
    src: room3,
    alt: "homes"
  }), Home_jsx("div", {
    className: "solution-content"
  }, Home_jsx(EditPost["a" /* default */], {
    index: 3,
    posts: posts
  }), Home_jsx(button_default.a, {
    type: "secondary",
    size: "large",
    onClick: () => gotoListingPage("3-Bedrooms")
  }, "Explore"))))))), Home_jsx(Box["a" /* default */], {
    as: "section",
    className: "medical-travel-block"
  }, Home_jsx(Container["a" /* default */], null, Home_jsx(EditPost["a" /* default */], {
    index: 29,
    posts: posts,
    size: "lg",
    title: true
  }), Home_jsx(row_default.a, null, Home_jsx(col_default.a, {
    lg: 12,
    sm: 24
  }, Home_jsx("img", {
    src: doctor,
    alt: "medical"
  })), Home_jsx(col_default.a, {
    lg: 12,
    sm: 24
  }, Home_jsx("div", {
    className: "texts-block"
  }, Home_jsx(EditPost["a" /* default */], {
    index: 29,
    posts: posts,
    content: true
  }), Home_jsx("button", {
    className: "btn-primary"
  }, "Explore Our Apartments")))))), Home_jsx(Box["a" /* default */], {
    as: "section",
    className: "insurance-block"
  }, Home_jsx(Container["a" /* default */], null, Home_jsx(row_default.a, {
    gutter: 32
  }, Home_jsx(col_default.a, {
    lg: 12,
    sm: 24
  }, Home_jsx("img", {
    src: family,
    alt: "family"
  })), Home_jsx(col_default.a, {
    lg: 12,
    sm: 24
  }, Home_jsx("div", {
    className: "texts-block"
  }, Home_jsx(EditPost["a" /* default */], {
    index: 92,
    posts: posts,
    size: "lg"
  })))))), Home_jsx(Box["a" /* default */], {
    as: "section",
    className: "corporate-housing-block"
  }, Home_jsx(Container["a" /* default */], null, Home_jsx(row_default.a, {
    gutter: 32
  }, Home_jsx(col_default.a, {
    lg: 10,
    sm: 24
  }, Home_jsx(EditPost["a" /* default */], {
    index: 4,
    posts: posts,
    size: "lg"
  }), Home_jsx(button_default.a, {
    type: "secondary",
    size: "large"
  }, "Read more")), Home_jsx(col_default.a, {
    lg: 14,
    sm: 24
  }, Home_jsx("img", {
    src: dining,
    alt: "family"
  }))))), Home_jsx(Box["a" /* default */], {
    as: "section",
    className: "stars-background"
  }, Home_jsx(Container["a" /* default */], {
    className: "stars-experience-block"
  }, Home_jsx("h2", null, "The STARS Experience"), Home_jsx(row_default.a, {
    gutter: 32
  }, Home_jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, Home_jsx("div", {
    className: "stars-item"
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_1,
    alt: "icon"
  }), Home_jsx(EditPost["a" /* default */], {
    index: 5,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, Home_jsx("div", {
    className: "stars-item"
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_2,
    alt: "icon"
  }), Home_jsx(EditPost["a" /* default */], {
    index: 6,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, Home_jsx("div", {
    className: "stars-item"
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_3,
    alt: "icon"
  }), Home_jsx(EditPost["a" /* default */], {
    index: 7,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, Home_jsx("div", {
    className: "stars-item"
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_4,
    alt: "icon"
  }), Home_jsx(EditPost["a" /* default */], {
    index: 8,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, Home_jsx("div", {
    className: "stars-item"
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_5,
    alt: "icon"
  }), Home_jsx(EditPost["a" /* default */], {
    index: 9,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 8,
    sm: 24
  }, Home_jsx("div", {
    className: "stars-item"
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_6,
    alt: "icon"
  }), Home_jsx(EditPost["a" /* default */], {
    index: 10,
    posts: posts
  }))))), Home_jsx(Container["a" /* default */], {
    className: "vip-services-block"
  }, Home_jsx("h3", null, "VIP Services"), Home_jsx(row_default.a, {
    gutter: [32, 64]
  }, Home_jsx(col_default.a, {
    lg: 12,
    sm: 24
  }, Home_jsx(row_default.a, null, Home_jsx(col_default.a, {
    lg: 10,
    sm: 24
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_7,
    alt: "icon"
  })), Home_jsx(col_default.a, {
    lg: 14,
    sm: 24
  }, Home_jsx(EditPost["a" /* default */], {
    index: 11,
    posts: posts,
    size: "sm"
  })))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 24
  }, Home_jsx(row_default.a, null, Home_jsx(col_default.a, {
    lg: 10,
    sm: 24
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_8,
    alt: "icon"
  })), Home_jsx(col_default.a, {
    lg: 14,
    sm: 24
  }, Home_jsx(EditPost["a" /* default */], {
    index: 12,
    posts: posts,
    size: "sm"
  })))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 24
  }, Home_jsx(row_default.a, null, Home_jsx(col_default.a, {
    lg: 10,
    sm: 24
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_9,
    alt: "icon"
  })), Home_jsx(col_default.a, {
    lg: 14,
    sm: 24
  }, Home_jsx(EditPost["a" /* default */], {
    index: 13,
    posts: posts,
    size: "sm"
  })))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 24
  }, Home_jsx(row_default.a, null, Home_jsx(col_default.a, {
    lg: 10,
    sm: 24
  }, Home_jsx("img", {
    className: "stars-icon",
    src: icons_10,
    alt: "icon"
  })), Home_jsx(col_default.a, {
    lg: 14,
    sm: 24
  }, Home_jsx(EditPost["a" /* default */], {
    index: 14,
    posts: posts,
    size: "sm"
  }))))))), Home_jsx(Box["a" /* default */], {
    as: "section",
    className: "stay-boston-block"
  }, Home_jsx(Container["a" /* default */], null, Home_jsx(row_default.a, {
    gutter: 32
  }, Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("h2", null, "Your Stay in Boston Simplified"), Home_jsx(row_default.a, {
    gutter: 24
  }, Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 15,
    posts: posts,
    title: true
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 21,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 16,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 22,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 17,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 23,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 18,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 24,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 19,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 25,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 20,
    posts: posts
  }))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("div", {
    className: "stay-feature-item"
  }, Home_jsx(fa_["FaStar"], null), Home_jsx(EditPost["a" /* default */], {
    index: 26,
    posts: posts
  }))), Home_jsx("button", {
    className: "ant-btn-secondary ant-btn-lg"
  }, "More about us"))), Home_jsx(col_default.a, {
    lg: 12,
    sm: 12
  }, Home_jsx("img", {
    src: stayinboston,
    alt: "stayinboston"
  }))))), Home_jsx(Box["a" /* default */], {
    as: "section",
    className: "explore-locations-block"
  }, Home_jsx(Container["a" /* default */], null, Home_jsx("h2", null, "Explore Our Locations"), Home_jsx(row_default.a, {
    gutter: 32
  }, Home_jsx(col_default.a, {
    lg: 6,
    md: 6
  }, Home_jsx("div", {
    className: "location-card my-3 mx-auto"
  }, Home_jsx("div", {
    className: "bg-box",
    style: {
      backgroundImage: `url(${location_boston})`
    }
  }), Home_jsx(link_default.a, {
    href: `/locations#boston`
  }, "Boston"))), Home_jsx(col_default.a, {
    lg: 6,
    md: 6
  }, Home_jsx("div", {
    className: "location-card my-3 mx-auto"
  }, Home_jsx("div", {
    className: "bg-box",
    style: {
      backgroundImage: `url(${location_brookline})`
    }
  }), Home_jsx(link_default.a, {
    href: `/locations#brookline`
  }, "Brookline"))), Home_jsx(col_default.a, {
    lg: 6,
    md: 6
  }, Home_jsx("div", {
    className: "location-card my-3 mx-auto"
  }, Home_jsx("div", {
    className: "bg-box",
    style: {
      backgroundImage: `url(${location_cambridge})`
    }
  }), Home_jsx(link_default.a, {
    href: `/locations#cambridge`
  }, "Cambridge"))), Home_jsx(col_default.a, {
    lg: 6,
    md: 6
  }, Home_jsx("div", {
    className: "location-card my-3 mx-auto"
  }, Home_jsx("div", {
    className: "bg-box",
    style: {
      backgroundImage: `url(${location_quincy})`
    }
  }), Home_jsx(link_default.a, {
    href: `/locations#quincy`
  }, "Quincy"))))), Home_jsx(Box["a" /* default */], {
    as: "section",
    className: "reviews-block"
  }, Home_jsx(GuestReviews, {
    posts: posts
  }))));
}

/* harmony default export */ var Guest_Home = (Home);
// CONCATENATED MODULE: ./pages/index.js

var pages_jsx = external_react_default.a.createElement;




function HomePage(props) {
  const {
    posts,
    properties
  } = props;
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", null, "Stars of Boston: Your Short Term Apartment Rental Solution! | Stars of Boston")), pages_jsx(GuestLayout["a" /* default */], null, pages_jsx(Guest_Home, {
    posts: posts,
    properties: properties
  })));
}
async function getStaticProps() {
  const response = await fetch(`${env_config["BACKEND_URL"]}/api/content/`);
  const posts = await response.json();
  return {
    props: {
      posts
    }
  };
}

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "Wasw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./shared/UI/Base.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** This is our base component every components must be extend it. */

const themed = key => props => props.theme[key];
const base = Object(external_styled_system_["compose"])(() => ({
  boxSizing: 'border-box'
}), external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["minWidth"], external_styled_system_["maxWidth"], external_styled_system_["height"], external_styled_system_["minHeight"], external_styled_system_["maxHeight"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["flex"], external_styled_system_["order"], external_styled_system_["alignSelf"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["display"]);
base.propTypes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, external_styled_system_["display"].propTypes), external_styled_system_["space"].propTypes), external_styled_system_["borders"].propTypes), external_styled_system_["borderColor"].propTypes), external_styled_system_["width"].propTypes), external_styled_system_["height"].propTypes), external_styled_system_["fontSize"].propTypes), external_styled_system_["color"].propTypes), external_styled_system_["flex"].propTypes), external_styled_system_["order"].propTypes), external_styled_system_["alignSelf"].propTypes);
// CONCATENATED MODULE: ./shared/UI/Box/Box.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const BoxWrapper = external_styled_components_default()('div').withConfig({
  displayName: "Box__BoxWrapper",
  componentId: "sc-1d082ws-0"
})(base, themed('Box'), props => props.flexBox && Object(external_styled_components_["css"])({
  display: 'flex'
}, external_styled_system_["flexWrap"], external_styled_system_["flexDirection"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], themed('FlexBox')));

const Box = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return __jsx(BoxWrapper, props, children);
};

/* harmony default export */ var Box_Box = __webpack_exports__["a"] = (Box);
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "Ye+W":
/***/ (function(module, exports) {

const prod = true;
console.log("process.env.NODE_ENV", "production", prod);
module.exports = {
  BACKEND_URL: 'https://stars-website-react-2.ue.r.appspot.com',
  // BACKEND_URL: 'https://stars-website-react-2.ue.r.appspot.com',
  // BACKEND_URL: prod ? 'https://stars-website-react-2.ue.r.appspot.com' : 'https://stars-website-react-2.ue.r.appspot.com',
  RECAPTCHA_KEY: "6LffDNoZAAAAAA3a5FIcMwHJSB3V4wJ5_U5w60GH",
  PIXEL_ID: "339821513993100",
  GA_ID: "UA-129107246-1",
  ZENDESK_KEY: "fb706650-c59e-4f45-b7b3-f601aec370db"
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dRoA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return TopbarMenuIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return TopbarSearchIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return TopbarNotifyIcon; });
/* unused harmony export TopbarMailIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return TopbarMessageIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return TopbarCartIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SidebarPeopleIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SidebarHomeIcon; });
/* unused harmony export SidebarTextIcon */
/* unused harmony export SidebarEmailIcon */
/* unused harmony export SidebarChatIcon */
/* unused harmony export SidebarEcommerceIcon */
/* unused harmony export SidebarMapsIcon */
/* unused harmony export SidebarProfileIcon */
/* unused harmony export SidebarScrumBoardIcon */
/* unused harmony export SidebarInvoiceIcon */
/* unused harmony export SidebarYouTubeIcon */
/* unused harmony export SidebarCalendarIcon */
/* unused harmony export SidebarNotesIcon */
/* unused harmony export SidebarToDosIcon */
/* unused harmony export SidebarFireStoreIcon */
/* unused harmony export SidebarContactsIcon */
/* unused harmony export SidebarShuffleIcon */
/* unused harmony export SidebarChartsIcon */
/* unused harmony export SidebarFormsIcon */
/* unused harmony export SidebarUIIcon */
/* unused harmony export SidebarAdvancedIcon */
/* unused harmony export SidebarFeedbackIcon */
/* unused harmony export SidebarTablesIcon */
/* unused harmony export SidebarPagesIcon */
/* unused harmony export SidebarGithubIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarBlankIcon; });
/* unused harmony export SidebarMenuLevelIcon */
/* unused harmony export StickerWidgetUnreadMailIcon */
/* unused harmony export StickerWidgetImgUploadIcon */
/* unused harmony export StickerWidgetMessageIcon */
/* unused harmony export StickerWidgetOrderIcon */
/* unused harmony export CardWidgetNewMsgIcon */
/* unused harmony export CardWidgetVolumeIcon */
/* unused harmony export CardWidgetAchievementIcon */
/* unused harmony export ProgressDownloadIcon */
/* unused harmony export ProgressPieChartIcon */
/* unused harmony export ProgressUploadIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SocialFacebookIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SocialFacebookIconF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SocialTwitterIcon; });
/* unused harmony export SocialGooglePlusIcon */
/* unused harmony export SocialLinkedinIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SocialInstagramIcon; });
/* unused harmony export SocialDribbbleIcon */
/* unused harmony export MailDeleteIcon */
/* unused harmony export MailFolderIcon */
/* unused harmony export MailTagIcon */
/* unused harmony export MailArchiveIcon */
/* unused harmony export MailSpamReportIcon */
/* unused harmony export VoiceSearchMicIcon */
/* unused harmony export VoiceSearchStopIcon */
/* unused harmony export GridViewIcon */
/* unused harmony export ListViewIcon */
/* unused harmony export ArrowLeftIcon */
/* unused harmony export ArrowRightIcon */
/* unused harmony export AddIcon */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloseIcon; });
/* unused harmony export CartIcon */
/* unused harmony export DeleteIcon */
/* unused harmony export EditIcon */
/* unused harmony export MenuIcon */
/* unused harmony export FlameIcon */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2yjL");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("5mtF");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);


 // Guest pages
// TopBar Icons

const TopbarMenuIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdMenu"]; // Menu icon

const TopbarSearchIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosSearch"]; // Search icon

const TopbarNotifyIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosNotifications"]; // Notification icon

const TopbarMailIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdMail"]; // Notification icon

const TopbarMessageIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosChatbubbles"]; // Chat icon

const TopbarCartIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdCart"]; // Cart icon
// SideBar Icons

const SidebarPeopleIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosPeople"];
const SidebarHomeIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosHome"];
const SidebarTextIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosText"];
const SidebarEmailIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdMail"]; // Email icon

const SidebarChatIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosChatbubbles"]; // Chat icon

const SidebarEcommerceIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdBasket"]; // E-commerce icon

const SidebarMapsIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdMap"]; // Map icon

const SidebarProfileIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosPerson"]; // Profile icon

const SidebarScrumBoardIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosApps"]; // Scrum Board icon

const SidebarInvoiceIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosToday"]; // Invoice icon

const SidebarYouTubeIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoYoutube"]; // YouTube icon

const SidebarCalendarIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosCalendar"]; // Calendar icon

const SidebarNotesIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosPaper"]; // Notes icon

const SidebarToDosIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdCheckboxOutline"]; // ToDos icon

const SidebarFireStoreIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdFlame"]; // FireStore Crud icon

const SidebarContactsIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdPersonAdd"]; // Contacts icon

const SidebarShuffleIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosKeypad"]; // Shuffle icon

const SidebarChartsIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdTrendingUp"]; // Chart icon

const SidebarFormsIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdListBox"]; // Forms icon

const SidebarUIIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosLeaf"]; // UI Elements icon

const SidebarAdvancedIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosFlash"]; // Advanced Elements icon

const SidebarFeedbackIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdThumbsUp"]; // Feedback icon

const SidebarTablesIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdGrid"]; // Tables icon

const SidebarPagesIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosCopy"]; // Pages icon

const SidebarGithubIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoGithub"]; // Github Search icon

const SidebarBlankIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosDocument"]; // Blank Page icon

const SidebarMenuLevelIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdOptions"]; // Menu levels icon
// Dashboard Widgets Icons

const StickerWidgetUnreadMailIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosMailUnread"]; // Unread email icon

const StickerWidgetImgUploadIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdCamera"]; // Image Upload icon

const StickerWidgetMessageIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosChatbubbles"]; // Total Messages icon

const StickerWidgetOrderIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdCart"]; // Order Post icon

const CardWidgetNewMsgIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdChatboxes"]; // Card New Message icon

const CardWidgetVolumeIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosMusicalNotes"]; // Card Volume icon

const CardWidgetAchievementIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdTrophy"]; // Card Achievement icon

const ProgressDownloadIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdCloudDownload"]; // Card Download icon

const ProgressPieChartIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosPie"]; // Card Pie icon

const ProgressUploadIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdCloudUpload"]; // Card Upload icon

const SocialFacebookIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoFacebook"]; // Social Facebook icon

const SocialFacebookIconF = react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookF"]; // Social Facebook icon

const SocialTwitterIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoTwitter"]; // Social Twitter icon

const SocialGooglePlusIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoGoogleplus"]; // Social Google Plus icon

const SocialLinkedinIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoLinkedin"]; // Social Linkedin icon

const SocialInstagramIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoInstagram"]; // Social Linkedin icon

const SocialDribbbleIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoLogoDribbble"]; // Social Dribbble icon
// Mail Icons

const MailDeleteIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdTrash"]; // Mail Delete icon

const MailFolderIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdFolder"]; // Mail Move icon

const MailTagIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdPricetags"]; // Mail Tag icon

const MailArchiveIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdArchive"]; // Mail Archive icon

const MailSpamReportIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdAlert"]; // Mail Report icon
// E-commerce Icons

const VoiceSearchMicIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdMic"]; // Voice Search icon

const VoiceSearchStopIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosSquare"]; // Voice Search icon

const GridViewIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosKeypad"]; // Grid View icon

const ListViewIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdMenu"]; // List View icon
// Common Icons

const ArrowLeftIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosArrowBack"]; // Arrow Left icon

const ArrowRightIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosArrowForward"]; // Arrow Right icon

const AddIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdAdd"]; // Add icon

const CloseIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdClose"]; // Close icon

const CartIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdCart"]; // Cart icon

const DeleteIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdTrash"]; // Delete icon

const EditIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdCreate"]; // Edit icon

const MenuIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdMenu"]; // Edit icon

const FlameIcon = react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoMdFlame"]; // Flame icon

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eJju":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_components_utility_loader_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EDUr");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rf6O");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1exS");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const EditPostWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "EditPost__EditPostWrapper",
  componentId: "s7t4a1-0"
})(["margin-top:0;h2,h4,h5{color:", ";margin-top:0;margin-bottom:16px;}"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_6__["palette"])('primary', 0));

function EditPost(props) {
  const {
    index,
    posts,
    size,
    title,
    content
  } = props;
  const isLoggedIn = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.Auth.idToken);

  const renderTitle = () => {
    if (content) return null;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, size === "lg" && __jsx("h2", {
      className: "text-blue"
    }, posts && posts.length > 0 ? posts[index].title : ''), size === "md" && __jsx("h4", {
      className: "text-blue"
    }, posts && posts.length > 0 ? posts[index].title : ''), size === "sm" && __jsx("h5", {
      className: "text-blue"
    }, posts && posts.length > 0 ? posts[index].title : ''));
  };

  const renderContent = () => {
    if (title) return null;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, posts && posts.length > 0 ? __jsx("div", {
      dangerouslySetInnerHTML: {
        __html: posts[index].text
      }
    }) : '');
  };

  return __jsx(EditPostWrapper, null, posts && posts.length > 0 ? '' : __jsx(_iso_components_utility_loader_style__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), renderTitle(), renderContent(), isLoggedIn && posts && posts.length > 0 && __jsx("div", {
    className: "text-center"
  }, __jsx("a", {
    href: `/admin/post?id=${posts[index].id}`,
    target: "_blank",
    className: "edit-btn"
  }, "Edit")));
}

EditPost.prototype = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  posts: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array,
  title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
EditPost.defaultProps = {
  size: 'md',
  title: false,
  content: false
};
/* harmony default export */ __webpack_exports__["a"] = (EditPost);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _denormalizePagePath = __webpack_require__("wkBG");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("S3md"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__("fcRV"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, this.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change('replaceState', destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, this.locale, this.defaultLocale), options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component,
        styleSheets
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        styleSheets,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale, this.defaultLocale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fWH3":
/***/ (function(module, exports) {

module.exports = require("react-zendesk");

/***/ }),

/***/ "faye":
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "hgiS":
/***/ (function(module, exports) {

module.exports = require("react-dates/initialize");

/***/ }),

/***/ "iDsv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./shared/UI/UI/Container/Container.style.js

const ContainerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Containerstyle__ContainerWrapper",
  componentId: "sc-6uyabi-0"
})(["margin-left:auto;margin-right:auto;", ";", ";", " @media (min-width:768px){max-width:750px;width:100%;}@media (min-width:992px){max-width:970px;width:100%;}@media (min-width:1200px){max-width:1170px;width:100%;}@media (min-width:1400px){max-width:1370px;width:100%;}"], props => props.fullWidth && Object(external_styled_components_["css"])(["width:100%;max-width:none !important;"]), props => props.noGutter && Object(external_styled_components_["css"])(["padding-left:0;padding-right:0;"]) || Object(external_styled_components_["css"])(["padding-left:30px;padding-right:30px;@media only screen and (max-width:480px){padding-left:25px;padding-right:25px;}"]), props => props.fluid && Object(external_styled_components_["css"])(["width:100% !important;max-width:100% !important;@media only screen and (min-width:1441px){padding-left:75px;padding-right:75px;}"]));
/* harmony default export */ var Container_style = (ContainerWrapper);
// CONCATENATED MODULE: ./shared/UI/UI/Container/Container.js
var __jsx = external_react_default.a.createElement;



const Container = ({
  children,
  className,
  fullWidth,
  noGutter,
  fluid
}) => {
  return __jsx(Container_style, {
    className: className,
    fullWidth: fullWidth,
    noGutter: noGutter,
    fluid: fluid
  }, children);
};

/* harmony default export */ var Container_Container = __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "l0iN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    }
  }, children);
};

/***/ }),

/***/ "lJcc":
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "mq74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-tools"
var external_styled_tools_ = __webpack_require__("1exS");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./shared/UI/UI/Container/Container.js + 1 modules
var Container = __webpack_require__("iDsv");

// EXTERNAL MODULE: ./containers/Guest/Logo/Logo.js + 1 modules
var Logo = __webpack_require__("ySvh");

// CONCATENATED MODULE: ./shared/library/hooks/useIsScrolled.js


const useIsScrolled = () => {
  const {
    0: hidden,
    1: setHidden
  } = Object(external_react_["useState"])(false);

  const handleScroll = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setHidden(top !== 0);
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return hidden;
};

/* harmony default export */ var hooks_useIsScrolled = (useIsScrolled);
// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// CONCATENATED MODULE: ./containers/Guest/GuestLayout/CovidBanner.js


var __jsx = external_react_default.a.createElement;




const CovidBannerWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CovidBanner__CovidBannerWrapper",
  componentId: "ahj7l1-0"
})(["text-align:center;background-color:", ";color:white;transition:all ease-in-out 300ms;h6{margin:0;padding:4px;color:#fff;}button{background-color:", ";cursor:pointer;padding:4px 16px;line-height:1;color:#fff;}&.hide{opacity:0;transition:all ease-in-out 300ms;}"], Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0));

const CovidBanner = props => {
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = Object(external_react_["useState"])(false);
  const {
    isScrolled
  } = props;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const title = __jsx("h4", {
    style: {
      color: '#0071aa'
    }
  }, "COVID-19 Announcement"); // if (isScrolled) return null;


  return __jsx(CovidBannerWrapper, {
    className: external_classnames_default()({
      hide: isScrolled
    })
  }, __jsx("div", null, __jsx("h6", null, "THE HEALTH OF OUR GUESTS IS A TOP PRIORITY"), __jsx(button_default.a, {
    onClick: showModal,
    style: {
      border: "none"
    }
  }, "Our response to COVID-19 and our flexible cancellation policy")), __jsx(modal_default.a, {
    title: title,
    visible: isModalVisible,
    cancelText: "Close",
    okButtonProps: {
      style: {
        display: 'none'
      }
    },
    style: {
      top: 30
    },
    onCancel: handleCancel
  }, __jsx("p", null, "The health and safety of our guests and employees is our highest priority. We\u2019re actively monitoring the situation and following the guidance U.S. Center for Disease Control & Prevention and the Massachusetts Department of Public Health. We are adjusting our procedures and protocols as the situation develops and will keep you updated every step of the way.")));
};

/* harmony default export */ var GuestLayout_CovidBanner = (CovidBanner);
// CONCATENATED MODULE: ./containers/Guest/GuestLayout/TopNav.js
var TopNav_jsx = external_react_default.a.createElement;









const TopNavWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "TopNav__TopNavWrapper",
  componentId: "sc-1ep308n-0"
})([".navbar{margin:0 auto;background-color:transparent !important;padding:0 !important;display:flex;&.fixed{z-index:1000;position:fixed;left:0;right:0;opacity:1;transition:all ease-in-out 500ms;}&.sticky{top:0;background-color:#fff !important;box-shadow:0 2px 16px 0 rgba(0,0,0,0.14);padding:15px 0;}.nav-container{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;.navbar-brand{img{margin-right:auto;max-width:250px !important;min-width:150px !important;}}.navbar-collapse{height:auto !important;flex-grow:0;.navbar-nav{display:flex;flex-direction:column;justify-content:center;margin-bottom:30px;.nav-item{margin:0;a{margin:0;padding:8px;font-weight:bold;line-height:normal;color:", " !important;position:relative;text-transform:uppercase;text-decoration:none;&:after{content:\"\";position:absolute;width:100%;height:3px;bottom:-3px;left:0;background-color:", ";visibility:hidden;transform:scaleX(0);transition:all 0.3s ease-in-out 0s;}&:hover,&.active{&:after{visibility:visible;transform:scaleX(1);}}}}}}.navbar-toggler{z-index:1000;position:absolute;top:0;right:10px;display:block;height:30px;width:30px;cursor:pointer;padding:0;border:0;background:transparent;outline:0;box-shadow:none;> span{position:absolute;top:0;display:block;width:100%;height:4px;background:", " none repeat scroll 0 0;opacity:1;transition:all 600ms cubic-bezier(0.62,0.04,0.3,1.56);transition-delay:100ms;transform:rotate(0deg);&:nth-child(1){transform:rotate(135deg);margin-top:10px;}&:nth-child(2){opacity:0;}&:nth-child(3){transform:rotate(-135deg);margin-top:10px;}}&.sticky{top:30px;}&.collapsed{span{position:absolute;top:10px;display:block;width:100%;height:4px;background:", " none repeat scroll 0% 0%;opacity:1;transition:all 600ms cubic-bezier(0.62,0.04,0.3,1.56);transition-delay:100ms;transform:rotate(0deg);&:nth-child(1){margin-top:0px;color:", ";}&:nth-child(2){margin-top:10px;margin-right:0px;color:", ";}&:nth-child(3){margin-top:20px;color:", ";}}}}@media (max-width:768px){.navbar-brand{img{width:200px;}}}@media (max-width:992px){max-height:9rem;.navbar-toggler{display:flex;}.navbar-collapse{background:", ";padding:83px 0 20px;position:fixed;top:0;right:0;height:auto;max-width:500px;width:0;opacity:0;transition:all 600ms cubic-bezier(0.62,0.04,0.3,1.56);transition-delay:100ms;.navbar-nav{.nav-item{a{display:block;padding:20px;text-align:center;&:after{content:\"\";width:0;}&:hover{background-color:", ";&:after{content:\"\";width:0;}}}}}&.show{max-width:500px;width:100%;opacity:1;}}}@media (min-width:992px){.navbar-toggler{display:none;}.navbar-collapse{.navbar-nav{flex-direction:row;.nav-item{padding:0;}}}}@media (min-width:1176px){.navbar-collapse{.navbar-nav{.nav-item{padding:0 8px;}}}}@media (min-width:1176px){.navbar-collapse{.navbar-nav{.nav-item{padding:0 12px;}}}}}}"], Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('secondary', 0), Object(external_styled_tools_["palette"])('primary', 1));
const navLinks = [{
  path: '/listing',
  label: 'Apartments'
}, {
  path: '/locations',
  label: 'Locations'
}, {
  path: '/medical',
  label: 'Medical/Corporate'
}, {
  path: '/services',
  label: 'Services'
}, {
  path: '/blog',
  label: 'Blog'
}, {
  path: '/about',
  label: 'About'
}, {
  path: '/contact',
  label: 'Contact'
}];

const TopNavigation = () => {
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  const isScrolled = hooks_useIsScrolled();
  return TopNav_jsx(TopNavWrapper, null, TopNav_jsx(GuestLayout_CovidBanner, {
    isScrolled: isScrolled
  }), TopNav_jsx("nav", {
    className: external_classnames_default()('navbar fixed', {
      sticky: isScrolled
    })
  }, TopNav_jsx(Container["a" /* default */], {
    className: "nav-container"
  }, TopNav_jsx(Logo["a" /* default */], {
    className: "nav-logo"
  }), TopNav_jsx("button", {
    className: external_classnames_default()("navbar-toggler", {
      collapsed: !show,
      sticky: isScrolled
    }),
    onClick: () => setShow(!show)
  }, TopNav_jsx("span", {
    className: "nav-span"
  }), TopNav_jsx("span", null), TopNav_jsx("span", null)), TopNav_jsx("div", {
    className: external_classnames_default()("navbar-collapse", {
      show: show
    })
  }, TopNav_jsx("div", {
    className: "navbar-nav"
  }, navLinks.map((item, index) => TopNav_jsx("div", {
    key: index,
    className: "nav-item"
  }, TopNav_jsx(link_default.a, {
    href: item.path
  }, item.label))))))));
};

/* harmony default export */ var TopNav = (TopNavigation);
// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: ./shared/config/icon.config.js
var icon_config = __webpack_require__("dRoA");

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./components/Common/SocialLinks.js
var SocialLinks_jsx = external_react_default.a.createElement;



function SocialLinks(props) {
  let {
    size,
    color
  } = props;
  return SocialLinks_jsx("div", {
    className: "social-icons-group"
  }, SocialLinks_jsx("a", {
    target: "_blank",
    href: '//www.instagram.com/starsofboston'
  }, SocialLinks_jsx(icon_config["g" /* SocialInstagramIcon */], {
    size: size
  })), SocialLinks_jsx("a", {
    target: "_blank",
    href: '//twitter.com/starsofboston'
  }, SocialLinks_jsx(icon_config["h" /* SocialTwitterIcon */], {
    size: size
  })), SocialLinks_jsx("a", {
    target: "_blank",
    href: '//www.facebook.com/starsboston617'
  }, SocialLinks_jsx(icon_config["f" /* SocialFacebookIconF */], {
    size: size
  })));
}
SocialLinks.prototype = {
  size: external_prop_types_default.a.number,
  color: external_prop_types_default.a.string
};
SocialLinks.defaultProps = {
  size: 20
};
// EXTERNAL MODULE: ./shared/UI/Logo/LogoNextJs.js + 1 modules
var LogoNextJs = __webpack_require__("zmp8");

// EXTERNAL MODULE: ./shared/assets/images/logo-horizontal.png
var logo_horizontal = __webpack_require__("n91L");

// CONCATENATED MODULE: ./containers/Guest/GuestLayout/Footer.js


var Footer_jsx = external_react_default.a.createElement;








const FooterWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Footer__FooterWrapper",
  componentId: "zxym3d-0"
})(["padding:105px 24px 93px;background-color:#eeeeee;font-size:16px;.footer-logo{img{max-width:300px;width:100%;}}h5{color:", ";margin-bottom:20px;}ul{padding:0;}.social-icons-group{svg{color:#3a3a3a;fill:#3a3a3a;margin:1rem 1.5rem 1rem 0;&:hover{color:#949494;}}}a{font-family:\"Raleway\",sans-serif;color:#3a3a3a !important;word-wrap:break-word;}@media (max-width:992px){padding:2rem;}"], Object(external_styled_tools_["palette"])("primary", 1));

function Footer() {
  return Footer_jsx(FooterWrapper, null, Footer_jsx(Container["a" /* default */], null, Footer_jsx(row_default.a, {
    gutter: 16
  }, Footer_jsx(col_default.a, {
    lg: {
      span: 6
    },
    md: {
      span: 8
    },
    xs: {
      span: 24
    }
  }, Footer_jsx(LogoNextJs["a" /* default */], {
    withLink: true,
    className: "footer-logo",
    linkTo: "/",
    title: "StarsOfBoston",
    src: logo_horizontal["a" /* default */]
  }), Footer_jsx("p", null, "Your short-term apartment rental solution in greater Boston.")), Footer_jsx(col_default.a, {
    lg: {
      span: 6
    },
    md: {
      span: 16
    },
    xs: {
      span: 12
    }
  }, Footer_jsx("h5", null, "Quick Links"), Footer_jsx(row_default.a, {
    gutter: 24
  }, Footer_jsx(col_default.a, {
    lg: {
      span: 12
    },
    xs: {
      span: 12
    }
  }, Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/services"
  }, "Services")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/about"
  }, "About us")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/medical"
  }, "Medical Travel")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/medical"
  }, "Business Travel")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    target: "_blank",
    href: "//www.travelmag.com/articles/short-term-rentals-boston/"
  }, "Press")))), Footer_jsx(col_default.a, {
    lg: {
      span: 12
    },
    xs: {
      span: 12
    }
  }, Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/contact"
  }, "Contact us")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/blog"
  }, "Blog")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/terms-and-conditions"
  }, "Terms & Conditions")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/privacy-policy"
  }, "Privacy Policy")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/cancellation-policy"
  }, "Refund Policy")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/cookie-policy"
  }, "Cookie Policy")))))), Footer_jsx(col_default.a, {
    lg: {
      span: 6
    },
    md: {
      span: 16
    },
    xs: {
      span: 12
    }
  }, Footer_jsx(row_default.a, {
    gutter: 16
  }, Footer_jsx(col_default.a, {
    lg: {
      span: 12
    },
    xs: {
      span: 12
    }
  }, Footer_jsx("h5", null, "Locations"), Footer_jsx("ul", {
    className: "list-unstyled my-3"
  }, Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/services"
  }, "Services")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/about"
  }, "About us")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/medical"
  }, "Medical Travel")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/medical"
  }, "Business Travel")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    target: "_blank",
    href: "//www.travelmag.com/articles/short-term-rentals-boston/"
  }, "Press")))), Footer_jsx(col_default.a, {
    lg: {
      span: 12
    },
    xs: {
      span: 12
    }
  }, Footer_jsx("h5", null, "Explore"), Footer_jsx("ul", {
    className: "list-unstyled  my-3"
  }, Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/"
  }, "Sports")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/"
  }, "Historical Sites")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/"
  }, "Events")), Footer_jsx("li", null, Footer_jsx(link_default.a, {
    href: "/"
  }, "Museums")))))), Footer_jsx(col_default.a, {
    lg: {
      span: 6
    },
    sm: {
      span: 8
    },
    xs: {
      span: 24
    }
  }, Footer_jsx("h5", null, "Get in touch"), Footer_jsx(SocialLinks, {
    size: 25
  }), Footer_jsx("p", null, Footer_jsx(link_default.a, {
    href: "/rental-application"
  }, "Rental Application Form")), Footer_jsx("p", null, Footer_jsx("a", {
    href: "tel:6178559576"
  }, "(617)-855-9576"), Footer_jsx("br", null), Footer_jsx("a", {
    href: "mailto:info@starsofboston.com"
  }, "info@starsofboston.com")), Footer_jsx("p", null, "1583 Beacon Street", Footer_jsx("br", null), "Brookline, MA 02446", Footer_jsx("br", null), "USA"))), Footer_jsx("h6", {
    className: "text-left"
  }, "\xA9 2019-2020 Stars of Boston LLC. All rights reserved.")));
}

/* harmony default export */ var GuestLayout_Footer = (Footer);
// CONCATENATED MODULE: ./containers/Guest/GuestLayout/GuestLayout.styles.js


const GuestAppHolder = external_styled_components_default.a.div.withConfig({
  displayName: "GuestLayoutstyles__GuestAppHolder",
  componentId: "sc-1apdj2j-0"
})(["h1,h2,h3,h4,h5{font-family:\"PT Serif\",sans-serif;font-weight:500;margin-bottom:20px;}h1{font-size:40px;}h2{font-size:32px;}h3{font-size:26px;}h4{font-size:24px;}h5{font-size:20px;}h6{font-size:14px;}p{font-family:\"Raleway\",sans-serif;margin-bottom:16px;color:#3a3a3a;font-size:18px;line-height:28px;}a{color:", " !important;}span{font-family:\"Raleway\",sans-serif;}input.ant-input-lg{height:48px !important;}.ant-input-lg{width:100%;padding:6px 12px;border:2px solid #e4e7ea;border-radius:4px;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out;&:focus,&:active{border:2px solid ", ";box-shadow:none !important;}}"], Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('warning', 0));
/* harmony default export */ var GuestLayout_styles = (GuestAppHolder);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__("lJcc");
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: ./env-config.js
var env_config = __webpack_require__("Ye+W");

// CONCATENATED MODULE: ./components/HOC/WithGATracker.js
var WithGATracker_jsx = external_react_default.a.createElement;





const logPageView = () => {
  console.log(`react-ga pageview for ${window.location.pathname}`);
  external_react_ga_default.a.set({
    page: window.location.pathname
  });
  external_react_ga_default.a.pageview(window.location.pathname);
};

/* harmony default export */ var WithGATracker = (WrappedComponent => props => {
  Object(external_react_["useEffect"])(() => {
    console.log("initGA", env_config["GA_ID"]);
    external_react_ga_default.a.initialize(env_config["GA_ID"]); // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string

    if (!router_default.a.asPath.includes('?')) {
      logPageView();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  Object(external_react_["useEffect"])(() => {
    // Listen for page changes after a navigation or when the query changes
    router_default.a.events.on('routeChangeComplete', logPageView);
    return () => {
      router_default.a.events.off('routeChangeComplete', logPageView);
    };
  }, [router_default.a.events]);
  return WithGATracker_jsx(WrappedComponent, props);
});
// CONCATENATED MODULE: ./components/HOC/WithPixel.js
var WithPixel_jsx = external_react_default.a.createElement;



/* harmony default export */ var WithPixel = (Component => props => {
  Object(external_react_["useEffect"])(() => {
    Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "11tx", 7)).then(x => x.default).then(ReactPixel => {
      console.log("initReactPixel", env_config["PIXEL_ID"]);
      ReactPixel.init(env_config["PIXEL_ID"]);
      ReactPixel.pageView();
      router_default.a.events.on('routeChangeComplete', () => {
        console.log("ReactPixel pageView", router_default.a.events);
        ReactPixel.pageView();
      });
    });
  }, []);
  return WithPixel_jsx(Component, props);
});
// EXTERNAL MODULE: external "react-zendesk"
var external_react_zendesk_ = __webpack_require__("fWH3");
var external_react_zendesk_default = /*#__PURE__*/__webpack_require__.n(external_react_zendesk_);

// CONCATENATED MODULE: ./components/Guest/ChatWidget/ChatWidget.js
var ChatWidget_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const setting = {
  color: {
    theme: '#0071AA'
  },
  offset: {
    horizontal: '0',
    vertical: '80px'
  },
  launcher: {
    label: {
      'en-US': 'Chat with us!'
    },
    chatLabel: {
      '*': 'Chat now'
    }
  },
  contactOptions: {
    enabled: true
  },
  contactForm: {
    suppress: false
  },
  chat: {
    suppress: false
  },
  helpCenter: {
    suppress: true
  }
};

const ChatWidget = () => {
  return ChatWidget_jsx(external_react_zendesk_default.a, _extends({
    zendeskKey: env_config["ZENDESK_KEY"]
  }, setting, {
    onLoaded: () => console.log('is loaded')
  }));
};

/* harmony default export */ var ChatWidget_ChatWidget = (ChatWidget);
// CONCATENATED MODULE: ./containers/Guest/GuestLayout/GuestLayout.js
var GuestLayout_jsx = external_react_default.a.createElement;








function GuestLayout({
  children
}) {
  return GuestLayout_jsx(GuestLayout_styles, null, GuestLayout_jsx("div", null, GuestLayout_jsx(TopNav, null), children, GuestLayout_jsx(GuestLayout_Footer, null), GuestLayout_jsx(ChatWidget_ChatWidget, null)));
}

/* harmony default export */ var GuestLayout_GuestLayout = __webpack_exports__["a"] = (WithGATracker(WithPixel(GuestLayout)));

/***/ }),

/***/ "n91L":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/fef268ab1737012a823293da0727e260.png");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "tC0J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/PlusOutlined"
var PlusOutlined_ = __webpack_require__("L3BB");
var PlusOutlined_default = /*#__PURE__*/__webpack_require__.n(PlusOutlined_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/MinusOutlined"
var MinusOutlined_ = __webpack_require__("BL1r");
var MinusOutlined_default = /*#__PURE__*/__webpack_require__.n(MinusOutlined_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Common/InputIncDec/InputIncDec.style.js

const InputIncDecWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "InputIncDecstyle__InputIncDecWrapper",
  componentId: "sc-1wdf8az-0"
})(["width:104px;height:18px;display:flex;align-items:center;position:relative;overflow:hidden;input[type='number']{width:calc(100% - 54px);position:absolute;left:27px;top:0;height:100%;padding:0;border:0;text-align:center;background-color:transparent;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;margin:0;}&:focus{outline:none;box-shadow:none;}}button{border:0;width:27px;height:27px;border-radius:50%;display:inline-flex;align-items:center;position:absolute;top:0;padding:0;background-color:transparent;cursor:pointer;justify-content:center;&.decBtn{left:0;}&.incBtn{right:0;}&:hover,&:focus{outline:0;}}"]);
/* harmony default export */ var InputIncDec_style = (InputIncDecWrapper);
// CONCATENATED MODULE: ./components/Common/InputIncDec/InputIncDec.js



var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const InputIncDec = (_ref) => {
  let {
    className,
    increment,
    decrement
  } = _ref,
      props = _objectWithoutProperties(_ref, ["className", "increment", "decrement"]);

  const addAllClasses = ['quantity'];

  if (className) {
    addAllClasses.push(className);
  }

  return __jsx(InputIncDec_style, {
    className: addAllClasses.join(' ')
  }, __jsx("button", {
    className: "btn decBtn",
    type: "button",
    onClick: decrement
  }, __jsx(MinusOutlined_default.a, null)), __jsx(input_default.a, _extends({
    className: "qnt-input",
    type: "number"
  }, props)), __jsx("button", {
    className: "btn incBtn",
    type: "button",
    onClick: increment
  }, __jsx(PlusOutlined_default.a, null)));
};

/* harmony default export */ var InputIncDec_InputIncDec = __webpack_exports__["a"] = (InputIncDec);

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "txVm":
/***/ (function(module, exports) {

module.exports = require("react-star-rating-component");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xKsY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "ySvh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./shared/assets/images/logo-horizontal.png
var logo_horizontal = __webpack_require__("n91L");

// CONCATENATED MODULE: ./shared/assets/images/logo-white.png
/* harmony default export */ var logo_white = ("/static/assets/dbd5995e64d9b6e9775705e209d671ab.png");
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: ./shared/UI/Logo/LogoNextJs.js + 1 modules
var LogoNextJs = __webpack_require__("zmp8");

// CONCATENATED MODULE: ./containers/Guest/Logo/Logo.js
var __jsx = external_react_default.a.createElement;






const Logo = props => {
  const {
    className,
    white
  } = props;
  return white ? __jsx(LogoNextJs["a" /* default */], {
    withLink: true,
    linkTo: "/",
    src: logo_white,
    className: className
  }) : __jsx(LogoNextJs["a" /* default */], {
    withLink: true,
    linkTo: "/",
    src: logo_horizontal["a" /* default */],
    className: className
  });
};

Logo.prototype = {
  white: external_prop_types_default.a.bool,
  className: external_prop_types_default.a.string
};
Logo.defaultProps = {
  white: false
};
/* harmony default export */ var Logo_Logo = __webpack_exports__["a"] = (Logo);

/***/ }),

/***/ "zmp8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./shared/UI/Logo/Logo.style.js


const LogoArea = external_styled_components_default.a.div.withConfig({
  displayName: "Logostyle__LogoArea",
  componentId: "sc-1wxz4q2-0"
})(["h3{color:", ";text-transform:capitalize;font-size:22px;font-weight:700;}"], Object(theme_get_["themeGet"])('primary.0', '#008489'));
/* harmony default export */ var Logo_style = (LogoArea);
// CONCATENATED MODULE: ./shared/UI/Logo/LogoNextJs.js
var __jsx = external_react_default.a.createElement;




const LogoNext = ({
  className,
  withLink,
  linkTo,
  title,
  src
}) => {
  return __jsx(Logo_style, {
    className: className
  }, withLink ? __jsx(link_default.a, {
    href: linkTo
  }, __jsx("a", null, src ? __jsx("img", {
    src: src,
    alt: title
  }) : __jsx("h3", null, title))) : __jsx(external_react_["Fragment"], null, __jsx("a", null, src ? __jsx("img", {
    src: src,
    alt: title
  }) : __jsx("h3", null, title))));
};

/* harmony default export */ var LogoNextJs = __webpack_exports__["a"] = (LogoNext);

/***/ })

/******/ });