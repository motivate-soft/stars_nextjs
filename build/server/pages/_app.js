module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "antd/lib/config-provider"
var config_provider_ = __webpack_require__("ztzw");
var config_provider_default = /*#__PURE__*/__webpack_require__.n(config_provider_);

// EXTERNAL MODULE: external "react-intl"
var external_react_intl_ = __webpack_require__("k004");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./shared/config/theme/theme.config.js + 3 modules
var theme_config = __webpack_require__("5tV1");

// EXTERNAL MODULE: external "antd/lib/locale-provider/en_US"
var en_US_ = __webpack_require__("A+dB");
var en_US_default = /*#__PURE__*/__webpack_require__.n(en_US_);

// EXTERNAL MODULE: ./shared/config/translation/locales/en_US.json
var en_US = __webpack_require__("LBvq");

// CONCATENATED MODULE: ./shared/config/translation/entries/en-US.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const EnLang = {
  messages: _objectSpread({}, en_US),
  antd: en_US_default.a,
  locale: 'en-US'
};
/* harmony default export */ var entries_en_US = (EnLang);
// EXTERNAL MODULE: ./shared/config/translation/locales/zh-Hans.json
var zh_Hans = __webpack_require__("rdmt");

// CONCATENATED MODULE: ./shared/config/translation/entries/zh-Hans-CN.js
function zh_Hans_CN_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function zh_Hans_CN_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { zh_Hans_CN_ownKeys(Object(source), true).forEach(function (key) { zh_Hans_CN_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { zh_Hans_CN_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function zh_Hans_CN_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ZhLan = {
  messages: zh_Hans_CN_objectSpread({}, zh_Hans),
  antd: null,
  locale: 'zh-Hans-CN'
};
/* harmony default export */ var zh_Hans_CN = (ZhLan);
// CONCATENATED MODULE: ./shared/config/translation/index.js


const AppLocale = {
  en: entries_en_US,
  zh: zh_Hans_CN
};
/* harmony default export */ var translation = (AppLocale);
// CONCATENATED MODULE: ./shared/library/hooks/useWindowSize.js


const useWindowSize = () => {
  const isClient = false;
  const getSize = external_react_default.a.useCallback(() => ({
    width: isClient ? window.innerWidth : undefined,
    height: isClient ? window.innerHeight : undefined
  }), [isClient]);
  const [size, setSize] = external_react_default.a.useState(getSize);
  external_react_default.a.useEffect(() => {
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

/* harmony default export */ var hooks_useWindowSize = (useWindowSize);
// EXTERNAL MODULE: ./shared/redux/app/actions.js
var actions = __webpack_require__("bVQA");

// CONCATENATED MODULE: ./containers/Admin/ThemeProvider.js

var __jsx = external_react_default.a.createElement;








const {
  toggleAll
} = actions["a" /* default */];
function AppProvider({
  children
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    locale
  } = Object(external_react_redux_["useSelector"])(state => state.LanguageSwitcher.language);
  const {
    themeName
  } = Object(external_react_redux_["useSelector"])(state => state.ThemeSwitcher.changeThemes);
  const currentAppLocale = translation[locale];
  const {
    width,
    height
  } = hooks_useWindowSize();
  external_react_default.a.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [dispatch]);
  return __jsx(config_provider_default.a, {
    locale: currentAppLocale.antd
  }, __jsx(external_react_intl_["IntlProvider"], {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages
  }, __jsx(external_styled_components_["ThemeProvider"], {
    theme: theme_config["a" /* default */][themeName]
  }, children)));
}
// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./redux/authentication/reducer.js
var reducer = __webpack_require__("gai2");

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__("eW3l");
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);

// CONCATENATED MODULE: ./shared/library/helpers/options.js
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
/* harmony default export */ var helpers_options = (options);
// EXTERNAL MODULE: ./shared/library/helpers/isServer.js
var isServer = __webpack_require__("TZFR");

// CONCATENATED MODULE: ./shared/library/helpers/url_sync.js



function getInitData() {
  if (!isServer["a" /* isServer */]) {
    const initData = external_qs_default.a.parse(window.location.search.slice(1));
    if (initData.toggle) initData.toggle.free_shipping = initData.toggle.free_shipping === 'true' ? true : undefined;
    return initData;
  }

  return false;
}
function setUrl(searchState) {
  if (!isServer["a" /* isServer */]) {
    const search = searchState ? `${window.location.pathname}?${external_qs_default.a.stringify(searchState)}` : '';
    window.history.pushState(searchState, null, search);
  }

  return;
}
function getDefaultPath() {
  const getParent = lastRoute => {
    const parent = [];
    if (!lastRoute) return parent;
    parent.push(lastRoute);
    helpers_options.forEach(option => {
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

  if (!isServer["a" /* isServer */] && window.location.pathname) {
    const routes = window.location.pathname.split('/');

    if (routes.length > 1) {
      const lastRoute = routes[routes.length - 1];
      return getParent(lastRoute);
    }
  }

  return [];
}
// CONCATENATED MODULE: ./shared/redux/app/reducer.js
function reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { reducer_ownKeys(Object(source), true).forEach(function (key) { reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const preKeys = getDefaultPath();
const initState = {
  collapsed: !isServer["a" /* isServer */] && window.innerWidth > 1220 ? false : true,
  view: !isServer["a" /* isServer */] && Object(actions["b" /* getView */])(window.innerWidth),
  height: !isServer["a" /* isServer */] && window.innerHeight,
  openDrawer: false,
  openKeys: preKeys,
  current: preKeys
};
function appReducer(state = initState, action) {
  switch (action.type) {
    case actions["a" /* default */].COLLPSE_CHANGE:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        collapsed: !state.collapsed
      });

    case actions["a" /* default */].COLLPSE_OPEN_DRAWER:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        openDrawer: !state.openDrawer
      });

    case actions["a" /* default */].TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
          collapsed: action.collapsed,
          view: action.view,
          height
        });
      }

      break;

    case actions["a" /* default */].CHANGE_OPEN_KEYS:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        openKeys: action.openKeys
      });

    case actions["a" /* default */].CHANGE_CURRENT:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        current: action.current
      });

    case actions["a" /* default */].CLEAR_MENU:
      return reducer_objectSpread(reducer_objectSpread({}, state), {}, {
        openKeys: [],
        current: []
      });

    default:
      return state;
  }

  return state;
}
// CONCATENATED MODULE: ./shared/redux/contacts/data.js
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
// CONCATENATED MODULE: ./shared/redux/contacts/actions.js


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
      avatar: contacts[new Date() % 10].avatar,
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
/* harmony default export */ var contacts_actions = (contactActions);
// CONCATENATED MODULE: ./shared/redux/contacts/reducer.js
function contacts_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function contacts_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { contacts_reducer_ownKeys(Object(source), true).forEach(function (key) { contacts_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { contacts_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function contacts_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const contacts = new fakeData(10).getAll();
const reducer_initState = {
  contacts,
  selectedId: contacts[0].id,
  editView: false
};
function contactReducer(state = reducer_initState, action) {
  switch (action.type) {
    case contacts_actions.CHANGE_CONTACT:
      return contacts_reducer_objectSpread(contacts_reducer_objectSpread({}, state), {}, {
        selectedId: action.id,
        editView: false
      });

    case contacts_actions.ADD_CONTACT:
      return contacts_reducer_objectSpread(contacts_reducer_objectSpread({}, state), {}, {
        contacts: action.contacts,
        selectedId: action.selectedId,
        editView: true
      });

    case contacts_actions.EDIT_CONTACT:
      return contacts_reducer_objectSpread(contacts_reducer_objectSpread({}, state), {}, {
        contacts: action.contacts
      });

    case contacts_actions.DELETE__CONTACT:
      return contacts_reducer_objectSpread(contacts_reducer_objectSpread({}, state), {}, {
        contacts: action.contacts,
        selectedId: action.selectedId
      });

    case contacts_actions.EDIT_VIEW:
      return contacts_reducer_objectSpread(contacts_reducer_objectSpread({}, state), {}, {
        editView: action.view
      });

    default:
      return state;
  }
}

// EXTERNAL MODULE: ./shared/redux/themeSwitcher/config.js
var config = __webpack_require__("zKje");

// EXTERNAL MODULE: ./shared/redux/themeSwitcher/actions.js
var themeSwitcher_actions = __webpack_require__("UZv4");

// CONCATENATED MODULE: ./shared/redux/themeSwitcher/reducer.js
function themeSwitcher_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function themeSwitcher_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { themeSwitcher_reducer_ownKeys(Object(source), true).forEach(function (key) { themeSwitcher_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { themeSwitcher_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function themeSwitcher_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const themeSwitcher_reducer_initState = {
  isActivated: false,
  changeThemes: Object(config["b" /* getCurrentTheme */])('changeThemes', config["a" /* default */].changeThemes.defaultTheme || 'themedefault'),
  topbarTheme: Object(config["b" /* getCurrentTheme */])('topbarTheme', config["a" /* default */].topbarTheme.defaultTheme || 'themedefault'),
  sidebarTheme: Object(config["b" /* getCurrentTheme */])('sidebarTheme', config["a" /* default */].sidebarTheme.defaultTheme || 'themedefault'),
  layoutTheme: Object(config["b" /* getCurrentTheme */])('layoutTheme', config["a" /* default */].layoutTheme.defaultTheme || 'themedefault')
};
/* harmony default export */ var themeSwitcher_reducer = (function (state = themeSwitcher_reducer_initState, action) {
  switch (action.type) {
    case themeSwitcher_actions["a" /* default */].SWITCH_ACTIVATION:
      return themeSwitcher_reducer_objectSpread(themeSwitcher_reducer_objectSpread({}, state), {}, {
        isActivated: !state.isActivated
      });

    case themeSwitcher_actions["a" /* default */].CHANGE_THEME:
      return themeSwitcher_reducer_objectSpread(themeSwitcher_reducer_objectSpread({}, state), {}, {
        [action.attribute]: action.theme
      });

    default:
      return state;
  }
});
// EXTERNAL MODULE: ./shared/redux/languageSwitcher/config.js
var languageSwitcher_config = __webpack_require__("rR3O");

// EXTERNAL MODULE: ./shared/redux/languageSwitcher/actions.js
var languageSwitcher_actions = __webpack_require__("iYBC");

// CONCATENATED MODULE: ./shared/redux/languageSwitcher/reducer.js
function languageSwitcher_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function languageSwitcher_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { languageSwitcher_reducer_ownKeys(Object(source), true).forEach(function (key) { languageSwitcher_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { languageSwitcher_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function languageSwitcher_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const languageSwitcher_reducer_initState = {
  isActivated: false,
  language: Object(languageSwitcher_config["b" /* getCurrentLanguage */])(languageSwitcher_config["a" /* default */].defaultLanguage || 'english')
};
/* harmony default export */ var languageSwitcher_reducer = (function (state = languageSwitcher_reducer_initState, action) {
  switch (action.type) {
    case languageSwitcher_actions["a" /* default */].ACTIVATE_LANG_MODAL:
      return languageSwitcher_reducer_objectSpread(languageSwitcher_reducer_objectSpread({}, state), {}, {
        isActivated: !state.isActivated
      });

    case languageSwitcher_actions["a" /* default */].CHANGE_LANGUAGE:
      return languageSwitcher_reducer_objectSpread(languageSwitcher_reducer_objectSpread({}, state), {}, {
        language: action.language
      });

    default:
      return state;
  }
});
// CONCATENATED MODULE: ./shared/redux/modal/actions.js
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
/* harmony default export */ var modal_actions = (modalActions);
// CONCATENATED MODULE: ./shared/redux/modal/reducer.js

const reducer_initialState = {
  modalVisibility: false,
  modalType: '',
  modalProps: {}
};
function modalReducer(state = reducer_initialState, action) {
  switch (action.type) {
    case modal_actions.SHOW_MODAL:
      return {
        modalVisibility: true,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps
      };

    case modal_actions.HIDE_MODAL:
      return reducer_initialState;

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./shared/redux/quiz/actions.js
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
/* harmony default export */ var quiz_actions = (quizActions);
// EXTERNAL MODULE: external "immutable"
var external_immutable_ = __webpack_require__("nuGg");

// CONCATENATED MODULE: ./shared/library/helpers/utility.js

function clearToken() {
  localStorage.removeItem('id_token');
}
function getToken() {
  try {
    const idToken = localStorage.getItem('id_token');
    return new external_immutable_["Map"]({
      idToken
    });
  } catch (err) {
    clearToken();
    return new external_immutable_["Map"]();
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
// CONCATENATED MODULE: ./shared/redux/quiz/reducer.js
function quiz_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function quiz_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { quiz_reducer_ownKeys(Object(source), true).forEach(function (key) { quiz_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { quiz_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function quiz_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const quiz_reducer_initialState = {
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
function questionReducer(state = quiz_reducer_initialState, action) {
  switch (action.type) {
    case quiz_actions.START_QUIZ:
      return quiz_reducer_objectSpread(quiz_reducer_objectSpread({}, state), {}, {
        gettingStarted: true
      });

    case quiz_actions.SET_QUIZ_DATA:
      return quiz_reducer_objectSpread(quiz_reducer_objectSpread({}, state), {}, {
        quizes: action.payload,
        gettingStarted: false
      });

    case quiz_actions.SET_QUESTION_DATA:
      return quiz_reducer_objectSpread(quiz_reducer_objectSpread({}, state), {}, {
        questions: action.payload,
        total: action.payload.total
      });

    case quiz_actions.SET_QUESTION_ANSWER:
      const {
        questions,
        activeQuestion,
        correct,
        wrong
      } = state;
      const currentQuizz = questions.data[activeQuestion];
      let rightAnswer = false;

      if (Array.isArray(action.payload)) {
        rightAnswer = arrayEqual(action.payload, currentQuizz['answers']);
      } else {
        rightAnswer = currentQuizz['answers'] === action.payload ? true : false;
      }

      let correctAnswer = rightAnswer ? correct + 1 : correct;
      let wrongAnswer = !rightAnswer ? wrong + 1 : wrong;
      return quiz_reducer_objectSpread(quiz_reducer_objectSpread({}, state), {}, {
        correct: correctAnswer,
        wrong: wrongAnswer,
        submitted: true,
        answers: rightAnswer,
        questions: {
          data: [...questions.data.slice(0, activeQuestion), quiz_reducer_objectSpread(quiz_reducer_objectSpread({}, questions.data[activeQuestion]), {}, {
            showAnswer: true
          }), ...questions.data.slice(activeQuestion + 1)]
        }
      });

    case quiz_actions.NEXT_QUESTION:
      return quiz_reducer_objectSpread(quiz_reducer_objectSpread({}, state), {}, {
        activeQuestion: state.activeQuestion + 1,
        submitted: false,
        answers: false
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./shared/redux/profile/actions.js
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
/* harmony default export */ var profile_actions = (profileActions);
// CONCATENATED MODULE: ./shared/redux/profile/reducer.js
function profile_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function profile_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profile_reducer_ownKeys(Object(source), true).forEach(function (key) { profile_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profile_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profile_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const INITIAL_DATA = {
  data: null,
  loading: true,
  error: null
};
function profileReducer(state = INITIAL_DATA, action) {
  switch (action.type) {
    case profile_actions.FETCH_PROFILE_DATA_SUCCESS:
      return profile_reducer_objectSpread(profile_reducer_objectSpread({}, state), {}, {
        data: action.payload,
        loading: false,
        error: null
      });

    case profile_actions.FETCH_PROFILE_DATA_FAILURE:
      return profile_reducer_objectSpread(profile_reducer_objectSpread({}, state), {}, {
        loading: false,
        error: action.payload
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./redux/users/actions.js
var users_actions = __webpack_require__("JAAA");

// CONCATENATED MODULE: ./redux/users/reducer.js
function users_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function users_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { users_reducer_ownKeys(Object(source), true).forEach(function (key) { users_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { users_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function users_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const users_reducer_initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function propertiesReducer(state = users_reducer_initState, action) {
  switch (action.type) {
    // List
    case users_actions["a" /* default */].GET_ALL_USERS_REQUEST:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case users_actions["a" /* default */].GET_ALL_USERS_SUCCESS:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case users_actions["a" /* default */].GET_ALL_USERS_FAILURE:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case users_actions["a" /* default */].GET_USER_REQUEST:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case users_actions["a" /* default */].GET_USER_SUCCESS:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        selectedItem: action.item,
        loading: false
      });

    case users_actions["a" /* default */].GET_USER_FAILURE:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        selectedItem: null,
        error: action.error,
        loading: false
      });
    // Add

    case users_actions["a" /* default */].ADD_USER_REQUEST:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case users_actions["a" /* default */].ADD_USER_SUCCESS:
      state.items.push(action.item);
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        items: state.items,
        selectedItem: action.item,
        loading: false
      });

    case users_actions["a" /* default */].ADD_USER_FAILURE:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case users_actions["a" /* default */].UPDATE_USER_REQUEST:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case users_actions["a" /* default */].UPDATE_USER_SUCCESS:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
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

    case users_actions["a" /* default */].UPDATE_USER_FAILURE:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case users_actions["a" /* default */].DELETE_USER_REQUEST:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case users_actions["a" /* default */].DELETE_USER_SUCCESS:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.userId),
        loading: false
      });

    case users_actions["a" /* default */].DELETE_USER_FAILURE:
      return users_reducer_objectSpread(users_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./redux/properties/reducer.js
var properties_reducer = __webpack_require__("UJ2i");

// EXTERNAL MODULE: ./redux/categories/actions.js
var categories_actions = __webpack_require__("G3ex");

// CONCATENATED MODULE: ./redux/categories/reducer.js
function categories_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function categories_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { categories_reducer_ownKeys(Object(source), true).forEach(function (key) { categories_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { categories_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function categories_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const categories_reducer_initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function reducer_propertiesReducer(state = categories_reducer_initState, action) {
  switch (action.type) {
    // List
    case categories_actions["a" /* default */].GET_ALL_CATEGORIES_REQUEST:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        items: [],
        loading: true
      });

    case categories_actions["a" /* default */].GET_ALL_CATEGORIES_SUCCESS:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case categories_actions["a" /* default */].GET_ALL_CATEGORIES_FAILURE:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case categories_actions["a" /* default */].GET_CATEGORY_REQUEST:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case categories_actions["a" /* default */].GET_CATEGORY_SUCCESS:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        selectedItem: action.item,
        loading: false
      });

    case categories_actions["a" /* default */].GET_CATEGORY_FAILURE:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        selectedItem: null,
        error: action.error,
        loading: false
      });
    // Add

    case categories_actions["a" /* default */].ADD_CATEGORY_REQUEST:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case categories_actions["a" /* default */].ADD_CATEGORY_SUCCESS:
      state.items.push(action.item);
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        items: state.items,
        selectedItem: action.item,
        loading: false
      });

    case categories_actions["a" /* default */].ADD_CATEGORY_FAILURE:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case categories_actions["a" /* default */].UPDATE_CATEGORY_REQUEST:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case categories_actions["a" /* default */].UPDATE_CATEGORY_SUCCESS:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        // items: state.items.map((item) => {
        //   if (item.id === action.item.id) {
        //     item = action.item;
        //   }
        // }),
        selectedItem: action.item,
        loading: false
      });

    case categories_actions["a" /* default */].UPDATE_CATEGORY_FAILURE:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case categories_actions["a" /* default */].DELETE_CATEGORY_REQUEST:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case categories_actions["a" /* default */].DELETE_CATEGORY_SUCCESS:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.categoryId),
        loading: false
      });

    case categories_actions["a" /* default */].DELETE_CATEGORY_FAILURE:
      return categories_reducer_objectSpread(categories_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./redux/amenities/actions.js
var amenities_actions = __webpack_require__("ztWH");

// CONCATENATED MODULE: ./redux/amenities/reducer.js
function amenities_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function amenities_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { amenities_reducer_ownKeys(Object(source), true).forEach(function (key) { amenities_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { amenities_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function amenities_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const amenities_reducer_initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function amenities_reducer_propertiesReducer(state = amenities_reducer_initState, action) {
  switch (action.type) {
    // List
    case amenities_actions["a" /* default */].GET_ALL_AMENITIES_REQUEST:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        items: [],
        loading: true
      });

    case amenities_actions["a" /* default */].GET_ALL_AMENITIES_SUCCESS:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case amenities_actions["a" /* default */].GET_ALL_AMENITIES_FAILURE:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case amenities_actions["a" /* default */].GET_AMENITY_REQUEST:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case amenities_actions["a" /* default */].GET_AMENITY_SUCCESS:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        items: items,
        selectedItem: action.item,
        loading: false
      });

    case amenities_actions["a" /* default */].GET_AMENITY_FAILURE:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        selectedItem: null,
        error: action.error,
        loading: false
      });
    // Add

    case amenities_actions["a" /* default */].ADD_AMENITY_REQUEST:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case amenities_actions["a" /* default */].ADD_AMENITY_SUCCESS:
      const {
        items
      } = state;
      items.push(action.item);
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        items: items,
        selectedItem: action.item,
        loading: false
      });

    case amenities_actions["a" /* default */].ADD_AMENITY_FAILURE:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case amenities_actions["a" /* default */].UPDATE_AMENITY_REQUEST:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case amenities_actions["a" /* default */].UPDATE_AMENITY_SUCCESS:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        // items: state.items.map((item) => {
        //   if (item.id === action.item.id) {
        //     item = action.item;
        //   }
        // }),
        selectedItem: action.item,
        loading: false
      });

    case amenities_actions["a" /* default */].UPDATE_AMENITY_FAILURE:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case amenities_actions["a" /* default */].DELETE_AMENITY_REQUEST:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case amenities_actions["a" /* default */].DELETE_AMENITY_SUCCESS:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.amenityId),
        loading: false
      });

    case amenities_actions["a" /* default */].DELETE_AMENITY_FAILURE:
      return amenities_reducer_objectSpread(amenities_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./redux/posts/actions.js
var posts_actions = __webpack_require__("o6Kp");

// CONCATENATED MODULE: ./redux/posts/reducer.js
function posts_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function posts_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { posts_reducer_ownKeys(Object(source), true).forEach(function (key) { posts_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { posts_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function posts_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const posts_reducer_initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function posts_reducer_propertiesReducer(state = posts_reducer_initState, action) {
  switch (action.type) {
    // List
    case posts_actions["a" /* default */].GET_ALL_POSTS_REQUEST:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        items: [],
        loading: true
      });

    case posts_actions["a" /* default */].GET_ALL_POSTS_SUCCESS:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case posts_actions["a" /* default */].GET_ALL_POSTS_FAILURE:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case posts_actions["a" /* default */].GET_POST_REQUEST:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case posts_actions["a" /* default */].GET_POST_SUCCESS:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        selectedItem: action.item,
        loading: false
      });

    case posts_actions["a" /* default */].GET_POST_FAILURE:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        selectedItem: null,
        error: action.error,
        loading: false
      });
    // Add

    case posts_actions["a" /* default */].ADD_POST_REQUEST:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case posts_actions["a" /* default */].ADD_POST_SUCCESS:
      state.items.push(action.item);
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        items: items,
        selectedItem: action.item,
        loading: false
      });

    case posts_actions["a" /* default */].ADD_POST_FAILURE:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case posts_actions["a" /* default */].UPDATE_POST_REQUEST:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case posts_actions["a" /* default */].UPDATE_POST_SUCCESS:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        // items: state.items.map((item) => {
        //   if (item.id === action.item.id) {
        //     item = action.item;
        //   }
        // }),
        selectedItem: action.item,
        loading: false
      });

    case posts_actions["a" /* default */].UPDATE_POST_FAILURE:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case posts_actions["a" /* default */].DELETE_POST_REQUEST:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case posts_actions["a" /* default */].DELETE_POST_SUCCESS:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.postId),
        loading: false
      });

    case posts_actions["a" /* default */].DELETE_POST_FAILURE:
      return posts_reducer_objectSpread(posts_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}
// EXTERNAL MODULE: ./redux/blogs/actions.js
var blogs_actions = __webpack_require__("X3Th");

// CONCATENATED MODULE: ./redux/blogs/reducer.js
function blogs_reducer_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function blogs_reducer_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { blogs_reducer_ownKeys(Object(source), true).forEach(function (key) { blogs_reducer_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { blogs_reducer_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function blogs_reducer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const blogs_reducer_initState = {
  items: [],
  selectedItem: "",
  error: "",
  loading: false
};
function blogs_reducer_propertiesReducer(state = blogs_reducer_initState, action) {
  switch (action.type) {
    // List
    case blogs_actions["a" /* default */].GET_ALL_BLOGS_REQUEST:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        items: [],
        loading: true
      });

    case blogs_actions["a" /* default */].GET_ALL_BLOGS_SUCCESS:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case blogs_actions["a" /* default */].GET_ALL_BLOGS_FAILURE:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case blogs_actions["a" /* default */].GET_BLOG_REQUEST:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case blogs_actions["a" /* default */].GET_BLOG_SUCCESS:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        items: items,
        selectedItem: action.item,
        loading: false
      });

    case blogs_actions["a" /* default */].GET_BLOG_FAILURE:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        selectedItem: null,
        error: action.error,
        loading: false
      });
    // Add

    case blogs_actions["a" /* default */].ADD_BLOG_REQUEST:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case blogs_actions["a" /* default */].ADD_BLOG_SUCCESS:
      state.items.push(action.item);
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        items: items,
        selectedItem: action.item,
        loading: false
      });

    case blogs_actions["a" /* default */].ADD_BLOG_FAILURE:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case blogs_actions["a" /* default */].UPDATE_BLOG_REQUEST:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case blogs_actions["a" /* default */].UPDATE_BLOG_SUCCESS:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        // items: state.items.map((item) => {
        //   if (item.id === action.item.id) {
        //     item = action.item;
        //   }
        // }),
        selectedItem: action.item,
        loading: false
      });

    case blogs_actions["a" /* default */].UPDATE_BLOG_FAILURE:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case blogs_actions["a" /* default */].DELETE_BLOG_REQUEST:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        loading: true
      });

    case blogs_actions["a" /* default */].DELETE_BLOG_SUCCESS:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.blogId),
        loading: false
      });

    case blogs_actions["a" /* default */].DELETE_BLOG_FAILURE:
      return blogs_reducer_objectSpread(blogs_reducer_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}
// CONCATENATED MODULE: ./redux/root-reducer.js















/* harmony default export */ var root_reducer = (Object(external_redux_["combineReducers"])({
  Auth: reducer["a" /* default */],
  App: appReducer,
  ThemeSwitcher: themeSwitcher_reducer,
  LanguageSwitcher: languageSwitcher_reducer,
  Users: propertiesReducer,
  Properties: properties_reducer["a" /* default */],
  Amenities: amenities_reducer_propertiesReducer,
  Categories: reducer_propertiesReducer,
  Posts: posts_reducer_propertiesReducer,
  Contacts: contactReducer,
  modal: modalReducer,
  quiz: questionReducer,
  profile: profileReducer,
  Blogs: blogs_reducer_propertiesReducer
}));
// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// EXTERNAL MODULE: ./redux/authentication/auth.utils.js
var auth_utils = __webpack_require__("vBVF");

// EXTERNAL MODULE: ./shared/components/index.js + 3 modules
var components = __webpack_require__("OKMn");

// CONCATENATED MODULE: ./shared/config/jwt.config.js
/* harmony default export */ var jwt_config = ({
  enabled: true,
  fetchUrl: "http://localhost:8000/api/rest-auth/token/obtain/",
  secretKey: "x=y#mma+9+3cixlanut$c3wnbjc)#^6qvg&jz)8p0^e3ybg&80"
});
// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__("tlnx");
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// CONCATENATED MODULE: ./redux/authentication/jwtAuthentication.js
function jwtAuthentication_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function jwtAuthentication_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { jwtAuthentication_ownKeys(Object(source), true).forEach(function (key) { jwtAuthentication_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { jwtAuthentication_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function jwtAuthentication_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



let resStatus = 0;

class jwtAuthentication_JwtAuth {
  constructor() {
    jwtAuthentication_defineProperty(this, "login", async userInfo => {
      return await fetch(jwt_config.fetchUrl, {
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

        error = jwtAuthentication_objectSpread(jwtAuthentication_objectSpread({}, error), {}, {
          status: res.status,
          statusText: res.statusText,
          message: res.detail || 'Error'
        });
        throw error;
      });
    });
  }

}

/* harmony default export */ var jwtAuthentication = (new jwtAuthentication_JwtAuth());
// EXTERNAL MODULE: ./redux/authentication/actions.js
var authentication_actions = __webpack_require__("8XiI");

// CONCATENATED MODULE: ./redux/authentication/sagas.js






function* jwtLoginRequest() {
  yield Object(effects_["takeLatest"])(authentication_actions["a" /* default */].JWT_LOGIN_REQUEST_START, function* ({
    payload: {
      userInfo,
      history
    }
  }) {
    try {
      const res = yield Object(effects_["call"])(jwtAuthentication.login, userInfo);
      let token, profile;

      if (res.access) {
        token = res.access;
        profile = external_jwt_decode_default()(res.access);
        Object(components["a" /* notification */])('success', 'login success');
        yield Object(effects_["put"])({
          type: authentication_actions["a" /* default */].LOGIN_REQUEST_SUCCESS,
          token,
          profile
        });
      } else {
        Object(components["a" /* notification */])('warning', 'Response type is invalid');
        yield Object(effects_["put"])(authentication_actions["a" /* default */].loginRequestFailure("Invalid server response"));
      }
    } catch (error) {
      Object(components["a" /* notification */])('error', error.message);
      yield Object(effects_["put"])(authentication_actions["a" /* default */].loginRequestFailure(error.message));
    }
  });
}

function* logoutRequest() {
  try {
    yield Object(effects_["call"])(auth_utils["b" /* logout */]);
    yield Object(effects_["put"])(authentication_actions["a" /* default */].logoutRequestSuccess());
  } catch (error) {
    yield Object(effects_["put"])(authentication_actions["a" /* default */].logoutRequestFailure(error));
  }
}

function* loginSuccess() {
  yield Object(effects_["takeLatest"])(authentication_actions["a" /* default */].LOGIN_REQUEST_SUCCESS, function* (payload) {
    Object(auth_utils["c" /* setCookie */])('login_saga', payload.token);
    yield Object(auth_utils["c" /* setCookie */])('token', payload.token);
  });
}
function* loginError() {
  yield Object(effects_["takeLatest"])(authentication_actions["a" /* default */].LOGOUT_REQUEST_FAILURE, function* (payload) {
    console.log("loginError", payload);
  });
}
function* onLogout() {
  yield Object(effects_["takeLatest"])(authentication_actions["a" /* default */].LOGOUT_REQUEST_START, logoutRequest);
}
function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(jwtLoginRequest), Object(effects_["call"])(loginSuccess), Object(effects_["call"])(onLogout)]);
}
// EXTERNAL MODULE: ./env-config.js
var env_config = __webpack_require__("Ye+W");

// CONCATENATED MODULE: ./service/userApi.js
function userApi_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function userApi_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { userApi_ownKeys(Object(source), true).forEach(function (key) { userApi_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { userApi_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function userApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const userApi = {
  getAll: async () => await fetch(`${env_config["BACKEND_URL"]}/api/users/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  getOne: async id => await fetch(`${env_config["BACKEND_URL"]}/api/users/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  add: async (user) => await fetch(`${env_config["BACKEND_URL"]}/api/users/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(user)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  update: async (user) => await fetch(`${env_config["BACKEND_URL"]}/api/users/${user.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(user)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(handleError),
  delete: async (userId) => await fetch(`${env_config["BACKEND_URL"]}/api/users/${userId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
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

  error = userApi_objectSpread(userApi_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ var service_userApi = (userApi);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./redux/users/saga.js





function* getAllUsers() {
  yield Object(effects_["takeLatest"])(users_actions["a" /* default */].GET_ALL_USERS_REQUEST, function* () {
    try {
      const res = yield Object(effects_["call"])(service_userApi.getAll);
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].GET_ALL_USERS_SUCCESS,
        items: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].GET_ALL_USERS_FAILURE,
        error: error.message
      });
    }
  });
}
function* getUser() {
  yield Object(effects_["takeEvery"])(users_actions["a" /* default */].GET_USER_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_userApi.getOne, payload.userId);
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].GET_USER_SUCCESS,
        item: res
      });
    } catch (e) {
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].GET_USER_FAILURE,
        error: error.message
      });
    }
  });
}
function* addUser() {
  yield Object(effects_["takeEvery"])(users_actions["a" /* default */].ADD_USER_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_userApi.add, payload.user);
      Object(components["a" /* notification */])('success', 'New user created successfully!');
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].ADD_USER_REQUEST,
        item: res
      });
    } catch (e) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].ADD_USER_FAILURE,
        error: error.message
      });
    }
  });
}
function* updateUser() {
  yield Object(effects_["takeEvery"])(users_actions["a" /* default */].UPDATE_USER_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_userApi.update, payload.user);
      Object(components["a" /* notification */])('success', 'User has been updated successfully!');
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].UPDATE_USER_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].UPDATE_USER_FAILURE,
        error: error.message
      });
    }
  });
}
function* deleteUser() {
  yield Object(effects_["takeEvery"])(users_actions["a" /* default */].DELETE_USER_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_userApi.delete, payload.userId);
      Object(components["a" /* notification */])('success', 'User has been deleted successfully!');
      router_["Router"].push('/admin/user');
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].DELETE_USER_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: users_actions["a" /* default */].UPDATE_USER_FAILURE,
        error: error.message
      });
    }
  });
}
function* saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(getAllUsers), Object(effects_["fork"])(getUser), Object(effects_["fork"])(addUser), Object(effects_["fork"])(updateUser), Object(effects_["fork"])(deleteUser)]);
}
// EXTERNAL MODULE: ./redux/properties/actions.js
var properties_actions = __webpack_require__("JRQ4");

// CONCATENATED MODULE: ./service/propertyApi.js
function propertyApi_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function propertyApi_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { propertyApi_ownKeys(Object(source), true).forEach(function (key) { propertyApi_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { propertyApi_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function propertyApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const propertyApi = {
  getAll: async () => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/property/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(propertyApi_handleError),
  getOne: async id => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/property/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(propertyApi_handleError),
  add: async (property) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/property/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(property)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(propertyApi_handleError),
  update: async (property) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/property/${property.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(property)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(propertyApi_handleError),
  delete: async (propertyId) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/property/${propertyId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(propertyApi_handleError),
  getPriceItems: async (propertyId) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/pricing/filtered_list/?property_id=${propertyId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(propertyApi_handleError),
  createPriceItem: async (pricing) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/pricing/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(pricing)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(propertyApi_handleError)
};

const propertyApi_handleError = res => {
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

  if (res.status === 403) {
    Object(components["a" /* notification */])('warning', 'Token not valid');
    Object(auth_utils["b" /* logout */])();
  }

  if (res.status >= 400 && res.status < 500) {
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

  error = propertyApi_objectSpread(propertyApi_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ var service_propertyApi = (propertyApi);
// CONCATENATED MODULE: ./redux/properties/saga.js





function* getAllProperties() {
  yield Object(effects_["takeLatest"])(properties_actions["a" /* default */].GET_ALL_PROPERTIES_REQUEST, function* () {
    try {
      const res = yield Object(effects_["call"])(service_propertyApi.getAll);
      console.log("___try", res);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].GET_ALL_PROPERTIES_SUCCESS,
        items: res
      });
    } catch (error) {
      console.log("___catch", error);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].GET_ALL_PROPERTIES_FAILURE,
        error: error.message
      });
    }
  });
}
function* getProperty() {
  yield Object(effects_["takeEvery"])(properties_actions["a" /* default */].GET_PROPERTY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_propertyApi.getOne, payload.propertyId);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].GET_PROPERTY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].GET_PROPERTY_FAILURE,
        error: error.message
      });
    }
  });
}
function* addProperty() {
  yield Object(effects_["takeEvery"])(properties_actions["a" /* default */].ADD_PROPERTY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_propertyApi.add, payload.property);
      Object(components["a" /* notification */])('success', 'New Property has been created successfully');
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].ADD_PROPERTY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].ADD_PROPERTY_FAILURE,
        error: error.message
      });
    }
  });
}
function* updateProperty() {
  yield Object(effects_["takeEvery"])(properties_actions["a" /* default */].UPDATE_PROPERTY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_propertyApi.update, payload.property);
      Object(components["a" /* notification */])('success', 'Property has been updated successfully');
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].UPDATE_PROPERTY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].UPDATE_PROPERTY_FAILURE,
        error: error.message
      });
    }
  });
}
function* deleteProperty() {
  yield Object(effects_["takeEvery"])(properties_actions["a" /* default */].DELETE_PROPERTY_REQUEST, function* (payload) {
    try {
      yield Object(effects_["call"])(service_propertyApi.delete, payload.propertyId);
      Object(components["a" /* notification */])('success', 'Property has been deleted successfully');
      router_["Router"].push('/admin/property');
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].DELETE_PROPERTY_SUCCESS,
        propertyId: payload.propertyId
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].DELETE_PROPERTY_FAILURE,
        error: error.message
      });
    }
  });
}
function* getPriceItems() {
  yield Object(effects_["takeLatest"])(properties_actions["a" /* default */].GET_PRICE_ITEMS_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_propertyApi.getPriceItems, payload.propertyId);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].GET_PRICE_ITEMS_SUCCESS,
        items: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].GET_PRICE_ITEMS_FAILURE,
        error: error.message
      });
    }
  });
}
function* createPriceItem() {
  yield Object(effects_["takeLatest"])(properties_actions["a" /* default */].CREATE_PRICE_ITEM_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_propertyApi.createPriceItem, payload.pricing);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].CREATE_PRICE_ITEM_SUCCESS
      });
      Object(components["a" /* notification */])('success', 'Pricing item created');
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].GET_PRICE_ITEMS_REQUEST,
        propertyId: payload.pricing.property
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: properties_actions["a" /* default */].CREATE_PRICE_ITEM_FAILURE
      });
    }
  });
}
function* properties_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(getAllProperties), Object(effects_["fork"])(getProperty), Object(effects_["fork"])(addProperty), Object(effects_["fork"])(updateProperty), Object(effects_["fork"])(deleteProperty), Object(effects_["fork"])(getPriceItems), Object(effects_["fork"])(createPriceItem)]);
}
// CONCATENATED MODULE: ./service/amenityApi.js
function amenityApi_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function amenityApi_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { amenityApi_ownKeys(Object(source), true).forEach(function (key) { amenityApi_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { amenityApi_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function amenityApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const amenityApi = {
  getAll: async () => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/amenity/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(amenityApi_handleError),
  getOne: async id => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/amenity/${id}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(amenityApi_handleError),
  add: async (amenity) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/amenity/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(amenity)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(amenityApi_handleError),
  update: async (amenity) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/amenity/${amenity.id}/`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(amenity)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(amenityApi_handleError),
  delete: async (amenityId) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/amenity/${amenityId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(amenityApi_handleError)
};

const amenityApi_handleError = res => {
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

  error = amenityApi_objectSpread(amenityApi_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ var service_amenityApi = (amenityApi);
// CONCATENATED MODULE: ./redux/amenities/saga.js





function* getAllAmenities() {
  yield Object(effects_["takeLatest"])(amenities_actions["a" /* default */].GET_ALL_AMENITIES_REQUEST, function* () {
    try {
      const res = yield Object(effects_["call"])(service_amenityApi.getAll);
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].GET_ALL_AMENITIES_SUCCESS,
        items: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].GET_ALL_AMENITIES_FAILURE,
        error: error.message
      });
    }
  });
}
function* getAmenity() {
  yield Object(effects_["takeEvery"])(amenities_actions["a" /* default */].GET_AMENITY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_amenityApi.getOne, payload.amenityId);
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].GET_AMENITY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].GET_AMENITY_FAILURE,
        error: error.message
      });
    }
  });
}
function* addAmenity() {
  yield Object(effects_["takeEvery"])(amenities_actions["a" /* default */].ADD_AMENITY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_amenityApi.add, payload.amenity);
      Object(components["a" /* notification */])('success', 'New amenity has been created successfully');
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].ADD_AMENITY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].ADD_AMENITY_FAILURE,
        error: error.message
      });
    }
  });
}
function* updateAmenity() {
  yield Object(effects_["takeEvery"])(amenities_actions["a" /* default */].UPDATE_AMENITY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_amenityApi.update, payload.amenity);
      Object(components["a" /* notification */])('success', 'Amenity has been updated successfully');
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].UPDATE_AMENITY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].UPDATE_AMENITY_FAILURE,
        error: error.message
      });
    }
  });
}
function* deleteAmenity() {
  yield Object(effects_["takeEvery"])(amenities_actions["a" /* default */].DELETE_AMENITY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_amenityApi.delete, payload.amenityId);
      Object(components["a" /* notification */])('success', 'Amenity has been deleted successfully');
      router_["Router"].push('/admin/amenity');
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].DELETE_AMENITY_SUCCESS,
        amenityId: payload.amenityId
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: amenities_actions["a" /* default */].DELETE_AMENITY_FAILURE,
        error: error.message
      });
    }
  });
}
function* amenities_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(getAllAmenities), Object(effects_["fork"])(getAmenity), Object(effects_["fork"])(addAmenity), Object(effects_["fork"])(updateAmenity), Object(effects_["fork"])(deleteAmenity)]);
}
// CONCATENATED MODULE: ./service/categoryApi.js
function categoryApi_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function categoryApi_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { categoryApi_ownKeys(Object(source), true).forEach(function (key) { categoryApi_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { categoryApi_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function categoryApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const categoryApi = {
  getAll: async () => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/category/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(categoryApi_handleError),
  getOne: async id => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/category/${id}/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(categoryApi_handleError),
  add: async (category) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/category/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(category)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(categoryApi_handleError),
  update: async (category) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/category/${category.id}/`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(category)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(categoryApi_handleError),
  delete: async (categoryId) => await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/category/${categoryId}/`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(categoryApi_handleError)
};

const categoryApi_handleError = res => {
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

  error = categoryApi_objectSpread(categoryApi_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ var service_categoryApi = (categoryApi);
// CONCATENATED MODULE: ./redux/categories/saga.js




function* getAllCategories() {
  yield Object(effects_["takeLatest"])(categories_actions["a" /* default */].GET_ALL_CATEGORIES_REQUEST, function* () {
    try {
      const res = yield Object(effects_["call"])(service_categoryApi.getAll);
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].GET_ALL_CATEGORIES_SUCCESS,
        items: res
      });
    } catch (error) {
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].GET_ALL_CATEGORIES_FAILURE,
        error: error.message
      });
    }
  });
}
function* getCategory() {
  yield Object(effects_["takeEvery"])(categories_actions["a" /* default */].GET_CATEGORY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_categoryApi.getOne, payload.categoryId);
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].GET_CATEGORY_SUCCESS,
        item: res
      });
    } catch (error) {
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].GET_CATEGORY_FAILURE,
        error: error.message
      });
    }
  });
}
function* addCategory() {
  yield Object(effects_["takeEvery"])(categories_actions["a" /* default */].ADD_CATEGORY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_categoryApi.add, payload.category);
      Object(components["a" /* notification */])("success", "New category has been created");
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].ADD_CATEGORY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])("warning", error);
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].ADD_CATEGORY_FAILURE,
        error: error.message
      });
    }
  });
}
function* updateCategory() {
  yield Object(effects_["takeEvery"])(categories_actions["a" /* default */].UPDATE_CATEGORY_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_categoryApi.update, payload.category);
      Object(components["a" /* notification */])("success", "Category has been updated");
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].UPDATE_CATEGORY_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])("warning", error);
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].UPDATE_CATEGORY_FAILURE,
        error: error.message
      });
    }
  });
}
function* deleteCategory() {
  yield Object(effects_["takeEvery"])(categories_actions["a" /* default */].DELETE_CATEGORY_REQUEST, function* (payload) {
    try {
      yield Object(effects_["call"])(service_categoryApi.delete, payload.categoryId);
      Object(components["a" /* notification */])("success", "Category has been deleted");
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].DELETE_CATEGORY_SUCCESS,
        categoryId: payload.categoryId
      });
    } catch (error) {
      Object(components["a" /* notification */])("warning", error);
      yield Object(effects_["put"])({
        type: categories_actions["a" /* default */].DELETE_CATEGORY_FAILURE,
        error: error.message
      });
    }
  });
}
function* categories_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(getAllCategories), Object(effects_["fork"])(getCategory), Object(effects_["fork"])(addCategory), Object(effects_["fork"])(updateCategory), Object(effects_["fork"])(deleteCategory)]);
}
// EXTERNAL MODULE: ./service/postApi.js
var postApi = __webpack_require__("/cYB");

