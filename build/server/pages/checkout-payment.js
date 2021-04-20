module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		23: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/JeY":
/***/ (function(module, exports) {

module.exports = require("@styled-system/theme-get");

/***/ }),

/***/ "/Mzf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FieldWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return RoomGuestWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ItemWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FormActionArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardHeaderWrapper; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/JeY");
/* harmony import */ var _styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1exS");
/* harmony import */ var styled_tools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_tools__WEBPACK_IMPORTED_MODULE_2__);



const ReservationFormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.form.withConfig({
  displayName: "Reservationstyle__ReservationFormWrapper",
  componentId: "sc-17vp3ek-0"
})(["padding:0 30px 30px;@media (max-width:375px){padding:0 15px;}"]);
const FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Reservationstyle__FieldWrapper",
  componentId: "sc-17vp3ek-1"
})(["margin-bottom:30px;@media (max-width:375px){margin-bottom:25px;}label{font-size:15px;color:", ";text-transform:capitalize;margin-bottom:7px;display:block;}.date_picker{margin-bottom:0;> label{margin-bottom:0;width:100%;}.DateRangePicker{width:100%;input,.DateRangePickerInput{border:0;width:100%;height:54px;display:flex;padding:0 15px;font-size:15px;font-weight:400;border-radius:3px;align-items:center;justify-content:space-between;color:", ";background-color:", ";&::placeholder{font-size:15px;color:", ";}.DateInput{width:auto;.DateInput_fang{top:46px !important;}}.DateRangePickerInput_arrow{& + .DateInput{input{text-align:right;}}}}.DateRangePicker_picker{top:56px !important;.DayPicker{width:316px !important;.DayPicker_focusRegion{.DayPicker_transitionContainer{width:316px !important;.CalendarMonth_caption{font-size:16px;color:", ";}}}}}}}.view_with__popup{.popup_handler{button,button.ant-btn{border:0;width:100%;display:flex;padding:0 25px;font-size:15px;font-weight:400;min-height:54px;border-radius:3px;align-items:center;justify-content:space-between;color:", ";background-color:", ";&::after{display:none;}}}&.active{.popup_container{max-width:316px;padding:25px 22px;position:absolute;left:0;top:56px;z-index:2;box-shadow:0 2px 6px rgba(0,0,0,0.05),0 0 0 1px rgba(0,0,0,0.07);&::before{content:'';width:14px;height:14px;top:-8px;left:36px;position:absolute;border-radius:2px;transform:rotate(45deg);background-color:", ";border-top:1px solid ", ";border-left:1px solid ", ";}}}}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.2', '#F7F7F7'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('color.1', '#ffffff'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'), Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('border.3', '#E6E6E6'));
const RoomGuestWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Reservationstyle__RoomGuestWrapper",
  componentId: "sc-17vp3ek-2"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(_styled_system_theme_get__WEBPACK_IMPORTED_MODULE_1__["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Reservationstyle__ItemWrapper",
  componentId: "sc-17vp3ek-3"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;&:last-child{margin-bottom:10px;}.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
const FormActionArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Reservationstyle__FormActionArea",
  componentId: "sc-17vp3ek-4"
})(["display:flex;justify-content:center;flex-direction:column;button{margin-bottom:20px;}"]);
const CardHeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Reservationstyle__CardHeaderWrapper",
  componentId: "sc-17vp3ek-5"
})(["width:100%;h3{color:", ";&.header-price{color:", ";}}.ant-row{position:relative;display:flex;.header-buttons-wrapper{width:100%;position:absolute;bottom:10px;display:flex;justify-content:center;button{display:flex;justify-content:center;align-items:center;font-size:12px;border-radius:10px;background-color:", ";&:hover,&:active{color:", ";background-color:#ffffff !important;}&:first-child{img{height:30px;}margin-right:16px;}}}}"], Object(styled_tools__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0), Object(styled_tools__WEBPACK_IMPORTED_MODULE_2__["palette"])('warning', 0), Object(styled_tools__WEBPACK_IMPORTED_MODULE_2__["palette"])('warning', 0), Object(styled_tools__WEBPACK_IMPORTED_MODULE_2__["palette"])('primary', 0));
/* harmony default export */ __webpack_exports__["f"] = (ReservationFormWrapper);

/***/ }),

