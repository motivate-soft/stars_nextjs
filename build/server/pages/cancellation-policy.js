module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		20: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("4ryW");


/***/ }),

/***/ "1exS":
/***/ (function(module, exports) {

module.exports = require("styled-tools");

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

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4ryW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ CancellationPolicyPage; });
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./containers/Guest/GuestLayout/GuestLayout.js + 9 modules
var GuestLayout = __webpack_require__("mq74");

// EXTERNAL MODULE: ./env-config.js
var env_config = __webpack_require__("Ye+W");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./shared/UI/Box/Box.js + 1 modules
var Box = __webpack_require__("Wasw");

// EXTERNAL MODULE: ./shared/UI/UI/Container/Container.js + 1 modules
var Container = __webpack_require__("iDsv");

// EXTERNAL MODULE: ./components/Common/PostBlock/EditPost.js
var EditPost = __webpack_require__("eJju");

// CONCATENATED MODULE: ./components/Guest/Other/CancellationPolicy.js
var __jsx = external_react_default.a.createElement;






function CancellationPolicy({
  posts
}) {
  return __jsx(external_react_default.a.Fragment, null, __jsx(Box["a" /* default */], {
    as: "section",
    className: "main-background-2"
  }), __jsx(Box["a" /* default */], {
    as: "section",
    className: "posts-block"
  }, __jsx(Container["a" /* default */], null, __jsx("h2", null, "Refund Policy"), __jsx(EditPost["a" /* default */], {
    index: 80,
    posts: posts
  }), __jsx(EditPost["a" /* default */], {
    index: 81,
    posts: posts
  }), __jsx(EditPost["a" /* default */], {
    index: 82,
    posts: posts
  }), __jsx("p", null, "If you have any questions regarding the refund policy or payment policy, please send us an email at info@starsofboston.com or contact us from the", ' ', __jsx(link_default.a, {
    href: "/contact"
  }, "contact us"), " page."))));
}

/* harmony default export */ var Other_CancellationPolicy = (CancellationPolicy);
// CONCATENATED MODULE: ./pages/cancellation-policy.js

var cancellation_policy_jsx = external_react_default.a.createElement;




function CancellationPolicyPage(props) {
  const {
    posts
  } = props;
  return cancellation_policy_jsx(external_react_default.a.Fragment, null, cancellation_policy_jsx(head_default.a, null, cancellation_policy_jsx("title", null, "Cancellation")), cancellation_policy_jsx(GuestLayout["a" /* default */], null, cancellation_policy_jsx(Other_CancellationPolicy, {
    posts: posts
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

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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
  BACKEND_URL: 'http://stars-website-react-2.ue.r.appspot.com',
  // BACKEND_URL: 'http://stars-website-react-2.ue.r.appspot.com',
  // BACKEND_URL: prod ? 'http://stars-website-react-2.ue.r.appspot.com' : 'http://stars-website-react-2.ue.r.appspot.com',
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

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

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