// CONCATENATED MODULE: ./redux/posts/saga.js




function* getAllPosts() {
  yield Object(effects_["takeLatest"])(posts_actions["a" /* default */].GET_ALL_POSTS_REQUEST, function* () {
    try {
      const res = yield Object(effects_["call"])(postApi["a" /* default */].getAll);
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].GET_ALL_POSTS_SUCCESS,
        items: res
      });
    } catch (error) {
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].GET_ALL_POSTS_FAILURE,
        error: error.message
      });
    }
  });
}
function* getPost() {
  yield Object(effects_["takeEvery"])(posts_actions["a" /* default */].GET_POST_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(postApi["a" /* default */].getOne, payload.postId);
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].GET_POST_SUCCESS,
        item: res
      });
    } catch (error) {
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].GET_POST_FAILURE,
        error: error.message
      });
    }
  });
}
function* addPost() {
  yield Object(effects_["takeEvery"])(posts_actions["a" /* default */].ADD_POST_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(postApi["a" /* default */].add, payload.post);
      Object(components["a" /* notification */])('success', 'New post created');
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].ADD_POST_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].ADD_POST_FAILURE,
        error: error.message
      });
    }
  });
}
function* updatePost() {
  yield Object(effects_["takeEvery"])(posts_actions["a" /* default */].UPDATE_POST_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(postApi["a" /* default */].update, payload.post);
      Object(components["a" /* notification */])('success', 'Post has been updated successfully');
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].UPDATE_POST_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].UPDATE_POST_FAILURE,
        error: error.message
      });
    }
  });
}
function* deletePost() {
  yield Object(effects_["takeEvery"])(posts_actions["a" /* default */].DELETE_POST_REQUEST, function* (payload) {
    try {
      yield Object(effects_["call"])(postApi["a" /* default */].delete, payload.postId);
      Object(components["a" /* notification */])('warning', 'Post has been deleted successfully');
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].DELETE_POST_SUCCESS,
        postId: payload.postId
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: posts_actions["a" /* default */].DELETE_POST_FAILURE,
        error: error.message
      });
    }
  });
}
function* posts_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(getAllPosts), Object(effects_["fork"])(getPost), Object(effects_["fork"])(addPost), Object(effects_["fork"])(updatePost), Object(effects_["fork"])(deletePost)]);
}
// CONCATENATED MODULE: ./service/blogApi.js
function blogApi_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function blogApi_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { blogApi_ownKeys(Object(source), true).forEach(function (key) { blogApi_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { blogApi_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function blogApi_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const blogApi = {
  getAll: async () => await fetch(`${env_config["BACKEND_URL"]}/api/blog/`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(blogApi_handleError),
  getOne: async id => await fetch(`${env_config["BACKEND_URL"]}/api/blog/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(blogApi_handleError),
  add: async (blog) => await fetch(`${env_config["BACKEND_URL"]}/api/blog/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(blog)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(blogApi_handleError),
  update: async (blog) => await fetch(`${env_config["BACKEND_URL"]}/api/blog/${blog.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    },
    body: JSON.stringify(blog)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw res;
  }).catch(blogApi_handleError),
  delete: async (blogId) => await fetch(`${env_config["BACKEND_URL"]}/api/blog/${blogId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
    }
  }).then(res => {
    if (res.ok) {
      return null;
    }

    throw res;
  }).catch(blogApi_handleError)
};

const blogApi_handleError = res => {
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

  error = blogApi_objectSpread(blogApi_objectSpread({}, error), {}, {
    status: res.status,
    statusText: res.statusText,
    message: res.detail || 'Error'
  });
  throw error;
};

/* harmony default export */ var service_blogApi = (blogApi);
// CONCATENATED MODULE: ./redux/blogs/saga.js




function* getAllBlogs() {
  yield Object(effects_["takeLatest"])(blogs_actions["a" /* default */].GET_ALL_BLOGS_REQUEST, function* () {
    try {
      const res = yield Object(effects_["call"])(service_blogApi.getAll);
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].GET_ALL_BLOGS_SUCCESS,
        items: res
      });
    } catch (error) {
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].GET_ALL_BLOGS_FAILURE,
        error: error.message
      });
    }
  });
}
function* getBlog() {
  yield Object(effects_["takeEvery"])(blogs_actions["a" /* default */].GET_BLOG_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_blogApi.getOne, payload.blogId);
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].GET_BLOG_SUCCESS,
        item: res
      });
    } catch (error) {
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].GET_BLOG_FAILURE,
        error: error.message
      });
    }
  });
}
function* addBlog() {
  yield Object(effects_["takeEvery"])(blogs_actions["a" /* default */].ADD_BLOG_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_blogApi.add, payload.blog);
      Object(components["a" /* notification */])('success', 'New blog created');
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].ADD_BLOG_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].ADD_BLOG_FAILURE,
        error: error.message
      });
    }
  });
}
function* updateBlog() {
  yield Object(effects_["takeEvery"])(blogs_actions["a" /* default */].UPDATE_BLOG_REQUEST, function* (payload) {
    try {
      const res = yield Object(effects_["call"])(service_blogApi.update, payload.blog);
      Object(components["a" /* notification */])('success', 'Blog has been updated successfully');
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].UPDATE_BLOG_SUCCESS,
        item: res
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].UPDATE_BLOG_FAILURE,
        error: error.message
      });
    }
  });
}
function* deleteBlog() {
  yield Object(effects_["takeEvery"])(blogs_actions["a" /* default */].DELETE_BLOG_REQUEST, function* (payload) {
    try {
      yield Object(effects_["call"])(service_blogApi.delete, payload.blogId);
      Object(components["a" /* notification */])('warning', 'Blog has been deleted successfully');
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].DELETE_BLOG_SUCCESS,
        blogId: payload.blogId
      });
    } catch (error) {
      Object(components["a" /* notification */])('warning', error.message);
      yield Object(effects_["put"])({
        type: blogs_actions["a" /* default */].DELETE_BLOG_FAILURE,
        error: error.message
      });
    }
  });
}
function* blogs_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["call"])(getAllBlogs), Object(effects_["fork"])(getBlog), Object(effects_["fork"])(addBlog), Object(effects_["fork"])(updateBlog), Object(effects_["fork"])(deleteBlog)]);
}
// CONCATENATED MODULE: ./shared/redux/contacts/saga.js