/***/ "/cYB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Ye+W");
/* harmony import */ var _env_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_env_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vBVF");
/* harmony import */ var https_proxy_agent_dist_agent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3E2n");
/* harmony import */ var https_proxy_agent_dist_agent__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(https_proxy_agent_dist_agent__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const postApi = {
  getAll: async () => {
    const prod = true;

    if (prod) {
      return await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        agent: new https_proxy_agent_dist_agent__WEBPACK_IMPORTED_MODULE_2___default.a('http://172.25.1.2:3129')
      }).then(res => {
        if (res.ok) {
          return res.json();
        }

        throw res;
      }).catch(handleError);
    }

    return await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      throw res;
    }).catch(handleError);
  },
  getOne: async id => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__[/* getCookie */ "a"])("token")}`
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
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__[/* getCookie */ "a"])("token")}`
    },
    body: JSON.stringify(post)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  update: async (post) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/${post.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__[/* getCookie */ "a"])("token")}`
    },
    body: JSON.stringify(post)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  delete: async (postId) => await fetch(`${_env_config__WEBPACK_IMPORTED_MODULE_0__["BACKEND_URL"]}/api/content/${postId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(_redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__[/* getCookie */ "a"])("token")}`
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

/* harmony default export */ __webpack_exports__["a"] = (postApi);

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

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("GhS2");


/***/ }),

/***/ "1exS":
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ }),

/***/ "27qp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "2yjL":
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "3E2n":
/***/ (function(module, exports) {

module.exports = require("https-proxy-agent/dist/agent");

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

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

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

/***/ "7Sp7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("EDUr");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["a"] = (Loader => __jsx(_loader_style__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx("svg", {
  className: "isoContentLoader",
  viewBox: "0 0 50 50"
}, __jsx("circle", {
  className: "isoContentLoaderCircle",
  cx: "25",
  cy: "25",
  r: "20",
  fill: "none",
  strokeWidth: "3.6"
}))));

/***/ }),

/***/ "7wCw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27qp");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default.a);

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

/***/ "AElg":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/CheckOutlined");

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

/***/ "GhS2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ CheckoutPaymentPage; });
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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./shared/UI/UI/Container/Container.js + 1 modules
var Container = __webpack_require__("iDsv");

// EXTERNAL MODULE: ./shared/UI/Box/Box.js + 1 modules
var Box = __webpack_require__("Wasw");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-tools"
var external_styled_tools_ = __webpack_require__("1exS");

// EXTERNAL MODULE: ./components/Guest/Property/Booking/BookingWidget.js + 3 modules
var BookingWidget = __webpack_require__("gNcs");

// EXTERNAL MODULE: ./context/BookingProvider.js
var BookingProvider = __webpack_require__("t9tb");

// EXTERNAL MODULE: external "react-paypal-button-v2"
var external_react_paypal_button_v2_ = __webpack_require__("eg6N");

// EXTERNAL MODULE: ./shared/components/index.js + 3 modules
var components = __webpack_require__("OKMn");

// EXTERNAL MODULE: ./env-config.js
var env_config = __webpack_require__("Ye+W");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__("lJcc");
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);

// EXTERNAL MODULE: ./shared/components/utility/loader.js
var loader = __webpack_require__("7Sp7");

// CONCATENATED MODULE: ./components/Guest/Checkout/CheckoutPayment.js


var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const CheckoutPaymentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "CheckoutPayment__CheckoutPaymentWrapper",
  componentId: "rqryvw-0"
})([".checkout-payment-block{padding:50px 0 100px;h3{color:", ";}span{font-size:16px;}}"], Object(external_styled_tools_["palette"])("primary", 0));

function CheckoutPayment(props) {
  const {
    0: isPaypalButtonLoading,
    1: setIsPaypalButtonLoading
  } = Object(external_react_["useState"])(true);
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(BookingProvider["a" /* BookingContext */]);
  const router = Object(router_["useRouter"])();

  const handlePaymentSuccess = (details, data) => {
    console.log("handlePaymentSuccess", details, data);
    addPaymentInfo();
  };

  const handlePaymentError = error => {
    console.log("handlePaymentError", error);
    Object(components["a" /* notification */])('warning', 'Sorry, we couldn\'t process your payment');
  };

  const addPaymentInfo = async () => {
    const bookingData = {
      bookerville_id: state.bookervilleId,
      checkin_date: external_moment_default()(state.checkinDate).format('YYYY-MM-DD'),
      checkout_date: external_moment_default()(state.checkoutDate).format('YYYY-MM-DD'),
      adults: state.adults,
      children: state.children === '' ? 0 : state.children,
      property_fee: state.propertyFee,
      cleaning_fee: state.cleaningFee,
      refundable_amount: state.refundableAmount,
      transaction_fee: state.transactionFee,
      tax: state.tax,
      total: state.total,
      guest: {
        first_name: state.guest.firstName,
        last_name: state.guest.lastName,
        email: state.guest.email,
        phone_number: state.guest.phoneNumber
      },
      billing: {
        country: state.billing.country,
        state: state.billing.state,
        city: state.billing.city,
        street: state.billing.street,
        zip_code: state.billing.zipCode
      }
    };

    try {
      const res = await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/booking/add_payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookingData)
      });
      const data = await res.json();

      if (res.status === 400) {
        Object(components["a" /* notification */])('warning', 'Bad request');
      }

      if (res.ok) {
        external_react_ga_default.a.event({
          category: 'ecommerce',
          action: 'purchase'
        });
        Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "11tx", 7)).then(x => x.default).then(ReactPixel => {
          console.log("initReactPixel", env_config["PIXEL_ID"]);
          ReactPixel.init(env_config["PIXEL_ID"]);
          ReactPixel.track('Purchase', {
            value: bookingData.total,
            currency: 'USD'
          });
        });
        dispatch({
          type: 'UPDATE_BOOKING_INFORMATION',
          payload: _objectSpread(_objectSpread({}, state), {}, {
            bookingId: data.booking_id
          })
        });
        router.push('/checkout-confirm');
      }
    } catch (e) {
      Object(components["a" /* notification */])('warning', 'Server error while handling booking information');
    }
  };

  return __jsx(CheckoutPaymentWrapper, null, __jsx(Box["a" /* default */], {
    as: "section",
    className: "main-background-2"
  }), __jsx(Box["a" /* default */], {
    as: "section",
    className: "checkout-payment-block"
  }, __jsx(Container["a" /* default */], null, __jsx(row_default.a, {
    gutter: 32
  }, __jsx(col_default.a, {
    lg: 14,
    sm: 24
  }, __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 30
    }
  }, __jsx("h3", null, "Payment Information"), __jsx("span", null, "Step 3 of 3")), isPaypalButtonLoading && __jsx(loader["a" /* default */], null), __jsx(external_react_paypal_button_v2_["PayPalButton"], {
    amount: state.total // disableCard
    ,
    style: {
      color: 'blue'
    },
    shippingPreference: "NO_SHIPPING",
    onButtonReady: () => {
      setIsPaypalButtonLoading(false);
    },
    onSuccess: (details, data) => {
      console.log('__TransactionCompletedBy__', details, data, details.payer.name.given_name);
      handlePaymentSuccess(details, data);
    },
    catchError: error => {
      handlePaymentError(error);
    },
    options: {
      clientId: 'AVGSCRet9DZ7Ct0uNXIXGlZDO4EIlbnmGty4_jUvnG5Wn0GPTYJudDiB1tqkM2srJGWNZPEE1ZKt4_71'
    } // Sandbox
    // options={{
    //     clientId: "AQod8JtRRk59F5HjcGOH7ZNymA7N6s2B1WhXH_g_UCBY40Y1LPSt0fxhdaR2rYmIQPNP2k7uZ5gL95Oe",
    //     currency: "USD"
    // }}

  }), __jsx("p", null, __jsx(link_default.a, {
    href: "/contact",
    target: "_blank"
  }, __jsx("span", {
    className: "underlined-link"
  }, "Contact us ")), "if you want more information about long-term (+30 days) reservations.")), __jsx(col_default.a, {
    lg: 10,
    sm: 24
  }, __jsx(BookingWidget["a" /* default */], {
    disabled: true
  }))))));
}

/* harmony default export */ var Checkout_CheckoutPayment = (CheckoutPayment);
// EXTERNAL MODULE: ./service/postApi.js
var postApi = __webpack_require__("/cYB");

// CONCATENATED MODULE: ./pages/checkout-payment.js

var checkout_payment_jsx = external_react_default.a.createElement;




function CheckoutPaymentPage(props) {
  const {
    posts
  } = props;
  return checkout_payment_jsx(external_react_default.a.Fragment, null, checkout_payment_jsx(head_default.a, null, checkout_payment_jsx("title", null, "Checkout Payment")), checkout_payment_jsx(GuestLayout["a" /* default */], null, checkout_payment_jsx(Checkout_CheckoutPayment, {
    posts: posts
  })));
}
async function getStaticProps() {
  let posts;

  try {
    posts = await postApi["a" /* default */].getAll();
  } catch (e) {
    console.log("fetchPostsError", e);
    posts = [];
  }

  return {
    props: {
      posts
    }
  };
}

/***/ }),

/***/ "Gss8":
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "L3BB":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/PlusOutlined");

/***/ }),

/***/ "MNix":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Gss8");
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__);


const createNotification = (type, message, description) => {
  antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default.a[type]({
    message,
    description
  });
};

/* harmony default export */ __webpack_exports__["a"] = (createNotification);

/***/ }),

/***/ "OKMn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification["a" /* default */]; });

// UNUSED EXPORTS: ColorChoser, EditableComponent

// EXTERNAL MODULE: ./shared/components/Notification.js
var Notification = __webpack_require__("MNix");

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./shared/components/uielements/popover.js
var popover = __webpack_require__("7wCw");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./shared/library/helpers/style_utils.js
var style_utils = __webpack_require__("p3F5");

// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./shared/components/ColorChooser.style.js



const ColorChooserDropdown = external_styled_components_default.a.div.withConfig({
  displayName: "ColorChooserstyle__ColorChooserDropdown",
  componentId: "yqgxfr-0"
})(["display:flex;flex-flow:row wrap;max-width:160px;.ant-btn{width:20px;height:20px;border:0;outline:0;padding:0;margin:", ";", ";&:empty{visibility:visible;}&:last-child{margin:0;}&:nth-child(n + 6){margin-top:15px;}&:nth-child(5n){margin-right:0;margin-left:0;}}"], props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(style_utils["a" /* borderRadius */])('3px'));
/* harmony default export */ var ColorChooser_style = (Object(rtl["a" /* default */])(ColorChooserDropdown));
// CONCATENATED MODULE: ./shared/components/ColorChoser.js

var __jsx = external_react_default.a.createElement;



/* harmony default export */ var ColorChoser = (function ({
  colors,
  seectedColor,
  changeColor
}) {
  const [visible, setVisibility] = external_react_default.a.useState(false);

  function hide() {
    setVisibility(false);
  }

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = () => __jsx(ColorChooser_style, {
    className: "isoColorOptions"
  }, colors.map((color, index) => {
    const onClick = () => {
      hide();
      changeColor(index);
    };

    const style = {
      background: color
    };
    return __jsx(button_default.a, {
      key: index,
      onClick: onClick,
      style: style
    });
  }));

  return __jsx(popover["a" /* default */], {
    content: content(),
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange
  }, __jsx(button_default.a, {
    style: {
      backgroundColor: colors[seectedColor]
    },
    className: "isoColorChooser"
  }));
});
// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/EditOutlined"
var EditOutlined_ = __webpack_require__("x0cy");
var EditOutlined_default = /*#__PURE__*/__webpack_require__.n(EditOutlined_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/CheckOutlined"
var CheckOutlined_ = __webpack_require__("AElg");
var CheckOutlined_default = /*#__PURE__*/__webpack_require__.n(CheckOutlined_);

// EXTERNAL MODULE: ./shared/components/uielements/input.js + 1 modules
var input = __webpack_require__("P1ll");

// CONCATENATED MODULE: ./shared/components/EditableComponent.js


var EditableComponent_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function EditableComponent(props) {
  const [state, setState] = external_react_default.a.useState({
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
  return EditableComponent_jsx("div", {
    className: "isoNoteContent"
  }, editable ? EditableComponent_jsx("div", {
    className: "isoNoteEditWrapper"
  }, EditableComponent_jsx(input["b" /* Textarea */], {
    rows: 3,
    value: value,
    onChange: handleChange,
    onPressEnter: check
  }), EditableComponent_jsx(CheckOutlined_default.a, {
    className: "isoNoteEditIcon",
    onClick: check
  })) : EditableComponent_jsx("p", {
    className: "isoNoteTextWrapper",
    onClick: edit
  }, value || ' ', EditableComponent_jsx(EditOutlined_default.a, {
    className: "isoNoteEditIcon"
  })));
}
// CONCATENATED MODULE: ./shared/components/index.js





/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "P1ll":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ InputSearch; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ Textarea; });

// UNUSED EXPORTS: InputGroup

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// EXTERNAL MODULE: ./shared/library/helpers/style_utils.js
var style_utils = __webpack_require__("p3F5");

// CONCATENATED MODULE: ./shared/components/uielements/styles/input.style.js




const InputWrapper = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "inputstyle__InputWrapper",
  componentId: "lmpumv-0"
})(["&.ant-input{padding:4px 10px;width:100%;height:35px;cursor:text;text-align:", ";font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&.ant-input-lg{height:42px;padding:6px 10px;}&.ant-input-sm{padding:1px 10px;height:30px;}&::-webkit-input-placeholder{text-align:", ";color:", ";}&:-moz-placeholder{text-align:", ";color:", ";}&::-moz-placeholder{text-align:", ";color:", ";}&:-ms-input-placeholder{text-align:", ";color:", ";}}"], props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('text', 1), Object(external_styled_theme_["palette"])('border', 0), Object(style_utils["a" /* borderRadius */])('4px'), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('grayscale', 0));

const InputGroupWrapper = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "inputstyle__InputGroupWrapper",
  componentId: "lmpumv-1"
})(["&.ant-input-group{margin-bottom:10px;.ant-select{.ant-select-selector{height:35px;}}.ant-input{height:35px;}.ant-select-auto-complete{margin-right:", ";}.ant-input{border:1px solid ", ";&:first-child{border-radius:", ";}}.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child),> .ant-input:not(:first-child):not(:last-child){padding:0 7px;border-left-width:", ";margin-right:", ";}.ant-input-group-addon{padding:4px 7px;font-size:12px;color:", ";text-align:center;background-color:", ";border:1px solid ", ";", ";&:first-child{border-right-width:", ";border-left-width:", ";border-radius:", ";}&:last-child{border-right-width:", ";border-left-width:", ";border-radius:", ";}.ant-select{.ant-select-selector{height:35px;background-color:inherit;margin:-1px;border:1px solid transparent;", ";}}}.ant-input-group-addon:not(:first-child):not(:last-child),.ant-input-group-wrap:not(:first-child):not(:last-child){border-left:0;border-right:0;}& > .ant-input:not(:first-child):not(:last-child){", ";}.ant-input:first-child:last-child{border-radius:4px;}&.ant-input-group-compact > *{border-right-width:", ";}&.ant-input-group-compact > .ant-select > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker .ant-input,&.ant-input-group-compact > .ant-select-auto-complete .ant-input,&.ant-input-group-compact > .ant-cascader-picker .ant-input,&.ant-input-group-compact > .ant-mention-wrapper .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker .ant-time-picker-input{border-right-width:", ";}&.ant-input-group-compact > *:first-child,&.ant-input-group-compact > .ant-select:first-child > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker:first-child .ant-input,&.ant-input-group-compact > .ant-select-auto-complete:first-child .ant-input,&.ant-input-group-compact > .ant-cascader-picker:first-child .ant-input,&.ant-input-group-compact > .ant-mention-wrapper:first-child .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker:first-child .ant-time-picker-input{border-radius:", ";border-left-width:1px ", ";}&.ant-input-group-compact > *:last-child,&.ant-input-group-compact > .ant-select:last-child > .ant-select-selection,&.ant-input-group-compact > .ant-calendar-picker:last-child .ant-input,&.ant-input-group-compact > .ant-select-auto-complete:last-child .ant-input,&.ant-input-group-compact > .ant-cascader-picker:last-child .ant-input,&.ant-input-group-compact > .ant-mention-wrapper:last-child .ant-mention-editor,&.ant-input-group-compact > .ant-time-picker:last-child .ant-time-picker-input{border-radius:", ";border-right-width:", ";}.ant-calendar-picker-clear,.ant-calendar-picker-icon{right:", ";left:", ";}}&.ant-input-group-lg{.ant-input,> .ant-input-group-addon{padding:6px 10px;height:35px;}}"], props => props['data-rtl'] === 'rtl' ? '-1px' : '0', Object(external_styled_theme_["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0', Object(external_styled_theme_["palette"])('text', 1), Object(external_styled_theme_["palette"])('grayscale', 4), Object(external_styled_theme_["palette"])('border', 0), Object(style_utils["c" /* transition */])(), props => props['data-rtl'] === 'rtl' ? '1px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '0' : '1px', props => props['data-rtl'] === 'rtl' ? '1px' : '0', props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', Object(style_utils["b" /* boxShadow */])(), ''
/* border-left: 0; */
, props => props['data-rtl'] === 'rtl' ? '1px ' : '0', props => props['data-rtl'] === 'rtl' ? '1px ' : '0', props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', ''
/* border-right-width: ${props =>
props['data-rtl'] === 'rtl' ? '1px' : '0'}; */
, props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', props => props['data-rtl'] === 'rtl' ? '0 ' : '1px', props => props['data-rtl'] === 'rtl' ? 'inherit' : '8px', props => props['data-rtl'] === 'rtl' ? '8px' : 'inherit');

const TextAreaWrapper = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "inputstyle__TextAreaWrapper",
  componentId: "lmpumv-2"
})(["&.ant-input{padding:4px 10px;width:100%;height:auto;cursor:text;font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}"], Object(external_styled_theme_["palette"])('text', 1), Object(external_styled_theme_["palette"])('border', 0), Object(style_utils["a" /* borderRadius */])('4px'), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0));

const InputSearchWrapper = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "inputstyle__InputSearchWrapper",
  componentId: "lmpumv-3"
})(["&.ant-input-affix-wrapper{background-color:#fff;background-image:none;border:1px solid ", ";padding:4px 10px;width:100%;height:35px;max-height:35px;", ";", ";.ant-input{height:auto}&:focus,&.ant-input-affix-wrapper-focused{border-color:", ";}&.ant-input-affix-wrapper-lg{height:42px;padding:6px 10px;}&.ant-input-affix-wrapper-sm{padding:1px 10px;height:30px;}&.ant-input-search:not(.ant-input-search-enter-button){padding-right:0;}.ant-input{cursor:text;font-size:13px;line-height:1.5;color:", ";&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}.ant-input-search-icon{color:", ";&:hover{color:", ";}}}"], Object(external_styled_theme_["palette"])('border', 0), Object(style_utils["a" /* borderRadius */])('4px'), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('text', 1), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('primary', 0));


// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./shared/components/uielements/input.js



const {
  Search,
  TextArea,
  Group
} = input_default.a;
const WDStyledInput = InputWrapper(input_default.a);
const StyledInput = Object(rtl["a" /* default */])(WDStyledInput);
const WDInputGroup = InputGroupWrapper(Group);
const InputGroup = Object(rtl["a" /* default */])(WDInputGroup);
const WDInputSearch = InputSearchWrapper(Search);
const InputSearch = Object(rtl["a" /* default */])(WDInputSearch);
const WDTextarea = TextAreaWrapper(TextArea);
const Textarea = Object(rtl["a" /* default */])(WDTextarea);
/* harmony default export */ var input = __webpack_exports__["c"] = (StyledInput);


/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "UMQD":
/***/ (function(module, exports) {

module.exports = require("react-image-gallery");

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

/***/ "XOqz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Card; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./shared/UI/UI/Card/Card.style.js

const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Cardstyle__Wrapper",
  componentId: "sc-75f9c0-0"
})(["padding:1rem;border-radius:3px;box-shadow:0 2px 20px rgba(0,0,0,0.16);"]);
const Header = external_styled_components_default.a.header.withConfig({
  displayName: "Cardstyle__Header",
  componentId: "sc-75f9c0-1"
})(["display:flex;justify-content:space-between;align-items:center;"]);
const Content = external_styled_components_default.a.div.withConfig({
  displayName: "Cardstyle__Content",
  componentId: "sc-75f9c0-2"
})([""]);
const Footer = external_styled_components_default.a.footer.withConfig({
  displayName: "Cardstyle__Footer",
  componentId: "sc-75f9c0-3"
})(["display:flex;justify-content:space-between;align-items:center;"]);
// CONCATENATED MODULE: ./shared/UI/UI/Card/Card.js
var __jsx = external_react_default.a.createElement;


function Card({
  title,
  className,
  header,
  content,
  children,
  footer
}) {
  return __jsx(Wrapper, {
    className: className
  }, __jsx(Header, null, header ? header : __jsx("h2", null, title)), __jsx(Content, null, content ? content : children), footer && __jsx(Footer, null, footer));
}

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
module.exports = {
  BACKEND_URL: prod ? 'https://stars-website-react-2.ue.r.appspot.com' : 'http://localhost:8000',
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

/***/ "eg6N":
/***/ (function(module, exports) {

module.exports = require("react-paypal-button-v2");

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

/***/ "gNcs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ BookingWidget; });

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

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

// EXTERNAL MODULE: external "styled-tools"
var external_styled_tools_ = __webpack_require__("1exS");

// CONCATENATED MODULE: ./components/Guest/Property/Booking/BookingCalculationForm.style.js



const ReservationFormWrapper = external_styled_components_default.a.form.withConfig({
  displayName: "BookingCalculationFormstyle__ReservationFormWrapper",
  componentId: "d3uagk-0"
})(["padding:0 30px 30px;@media (max-width:375px){padding:0 15px;}"]);
const FieldWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BookingCalculationFormstyle__FieldWrapper",
  componentId: "d3uagk-1"
})(["margin-bottom:30px;@media (max-width:375px){margin-bottom:25px;}label{font-size:15px;color:", ";text-transform:capitalize;margin-bottom:7px;display:block;}.date_picker{margin-bottom:0;> label{margin-bottom:0;width:100%;}.DateRangePicker{width:100%;input,.DateRangePickerInput{border:0;width:100%;height:54px;display:flex;padding:0 15px;font-size:15px;font-weight:400;border-radius:3px;align-items:center;justify-content:space-between;color:", ";background-color:", ";&::placeholder{font-size:15px;color:", ";}.DateInput{width:auto;.DateInput_fang{top:46px !important;}}.DateRangePickerInput_arrow{& + .DateInput{input{text-align:right;}}}}.DateRangePicker_picker{top:56px !important;.DayPicker{width:316px !important;.DayPicker_focusRegion{.DayPicker_transitionContainer{width:316px !important;.CalendarMonth_caption{font-size:16px;color:", ";}}}}}}}.view_with__popup{.popup_handler{button,button.ant-btn{border:0;width:100%;display:flex;padding:0 25px;font-size:15px;font-weight:400;min-height:54px;border-radius:3px;align-items:center;justify-content:space-between;color:", ";background-color:", ";&::after{display:none;}}}&.active{.popup_container{max-width:316px;padding:25px 22px;position:absolute;left:0;top:56px;z-index:2;box-shadow:0 2px 6px rgba(0,0,0,0.05),0 0 0 1px rgba(0,0,0,0.07);&::before{content:'';width:14px;height:14px;top:-8px;left:36px;position:absolute;border-radius:2px;transform:rotate(45deg);background-color:", ";border-top:1px solid ", ";border-left:1px solid ", ";}}}}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.2', '#F7F7F7'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'), Object(theme_get_["themeGet"])('border.3', '#E6E6E6'));
const RoomGuestWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BookingCalculationFormstyle__RoomGuestWrapper",
  componentId: "d3uagk-2"
})(["width:100%;strong{font-size:15px;font-weight:400;color:", ";}"], Object(theme_get_["themeGet"])('text.0', '#2C2C2C'));
const ItemWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BookingCalculationFormstyle__ItemWrapper",
  componentId: "d3uagk-3"
})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;&:last-child{margin-bottom:10px;}.quantity{height:30px;input{font-size:15px;}button.btn svg{width:18px;height:18px;}}"]);
const BillWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BookingCalculationFormstyle__BillWrapper",
  componentId: "d3uagk-4"
})(["ul{padding:0;li{font-size:16px;margin-bottom:16px;}&.cost-list{text-align:right;}}"]);
const FormActionArea = external_styled_components_default.a.div.withConfig({
  displayName: "BookingCalculationFormstyle__FormActionArea",
  componentId: "d3uagk-5"
})(["display:flex;justify-content:center;flex-direction:column;button.ant-btn-primary{max-width:200px;height:47px;color:#ffffff;font-size:15px;font-weight:700;border-color:", ";background-color:", ";transition:all 0.2s ease;&:hover,&:focus{outline:none;opacity:0.93;}}p{margin-top:20px;}"], Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('primary', 0));
const CardHeaderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "BookingCalculationFormstyle__CardHeaderWrapper",
  componentId: "d3uagk-6"
})(["width:100%;h3{color:", ";&.header-price{color:", ";}}.ant-row{position:relative;display:flex;.header-buttons-wrapper{width:100%;position:absolute;bottom:10px;display:flex;justify-content:center;button{display:flex;justify-content:center;align-items:center;font-size:12px;border-radius:10px;background-color:", ";&:hover,&:active{color:", ";background-color:#ffffff !important;}&:first-child{img{height:30px;}margin-right:16px;}}}}"], Object(external_styled_tools_["palette"])('primary', 0), Object(external_styled_tools_["palette"])('warning', 0), Object(external_styled_tools_["palette"])('warning', 0), Object(external_styled_tools_["palette"])('primary', 0));
/* harmony default export */ var BookingCalculationForm_style = (ReservationFormWrapper);
// EXTERNAL MODULE: ./shared/components/DatePicker/ReactDates.js + 1 modules
var ReactDates = __webpack_require__("8gEg");

// EXTERNAL MODULE: ./components/Common/ViewWithPopup/ViewWithPopup.js + 3 modules
var ViewWithPopup = __webpack_require__("EKex");

// EXTERNAL MODULE: ./components/Common/InputIncDec/InputIncDec.js + 1 modules
var InputIncDec = __webpack_require__("tC0J");

// EXTERNAL MODULE: ./context/BookingProvider.js
var BookingProvider = __webpack_require__("t9tb");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./shared/components/index.js + 3 modules
var components = __webpack_require__("OKMn");

// EXTERNAL MODULE: ./shared/components/utility/loader.js
var loader = __webpack_require__("7Sp7");

// CONCATENATED MODULE: ./components/Guest/Property/Booking/BookingCalculationForm.js



var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function BookingCalculationForm({
  property,
  disabled
}) {
  const {
    min_sleeps,
    price,
    checked_dates,
    pricing_items,
    tax_rate,
    cleaning_fee,
    refundable_amount,
    transactionfee_rate
  } = property;
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(BookingProvider["a" /* BookingContext */]);
  const {
    0: formState,
    1: setFormState
  } = Object(external_react_["useState"])({
    checkinDate: state.checkinDate ? external_moment_default()(state.checkinDate) : null,
    checkoutDate: state.checkoutDate ? external_moment_default()(state.checkoutDate) : null,
    adults: state.adults,
    children: state.children
  });
  const {
    0: billState,
    1: setBillState
  } = Object(external_react_["useState"])(null);
  const {
    0: isCalculating,
    1: setIsCalculating
  } = Object(external_react_["useState"])(null);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    console.log("___BookingCalculationForm: BookingContext___", state);

    if (disabled) {
      setBillState({
        nights: state.nights,
        propertyFee: state.propertyFee,
        tax: state.tax,
        transactionFee: state.transactionFee,
        cleaningFee: state.cleaningFee,
        refundableAmount: state.refundableAmount,
        total: state.total
      });
    }
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (formState.checkinDate !== null && formState.checkoutDate !== null && formState.adults !== 0) {
      setIsCalculating(true);
      const bill = calculateBookingCost(formState.checkinDate, formState.checkoutDate);
      setBillState(bill);
      dispatch({
        type: 'UPDATE_BOOKING_INFORMATION',
        payload: _objectSpread(_objectSpread(_objectSpread({}, state), formState), bill)
      });
      setTimeout(() => {
        setIsCalculating(false);
      }, 1000);
    } else {
      setBillState(null);
    }
  }, [formState]);

  const handleIncrement = type => {
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      [type]: parseInt(formState[type]) + 1
    }));
  };

  const handleDecrement = type => {
    if (formState[type] <= 0) {
      return false;
    }

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      [type]: parseInt(formState[type]) - 1
    }));
  };

  const handleIncDecOnChnage = (e, type) => {
    let currentValue = e.target.value;
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      [type]: parseInt(currentValue)
    }));
  };

  const updateSearchDataFunc = value => {
    console.log("updateSearchDataFunc", value);
    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      checkinDate: value.setStartDate,
      checkoutDate: value.setEndDate
    }));
  };

  const isDayBooked = day => {
    return checked_dates.some((range, index) => !!(day.isSameOrAfter(range.arrival_date, 'day') && day.isSameOrBefore(range.departure_date, 'day')));
  };

  const isDayBlocked = day => {
    if (external_moment_default()(day) < external_moment_default()().startOf('day')) {
      return true;
    }

    return isDayBooked(day) === true;
  };

  const renderDayContents = day => {
    // console.log("renderDayContents", day)
    let dayPrice = price;

    if (external_moment_default()(day) < external_moment_default()().startOf('day')) {
      return __jsx("div", {
        className: "past-date"
      }, __jsx("h6", null, day.format('D')));
    } else {
      if (isDayBooked(day) === true) {
        return __jsx("div", {
          className: "booked-date"
        }, __jsx("h6", null, day.format('D')));
      } else {
        pricing_items.map(item => {
          if (external_moment_default()(day) > external_moment_default()(new Date(item.start_date)) && external_moment_default()(day) < external_moment_default()(new Date(item.end_date))) {
            dayPrice = item.price;
          }
        });
        return __jsx("div", {
          className: "date"
        }, __jsx("h6", null, day.format('D')), __jsx("span", null, "$", price));
      }
    }
  };

  const getDayPrice = date => {
    let dayPrice = price;
    pricing_items.map(item => {
      if (external_moment_default()(date).diff(item.start_date) >= 0 && external_moment_default()(date).diff(item.end_date) <= 0) {
        dayPrice = item.price;
      }
    });
    return dayPrice;
  };

  const formatToFloat = value => {
    return parseFloat(value.toFixed(2));
  };

  const calculateBookingCost = (checkinDate, checkoutDate) => {
    console.log("calculateBookingCost");
    let nights,
        propertyFee = 0,
        tax,
        subTotal,
        transactionFee,
        total;
    nights = external_moment_default()(checkoutDate).diff(external_moment_default()(checkinDate), 'day');
    let currDate = external_moment_default()(checkinDate).startOf('day');
    let lastDate = external_moment_default()(checkoutDate).startOf('day');

    do {
      propertyFee += getDayPrice(currDate.clone().toDate());
      console.log("currentDate", currDate, getDayPrice(currDate.clone().toDate()));
    } while (currDate.add(1, 'days').diff(lastDate) <= 0);

    tax = formatToFloat(tax_rate * propertyFee / 100);
    subTotal = formatToFloat(propertyFee + tax + +cleaning_fee + refundable_amount);
    transactionFee = formatToFloat(transactionfee_rate * subTotal / 100);
    total = formatToFloat((1 + transactionfee_rate / 100) * subTotal);
    return {
      nights,
      propertyFee,
      tax,
      transactionFee,
      cleaningFee: cleaning_fee,
      refundableAmount: refundable_amount,
      total
    };
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formState.checkinDate === null || formState.checkoutDate === null) {
      Object(components["a" /* notification */])('warning', 'Please select dates');
      return;
    }

    if (formState.adults === 0) {
      Object(components["a" /* notification */])('warning', 'Please input number of guests');
      return;
    }

    dispatch({
      type: 'UPDATE_BOOKING_INFORMATION',
      payload: _objectSpread(_objectSpread(_objectSpread({}, state), billState), formState)
    });
    router.push({
      pathname: `/checkout-review`
    }, {
      pathname: `/checkout-review`
    }, {
      shallow: true
    });
  };

  return __jsx(BookingCalculationForm_style, {
    className: "form-container",
    onSubmit: handleSubmit
  }, __jsx(FieldWrapper, null, __jsx(ReactDates["a" /* default */], {
    disabled: disabled,
    startDate: formState.checkinDate,
    endDate: formState.checkoutDate,
    startDatePlaceholderText: "Check In",
    endDatePlaceholderText: "Check Out",
    startDateId: "startDateId-id",
    endDateId: "endDateId-id",
    showClearDates: true,
    small: true,
    minimumNights: min_sleeps,
    numberOfMonths: 1,
    updateSearchData: value => updateSearchDataFunc(value),
    isDayBlocked: day => isDayBlocked(day),
    renderDayContents: day => renderDayContents(day)
  })), __jsx(FieldWrapper, null, __jsx(ViewWithPopup["a" /* default */], {
    key: 200,
    noView: true,
    className: formState.adults || formState.children ? 'activated' : '',
    view: __jsx(button_default.a, {
      type: "default"
    }, __jsx("span", null, "Adults ", formState.adults > 0 && `: ${formState.adults}`), __jsx("span", null, "-"), __jsx("span", null, "Children", formState.children > 0 && `: ${formState.children}`)),
    popup: __jsx(RoomGuestWrapper, null, __jsx(ItemWrapper, null, __jsx("strong", null, "Adults"), __jsx(InputIncDec["a" /* default */], {
      id: "adults",
      increment: () => handleIncrement('adults'),
      decrement: () => handleDecrement('adults'),
      onChange: e => handleIncDecOnChnage(e, 'adults'),
      value: formState.adults
    })), __jsx(ItemWrapper, null, __jsx("strong", null, "Children"), __jsx(InputIncDec["a" /* default */], {
      id: "children",
      increment: () => handleIncrement('children'),
      decrement: () => handleDecrement('children'),
      onChange: e => handleIncDecOnChnage(e, 'children'),
      value: formState.children
    })))
  })), isCalculating && __jsx(loader["a" /* default */], null), billState && !isCalculating && __jsx(BillWrapper, null, __jsx(row_default.a, null, __jsx(col_default.a, {
    sm: 12
  }, console.log("___billState", billState), __jsx("ul", null, __jsx("li", null, billState === null || billState === void 0 ? void 0 : billState.nights, " nights"), __jsx("li", null, "Cleaning fee"), __jsx("li", null, "Security deposit"), __jsx("li", null, "Transaction fee (", property === null || property === void 0 ? void 0 : property.transactionfee_rate, "%)"), __jsx("li", null, "Tax (", property === null || property === void 0 ? void 0 : property.tax_rate, "%)"))), __jsx(col_default.a, {
    sm: 12
  }, __jsx("ul", {
    className: "cost-list"
  }, __jsx("li", null, "$", billState === null || billState === void 0 ? void 0 : billState.propertyFee), __jsx("li", null, "$", billState === null || billState === void 0 ? void 0 : billState.cleaningFee), __jsx("li", null, "$", billState === null || billState === void 0 ? void 0 : billState.refundableAmount), __jsx("li", null, "$", billState === null || billState === void 0 ? void 0 : billState.transactionFee), __jsx("li", null, "$", billState === null || billState === void 0 ? void 0 : billState.tax)))), __jsx("hr", null), __jsx(row_default.a, null, __jsx(col_default.a, {
    sm: 18
  }, __jsx("ul", null, __jsx("li", null, "Total"))), __jsx(col_default.a, {
    sm: 6
  }, __jsx("ul", {
    className: "cost-list"
  }, __jsx("li", null, "$", billState === null || billState === void 0 ? void 0 : billState.total))))), __jsx("p", null, "For booking assistance please ", __jsx(link_default.a, {
    href: "/contact"
  }, "contact us")));
}

;
/* harmony default export */ var Booking_BookingCalculationForm = (BookingCalculationForm);
// EXTERNAL MODULE: ./shared/UI/UI/Card/Card.js + 1 modules
var Card = __webpack_require__("XOqz");

// EXTERNAL MODULE: ./components/Guest/Property/ImageGallery/ImageGalleryModal.js + 2 modules
var ImageGalleryModal = __webpack_require__("vtjS");

// CONCATENATED MODULE: ./shared/assets/images/icon/icons_360.svg
/* harmony default export */ var icons_360 = ("/static/assets/dd670cff30df37b4ce2b11f14326f74d.svg");
// EXTERNAL MODULE: ./components/Guest/Property/Reservation/Reservation.style.js
var Reservation_style = __webpack_require__("/Mzf");

// EXTERNAL MODULE: ./env-config.js
var env_config = __webpack_require__("Ye+W");

// CONCATENATED MODULE: ./components/Guest/Property/Booking/BookingWidget.js



var BookingWidget_jsx = external_react_default.a.createElement;












const CardHeader = ({
  name,
  images,
  isModalShowing,
  setIsModalShowing
}) => {
  const headerCarousel = BookingWidget_jsx(external_react_default.a.Fragment, null, BookingWidget_jsx(row_default.a, null, images ? [0, 1, 2].map(index => {
    if (images[index] === undefined) {
      return BookingWidget_jsx(col_default.a, {
        key: index,
        lg: 8
      }, BookingWidget_jsx("div", {
        style: {
          backgroundImage: `url(${images[0].file})`,
          backgroundPosition: 'center center',
          backgroundSize: "cover",
          height: 100
        }
      }));
    }

    return BookingWidget_jsx(col_default.a, {
      key: index,
      lg: 8
    }, BookingWidget_jsx("div", {
      style: {
        backgroundImage: `url(${images[index].file})`,
        backgroundPosition: 'center center',
        backgroundSize: "cover",
        height: 100
      }
    }));
  }) : BookingWidget_jsx(loader["a" /* default */], null)));

  return BookingWidget_jsx(Reservation_style["a" /* CardHeaderWrapper */], null, headerCarousel, BookingWidget_jsx(row_default.a, null, BookingWidget_jsx("div", {
    className: "header-buttons-wrapper"
  }, BookingWidget_jsx(button_default.a, {
    type: "secondary",
    size: "large"
  }, BookingWidget_jsx("img", {
    src: icons_360,
    alt: "tour"
  })), BookingWidget_jsx(button_default.a, {
    type: "secondary",
    size: "large",
    onClick: () => setIsModalShowing(true)
  }, "Browse Photos"))), BookingWidget_jsx("h3", null, name), BookingWidget_jsx(ImageGalleryModal["a" /* default */], {
    isModalShowing: isModalShowing,
    setIsModalShowing: setIsModalShowing,
    images: images
  }));
};

function BookingWidget(props) {
  const {
    disabled
  } = props;
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(external_react_["useState"])(null);
  const {
    state,
    dispatch
  } = Object(external_react_["useContext"])(BookingProvider["a" /* BookingContext */]);
  const router = Object(router_["useRouter"])();
  Object(external_react_["useEffect"])(() => {
    if (state.propertySlug === null) {
      router.push('/listing');
      return;
    }

    getPropertyDetail(state.propertySlug);
  }, []);
  const {
    0: property,
    1: setProperty
  } = Object(external_react_["useState"])(null);
  const {
    0: isModalShowing,
    1: setIsModalShowing
  } = Object(external_react_["useState"])(false);

  const getPropertyDetail = async propertySlug => {
    setIsLoading(true);

    try {
      const res = await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/property/listing/${propertySlug}`);
      const property = await res.json();
      setProperty(property);
      dispatch({
        type: 'UPDATE_BOOKING_INFORMATION',
        payload: {
          bookervilleId: property.bookerville_id
        }
      });
      setIsLoading(false);
    } catch (e) {
      Object(components["a" /* notification */])('warning', 'Server error while fetching property detail');
    }
  };

  return BookingWidget_jsx(Card["a" /* default */], {
    className: "reservation_sidebar",
    header: !isLoading && property ? BookingWidget_jsx(CardHeader, {
      name: property.name,
      images: property.gallery_imgs,
      isModalShowing: isModalShowing,
      setIsModalShowing: setIsModalShowing
    }) : BookingWidget_jsx(loader["a" /* default */], null),
    footer: null
  }, !isLoading && property ? BookingWidget_jsx(Booking_BookingCalculationForm, {
    disabled: disabled,
    property: property
  }) : BookingWidget_jsx(loader["a" /* default */], null));
}

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
    console.log("useIsScrolled", window.pageYOffset, document.documentElement.scrollTop);
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

  const hasPageYOffset = () => {
    if (false) {}

    return false;
  };

  const isScrolled = hooks_useIsScrolled() || hasPageYOffset();
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