function* addContact() {
  yield Object(effects_["takeEvery"])(contacts_actions.ADD_CONTACT, function* () {});
}
function* editContact() {
  yield Object(effects_["takeEvery"])(contacts_actions.EDIT_CONTACT, function* () {});
}
function* deleteContact() {
  yield Object(effects_["takeEvery"])(contacts_actions.DELETE__CONTACT, function* () {});
}
function* contacts_saga_rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(addContact), Object(effects_["fork"])(editContact), Object(effects_["fork"])(deleteContact)]);
}
// CONCATENATED MODULE: ./redux/root-saga.js









function* root_saga_rootSaga(getState) {
  yield Object(effects_["all"])([rootSaga(), saga_rootSaga(), properties_saga_rootSaga(), amenities_saga_rootSaga(), categories_saga_rootSaga(), posts_saga_rootSaga(), blogs_saga_rootSaga(), contacts_saga_rootSaga()]);
}
// CONCATENATED MODULE: ./redux/store.js






const sagaMiddleware = external_redux_saga_default()();

const bindMiddleware = middleware => {
  if (false) {}

  return Object(external_redux_["applyMiddleware"])(...middleware);
};

function configureStore(initialState = {}) {
  const store = Object(external_redux_["createStore"])(root_reducer, initialState, bindMiddleware([external_redux_thunk_default.a, external_redux_logger_default.a, sagaMiddleware]));

  store.runSaga = () => {
    // Avoid running twice
    if (store.saga) return;
    store.saga = sagaMiddleware.run(root_saga_rootSaga);
  };

  store.stopSaga = async () => {
    // Avoid running twice
    if (!store.saga) return;
    store.dispatch(external_redux_saga_["END"]);
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

/* harmony default export */ var redux_store = (configureStore);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__("TpwP");

// EXTERNAL MODULE: ./node_modules/react-phone-input-2/lib/bootstrap.css
var bootstrap = __webpack_require__("olOf");

// EXTERNAL MODULE: ./node_modules/react-dates/lib/css/_datepicker.css
var _datepicker = __webpack_require__("P+y9");

// EXTERNAL MODULE: ./node_modules/@glidejs/glide/dist/css/glide.core.min.css
var glide_core_min = __webpack_require__("TSG6");

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__("91UR");

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.core.css
var quill_core = __webpack_require__("cBUL");

// EXTERNAL MODULE: ./node_modules/react-image-gallery/styles/css/image-gallery.css
var image_gallery = __webpack_require__("2Sww");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick.css
var slick = __webpack_require__("tyWD");

// EXTERNAL MODULE: ./node_modules/slick-carousel/slick/slick-theme.css
var slick_theme = __webpack_require__("K7k0");

// EXTERNAL MODULE: ./style/global.css
var global = __webpack_require__("EFYt");

// CONCATENATED MODULE: ./containers/Guest/GuestThemeProvider.js

var GuestThemeProvider_jsx = external_react_default.a.createElement;








const {
  toggleAll: GuestThemeProvider_toggleAll
} = actions["a" /* default */];
function GuestThemeProvider({
  children
}) {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    locale
  } = Object(external_react_redux_["useSelector"])(state => state.LanguageSwitcher.language);
  const {
    themeName
  } = Object(external_react_redux_["useSelector"])(state => state.ThemeSwitcher.changeThemes);
  const currentAppLocale = translation[locale];
  const {
    width,
    height
  } = hooks_useWindowSize();
  external_react_default.a.useEffect(() => {
    dispatch(GuestThemeProvider_toggleAll(width, height));
  }, [dispatch]);
  return GuestThemeProvider_jsx(config_provider_default.a, {
    locale: currentAppLocale.antd
  }, GuestThemeProvider_jsx(external_react_intl_["IntlProvider"], {
    locale: currentAppLocale.locale,
    messages: currentAppLocale.messages
  }, GuestThemeProvider_jsx(external_styled_components_["ThemeProvider"], {
    theme: theme_config["a" /* default */].guestTheme
  }, children)));
}
// EXTERNAL MODULE: ./context/SearchProvider.js
var SearchProvider = __webpack_require__("l0iN");

// EXTERNAL MODULE: ./context/BookingProvider.js
var BookingProvider = __webpack_require__("t9tb");

// EXTERNAL MODULE: external "styled-tools"
var external_styled_tools_ = __webpack_require__("1exS");

// CONCATENATED MODULE: ./style/GlobalStyles.js


const GlobalStyle = external_styled_components_["createGlobalStyle"]`

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
    min-height: 50vh;

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
        border: 2px solid ${Object(external_styled_tools_["palette"])('warning', 0)};
        box-shadow: none !important;
      }
    }
  }
`;
/* harmony default export */ var GlobalStyles = (GlobalStyle);
// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;


/**
 *  import for legacy version of next-redux-wrapper
 */
// import {Provider} from 'react-redux';
// import withRedux from 'next-redux-wrapper';



















class _app_CustomApp extends app_default.a {
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

    if ((router === null || router === void 0 ? void 0 : router.pathname.split('/')[0]) === 'admin') {
      return (// <Provider store={store}>
        _app_jsx(AppProvider, null, _app_jsx(Component, pageProps)) // </Provider>

      );
    }

    return _app_jsx(GuestThemeProvider, null, _app_jsx(SearchProvider["b" /* SearchProvider */], {
      query: query
    }, _app_jsx(BookingProvider["b" /* BookingProvider */], {
      booking: BookingProvider["c" /* initBooking */]
    }, _app_jsx(GlobalStyles, null), _app_jsx(Component, pageProps))));
  }

}

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(redux_store, {
  debug: true
});
/* harmony default export */ var _app = __webpack_exports__["default"] = (wrapper.withRedux(_app_CustomApp)); // export default withRedux(initStore)(CustomApp);

/***/ }),

/***/ "1exS":
/***/ (function(module, exports) {

module.exports = require("styled-tools");

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "27qp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "2Sww":
/***/ (function(module, exports) {



/***/ }),

/***/ "3E2n":
/***/ (function(module, exports) {

module.exports = require("https-proxy-agent/dist/agent");

/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5tV1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ themeConfig; });

// CONCATENATED MODULE: ./shared/config/theme/default.js
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
/* harmony default export */ var theme_default = (theme);
// CONCATENATED MODULE: ./shared/config/theme/custom.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ var custom = (_objectSpread(_objectSpread({}, theme_default), {}, {
  palette: {
    primary: ['#f00'],
    secondary: ['#0f0']
  }
}));
// CONCATENATED MODULE: ./shared/config/theme/guest.js
const guest_theme = {};
guest_theme.palette = {
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
guest_theme.fonts = {
  primary: 'PT Serif, serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace'
};
/* harmony default export */ var guest = (guest_theme);
// CONCATENATED MODULE: ./shared/config/theme/theme.config.js



const themes = {
  defaultTheme: theme_default,
  guestTheme: guest,
  customTheme: custom
};
const themeConfig = {
  topbar: 'defaultTheme',
  sidebar: 'defaultTheme',
  layout: 'defaultTheme',
  theme: 'defaultTheme'
};
/* harmony default export */ var theme_config = __webpack_exports__["a"] = (themes);

/***/ }),

/***/ "7wCw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("27qp");
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "8XiI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const authActions = {
  // LOGIN_REQUEST_START: 'LOGIN_REQUEST_START',
  JWT_LOGIN_REQUEST_START: 'JWT_LOGIN_REQUEST_START',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAILURE: 'LOGIN_REQUEST_FAILURE',
  LOGOUT_REQUEST_START: 'LOGOUT_REQUEST_START',
  LOGOUT_REQUEST_SUCCESS: 'LOGOUT_REQUEST_SUCCESS',
  LOGOUT_REQUEST_FAILURE: 'LOGOUT_REQUEST_FAILURE',
  // login: credentials => ({
  //   type: authActions .LOGIN_REQUEST_START,
  //   payload: credentials,
  // }),
  jwtLogin: (history, userInfo) => ({
    type: authActions.JWT_LOGIN_REQUEST_START,
    payload: {
      history,
      userInfo
    }
  }),
  loginRequestSuccess: credentials => ({
    type: authActions.LOGIN_REQUEST_SUCCESS,
    payload: credentials
  }),
  loginRequestFailure: error => ({
    type: authActions.LOGOUT_REQUEST_FAILURE,
    payload: error
  }),
  logout: () => ({
    type: authActions.LOGOUT_REQUEST_START
  }),
  logoutRequestSuccess: () => ({
    type: authActions.LOGOUT_REQUEST_SUCCESS
  }),
  logoutRequestFailure: error => ({
    type: authActions.LOGOUT_REQUEST_FAILURE,
    payload: error
  })
};
/* harmony default export */ __webpack_exports__["a"] = (authActions);

/***/ }),

/***/ "91UR":
/***/ (function(module, exports) {



/***/ }),

/***/ "9xqG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/9ef80c6c0e6c3ea2dd3069e18f35ada9.svg");

/***/ }),

/***/ "A+dB":
/***/ (function(module, exports) {

module.exports = require("antd/lib/locale-provider/en_US");

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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

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

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
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
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BJG+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/d05a649b0fe3d1a2aab9550c24d594ed.svg");

/***/ }),

/***/ "BnVt":
/***/ (function(module, exports) {

module.exports = require("styled-theme");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EFYt":
/***/ (function(module, exports) {



/***/ }),

/***/ "G3ex":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (categoryActions);

/***/ }),

/***/ "Gss8":
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "IFJb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/6ae9e2f536f0c760f14d4d2e5c5865c1.svg");

/***/ }),

/***/ "JAAA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (userActions);

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "JRQ4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UJ2i");


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
/* harmony default export */ __webpack_exports__["a"] = (propertyActions);

/***/ }),

/***/ "K6uA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/f542aafb7eb53b837c7a9141b5b96463.svg");

/***/ }),

/***/ "K7k0":
/***/ (function(module, exports) {



/***/ }),