/***/ "p3F5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return borderRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return boxShadow; });
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

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "t9tb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return initBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return BookingProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    }
  }, children);
};

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

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "vBVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export checkExpirity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setCookie; });
/* unused harmony export removeCookie */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getCookie; });
/* unused harmony export auth */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return withAuthSync; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tlnx");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_4__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const checkExpirity = token => {
  if (!token) {
    return {
      error: 'not matched'
    };
  }

  try {
    const profile = jwt_decode__WEBPACK_IMPORTED_MODULE_4___default()(token);
    const expiredAt = profile.exp * 1000;

    if (expiredAt > new Date().getTime()) {
      return {
        profile,
        token,
        expiredAt: new Date(expiredAt)
      };
    } else {
      return {
        error: 'Token expired'
      };
    }
  } catch (e) {
    return {
      error: 'Server Error'
    };
  }
};
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
    return __jsx(WrappedComponent, props);
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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "vsU0":
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),

/***/ "vtjS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ PropertyGalleryModal; });

// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-image-gallery"
var external_react_image_gallery_ = __webpack_require__("UMQD");
var external_react_image_gallery_default = /*#__PURE__*/__webpack_require__.n(external_react_image_gallery_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@styled-system/theme-get"
var theme_get_ = __webpack_require__("/JeY");

// CONCATENATED MODULE: ./components/Guest/Property/ImageGallery/ImageGallery.style.js


const ImageGalleryWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "ImageGallerystyle__ImageGalleryWrapper",
  componentId: "sc-18uwfep-0"
})([".image-gallery-slides{border-radius:3px;box-shadow:0 2px 25px ", ";}.image-gallery-slide{.image-gallery-image{object-fit:cover;}}.image-gallery-icon{.image-gallery-svg{height:80px;width:auto;}&:hover{color:", ";}}.image-gallery-index{padding:0;font-size:15px;font-weight:700;position:static;margin:30px 0 16px 0;background-color:transparent;color:", ";&:after{content:'photos';display:inline-block;margin-left:0.25em;}}.image-gallery-thumbnails-wrapper{.image-gallery-thumbnails{padding:0;.image-gallery-thumbnail{width:150px;padding:0;margin:0 20px 0 0;border:0;border-radius:3px;overflow:hidden;position:relative;&.active{border:0;}&:last-child{margin-right:0;}&:before{content:'';display:block;position:absolute;width:100%;height:100%;top:0;left:0;background:", ";opacity:0.7;z-index:1;transform:scaleX(1);transform-origin:left center 0px;transition:transform 0.35s cubic-bezier(0.43,0.49,0.51,0.68) 0s;}&:hover,&.active{&:before{transform:scaleX(0);transform-origin:right center 0px;transition:transform 0.7s cubic-bezier(0.19,1,0.22,1) 0s;}}}}}"], Object(theme_get_["themeGet"])('boxShadow.1', 'rgba(0, 0, 0, 0.16)'), Object(theme_get_["themeGet"])('color.1', '#ffffff'), Object(theme_get_["themeGet"])('text.0', '#2C2C2C'), Object(theme_get_["themeGet"])('color.1', '#ffffff'));
/* harmony default export */ var ImageGallery_style = (ImageGalleryWrapper);
// CONCATENATED MODULE: ./components/Guest/Property/ImageGallery/ImageGallery.js
var __jsx = external_react_default.a.createElement;