/***/ "LBvq":
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.dashboard\":\"Dashboard\",\"sidebar.accommodation\":\"Accommodation\",\"sidebar.category\":\"Category\",\"sidebar.amenity\":\"Amenity\",\"sidebar.property\":\"Property\",\"sidebar.users\":\"Users\",\"sidebar.posts\":\"Posts\",\"sidebar.blogs\":\"Blogs\",\"Component.users.noOption\":\"No user found\",\"userlist.searchUsers\":\"Search Users\",\"userlist.addNewUser\":\"Add New User\",\"sidebar.email\":\"Email\",\"sidebar.chat\":\"Chat\",\"sidebar.ecommerce\":\"Ecommerce\",\"sidebar.shop\":\"Shop\",\"sidebar.cart\":\"Cart\",\"sidebar.checkout\":\"Checkout\",\"sidebar.cards\":\"Cards\",\"sidebar.maps\":\"Maps\",\"sidebar.firestorecrud\":\"Firestore CRUD\",\"sidebar.firestorecrudarticle\":\"Articles\",\"sidebar.firestorecrudinvestor\":\"Investors\",\"sidebar.googleMap\":\"Google Map\",\"sidebar.leafletMap\":\"Leaflet Map\",\"sidebar.calendar\":\"Calendar\",\"sidebar.notes\":\"Notes\",\"sidebar.todos\":\"Todos\",\"sidebar.contacts\":\"Contacts\",\"sidebar.shuffle\":\"Shuffle\",\"sidebar.charts\":\"Charts\",\"sidebar.googleCharts\":\"Google Carts\",\"sidebar.recharts\":\"Recharts\",\"sidebar.reactVis\":\"React Vis\",\"sidebar.reactChart2\":\"React-Chart-2\",\"sidebar.reactTrend\":\"React-Trend\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"Forms\",\"sidebar.input\":\"Input\",\"sidebar.editor\":\"Editor\",\"sidebar.formsWithValidation\":\"Forms With Validation\",\"sidebar.progress\":\"Progress\",\"sidebar.button\":\"Button\",\"sidebar.tab\":\"Tab\",\"sidebar.checkbox\":\"Checkbox\",\"sidebar.radiobox\":\"Radiobox\",\"sidebar.transfer\":\"Transfer\",\"sidebar.autocomplete\":\"AutoComplete\",\"sidebar.boxOptions\":\"Box Options\",\"sidebar.uiElements\":\"UI Elements\",\"sidebar.badge\":\"Badge\",\"sidebar.card2\":\"Card\",\"sidebar.corusel\":\"Carousal\",\"sidebar.collapse\":\"Collapse\",\"sidebar.popover\":\"Pop Over\",\"sidebar.tooltip\":\"Tooltip\",\"sidebar.tag\":\"Tag\",\"sidebar.timeline\":\"Timeline\",\"sidebar.dropdown\":\"Dropdown\",\"sidebar.pagination\":\"Pagination\",\"sidebar.rating\":\"Rating\",\"sidebar.tree\":\"Tree\",\"sidebar.advancedElements\":\"Advanced Elements\",\"sidebar.reactDates\":\"React Dates\",\"sidebar.swiperslider\":\"Swiper Slider\",\"sidebar.codeMirror\":\"Code Mirror\",\"sidebar.uppy\":\"Uppy Uploader\",\"sidebar.dropzone\":\"Drop Zone\",\"sidebar.feedback\":\"Feedback\",\"sidebar.alert\":\"Alert\",\"sidebar.modal\":\"Modal\",\"sidebar.message\":\"Message\",\"sidebar.notification\":\"Notification\",\"sidebar.popConfirm\":\"Pop Confirm\",\"sidebar.spin\":\"Spin\",\"sidebar.tables\":\"Tables\",\"sidebar.antTables\":\"Ant Tables\",\"sidebar.pages\":\"Pages\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"Sign In\",\"sidebar.signUp\":\"Sign Up\",\"sidebar.forgotPw\":\"Forgot Passwords\",\"sidebar.resetPw\":\"Reset Passwords\",\"sidebar.invoice\":\"Invoice\",\"sidebar.menuLevels\":\"Menu Levels\",\"sidebar.item1\":\"Item 1\",\"sidebar.item2\":\"Item 2\",\"sidebar.option1\":\"Option 1\",\"sidebar.option2\":\"Option 2\",\"sidebar.option3\":\"Option 3\",\"sidebar.option4\":\"Option 4\",\"sidebar.blankPage\":\"Blank Page\",\"sidebar.githubSearch\":\"Github Search\",\"sidebar.youtubeSearch\":\"Youtube Search\",\"sidebar.scrumboard\":\"Scrum Board\",\"sidebar.profile\":\"Profile\",\"sidebar.quiz\":\"Quiz\",\"sidebar.authCheck\":\"Check Auth Status\",\"sidebar.swiperSlider\":\"Swiper Slider\",\"languageSwitcher.label\":\"Change Language\",\"themeSwitcher\":\"Theme Switcher\",\"themeSwitcher.Sidebar\":\"Sidebar\",\"themeSwitcher.Topbar\":\"Topbar\",\"themeSwitcher.Background\":\"Background\",\"feedback.alert.basicTitle\":\"Basic Title\",\"feedback.alert.successText\":\"Success text\",\"feedback.alert.infoText\":\"Info Text\",\"feedback.alert.warningText\":\"Warning Text\",\"feedback.alert.errorText\":\"Error Text\",\"feedback.alert.closableAlertType\":\"Closable Alert Type\",\"feedback.alert.iconAlertType\":\"Icon Alert Type\",\"feedback.alert.iconInfoAlertType\":\"Icon Info Alert Type\",\"feedback.alert.successTips\":\"success tips\",\"feedback.alert.successTipsDescription\":\"Detailed description and advices about successful copywriting.\",\"feedback.alert.informationTips\":\"Informational Notes\",\"feedback.alert.informationDescription\":\"Additional description and informations about copywriting.\",\"feedback.alert.warningTips\":\"Warning\",\"feedback.alert.warningDescription\":\"This is a warning notice about copywriting.\",\"feedback.alert.errorTips\":\"Error\",\"feedback.alert.errorDescription\":\"This is an error message about copywriting.\",\"feedback.alert.modalTitle\":\"Modal one with customize Footer\",\"feedback.alert.modalSubTitle\":\"Basic modal dialog.\",\"feedback.alert.successTitle\":\"Success\",\"feedback.alert.infoTitle\":\"Info\",\"feedback.alert.errorTitle\":\"Error\",\"feedback.alert.warningTitle\":\"Warning\",\"feedback.alert.modalBlockTitle\":\"Modal\",\"feedback.alert.confirmationModalDialogue\":\"Confirmation modal dialog\",\"feedback.alert.simpleModalDialogue\":\"Simple modal dialog\",\"feedback.alert.message\":\"Message\",\"feedback.alert.normalMessageTitle\":\"Normal Message\",\"feedback.alert.normalMessageSubtitle\":\"Normal messages as feedbacks.\",\"feedback.alert.displayMessage\":\"Display normal message\",\"feedback.alert.displayOtherTypeMessageTitle\":\"Other Types of Message\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"Messages of success   error and warning types.\",\"feedback.alert.customizeDurationTitle\":\"Customize duration\",\"feedback.alert.customizeDurationSubTitle\":\"ustomize message display duration from default 1.5s to 10s.\",\"feedback.alert.customizeDurationButton\":\"Customized display duration\",\"feedback.alert.messageLoadingTitle\":\"Message of loading\",\"feedback.alert.messageLoadingSubTitle\":\"Display a global loading indicator   which is dismissed by itself asynchronously.\",\"feedback.alert.displayLoadIndicator\":\"Display a loading indicator\",\"feedback.alert.notification\":\"Notification\",\"feedback.alert.notificationBasicTitle\":\"Basic\",\"feedback.alert.notificationBasicSubTitle\":\"The simplest usage that close the notification box after 4.5s.\",\"feedback.alert.notificationBasicDescription\":\"Open the notification box\",\"feedback.alert.notificationDurationTitle\":\"Duration after which the notification box is closed\",\"feedback.alert.notificationDurationSubTitle\":\"Duration can be used to specify how long the notification stays open. After the duration time elapses   the notification closes automatically. If not specified   default value is 4.5 seconds. If you set the value to 0   the notification box will never close automatically.\",\"feedback.alert.notificationwithIconTitle\":\"Notification with icon\",\"feedback.alert.notificationwithIconSubTitle\":\"A notification box with a icon at the left side.\",\"feedback.alert.notificationwithCustomIconTitle\":\"Notification with custom icon\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"Normal messages as feedbacks.\",\"feedback.alert.notificationwithCustomButtonTitle\":\"Notification with custom button\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"Normal messages as feedbacks.\",\"feedback.alert.popConfirm\":\"Pop Confirm\",\"feedback.alert.popConfirm.basicTitle\":\"Basic Confirm\",\"feedback.alert.popConfirm.basicSubTitle\":\"The basic example.\",\"feedback.alert.popConfirm.delete\":\"Delete\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"Notification with custom icon\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"Normal messages as feedbacks.\",\"feedback.alert.popConfirm.TL\":\"TL\",\"feedback.alert.popConfirm.top\":\"Top\",\"feedback.alert.popConfirm.TR\":\"TR\",\"feedback.alert.popConfirm.LT\":\"LT\",\"feedback.alert.popConfirm.left\":\"Left\",\"feedback.alert.popConfirm.LB\":\"LB\",\"feedback.alert.popConfirm.RT\":\"RT\",\"feedback.alert.popConfirm.right\":\"Right\",\"feedback.alert.popConfirm.RB\":\"RB\",\"feedback.alert.popConfirm.Bl\":\"BL\",\"feedback.alert.popConfirm.bottom\":\"Bottom\",\"feedback.alert.popConfirm.BR\":\"BR\",\"feedback.alert.spin\":\"Spin\",\"feedback.alert.spin.basicTitle\":\"Size Spin\",\"feedback.alert.spin.background\":\"Spin With Background\",\"feedback.alert.spin.backgroundDescription\":\"Spin With Background description\",\"feedback.alert.spin.loadingState\":\"Loading State\",\"feedback.alert.spin.alertTitle\":\"Alert message title\",\"feedback.alert.spin.alertDescription\":\"Further details about the context of this alert.\",\"forms.input.header\":\"Input\",\"forms.input.basicTitle\":\"Basic usage\",\"forms.input.basicSubTitle\":\"Basic usage example.\",\"forms.input.variationsTitle\":\"Three sizes of Input\",\"forms.input.variationsSubtitle\":\"There are three sizes of an Input box  large (42px  、default (35px   and small (30px  . Note  Inside of forms   only the large size is used.\",\"forms.input.groupTitle\":\"Input Group\",\"forms.input.groupSubTitle\":\"Input.Group example Note  You dont need Col to control the width in the compact mode.\",\"forms.input.autoSizingTitle\":\"Autosizing the height to fit the content\",\"forms.input.autoSizingSubTitle\":\"autosize prop for a textarea type of Input makes the height to automatically adjust based on the content. An options object can be provided to autosize to specify the minimum and maximum number of lines the textarea will automatically adjust.\",\"forms.input.prePostTabTitle\":\"Pre    Post tab\",\"forms.input.prePostTabSubTitle\":\"Using pre &amp; post tabs example..\",\"forms.input.textAreaTitle\":\"Textarea\",\"forms.input.textAreaSubTitle\":\"For multi-line user input cases   an input whose type prop has the value of textarea can be used.\",\"forms.input.searchTitle\":\"Search\",\"forms.input.searchSubTitle\":\"Example of creating a search box by grouping a standard input with a search button\",\"forms.editor.header\":\"Editor\",\"forms.formsWithValidation.header\":\"Customized Validation Form\",\"forms.formsWithValidation.failLabel\":\"Fail\",\"forms.formsWithValidation.failHelp\":\"Should be combination of numbers & alphabets\",\"forms.formsWithValidation.warningLabel\":\"Warning\",\"forms.formsWithValidation.ValidatingLabel\":\"Validating\",\"forms.formsWithValidation.ValidatingHelp\":\"The information is being validated...\",\"forms.formsWithValidation.SuccessLabel\":\"Success\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"Warning\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"Fail\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"Should be combination of numbers & alphabets\",\"forms.progressBar.header\":\"Progress Bar\",\"forms.progressBar.standardTitle\":\"Progress bar\",\"forms.progressBar.standardSubTitle\":\"A standard progress bar.\",\"forms.progressBar.circularTitle\":\"Circular Progress bar\",\"forms.progressBar.circularSubTitle\":\"A circular progress bar.\",\"forms.progressBar.miniTitle\":\"Mini size progress bar\",\"forms.progressBar.miniSubTitle\":\"Appropriate for a narrow area.\",\"forms.progressBar.miniCircularTitle\":\"A smaller circular progress bar.\",\"forms.progressBar.dynamicCircularTitle\":\"Dynamic circular progress bar\",\"forms.progressBar.dynamicCircularSubTitle\":\"A dynamic progress bar is better.\",\"forms.progressBar.customTextTitle\":\"Custom text format\",\"forms.progressBar.customTextSubTitle\":\"You can custom text format by setting format.\",\"forms.progressBar.dashboardTitle\":\"Dashboard\",\"forms.progressBar.dashboardSubTitle\":\"A dashboard style of progress.\",\"forms.button.header\":\"Buttons\",\"forms.button.simpleButton\":\"Button Type\",\"forms.button.iconButton\":\"Button Icon\",\"forms.button.simpleButtonPrimaryText\":\"Primary\",\"forms.button.simpleButtonDefaultText\":\"Default\",\"forms.button.simpleButtonDashedText\":\"Dashed\",\"forms.button.simpleButtonDangerText\":\"Danger\",\"forms.button.iconPrimaryButton\":\"search\",\"forms.button.iconSimpleButton\":\"search\",\"forms.button.iconCirculerButton\":\"search\",\"forms.button.iconDashedButton\":\"search\",\"forms.button.SizedButton\":\"Button Size\",\"forms.button.DisabledButton\":\"Button Disabled\",\"forms.button.LoadingButton\":\"Button Loading\",\"forms.button.MultipleButton\":\"Multiple Button\",\"forms.button.groupButton\":\"Button Group\",\"forms.Tabs.header\":\"Tabs\",\"forms.Tabs.simpleTabTitle\":\"search\",\"forms.Tabs.simpleTabSubTitle\":\"Disabled Tabs\",\"forms.Tabs.iconTabTitle\":\"Icon Tabs\",\"forms.Tabs.miniTabTitle\":\"Mini Tabs\",\"forms.Tabs.extraTabTitle\":\"Extra Action Tabs\",\"forms.Tabs.TabpositionTitle\":\"Position\",\"forms.Tabs.TabpositionSubTitle\":\"Tabss position  left   right   top or bottom\",\"forms.Tabs.cardTitle\":\"Card Type Tabs\",\"forms.Tabs.editableTitle\":\"Add and Close Tabs\",\"forms.Tabs.verticalTitle\":\"Vertical Type Tabs\",\"forms.Tabs.basicTitle\":\"Basic Tabs\",\"forms.checkbox.header\":\"Checkbox\",\"forms.checkbox.basicTitle\":\"Basic Checkbox\",\"forms.checkbox.basicSubTitle\":\"Basic usage of checkbox.\",\"forms.checkbox.groupTitle\":\"Checkbox Group\",\"forms.checkbox.groupSubTitle\":\"Generate a group of checkboxes from an array. Use disabled to disable a checkbox.\",\"forms.checkbox.groupCheckTitle\":\"Checkbox Group\",\"forms.checkbox.groupCheckSubTitle\":\"Generate a group of checkboxes from an array. Use disabled to disable a checkbox.\",\"forms.radio.header\":\"Radio\",\"forms.radio.simpleTitle\":\"Basic Radio\",\"forms.radio.simpleSubTitle\":\"The simplest use. Use disabled to disable a radio.\",\"forms.radio.groupTitle\":\"Vertical RadioGroup\",\"forms.radio.groupSubTitle\":\"Vertical RadioGroup   with more radios.\",\"forms.radio.groupSecondTitle\":\"RadioGroup\",\"forms.radio.groupSecondSubTitle\":\"A group of radio components.\",\"forms.radio.groupThirdTitle\":\"RadioGroup\",\"forms.radio.groupThirdSubTitle\":\"A group of radio components.\",\"forms.transfer.header\":\"Transfer\",\"forms.transfer.SubTitle\":\"Transfer with a search box.\",\"forms.transfer.Title\":\"Search\",\"forms.autocomplete.header\":\"Autocomplete\",\"forms.autocomplete.simpleTitle\":\"Customized\",\"forms.autocomplete.simpleSubTitle\":\"You could pass AutoComplete.Option as children of AutoComplete   instead of using dataSource\",\"forms.autocomplete.customizeTitle\":\"Customize Input Component\",\"forms.autocomplete.customizeSubTitle\":\"Customize Input Component\",\"uiElements.badge.badge\":\"Badge\",\"uiElements.badge.basicExample\":\"Basic Example\",\"uiElements.badge.basicExampleSubTitle\":\"Simplest Usage. Badge will be hidden when count is 0   but we can use showZero to show it.\",\"uiElements.badge.overflowCount\":\"Overflow Count\",\"uiElements.badge.overflowCountSubTitle\":\"OverflowCount is displayed when count is larger than overflowCount. The default value of overflowCount is 99.\",\"uiElements.badge.status\":\"Status\",\"uiElements.badge.statusSubTitle\":\"Standalone badge with status.\",\"uiElements.badge.success\":\"Success\",\"uiElements.badge.error\":\"Error\",\"uiElements.badge.default\":\"Default\",\"uiElements.badge.processing\":\"Processing\",\"uiElements.badge.warning\":\"Warning\",\"uiElements.badge.redBadge\":\"Red badge\",\"uiElements.badge.redBadgeSubTitle\":\"This will simply display a red badge   without a specific count.\",\"uiElements.badge.linkSomething\":\"Link something\",\"uiElements.cards.cards\":\"Cards\",\"uiElements.cards.basicCard\":\"Basic card\",\"uiElements.cards.basicCardSubTitle\":\"A basic card containing a title   content and an extra corner content.\",\"uiElements.cards.more\":\"More\",\"uiElements.cards.cardTitle\":\"Card Title\",\"uiElements.cards.cardContent\":\"Card content\",\"uiElements.cards.lorem\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\",\"uiElements.cards.noBorder\":\"No Border\",\"uiElements.cards.noBorderSubTitle\":\"A borderless card on a gray background.\",\"uiElements.cards.gridCard\":\"Grid card\",\"uiElements.cards.gridCardSubTitle\":\"Cards usually cooperate with grid layout in overview page.\",\"uiElements.cards.loadingCard\":\"Loading card\",\"uiElements.cards.loadingCardSubTitle\":\"Shows a loading indicator while the contents of the card is being fetched.\",\"uiElements.cards.whateverContent\":\"Whatever content\",\"uiElements.cards.customizedContentTitle\":\"Customized Content\",\"uiElements.cards.customizedContent\":\"Shows a loading indicator while the contents of the card is being fetched.\",\"uiElements.cards.europeStreetBeat\":\"Europe Street beat\",\"uiElements.cards.instagram\":\"www.instagram.com\",\"uiElements.carousel.carousel\":\"Carousal\",\"uiElements.carousel.verticalCarousel\":\"Vertical Carousel\",\"uiElements.carousel.verticalCarouselSubTitle\":\"Vertical pagination. use   vertical=true\",\"uiElements.carousel.basicCarousel\":\"Basic Carousel\",\"uiElements.carousel.basicCarouselSubTitle\":\"Basic usage\",\"uiElements.carousel.fadeInTransition\":\"Fade In Transition\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"Slides use fade for transition.   effect=fade\",\"uiElements.carousel.scrollAutomatically\":\"Scroll Automatically\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"Timing of scrolling to the next card  picture. autoplay\",\"uiElements.collapse.collapse\":\"Collapse\",\"uiElements.collapse.collapseSubTitle\":\"More than one panel can be expanded at a time   the first panel is initialized to be active in this case. use   defaultActiveKey=  [keyNum]\",\"uiElements.collapse.text\":\"A dog is a type of domesticated animal. Known for its loyalty and faithfulness   it can be found as a welcome guest in many households across the world.\",\"uiElements.collapse.headerOne\":\"This is panel header 1\",\"uiElements.collapse.headerTwo\":\"This is panel header 2\",\"uiElements.collapse.headerThree\":\"This is panel header 3\",\"uiElements.collapse.headerNested\":\"This is panel nest panel\",\"uiElements.collapse.nestedExample\":\"Nested Example\",\"uiElements.collapse.nestedExampleSubTitle\":\"Collapse is nested inside the Collapse.\",\"uiElements.collapse.borderlessExample\":\"Borderless Example\",\"uiElements.collapse.borderlessExampleSubTitle\":\"A borderless style of Collapse. use   bordered=  false\",\"uiElements.collapse.accordion\":\"Accordion\",\"uiElements.collapse.accordionSubTitle\":\"Accordion mode   only one panel can be expanded at a time. The first panel will be expanded by default. use accordion\",\"uiElements.popover.popover\":\"Popover\",\"uiElements.popover.basicExample\":\"Basic Example\",\"uiElements.popover.basicExampleSubTitle\":\"The most basic example. The size of the floating layer depends on the contents region.\",\"uiElements.popover.hoverMe\":\"Hover me\",\"uiElements.popover.title\":\"Title\",\"uiElements.popover.titleTrigger\":\"Three ways to trigger\",\"uiElements.popover.titleTriggerSubTitle\":\"Mouse to click   focus and move in.\",\"uiElements.popover.focusMe\":\"Focus me\",\"uiElements.popover.clickMe\":\"Click me\",\"uiElements.popover.placement\":\"Placement\",\"uiElements.popover.placementSubTitle\":\"There are 12 placement options available.\",\"uiElements.popover.top\":\"Top\",\"uiElements.popover.topLeft\":\"Top Left\",\"uiElements.popover.topRight\":\"Top Right\",\"uiElements.popover.leftTop\":\"Left Top\",\"uiElements.popover.left\":\"Left\",\"uiElements.popover.leftBottom\":\"Left Bottom\",\"uiElements.popover.rightTop\":\"Right Top\",\"uiElements.popover.right\":\"Right\",\"uiElements.popover.bottom\":\"Bottom\",\"uiElements.popover.bottomLeft\":\"Bottom Left\",\"uiElements.popover.bottomRight\":\"Bottom Right\",\"uiElements.popover.boxTitle\":\"Controlling the close of the dialog\",\"uiElements.popover.boxSubTitle\":\"Use visible prop to control the display of the card.\",\"uiElements.popover.TR\":\"TR\",\"uiElements.popover.TL\":\"TL\",\"uiElements.popover.LT\":\"LT\",\"uiElements.popover.LB\":\"LB\",\"uiElements.popover.RT\":\"RT\",\"uiElements.popover.RB\":\"RB\",\"uiElements.popover.BL\":\"BL\",\"uiElements.popover.BR\":\"BR\",\"uiElements.popover.close\":\"Close\",\"uiElements.tooltip.tooltip\":\"Tooltip\",\"uiElements.tooltip.tooltipContent\":\"Tooltip Content\",\"uiElements.tooltip.basicExample\":\"Basic Example\",\"uiElements.tooltip.basicExampleSubTitle\":\"The simplest usage.\",\"uiElements.tooltip.placementTitle\":\"Placement\",\"uiElements.tooltip.placementSubTitle\":\"The ToolTip has 12 placements choice.\",\"uiElements.tooltip.TL\":\"TL\",\"uiElements.tooltip.TR\":\"TR\",\"uiElements.tooltip.LT\":\"LT\",\"uiElements.tooltip.LB\":\"LB\",\"uiElements.tooltip.RT\":\"RT\",\"uiElements.tooltip.RB\":\"RB\",\"uiElements.tooltip.BL\":\"BL\",\"uiElements.tooltip.BR\":\"BR\",\"uiElements.tooltip.bottom\":\"Bottom\",\"uiElements.tooltip.right\":\"Right\",\"uiElements.tooltip.left\":\"Left\",\"uiElements.tooltip.top\":\"Top\",\"uiElements.tooltip.tooltipContentSpan\":\"Tooltip will show when mouse enter.\",\"uiElements.tooltip.contentSpan\":\"Tooltip Content\",\"uiElements.tags.tags\":\"Tags\",\"uiElements.tags.basicExample\":\"Basic Example\",\"uiElements.tags.basicExampleSubTitle\":\"Usage of basic Tag   and it could be closable by set closable property. Closable Tag supports onClose afterClose events.\",\"uiElements.tags.tagOne\":\"Tag 1\",\"uiElements.tags.tagTwo\":\"Tag 2\",\"uiElements.tags.link\":\"Link\",\"uiElements.tags.preventDefault\":\"Prevent Default\",\"uiElements.tags.colorfulTag\":\"Colorful Tag\",\"uiElements.tags.hotTags\":\"Hot Tags\",\"uiElements.tags.hotTagsSubTitle\":\"Select your favourite topics.\",\"uiElements.tags.hots\":\"Hots\",\"uiElements.tags.addRemoveDynamically\":\"Add & Remove Dynamically\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"Generating a set of Tags by array   you can add and remove dynamically. Its based on afterClose event   which will be triggered while the close animation end.\",\"uiElements.tags.newTag\":\"+ New Tag\",\"uiElements.timeline.timeline\":\"Timeline\",\"uiElements.timeline.basicExample\":\"Basic Example\",\"uiElements.timeline.basicTimeline\":\"Basic timeline\",\"uiElements.timeline.lastNode\":\"Last Node\",\"uiElements.timeline.lastNodeContent\":\"When the timeline is incomplete and ongoing   put a ghost node at last. set   pending=  true     or   pending=  a React Element\",\"uiElements.timeline.seeMore\":\"See more\",\"uiElements.timeline.custom\":\"Custom\",\"uiElements.timeline.customContent\":\"Set a node as an icon or other custom element.\",\"uiElements.timeline.colorExample\":\"Color Example\",\"uiElements.timeline.colorExampleContent\":\"Set the color of circles. green means completed or success status   red means warning or error   and blue means ongoing or other default status.\",\"uiElements.timeline.createServiceSite\":\"Create a services site 2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"Solve initial network problems 2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"Network problems being solved 2015-09-01\",\"uiElements.timeline.technicalTesting\":\"Technical testing 2015-09-01\",\"uiElements.dropdown.dropdown\":\"Dropdown\",\"uiElements.dropdown.hoverDropdown\":\"Hover Drop Down\",\"uiElements.dropdown.hoverMe\":\"Hover me\",\"uiElements.dropdown.hoverPlacement\":\"Hover Placement Drop Down\",\"uiElements.dropdown.hoverDisableLink\":\"Hover Drop Down with Disable link\",\"uiElements.dropdown.clickedDropdown\":\"Clicked Drop Down\",\"uiElements.dropdown.buttonDropdown\":\"Button with dropdown menu\",\"uiElements.pagination.pagination\":\"Pagination\",\"uiElements.pagination.basic\":\"Basic\",\"uiElements.pagination.more\":\"More\",\"uiElements.pagination.changer\":\"Changer\",\"uiElements.pagination.jumper\":\"Jumper\",\"uiElements.pagination.miniSize\":\"Mini Size\",\"uiElements.pagination.simpleMode\":\"Simple Mode\",\"uiElements.pagination.controlled\":\"Controlled\",\"uiElements.pagination.totalNumber\":\"Total Number\",\"uiElements.rating.rating\":\"Rating\",\"uiElements.rating.basicExample\":\"Basic Example\",\"uiElements.rating.basicExampleSubTitle\":\"The simplest usage.\",\"uiElements.rating.halfStar\":\"Half star\",\"uiElements.rating.halfStarSubTitle\":\"Support select half star.\",\"uiElements.rating.showCopywriting\":\"Show copywriting\",\"uiElements.rating.showCopywritingSubTitle\":\"Add copywriting in rate components.\",\"uiElements.rating.readOnly\":\"Read only\",\"uiElements.rating.readOnlySubTitle\":\"Read only   cant use mouse to interact.\",\"uiElements.rating.otherCharacter\":\"Other Character\",\"uiElements.rating.otherCharacterSubTitle\":\"Replace the default star to other character like alphabet   digit   iconfont or even Chinese word.\",\"uiElements.tree.tree\":\"Tree\",\"uiElements.tree.basicExample\":\"Basic example\",\"uiElements.tree.basicExampleSubTitle\":\"The most basic usage   tell you how to use checkable   selectable   disabled   defaultExpandKeys   and etc.\",\"uiElements.tree.basicControlledExample\":\"Basic controlled example\",\"uiElements.tree.basicControlledExampleSubTitle\":\"basic controlled example\",\"uiElements.tree.draggableExample\":\"Draggable example\",\"uiElements.tree.draggableExampleSubTitle\":\"Drag treeNode to insert after the other treeNode or insert into the other parent TreeNode.\",\"uiElements.tree.loadAsync\":\"Load data asynchronously\",\"uiElements.tree.loadAsyncSubTitle\":\"To load data asynchronously when click to expand a treeNode.\",\"uiElements.tree.searchableExample\":\"Searchable example\",\"uiElements.tree.searchableExampleSubTitle\":\"Searchable Tree\",\"uiElements.tree.treeWithLine\":\"Tree With Line\",\"shuffle.descriptionOne\":\"Netscape 2.0 ships   introducing Javascript\",\"shuffle.descriptionTwo\":\"Jesse James Garrett releases AJAX spec\",\"shuffle.descriptionThree\":\"jQuery 1.0 released\",\"shuffle.descriptionFour\":\"First underscore.js commit\",\"shuffle.descriptionFive\":\"Backbone.js becomes a thing\",\"shuffle.descriptionSix\":\"Angular 1.0 released\",\"shuffle.descriptionSeven\":\"React is open-sourced; developers rejoice\",\"toggle.list\":\"List\",\"toggle.grid\":\"Grid\",\"toggle.ascending\":\"Ascending\",\"toggle.descending\":\"Descending\",\"toggle.shuffle\":\"Shuffle\",\"toggle.rotate\":\"Rotate\",\"toggle.addItem\":\"Add Item\",\"toggle.removeItem\":\"Remove Item\",\"contactlist.searchContacts\":\"Search Contacts\",\"contactlist.addNewContact\":\"Add New Contact\",\"notes.ChoseColor\":\"Choose a color for your note\",\"notes.addNote\":\"Add New Note\",\"page404.title\":\"404\",\"page404.subTitle\":\"Looks like you got lost\",\"page404.description\":\"The page youre looking for doesnt exist or has been moved.\",\"page404.backButton\":\"BACK HOME\",\"page500.title\":\"500\",\"page500.subTitle\":\"Internal Server Error\",\"page500.description\":\"Something went wrong. Please try again later.\",\"page500.backButton\":\"BACK HOME\",\"page.forgetPassTitle\":\"Isomorphic\",\"page.forgetPassSubTitle\":\"Forgot Password?\",\"page.forgetPassDescription\":\"Enter your email and we send you a reset link.\",\"page.sendRequest\":\"Send request\",\"page.resetPassTitle\":\"Isomorphic\",\"page.resetPassSubTitle\":\"Reset Password\",\"page.resetPassDescription\":\"Enter new password and confirm it.\",\"page.resetPassSave\":\"Save\",\"page.signInTitle\":\"Isomorphic\",\"page.signInRememberMe\":\"Remember me\",\"page.signInButton\":\"Sign in\",\"page.signInPreview\":\"username: demo   password: demodemo   or just click on any button.\",\"page.signInFacebook\":\"Sign in with Facebook\",\"page.signInGooglePlus\":\"Sign in with Google Plus\",\"page.signInAuth0\":\"Sign in with Auth0\",\"page.signInMobile\":\"Sign in with Phone\",\"page.signUpMobile\":\"Sign up with Phone\",\"page.signInForgotPass\":\"Forgot password\",\"page.signInCreateAccount\":\"Create an Isomorphoic account\",\"page.signUpTitle\":\"Isomorphic\",\"page.signUpTermsConditions\":\"I agree with terms and condtions\",\"page.signUpButton\":\"Sign Up\",\"page.signUpFacebook\":\"Sign up with Facebook\",\"page.signUpGooglePlus\":\"Sign up with Google Plus\",\"page.signUpAuth0\":\"Sign Up with Auth0\",\"page.signUpAlreadyAccount\":\"Already have an account? Sign in.\",\"widget.reportswidget.label\":\"Income\",\"widget.reportswidget.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.singleprogresswidget1.label\":\"Marketing\",\"widget.singleprogresswidget2.label\":\"Addvertisement\",\"widget.singleprogresswidget3.label\":\"Consulting\",\"widget.singleprogresswidget4.label\":\"Development\",\"widget.stickerwidget1.number\":\"210\",\"widget.stickerwidget1.text\":\"Unread Email\",\"widget.stickerwidget2.number\":\"1749\",\"widget.stickerwidget2.text\":\"Image Upload\",\"widget.stickerwidget3.number\":\"3024\",\"widget.stickerwidget3.text\":\"Total Message\",\"widget.stickerwidget4.number\":\"54\",\"widget.stickerwidget4.text\":\"Orders Post\",\"widget.salewidget1.label\":\"Income\",\"widget.salewidget1.price\":\"$15000\",\"widget.salewidget1.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.salewidget2.label\":\"Income\",\"widget.salewidget2.price\":\"$15000\",\"widget.salewidget2.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.salewidget3.label\":\"Income\",\"widget.salewidget3.price\":\"$15000\",\"widget.salewidget3.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.salewidget4.label\":\"Income\",\"widget.salewidget4.price\":\"$15000\",\"widget.salewidget4.details\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor\",\"widget.cardwidget1.number\":\"110\",\"widget.cardwidget1.text\":\"New Messages\",\"widget.cardwidget2.number\":\"100%\",\"widget.cardwidget2.text\":\"Volume\",\"widget.cardwidget3.number\":\"137\",\"widget.cardwidget3.text\":\"Achievement\",\"widget.progresswidget1.label\":\"Download\",\"widget.progresswidget1.details\":\"50% Complete\",\"widget.progresswidget2.label\":\"Support\",\"widget.progresswidget2.details\":\"80% Satisfied Customer\",\"widget.progresswidget3.label\":\"Upload\",\"widget.progresswidget3.details\":\"65% Complete\",\"widget.vcardwidget.name\":\"Jhon Doe\",\"widget.vcardwidget.title\":\"Sr. iOS Developer\",\"widget.vcardwidget.description\":\"Lorem ipsum dolor sit amet   consectetur adipisicing elit   sed do eiusmod tempor ammet dolar consectetur adipisicing elit\",\"checkout.billingform.firstname\":\"First Name\",\"checkout.billingform.lastname\":\"Last Name\",\"checkout.billingform.company\":\"Company Name\",\"checkout.billingform.email\":\"Email Address\",\"checkout.billingform.mobile\":\"Mobile No\",\"checkout.billingform.country\":\"Country\",\"checkout.billingform.city\":\"City\",\"checkout.billingform.address\":\"Address\",\"checkout.billingform.addressoptional\":\"Apartment   suite   unit etc. (optional\",\"checkout.billingform.checkbox\":\"Create an account?\",\"antTable.title.image\":\"Image\",\"antTable.title.firstName\":\"First Name\",\"antTable.title.lastName\":\"Last Name\",\"antTable.title.city\":\"City\",\"antTable.title.street\":\"Street\",\"antTable.title.email\":\"Email\",\"antTable.title.dob\":\"DOB\",\"Map.leaflet.basicTitle\":\"Basic Map\",\"Map.leaflet.basicMarkerTitle\":\"Basic Map(With Default Marker\",\"Map.leaflet.leafletCustomMarkerTitle\":\"Basic Map(With Custom Icon Marker)\",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"Basic Map(With Custom Html Marker\",\"Map.leaflet.leafletMarkerClusterTitle\":\"Basic Map(With Marker Cluster\",\"Map.leaflet.leafletRoutingTitle\":\"Basic Map Routing\",\"Component.contacts.noOption\":\"No contact found\",\"email.send\":\"SEND\",\"email.cancel\":\"CANCEL\",\"email.compose\":\"COMPOSE\",\"email.noMessage\":\"Please select a mail to read\",\"themeSwitcher.purchase\":\"PURCHASE NOW\",\"themeSwitcher.settings\":\"Settings\",\"sidebar.selectbox\":\"Select\",\"sidebar.frappeChart\":\"Frappe Charts\",\"topbar.myprofile\":\"My Profile\",\"topbar.help\":\"Help\",\"topbar.logout\":\"Logout\",\"topbar.viewAll\":\"View All\",\"topbar.viewCart\":\"View Cart\",\"topbar.totalPrice\":\"Total Price\",\"Swiper.basic.basicTitle\":\"Basic Slider\",\"Swiper.bullet.bulletTitle\":\"Bullet Pagination\",\"Swiper.progress.progressTitle\":\"Progress Pagination\",\"Swiper.fraction.fractionTitle\":\"Fraction Pagination\",\"Swiper.numbered.numberedTitle\":\"Numbered Pagination\",\"Swiper.scroll.scrollTitle\":\"Scrollbar\",\"Swiper.verticle.verticleTitle\":\"Verticle Slider\",\"Swiper.multiple.multipleGridTitle\":\"Multiple Grid Slider\",\"Swiper.free.freeTitle\":\"Swiper Free Mode\",\"Swiper.multirow.multirowTitle\":\"Multiple row On View\",\"Swiper.cursor.cursorTitle\":\"Slider with Cursor\",\"Swiper.loop.infiniteTitle\":\"Slider with Infinite Loop\",\"Swiper.wheel.wheelTitle\":\"Slider with Mouse Wheel\",\"Swiper.auto.autoPlayTitle\":\"Slider with Autoplay\",\"Swiper.lazy.lazyTitle\":\"Slider with Lazyload\",\"Swiper.custom.customScrollTitle\":\"Custom view with all Naviation\",\"Swiper.custom.basicNavTitle\":\"Basic Naviation\",\"Swiper.custom.buttonNavTitle\":\"Custom Naviation\"}");

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

/***/ "P+y9":
/***/ (function(module, exports) {



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

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "TSG6":
/***/ (function(module, exports) {



/***/ }),

/***/ "TZFR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isServer; });
const isServer = true;

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "UJ2i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return propertiesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("JRQ4");
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
    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GET_ALL_PROPERTIES_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GET_ALL_PROPERTIES_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: action.items,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GET_ALL_PROPERTIES_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: [],
        error: action.error,
        loading: false
      });
    // Get one

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GET_PROPERTY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GET_PROPERTY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GET_PROPERTY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Add

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADD_PROPERTY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADD_PROPERTY_SUCCESS:
      state.items.push(action.item);
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items,
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].ADD_PROPERTY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Update

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].UPDATE_PROPERTY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].UPDATE_PROPERTY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        // items: state.items.map((item) => {
        //     if (item.id === action.item.id) {
        //         return action.item;
        //     }
        //     return item
        // }),
        selectedItem: action.item,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].UPDATE_PROPERTY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });
    // Delete

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DELETE_PROPERTY_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DELETE_PROPERTY_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        items: state.items.filter(item => item.id !== action.propertyId),
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].DELETE_PROPERTY_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GET_PRICE_ITEMS_REQUEST:
      return _objectSpread(_objectSpread({}, state), {}, {
        loading: true
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GET_PRICE_ITEMS_SUCCESS:
      return _objectSpread(_objectSpread({}, state), {}, {
        selectedItem: _objectSpread(_objectSpread({}, state.selectedItem), {}, {
          pricingItems: action.items
        }),
        loading: false
      });

    case _actions__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].GET_PRICE_ITEMS_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        error: action.error,
        loading: false
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "UZv4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zKje");

const actions = {
  CHANGE_THEME: 'CHANGE_THEME',
  SWITCH_ACTIVATION: 'SWITCH_ACTIVATION',
  switchActivation: () => ({
    type: actions.SWITCH_ACTIVATION
  }),
  changeTheme: (attribute, themeName) => {
    const theme = Object(_config__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentTheme */ "b"])(attribute, themeName);

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
/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "X3Th":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const blogActions = {
  GET_ALL_BLOGS_REQUEST: "GET_ALL_BLOGS_REQUEST",
  GET_ALL_BLOGS_SUCCESS: "GET_ALL_BLOGS_SUCCESS",
  GET_ALL_BLOGS_FAILURE: "GET_ALL_BLOGS_FAILURE",
  GET_BLOG_REQUEST: "GET_BLOG_REQUEST",
  GET_BLOG_SUCCESS: "GET_BLOG_SUCCESS",
  GET_BLOG_FAILURE: "GET_BLOG_FAILURE",
  ADD_BLOG_REQUEST: "ADD_BLOG_REQUEST",
  ADD_BLOG_SUCCESS: "ADD_BLOG_SUCCESS",
  ADD_BLOG_FAILURE: "ADD_BLOG_FAILURE",
  UPDATE_BLOG_REQUEST: "UPDATE_BLOG_REQUEST",
  UPDATE_BLOG_SUCCESS: "UPDATE_BLOG_SUCCESS",
  UPDATE_BLOG_FAILURE: "UPDATE_BLOG_FAILURE",
  DELETE_BLOG_REQUEST: "DELETE_BLOG_REQUEST",
  DELETE_BLOG_SUCCESS: "DELETE_BLOG_SUCCESS",
  DELETE_BLOG_FAILURE: "DELETE_BLOG_FAILURE",
  getAllBlogs: () => ({
    type: blogActions.GET_ALL_BLOGS_REQUEST
  }),
  getBlog: blogId => ({
    type: blogActions.GET_BLOG_REQUEST,
    blogId
  }),
  addBlog: newBlog => ({
    type: blogActions.ADD_BLOG_REQUEST,
    blog: newBlog
  }),
  updateBlog: newBlog => ({
    type: blogActions.UPDATE_BLOG_REQUEST,
    blog: newBlog
  }),
  deleteBlog: blogId => ({
    type: blogActions.DELETE_BLOG_REQUEST,
    blogId
  })
};
/* harmony default export */ __webpack_exports__["a"] = (blogActions);

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

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "bVQA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getView; });
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
/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),

/***/ "cBUL":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "eW3l":
/***/ (function(module, exports) {

module.exports = require("qs");

/***/ }),

/***/ "gai2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authReducer; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_authentication_auth_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("vBVF");
/* harmony import */ var _redux_authentication_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8XiI");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let initState = {
  idToken: null,
  profile: null,
  error: null
};

if (false) {}

function authReducer(state = initState, action) {
  switch (action.type) {
    case _redux_authentication_actions__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].LOGIN_REQUEST_SUCCESS:
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace('/admin');
      return _objectSpread(_objectSpread({}, state), {}, {
        idToken: action.token,
        profile: action.profile
      });

    case _redux_authentication_actions__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].LOGOUT_REQUEST_FAILURE:
    case _redux_authentication_actions__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].LOGIN_REQUEST_FAILURE:
      return _objectSpread(_objectSpread({}, state), {}, {
        idToken: null,
        error: action.payload
      });

    case _redux_authentication_actions__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].LOGOUT_REQUEST_SUCCESS:
      next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace('/admin/signin');
      return initState;

    default:
      return state;
  }
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iYBC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rR3O");

const actions = {
  CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',
  ACTIVATE_LANG_MODAL: 'ACTIVATE_LANG_MODAL',
  switchActivation: () => ({
    type: actions.ACTIVATE_LANG_MODAL
  }),
  changeLanguage: language => {
    return {
      type: actions.CHANGE_LANGUAGE,
      language: Object(_config__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentLanguage */ "b"])(language)
    };
  }
};
/* harmony default export */ __webpack_exports__["a"] = (actions);

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ "nuGg":
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "o4UX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/849699bef1cce0bd414a980c7575002a.svg");

/***/ }),

/***/ "o6Kp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (postActions);

/***/ }),