const PropertyImageGallery = ({
  images
}) => {
  return __jsx(ImageGallery_style, null, __jsx(external_react_image_gallery_default.a, {
    items: images.map(image => ({
      original: image.file,
      thumbnail: image.file
    })),
    showPlayButton: false,
    showFullscreenButton: false,
    showIndex: true,
    lazyLoad: true,
    slideDuration: 550
  }));
};

/* harmony default export */ var ImageGallery = (PropertyImageGallery);
// CONCATENATED MODULE: ./components/Guest/Property/ImageGallery/ImageGalleryModal.js


var ImageGalleryModal_jsx = external_react_default.a.createElement;


function PropertyGalleryModal({
  isModalShowing,
  setIsModalShowing,
  images
}) {
  return ImageGalleryModal_jsx(modal_default.a, {
    visible: isModalShowing,
    onCancel: () => setIsModalShowing(false),
    footer: null,
    width: "100%",
    maskStyle: {
      backgroundColor: "rgba(255, 255, 255, 0.95)"
    },
    wrapClassName: "image_gallery_modal",
    closable: false
  }, ImageGalleryModal_jsx(external_react_default.a.Fragment, null, ImageGalleryModal_jsx(ImageGallery, {
    images: images
  }), ImageGalleryModal_jsx(button_default.a, {
    onClick: () => setIsModalShowing(false),
    className: "image_gallery_close"
  }, ImageGalleryModal_jsx("svg", {
    width: "16.004",
    height: "16",
    viewBox: "0 0 16.004 16"
  }, ImageGalleryModal_jsx("path", {
    id: "_ionicons_svg_ios-close_2_",
    d: "M170.4,168.55l5.716-5.716a1.339,1.339,0,1,0-1.894-1.894l-5.716,5.716-5.716-5.716a1.339,1.339,0,1,0-1.894,1.894l5.716,5.716-5.716,5.716a1.339,1.339,0,0,0,1.894,1.894l5.716-5.716,5.716,5.716a1.339,1.339,0,0,0,1.894-1.894Z",
    transform: "translate(-160.5 -160.55)",
    fill: "#909090"
  })))));
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "x0cy":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/EditOutlined");

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