/***/ "olOf":
/***/ (function(module, exports) {



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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "rR3O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentLanguage; });
/* harmony import */ var _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zH+7");
/* harmony import */ var _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("o4UX");
/* harmony import */ var _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("BJG+");
/* harmony import */ var _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("IFJb");
/* harmony import */ var _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("K6uA");
/* harmony import */ var _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("9xqG");






const config = {
  defaultLanguage: _iso_config_language_config__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"],
  options: [{
    languageId: 'english',
    locale: 'en',
    text: 'English',
    icon: _iso_assets_images_flag_uk_svg__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]
  }, {
    languageId: 'chinese',
    locale: 'zh',
    text: 'Chinese',
    icon: _iso_assets_images_flag_china_svg__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"]
  }, {
    languageId: 'spanish',
    locale: 'es',
    text: 'Spanish',
    icon: _iso_assets_images_flag_spain_svg__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  }, {
    languageId: 'french',
    locale: 'fr',
    text: 'French',
    icon: _iso_assets_images_flag_france_svg__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  }, {
    languageId: 'italian',
    locale: 'it',
    text: 'Italian',
    icon: _iso_assets_images_flag_italy_svg__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
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
/* harmony default export */ __webpack_exports__["a"] = (config);

/***/ }),

/***/ "rdmt":
/***/ (function(module) {

module.exports = JSON.parse("{\"sidebar.swiperslider\":\"滑塊\",\"sidebar.email\":\"电子邮件\",\"sidebar.chat\":\"聊\",\"sidebar.ecommerce\":\"电子商务\",\"sidebar.shop\":\"店\",\"sidebar.cart\":\"大车\",\"sidebar.checkout\":\"查看\",\"sidebar.cards\":\"牌\",\"sidebar.maps\":\"地图\",\"sidebar.googleMap\":\"谷歌地图\",\"sidebar.leafletMap\":\"传单地图\",\"sidebar.calendar\":\"日历\",\"sidebar.notes\":\"笔记\",\"sidebar.todos\":\"待办事项\",\"sidebar.contacts\":\"往来\",\"sidebar.shuffle\":\"拖曳\",\"sidebar.charts\":\"图表\",\"sidebar.googleCharts\":\"Google购物车\",\"sidebar.recharts\":\"重新图表\",\"sidebar.reactVis\":\"反应可见\",\"sidebar.reactChart2\":\"反应 - 图2\",\"sidebar.reactTrend\":\"反应-趋势\",\"sidebar.eChart\":\"Echart\",\"sidebar.forms\":\"形式\",\"sidebar.input\":\"输入\",\"sidebar.editor\":\"编辑\",\"sidebar.formsWithValidation\":\"验证形式\",\"sidebar.progress\":\"进展\",\"sidebar.button\":\"按键\",\"sidebar.tab\":\"标签\",\"sidebar.checkbox\":\"复选框\",\"sidebar.radiobox\":\"收音机盒\",\"sidebar.transfer\":\"转让\",\"sidebar.autocomplete\":\"自动完成\",\"sidebar.boxOptions\":\"框选项\",\"sidebar.uiElements\":\"UI元素\",\"sidebar.badge\":\"徽章\",\"sidebar.card2\":\"卡\",\"sidebar.corusel\":\"狂欢游行\",\"sidebar.collapse\":\"坍方\",\"sidebar.popover\":\"流行\",\"sidebar.tooltip\":\"提示\",\"sidebar.tag\":\"标签\",\"sidebar.timeline\":\"时间线\",\"sidebar.dropdown\":\"落下\",\"sidebar.pagination\":\"分页\",\"sidebar.rating\":\"评分\",\"sidebar.tree\":\"树\",\"sidebar.advancedElements\":\"高级元素\",\"sidebar.reactDates\":\"反应日期\",\"sidebar.codeMirror\":\"代码镜\",\"sidebar.uppy\":\"Uppy上传器\",\"sidebar.dropzone\":\"拖放区\",\"sidebar.feedback\":\"反馈\",\"sidebar.alert\":\"警报\",\"sidebar.modal\":\"语气\",\"sidebar.message\":\"信息\",\"sidebar.notification\":\"通知\",\"sidebar.popConfirm\":\"流行确认\",\"sidebar.spin\":\"纺\",\"sidebar.tables\":\"表\",\"sidebar.antTables\":\"蚂蚁表\",\"sidebar.pages\":\"网页\",\"sidebar.500\":\"500\",\"sidebar.404\":\"404\",\"sidebar.signIn\":\"签到\",\"sidebar.signUp\":\"注册\",\"sidebar.forgotPw\":\"忘记密码\",\"sidebar.resetPw\":\"重置密码\",\"sidebar.invoice\":\"发票\",\"sidebar.menuLevels\":\"菜单级别\",\"sidebar.item1\":\"项目1\",\"sidebar.item2\":\"项目2\",\"sidebar.option1\":\"选项1\",\"sidebar.option2\":\"选项2\",\"sidebar.option3\":\"选项3\",\"sidebar.option4\":\"选项4\",\"sidebar.blankPage\":\"空白页\",\"sidebar.githubSearch\":\"Github搜索\",\"sidebar.youtubeSearch\":\"Youtube搜索\",\"languageSwitcher.label\":\"改变语言\",\"themeSwitcher\":\"主题切换器\",\"themeSwitcher.Sidebar\":\"侧边栏\",\"themeSwitcher.Topbar\":\"顶栏\",\"themeSwitcher.Background\":\"背景\",\"feedback.alert.basicTitle\":\"基本标题\",\"feedback.alert.successText\":\"成功文本\",\"feedback.alert.infoText\":\"信息文本\",\"feedback.alert.warningText\":\"警告文字\",\"feedback.alert.errorText\":\"错误文本\",\"feedback.alert.closableAlertType\":\"可关闭警报类型\",\"feedback.alert.iconAlertType\":\"图标警报类型\",\"feedback.alert.iconInfoAlertType\":\"图标信息警报类型\",\"feedback.alert.successTips\":\"成功提示\",\"feedback.alert.successTipsDescription\":\"关于成功写作的详细描述和建议。\",\"feedback.alert.informationTips\":\"信息备注\",\"feedback.alert.informationDescription\":\"关于文案的附加说明和信息。\",\"feedback.alert.warningTips\":\"警告\",\"feedback.alert.warningDescription\":\"这是关于文案的警告通知。\",\"feedback.alert.errorTips\":\"错误\",\"feedback.alert.errorDescription\":\"这是关于文案的错误信息。\",\"feedback.alert.modalTitle\":\"具有自定义页脚的模态\",\"feedback.alert.modalSubTitle\":\"基本模态对话框\",\"feedback.alert.successTitle\":\"成功\",\"feedback.alert.infoTitle\":\"信息\",\"feedback.alert.errorTitle\":\"错误\",\"feedback.alert.warningTitle\":\"警告\",\"feedback.alert.modalBlockTitle\":\"语气\",\"feedback.alert.confirmationModalDialogue\":\"确认模态对话框\",\"feedback.alert.simpleModalDialogue\":\"简单的模态对话框\",\"feedback.alert.message\":\"信息\",\"feedback.alert.normalMessageTitle\":\"正常讯息\",\"feedback.alert.normalMessageSubtitle\":\"正常消息作为反馈。\",\"feedback.alert.displayMessage\":\"显示正常消息\",\"feedback.alert.displayOtherTypeMessageTitle\":\"其他类型的消息\",\"feedback.alert.displayOtherTypeMessageSubTitle\":\"消息的成功，错误和警告类型。\",\"feedback.alert.customizeDurationTitle\":\"自定义持续时间\",\"feedback.alert.customizeDurationSubTitle\":\"自定义消息显示持续时间从默认值1.5s到10s。\",\"feedback.alert.customizeDurationButton\":\"定制显示持续时间\",\"feedback.alert.messageLoadingTitle\":\"加载消息\",\"feedback.alert.messageLoadingSubTitle\":\"显示一个全局加载指示器，它自身被异步地关闭。\",\"feedback.alert.displayLoadIndicator\":\"显示装载指示灯\",\"feedback.alert.notification\":\"通知\",\"feedback.alert.notificationBasicTitle\":\"基本\",\"feedback.alert.notificationBasicSubTitle\":\"4.5s后关闭通知框的最简单的用法。\",\"feedback.alert.notificationBasicDescription\":\"打开通知框\",\"feedback.alert.notificationDurationTitle\":\"通知框关闭之后的时间\",\"feedback.alert.notificationDurationSubTitle\":\"持续时间可用于指定通知保持打开的时间。持续时间过后，通知自动关闭。如果未指定，默认值为4.5秒。如果将值设置为0，则通知框将永远不会自动关闭。\",\"feedback.alert.notificationwithIconTitle\":\"通知图标\",\"feedback.alert.notificationwithIconSubTitle\":\"具有左侧图标的通知框。\",\"feedback.alert.notificationwithCustomIconTitle\":\"通知与自定义图标\",\"feedback.alert.notificationwithCustomIconSubTitle\":\"正常消息作为反馈。\",\"feedback.alert.notificationwithCustomButtonTitle\":\"通知使用自定义按钮\",\"feedback.alert.notificationwithCustomButtonSubTitle\":\"正常消息作为反馈。\",\"feedback.alert.popConfirm\":\"流行确认\",\"feedback.alert.popConfirm.basicTitle\":\"基本确认\",\"feedback.alert.popConfirm.basicSubTitle\":\"的基本例子。\",\"feedback.alert.popConfirm.delete\":\"删除\",\"feedback.alert.popConfirm.notiWithIconTitle\":\"通知与自定义图标\",\"feedback.alert.popConfirm.notiWithIconSubTitle\":\"正常消息作为反馈。\",\"feedback.alert.popConfirm.TL\":\"TL\",\"feedback.alert.popConfirm.top\":\"最佳\",\"feedback.alert.popConfirm.TR\":\"TR\",\"feedback.alert.popConfirm.LT\":\"LT\",\"feedback.alert.popConfirm.left\":\"剩下\",\"feedback.alert.popConfirm.LB\":\"磅\",\"feedback.alert.popConfirm.RT\":\"RT\",\"feedback.alert.popConfirm.right\":\"对\",\"feedback.alert.popConfirm.RB\":\"RB\",\"feedback.alert.popConfirm.Bl\":\"BL\",\"feedback.alert.popConfirm.bottom\":\"底部\",\"feedback.alert.popConfirm.BR\":\"BR\",\"feedback.alert.spin\":\"纺\",\"feedback.alert.spin.basicTitle\":\"尺寸旋转\",\"feedback.alert.spin.background\":\"旋转背景\",\"feedback.alert.spin.backgroundDescription\":\"旋转背景描述\",\"feedback.alert.spin.loadingState\":\"装载状态：\",\"feedback.alert.spin.alertTitle\":\"提醒消息标题\",\"feedback.alert.spin.alertDescription\":\"有关此警报的上下文的更多详细信息。\",\"forms.input.header\":\"输入\",\"forms.input.basicTitle\":\"基本用法\",\"forms.input.basicSubTitle\":\"基本使用示例。\",\"forms.input.variationsTitle\":\"三种尺寸的输入\",\"forms.input.variationsSubtitle\":\"输入框有三种尺寸：大（42像素），默认（35像素）和小（30像素）。注意：在表格内部，只使用大尺寸。\",\"forms.input.groupTitle\":\"输入组\",\"forms.input.groupSubTitle\":\"Input.Group示例注意：您不需要Col来控制紧凑模式下的宽度。\",\"forms.input.autoSizingTitle\":\"自动调整高度以适应内容\",\"forms.input.autoSizingSubTitle\":\"对于textarea类型的输入，autosize prop可以根据内容自动调整高度。可以提供一个选项对象来自动调整，以指定textarea将自动调整的最小和最大行数。\",\"forms.input.prePostTabTitle\":\"前  后选项卡\",\"forms.input.prePostTabSubTitle\":\"使用前＆amp;帖子标签示例..\",\"forms.input.textAreaTitle\":\"多行文本\",\"forms.input.textAreaSubTitle\":\"对于多行用户输入案例，可以使用类型prop具有textarea值的输入。\",\"forms.input.searchTitle\":\"搜索\",\"forms.input.searchSubTitle\":\"通过使用搜索按钮对标准输入进行分组来创建搜索框的示例\",\"forms.editor.header\":\"编辑\",\"forms.formsWithValidation.header\":\"定制验证表\",\"forms.formsWithValidation.failLabel\":\"失败\",\"forms.formsWithValidation.failHelp\":\"应该是数字＆amp;字母\",\"forms.formsWithValidation.warningLabel\":\"警告\",\"forms.formsWithValidation.ValidatingLabel\":\"证实\",\"forms.formsWithValidation.ValidatingHelp\":\"信息正在验证...\",\"forms.formsWithValidation.SuccessLabel\":\"成功\",\"forms.formsWithValidation.WarninghasFeedbackLabel\":\"警告\",\"forms.formsWithValidation.FailhasFeedbackLabel\":\"失败\",\"forms.formsWithValidation.FailhasFeedbackHelp\":\"应该是数字＆amp;字母\",\"forms.progressBar.header\":\"进度条\",\"forms.progressBar.standardTitle\":\"进度条\",\"forms.progressBar.standardSubTitle\":\"标准进度条。\",\"forms.progressBar.circularTitle\":\"循环进度栏\",\"forms.progressBar.circularSubTitle\":\"一个循环进度条。\",\"forms.progressBar.miniTitle\":\"迷你尺寸进度条\",\"forms.progressBar.miniSubTitle\":\"适合狭窄的地区。\",\"forms.progressBar.miniCircularTitle\":\"一个较小的圆形进度条。\",\"forms.progressBar.dynamicCircularTitle\":\"动态循环进度条\",\"forms.progressBar.dynamicCircularSubTitle\":\"动态进度条更好。\",\"forms.progressBar.customTextTitle\":\"自定义文本格式\",\"forms.progressBar.customTextSubTitle\":\"您可以通过设置格式自定义文本格式。\",\"forms.progressBar.dashboardTitle\":\"仪表板\",\"forms.progressBar.dashboardSubTitle\":\"仪表板风格的进步。\",\"forms.button.header\":\"纽扣\",\"forms.button.simpleButton\":\"按钮类型\",\"forms.button.iconButton\":\"按钮图标\",\"forms.button.simpleButtonPrimaryText\":\"主\",\"forms.button.simpleButtonDefaultText\":\"默认\",\"forms.button.simpleButtonDashedText\":\"虚线\",\"forms.button.simpleButtonDangerText\":\"危险\",\"forms.button.iconPrimaryButton\":\"搜索\",\"forms.button.iconSimpleButton\":\"搜索\",\"forms.button.iconCirculerButton\":\"搜索\",\"forms.button.iconDashedButton\":\"搜索\",\"forms.button.SizedButton\":\"按钮大小\",\"forms.button.DisabledButton\":\"按钮禁用\",\"forms.button.LoadingButton\":\"按钮加载\",\"forms.button.MultipleButton\":\"多重按钮\",\"forms.button.groupButton\":\"按钮组\",\"forms.Tabs.header\":\"标签\",\"forms.Tabs.simpleTabTitle\":\"搜索\",\"forms.Tabs.simpleTabSubTitle\":\"禁用标签\",\"forms.Tabs.iconTabTitle\":\"图标标签\",\"forms.Tabs.miniTabTitle\":\"迷你标签\",\"forms.Tabs.extraTabTitle\":\"额外动作标签\",\"forms.Tabs.TabpositionTitle\":\"位置\",\"forms.Tabs.TabpositionSubTitle\":\"标签的位置：左，右，上或下\",\"forms.Tabs.cardTitle\":\"卡类型选项卡\",\"forms.Tabs.editableTitle\":\"添加和关闭选项卡\",\"forms.Tabs.verticalTitle\":\"垂直类型标签\",\"forms.Tabs.basicTitle\":\"基本标签\",\"forms.checkbox.header\":\"复选框\",\"forms.checkbox.basicTitle\":\"基本复选框\",\"forms.checkbox.basicSubTitle\":\"复选框的基本用法\",\"forms.checkbox.groupTitle\":\"复选框组\",\"forms.checkbox.groupSubTitle\":\"从数组生成一组复选框。禁用此功能可禁用复选框。\",\"forms.checkbox.groupCheckTitle\":\"复选框组\",\"forms.checkbox.groupCheckSubTitle\":\"从数组生成一组复选框。禁用此功能可禁用复选框。\",\"forms.radio.header\":\"无线电\",\"forms.radio.simpleTitle\":\"基本电台\",\"forms.radio.simpleSubTitle\":\"最简单的用法禁用禁用广播。\",\"forms.radio.groupTitle\":\"垂直无线电组\",\"forms.radio.groupSubTitle\":\"垂直无线电组，更多收音机。\",\"forms.radio.groupSecondTitle\":\"RadioGroup中\",\"forms.radio.groupSecondSubTitle\":\"一组无线电组件。\",\"forms.radio.groupThirdTitle\":\"RadioGroup中\",\"forms.radio.groupThirdSubTitle\":\"一组无线电组件。\",\"forms.transfer.header\":\"转让\",\"forms.transfer.SubTitle\":\"使用搜索框转移。\",\"forms.transfer.Title\":\"搜索\",\"forms.autocomplete.header\":\"自动完成\",\"forms.autocomplete.simpleTitle\":\"定制\",\"forms.autocomplete.simpleSubTitle\":\"您可以将AutoComplete.Option作为AutoComplete的子代码，而不是使用dataSource\",\"forms.autocomplete.customizeTitle\":\"自定义输入组件\",\"forms.autocomplete.customizeSubTitle\":\"自定义输入组件\",\"uiElements.badge.badge\":\"徽章\",\"uiElements.badge.basicExample\":\"基本例子\",\"uiElements.badge.basicExampleSubTitle\":\"最简单的用法当count为0时，徽章将被隐藏，但是我们可以使用showZero来显示。\",\"uiElements.badge.overflowCount\":\"溢出计数\",\"uiElements.badge.overflowCountSubTitle\":\"当count大于overflowCount时，会显示OverflowCount。 overflowCount的默认值为99。\",\"uiElements.badge.status\":\"状态\",\"uiElements.badge.statusSubTitle\":\"独立徽章与状态。\",\"uiElements.badge.success\":\"成功\",\"uiElements.badge.error\":\"错误\",\"uiElements.badge.default\":\"默认\",\"uiElements.badge.processing\":\"处理\",\"uiElements.badge.warning\":\"警告\",\"uiElements.badge.redBadge\":\"红色徽章\",\"uiElements.badge.redBadgeSubTitle\":\"这只会显示一个红色的徽章，没有特定的数字。\",\"uiElements.badge.linkSomething\":\"链接一些东西\",\"uiElements.cards.cards\":\"牌\",\"uiElements.cards.basicCard\":\"基本卡\",\"uiElements.cards.basicCardSubTitle\":\"包含标题，内容和额外角落内容的基本卡。\",\"uiElements.cards.more\":\"更多\",\"uiElements.cards.cardTitle\":\"卡标题\",\"uiElements.cards.cardContent\":\"卡内容\",\"uiElements.cards.lorem\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor incididunt ut labore et dolore magna aliqua。 Ut enim ad minim veniam，quis nostrud exerciseitation ullamco laboris nisi ut aliquip ex ea commodo因此。\",\"uiElements.cards.noBorder\":\"没有边界\",\"uiElements.cards.noBorderSubTitle\":\"在灰色背景上的无边界的卡。\",\"uiElements.cards.gridCard\":\"网格卡\",\"uiElements.cards.gridCardSubTitle\":\"卡通常在概览页面中与网格布局配合使用。\",\"uiElements.cards.loadingCard\":\"装卡\",\"uiElements.cards.loadingCardSubTitle\":\"显示加载指示符，同时正在取出卡的内容。\",\"uiElements.cards.whateverContent\":\"无论内容\",\"uiElements.cards.customizedContentTitle\":\"定制内容\",\"uiElements.cards.customizedContent\":\"显示加载指示符，同时正在取出卡的内容。\",\"uiElements.cards.europeStreetBeat\":\"欧洲街拍\",\"uiElements.cards.instagram\":\"www.instagram.com\",\"uiElements.carousel.carousel\":\"狂欢游行\",\"uiElements.carousel.verticalCarousel\":\"垂直旋转木马\",\"uiElements.carousel.verticalCarouselSubTitle\":\"垂直分页。使用  vertical =true\",\"uiElements.carousel.basicCarousel\":\"基本转盘\",\"uiElements.carousel.basicCarouselSubTitle\":\"基本用法\",\"uiElements.carousel.fadeInTransition\":\"淡入淡出\",\"uiElements.carousel.fadeInTransitionSubTitle\":\"幻灯片使用淡入淡出。   效果= 淡入\",\"uiElements.carousel.scrollAutomatically\":\"自动滚动\",\"uiElements.carousel.scrollAutomaticallySubTitle\":\"滚动到下一张卡  图片的时间。自动播放\",\"uiElements.collapse.collapse\":\"坍方\",\"uiElements.collapse.collapseSubTitle\":\"一次可以扩展多个面板，在这种情况下，第一个面板被初始化为活动状态。使用  defaultActiveKey =   [keyNum]\",\"uiElements.collapse.text\":\"狗是一种驯养动物。以其忠诚和忠诚而闻名，可以作为世界各地许多家庭的欢迎客人。\",\"uiElements.collapse.headerOne\":\"这是面板标题1\",\"uiElements.collapse.headerTwo\":\"这是面板标题2\",\"uiElements.collapse.headerThree\":\"这是面板标题3\",\"uiElements.collapse.headerNested\":\"这是面板嵌套面板\",\"uiElements.collapse.nestedExample\":\"嵌套示例\",\"uiElements.collapse.nestedExampleSubTitle\":\"折叠嵌套在折叠中。\",\"uiElements.collapse.borderlessExample\":\"无边界的例子\",\"uiElements.collapse.borderlessExampleSubTitle\":\"无边界风格的折叠。使用  bordered =   false\",\"uiElements.collapse.accordion\":\"手风琴\",\"uiElements.collapse.accordionSubTitle\":\"手风琴模式，一次只能扩展一个面板。默认情况下，第一个面板将被扩展。使用手风琴\",\"uiElements.popover.popover\":\"酥料饼\",\"uiElements.popover.basicExample\":\"基本例子\",\"uiElements.popover.basicExampleSubTitle\":\"最基本的例子。浮动层的大小取决于内容区域。\",\"uiElements.popover.hoverMe\":\"悬停我\",\"uiElements.popover.title\":\"标题\",\"uiElements.popover.titleTrigger\":\"三种触发方式\",\"uiElements.popover.titleTriggerSubTitle\":\"鼠标点击，对焦和移动。\",\"uiElements.popover.focusMe\":\"聚焦我\",\"uiElements.popover.clickMe\":\"点击我\",\"uiElements.popover.placement\":\"放置\",\"uiElements.popover.placementSubTitle\":\"有12个放置选项可用。\",\"uiElements.popover.top\":\"最佳\",\"uiElements.popover.topLeft\":\"左上角\",\"uiElements.popover.topRight\":\"右上\",\"uiElements.popover.leftTop\":\"左上\",\"uiElements.popover.left\":\"剩下\",\"uiElements.popover.leftBottom\":\"左下\",\"uiElements.popover.rightTop\":\"右上\",\"uiElements.popover.right\":\"对\",\"uiElements.popover.bottom\":\"底部\",\"uiElements.popover.bottomLeft\":\"左下方\",\"uiElements.popover.bottomRight\":\"右下\",\"uiElements.popover.boxTitle\":\"控制对话框的关闭\",\"uiElements.popover.boxSubTitle\":\"使用可见支柱来控制显卡的显示。\",\"uiElements.popover.TR\":\"TR\",\"uiElements.popover.TL\":\"TL\",\"uiElements.popover.LT\":\"LT\",\"uiElements.popover.LB\":\"磅\",\"uiElements.popover.RT\":\"RT\",\"uiElements.popover.RB\":\"RB\",\"uiElements.popover.BL\":\"BL\",\"uiElements.popover.BR\":\"BR\",\"uiElements.popover.close\":\"关\",\"uiElements.tooltip.tooltip\":\"提示\",\"uiElements.tooltip.tooltipContent\":\"工具提示内容\",\"uiElements.tooltip.basicExample\":\"基本例子\",\"uiElements.tooltip.basicExampleSubTitle\":\"最简单的用法\",\"uiElements.tooltip.placementTitle\":\"放置\",\"uiElements.tooltip.placementSubTitle\":\"工具提示有12个布局选择。\",\"uiElements.tooltip.TL\":\"TL\",\"uiElements.tooltip.TR\":\"TR\",\"uiElements.tooltip.LT\":\"LT\",\"uiElements.tooltip.LB\":\"磅\",\"uiElements.tooltip.RT\":\"RT\",\"uiElements.tooltip.RB\":\"RB\",\"uiElements.tooltip.BL\":\"BL\",\"uiElements.tooltip.BR\":\"BR\",\"uiElements.tooltip.bottom\":\"底部\",\"uiElements.tooltip.right\":\"对\",\"uiElements.tooltip.left\":\"剩下\",\"uiElements.tooltip.top\":\"最佳\",\"uiElements.tooltip.tooltipContentSpan\":\"鼠标进入时会显示工具提示。\",\"uiElements.tooltip.contentSpan\":\"工具提示内容\",\"uiElements.tags.tags\":\"标签\",\"uiElements.tags.basicExample\":\"基本例子\",\"uiElements.tags.basicExampleSubTitle\":\"使用基本标签，它可以通过set closable属性来关闭。关闭标签支持onClose afterClose事件。\",\"uiElements.tags.tagOne\":\"标签1\",\"uiElements.tags.tagTwo\":\"标签2\",\"uiElements.tags.link\":\"链接\",\"uiElements.tags.preventDefault\":\"防止默认\",\"uiElements.tags.colorfulTag\":\"多彩标签\",\"uiElements.tags.hotTags\":\"热门标签\",\"uiElements.tags.hotTagsSubTitle\":\"选择您最喜欢的主题。\",\"uiElements.tags.hots\":\"热门活动：\",\"uiElements.tags.addRemoveDynamically\":\"动态添加和删除\",\"uiElements.tags.addRemoveDynamicallySubTitle\":\"通过数组生成一组标签，可以动态添加和删除。它基于afterClose事件，这将在关闭动画结束时触发。\",\"uiElements.tags.newTag\":\"+新标签\",\"uiElements.timeline.timeline\":\"时间线\",\"uiElements.timeline.basicExample\":\"基本例子\",\"uiElements.timeline.basicTimeline\":\"基本时间表\",\"uiElements.timeline.lastNode\":\"上一个节点\",\"uiElements.timeline.lastNodeContent\":\"当时间轴不完整和持续时，最后放一个鬼节点。 set   pending =   true    或  pending =   a React Element\",\"uiElements.timeline.seeMore\":\"查看更多\",\"uiElements.timeline.custom\":\"习惯\",\"uiElements.timeline.customContent\":\"将节点设置为图标或其他自定义元素。\",\"uiElements.timeline.colorExample\":\"颜色示例\",\"uiElements.timeline.colorExampleContent\":\"设置圈子的颜色。绿色表示完成或成功状态，红色表示警告或错误，蓝色表示正在进行或其他默认状态。\",\"uiElements.timeline.createServiceSite\":\"创建服务网站2015-09-01\",\"uiElements.timeline.solveInitialNetwork\":\"解决初始网络问题2015-09-01\",\"uiElements.timeline.networkProblemSolved\":\"网络问题正在解决2015-09-01\",\"uiElements.timeline.technicalTesting\":\"技术测试2015-09-01\",\"uiElements.dropdown.dropdown\":\"落下\",\"uiElements.dropdown.hoverDropdown\":\"悬停下拉\",\"uiElements.dropdown.hoverMe\":\"悬停我\",\"uiElements.dropdown.hoverPlacement\":\"悬停放置下拉\",\"uiElements.dropdown.hoverDisableLink\":\"悬停下拉与禁用链接\",\"uiElements.dropdown.clickedDropdown\":\"点击下拉\",\"uiElements.dropdown.buttonDropdown\":\"按钮与下拉菜单\",\"uiElements.pagination.pagination\":\"分页\",\"uiElements.pagination.basic\":\"基本\",\"uiElements.pagination.more\":\"更多\",\"uiElements.pagination.changer\":\"换\",\"uiElements.pagination.jumper\":\"跨接器\",\"uiElements.pagination.miniSize\":\"迷你尺寸\",\"uiElements.pagination.simpleMode\":\"简单模式\",\"uiElements.pagination.controlled\":\"受控\",\"uiElements.pagination.totalNumber\":\"总数\",\"uiElements.rating.rating\":\"评分\",\"uiElements.rating.basicExample\":\"基本例子\",\"uiElements.rating.basicExampleSubTitle\":\"最简单的用法\",\"uiElements.rating.halfStar\":\"半星\",\"uiElements.rating.halfStarSubTitle\":\"支持选择半星。\",\"uiElements.rating.showCopywriting\":\"显示文案\",\"uiElements.rating.showCopywritingSubTitle\":\"以速率组件添加文案。\",\"uiElements.rating.readOnly\":\"只读\",\"uiElements.rating.readOnlySubTitle\":\"只读，不能使用鼠标进行交互。\",\"uiElements.rating.otherCharacter\":\"其他性格\",\"uiElements.rating.otherCharacterSubTitle\":\"将默认明星替换为其他字符，如字母，数字，iconfont甚至中文字。\",\"uiElements.tree.tree\":\"树\",\"uiElements.tree.basicExample\":\"基本例子\",\"uiElements.tree.basicExampleSubTitle\":\"最基本的用法，告诉你如何使用可检查，可选择，禁用，defaultExpandKeys等。\",\"uiElements.tree.basicControlledExample\":\"基本控制示例\",\"uiElements.tree.basicControlledExampleSubTitle\":\"基本控制示例\",\"uiElements.tree.draggableExample\":\"可拖曳的例子\",\"uiElements.tree.draggableExampleSubTitle\":\"拖动treeNode插入另一个treeNode或插入到另一个父TreeNode中。\",\"uiElements.tree.loadAsync\":\"异步加载数据\",\"uiElements.tree.loadAsyncSubTitle\":\"单击以展开treeNode时异步加载数据。\",\"uiElements.tree.searchableExample\":\"可搜索的例子\",\"uiElements.tree.searchableExampleSubTitle\":\"可搜索的树\",\"uiElements.tree.treeWithLine\":\"树与线\",\"shuffle.descriptionOne\":\"Netscape 2.0发布，引入Javascript\",\"shuffle.descriptionTwo\":\"Jesse James Garrett发布了AJAX规范\",\"shuffle.descriptionThree\":\"jQuery 1.0发布\",\"shuffle.descriptionFour\":\"首先下划线\",\"shuffle.descriptionFive\":\"Backbone.js成为一件事情\",\"shuffle.descriptionSix\":\"角度1.0发布\",\"shuffle.descriptionSeven\":\"反应是开源的开发商高兴\",\"toggle.list\":\"名单\",\"toggle.grid\":\"格\",\"toggle.ascending\":\"上升\",\"toggle.descending\":\"降序\",\"toggle.shuffle\":\"拖曳\",\"toggle.rotate\":\"旋转\",\"toggle.addItem\":\"新增项目\",\"toggle.removeItem\":\"除去项目\",\"contactlist.searchContacts\":\"搜索联系人\",\"contactlist.addNewContact\":\"添加新联系人\",\"notes.ChoseColor\":\"为您的笔记选择一种颜色\",\"notes.addNote\":\"添加新注\",\"page404.title\":\"404\",\"page404.subTitle\":\"看起来你已经迷路了\",\"page404.description\":\"您正在寻找的页面不存在或已被移动。\",\"page404.backButton\":\"回家\",\"page500.title\":\"500\",\"page500.subTitle\":\"内部服务器错误\",\"page500.description\":\"出了些问题。请再试一次信。\",\"page500.backButton\":\"回家\",\"page.forgetPassTitle\":\"同构\",\"page.forgetPassSubTitle\":\"忘记密码？\",\"page.forgetPassDescription\":\"输入您的电子邮件，我们向您发送重置链接。\",\"page.sendRequest\":\"发送请求\",\"page.resetPassTitle\":\"同构\",\"page.resetPassSubTitle\":\"重设密码\",\"page.resetPassDescription\":\"输入新密码并进行确认。\",\"page.resetPassSave\":\"保存\",\"page.signInTitle\":\"同构\",\"page.signInRememberMe\":\"记住我\",\"page.signInButton\":\"签到\",\"page.signInPreview\":\"用户名：demo，密码：demodemo，或者点击任意按钮。\",\"page.signInFacebook\":\"用Facebook登录\",\"page.signInGooglePlus\":\"使用Google Plus登录\",\"page.signInAuth0\":\"用Auth0登录\",\"page.signInForgotPass\":\"忘记密码\",\"page.signInCreateAccount\":\"创建一个异构帐户\",\"page.signUpTitle\":\"同构\",\"page.signUpTermsConditions\":\"我同意条款和条件\",\"page.signUpButton\":\"注册\",\"page.signUpFacebook\":\"用Facebook注册\",\"page.signUpGooglePlus\":\"用Google Plus注册\",\"page.signUpAuth0\":\"注册Auth0\",\"page.signUpAlreadyAccount\":\"已经有账户？签到。\",\"widget.reportswidget.label\":\"收入\",\"widget.reportswidget.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.singleprogresswidget1.label\":\"营销\",\"widget.singleprogresswidget2.label\":\"Addvertisement\",\"widget.singleprogresswidget3.label\":\"咨询\",\"widget.singleprogresswidget4.label\":\"发展\",\"widget.stickerwidget1.number\":\"210\",\"widget.stickerwidget1.text\":\"未读电子邮件\",\"widget.stickerwidget2.number\":\"1749\",\"widget.stickerwidget2.text\":\"图片上传\",\"widget.stickerwidget3.number\":\"3024\",\"widget.stickerwidget3.text\":\"总信息\",\"widget.stickerwidget4.number\":\"54\",\"widget.stickerwidget4.text\":\"订单发布\",\"widget.salewidget1.label\":\"收入\",\"widget.salewidget1.price\":\"$ 15000\",\"widget.salewidget1.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.salewidget2.label\":\"收入\",\"widget.salewidget2.price\":\"$ 15000\",\"widget.salewidget2.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.salewidget3.label\":\"收入\",\"widget.salewidget3.price\":\"$ 15000\",\"widget.salewidget3.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.salewidget4.label\":\"收入\",\"widget.salewidget4.price\":\"$ 15000\",\"widget.salewidget4.details\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor\",\"widget.cardwidget1.number\":\"110\",\"widget.cardwidget1.text\":\"新消息\",\"widget.cardwidget2.number\":\"100％\",\"widget.cardwidget2.text\":\"卷\",\"widget.cardwidget3.number\":\"137\",\"widget.cardwidget3.text\":\"成就\",\"widget.progresswidget1.label\":\"下载\",\"widget.progresswidget1.details\":\"50％完成\",\"widget.progresswidget2.label\":\"支持\",\"widget.progresswidget2.details\":\"80％满意客户\",\"widget.progresswidget3.label\":\"上传\",\"widget.progresswidget3.details\":\"65％完成\",\"widget.vcardwidget.name\":\"Jhon Doe\",\"widget.vcardwidget.title\":\"高级iOS开发人员\",\"widget.vcardwidget.description\":\"Lorem ipsum dolor sit amet，consectetur adipisicing elit，sed do eiusmod tempor ammet dolar consectetur adipisicing elit\",\"checkout.billingform.firstname\":\"名字\",\"checkout.billingform.lastname\":\"姓\",\"checkout.billingform.company\":\"公司名\",\"checkout.billingform.email\":\"电子邮件地址\",\"checkout.billingform.mobile\":\"手机号码\",\"checkout.billingform.country\":\"国家\",\"checkout.billingform.city\":\"市\",\"checkout.billingform.address\":\"地址\",\"checkout.billingform.addressoptional\":\"公寓，套房，单位等（可选）\",\"checkout.billingform.checkbox\":\"创建一个帐户？\",\"antTable.title.image\":\"图片\",\"antTable.title.firstName\":\"名字\",\"antTable.title.lastName\":\"姓\",\"antTable.title.city\":\"市\",\"antTable.title.street\":\"街\",\"antTable.title.email\":\"电子邮件\",\"antTable.title.dob\":\"DOB\",\"Map.leaflet.basicTitle\":\"基本地图\",\"Map.leaflet.basicMarkerTitle\":\"基本地图（带默认标记）\",\"Map.leaflet.leafletCustomMarkerTitle\":\"基本地图（使用自定义图标标记）\",\"Map.leaflet.leafletCustomHtmlMarkerTitle\":\"基本地图（使用自定义Html标记）\",\"Map.leaflet.leafletMarkerClusterTitle\":\"基本地图（带标记群集）\",\"Map.leaflet.leafletRoutingTitle\":\"基本地图路由\",\"Component.contacts.noOption\":\"找不到联系\",\"email.send\":\"发送\",\"email.cancel\":\"取消\",\"email.compose\":\"撰写\",\"email.noMessage\":\"请选择一个邮件阅读\",\"themeSwitcher.purchase\":\"现在买\",\"themeSwitcher.settings\":\"设置\",\"sidebar.selectbox\":\"选择\",\"sidebar.frappeChart\":\"图表\",\"topbar.myprofile\":\"我的简历\",\"topbar.help\":\"帮帮我\",\"topbar.logout\":\"登出\",\"topbar.viewAll\":\"查看全部\",\"topbar.viewCart\":\"查看购物车\",\"topbar.totalPrice\":\"总价格\",\"sidebar.scrumboard\":\"Scrum板\",\"sidebar.firestorecrud\":\"Firestore CRUD\",\"sidebar.firestorecrudarticle\":\"用品\",\"sidebar.firestorecrudinvestor\":\"投资者\"}");

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

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "tyWD":
/***/ (function(module, exports) {



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

/***/ "x0cy":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/EditOutlined");

/***/ }),

/***/ "zH+7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export langDir */
const language = 'english';
const langDir = 'ltr';
/* harmony default export */ __webpack_exports__["a"] = (language);

/***/ }),

/***/ "zKje":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCurrentTheme; });
/* harmony import */ var _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5tV1");

const changeThemes = {
  id: 'changeThemes',
  label: 'themeSwitcher',
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__[/* themeConfig */ "b"].theme,
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
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__[/* themeConfig */ "b"].topbar,
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
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__[/* themeConfig */ "b"].sidebar,
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
  defaultTheme: _iso_config_theme_theme_config__WEBPACK_IMPORTED_MODULE_0__[/* themeConfig */ "b"].layout,
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
/* harmony default export */ __webpack_exports__["a"] = (customizedThemes);

/***/ }),

/***/ "ztWH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony default export */ __webpack_exports__["a"] = (amenityActions);

/***/ }),

/***/ "ztzw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/config-provider");

/***/ })

/******/ });