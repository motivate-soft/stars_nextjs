module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+PSA":
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),

/***/ "/6NR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DashboardLayout; });

// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__("VzA1");
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "clone"
var external_clone_ = __webpack_require__("sAR6");

// EXTERNAL MODULE: external "react-custom-scrollbars"
var external_react_custom_scrollbars_ = __webpack_require__("qC9r");

// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__("a5Fm");
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);

// CONCATENATED MODULE: ./shared/components/uielements/menu.js

/* harmony default export */ var menu = (menu_default.a);
// EXTERNAL MODULE: ./shared/components/utility/intlMessages.js
var intlMessages = __webpack_require__("l2Wt");

// EXTERNAL MODULE: ./shared/redux/app/actions.js
var actions = __webpack_require__("bVQA");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./shared/config/site.config.js
/* harmony default export */ var site_config = ({
  siteName: 'ISOMORPHIC',
  siteIcon: 'ion-flash',
  footerText: `Isomorphic @ ${new Date().getFullYear()} Created by RedQ, Inc`,
  enableAnimatedRoute: false,
  apiUrl: 'http://yoursite.com/api/',
  google: {
    analyticsKey: 'UA-xxxxxxxxx-1'
  },
  dashboard: '/admin'
});
// EXTERNAL MODULE: external "react-icons/io"
var io_ = __webpack_require__("2yjL");

// CONCATENATED MODULE: ./shared/components/utility/Logo.next.js
var __jsx = external_react_default.a.createElement;




/* harmony default export */ var Logo_next = (function ({
  collapsed
}) {
  return __jsx("div", {
    className: "isoLogoWrapper"
  }, collapsed ? __jsx("div", null, __jsx("h3", null, __jsx(link_default.a, {
    href: "/admin"
  }, __jsx("a", null, __jsx(io_["IoIosFlash"], {
    size: 27
  }))))) : __jsx("h3", null, __jsx(link_default.a, {
    href: "/admin"
  }, __jsx("a", null, site_config.siteName))));
});
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// EXTERNAL MODULE: ./shared/library/helpers/style_utils.js
var style_utils = __webpack_require__("p3F5");

// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./containers/Admin/Sidebar/Sidebar.styles.js




const SidebarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Sidebarstyles__SidebarWrapper",
  componentId: "sc-1yup75o-0"
})([".isomorphicSidebar{z-index:1000;background:", ";width:280px;flex:0 0 280px;.scrollarea{height:calc(100vh - 70px);}@media only screen and (max-width:767px){width:240px !important;flex:0 0 240px !important;}&.ant-layout-sider-collapsed{@media only screen and (max-width:767px){width:0;min-width:0 !important;max-width:0 !important;flex:0 0 0 !important;}}.isoLogoWrapper{height:70px;background:rgba(0,0,0,0.3);margin:0;padding:0 10px;text-align:center;overflow:hidden;", ";h3{a{font-size:21px;font-weight:300;line-height:70px;letter-spacing:3px;text-transform:uppercase;color:", ";display:block;text-decoration:none;}}}&.ant-layout-sider-collapsed{.isoLogoWrapper{padding:0;h3{a{font-size:27px;font-weight:500;letter-spacing:0;}}}}.isoDashboardMenu{padding-top:35px;padding-bottom:35px;background:transparent;a{text-decoration:none;font-weight:400;}.ant-menu-item{width:100%;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:0;}.isoMenuHolder{display:flex;align-items:center;svg{color:inherit;margin:", ";", ";}}.anticon{font-size:18px;margin-right:30px;color:inherit;", ";}.nav-text{font-size:14px;color:inherit;font-weight:400;", ";}.ant-menu-item-selected{background-color:rgba(0,0,0,0.4) !important;.anticon{color:#fff;}svg{color:#fff;}.nav-text{color:#fff;}}> li{&:hover{svg,.nav-text{color:#ffffff;}}}}.ant-menu-dark .ant-menu-inline.ant-menu-sub{background:", ";}.ant-menu-submenu-inline,.ant-menu-submenu-vertical{> .ant-menu-submenu-title{width:100%;display:flex;align-items:center;> span{display:flex;align-items:center;}.ant-menu-submenu-arrow{left:", ";right:", ";&:before,&:after{width:8px;", ";}&:before{transform:rotate(-45deg) translateX(3px);}&:after{transform:rotate(45deg) translateX(-3px);}", ";}&:hover{.ant-menu-submenu-arrow{&:before,&:after{color:#ffffff;}}}}.ant-menu-inline,.ant-menu-submenu-vertical{> li:not(.ant-menu-item-group){padding-left:", ";padding-right:", ";font-size:13px;font-weight:400;margin:0;color:inherit;", ";&:hover{a{color:#ffffff !important;}}}.ant-menu-item-group{padding-left:0;.ant-menu-item-group-title{padding-left:100px !important;}.ant-menu-item-group-list{.ant-menu-item{padding-left:125px !important;}}}}.ant-menu-sub{box-shadow:none;background-color:transparent !important;}}&.ant-layout-sider-collapsed{.nav-text{display:none;}.ant-menu-submenu-inline >{.ant-menu-submenu-title:after{display:none;}}.ant-menu-submenu-vertical{> .ant-menu-submenu-title:after{display:none;}.ant-menu-sub{background-color:transparent !important;.ant-menu-item{height:35px;}}}}}"], Object(external_styled_theme_["palette"])('secondary', 0), Object(style_utils["a" /* borderRadius */])(), Object(external_styled_theme_["palette"])('grayscale', 6), props => props['data-rtl'] === 'rtl' ? '0 0 0 30px' : '0 30px 0 0', Object(style_utils["c" /* transition */])(), Object(style_utils["c" /* transition */])(), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('secondary', 5), props => props['data-rtl'] === 'rtl' ? '25px' : 'auto', props => props['data-rtl'] === 'rtl' ? 'auto' : '25px', Object(style_utils["c" /* transition */])(), ''
/* &:after {
content: '\f123';
font-family: 'Ionicons' !important;
font-size: 16px;
color: inherit;
left: ${props => (props['data-rtl'] === 'rtl' ? '16px' : 'auto')};
right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '16px')};
${transition()};
} */
, props => props['data-rtl'] === 'rtl' ? '0px !important' : '74px !important', props => props['data-rtl'] === 'rtl' ? '74px !important' : '0px !important', Object(style_utils["c" /* transition */])());
/* harmony default export */ var Sidebar_styles = (Object(rtl["a" /* default */])(SidebarWrapper));
// CONCATENATED MODULE: ./containers/Admin/Sidebar/SidebarMenu.js
var SidebarMenu_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const SubMenu = menu.SubMenu;
function SidebarMenu(_ref) {
  let {
    item,
    submenuStyle,
    submenuColor
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["item", "submenuStyle", "submenuColor"]);

  const {
    key,
    label,
    leftIcon,
    children
  } = item;
  const url = site_config.dashboard;

  if (children) {
    return SidebarMenu_jsx(SubMenu, _extends({
      key: key,
      title: SidebarMenu_jsx("span", {
        className: "isoMenuHolder",
        style: submenuColor
      }, leftIcon, SidebarMenu_jsx("span", {
        className: "nav-text"
      }, SidebarMenu_jsx(intlMessages["a" /* default */], {
        id: label
      })))
    }, rest), children.map(({
      key,
      label,
      withoutDashboard
    }) => {
      const linkTo = withoutDashboard ? `/${key}` : `${url}/${key}`;
      return SidebarMenu_jsx(menu.Item, {
        style: submenuStyle,
        key: key
      }, SidebarMenu_jsx(link_default.a, {
        href: linkTo
      }, SidebarMenu_jsx("a", {
        className: "isoMenuHolder",
        style: submenuColor
      }, SidebarMenu_jsx(intlMessages["a" /* default */], {
        id: label
      }))));
    }));
  }

  return SidebarMenu_jsx(menu.Item, _extends({
    key: key
  }, rest), SidebarMenu_jsx(link_default.a, {
    href: `${url}/${key}`
  }, SidebarMenu_jsx("a", {
    className: "isoMenuHolder",
    style: submenuColor
  }, leftIcon, SidebarMenu_jsx("span", {
    className: "nav-text"
  }, SidebarMenu_jsx(intlMessages["a" /* default */], {
    id: label
  })))));
}
// EXTERNAL MODULE: ./shared/config/icon.config.js
var icon_config = __webpack_require__("dRoA");

// CONCATENATED MODULE: ./containers/Admin/Sidebar/sidebar.navigations.js
var sidebar_navigations_jsx = external_react_default.a.createElement;


/* harmony default export */ var sidebar_navigations = ([{
  key: "/",
  path: "/",
  label: "sidebar.dashboard",
  leftIcon: sidebar_navigations_jsx(icon_config["c" /* SidebarHomeIcon */], {
    size: 19
  })
}, {
  key: "user",
  path: "/user",
  label: "sidebar.users",
  leftIcon: sidebar_navigations_jsx(icon_config["d" /* SidebarPeopleIcon */], {
    size: 19
  })
}, {
  key: "accommodation",
  label: "sidebar.accommodation",
  leftIcon: sidebar_navigations_jsx(icon_config["c" /* SidebarHomeIcon */], {
    size: 19
  }),
  children: [{
    key: "category",
    label: "sidebar.category"
  }, {
    key: "amenity",
    label: "sidebar.amenity"
  }, {
    key: "property",
    label: "sidebar.property"
  }]
}, {
  key: "post",
  path: "/post",
  label: "sidebar.posts",
  leftIcon: sidebar_navigations_jsx(icon_config["b" /* SidebarBlankIcon */], {
    size: 19
  })
}, {
  key: "blog",
  path: "/blog",
  label: "sidebar.blogs",
  leftIcon: sidebar_navigations_jsx(icon_config["b" /* SidebarBlankIcon */], {
    size: 19
  })
}, {
  key: "blank_page",
  label: "sidebar.blankPage",
  leftIcon: sidebar_navigations_jsx(icon_config["b" /* SidebarBlankIcon */], {
    size: 19
  })
}]);
// CONCATENATED MODULE: ./containers/Admin/Sidebar/Sidebar.js

var Sidebar_jsx = external_react_default.a.createElement;












const Sidebar_SubMenu = menu.SubMenu;
const MenuItemGroup = menu.ItemGroup;
const {
  Sider
} = layout_default.a;
const {
  toggleOpenDrawer,
  changeOpenKeys,
  changeCurrent,
  toggleCollapsed: Sidebar_toggleCollapsed
} = actions["a" /* default */];
function Sidebar(props) {
  const {
    view,
    openKeys,
    collapsed,
    openDrawer,
    height,
    current
  } = Object(external_react_redux_["useSelector"])(state => state.App);
  const {
    sidebarTheme
  } = Object(external_react_redux_["useSelector"])(state => state.ThemeSwitcher);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    0: scrollheight,
    1: setScrollheight
  } = Object(external_react_["useState"])(null);
  const {
    0: isCollapsed,
    1: setIsCollapsed
  } = Object(external_react_["useState"])(null);
  Object(external_react_["useEffect"])(() => {
    setScrollheight(height);
  }, [height]);
  Object(external_react_["useEffect"])(() => {
    setIsCollapsed(collapsed && !openDrawer);
  }, [collapsed]);

  function handleClick(e) {
    dispatch(changeCurrent([e.key]));

    if (view === 'MobileView') {
      setTimeout(() => {
        dispatch(Sidebar_toggleCollapsed()); // dispatch(toggleOpenDrawer());
      }, 100);
    }
  }

  function onOpenChange(newOpenKeys) {
    const latestOpenKey = newOpenKeys.find(key => !(openKeys.indexOf(key) > -1));
    const latestCloseKey = openKeys.find(key => !(newOpenKeys.indexOf(key) > -1));
    let nextOpenKeys = [];

    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }

    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey);
    }

    dispatch(changeOpenKeys(nextOpenKeys));
  }

  const getAncestorKeys = key => {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  };

  const mode = isCollapsed === true ? 'vertical' : 'inline';
  const styling = {
    backgroundColor: sidebarTheme.backgroundColor
  };
  const submenuStyle = {
    backgroundColor: 'rgba(0,0,0,0.3)',
    color: sidebarTheme.textColor
  };
  const submenuColor = {
    color: sidebarTheme.textColor
  };

  const onMouseEnter = () => {
    if (collapsed && openDrawer === false) {
      dispatch(toggleOpenDrawer());
    }

    return;
  };

  const onMouseLeave = () => {
    if (collapsed && openDrawer === true) {
      dispatch(toggleOpenDrawer());
    }

    return;
  };

  return Sidebar_jsx(Sidebar_styles, null, Sidebar_jsx(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: isCollapsed,
    width: 240,
    className: "isomorphicSidebar",
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    style: styling
  }, Sidebar_jsx(Logo_next, {
    collapsed: isCollapsed
  }), Sidebar_jsx(external_react_custom_scrollbars_["Scrollbars"], {
    style: {
      height: scrollheight - 70
    }
  }, Sidebar_jsx(menu, {
    onClick: handleClick,
    theme: "dark",
    mode: mode,
    openKeys: isCollapsed ? [] : openKeys,
    selectedKeys: current,
    onOpenChange: onOpenChange,
    className: "isoDashboardMenu" // inlineCollapsed={isCollapsed}

  }, sidebar_navigations.map(option => Sidebar_jsx(SidebarMenu, {
    key: option.key,
    item: option,
    submenuColor: submenuColor,
    submenuStyle: submenuStyle
  }))))));
}
// EXTERNAL MODULE: ./shared/redux/themeSwitcher/actions.js
var themeSwitcher_actions = __webpack_require__("UZv4");

// CONCATENATED MODULE: ./shared/components/ThemeSwitcher/ThemeSwitcher.js
var ThemeSwitcher_jsx = external_react_default.a.createElement;


/* harmony default export */ var ThemeSwitcher = (({
  config,
  changeTheme,
  selectedId
}) => {
  const {
    id,
    label,
    options
  } = config;
  return ThemeSwitcher_jsx("div", {
    className: "themeSwitchBlock"
  }, ThemeSwitcher_jsx("h4", null, ThemeSwitcher_jsx(intlMessages["a" /* default */], {
    id: label
  })), ThemeSwitcher_jsx("div", {
    className: "themeSwitchBtnWrapper"
  }, options.map(option => {
    const {
      themeName,
      buttonColor
    } = option;

    const onClick = () => {
      changeTheme(id, themeName);
    };

    const customClass = themeName === selectedId ? 'selectedTheme' : '';
    return ThemeSwitcher_jsx("button", {
      type: "button",
      key: themeName,
      onClick: onClick,
      className: customClass,
      style: {
        backgroundColor: buttonColor
      }
    });
  })));
});
// EXTERNAL MODULE: ./shared/redux/languageSwitcher/actions.js
var languageSwitcher_actions = __webpack_require__("iYBC");

// EXTERNAL MODULE: ./shared/config/language.config.js
var language_config = __webpack_require__("zH+7");

// EXTERNAL MODULE: ./shared/assets/images/flag/uk.svg
var uk = __webpack_require__("o4UX");

// EXTERNAL MODULE: ./shared/assets/images/flag/china.svg
var china = __webpack_require__("BJG+");

// EXTERNAL MODULE: ./shared/assets/images/flag/spain.svg
var spain = __webpack_require__("IFJb");

// EXTERNAL MODULE: ./shared/assets/images/flag/france.svg
var france = __webpack_require__("K6uA");

// EXTERNAL MODULE: ./shared/assets/images/flag/italy.svg
var italy = __webpack_require__("9xqG");

// CONCATENATED MODULE: ./shared/containers/LanguageSwitcher/config.js






const config_config = {
  defaultLanguage: language_config["a" /* default */],
  options: [{
    languageId: 'english',
    locale: 'en',
    text: 'English',
    icon: uk["a" /* default */]
  }, {
    languageId: 'chinese',
    locale: 'zh',
    text: 'Chinese',
    icon: china["a" /* default */]
  }]
};
function getCurrentLanguage(lang) {
  let selecetedLanguage = config_config.options[0];
  config_config.options.forEach(language => {
    if (language.languageId === lang) {
      selecetedLanguage = language;
    }
  });
  return selecetedLanguage;
}
/* harmony default export */ var LanguageSwitcher_config = (config_config);
// CONCATENATED MODULE: ./shared/containers/LanguageSwitcher/LanguageSwitcher.js
var LanguageSwitcher_jsx = external_react_default.a.createElement;





const {
  changeLanguage
} = languageSwitcher_actions["a" /* default */];
function LanguageSwitcher() {
  const {
    language
  } = Object(external_react_redux_["useSelector"])(state => state.LanguageSwitcher);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  return LanguageSwitcher_jsx("div", {
    className: "themeSwitchBlock"
  }, LanguageSwitcher_jsx("h4", null, LanguageSwitcher_jsx(intlMessages["a" /* default */], {
    id: "languageSwitcher.label"
  })), LanguageSwitcher_jsx("div", {
    className: "themeSwitchBtnWrapper"
  }, LanguageSwitcher_config.options.map(option => {
    const {
      languageId,
      icon
    } = option;
    const customClass = languageId === language.languageId ? 'selectedTheme languageSwitch' : 'languageSwitch';
    return LanguageSwitcher_jsx("button", {
      type: "button",
      className: customClass,
      key: languageId,
      onClick: () => {
        dispatch(changeLanguage(languageId));
      }
    }, LanguageSwitcher_jsx("img", {
      src: icon,
      alt: "flag"
    }));
  })));
}
// EXTERNAL MODULE: ./shared/config/theme/theme.config.js + 3 modules
var theme_config = __webpack_require__("5tV1");

// CONCATENATED MODULE: ./shared/containers/ThemeSwitcher/config.js

const changeThemes = {
  id: 'changeThemes',
  label: 'themeSwitcher',
  defaultTheme: theme_config["b" /* themeConfig */].theme,
  options: [{
    themeName: 'defaultTheme',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }, {
    themeName: 'theme2',
    buttonColor: '#ffffff',
    textColor: '#323332'
  }]
};
const config_topbarTheme = {
  id: 'topbarTheme',
  label: 'themeSwitcher.Topbar',
  defaultTheme: theme_config["b" /* themeConfig */].topbar,
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
const config_sidebarTheme = {
  id: 'sidebarTheme',
  label: 'themeSwitcher.Sidebar',
  defaultTheme: theme_config["b" /* themeConfig */].sidebar,
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
const config_layoutTheme = {
  id: 'layoutTheme',
  label: 'themeSwitcher.Background',
  defaultTheme: theme_config["b" /* themeConfig */].layout,
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
  topbarTheme: config_topbarTheme,
  sidebarTheme: config_sidebarTheme,
  layoutTheme: config_layoutTheme
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
/* harmony default export */ var ThemeSwitcher_config = (customizedThemes);
// CONCATENATED MODULE: ./shared/assets/images/icon/bucket.svg
/* harmony default export */ var bucket = ("/static/assets/7970d60be71bd21fd4abd5cdd09b8e76.svg");
// CONCATENATED MODULE: ./shared/containers/ThemeSwitcher/ThemeSwitcher.styles.js




const ThemeSwitcherStyle = external_styled_components_default.a.div.withConfig({
  displayName: "ThemeSwitcherstyles__ThemeSwitcherStyle",
  componentId: "sc-17l608g-0"
})(["background-color:#ffffff;width:340px;height:calc(100% - 70px);padding:0 0 50px;flex-shrink:0;position:fixed;top:70px;right:", ";left:", ";z-index:1001;", ";", ";@media only screen and (max-width:767px){width:270px;right:", ";left:", ";}&.active{right:", ";left:", ";}.switcher{right:", ";left:", ";}.componentTitleWrapper{padding:25px 15px;height:70px;background-color:", ";.componentTitle{font-size:21px;font-weight:700;color:#fff;line-height:1;width:100%;text-align:center;display:flex;justify-content:center;}}.SwitcherBlockWrapper{width:100%;height:100%;padding-bottom:105px;overflow:hidden;overflow-y:auto;display:flex;flex-direction:column;.themeSwitchBlock{width:100%;display:-webkit-flex;display:-ms-flex;display:flex;flex-shrink:0;flex-direction:column;margin-top:30px;h4{font-size:14px;font-weight:700;color:", ";line-height:1.3;margin-bottom:0;padding:0 15px;text-transform:uppercase;}.themeSwitchBtnWrapper{width:100%;display:flex;align-items:center;padding:15px 20px;button{width:20px;height:20px;display:flex;margin:", ";border:1px solid #e4e4e4;outline:0;padding:0;background:none;justify-content:center;position:relative;cursor:pointer;", ";&.languageSwitch{border:0;width:30px;height:auto;&.selectedTheme{&:before,&:after{top:2px;left:", ";right:", ";}}}img{width:100%;}&.selectedTheme{&:before{content:'';width:6px;height:6px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;background-color:", ";position:absolute;top:-2px;left:", ";right:", ";", ";}&:after{content:'';width:6px;height:6px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;border:1px solid ", ";background-color:", ";position:absolute;top:-2px;left:", ";right:", ";-webkit-animation:selectedAnimation 1.2s infinite ease-in-out;animation:selectedAnimation 1.2s infinite ease-in-out;", ";}}}}}}.switcherToggleBtn{width:50px;height:50px;display:flex;align-items:center;justify-content:center;text-align:center;background-color:#ffffff;outline:0;border:0;position:absolute;text-align:center;top:200px;left:", ";right:", ";cursor:pointer;border-radius:", ";", ";img{width:23px;}}@-webkit-keyframes selectedAnimation{0%{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}100%{-webkit-transform:scale(2.4);transform:scale(2.4);opacity:0;}}@keyframes selectedAnimation{0%{-webkit-transform:scale(0.8);transform:scale(0.8);opacity:0.5;}100%{-webkit-transform:scale(2.4);transform:scale(2.4);opacity:0;}}"], props => props['data-rtl'] === 'rtl' ? 'inherit' : '-340px', props => props['data-rtl'] === 'rtl' ? '-340px' : 'inherit', Object(style_utils["c" /* transition */])(), Object(style_utils["b" /* boxShadow */])('-1px 0 5px rgba(0,0,0,0.25)'), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-270px', props => props['data-rtl'] === 'rtl' ? '-270px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '0', props => props['data-rtl'] === 'rtl' ? '0' : 'inherit', props => props['data-rtl'] === 'rtl' ? '-98px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '-98px', Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('text', 0), props => props['data-rtl'] === 'rtl' ? '0 0 0 10px' : '0 10px 0 0', Object(style_utils["a" /* borderRadius */])('3px'), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-3px', props => props['data-rtl'] === 'rtl' ? '-3px' : 'inherit', Object(external_styled_theme_["palette"])('color', 13), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-2px', props => props['data-rtl'] === 'rtl' ? '-2px' : 'inherit', Object(style_utils["a" /* borderRadius */])('50%'), Object(external_styled_theme_["palette"])('color', 13), Object(external_styled_theme_["palette"])('color', 13), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-2px', props => props['data-rtl'] === 'rtl' ? '-2px' : 'inherit', Object(style_utils["a" /* borderRadius */])('50%'), props => props['data-rtl'] === 'rtl' ? 'inherit' : '-50px', props => props['data-rtl'] === 'rtl' ? '-50px' : 'inherit', props => props['data-rtl'] === 'rtl' ? '0 3px 3px 0' : '3px 0 0 3px', Object(style_utils["b" /* boxShadow */])('-2px 0 5px rgba(0,0,0,0.2)'));
/* harmony default export */ var ThemeSwitcher_styles = (Object(rtl["a" /* default */])(ThemeSwitcherStyle));
// CONCATENATED MODULE: ./shared/containers/ThemeSwitcher/ThemeSwitcher.js
var ThemeSwitcher_ThemeSwitcher_jsx = external_react_default.a.createElement;









const {
  switchActivation,
  changeTheme: ThemeSwitcher_changeTheme
} = themeSwitcher_actions["a" /* default */];
function ThemeSwitcher_ThemeSwitcher() {
  const {
    isActivated,
    topbarTheme,
    sidebarTheme,
    layoutTheme
  } = Object(external_react_redux_["useSelector"])(state => state.ThemeSwitcher);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const styleButton = {
    background: sidebarTheme.buttonColor
  };
  return ThemeSwitcher_ThemeSwitcher_jsx(ThemeSwitcher_styles, {
    className: isActivated ? 'isoThemeSwitcher active' : 'isoThemeSwitcher'
  }, ThemeSwitcher_ThemeSwitcher_jsx("div", {
    className: "componentTitleWrapper",
    style: styleButton
  }, ThemeSwitcher_ThemeSwitcher_jsx("h3", {
    className: "componentTitle"
  }, ThemeSwitcher_ThemeSwitcher_jsx(intlMessages["a" /* default */], {
    id: "themeSwitcher.settings"
  }))), ThemeSwitcher_ThemeSwitcher_jsx("div", {
    className: "SwitcherBlockWrapper"
  }, ThemeSwitcher_ThemeSwitcher_jsx(ThemeSwitcher, {
    config: ThemeSwitcher_config.sidebarTheme,
    changeTheme: (attr, theme) => dispatch(ThemeSwitcher_changeTheme(attr, theme)),
    selectedId: sidebarTheme.themeName
  }), ThemeSwitcher_ThemeSwitcher_jsx(ThemeSwitcher, {
    config: ThemeSwitcher_config.topbarTheme,
    changeTheme: (attr, theme) => dispatch(ThemeSwitcher_changeTheme(attr, theme)),
    selectedId: topbarTheme.themeName
  }), ThemeSwitcher_ThemeSwitcher_jsx(ThemeSwitcher, {
    config: ThemeSwitcher_config.layoutTheme,
    changeTheme: (attr, theme) => dispatch(ThemeSwitcher_changeTheme(attr, theme)),
    selectedId: layoutTheme.themeName
  }), ThemeSwitcher_ThemeSwitcher_jsx(LanguageSwitcher, null)), ThemeSwitcher_ThemeSwitcher_jsx("button", {
    type: "primary",
    className: "switcherToggleBtn",
    style: styleButton,
    onClick: () => {
      dispatch(switchActivation());
    }
  }, ThemeSwitcher_ThemeSwitcher_jsx("img", {
    src: bucket,
    alt: "bucket"
  })));
}
// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__("27qp");
var popover_default = /*#__PURE__*/__webpack_require__.n(popover_);

// CONCATENATED MODULE: ./containers/Admin/Topbar/TopbarDropdown.styles.js




const TopbarDropdownWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "TopbarDropdownstyles__TopbarDropdownWrapper",
  componentId: "sc-1fnock2-0"
})(["display:flex;flex-direction:column;background-color:#ffffff;margin:-12px -16px;width:360px;min-width:160px;flex-shrink:0;", ";", ";", ";cursor:pointer;@media only screen and (max-width:767px){width:310px;}.isoDropdownHeader{border-bottom:1px solid #f1f1f1;margin-bottom:0px;padding:15px 30px;width:100%;display:flex;align-items:center;justify-content:center;h3{font-size:14px;font-weight:500;color:", ";text-align:center;text-transform:uppercase;margin:0;}}.isoDropdownBody{width:100%;height:300px;overflow-y:auto;display:flex;flex-direction:column;margin-bottom:10px;background-color:", ";a{text-decoration:none;}.isoDropdownListItem{padding:15px 30px;flex-shrink:0;text-decoration:none;display:flex;flex-direction:column;text-decoration:none;text-align:", ";width:100%;border-bottom:1px solid ", ";", ";&:hover{background-color:", ";}.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}h5{font-size:13px;font-weight:500;color:", ";margin-top:0;}p{font-size:12px;font-weight:400;color:", ";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.isoDate{font-size:11px;color:", ";flex-shrink:0;}}}.isoViewAllBtn{font-size:13px;font-weight:500;color:", ";padding:10px 15px 20px;display:flex;text-decoration:none;align-items:center;justify-content:center;text-align:center;", ";&:hover{color:", ";}}.isoDropdownFooterLinks{display:flex;align-items:center;justify-content:space-between;padding:10px 30px 20px;a{font-size:13px;font-weight:500;color:", ";text-decoration:none;padding:10px 20px;line-height:1;border:1px solid ", ";display:flex;align-items:center;justify-content:center;", ";&:hover{background-color:", ";border-color:", ";color:#ffffff;}}h3{font-size:14px;font-weight:500;color:", ";line-height:1.3;}}&.withImg{.isoDropdownListItem{display:flex;flex-direction:row;.isoImgWrapper{width:35px;height:35px;overflow:hidden;margin:", ";display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;background-color:", ";", ";img{width:100%;height:100%;object-fit:cover;}}.isoListContent{width:100%;display:flex;flex-direction:column;.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}h5{margin-bottom:0;padding:", ";}.isoDate{font-size:11px;color:", ";flex-shrink:0;}p{white-space:normal;line-height:1.5;}}}}&.topbarMail{@media only screen and (max-width:519px){right:-170px;}}&.topbarMessage{@media only screen and (max-width:500px){right:-69px;}}&.topbarNotification{@media only screen and (max-width:500px){right:-120px;}}&.topbarAddtoCart{@media only screen and (max-width:465px){right:-55px;}.isoDropdownHeader{margin-bottom:0;}.isoDropdownBody{background-color:", ";display:flex;flex-direction:column;.isoNoItemMsg{height:100%;display:flex;align-items:center;justify-content:center;span{font-size:30px;font-weight:300;color:", ";line-height:1.2;}}}}&.isoUserDropdown{padding:7px 0;display:flex;flex-direction:column;background-color:#ffffff;width:220px;min-width:160px;flex-shrink:0;", ";", ";", ";.isoDropdownLink{font-size:13px;color:", ";line-height:1.1;padding:7px 15px;background-color:transparent;text-decoration:none;display:flex;justify-content:flex-start;", ";&:hover{background-color:", ";}}}"], Object(style_utils["a" /* borderRadius */])('5px'), Object(style_utils["b" /* boxShadow */])('0 2px 10px rgba(0,0,0,0.2)'), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('grayscale', 6), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('border', 2), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('grayscale', 3), Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('text', 2), Object(external_styled_theme_["palette"])('grayscale', 1), Object(external_styled_theme_["palette"])('text', 2), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('border', 1), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('text', 0), props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(external_styled_theme_["palette"])('grayscale', 9), Object(style_utils["a" /* borderRadius */])('50%'), props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(external_styled_theme_["palette"])('grayscale', 1), Object(external_styled_theme_["palette"])('grayscale', 6), Object(external_styled_theme_["palette"])('grayscale', 1), Object(style_utils["a" /* borderRadius */])('5px'), Object(style_utils["b" /* boxShadow */])('0 2px 10px rgba(0,0,0,0.2)'), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('text', 1), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('secondary', 6));
/* harmony default export */ var TopbarDropdown_styles = (Object(rtl["a" /* default */])(TopbarDropdownWrapper));
// CONCATENATED MODULE: ./containers/Admin/Topbar/TopbarNotification.js

var TopbarNotification_jsx = external_react_default.a.createElement;




const demoNotifications = [{
  id: 1,
  name: 'David Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 2,
  name: 'Navis Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 3,
  name: 'Emanual Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 4,
  name: 'Dowain Doe',
  notification: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}];
function TopbarNotification() {
  const customizedTheme = Object(external_react_redux_["useSelector"])(state => state.ThemeSwitcher.topbarTheme);
  const [visible, setVisibility] = external_react_default.a.useState(false);

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = TopbarNotification_jsx(TopbarDropdown_styles, {
    className: "topbarNotification"
  }, TopbarNotification_jsx("div", {
    className: "isoDropdownHeader"
  }, TopbarNotification_jsx("h3", null, "Notifications")), TopbarNotification_jsx("div", {
    className: "isoDropdownBody"
  }, demoNotifications.map(notification => TopbarNotification_jsx("a", {
    className: "isoDropdownListItem",
    key: notification.id
  }, TopbarNotification_jsx("h5", null, notification.name), TopbarNotification_jsx("p", null, notification.notification)))), TopbarNotification_jsx("a", {
    className: "isoViewAllBtn"
  }, "View All"));

  return TopbarNotification_jsx(popover_default.a, {
    content: content,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    placement: "bottomLeft"
  }, TopbarNotification_jsx("div", {
    className: "isoIconWrapper"
  }, TopbarNotification_jsx(icon_config["l" /* TopbarNotifyIcon */], {
    size: 24,
    color: customizedTheme.textColor
  }), TopbarNotification_jsx("span", null, demoNotifications.length)));
}
// CONCATENATED MODULE: ./shared/assets/images/user3.png
/* harmony default export */ var user3 = ("/static/assets/8ba5b00e1915161b0acc8d4a63e4db8c.png");
// CONCATENATED MODULE: ./containers/Admin/Topbar/TopbarMessage.js

var TopbarMessage_jsx = external_react_default.a.createElement;





const demoMassage = [{
  id: 1,
  name: 'David Doe',
  time: '3 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 2,
  name: 'Navis Doe',
  time: '4 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 3,
  name: 'Emanual Doe',
  time: '5 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}, {
  id: 4,
  name: 'Dowain Doe',
  time: '6 minutes ago',
  massage: 'A National Book Award Finalist An Edgar Award Finalist A California Book Award Gold Medal Winner'
}];
function TopbarMessage() {
  const [visible, setVisibility] = external_react_default.a.useState(false);
  const customizedTheme = Object(external_react_redux_["useSelector"])(state => state.ThemeSwitcher.topbarTheme);

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = TopbarMessage_jsx(TopbarDropdown_styles, {
    className: "topbarMessage withImg"
  }, TopbarMessage_jsx("div", {
    className: "isoDropdownHeader"
  }, TopbarMessage_jsx("h3", null, "Messages")), TopbarMessage_jsx("div", {
    className: "isoDropdownBody"
  }, demoMassage.map(massage => TopbarMessage_jsx("a", {
    className: "isoDropdownListItem",
    key: massage.id
  }, TopbarMessage_jsx("div", {
    className: "isoImgWrapper"
  }, TopbarMessage_jsx("img", {
    alt: "#",
    src: user3
  })), TopbarMessage_jsx("div", {
    className: "isoListContent"
  }, TopbarMessage_jsx("div", {
    className: "isoListHead"
  }, TopbarMessage_jsx("h5", null, massage.name), TopbarMessage_jsx("span", {
    className: "isoDate"
  }, massage.time)), TopbarMessage_jsx("p", null, massage.massage))))), TopbarMessage_jsx("a", {
    className: "isoViewAllBtn"
  }, "View All"));

  return TopbarMessage_jsx(popover_default.a, {
    content: content,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    placement: "bottomLeft"
  }, TopbarMessage_jsx("div", {
    className: "isoIconWrapper"
  }, TopbarMessage_jsx(icon_config["k" /* TopbarMessageIcon */], {
    size: 24,
    color: customizedTheme.textColor
  }), TopbarMessage_jsx("span", null, demoMassage.length)));
}
// EXTERNAL MODULE: ./shared/components/uielements/input.js + 1 modules
var input = __webpack_require__("P1ll");

// EXTERNAL MODULE: ./shared/components/Feedback/Modal.js
var Modal = __webpack_require__("TI/I");

// CONCATENATED MODULE: ./containers/Admin/Topbar/TopbarSearchModal.styles.js




const TopbarSearchModal = external_styled_components_default()(Modal["a" /* default */]).withConfig({
  displayName: "TopbarSearchModalstyles__TopbarSearchModal",
  componentId: "f0b2ca-0"
})(["&.ant-modal{top:150px;padding-bottom:0;}.ant-modal-close-x{width:28px;height:28px;line-height:28px;display:none;}.ant-modal-content{overflow:hidden;border-radius:5px;.ant-modal-header{display:none;}.ant-modal-body{padding:0px;.isoSearchContainer{.ant-input-search{position:relative;border:0;border-radius:0;padding-left:", ";padding-right:", ";height:60px;max-height:none;.ant-input{font-size:14px;&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}&:focus{outline:0;box-shadow:none;}}.ant-input-prefix{right:", ";left:", ";height:0;position:absolute;top:50%;svg{color:", ";}}}.ant-input-suffix{.ant-input-search-icon{display:none;}}}}}"], props => props['data-rtl'] === 'rtl' ? '15px' : '55px', props => props['data-rtl'] === 'rtl' ? '55px' : '15px', Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? '20px' : 'auto', props => props['data-rtl'] === 'rtl' ? 'auto' : '20px', Object(external_styled_theme_["palette"])('text', 2));
/* harmony default export */ var TopbarSearchModal_styles = (Object(rtl["a" /* default */])(TopbarSearchModal));
// CONCATENATED MODULE: ./containers/Admin/Topbar/TopbarSearch.js
var TopbarSearch_jsx = external_react_default.a.createElement;






function Searchbar(props) {
  external_react_default.a.useEffect(() => {
    const timer = setTimeout(() => {
      try {
        document.getElementById('InputTopbarSearch').focus();
      } catch (e) {}
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  });
  return TopbarSearch_jsx(input["a" /* InputSearch */], {
    id: "InputTopbarSearch",
    size: "large",
    placeholder: "Enter search text",
    onBlur: props.onBlur,
    prefix: TopbarSearch_jsx(icon_config["m" /* TopbarSearchIcon */], {
      size: 24
    })
  });
}

function TopbarSearch() {
  const [visible, setVisibility] = external_react_default.a.useState(false);
  const customizedTheme = Object(external_react_redux_["useSelector"])(state => state.ThemeSwitcher.topbarTheme);

  const handleCancel = () => {
    setVisibility(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setVisibility(false);
    }, 200);
  };

  const showModal = () => {
    setVisibility(true);
  };

  return TopbarSearch_jsx("div", {
    onClick: showModal
  }, TopbarSearch_jsx(icon_config["m" /* TopbarSearchIcon */], {
    size: 24,
    color: customizedTheme.textColor
  }), TopbarSearch_jsx(TopbarSearchModal_styles, {
    visible: visible,
    onOk: handleCancel,
    onCancel: handleCancel,
    wrapClassName: "isoSearchModal",
    width: "60%",
    footer: null
  }, TopbarSearch_jsx("div", {
    className: "isoSearchContainer"
  }, visible ? TopbarSearch_jsx(Searchbar, {
    onBlur: handleBlur
  }) : '')));
}
// EXTERNAL MODULE: ./shared/components/uielements/popover.js
var popover = __webpack_require__("7wCw");

// EXTERNAL MODULE: ./redux/authentication/actions.js
var authentication_actions = __webpack_require__("8XiI");

// CONCATENATED MODULE: ./shared/assets/images/user1.png
/* harmony default export */ var user1 = ("/static/assets/8619effb14797cd8faefdccffd3bf081.png");
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./containers/Admin/Topbar/TopbarUser.js
var TopbarUser_jsx = external_react_default.a.createElement;






const {
  logout
} = authentication_actions["a" /* default */];


function TopbarUser() {
  const [visible, setVisibility] = external_react_default.a.useState(false);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const router = Object(router_["useRouter"])();
  const {
    profile
  } = Object(external_react_redux_["useSelector"])(state => state.Auth);

  function handleVisibleChange() {
    setVisibility(visible => !visible);
  }

  const content = TopbarUser_jsx(TopbarDropdown_styles, {
    className: "isoUserDropdown"
  }, TopbarUser_jsx("a", {
    className: "isoDropdownLink",
    onClick: () => {
      router.push("/admin/profile");
    }
  }, "Profile"), TopbarUser_jsx("a", {
    className: "isoDropdownLink",
    onClick: () => dispatch(logout())
  }, "Logout"));

  return TopbarUser_jsx(popover["a" /* default */], {
    content: content,
    trigger: "click",
    visible: visible,
    onVisibleChange: handleVisibleChange,
    arrowPointAtCenter: true,
    placement: "bottomLeft"
  }, TopbarUser_jsx("div", {
    className: "isoImgWrapper"
  }, TopbarUser_jsx("img", {
    alt: "user",
    src: user1
  }), TopbarUser_jsx("span", {
    className: "userActivity online"
  })), TopbarUser_jsx("p", null, profile && profile.username));
}
// CONCATENATED MODULE: ./shared/components/Cart/SingleCartModal.style.js




const TopbarCartWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "SingleCartModalstyle__TopbarCartWrapper",
  componentId: "sc-11nst29-0"
})(["width:100%;display:flex;align-items:center;padding:15px 30px;flex-shrink:0;position:relative;border-bottom:1px solid ", ";", ";.isoItemImage{width:50px;height:50px;flex-shrink:0;display:flex;align-items:center;justify-content:center;img{width:100%;height:100%;object-fit:cover;}}.isoCartDetails{width:100%;display:flex;padding:", ";flex-direction:column;text-align:", ";h3{margin:0 0 5px;line-height:1;a{font-size:13px;font-weight:500;color:", ";line-height:1.3;text-decoration:none;}}p{display:flex;margin:0;span{font-size:12px;font-weight:400;color:", ";line-height:1.2;&.itemMultiplier{padding:0 3px;}}}}.isoItemRemove{position:absolute;right:", ";left:", ";font-size:13px;font-weight:500;color:", " !important;opacity:0;", ";}&:hover{background-color:", ";.isoItemRemove{opacity:1;}}"], Object(external_styled_theme_["palette"])('border', 2), Object(style_utils["c" /* transition */])(), props => props['data-rtl'] === 'rtl' ? '0 20px 0 0' : '0 0 0 20px', props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('text', 2), props => props['data-rtl'] === 'rtl' ? 'inherit' : '15px', props => props['data-rtl'] === 'rtl' ? '15px' : 'inherit', Object(external_styled_theme_["palette"])('text', 0), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('grayscale', 3));
/* harmony default export */ var SingleCartModal_style = (Object(rtl["a" /* default */])(TopbarCartWrapper));
// CONCATENATED MODULE: ./shared/components/Cart/SingleCartModal.js
var SingleCartModal_jsx = external_react_default.a.createElement;



/* harmony default export */ var SingleCartModal = (function ({
  price,
  quantity,
  image,
  objectID,
  cancelQuantity,
  _highlightResult
}) {
  return SingleCartModal_jsx(SingleCartModal_style, {
    className: "isoCartItems"
  }, SingleCartModal_jsx("div", {
    className: "isoItemImage"
  }, SingleCartModal_jsx("img", {
    alt: "#",
    src: image
  })), SingleCartModal_jsx("div", {
    className: "isoCartDetails"
  }, SingleCartModal_jsx("h3", null, SingleCartModal_jsx("a", {
    href: "#!"
  }, _highlightResult.name.value)), SingleCartModal_jsx("p", {
    className: "isoItemPriceQuantity"
  }, SingleCartModal_jsx("span", null, "$"), SingleCartModal_jsx("span", null, price.toFixed(2)), SingleCartModal_jsx("span", {
    className: "itemMultiplier"
  }, "X"), SingleCartModal_jsx("span", {
    className: "isoItemQuantity"
  }, quantity))), SingleCartModal_jsx("a", {
    className: "isoItemRemove",
    onClick: () => cancelQuantity(objectID),
    href: "#!"
  }, SingleCartModal_jsx(icon_config["a" /* CloseIcon */], null)));
});
// CONCATENATED MODULE: ./shared/redux/ecommerce/actions.js
const actions_actions = {
  INIT_DATA: 'ECOMMERCE_INIT_DATA',
  INIT_DATA_SAGA: 'ECOMMERCE_INIT_DATA_SAGA',
  UPDATE_DATA: 'ECOMMERCE_UPDATE_DATA',
  UPDATE_DATA_SAGA: 'ECOMMERCE_UPDATE_DATA_SAGA',
  CHANGE_VIEW: 'ECOMMERCE_CHANGE_VIEW',
  VIEW_TOPBAR_CART: 'ECOMMERCE_VIEW_TOPBAR_CART',
  initData: () => ({
    type: actions_actions.INIT_DATA_SAGA
  }),
  changeView: view => ({
    type: actions_actions.CHANGE_VIEW,
    view
  }),
  changeViewTopbarCart: viewTopbarCart => {
    return {
      type: actions_actions.VIEW_TOPBAR_CART,
      viewTopbarCart
    };
  },
  changeProductQuantity: productQuantity => {
    return (dispatch, getState) => {
      const {
        products
      } = getState().Ecommerce;
      dispatch({
        type: actions_actions.UPDATE_DATA_SAGA,
        products,
        productQuantity
      });
    };
  },
  addToCart: product => {
    return (dispatch, getState) => {
      const {
        products,
        productQuantity
      } = getState().Ecommerce;
      const objectID = product.objectID;
      productQuantity.push({
        objectID,
        quantity: 1
      });
      products[objectID] = product;
      dispatch({
        type: actions_actions.UPDATE_DATA_SAGA,
        products,
        productQuantity
      });
    };
  }
};
/* harmony default export */ var ecommerce_actions = (actions_actions);
// CONCATENATED MODULE: ./containers/Admin/Topbar/TopbarAddToCart.js
var TopbarAddToCart_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function TopbarAddToCart_extends() { TopbarAddToCart_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return TopbarAddToCart_extends.apply(this, arguments); }









const {
  changeViewTopbarCart,
  changeProductQuantity
} = ecommerce_actions;
let totalPrice;

class TopbarAddToCart_TopbarAddtoCart extends external_react_["Component"] {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.cancelQuantity = this.cancelQuantity.bind(this);
  }

  hide() {
    this.props.changeViewTopbarCart(false);
  }

  handleVisibleChange() {
    this.props.changeViewTopbarCart(!this.props.viewTopbarCart);
  }

  renderProducts() {
    const {
      productQuantity,
      products
    } = this.props;
    totalPrice = 0;

    if (!productQuantity || productQuantity.length === 0) {
      return TopbarAddToCart_jsx("div", {
        className: "isoNoItemMsg"
      }, TopbarAddToCart_jsx("span", null, "No item found"));
    }

    return productQuantity.map(product => {
      totalPrice += product.quantity * products[product.objectID].price;
      return TopbarAddToCart_jsx(SingleCartModal, TopbarAddToCart_extends({
        key: product.objectID,
        quantity: product.quantity,
        changeQuantity: this.changeQuantity,
        cancelQuantity: this.cancelQuantity
      }, products[product.objectID]));
    });
  }

  changeQuantity(objectID, quantity) {
    const {
      productQuantity
    } = this.props;
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      } else {
        newProductQuantity.push({
          objectID,
          quantity
        });
      }
    });
    this.props.changeProductQuantity(newProductQuantity);
  }

  cancelQuantity(objectID) {
    const {
      productQuantity
    } = this.props;
    const newProductQuantity = [];
    productQuantity.forEach(product => {
      if (product.objectID !== objectID) {
        newProductQuantity.push(product);
      }
    });
    this.props.changeProductQuantity(newProductQuantity);
  }

  render() {
    const {
      url,
      productQuantity,
      viewTopbarCart,
      customizedTheme
    } = this.props;

    const content = TopbarAddToCart_jsx(TopbarDropdown_styles, {
      className: "topbarAddtoCart"
    }, TopbarAddToCart_jsx("div", {
      className: "isoDropdownHeader"
    }, TopbarAddToCart_jsx("h3", null, "Cart")), TopbarAddToCart_jsx("div", {
      className: "isoDropdownBody isoCartItemsWrapper"
    }, this.renderProducts()), TopbarAddToCart_jsx("div", {
      className: "isoDropdownFooterLinks",
      onClick: this.hide
    }, TopbarAddToCart_jsx(link_default.a, {
      href: `/dashboard/cart`
    }, TopbarAddToCart_jsx("a", null, "View Cart")), TopbarAddToCart_jsx("h3", null, "Total Price: ", TopbarAddToCart_jsx("span", null, "$", totalPrice.toFixed(2)))));

    return TopbarAddToCart_jsx(popover["a" /* default */], {
      content: content,
      trigger: "click",
      visible: viewTopbarCart,
      onVisibleChange: this.handleVisibleChange,
      placement: "bottomLeft"
    }, TopbarAddToCart_jsx("div", {
      className: "isoIconWrapper"
    }, TopbarAddToCart_jsx(icon_config["i" /* TopbarCartIcon */], {
      size: 24,
      color: customizedTheme.textColor
    }), productQuantity.length === 0 ? TopbarAddToCart_jsx("span", null, "0") : TopbarAddToCart_jsx("span", null, productQuantity.length)));
  }

}

function mapStateToProps(state) {
  return _objectSpread(_objectSpread({}, state.Ecommerce), {}, {
    customizedTheme: state.ThemeSwitcher.topbarTheme
  });
}

/* harmony default export */ var TopbarAddToCart = (Object(external_react_redux_["connect"])(mapStateToProps, {
  changeViewTopbarCart,
  changeProductQuantity
})(TopbarAddToCart_TopbarAddtoCart));
// CONCATENATED MODULE: ./containers/Admin/Topbar/Topbar.styles.js




const TopbarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Topbarstyles__TopbarWrapper",
  componentId: "w8dbhm-0"
})([".isomorphicTopbar{display:flex;justify-content:space-between;background-color:#ffffff;border-bottom:1px solid rgba(0,0,0,0.1);padding:", ";z-index:1000;", ";@media only screen and (max-width:767px){padding:", ";}&.collapsed{padding:", ";@media only screen and (max-width:767px){padding:", ";}}.isoLeft{display:flex;align-items:center;@media only screen and (max-width:767px){margin:", ";}.triggerBtn{width:auto;height:100%;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;background-color:transparent;border:0;outline:0;position:relative;cursor:pointer;padding-left:0;}}.isoRight{display:flex;align-items:center;justify-content:center;margin:0;li{margin-left:", ";margin-right:", ";cursor:pointer;line-height:normal;position:relative;display:inline-block;@media only screen and (max-width:360px){margin-left:", ";margin-right:", ";}&:last-child{margin:0;}svg{color:", ";}.isoIconWrapper{position:relative;line-height:normal;span{font-size:12px;color:#fff;background-color:", ";width:20px;height:20px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;text-align:center;line-height:20px;position:absolute;top:-8px;left:", ";right:", ";", ";}}&.isoMail{.isoIconWrapper{span{background-color:", ";}}}&.isoNotify{.isoIconWrapper{span{background-color:", ";}}}&.isoMsg{.isoIconWrapper{span{background-color:", ";}}}&.isoCart{.isoIconWrapper{span{background-color:", ";}}}&.isoUser{.isoImgWrapper{width:40px;height:40px;display:flex;align-items:center;justify-content:center;position:relative;background-color:", ";", ";img{height:100%;object-fit:cover;}.userActivity{width:10px;height:10px;display:block;background-color:", ";position:absolute;bottom:0;right:3px;border:1px solid #ffffff;", ";}}}}}}.isoUserDropdown{.ant-popover-inner{.ant-popover-inner-content{.isoUserDropdownContent{padding:7px 0;display:flex;flex-direction:column;position:absolute;top:0;right:0;background-color:#ffffff;width:220px;min-width:160px;flex-shrink:0;.isoBorderRadius(5px);", ";", ";.isoDropdownLink{font-size:13px;color:", ";line-height:1.1;padding:7px 15px;background-color:transparent;text-decoration:none;display:flex;justify-content:flex-start;", ";&:hover{background-color:", ";}}}}}}.ant-popover{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{display:flex;flex-direction:column;position:absolute;top:0;right:0;background-color:#ffffff;width:360px;min-width:160px;flex-shrink:0;", ";", ";@media only screen and (max-width:767px){width:310px;}.isoDropdownHeader{border-bottom:1px solid #f1f1f1;margin-bottom:0px;padding:15px 30px;width:100%;display:flex;align-items:center;justify-content:center;h3{font-size:14px;font-weight:500;color:", ";text-align:center;text-transform:uppercase;margin:0;}}.isoDropdownBody{width:100%;height:300px;overflow-y:auto;display:flex;flex-direction:column;margin-bottom:10px;background-color:", ";.isoDropdownListItem{padding:15px 30px;flex-shrink:0;text-decoration:none;display:flex;flex-direction:column;text-decoration:none;width:100%;", ";&:hover{background-color:", ";}.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:5px;}h5{font-size:13px;font-weight:500;color:", ";margin-top:0;}p{font-size:12px;font-weight:400;color:", ";white-space:nowrap;text-overflow:ellipsis;overflow:hidden;}.isoDate{font-size:11px;color:", ";flex-shrink:0;}}}.isoViewAllBtn{font-size:13px;font-weight:500;color:", ";padding:10px 15px 20px;display:flex;text-decoration:none;align-items:center;justify-content:center;text-align:center;", ";&:hover{color:", ";}}.isoDropdownFooterLinks{display:flex;align-items:center;justify-content:space-between;padding:10px 30px 20px;a{font-size:13px;font-weight:500;color:", ";text-decoration:none;padding:10px 20px;line-height:1;border:1px solid ", ";display:flex;align-items:center;justify-content:center;", ";&:hover{background-color:", ";border-color:", ";color:#ffffff;}}h3{font-size:14px;font-weight:500;color:", ";line-height:1.3;}}&.withImg{.isoDropdownListItem{display:flex;flex-direction:row;.isoImgWrapper{width:35px;height:35px;overflow:hidden;margin-right:15px;display:-webkit-inline-flex;display:-ms-inline-flex;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;background-color:", ";", ";img{width:100%;height:100%;object-fit:cover;}}.isoListContent{width:100%;display:flex;flex-direction:column;.isoListHead{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;}h5{margin-bottom:0;padding-right:15px;}.isoDate{font-size:11px;color:", ";flex-shrink:0;}p{white-space:normal;line-height:1.5;}}}}}}}&.topbarMail{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:519px){right:-170px;}}}}}&.topbarMessage{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:500px){right:-69px;}}}}}&.topbarNotification{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:500px){right:-120px;}}}}}&.topbarAddtoCart{.ant-popover-inner{.ant-popover-inner-content{.isoDropdownContent{@media only screen and (max-width:465px){right:-55px;}.isoDropdownHeader{margin-bottom:0;}.isoDropdownBody{background-color:", ";}}}}}}"], props => props['data-rtl'] === 'rtl' ? '0 265px 0 31px' : '0 31px 0 265px', Object(style_utils["c" /* transition */])(), props => props['data-rtl'] === 'rtl' ? '0px 260px 0px 15px !important' : '0px 15px 0px 260px !important', props => props['data-rtl'] === 'rtl' ? '0 109px 0 31px' : '0 31px 0 109px', props => props['data-rtl'] === 'rtl' ? '0px 15px !important' : '0px 15px !important', props => props['data-rtl'] === 'rtl' ? '0 0 0 20px' : '0 20px 0 0', props => props['data-rtl'] === 'rtl' ? '30px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '30px', props => props['data-rtl'] === 'rtl' ? '25px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '25px', Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('secondary', 1), props => props['data-rtl'] === 'rtl' ? 'inherit' : '10px', props => props['data-rtl'] === 'rtl' ? '10px' : 'inherit', Object(style_utils["a" /* borderRadius */])('50%'), Object(external_styled_theme_["palette"])('color', 0), Object(external_styled_theme_["palette"])('primary', 2), Object(external_styled_theme_["palette"])('color', 1), Object(external_styled_theme_["palette"])('color', 2), Object(external_styled_theme_["palette"])('grayscale', 9), Object(style_utils["a" /* borderRadius */])('50%'), Object(external_styled_theme_["palette"])('color', 3), Object(style_utils["a" /* borderRadius */])('50%'), Object(style_utils["a" /* borderRadius */])('5px'), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('text', 1), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('secondary', 6), Object(style_utils["a" /* borderRadius */])('5px'), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('grayscale', 6), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('grayscale', 3), Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('text', 2), Object(external_styled_theme_["palette"])('grayscale', 1), Object(external_styled_theme_["palette"])('text', 2), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('border', 1), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('grayscale', 9), Object(style_utils["a" /* borderRadius */])('50%'), Object(external_styled_theme_["palette"])('grayscale', 1), Object(external_styled_theme_["palette"])('grayscale', 6));
/* harmony default export */ var Topbar_styles = (Object(rtl["a" /* default */])(TopbarWrapper));
// CONCATENATED MODULE: ./containers/Admin/Topbar/Topbar.js

var Topbar_jsx = external_react_default.a.createElement;

function Topbar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Topbar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Topbar_ownKeys(Object(source), true).forEach(function (key) { Topbar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Topbar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Topbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const {
  Header
} = layout_default.a;
const {
  toggleCollapsed: Topbar_toggleCollapsed
} = actions["a" /* default */];

class Topbar_Topbar extends external_react_["Component"] {
  render() {
    const {
      toggleCollapsed,
      url,
      customizedTheme,
      locale
    } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70
    };
    return Topbar_jsx(Topbar_styles, null, Topbar_jsx(Header, {
      style: styling,
      className: collapsed ? 'isomorphicTopbar collapsed' : 'isomorphicTopbar'
    }, Topbar_jsx("div", {
      className: "isoLeft"
    }, Topbar_jsx("button", {
      className: collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen',
      style: {
        color: customizedTheme.textColor
      },
      onClick: toggleCollapsed
    }, Topbar_jsx(icon_config["j" /* TopbarMenuIcon */], {
      size: 24,
      color: customizedTheme.textColor
    }))), Topbar_jsx("ul", {
      className: "isoRight"
    }, Topbar_jsx("li", {
      onClick: () => this.setState({
        selectedItem: 'user'
      }),
      className: "isoUser"
    }, Topbar_jsx(TopbarUser, {
      locale: locale
    })))));
  }

}

/* harmony default export */ var Admin_Topbar_Topbar = (Object(external_react_redux_["connect"])(state => Topbar_objectSpread(Topbar_objectSpread({}, state.App), {}, {
  locale: state.LanguageSwitcher.language.locale,
  customizedTheme: state.ThemeSwitcher.topbarTheme
}), {
  toggleCollapsed: Topbar_toggleCollapsed
})(Topbar_Topbar));
// CONCATENATED MODULE: ./containers/Admin/DashboardLayout/DashboardLayout.styles.js


const AppHolder = external_styled_components_default.a.div.withConfig({
  displayName: "DashboardLayoutstyles__AppHolder",
  componentId: "sc-1ogz7qk-0"
})([".trigger{font-size:18px;line-height:64px;padding:0 16px;cursor:pointer;transition:color 0.3s;}.trigger:hover{color:", ";}.ant-layout-sider-collapsed .anticon{font-size:16px;}.ant-layout-sider-collapsed .nav-text{display:none;}.ant-layout{background:", ";&.isoContentMainLayout{overflow:auto;overflow-x:hidden;@media only screen and (min-width:768px) and (max-width:1220px){width:calc(100% - 64px);flex-shrink:0;}@media only screen and (max-width:767px){width:100%;flex-shrink:0;}}}.isoLayoutContent{width:100%;padding:35px;background-color:#ffffff;border:1px solid ", ";height:100%;}.isomorphicLayout{width:calc(100% - 240px);flex-shrink:0;overflow-x:hidden !important;@media only screen and (max-width:767px){width:100%;}@media only screen and (min-width:768px) and (max-width:1220px){width:calc(100% - 64px);}}.ant-layout-footer{font-size:13px;@media (max-width:767px){padding:10px 20px;}}"], Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('secondary', 1), Object(external_styled_theme_["palette"])('border', 0));
/* harmony default export */ var DashboardLayout_styles = (AppHolder);
// CONCATENATED MODULE: ./containers/Admin/DashboardLayout/DashboardLayout.js

var DashboardLayout_jsx = external_react_default.a.createElement;






const {
  Content,
  Footer
} = layout_default.a;
function DashboardLayout({
  children
}) {
  return DashboardLayout_jsx(DashboardLayout_styles, null, DashboardLayout_jsx(layout_default.a, {
    style: {
      height: '100vh'
    }
  }, DashboardLayout_jsx(Admin_Topbar_Topbar, null), DashboardLayout_jsx(layout_default.a, {
    style: {
      flexDirection: 'row',
      overflowX: 'hidden'
    }
  }, DashboardLayout_jsx(Sidebar, null), DashboardLayout_jsx(layout_default.a, {
    className: "isoContentMainLayout",
    style: {
      height: '100vh'
    }
  }, DashboardLayout_jsx(Content, {
    className: "isomorphicContent",
    style: {
      padding: '70px 0 0',
      flexShrink: '0',
      background: '#f1f3f6',
      width: '100%'
    }
  }, children), DashboardLayout_jsx(Footer, {
    style: {
      background: '#ffffff',
      textAlign: 'center',
      borderTop: '1px solid #ededed'
    }
  }, site_config.footerText))), DashboardLayout_jsx(ThemeSwitcher_ThemeSwitcher, null)));
}

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

/***/ "0+jO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ DateCell; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ HelperCells_ImageCell; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ LinkCell; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ TextCell; });

// UNUSED EXPORTS: EditableCell, DeleteCell, FilterDropdown

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./shared/components/Tables/ImageCell.js
var __jsx = external_react_default.a.createElement;

const PendingPool = {};
const ReadyPool = {};
function ImageCell({
  src
}) {
  const [srcState, setSrcState] = external_react_default.a.useState(false);
  const onLoadImage = external_react_default.a.useCallback(source => {
    ReadyPool[src] = true;

    if (source === src) {
      setSrcState(source);
    }
  }, [src]);
  const loadImage = external_react_default.a.useCallback(src => {
    if (ReadyPool[src]) {
      setSrcState(src);
      return;
    }

    if (PendingPool[src]) {
      PendingPool[src].push(onLoadImage);
      return;
    }

    PendingPool[src] = [onLoadImage];
    const img = new Image();

    img.onload = () => {
      PendingPool[src].forEach(callback => {
        callback(src);
      });
      delete PendingPool[src];
      img.onload = null;
      src = undefined;
    };

    img.src = srcState;
  }, [srcState, onLoadImage]);
  external_react_default.a.useEffect(() => {
    loadImage(src);
  }, [loadImage, src]);
  const style = src ? {
    backgroundImage: `url(${src})`,
    width: '70px',
    height: '70px',
    backgroundSize: 'cover'
  } : undefined;
  return __jsx("div", {
    className: "exampleImage",
    style: style
  });
}
// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/DeleteOutlined"
var DeleteOutlined_ = __webpack_require__("pUGn");
var DeleteOutlined_default = /*#__PURE__*/__webpack_require__.n(DeleteOutlined_);

// EXTERNAL MODULE: ./shared/components/Feedback/Popconfirm.js
var Popconfirm = __webpack_require__("jiIP");

// CONCATENATED MODULE: ./shared/components/Tables/DeleteCell.js

var DeleteCell_jsx = external_react_default.a.createElement;


/* harmony default export */ var DeleteCell = (function ({
  index,
  onDeleteCell
}) {
  return DeleteCell_jsx(Popconfirm["a" /* default */], {
    title: "Sure to delete?",
    okText: "DELETE",
    cancelText: "No",
    onConfirm: () => onDeleteCell(index)
  }, DeleteCell_jsx(DeleteOutlined_default.a, null));
});
// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/EditOutlined"
var EditOutlined_ = __webpack_require__("x0cy");
var EditOutlined_default = /*#__PURE__*/__webpack_require__.n(EditOutlined_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/CheckOutlined"
var CheckOutlined_ = __webpack_require__("AElg");
var CheckOutlined_default = /*#__PURE__*/__webpack_require__.n(CheckOutlined_);

// EXTERNAL MODULE: ./shared/components/uielements/input.js + 1 modules
var input = __webpack_require__("P1ll");

// CONCATENATED MODULE: ./shared/components/Tables/EditableCell.js


var EditableCell_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ var EditableCell = (function (props) {
  const [state, setState] = external_react_default.a.useState({
    value: props.value,
    editable: false
  });

  const handleChange = event => {
    const value = event.target.value;
    setState(_objectSpread(_objectSpread({}, state), {}, {
      value
    }));
  };

  const check = () => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      editable: false
    }));

    if (props.onChange) {
      props.onChange(state.value, props.columnsKey, props.index);
    }
  };

  const edit = () => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      editable: true
    }));
  };

  const {
    value,
    editable
  } = state;
  return EditableCell_jsx("div", {
    className: "isoEditData"
  }, editable ? EditableCell_jsx("div", {
    className: "isoEditDataWrapper"
  }, EditableCell_jsx(input["c" /* default */], {
    value: value,
    onChange: handleChange,
    onPressEnter: check
  }), EditableCell_jsx(CheckOutlined_default.a, {
    className: "isoEditIcon",
    onClick: check
  })) : EditableCell_jsx("p", {
    className: "isoDataWrapper"
  }, value || ' ', EditableCell_jsx(EditOutlined_default.a, {
    className: "isoEditIcon",
    onClick: edit
  })));
});
// EXTERNAL MODULE: ./shared/components/uielements/button.js + 1 modules
var uielements_button = __webpack_require__("DtN3");

// CONCATENATED MODULE: ./shared/components/Tables/FilterDropdown.js
var FilterDropdown_jsx = external_react_default.a.createElement;



/* harmony default export */ var FilterDropdown = (function ({
  searchText,
  onInputChange,
  onSearch
}) {
  return FilterDropdown_jsx("div", {
    className: "isoTableSearchBox"
  }, FilterDropdown_jsx(input["c" /* default */], {
    id: "tableFilterInput",
    placeholder: "Search name",
    value: searchText,
    onChange: onInputChange,
    onPressEnter: onSearch
  }), FilterDropdown_jsx(uielements_button["a" /* default */], {
    type: "primary",
    onClick: onSearch
  }, "Search"));
});
// CONCATENATED MODULE: ./shared/components/Tables/HelperCells.js
var HelperCells_jsx = external_react_default.a.createElement;






const DateCell = data => HelperCells_jsx("p", null, data.toLocaleString());

const HelperCells_ImageCell = src => HelperCells_jsx(ImageCell, {
  src: src
});

const LinkCell = (link, href) => HelperCells_jsx("a", {
  href: href ? href : '#'
}, link);

const TextCell = text => HelperCells_jsx("p", null, text);



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

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("YDWP");


/***/ }),

/***/ "1vGA":
/***/ (function(module, exports) {

module.exports = require("react-big-calendar/lib/addons/dragAndDrop");

/***/ }),

/***/ "27qp":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ "2iaJ":
/***/ (function(module, exports) {

module.exports = require("react-sortable-hoc");

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

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4jyV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BnVt");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);


const GalleryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Gallerystyles__GalleryWrapper",
  componentId: "sc-3xt19b-0"
})([".ant-col{padding:15px;}.gallery-item{box-shadow:0 6px 12px 0 rgba(0,0,0,0.15);&.active{border:5px solid ", ";}p{font-size:0.75rem;text-align:center;padding:0.5rem !important;margin:0 !important;}}.item-active{box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);-moz-box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);-webkit-box-shadow:0 10px 16px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);}.media-scroll-gallery{overflow:scroll !important;height:60vh;border:2px solid #eeeeee;align-items:start !important;}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("primary", 0));
/* harmony default export */ __webpack_exports__["a"] = (GalleryWrapper);

/***/ }),

/***/ "5Qj9":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/CloseOutlined");

/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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

/***/ "83ri":
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

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

/***/ "9Tpg":
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "9xqG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/9ef80c6c0e6c3ea2dd3069e18f35ada9.svg");

/***/ }),

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

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

/***/ "BJG+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/d05a649b0fe3d1a2aab9550c24d594ed.svg");

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

/***/ "DtN3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: ButtonGroup

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// EXTERNAL MODULE: ./shared/library/helpers/style_utils.js
var style_utils = __webpack_require__("p3F5");

// CONCATENATED MODULE: ./shared/components/uielements/styles/button.style.js




const Buttons = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "buttonstyle__Buttons",
  componentId: "sc-15097sb-0"
})(["&.ant-btn{display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;white-space:nowrap;line-height:1.5;padding:0 25px;font-size:14px;border-radius:4px;height:36px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;color:", ";border-color:", ";", ";&:hover{border-color:", ";color:", ";}> .anticon + span,> span + .anticon{margin:", ";}.anticon-right{transform:", ";}.anticon-left{transform:", ";}&.ant-btn-primary{background-color:", ";border-color:", ";&:hover{background-color:", ";border-color:", ";color:#fff;}}&.ant-btn-sm{padding:0 15px;height:28px;font-size:12px;&.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline){padding:", ";.anticon{margin:", ";}}}&.ant-btn-lg{padding:0 35px;font-size:14px;height:42px;}&.ant-btn-primary{color:#ffffff;}&.ant-btn-dashed{border-style:dashed;border-color:", ";&:hover{color:", ";border-color:", ";}}&.ant-btn-danger{background-color:", ";border-color:", ";color:#ffffff;&:hover{background-color:", ";border-color:", ";}&.ant-btn-background-ghost{color:", ";background-color:transparent;border-color:", ";&:hover{color:", ";border-color:", ";}}}&.ant-btn-circle,&.ant-btn-circle-outline{width:35px;padding:0;font-size:14px;border-radius:50%;height:35px;&.ant-btn-sm{padding:0;height:28px;width:28px;font-size:12px;}&.ant-btn-lg{padding:0;font-size:14px;height:42px;width:42px;}}&.ant-btn.disabled,&.ant-btn[disabled],&.ant-btn.disabled:hover,&.ant-btn[disabled]:hover,&.ant-btn.disabled:focus,&.ant-btn[disabled]:focus,&.ant-btn.disabled:active,&.ant-btn[disabled]:active,&.ant-btn.disabled.active,&.ant-btn[disabled].active{color:", ";background-color:#f7f7f7;border-color:", ";cursor:not-allowed;}&.ant-btn-loading:not(.ant-btn-circle):not(.ant-btn-circle-outline) .anticon{margin:", ";}&.isoButton{display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:0;white-space:nowrap;line-height:1.5;padding:0 25px;font-size:13px;border-radius:4px;height:35px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;color:#ffffff;background-color:", ";", ";&:hover{background-color:", ";}&.isoBtnSm{padding:0 15px;height:28px;font-size:12px;}&.isoBtnLg{padding:0 35px;font-size:14px;height:42px;}}}+ .ant-btn-group{margin-left:", " !important;margin-right:", " !important;}"], Object(external_styled_theme_["palette"])('text', 1), Object(external_styled_theme_["palette"])('border', 0), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? '0 0.5em 0 0' : '0 0 0 0.5em', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 10), Object(external_styled_theme_["palette"])('primary', 10), props => props['data-rtl'] === 'rtl' ? '0 24px 0 15px' : '0 15px 0 24px', props => props['data-rtl'] === 'rtl' ? '0 -17px 0 0' : '0 0 0 -17px', Object(external_styled_theme_["palette"])('border', 1), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('error', 0), Object(external_styled_theme_["palette"])('error', 0), Object(external_styled_theme_["palette"])('error', 2), Object(external_styled_theme_["palette"])('error', 2), Object(external_styled_theme_["palette"])('error', 0), Object(external_styled_theme_["palette"])('error', 0), Object(external_styled_theme_["palette"])('error', 2), Object(external_styled_theme_["palette"])('error', 2), Object(external_styled_theme_["palette"])('grayscale', 2), Object(external_styled_theme_["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0 -14px 0 0' : '0 0 0 -14px', Object(external_styled_theme_["palette"])('primary', 0), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 2), props => props['data-rtl'] === 'rtl' ? '0' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0');

const RadioButtons = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "buttonstyle__RadioButtons",
  componentId: "sc-15097sb-1"
})([".ant-radio-button-wrapper{height:35px;line-height:33px;color:", ";border:1px solid ", ";border-left:0;background:#fff;padding:0 20px;&:hover,&.ant-radio-button-wrapper-focused{color:", ";}&.ant-radio-button-wrapper-checked{background:#fff;border-color:", ";color:", ";box-shadow:-1px 0 0 0 ", ";}}"], Object(external_styled_theme_["palette"])('text', 1), Object(external_styled_theme_["palette"])('border', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0));

const ButtonsGroup = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "buttonstyle__ButtonsGroup",
  componentId: "sc-15097sb-2"
})(["&.ant-btn-group{.ant-btn{margin:0;margin-right:0;display:inline-block;margin-bottom:0;font-weight:500;text-align:center;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;background-image:none;border:1px solid transparent;border-color:", ";white-space:nowrap;line-height:1.5;padding:0 8px;font-size:14px;border-radius:0;height:36px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;", ";&:hover{border-color:", ";}&.ant-btn-dashed{border-style:dashed;&:hover{border-color:", ";}}&.ant-btn-primary{border-color:", ";&:hover{border-color:", ";}}}> .ant-btn:first-child:not(:last-child){border-radius:", ";}> .ant-btn:last-child:not(:first-child){border-radius:", ";}.ant-btn-primary:last-child:not(:first-child),.ant-btn-primary + .ant-btn-primary{border-left-color:", ";border-right-color:", ";}.ant-btn-primary:first-child:not(:last-child){border-left-color:", ";border-right-color:", ";}.ant-btn + .ant-btn,+ .ant-btn{margin-left:", " !important;margin-right:", " !important;}&.ant-btn-group-lg{> .ant-btn{padding:0 35px;font-size:14px;height:42px;}}&.ant-btn-group-sm{> .ant-btn{padding:0 15px;height:28px;font-size:12px;}}}&.ant-btn-group + &.ant-btn-group{margin-left:", " !important;margin-right:", " !important;}"], Object(external_styled_theme_["palette"])('border', 1), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 10), props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0', props => props['data-rtl'] === 'rtl' ? Object(external_styled_theme_["palette"])('primary', 0) : Object(external_styled_theme_["palette"])('primary', 2), props => props['data-rtl'] === 'rtl' ? Object(external_styled_theme_["palette"])('primary', 2) : Object(external_styled_theme_["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? Object(external_styled_theme_["palette"])('primary', 2) : Object(external_styled_theme_["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? Object(external_styled_theme_["palette"])('primary', 0) : Object(external_styled_theme_["palette"])('primary', 2), props => props['data-rtl'] === 'rtl' ? '0' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '-1px', props => props['data-rtl'] === 'rtl' ? '-1px' : '0');

const GhostButtons = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "buttonstyle__GhostButtons",
  componentId: "sc-15097sb-3"
})([".ant-btn-background-ghost{background:transparent !important;border-color:#fff;color:#fff;&.ant-btn-primary{color:", ";background-color:transparent;border-color:", ";}}"], Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0));


// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./shared/components/uielements/button.js



const AntButton = Buttons(button_default.a);
const isoButton = Object(rtl["a" /* default */])(AntButton);
const AntButtonGroup = ButtonsGroup(button_default.a.Group);
const ButtonGroup = Object(rtl["a" /* default */])(AntButtonGroup);
/* harmony default export */ var uielements_button = __webpack_exports__["a"] = (isoButton);


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

/***/ "Gss8":
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ "IFJb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/6ae9e2f536f0c760f14d4d2e5c5865c1.svg");

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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "K6uA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/f542aafb7eb53b837c7a9141b5b96463.svg");

/***/ }),

/***/ "KOAY":
/***/ (function(module, exports) {

module.exports = require("react-places-autocomplete");

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

/***/ "Nu+n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("BnVt");
/* harmony import */ var styled_theme__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_theme__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("p3F5");



const DropzoneWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Dropzonestyles__DropzoneWrapper",
  componentId: "sc-1bvh3mb-0"
})([".filepicker{width:100%;min-height:320px;padding:35px 0px;display:flex;flex-wrap:wrap;align-items:center;justify-content:center;background-color:#ffffff;border:1px dashed ", ";position:relative;overflow:hidden;cursor:pointer;text-align:center;", ";.closeBtn{width:30px;height:30px;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:0;margin-right:0;background-color:transparent;outline:0;border:0;position:absolute;top:0;right:0;", ";", ";", ";&:hover{&:before{color:", ";}}}.dz-message{width:100%;position:relative;display:flex;flex-direction:column;margin:0;span{font-size:20px;color:", ";font-weight:700;margin-top:6px;}}.dz-progress{width:100%;height:100px;display:flex;align-items:center;justify-content:center;flex-shrink:0;position:absolute;top:0;left:0;background:none;background-color:rgba(255,255,255,0.8);", ";}.dz-preview{width:100px;height:127px;display:flex;flex-direction:column;flex-shrink:0;overflow:hidden;float:left;position:relative;margin:0;margin-left:2px;margin-bottom:2px;.dz-progress{display:none;}.dz-image{width:100%;height:100px;margin-bottom:2px;display:block;flex-shrink:0;overflow-y:hidden;position:relative;background:none;background-color:", ";", ";img{max-width:100%;position:absolute;left:0;right:0;top:0;bottom:0;margin:auto;}}.dz-details{width:100%;height:25px;padding:0 8px;flex-shrink:0;opacity:1;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;cursor:default;background-color:", ";.dz-size{display:none;}.dz-filename{width:100%;overflow:hidden;text-overflow:ellipsis;span{font-size:14px;color:", ";white-space:nowrap;background-color:transparent;}&:not(:hover){span{border:0;}}&:hover{span{border:0;background-color:transparent;}}}}.dz-success-mark{display:none;}.dz-remove{font-size:14px;font-weight:400;background-color:", ";width:100%;height:25px;color:#fff;line-height:25px;display:inline-block;text-align:center;position:absolute;bottom:-25px;left:0px;cursor:pointer;border:0;outline:0;padding:0;", ";}&:hover{.dz-remove{bottom:0;}}}&.dz-started{.dz-message{display:none;}}}"], Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("border", 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__[/* borderRadius */ "a"])("0"), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__[/* borderRadius */ "a"])("50%"), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__[/* boxShadow */ "b"])("none"), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__[/* transition */ "c"])(), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("text", 0), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("text", 3), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__[/* borderRadius */ "a"])("0"), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("secondary", 6), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__[/* borderRadius */ "a"])("0"), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("secondary", 1), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("text", 4), Object(styled_theme__WEBPACK_IMPORTED_MODULE_1__["palette"])("error", 0), Object(_iso_lib_helpers_style_utils__WEBPACK_IMPORTED_MODULE_2__[/* transition */ "c"])());
/* harmony default export */ __webpack_exports__["a"] = (DropzoneWrapper);

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

/***/ "OnoS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// CONCATENATED MODULE: ./shared/components/utility/boxTitle.style.js


const BoxTitle = external_styled_components_default.a.h3.withConfig({
  displayName: "boxTitlestyle__BoxTitle",
  componentId: "sc-132ff7v-0"
})(["font-size:14px;font-weight:500;color:", ";margin:0;margin-bottom:5px;"], Object(external_styled_theme_["palette"])('text', 0));
const BoxSubTitle = external_styled_components_default.a.p.withConfig({
  displayName: "boxTitlestyle__BoxSubTitle",
  componentId: "sc-132ff7v-1"
})(["font-size:13px;font-weight:400;color:", ";line-height:24px;"], Object(external_styled_theme_["palette"])('text', 3));

// CONCATENATED MODULE: ./shared/components/utility/boxTitle.js
var __jsx = external_react_default.a.createElement;


/* harmony default export */ var boxTitle = (props => {
  return __jsx("div", null, props.title ? __jsx(BoxTitle, {
    className: "isoBoxTitle"
  }, " ", props.title, " ") : '', props.subtitle ? __jsx(BoxSubTitle, {
    className: "isoBoxSubTitle"
  }, " ", props.subtitle, " ") : '');
});
// CONCATENATED MODULE: ./shared/components/utility/box.style.js


const BoxWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "boxstyle__BoxWrapper",
  componentId: "sc-6ry71n-0"
})(["width:100%;height:100%;padding:20px;background-color:#ffffff;border:1px solid ", ";margin:0 0 30px;&:last-child{margin-bottom:0;}@media only screen and (max-width:767px){padding:20px;", ";}&.half{width:calc(50% - 34px);@media (max-width:767px){width:100%;}}"], Object(external_styled_theme_["palette"])('border', 0), ''
/* margin: 0 10px 30px; */
);

// CONCATENATED MODULE: ./shared/components/utility/box.js
var box_jsx = external_react_default.a.createElement;



/* harmony default export */ var box = __webpack_exports__["a"] = (props => box_jsx(BoxWrapper, {
  className: `${props.className ? props.className : ''} isoBoxWrapper`,
  style: props.style
}, box_jsx(boxTitle, {
  title: props.title,
  subtitle: props.subtitle
}), props.children));

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

/***/ "Puj+":
/***/ (function(module, exports) {

module.exports = require("antd/lib/table");

/***/ }),

/***/ "QghY":
/***/ (function(module, exports) {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ "S3md":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "T0Ou":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__("91UR");

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.bubble.css
var quill_bubble = __webpack_require__("yOgr");

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.core.css
var quill_core = __webpack_require__("cBUL");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./components/Admin/Property/Editor/Editor.styles.js



const QuillEditor = external_styled_components_default.a.div.withConfig({
  displayName: "Editorstyles__QuillEditor",
  componentId: "o4bkv5-0"
})([".ql-editor{min-height:215px;text-align:", ";}.ql-toolbar.ql-snow,.ql-container.ql-snow{border:1px solid ", ";text-align:", ";.ql-formats{margin:", ";}.ql-picker-label{padding:", ";&:not(.ql-color-picker):not(.ql-icon-picker){svg{right:", ";left:", ";}}}}.ql-container{font-family:", ";min-height:220px;}.ql-editor p,.ql-editor ol,.ql-editor ul,.ql-editor pre,.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6{color:", ";}.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:", ";}.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:", ";}.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:", ";}.ql-snow a{color:", ";}"], props => props["data-rtl"] === "rtl" ? "right" : "left", Object(external_styled_theme_["palette"])("border", 0), props => props["data-rtl"] === "rtl" ? "right" : "left", props => props["data-rtl"] === "rtl" ? "0 0 0 15px" : "0 15px 0 0", props => props["data-rtl"] === "rtl" ? "0 8px 0 2px" : "0 2px 0 8px", props => props["data-rtl"] === "rtl" ? "inherit" : "0", props => props["data-rtl"] === "rtl" ? "0" : "inherit", Object(external_styled_theme_["font"])("primary", 0), Object(external_styled_theme_["palette"])("text", 0), Object(external_styled_theme_["palette"])("primary", 0), Object(external_styled_theme_["palette"])("primary", 0), Object(external_styled_theme_["palette"])("primary", 0), Object(external_styled_theme_["palette"])("primary", 0));
/* harmony default export */ var Editor_styles = (Object(rtl["a" /* default */])(QuillEditor));
// CONCATENATED MODULE: ./components/Admin/Property/Editor/Editor.js
var __jsx = external_react_default.a.createElement;

// import ReactQuill from "react-quill";




const ReactQuill = false ? undefined : () => false;

function Editor(props) {
  const {
    0: theme,
    1: setTheme
  } = Object(external_react_["useState"])("snow");
  const {
    html,
    onEditorStateChange,
    placeholder
  } = props;

  function handleChange(html) {
    onEditorStateChange(html);
  }

  function handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    setTheme(newTheme);
  }

  return __jsx(Editor_styles, null, __jsx(ReactQuill, {
    theme: theme,
    onChange: handleChange,
    value: html,
    modules: Editor.modules,
    formats: Editor.formats,
    bounds: ".app",
    placeholder: placeholder
  }));
}
/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */


Editor.modules = {
  toolbar: [// [{ header: '1' }, { header: '2' }, { font: [] }],
  // [{ size: [] }],
  [{
    size: ["small", false, "large", "huge"]
  }], // custom dropdown
  [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], ["bold", "italic", "underline", "strike", "blockquote"], [{
    list: "ordered"
  }, {
    list: "bullet"
  }, {
    indent: "-1"
  }, {
    indent: "+1"
  }], ["link", "image", "video"], ["clean"], [{
    color: []
  }, {
    background: []
  }], // dropdown with defaults from theme
  [{
    font: []
  }], [{
    align: []
  }]],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */

Editor.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video"];
/*
 * PropType validation
 */

/* harmony default export */ var Editor_Editor = __webpack_exports__["a"] = (Editor);

/***/ }),

/***/ "T3YA":
/***/ (function(module, exports) {

module.exports = require("react-big-calendar");

/***/ }),

/***/ "TI/I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xKsY");
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default.a);

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

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

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

/***/ "XQdj":
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ "YDWP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./containers/Admin/DashboardLayout/DashboardLayout.js + 29 modules
var DashboardLayout = __webpack_require__("/6NR");

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/DeleteOutlined"
var DeleteOutlined_ = __webpack_require__("pUGn");
var DeleteOutlined_default = /*#__PURE__*/__webpack_require__.n(DeleteOutlined_);

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/EditOutlined"
var EditOutlined_ = __webpack_require__("x0cy");
var EditOutlined_default = /*#__PURE__*/__webpack_require__.n(EditOutlined_);

// EXTERNAL MODULE: external "clone"
var external_clone_ = __webpack_require__("sAR6");
var external_clone_default = /*#__PURE__*/__webpack_require__.n(external_clone_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./shared/components/utility/box.js + 3 modules
var box = __webpack_require__("OnoS");

// EXTERNAL MODULE: ./shared/components/utility/helper-text.js
var helper_text = __webpack_require__("vSWp");

// EXTERNAL MODULE: ./shared/components/utility/layoutWrapper.js + 1 modules
var layoutWrapper = __webpack_require__("kOzy");

// EXTERNAL MODULE: ./shared/components/utility/pageHeader.js + 1 modules
var pageHeader = __webpack_require__("yc1h");

// EXTERNAL MODULE: ./shared/components/utility/intlMessages.js
var intlMessages = __webpack_require__("l2Wt");

// EXTERNAL MODULE: ./shared/components/utility/customScrollBar.js
var customScrollBar = __webpack_require__("lRMu");

// EXTERNAL MODULE: ./shared/components/uielements/button.js + 1 modules
var uielements_button = __webpack_require__("DtN3");

// EXTERNAL MODULE: ./shared/components/Feedback/Popconfirm.js
var Popconfirm = __webpack_require__("jiIP");

// EXTERNAL MODULE: ./shared/components/Tables/HelperCells.js + 4 modules
var HelperCells = __webpack_require__("0+jO");

// EXTERNAL MODULE: ./shared/components/utility/loader.js
var loader = __webpack_require__("7Sp7");

// EXTERNAL MODULE: ./shared/containers/Tables/AntTables/AntTables.styles.js + 1 modules
var AntTables_styles = __webpack_require__("uhnA");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./components/Admin/Property/PropertyList.styles.js



const CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "PropertyListstyles__CardWrapper",
  componentId: "gm57pl-0"
})(["width:auto;overflow:inherit;position:relative;.isoPropertyTable{table{tbody{tr{td{.isoPropertyBtnView{display:flex;flex-direction:row;opacity:0;> a,button{margin:", ";}}}&:hover{.isoPropertyBtnView{opacity:1;}}}}}}.isoPropertyTableBtn{display:flex;margin-bottom:20px;a{margin-left:auto;}}.propertyListTable{.ant-dropdown-menu-item,.ant-dropdown-menu-submenu-title{&:hover{background-color:", ";}}.propertyViewBtn{color:", ";&:hover{color:", ";}}.propertyDltBtn{border:0;color:", ";&:hover{border:0;color:", ";}}.opt-cell{svg{margin-right:10px;width:25px;height:25px;}}}"], props => props["data-rtl"] === "rtl" ? "0 0 0 15px" : "0 15px 0 0", Object(external_styled_theme_["palette"])("secondary", 1), Object(external_styled_theme_["palette"])("text", 3), Object(external_styled_theme_["palette"])("primary", 0), Object(external_styled_theme_["palette"])("text", 1), Object(external_styled_theme_["palette"])("primary", 0));
const SinglePropertyWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "PropertyListstyles__SinglePropertyWrapper",
  componentId: "gm57pl-1"
})([".property-detail-actions{margin:20px;background:#fff;padding:20px;button{margin-right:20px;}a:last-child{margin-left:auto;}}.property-detail-main{margin:20px;background:#fff;padding:20px;}.property-detail-tab{margin:20px;padding:20px;background-color:#ffffff;}"]);
/* harmony default export */ var PropertyList_styles = (Object(rtl["a" /* default */])(CardWrapper));
// EXTERNAL MODULE: ./redux/properties/actions.js
var actions = __webpack_require__("JRQ4");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// CONCATENATED MODULE: ./components/Admin/Property/PropertyList.js


var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















const renderCell = (object, type, key) => {
  const value = object[key];

  switch (type) {
    case "ImageCell":
      return Object(HelperCells["b" /* ImageCell */])(value);

    case "DateCell":
      return Object(HelperCells["a" /* DateCell */])(value);

    case "LinkCell":
      return Object(HelperCells["c" /* LinkCell */])(value);

    default:
      return Object(HelperCells["d" /* TextCell */])(value);
  }
};

const tableColumns = [{
  title: "Name",
  key: "name",
  width: 100,
  render: object => renderCell(object, "TextCell", "name")
}, {
  title: "Address",
  key: "address",
  width: 100,
  render: object => renderCell(object, "TextCell", "address")
}, {
  title: "BookervilleID",
  key: "bookerville_id",
  width: 200,
  render: object => renderCell(object, "TextCell", "bookerville_id")
}, {
  title: "Updated At",
  key: "updated_date",
  width: 200,
  render: object => renderCell(object, "DateCell", "updated_date")
}];
function PropertyList() {
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    items,
    loading
  } = Object(external_react_redux_["useSelector"])(state => state.Properties);
  const [state, setState] = external_react_default.a.useState({
    columns: createcolumns(external_clone_default()(tableColumns)),
    dataList: items
  });
  Object(external_react_["useEffect"])(() => {
    dispatch(actions["a" /* default */].getAllProperties());
  }, []);
  Object(external_react_["useEffect"])(() => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      dataList: items
    }));
  }, [items]);
  const {
    columns,
    dataList
  } = state;

  function createcolumns(columns) {
    const optColumn = {
      title: "operation",
      dataIndex: "operation",
      width: 200,
      render: (text, record, index) => __jsx("div", {
        className: "opt-cell"
      }, __jsx(link_default.a, {
        href: `/admin/property?id=${record.id}`
      }, __jsx(EditOutlined_default.a, {
        onClick: onEditCell
      })), __jsx(Popconfirm["a" /* default */], {
        title: "Sure to delete?",
        onConfirm: () => onDeleteCell(record.id)
      }, __jsx(DeleteOutlined_default.a, null)))
    };
    columns.push(optColumn);
    return columns;
  }

  function onEditCell(index) {
    console.log("oneditcell", index);
  }

  function onDeleteCell(propertyId) {
    dispatch(actions["a" /* default */].deleteProperty(propertyId)); // setState({ ...state, dataList });
  }

  return __jsx(layoutWrapper["a" /* default */], null, __jsx(pageHeader["a" /* default */], null, "Property"), __jsx(box["a" /* default */], null, __jsx(PropertyList_styles, null, __jsx("div", {
    className: "isoPropertyTableBtn"
  }, __jsx(link_default.a, {
    href: `property?id=1234`
  }, __jsx("a", null, __jsx(uielements_button["a" /* default */], {
    type: "primary",
    className: "mateAddPropertyBtn"
  }, "Add Property")))), loading ? __jsx(loader["a" /* default */], null) : __jsx("div", {
    className: "isoPropertyTable"
  }, __jsx(customScrollBar["a" /* default */], {
    style: {
      width: "100%",
      height: "calc(60vh - 70px)"
    }
  }, __jsx(AntTables_styles["a" /* default */], {
    onRow: (record, rowIndex) => {
      return {
        onClick: event => {
          console.log("rowClick", record, rowIndex);
        }
      };
    },
    columns: columns,
    dataSource: items,
    pagination: {
      pageSize: 5
    },
    className: "propertyListTable"
  }))))));
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: ./redux/authentication/auth.utils.js
var auth_utils = __webpack_require__("vBVF");

// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__("tI3Q");
var row_default = /*#__PURE__*/__webpack_require__.n(row_);

// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__("vsU0");
var col_default = /*#__PURE__*/__webpack_require__.n(col_);

// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__("eGmO");
var button_default = /*#__PURE__*/__webpack_require__.n(button_);

// EXTERNAL MODULE: ./shared/components/uielements/tabs.js + 1 modules
var tabs = __webpack_require__("cYqx");

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.snow.css
var quill_snow = __webpack_require__("91UR");

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.bubble.css
var quill_bubble = __webpack_require__("yOgr");

// EXTERNAL MODULE: ./node_modules/react-quill/dist/quill.core.css
var quill_core = __webpack_require__("cBUL");

// CONCATENATED MODULE: ./shared/components/uielements/styles/editor.style.js



const QuillEditor = external_styled_components_default.a.div.withConfig({
  displayName: "editorstyle__QuillEditor",
  componentId: "sc-1ksk8ar-0"
})([".ql-editor{min-height:215px;text-align:", ";}.ql-toolbar.ql-snow,.ql-container.ql-snow{border:1px solid ", ";text-align:", ";.ql-formats{margin:", ";}.ql-picker-label{padding:", ";&:not(.ql-color-picker):not(.ql-icon-picker){svg{right:", ";left:", ";}}}}.ql-container{font-family:", ";min-height:220px;}.ql-editor p,.ql-editor ol,.ql-editor ul,.ql-editor pre,.ql-editor blockquote,.ql-editor h1,.ql-editor h2,.ql-editor h3,.ql-editor h4,.ql-editor h5,.ql-editor h6{color:", ";}.ql-snow.ql-toolbar button:hover,.ql-snow .ql-toolbar button:hover,.ql-snow.ql-toolbar button:focus,.ql-snow .ql-toolbar button:focus,.ql-snow.ql-toolbar button.ql-active,.ql-snow .ql-toolbar button.ql-active,.ql-snow.ql-toolbar .ql-picker-label:hover,.ql-snow .ql-toolbar .ql-picker-label:hover,.ql-snow.ql-toolbar .ql-picker-label.ql-active,.ql-snow .ql-toolbar .ql-picker-label.ql-active,.ql-snow.ql-toolbar .ql-picker-item:hover,.ql-snow .ql-toolbar .ql-picker-item:hover,.ql-snow.ql-toolbar .ql-picker-item.ql-selected,.ql-snow .ql-toolbar .ql-picker-item.ql-selected{color:", ";}.ql-snow.ql-toolbar button:hover .ql-fill,.ql-snow .ql-toolbar button:hover .ql-fill,.ql-snow.ql-toolbar button:focus .ql-fill,.ql-snow .ql-toolbar button:focus .ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill{fill:", ";}.ql-snow.ql-toolbar button:hover .ql-stroke,.ql-snow .ql-toolbar button:hover .ql-stroke,.ql-snow.ql-toolbar button:focus .ql-stroke,.ql-snow .ql-toolbar button:focus .ql-stroke,.ql-snow.ql-toolbar button.ql-active .ql-stroke,.ql-snow .ql-toolbar button.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,.ql-snow.ql-toolbar button:hover .ql-stroke-miter,.ql-snow .ql-toolbar button:hover .ql-stroke-miter,.ql-snow.ql-toolbar button:focus .ql-stroke-miter,.ql-snow .ql-toolbar button:focus .ql-stroke-miter,.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter{stroke:", ";}.ql-snow a{color:", ";}"], props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', props => props['data-rtl'] === 'rtl' ? '0 8px 0 2px' : '0 2px 0 8px', props => props['data-rtl'] === 'rtl' ? 'inherit' : '0', props => props['data-rtl'] === 'rtl' ? '0' : 'inherit', Object(external_styled_theme_["font"])('primary', 0), Object(external_styled_theme_["palette"])('text', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0));
/* harmony default export */ var editor_style = (Object(rtl["a" /* default */])(QuillEditor));
// CONCATENATED MODULE: ./shared/components/uielements/editor.js
var editor_jsx = external_react_default.a.createElement;

// import ReactQuill from "react-quill";




const ReactQuill = false ? undefined : () => false;

class editor_Editor extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorHtml: "",
      theme: "snow"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({
      editorHtml: html
    });
    this.props.onEditorStateChange(html);
  }

  handleThemeChange(newTheme) {
    if (newTheme === "core") newTheme = null;
    this.setState({
      theme: newTheme
    });
  }

  render() {
    return editor_jsx(editor_style, null, editor_jsx(ReactQuill, {
      theme: this.state.theme,
      onChange: this.handleChange,
      value: this.state.editorHtml,
      modules: editor_Editor.modules,
      formats: editor_Editor.formats,
      bounds: ".app",
      placeholder: this.props.placeholder
    }));
  }

}
/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */


editor_Editor.modules = {
  toolbar: [// [{ header: '1' }, { header: '2' }, { font: [] }],
  // [{ size: [] }],
  [{
    size: ["small", false, "large", "huge"]
  }], // custom dropdown
  [{
    header: [1, 2, 3, 4, 5, 6, false]
  }], ["bold", "italic", "underline", "strike", "blockquote"], [{
    list: "ordered"
  }, {
    list: "bullet"
  }, {
    indent: "-1"
  }, {
    indent: "+1"
  }], ["link", "image", "video"], ["clean"], [{
    color: []
  }, {
    background: []
  }], // dropdown with defaults from theme
  [{
    font: []
  }], [{
    align: []
  }]],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */

editor_Editor.formats = ["header", "font", "size", "bold", "italic", "underline", "strike", "blockquote", "list", "bullet", "indent", "link", "image", "video"];
/*
 * PropType validation
 */

/* harmony default export */ var editor = (editor_Editor);
// EXTERNAL MODULE: external "react-google-maps"
var external_react_google_maps_ = __webpack_require__("9Tpg");

// EXTERNAL MODULE: external "@ant-design/icons/lib/icons/CloseOutlined"
var CloseOutlined_ = __webpack_require__("5Qj9");
var CloseOutlined_default = /*#__PURE__*/__webpack_require__.n(CloseOutlined_);

// EXTERNAL MODULE: external "react-places-autocomplete"
var external_react_places_autocomplete_ = __webpack_require__("KOAY");
var external_react_places_autocomplete_default = /*#__PURE__*/__webpack_require__.n(external_react_places_autocomplete_);

// EXTERNAL MODULE: ./shared/components/uielements/input.js + 1 modules
var input = __webpack_require__("P1ll");

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// CONCATENATED MODULE: ./components/Admin/Property/Location/LocationSearchAutoComplete.js

var LocationSearchAutoComplete_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function LocationSearchAutoComplete_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class LocationSearchAutoComplete_LocationSearchAutoComplete extends external_react_default.a.Component {
  constructor(props) {
    super(props);

    LocationSearchAutoComplete_defineProperty(this, "handleChange", address => {
      this.setState({
        address
      });
    });

    LocationSearchAutoComplete_defineProperty(this, "handleSelect", (address, placeId) => {
      this.setState({
        address
      });
      const request = {
        placeId: placeId,
        fields: ["name", "geometry", "address_components", "formatted_address", "icon", "id", "name", "place_id", "reference", "scope", "types", "url", "utc_offset", "vicinity"]
      };
      this.placesService.getDetails(request, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          this.props.onPlaceChanged(place);
          console.log("placesService", place.geometry.location.lat(), place.geometry.location.lng());
        }
      });
    });

    this.state = {
      address: ""
    }; // if (typeof window !== 'undefined'){
    //
    // }

    if (false) {}

    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextContext) {
    this.setState({
      address: nextProps.address
    });
  }

  render() {
    const {
      placeholder,
      name
    } = this.props;
    return LocationSearchAutoComplete_jsx(external_react_places_autocomplete_default.a, {
      value: this.state.address,
      onChange: this.handleChange,
      onSelect: this.handleSelect
    }, ({
      getInputProps,
      suggestions,
      getSuggestionItemProps,
      loading
    }) => LocationSearchAutoComplete_jsx("div", {
      className: "autocomplete-container"
    }, LocationSearchAutoComplete_jsx("div", {
      className: "place-input-wrapper"
    }, LocationSearchAutoComplete_jsx(input["c" /* default */], getInputProps({
      // name: name ? name : "address",
      placeholder: placeholder ? placeholder : "Search for address..."
    })), LocationSearchAutoComplete_jsx(CloseOutlined_default.a, null)), LocationSearchAutoComplete_jsx("div", {
      className: "autocomplete-dropdown-container"
    }, loading && LocationSearchAutoComplete_jsx("div", null, "Loading..."), suggestions.map((suggestion, index) => {
      const className = suggestion.active ? "suggestion-item active" : "suggestion-item";
      return LocationSearchAutoComplete_jsx("div", _extends({
        key: index
      }, getSuggestionItemProps(suggestion, {
        className
      })), LocationSearchAutoComplete_jsx(fa_["FaMapPin"], null), LocationSearchAutoComplete_jsx("span", null, suggestion.description));
    }))));
  }

}

/* harmony default export */ var Location_LocationSearchAutoComplete = (LocationSearchAutoComplete_LocationSearchAutoComplete);
// CONCATENATED MODULE: ./components/Admin/Property/Location/Location.styles.js

const LocationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Locationstyles__LocationWrapper",
  componentId: "sc-15r2hct-0"
})([".autocomplete-container{width:100%;position:relative;.place-input-wrapper{position:relative;input{width:100%;font-size:1rem;}svg{position:absolute;right:1rem;top:0.7rem;}}.autocomplete-dropdown-container{position:absolute;top:40px;border-left:1px solid lightgray;border-right:1px solid lightgray;font-size:1rem;z-index:9999;width:100%;.suggestion-item{border-bottom:1px solid lightgray;padding:0.5rem;cursor:pointer;background:#fff;svg{margin:0 10px;}&.active{background-color:lightgray;}}}}"]);
/* harmony default export */ var Location_styles = (LocationWrapper);
// CONCATENATED MODULE: ./components/Admin/Property/Location/Location.js
var Location_jsx = external_react_default.a.createElement;



 // const apiKey = 'AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA'

class Location_Location extends external_react_default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      // place: {},
      // address: '12 Greene St, Quincy, MA 02170, USA',
      defaultCenter: {
        lat: 42.2677899,
        lng: -71.01325899999999
      },
      circle: {
        radius: 12000,
        options: {
          strokeColor: "#0071AA"
        }
      },
      zoom: 10.5
    };
    this.showPlace = this.showPlace.bind(this);
    this.mapRef = /*#__PURE__*/external_react_default.a.createRef();
  }

  showPlace(place) {
    this.props.onPlaceChange(place);
  }

  render() {
    const {
      address,
      center,
      onReset
    } = this.props;
    const GoogleMapsComponent = Object(external_react_google_maps_["withGoogleMap"])(props => {
      return Location_jsx(external_react_google_maps_["GoogleMap"], {
        defaultZoom: this.state.zoom,
        center: center.lat ? center : this.state.defaultCenter
      }, center.lat && Location_jsx(external_react_google_maps_["Marker"], {
        position: center
      }), center.lat && Location_jsx(external_react_google_maps_["Circle"], {
        defaultCenter: center,
        radius: this.state.circle.radius,
        options: this.state.circle.options
      }));
    });
    return Location_jsx(Location_styles, null, Location_jsx(Location_LocationSearchAutoComplete, {
      address: address,
      onPlaceChanged: this.showPlace,
      onReset: onReset
    }), Location_jsx("div", {
      className: "animated fadeIn"
    }, Location_jsx(GoogleMapsComponent, {
      ref: this.mapRef,
      key: "map",
      loadingElement: Location_jsx("div", {
        style: {
          height: `100%`
        }
      }),
      containerElement: Location_jsx("div", {
        style: {
          height: `400px`
        }
      }),
      mapElement: Location_jsx("div", {
        style: {
          height: `100%`
        }
      })
    })));
  }

}

/* harmony default export */ var Property_Location_Location = (Location_Location);
// CONCATENATED MODULE: ./shared/assets/styles/constants.js
const colors = {
  blue: {
    deep: 'rgb(0, 121, 191)',
    light: 'lightblue',
    lighter: '#d9fcff',
    soft: '#E6FCFF'
  },
  black: '#4d4d4d',
  shadow: 'rgba(0,0,0,0.2)',
  grey: {
    darker: '#C1C7D0',
    dark: '#E2E4E6',
    medium: '#DFE1E5',
    N30: '#EBECF0',
    light: '#F4F5F7'
  },
  green: 'rgb(185, 244, 188)',
  white: 'white',
  purple: 'rebeccapurple',
  orange: '#FF991F'
};
const grid = 8;
const borderRadius = 2;
const constants_rowStyle = {
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap'
};
const constants_colStyle = {
  marginBottom: '16px'
};
const gutter = 16;
const basicStyle = {
  rowStyle: constants_rowStyle,
  colStyle: constants_colStyle,
  gutter
};
/* harmony default export */ var constants = (basicStyle);
// EXTERNAL MODULE: external "array-move"
var external_array_move_ = __webpack_require__("sGDL");
var external_array_move_default = /*#__PURE__*/__webpack_require__.n(external_array_move_);

// EXTERNAL MODULE: external "antd/lib/radio"
var radio_ = __webpack_require__("XQdj");
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);

// EXTERNAL MODULE: external "antd/lib/form"
var form_ = __webpack_require__("foLw");
var form_default = /*#__PURE__*/__webpack_require__.n(form_);

// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__("Uqqx");
var input_default = /*#__PURE__*/__webpack_require__.n(input_);

// CONCATENATED MODULE: ./components/Admin/Property/Setting/Setting.js






var Setting_jsx = external_react_default.a.createElement;

function Setting_extends() { Setting_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Setting_extends.apply(this, arguments); }

const formItemLayout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24
  }
};
const settingKeys = ["price", "minPrice", "minMonthPrice", "bathroomCount", "bedroomCount", "sleeps", "minSleeps", "cleaningFee", "transactionFeeRate", "taxRate", "tour360", "refundableAmount", "furnished", "rentalParking", "petsConsidered"];
const integerValidationRule = {
  pattern: /^[0-9\b]+$/,
  message: "Value should integer"
};
const floatValidationRule = {
  pattern: /^[+-]?([0-9]+([.][0-9]*)?|[.][0-9]+)$/,
  message: "Value should contain just number"
};
const requiredRule = {
  required: true,
  message: "Please fill this field"
};

function Setting(props) {
  const {
    setting,
    onValuesChange
  } = props;
  const {
    price,
    minPrice,
    minMonthPrice,
    bathroomCount,
    bedroomCount,
    sleeps,
    minSleeps,
    cleaningFee,
    transactionFeeRate,
    taxRate,
    tour360,
    refundableAmount,
    furnished,
    rentalParking,
    petsConsidered
  } = setting;

  const onFinish = values => {
    console.log("Received values of form: ", values);
  }; // if (
  //   settingKeys.findIndex(
  //     (key) => setting[key] === null || setting[key] === undefined
  //   ) > -1
  // ) {
  //   return null;
  // }


  return Setting_jsx(form_default.a, Setting_extends({
    name: "validate_other"
  }, formItemLayout, {
    onValuesChange: onValuesChange,
    onFinish: onFinish,
    initialValues: {
      price,
      minPrice,
      minMonthPrice,
      bathroomCount,
      bedroomCount,
      sleeps,
      minSleeps,
      cleaningFee,
      transactionFeeRate,
      taxRate,
      tour360,
      refundableAmount,
      furnished,
      rentalParking,
      petsConsidered
    }
  }), Setting_jsx(row_default.a, {
    gutter: [32, 32]
  }, Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Price",
    name: "price",
    rules: [integerValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Starting nightly Price ",
    name: "minPrice",
    rules: [integerValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Starting Monthly Price",
    name: "minMonthPrice",
    rules: [integerValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Bedroom",
    name: "bedroomCount",
    rules: [integerValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Bathroom",
    name: "bathroomCount",
    rules: [integerValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Sleeps",
    name: "sleeps",
    rules: [integerValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Minimum number of nights",
    name: "minSleeps",
    rules: [integerValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Cleaning fee",
    name: "cleaningFee",
    rules: [integerValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Transaction fee(%)",
    name: "transactionFeeRate",
    rules: [floatValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Tax(%)",
    name: "taxRate",
    rules: [floatValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Refundable Security Deposit",
    name: "refundableAmount",
    rules: [integerValidationRule, requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    label: "Tour360",
    name: "tour360",
    rules: [requiredRule]
  }, Setting_jsx(input_default.a, null))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    name: "furnished",
    label: "Furnished",
    rules: [requiredRule]
  }, Setting_jsx(radio_default.a.Group, null, Setting_jsx(radio_default.a, {
    value: "1"
  }, "Yes"), Setting_jsx(radio_default.a, {
    value: "0"
  }, "No")))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    name: "rentalParking",
    label: "RentalParking",
    rules: [requiredRule]
  }, Setting_jsx(radio_default.a.Group, null, Setting_jsx(radio_default.a, {
    value: "1"
  }, "Yes"), Setting_jsx(radio_default.a, {
    value: "0"
  }, "No")))), Setting_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }, Setting_jsx(form_default.a.Item, {
    name: "petsConsidered",
    label: "PetsConsidered",
    rules: [requiredRule]
  }, Setting_jsx(radio_default.a.Group, null, Setting_jsx(radio_default.a, {
    value: "1"
  }, "Yes"), Setting_jsx(radio_default.a, {
    value: "0"
  }, "No"))))));
}

/* harmony default export */ var Setting_Setting = (Setting);
// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__("A4pX");
var select_default = /*#__PURE__*/__webpack_require__.n(select_);

// CONCATENATED MODULE: ./components/Admin/Property/Main/Main.js





var Main_jsx = external_react_default.a.createElement;

function Main_extends() { Main_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Main_extends.apply(this, arguments); }


const Option = {
  Select: select_default.a
};
const Main_formItemLayout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24
  }
};
const Main_integerValidationRule = {
  pattern: /^[0-9\b]+$/,
  message: "Value should integer"
};
const Main_requiredRule = {
  required: true,
  message: "Please fill this field"
};
function Main(props) {
  const {
    name,
    category,
    bookervilleId,
    onValuesChange
  } = props;

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  Object(external_react_["useEffect"])(() => {
    console.log("props", props);
  }, [props]);
  return Main_jsx("div", null, Main_jsx(form_default.a, Main_extends({
    name: "mainInfo"
  }, Main_formItemLayout, {
    onValuesChange: onValuesChange,
    onFinish: onFinish,
    initialValues: {
      name,
      category,
      bookervilleId
    }
  }), Main_jsx(row_default.a, null, Main_jsx(col_default.a, {
    sm: 24
  }, Main_jsx(form_default.a.Item, {
    label: "Name",
    name: "name",
    hasFeedback: true,
    validateTrigger: "onBlur",
    rules: [Main_requiredRule]
  }, Main_jsx(input_default.a, null))), Main_jsx(col_default.a, {
    sm: 24
  }, Main_jsx(form_default.a.Item, {
    label: "Bookerville Id",
    name: "bookervilleId",
    hasFeedback: true,
    validateTrigger: "onBlur",
    rules: [Main_integerValidationRule, Main_requiredRule]
  }, Main_jsx(input_default.a, null))), Main_jsx(col_default.a, {
    sm: 24
  }, Main_jsx(form_default.a.Item, {
    name: "category",
    label: "Category",
    hasFeedback: true,
    validateTrigger: "onBlur",
    rules: [{
      required: true,
      message: "Please select a category"
    }]
  }, Main_jsx(select_default.a, {
    placeholder: "Please select a category"
  }, Main_jsx(Option, {
    value: "1"
  }, "1-Bedroom"), Main_jsx(Option, {
    value: "2"
  }, "2-Bedrooms"), Main_jsx(Option, {
    value: "3"
  }, "3-bedrooms"), Main_jsx(Option, {
    value: "4"
  }, "4-Bedrooms"), Main_jsx(Option, {
    value: "5"
  }, "Studios"), Main_jsx(Option, {
    value: "6"
  }, "Private Rooms")))))));
}
// EXTERNAL MODULE: external "antd/lib/switch"
var switch_ = __webpack_require__("+PSA");
var switch_default = /*#__PURE__*/__webpack_require__.n(switch_);

// EXTERNAL MODULE: ./env-config.js
var env_config = __webpack_require__("Ye+W");

// CONCATENATED MODULE: ./components/Admin/Property/Amenity/Amenity.js




var Amenity_jsx = external_react_default.a.createElement;



const Amenity_formItemLayout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24
  }
};
const Amenity_requiredRule = {
  required: true,
  message: "Please fill this field"
};
function Amenity(props) {
  const {
    0: options,
    1: setOptions
  } = Object(external_react_["useState"])(null);
  const {
    amenities,
    onToggleOption
  } = props;
  Object(external_react_["useEffect"])(() => {
    getAmenityData();
  }, []);

  async function getAmenityData() {
    try {
      const res = await fetch(`${env_config["BACKEND_URL"]}/api/accommodation/amenity/`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
        }
      }).then(res => res.json()).then(res => res).catch(error => error);
      console.log("res", res);
      setOptions(res);
    } catch (error) {
      setOptions([]);
    }
  }

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  return Amenity_jsx("div", {
    style: {
      margin: "0 20px",
      background: "#fff",
      padding: 20
    }
  }, Amenity_jsx(row_default.a, null, options && options.length > 0 && options.map((option, index) => Amenity_jsx(col_default.a, {
    key: index,
    lg: 12,
    sm: 24
  }, Amenity_jsx(form_default.a.Item, {
    label: option.name
  }, Amenity_jsx(switch_default.a, {
    checked: (amenities === null || amenities === void 0 ? void 0 : amenities.length) > 0 && amenities.indexOf(option.id) > -1,
    onChange: () => onToggleOption(option.id)
  }))))));
}
// CONCATENATED MODULE: ./components/Admin/Property/Room/Room.js






var Room_jsx = external_react_default.a.createElement;

function Room_extends() { Room_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Room_extends.apply(this, arguments); }


const {
  Option: Room_Option
} = select_default.a;
const Room_formItemLayout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24
  }
};
const Room_requiredRule = {
  required: true,
  message: "Please fill this field"
};
function Room(props) {
  const {
    room,
    onRoomChange,
    onRemoveRoom
  } = props;
  const {
    id,
    name,
    bedType
  } = room;
  Object(external_react_["useEffect"])(() => {}, []);

  const onFinish = values => {
    console.log("Received values of form: ", values);
  };

  return Room_jsx("div", {
    style: {
      margin: "0 20px",
      background: "#fff",
      padding: 20
    }
  }, Room_jsx(form_default.a, Room_extends({
    name: "mainInfo"
  }, Room_formItemLayout, {
    onValuesChange: (changedValues, allValues) => onRoomChange(allValues, id),
    onFinish: onFinish,
    initialValues: {
      name,
      bedType
    }
  }), Room_jsx(row_default.a, null, Room_jsx(col_default.a, {
    lg: 10,
    sm: 24
  }, Room_jsx(form_default.a.Item, {
    label: "Name",
    name: "name",
    rules: [Room_requiredRule]
  }, Room_jsx(input_default.a, null))), Room_jsx(col_default.a, {
    lg: 10,
    sm: 24
  }, Room_jsx(form_default.a.Item, {
    name: "bedType",
    label: "BedType",
    hasFeedback: true,
    rules: [{
      required: true,
      message: "Please select a bedType"
    }]
  }, Room_jsx(select_default.a, {
    placeholder: "Please select a bedtype"
  }, Room_jsx(Room_Option, {
    value: "T"
  }, "Twin bed"), Room_jsx(Room_Option, {
    value: "S"
  }, "Sofa bed"), Room_jsx(Room_Option, {
    value: "Q"
  }, "Queen bed"), Room_jsx(Room_Option, {
    value: "K"
  }, "King bed"), Room_jsx(Room_Option, {
    value: "C"
  }, "Chair bed"), Room_jsx(Room_Option, {
    value: "M"
  }, "Murphy bed"), Room_jsx(Room_Option, {
    value: "F"
  }, "Full Bed"), Room_jsx(Room_Option, {
    value: "P"
  }, "Single Chair Sleeper Bed")))), Room_jsx(col_default.a, {
    lg: 4,
    sm: 24
  }, Room_jsx(CloseOutlined_default.a, {
    onClick: () => onRemoveRoom(id)
  })))));
}
// CONCATENATED MODULE: ./components/Admin/Property/Room/Rooms.js
var Rooms_jsx = external_react_default.a.createElement;



const Rooms_formItemLayout = {
  labelCol: {
    span: 24
  },
  wrapperCol: {
    span: 24
  }
};
const Rooms_requiredRule = {
  required: true,
  message: "Please fill this field"
};
function Rooms(props) {
  const {
    rooms,
    onRoomChange,
    onAddRoom,
    onRemoveRoom
  } = props;
  return Rooms_jsx("div", {
    style: {
      margin: "0 20px",
      background: "#fff",
      padding: 20
    }
  }, Rooms_jsx(uielements_button["a" /* default */], {
    type: "primary",
    onClick: onAddRoom
  }, "Add new room"), rooms && rooms.length > 0 && rooms.filter(room => room.bedType !== "").map((room, index) => Rooms_jsx(Room, {
    key: index,
    room: room,
    onRoomChange: onRoomChange,
    onRemoveRoom: onRemoveRoom
  })));
}
// EXTERNAL MODULE: ./shared/components/Feedback/Modal.js
var Modal = __webpack_require__("TI/I");

// EXTERNAL MODULE: ./components/Admin/Property/Gallery/Gallery.styles.js
var Gallery_styles = __webpack_require__("4jyV");

// EXTERNAL MODULE: ./components/Admin/Property/Dropzone/Dropzone.styles.js
var Dropzone_styles = __webpack_require__("Nu+n");

// EXTERNAL MODULE: ./components/Admin/Property/Dropzone/Dropzone.js + 3 modules
var Dropzone = __webpack_require__("ZHkp");

// EXTERNAL MODULE: external "react-sortable-hoc"
var external_react_sortable_hoc_ = __webpack_require__("2iaJ");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./components/Admin/Property/Gallery/SortableMediaGallery.js


var SortableMediaGallery_jsx = external_react_default.a.createElement;



class SortableMediaGallery_SortableMediaGallery extends external_react_default.a.Component {
  render() {
    const {
      items,
      onSortEnd
    } = this.props;
    const SortableItem = Object(external_react_sortable_hoc_["SortableElement"])(({
      item
    }) => {
      return SortableMediaGallery_jsx(col_default.a, {
        lg: 4,
        sm: 6
      }, SortableMediaGallery_jsx("div", {
        style: {
          backgroundImage: `url(${item.file})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingTop: "100%"
        },
        className: "gallery-item"
      }));
    });
    const SortableList = Object(external_react_sortable_hoc_["SortableContainer"])(({
      items
    }) => SortableMediaGallery_jsx(row_default.a, {
      className: "media-scroll-gallery"
    }, items.map((item, index) => {
      return SortableMediaGallery_jsx(SortableItem, {
        key: `${item.id}`,
        index: index,
        item: item
      });
    })));
    return SortableMediaGallery_jsx(SortableList, {
      items: items,
      onSortEnd: onSortEnd,
      axis: "xy",
      distance: 3,
      helperClass: "SortableHelper"
    });
  }

}
// CONCATENATED MODULE: ./components/Admin/Property/Gallery/Gallery.js

var Gallery_jsx = external_react_default.a.createElement;







function Gallery(props) {
  const {
    items,
    onSortEnd,
    onUploadSuccess
  } = props;
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  return Gallery_jsx("div", null, Gallery_jsx(button_default.a, {
    type: "primary",
    onClick: showModal
  }, (items === null || items === void 0 ? void 0 : items.length) > 0 ? "Edit Gallery" : "Attach Gallery"), Gallery_jsx(Modal["a" /* default */], {
    visible: visible,
    className: "media-modal",
    title: "Media",
    onCancel: handleCancel,
    footer: []
  }, Gallery_jsx(tabs["b" /* default */], {
    defaultActiveKey: "1",
    style: {
      margin: "0 20px",
      background: "#fff",
      padding: 20
    }
  }, Gallery_jsx(tabs["a" /* TabPane */], {
    tab: "Upload",
    key: "upload"
  }, Gallery_jsx(Dropzone_styles["a" /* default */], null, Gallery_jsx(Dropzone["a" /* default */], {
    onUploadSuccess: onUploadSuccess
  }))), Gallery_jsx(tabs["a" /* TabPane */], {
    tab: "Gallery",
    key: "gallery"
  }, Gallery_jsx(Gallery_styles["a" /* default */], null, Gallery_jsx(SortableMediaGallery_SortableMediaGallery, {
    items: items,
    onSortEnd: onSortEnd
  }))))));
}
// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__("xKsY");
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);

// EXTERNAL MODULE: ./shared/UI/Box/Box.js + 1 modules
var Box = __webpack_require__("Wasw");

// EXTERNAL MODULE: external "react-image-crop"
var external_react_image_crop_ = __webpack_require__("i1JB");
var external_react_image_crop_default = /*#__PURE__*/__webpack_require__.n(external_react_image_crop_);

// EXTERNAL MODULE: ./node_modules/react-image-crop/dist/ReactCrop.css
var ReactCrop = __webpack_require__("hzVQ");

// EXTERNAL MODULE: ./shared/components/index.js + 3 modules
var components = __webpack_require__("OKMn");

// CONCATENATED MODULE: ./components/Admin/Property/FeaturedImage/CropImage.js




var CropImage_jsx = external_react_default.a.createElement;







const cropSetting = {
  unit: '%',
  width: 80,
  height: 40 // aspect: 16 / 9,

};
function CropImage(props) {
  const {
    imageTitle,
    imagePath,
    onUploadSuccess
  } = props;
  const {
    0: crop,
    1: setCrop
  } = Object(external_react_["useState"])(cropSetting);
  const {
    0: croppedImage,
    1: setCroppedImage
  } = Object(external_react_["useState"])(null);
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);
  const imageRef = Object(external_react_["useRef"])(null);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  function onImageLoaded(image) {
    imageRef.current = image;
    console.log("onImageLoaded", imageRef);
  }

  function onCropComplete(crop) {
    makeClientCrop(crop);
  }

  function onCropChange(crop, percentCrop) {
    setCrop(crop);
  }

  async function makeClientCrop(crop) {
    if (imageRef.current && crop.width && crop.height) {
      const newCroppedImage = await getCroppedImg(imageRef.current, crop, 'crop.jpeg');
      setCroppedImage(newCroppedImage);
    }
  }

  function getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = Math.ceil(crop.width * scaleX);
    canvas.height = Math.ceil(crop.height * scaleY);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, crop.x * scaleX, crop.y * scaleY, crop.width * scaleX, crop.height * scaleY, 0, 0, crop.width * scaleX, crop.height * scaleY);
    return canvas.toDataURL('image/jpeg'); // return new Promise((resolve, reject) => {
    //     canvas.toBlob(blob => {
    //         if (!blob) {
    //             //reject(new Error('Canvas is empty'))
    //             console.error('Canvas is empty')
    //             return
    //         }
    //         blob.name = fileName
    //         window.URL.revokeObjectURL(fileUrl)
    //         fileUrl = window.URL.createObjectURL(blob)
    //         resolve(fileUrl)
    //     }, 'image/jpeg')
    // })
  }

  function handleSaveCroppedImage(image) {
    setVisible(false);
    const media = {
      title: imageTitle,
      imageData: croppedImage
    };
    fetch(`${env_config["BACKEND_URL"]}/api/media/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${Object(auth_utils["a" /* getCookie */])("token")}`
      },
      body: JSON.stringify(media)
    }).then(res => res.json()).then(res => {
      console.log("handleSaveCroppedImage", res);
      onUploadSuccess(res);
      Object(components["a" /* notification */])('success', 'Cropped image saved!');
    }).catch(error => error);
  } // function handleDeleteImage(id) {
  // }


  return CropImage_jsx("div", null, CropImage_jsx(button_default.a, {
    type: "primary",
    onClick: showModal
  }, "Crop"), CropImage_jsx(modal_default.a, {
    visible: visible,
    className: "crop-modal",
    title: "Crop image",
    okText: "Save",
    onOk: handleSaveCroppedImage,
    onCancel: handleCancel // footer={[
    //     <Button key="save" type="primary" onClick={handleSaveCroppedImage}>
    //         Save
    //     </Button>,
    //     <Button
    //         key="cancel"
    //         type="default"
    //         onClick={handleCancel}
    //     >
    //         Cancel
    //     </Button>,
    // ]}

  }, CropImage_jsx(Box["a" /* default */], null, CropImage_jsx(row_default.a, null, CropImage_jsx(col_default.a, {
    sm: 16
  }, imagePath && CropImage_jsx(external_react_image_crop_default.a, {
    className: "d-block mx-auto",
    src: imagePath,
    crossorigin: "*",
    crop: crop,
    ruleOfThirds: true,
    onImageLoaded: onImageLoaded,
    onComplete: onCropComplete,
    onChange: onCropChange
  })), CropImage_jsx(col_default.a, {
    sm: 8
  }, croppedImage && CropImage_jsx("img", {
    alt: "Crop",
    style: {
      width: '100%'
    },
    crossOrigin: "*",
    src: croppedImage
  }))))));
}
// CONCATENATED MODULE: ./components/Admin/Property/FeaturedImage/FeaturedImage.js



var FeaturedImage_jsx = external_react_default.a.createElement;








function FeaturedImage(props) {
  const {
    items,
    selectedItem,
    onUploadSuccess,
    onSelectImage
  } = props;
  const {
    0: visible,
    1: setVisible
  } = Object(external_react_["useState"])(false);

  function showModal() {
    setVisible(true);
  }

  function handleCancel() {
    setVisible(false);
  }

  return FeaturedImage_jsx("div", null, FeaturedImage_jsx(button_default.a, {
    type: "primary",
    onClick: showModal,
    style: {
      marginTop: 20
    }
  }, selectedItem ? 'Change Featured Image' : 'Attach Featured Image'), FeaturedImage_jsx(Modal["a" /* default */], {
    visible: visible,
    className: "media-modal",
    title: "Media",
    onCancel: handleCancel,
    onOk: handleCancel
  }, FeaturedImage_jsx(tabs["b" /* default */], {
    defaultActiveKey: "1",
    style: {
      margin: "0 20px",
      background: "#fff",
      padding: 20
    }
  }, FeaturedImage_jsx(tabs["a" /* TabPane */], {
    tab: "Upload",
    key: "upload"
  }, FeaturedImage_jsx(Dropzone_styles["a" /* default */], null, FeaturedImage_jsx(Dropzone["a" /* default */], {
    onUploadSuccess: onUploadSuccess
  }))), FeaturedImage_jsx(tabs["a" /* TabPane */], {
    tab: "Images",
    key: "featured"
  }, FeaturedImage_jsx(Gallery_styles["a" /* default */], null, FeaturedImage_jsx(row_default.a, null, items.map((item, index) => FeaturedImage_jsx(col_default.a, {
    key: index,
    lg: 4,
    sm: 6
  }, FeaturedImage_jsx("div", {
    style: {
      backgroundImage: `url(${item.file})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      paddingTop: "100%"
    },
    className: external_classnames_default()("gallery-item", {
      active: item.id === (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.id)
    }),
    onClick: () => onSelectImage(item)
  }, FeaturedImage_jsx(CropImage, {
    imageTitle: item.title,
    imagePath: item.file,
    onUploadSuccess: onUploadSuccess
  }))))))))));
}
// CONCATENATED MODULE: ./components/Admin/Property/AddProperty.js



var AddProperty_jsx = external_react_default.a.createElement;

function AddProperty_extends() { AddProperty_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AddProperty_extends.apply(this, arguments); }

function AddProperty_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function AddProperty_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { AddProperty_ownKeys(Object(source), true).forEach(function (key) { AddProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { AddProperty_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function AddProperty_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















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
  petsConsidered: true
};
function AddProperty() {
  const [state, setState] = external_react_default.a.useState(newProperty);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  external_react_default.a.useEffect(() => {
    console.log("state", state);
  }, [state]);

  function callback(key) {
    console.log(key);
  }

  function handleSave() {
    var _state$featuredImg;

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
      property_rooms: state.rooms.map(room => ({
        name: room.name,
        bed_type: room.bedType
      })),
      amenities: state.amenities,
      featured_img: (_state$featuredImg = state.featuredImg) === null || _state$featuredImg === void 0 ? void 0 : _state$featuredImg.id,
      gallery_imgs: state.galleryImgs.map(image => image.id)
    };
    dispatch(actions["a" /* default */].addProperty(property));
  }

  function handleReset() {
    setState({
      newProperty
    });
  }

  const editorOption = {
    style: {
      width: "90%",
      height: "70%"
    },
    toolbarClassName: "home-toolbar",
    wrapperClassName: "home-wrapper",
    editorClassName: "home-editor" // onEditorStateChange: onEditorStateChange,
    // uploadCallback: uploadCallback,
    // toolbar: {image: {uploadCallback: uploadCallback}},

  };

  function handlePlaceChange(place) {
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    }));
  }

  function handlePlaceReset() {
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
      address: "",
      lat: "",
      lng: ""
    }));
  }

  function handleSettingChange(changedValues, allValues) {
    console.log("handleSettingChange", changedValues, allValues);
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), allValues));
  }

  function handleMainInfoChange(changedValues, allValues) {
    console.log("handleMainInfoChange", changedValues, allValues);
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), allValues));
  } // function handleAmenityChange(changedValues, allValues) {
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
      setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
        amenities: array
      }));
    } else {
      array.push(amenityId);
      setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
        amenities: array
      }));
    }

    console.log("handleToggleAmenityOption", array, state);
  }

  function handleChangeRoom(values, id) {
    const newRooms = state.rooms.map((room, index) => {
      if (room.id === id) {
        return AddProperty_objectSpread(AddProperty_objectSpread({}, room), values);
      }

      return room;
    });
    console.log("handleChangeRoom", newRooms);
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
      rooms: newRooms
    }));
  }

  function handleAddRoom() {
    const generatedId = new Date().getTime();
    console.log("array", array, generatedId);
    let array = state.rooms;
    array.push({
      id: generatedId,
      name: "",
      bedType: "Q"
    });
    console.log("handleAddRoom", array);
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
      rooms: array
    }));
  }

  function handleRemoveRoom(roomId) {
    console.log("handleRemoveRoom", roomId);
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
      rooms: state.rooms.filter(room => room.id !== roomId)
    }));
  }

  function handleUploadSuccess(image) {
    const {
      galleryImgs
    } = state;
    galleryImgs.push(AddProperty_objectSpread(AddProperty_objectSpread({}, image), {}, {
      order: galleryImgs.length - 1
    }));
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
      galleryImgs
    }));
  }

  function handleSortEnd({
    oldIndex,
    newIndex
  }) {
    const newArray = external_array_move_default()(state.galleryImgs, oldIndex, newIndex);
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
      galleryImgs: newArray.map((image, index) => AddProperty_objectSpread(AddProperty_objectSpread({}, image), {}, {
        order: index + 1
      }))
    }));
  }

  function handleSelectFeatured(image) {
    setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
      featuredImg: image
    }));
  }

  const {
    rowStyle,
    colStyle
  } = constants;
  return AddProperty_jsx(layoutWrapper["a" /* default */], null, AddProperty_jsx(SinglePropertyWrapper, null, AddProperty_jsx("div", {
    className: "property-detail-actions"
  }, AddProperty_jsx(button_default.a, {
    type: "primary",
    onClick: handleSave,
    style: {
      marginRight: 20
    }
  }, "Save"), AddProperty_jsx(button_default.a, {
    type: "default",
    onClick: handleReset
  }, "Reset"), AddProperty_jsx(link_default.a, {
    href: "/admin/property"
  }, AddProperty_jsx(button_default.a, {
    type: "primary"
  }, "Back to List"))), AddProperty_jsx(row_default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start"
  }, AddProperty_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle
  }, AddProperty_jsx("div", {
    className: "property-detail-main"
  }, AddProperty_jsx(Main, {
    name: state.name,
    bookervilleId: state.bookervilleId,
    category: state.category,
    onValuesChange: handleMainInfoChange
  }), AddProperty_jsx(Gallery, {
    items: state.galleryImgs,
    onSortEnd: handleSortEnd,
    onUploadSuccess: handleUploadSuccess
  }), AddProperty_jsx(FeaturedImage, {
    items: state.galleryImgs,
    selectedItem: state.featuredImg,
    onUploadSuccess: handleUploadSuccess,
    onSelectImage: handleSelectFeatured
  }))), AddProperty_jsx(col_default.a, {
    lg: 16,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle
  }, AddProperty_jsx(tabs["b" /* default */], {
    defaultActiveKey: "1",
    onChange: callback,
    className: "property-detail-tab"
  }, ["description", "neighbourhood", "transit"].map(item => AddProperty_jsx(tabs["a" /* TabPane */], {
    tab: item.charAt(0).toUpperCase() + item.slice(1),
    key: item
  }, AddProperty_jsx(editor, AddProperty_extends({}, editorOption, {
    onEditorStateChange: html => setState(AddProperty_objectSpread(AddProperty_objectSpread({}, state), {}, {
      [item]: html
    }))
  })))), AddProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Location",
    key: "location"
  }, AddProperty_jsx(Property_Location_Location, {
    address: state.address,
    center: {
      lat: state.lat,
      lng: state.lng
    },
    onPlaceChange: handlePlaceChange,
    onReset: handlePlaceReset
  })), AddProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Setting",
    key: "setting"
  }, AddProperty_jsx(Setting_Setting, {
    setting: state,
    onValuesChange: handleSettingChange
  })), AddProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Amenity",
    key: "amenity"
  }, AddProperty_jsx(Amenity, {
    amenities: [],
    onValuesChange: handleToggleAmenityOption,
    onToggleOption: handleToggleAmenityOption
  })), AddProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Bedtype",
    key: "rooms"
  }, AddProperty_jsx(Rooms, {
    rooms: state.rooms,
    onRoomChange: handleChangeRoom,
    onAddRoom: handleAddRoom,
    onRemoveRoom: handleRemoveRoom,
    onValuesChange: handleSettingChange
  })))))));
}
// EXTERNAL MODULE: ./components/Admin/Property/Editor/Editor.js + 1 modules
var Editor_Editor = __webpack_require__("T0Ou");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "react-big-calendar"
var external_react_big_calendar_ = __webpack_require__("T3YA");

// EXTERNAL MODULE: external "react-big-calendar/lib/addons/dragAndDrop"
var dragAndDrop_ = __webpack_require__("1vGA");
var dragAndDrop_default = /*#__PURE__*/__webpack_require__.n(dragAndDrop_);

// EXTERNAL MODULE: external "antd/lib/date-picker"
var date_picker_ = __webpack_require__("83ri");
var date_picker_default = /*#__PURE__*/__webpack_require__.n(date_picker_);

// EXTERNAL MODULE: ./shared/library/helpers/style_utils.js
var style_utils = __webpack_require__("p3F5");

// CONCATENATED MODULE: ./shared/components/uielements/styles/datePicker.style.js




const AntDatePicker = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "datePickerstyle__AntDatePicker",
  componentId: "xf9lln-0"
})(["&.ant-picker{height:35px;}.ant-input{padding:4px 10px;width:100%;height:35px;cursor:text;font-size:13px;line-height:1.5;color:", ";background-color:#fff;background-image:none;border:1px solid ", ";", ";", ";&:focus{border-color:", ";}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}"], Object(external_styled_theme_["palette"])('text', 1), Object(external_styled_theme_["palette"])('border', 0), Object(style_utils["a" /* borderRadius */])('4px'), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0));

/* harmony default export */ var datePicker_style = (AntDatePicker);
// CONCATENATED MODULE: ./shared/components/uielements/datePicker.js


const Datepicker = datePicker_style(date_picker_default.a);
const DateRangepicker = datePicker_style(date_picker_default.a.RangePicker);
/* harmony default export */ var datePicker = (Datepicker);

// CONCATENATED MODULE: ./components/Admin/Property/PricingCalendar/Calendar.styles.js




const WDCalendarStyleWrapper = external_styled_components_default()('div').withConfig({
  displayName: "Calendarstyles__WDCalendarStyleWrapper",
  componentId: "pz6ih6-0"
})(["position:relative;height:calc(100vh - 70px);padding:35px;@media (max-width:767px){padding:0;}.isomorphicCalendar{padding:30px;background:#fff;border-radius:10px;flex-shrink:0;border:1px solid ", ";}.rbc-btn{color:inherit;font:inherit;margin:0;}button.rbc-btn{overflow:visible;text-transform:none;-webkit-appearance:button;cursor:pointer;}button[disabled].rbc-btn{cursor:not-allowed;}button.rbc-input::-moz-focus-inner{border:0;padding:0;}.rbc-calendar{box-sizing:border-box;height:100%;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;}.rbc-calendar *,.rbc-calendar *:before,.rbc-calendar *:after{box-sizing:inherit;}.rbc-abs-full,.rbc-row-bg{overflow:hidden;position:absolute;top:0;left:0;right:0;bottom:0;}.rbc-ellipsis,.rbc-event-label,.rbc-row-segment .rbc-event-content,.rbc-show-more{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.rbc-rtl{direction:rtl;}.rbc-off-range{color:", ";}.rbc-off-range-bg{background:#e5e5e5;}.rbc-header{overflow:hidden;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;text-overflow:ellipsis;white-space:nowrap;padding:7px 3px;text-align:center;vertical-align:middle;font-weight:bold;font-size:11px;min-height:0;color:", ";}.rbc-header + .rbc-header{border-left:1px solid #ddd;}.rbc-rtl .rbc-header + .rbc-header{border-left-width:0;border-right:1px solid #ddd;}.rbc-header > a,.rbc-header > a:active,.rbc-header > a:visited{color:inherit;text-decoration:none;display:inline-block;padding-bottom:7px;}.rbc-row-content{position:relative;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;z-index:4;}.rbc-today{background-color:", ";}.rbc-toolbar{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin-bottom:40px;font-size:16px;@media (max-width:990px){flex-direction:column;}}.rbc-toolbar .rbc-toolbar-label{-webkit-flex-grow:1;-ms-flex-positive:1;flex-grow:1;padding:0 10px;text-align:center;font-size:15px;color:", ";}.rbc-toolbar button{color:", ";display:inline-block;margin:0;text-align:center;vertical-align:middle;background:none;background-image:none;border:1px solid ", ";padding:0.375rem 1rem;border-radius:0;outline:0;line-height:normal;white-space:nowrap;text-transform:capitalize;font-size:14px;height:35px;", ";}.rbc-toolbar button:active,.rbc-toolbar button.rbc-active{background-image:none;box-shadow:none;background-color:", ";border-color:", ";color:#ffffff;}.rbc-toolbar button:active:hover,.rbc-toolbar button.rbc-active:hover,.rbc-toolbar button:active:focus,.rbc-toolbar button.rbc-active:focus{color:#ffffff;background-color:", ";border-color:", ";}.rbc-toolbar button:focus{color:", ";background-color:transparent;border-color:", ";}.rbc-toolbar button:hover{color:#ffffff;background-color:", ";border-color:", ";}.rbc-btn-group{display:inline-block;white-space:nowrap;@media (max-width:990px){order:2;margin-bottom:10px;margin-top:10px;}}.rbc-btn-group > button:first-child:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0;}.rbc-btn-group > button:last-child:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;}.rbc-rtl .rbc-btn-group > button:first-child:not(:last-child){border-radius:0;border-top-left-radius:0;border-bottom-left-radius:0;}.rbc-rtl .rbc-btn-group > button:last-child:not(:first-child){border-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;}.rbc-btn-group > button:not(:first-child):not(:last-child){border-radius:0;}.rbc-btn-group button + button{margin:", ";}.rbc-rtl .rbc-btn-group button + button{margin-left:0;margin-right:-1px;}.rbc-btn-group + .rbc-btn-group,.rbc-btn-group + button{margin-left:10px;}.rbc-event{border:none;box-shadow:none;margin:0;padding:3px 15px;background-color:", ";color:#fff;cursor:pointer;width:100%;text-align:left;", ";}.rbc-slot-selecting .rbc-event{cursor:inherit;pointer-events:none;}.rbc-event.rbc-selected{background-color:", ";}.rbc-event-label{font-size:80%;}.rbc-event-overlaps{box-shadow:-1px 1px 5px 0px rgba(51,51,51,0.5);}.rbc-event-continues-prior{border-top-left-radius:0;border-bottom-left-radius:0;}.rbc-event-continues-after{border-top-right-radius:0;border-bottom-right-radius:0;}.rbc-event-continues-earlier{border-top-left-radius:0;border-top-right-radius:0;}.rbc-event-continues-later{border-bottom-left-radius:0;border-bottom-right-radius:0;}.rbc-row{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.rbc-row-segment{padding:0 1px 1px 1px;}.rbc-selected-cell{background-color:rgba(0,0,0,0.1);}.rbc-show-more{background-color:rgba(255,255,255,0.3);z-index:4;font-weight:bold;font-size:85%;height:auto;line-height:normal;white-space:nowrap;color:", ";", ";}.rbc-month-view{position:relative;border:1px solid transparent;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;width:100%;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;height:100%;.rbc-header{border-bottom:1px solid ", ";}.rbc-header + .rbc-header{border-left:1px solid ", ";}}.rbc-month-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.rbc-month-row{display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;-webkit-flex-basis:0px;-ms-flex-preferred-size:0px;flex-basis:0px;overflow:hidden;height:100%;}.rbc-month-row + .rbc-month-row{border-top:1px solid ", ";}.rbc-date-cell{-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;min-width:0;padding-right:5px;text-align:right;}.rbc-date-cell.rbc-now{font-weight:bold;}.rbc-date-cell > a,.rbc-date-cell > a:active,.rbc-date-cell > a:visited{color:inherit;text-decoration:none;}.rbc-row-bg{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;overflow:hidden;}.rbc-day-bg{-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;}.rbc-day-bg + .rbc-day-bg{border-left:", " solid ", ";border-right:", " solid ", ";}.rbc-rtl .rbc-day-bg + .rbc-day-bg{border-left-width:0;border-right:1px solid ", ";}.rbc-overlay{position:absolute;z-index:5;border:1px solid #e5e5e5;background-color:#fff;box-shadow:0 5px 15px rgba(0,0,0,0.25);padding:10px;}.rbc-overlay > * + *{margin-top:1px;}.rbc-overlay-header{border-bottom:1px solid #e5e5e5;margin:-10px -10px 5px -10px;padding:10px;}.rbc-agenda-view{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;overflow:auto;color:", ";}.rbc-agenda-view table.rbc-agenda-table{width:100%;border:1px solid ", ";border-spacing:0;border-collapse:collapse;}.rbc-agenda-view table.rbc-agenda-table tbody > tr > td{padding:5px 10px;vertical-align:top;}.rbc-agenda-view table.rbc-agenda-table .rbc-agenda-time-cell{padding-left:15px;padding-right:15px;text-transform:lowercase;}.rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td{border-left:1px solid ", ";}.rbc-rtl .rbc-agenda-view table.rbc-agenda-table tbody > tr > td + td{border-left-width:0;border-right:1px solid ", ";}.rbc-agenda-view table.rbc-agenda-table tbody > tr + tr{border-top:1px solid ", ";}.rbc-agenda-view table.rbc-agenda-table thead > tr > th{padding:3px 5px;text-align:", ";border-bottom:1px solid ", ";}.rbc-rtl .rbc-agenda-view table.rbc-agenda-table thead > tr > th{text-align:right;}.rbc-agenda-time-cell{text-transform:lowercase;}.rbc-agenda-time-cell .rbc-continues-after:after{content:' \xBB';}.rbc-agenda-time-cell .rbc-continues-prior:before{content:'\xAB ';}.rbc-agenda-date-cell,.rbc-agenda-time-cell{white-space:nowrap;font-size:12px;}.rbc-agenda-event-cell{width:100%;font-size:12px;}.rbc-time-column{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;min-height:100%;}.rbc-time-column .rbc-timeslot-group{-webkit-flex:1;-ms-flex:1;flex:1;}.rbc-timeslot-group{border-bottom:1px solid ", ";min-height:40px;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}.rbc-time-gutter,.rbc-header-gutter{-webkit-flex:none;-ms-flex:none;flex:none;}.rbc-label{padding:0 5px;color:", ";}.rbc-day-slot{position:relative;}.rbc-day-slot .rbc-events-container{bottom:0;left:0;position:absolute;right:0;margin-right:10px;top:0;}.rbc-day-slot .rbc-events-container.rbc-is-rtl{left:10px;right:0;}.rbc-day-slot .rbc-event{border:1px solid ", ";display:-webkit-flex;display:-ms-flexbox;display:flex;max-height:100%;min-height:20px;-webkit-flex-flow:column wrap;-ms-flex-flow:column wrap;flex-flow:column wrap;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;overflow:hidden;position:absolute;}.rbc-day-slot .rbc-event-label{-webkit-flex:none;-ms-flex:none;flex:none;padding-right:5px;width:auto;}.rbc-day-slot .rbc-event-content{width:100%;-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;word-wrap:break-word;line-height:1;height:100%;min-height:1em;}.rbc-day-slot .rbc-time-slot{border-top:1px solid #fff;}.rbc-time-view-resources .rbc-time-gutter,.rbc-time-view-resources .rbc-time-header-gutter{position:-webkit-sticky;position:sticky;left:0;background-color:white;border-right:1px solid #ddd;z-index:10;margin-right:-1px;}.rbc-time-view-resources .rbc-time-header{overflow:hidden;}.rbc-time-view-resources .rbc-time-header-content{min-width:auto;-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;-webkit-flex-basis:0px;-ms-flex-preferred-size:0px;flex-basis:0px;}.rbc-time-view-resources .rbc-time-header-cell-single-day{display:none;}.rbc-time-view-resources .rbc-day-slot{min-width:140px;}.rbc-time-view-resources .rbc-header,.rbc-time-view-resources .rbc-day-bg{width:140px;-webkit-flex:1 1 0;-ms-flex:1 1 0px;flex:1 1 0;-webkit-flex-basis:0 px;-ms-flex-preferred-size:0 px;flex-basis:0 px;}.rbc-time-header-content + .rbc-time-header-content{margin-left:-1px;}.rbc-time-slot{-webkit-flex:1 0 0;-ms-flex:1 0 0px;flex:1 0 0;}.rbc-time-slot.rbc-now{font-weight:bold;}.rbc-day-header{text-align:center;}.rbc-slot-selection{z-index:10;position:absolute;background-color:rgba(0,0,0,0.5);color:white;font-size:75%;width:100%;padding:3px;}.rbc-slot-selecting{cursor:move;}.rbc-time-view{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;width:100%;border:1px solid ", ";min-height:0;}.rbc-time-view .rbc-time-gutter{white-space:nowrap;}.rbc-time-view .rbc-allday-cell{box-sizing:content-box;width:100%;height:100%;position:relative;}.rbc-time-view .rbc-allday-cell + .rbc-allday-cell{border-left:1px solid #ddd;}.rbc-time-view .rbc-allday-events{position:relative;z-index:4;}.rbc-time-view .rbc-row{box-sizing:border-box;min-height:20px;}.rbc-time-header{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.rbc-time-header.rbc-overflowing{border-right:1px solid ", ";}.rbc-rtl .rbc-time-header.rbc-overflowing{border-right-width:0;border-left:1px solid ", ";}.rbc-time-header > .rbc-row:first-child{border-bottom:1px solid ", ";}.rbc-time-header > .rbc-row.rbc-row-resource{border-bottom:1px solid ", ";}.rbc-time-header-cell-single-day{display:none;}.rbc-time-header-content{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-flex;display:-ms-flexbox;display:flex;min-width:0;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;border-left:1px solid ", ";}.rbc-rtl .rbc-time-header-content{border-left-width:0;border-right:1px solid ", ";}.rbc-time-content{display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1 0 0%;-ms-flex:1 0 0%;flex:1 0 0%;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:100%;border-top:1px solid ", ";overflow-y:auto;position:relative;}.rbc-time-content > .rbc-time-gutter{-webkit-flex:none;-ms-flex:none;flex:none;}.rbc-time-content > * + * > *{border-left:1px solid ", ";}.rbc-rtl .rbc-time-content > * + * > *{border-left-width:0;border-right:1px solid ", ";}.rbc-time-content > .rbc-day-slot{width:100%;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;}.rbc-time-header-cell{border-bottom:1px solid ", ";}.rbc-current-time-indicator{position:absolute;z-index:3;left:0;right:0;height:1px;background-color:", ";pointer-events:none;}"], Object(external_styled_theme_["palette"])('border', 0), Object(external_styled_theme_["palette"])('text', 2), Object(external_styled_theme_["palette"])('secondary', 2), Object(external_styled_theme_["palette"])('grayscale', 11), Object(external_styled_theme_["palette"])('secondary', 2), Object(external_styled_theme_["palette"])('secondary', 2), Object(external_styled_theme_["palette"])('border', 2), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('secondary', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? '0 -1px 0 0' : '0 0 0 -1px', Object(external_styled_theme_["palette"])('primary', 0), Object(style_utils["a" /* borderRadius */])('5px'), Object(external_styled_theme_["palette"])('primary', 12), Object(external_styled_theme_["palette"])('secondary', 2), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), props => props['data-rtl'] === 'rtl' ? '0' : '1px', Object(external_styled_theme_["palette"])('border', 2), props => props['data-rtl'] === 'rtl' ? '1px' : '0', Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('secondary', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('secondary', 2), Object(external_styled_theme_["palette"])('primary', 12), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('border', 2), Object(external_styled_theme_["palette"])('primary', 0));
const WDCalendarModalBody = external_styled_components_default.a.div.withConfig({
  displayName: "Calendarstyles__WDCalendarModalBody",
  componentId: "pz6ih6-1"
})(["color:#000000;.isoCalendarInputWrapper{width:100%;margin-bottom:15px;}.isoCalendarDatePicker{display:flex;.ant-picker{width:100%;border-radius:4px;border-top-right-radius:0;border-bottom-right-radius:0;border-color:", ";}.ant-calendar-picker{width:calc(100% - 35px) !important;.ant-input{border-radius:", ";}&:hover{z-index:1;}}.isoDeleteBtn{width:35px;height:35px;padding:0;display:flex;flex-shrink:0;margin:", ";align-items:center;justify-content:center;border-radius:", ";&:hover{z-index:1;}}}"], Object(external_styled_theme_["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0 4px 4px 0' : '4px 0 0 4px', props => props['data-rtl'] === 'rtl' ? '0 -1px 0 0' : '0 0 0 -1px', props => props['data-rtl'] === 'rtl' ? '4px 0 0 4px' : '0 4px 4px 0');
const CalendarStyleWrapper = Object(rtl["a" /* default */])(WDCalendarStyleWrapper);
const CalendarModalBody = Object(rtl["a" /* default */])(WDCalendarModalBody);
// CONCATENATED MODULE: ./components/Admin/Property/PricingCalendar/DeleteButton.js


var DeleteButton_jsx = external_react_default.a.createElement;



/* harmony default export */ var DeleteButton = (function ({
  handleDelete
}) {
  return DeleteButton_jsx(Popconfirm["a" /* default */], {
    title: "Sure to delete the event?",
    okText: "DELETE",
    cancelText: "No",
    onConfirm: () => {
      Object(components["a" /* notification */])('error', 'Deleted', '');
      handleDelete();
    }
  }, DeleteButton_jsx(button_default.a, {
    icon: DeleteButton_jsx(CloseOutlined_default.a, null),
    type: "default",
    className: "isoDeleteBtn"
  }));
});
// CONCATENATED MODULE: ./components/Admin/Property/PricingCalendar/ModalEvents.js
var ModalEvents_jsx = external_react_default.a.createElement;







const RangePicker = DateRangepicker;
const localeDatePicker = {
  lang: {
    placeholder: "Select date",
    rangePlaceholder: ["Start date", "End date"],
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "Ok",
    clear: "Clear",
    month: "Month",
    year: "Year",
    timeSelect: "Select time",
    dateSelect: "Select date",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: true,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  },
  timePickerLocale: {
    placeholder: "Select time"
  }
};
/* harmony default export */ var ModalEvents = (function (props) {
  const {
    modalVisible,
    modalData,
    onModalDataChange
  } = props;

  const handleOk = () => {
    onModalDataChange("ok", modalData);
  };

  const handleCancel = () => {
    onModalDataChange("cancel");
  };

  const handleDelete = () => {
    onModalDataChange("delete", modalData);
  };

  const visible = !!modalVisible;
  if (!visible) return null;
  console.log("__modalData__", modalData);
  const price = modalData && modalData.price ? modalData.price : "";
  const start = modalData && modalData.start ? external_moment_default()(modalData.start) : "";
  const end = modalData && modalData.end ? external_moment_default()(modalData.end) : "";

  const onChangePrice = event => {
    console.log("onChangePrice", event);
    modalData.price = event.target.value;
    onModalDataChange("updateValue", modalData);
  };

  const onChangeFromTimePicker = value => {
    try {
      modalData.start = value[0].toDate();
      modalData.end = value[1].toDate();
    } catch (e) {}

    onModalDataChange("updateValue", modalData);
  };

  return ModalEvents_jsx("div", null, ModalEvents_jsx(Modal["a" /* default */], {
    title: "Set pricing",
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    okText: "Save",
    cancelText: "Cancel"
  }, ModalEvents_jsx(CalendarModalBody, null, ModalEvents_jsx("div", {
    className: "isoCalendarInputWrapper"
  }, ModalEvents_jsx(input["c" /* default */], {
    value: price,
    placeholder: "price for this period",
    onChange: onChangePrice
  })), ModalEvents_jsx("div", {
    className: "isoCalendarDatePicker"
  }, ModalEvents_jsx(RangePicker, {
    locale: localeDatePicker,
    ranges: {
      Today: [external_moment_default()(), external_moment_default()()],
      "This Month": [external_moment_default()(), external_moment_default()().endOf("month")]
    },
    value: [start, end],
    showTime: true,
    format: "YYYY/MM/DD HH:mm:ss",
    onChange: onChangeFromTimePicker
  }), ModalEvents_jsx(DeleteButton, {
    handleDelete: handleDelete
  })))));
});
// EXTERNAL MODULE: ./shared/components/Notification.js
var Notification = __webpack_require__("MNix");

// CONCATENATED MODULE: ./components/Admin/Property/PricingCalendar/PricingCalendar.js
var PricingCalendar_jsx = external_react_default.a.createElement;









const Localizer = Object(external_react_big_calendar_["momentLocalizer"])(external_moment_default.a);
const DragAndDropCalendar = dragAndDrop_default()(external_react_big_calendar_["Calendar"]);
function PricingCalendar(props) {
  const {
    propertyId,
    defaultPrice
  } = props;
  const {
    0: pricingItems,
    1: setPricingItems
  } = Object(external_react_["useState"])([]);
  const {
    0: modalVisible,
    1: setModalVisible
  } = Object(external_react_["useState"])(false);
  const {
    0: modalData,
    1: setModalData
  } = Object(external_react_["useState"])(null);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    selectedItem
  } = Object(external_react_redux_["useSelector"])(state => state.Properties);
  Object(external_react_["useEffect"])(() => {
    getPricingData(propertyId);
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (selectedItem.pricingItems) {
      const newItems = selectedItem.pricingItems.map((item, index) => ({
        price: item.price,
        allDay: true,
        start: item.start_date,
        end: item.end_date
      }));
      setPricingItems(newItems);
      console.log("selectedItem", newItems, pricingItems);
    }
  }, [selectedItem]);

  async function getPricingData() {
    dispatch(actions["a" /* default */].getPriceItems(propertyId));
  }

  const handleSlotSelection = ({
    start,
    end,
    action
  }) => {
    setModalVisible(true);
    setModalData({
      price: defaultPrice,
      start: convertDate(start),
      end: convertDate(end)
    });
  };

  const convertDate = date => {
    const offset = date.getTimezoneOffset();
    console.log("offset", offset);
    const newDate = new Date(date.getTime() - offset * 60 * 1000);
    return newDate.toISOString().split("T")[0];
  };

  const handleChangeModalData = (type, modalData) => {
    if (type === "cancel") {
      setModalVisible(false);
      setModalData(null);
    } else if (type === "delete") {// some logic to delete pricing item
    } else if (type === "updateValue") {
      console.log("updateValue", modalData);
      setModalData({
        price: modalData.price,
        start: modalData.start,
        end: modalData.end
      });
    } else {
      dispatch(actions["a" /* default */].createPriceItem({
        start_date: modalData.start,
        end_date: modalData.end,
        price: modalData.price,
        property: propertyId
      }, dispatch));
      setModalVisible(false);
    }
  };

  return PricingCalendar_jsx(CalendarStyleWrapper, {
    className: "isomorphicCalendarWrapper"
  }, PricingCalendar_jsx(ModalEvents, {
    modalVisible: modalVisible,
    modalData: modalData,
    onModalDataChange: handleChangeModalData
  }), PricingCalendar_jsx(external_react_big_calendar_["Calendar"] // className="isomorphicCalendar"
  // selectable
  // localizer={Localizer}
  // onView={onView}
  // defaultView="month"
  // step={60}
  , {
    selectable: true,
    resizable: true,
    events: pricingItems,
    views: ["month"],
    defaultDate: new Date(),
    defaultView: "month",
    toolbar: true,
    localizer: Localizer,
    step: 30,
    components: {
      month: {
        dateHeader: ({
          date,
          label
        }) => {
          let pricingItem = pricingItems.find(item => external_moment_default()(date).isBetween(external_moment_default()(item.start), external_moment_default()(item.end), null, "[]"));
          return PricingCalendar_jsx("div", {
            className: "calendar-date-cell"
          }, PricingCalendar_jsx("h4", null, external_moment_default()(date).date()), PricingCalendar_jsx("h6", null, "$", " ", pricingItem !== undefined ? pricingItem.price : defaultPrice));
        }
      }
    },
    onSelectSlot: handleSlotSelection
  }));
}
// CONCATENATED MODULE: ./components/Admin/Property/SimilarProperty/SimilarProperty.js
var SimilarProperty_jsx = external_react_default.a.createElement;

function SimilarProperty_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function SimilarProperty_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SimilarProperty_ownKeys(Object(source), true).forEach(function (key) { SimilarProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SimilarProperty_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SimilarProperty_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const SimilarProperty_tableColumns = [{
  title: "ID",
  key: "id",
  width: 100,
  render: object => SimilarProperty_jsx("p", null, object.id)
}, {
  title: "Name",
  key: "name",
  width: 100,
  render: object => SimilarProperty_jsx("p", null, object.name)
}, {
  title: "Address",
  key: "address",
  width: 200,
  render: object => SimilarProperty_jsx("p", null, object.address)
}];
function SimilarProperty(props) {
  const {
    propertyId,
    selectedItems,
    onRowSelection
  } = props;
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    items,
    loading
  } = Object(external_react_redux_["useSelector"])(state => state.Properties);
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])({
    columns: SimilarProperty_tableColumns,
    dataList: items
  });
  Object(external_react_["useEffect"])(() => {
    dispatch(actions["a" /* default */].getAllProperties());
  }, []);
  Object(external_react_["useEffect"])(() => {
    setState(SimilarProperty_objectSpread(SimilarProperty_objectSpread({}, state), {}, {
      dataList: items.filter(item => item.id !== propertyId)
    }));
  }, [items]);
  const {
    columns,
    dataList
  } = state;
  const rowSelection = {
    selectedRowKeys: selectedItems,
    onChange: (selectedRowKeys, selectedRows) => {
      onRowSelection(selectedRowKeys);
    },
    getCheckboxProps: record => ({
      // disabled: selectedItems.findIndex(item => item === parseInt(record.id)) > -1,
      // disabled: record.name === 'Disabled User',
      name: record && (record === null || record === void 0 ? void 0 : record.id)
    })
  };
  return SimilarProperty_jsx(box["a" /* default */], null, dataList && (dataList === null || dataList === void 0 ? void 0 : dataList.length) === 0 ? SimilarProperty_jsx(helper_text["a" /* default */], {
    text: "No Properties found"
  }) : SimilarProperty_jsx("div", {
    className: "isoPropertyTable"
  }, SimilarProperty_jsx(customScrollBar["a" /* default */], {
    style: {
      width: "100%",
      height: "calc(60vh - 70px)"
    }
  }, SimilarProperty_jsx(AntTables_styles["a" /* default */], {
    rowKey: "id",
    rowSelection: SimilarProperty_objectSpread({
      type: 'checkbox'
    }, rowSelection),
    columns: columns,
    dataSource: dataList,
    className: "propertyListTable"
  }))));
}
// CONCATENATED MODULE: ./components/Admin/Property/EditProperty.js



var EditProperty_jsx = external_react_default.a.createElement;

function EditProperty_extends() { EditProperty_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return EditProperty_extends.apply(this, arguments); }

function EditProperty_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function EditProperty_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { EditProperty_ownKeys(Object(source), true).forEach(function (key) { EditProperty_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { EditProperty_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function EditProperty_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





















function uploadCallback(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID 8d26ccd12712fca");
    const data = new FormData();
    data.append("image", file);
    xhr.send(data);
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText);
      resolve(response);
    });
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText);
      reject(error);
    });
  });
}

const EditProperty_newProperty = {
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
  const {
    propertyId
  } = props;
  const [state, setState] = external_react_default.a.useState(EditProperty_newProperty);
  const dispatch = Object(external_react_redux_["useDispatch"])();
  const {
    selectedItem,
    loading
  } = Object(external_react_redux_["useSelector"])(state => state.Properties);
  const editorOption = {
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
  Object(external_react_["useEffect"])(() => {
    dispatch(actions["a" /* default */].getProperty(propertyId));
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (selectedItem.id === parseInt(propertyId)) {
      setState({
        id: selectedItem.id,
        bookervilleId: selectedItem.bookerville_id,
        name: selectedItem.name,
        category: `${selectedItem.category}`,
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
        rooms: selectedItem.property_rooms.map(room => ({
          id: room.id,
          name: room.name,
          bedType: room.bed_type
        })),
        amenities: selectedItem.amenities,
        featuredImg: selectedItem.featured_img,
        galleryImgs: selectedItem.gallery_imgs
      });
    }
  }, [selectedItem]);
  Object(external_react_["useEffect"])(() => {
    console.log("state", state);
  }, [state]);

  function callback(key) {
    console.log(key);
  }

  function handleSave() {
    const property = {
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
      gallery_imgs: state.galleryImgs.map(image => image.id),
      images: state.images
    };
    dispatch(actions["a" /* default */].updateProperty(property));
  }

  function handleReset() {
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), EditProperty_newProperty));
  }

  function renderOptionValue(value) {
    if (value === true) {
      return "1";
    }

    return "0";
  }

  function makeRoomsArray() {
    let array = state.rooms.map(room => {
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
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
      address: place.formatted_address,
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng()
    }));
  }

  function handlePlaceReset() {
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
      address: "",
      lat: "",
      lng: ""
    }));
  }

  function handleSettingChange(changedValues, allValues) {
    console.log("handleSettingChange", changedValues, allValues);
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), allValues));
  }

  function handleMainInfoChange(changedValues, allValues) {
    console.log("handleMainInfoChange", changedValues, allValues);
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), allValues));
  }

  function handleToggleAmenityOption(amenityId) {
    console.log("amenityId", state.amenities, amenityId);
    let array = state.amenities;
    let index = array.indexOf(amenityId);

    if (index > -1) {
      array.splice(index, 1);
      setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
        amenities: array
      }));
    } else {
      array.push(amenityId);
      setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
        amenities: array
      }));
    }

    console.log("handleToggleAmenityOption", array, state);
  }

  function handleChangeRoom(values, id) {
    const newRooms = state.rooms.map((room, index) => {
      if (room.id === id) {
        return EditProperty_objectSpread(EditProperty_objectSpread({}, room), values);
      }

      return room;
    });
    console.log("handleChangeRoom", newRooms);
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
      rooms: newRooms
    }));
  }

  function handleAddRoom() {
    const generatedId = new Date().getTime();
    console.log("array", array, generatedId);
    let array = state.rooms;
    array.push({
      id: generatedId,
      name: "",
      bedType: "Q"
    });
    console.log("handleAddRoom", array);
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
      rooms: array
    }));
  }

  function handleRemoveRoom(roomId) {
    console.log("handleRemoveRoom", roomId);
    let array = state.rooms;
    let index = array.findIndex(item => item.id === roomId);

    if (index > -1) {
      array[index].name = "";
      array[index].bedType = "";
      setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
        rooms: array
      }));
    }
  }

  function handleUploadSuccess(image) {
    const {
      galleryImgs
    } = state;
    galleryImgs.push(EditProperty_objectSpread(EditProperty_objectSpread({}, image), {}, {
      order: galleryImgs.length - 1
    }));
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
      galleryImgs
    }));
  }

  function handleSortEnd({
    oldIndex,
    newIndex
  }) {
    const newArray = external_array_move_default()(state.galleryImgs, oldIndex, newIndex);
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
      galleryImgs: newArray.map((image, index) => EditProperty_objectSpread(EditProperty_objectSpread({}, image), {}, {
        order: index + 1
      }))
    }));
  }

  function handleSelectFeatured(image) {
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
      featuredImg: image
    }));
  }

  function handleSimilarPropertyChange(propertyIds) {
    setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
      similarProperties: propertyIds
    }));
  }

  const {
    rowStyle,
    colStyle
  } = constants;
  return EditProperty_jsx(layoutWrapper["a" /* default */], null, EditProperty_jsx(SinglePropertyWrapper, null, EditProperty_jsx("div", {
    className: "property-detail-actions"
  }, EditProperty_jsx(button_default.a, {
    type: "primary",
    onClick: handleSave,
    style: {
      marginRight: 20
    }
  }, "Save"), EditProperty_jsx(button_default.a, {
    type: "default",
    onClick: handleReset
  }, "Reset"), EditProperty_jsx(link_default.a, {
    href: "/admin/property"
  }, EditProperty_jsx(button_default.a, {
    type: "primary"
  }, "Back to List")), EditProperty_jsx("a", {
    href: `/listing/${selectedItem.slug}`,
    target: "_blank"
  }, "Preview")), EditProperty_jsx(row_default.a, {
    style: rowStyle,
    gutter: 0,
    justify: "start"
  }, EditProperty_jsx(col_default.a, {
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle
  }, EditProperty_jsx("div", {
    className: "property-detail-main"
  }, state.name !== "" && EditProperty_jsx(Main, {
    name: state.name,
    bookervilleId: state.bookervilleId,
    category: state.category,
    onValuesChange: handleMainInfoChange
  }), EditProperty_jsx(Gallery, {
    items: state.galleryImgs,
    onSortEnd: handleSortEnd,
    onUploadSuccess: handleUploadSuccess
  }), EditProperty_jsx(FeaturedImage, {
    items: state.galleryImgs,
    selectedItem: state.featuredImg,
    onUploadSuccess: handleUploadSuccess,
    onSelectImage: handleSelectFeatured
  }))), EditProperty_jsx(col_default.a, {
    lg: 16,
    md: 12,
    sm: 24,
    xs: 24,
    style: colStyle
  }, EditProperty_jsx(tabs["b" /* default */], {
    defaultActiveKey: "1",
    onChange: callback,
    className: "property-detail-tab"
  }, ["description", "neighbourhood", "transit"].map(item => EditProperty_jsx(tabs["a" /* TabPane */], {
    tab: item.charAt(0).toUpperCase() + item.slice(1),
    key: item
  }, (state === null || state === void 0 ? void 0 : state[item]) && EditProperty_jsx(Editor_Editor["a" /* default */], EditProperty_extends({}, editorOption, {
    html: state[item],
    onEditorStateChange: html => setState(EditProperty_objectSpread(EditProperty_objectSpread({}, state), {}, {
      [item]: html
    }))
  })))), EditProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Location",
    key: "location"
  }, EditProperty_jsx(Property_Location_Location, {
    address: state.address,
    center: {
      lat: state.lat,
      lng: state.lng
    },
    onPlaceChange: handlePlaceChange,
    onReset: handlePlaceReset
  })), EditProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Setting",
    key: "setting"
  }, EditProperty_jsx(Setting_Setting, {
    setting: state,
    onValuesChange: handleSettingChange
  })), EditProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Amenity",
    key: "amenity"
  }, EditProperty_jsx(Amenity, {
    amenities: state.amenities,
    onToggleOption: handleToggleAmenityOption
  })), EditProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Bedtype",
    key: "rooms"
  }, EditProperty_jsx(Rooms, {
    rooms: state.rooms,
    onRoomChange: handleChangeRoom,
    onAddRoom: handleAddRoom,
    onRemoveRoom: handleRemoveRoom,
    onValuesChange: handleSettingChange
  })), EditProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Pricing",
    key: "pricing"
  }, EditProperty_jsx(PricingCalendar, {
    propertyId: propertyId,
    defaultPrice: state.price
  })), EditProperty_jsx(tabs["a" /* TabPane */], {
    tab: "Similar Properties",
    key: "similar"
  }, EditProperty_jsx(SimilarProperty, {
    propertyId: state.id,
    selectedItems: state.similarProperties,
    onRowSelection: handleSimilarPropertyChange
  })))))));
}
// CONCATENATED MODULE: ./components/Admin/Property/SingleProperty.js
var SingleProperty_jsx = external_react_default.a.createElement;



function SingleProperty(props) {
  const {
    propertyId
  } = props;

  if (propertyId !== "1234") {
    return SingleProperty_jsx(EditProperty, {
      propertyId: propertyId
    });
  }

  return SingleProperty_jsx(AddProperty, null);
}
// CONCATENATED MODULE: ./pages/admin/property.js
var property_jsx = external_react_default.a.createElement;








const getPropertyId = props => {
  try {
    const {
      router
    } = props;
    return {
      propertyId: router.query.id,
      redirectPath: router.pathname
    };
  } catch (e) {}
};

/* harmony default export */ var admin_property = __webpack_exports__["default"] = (Object(router_["withRouter"])(Object(auth_utils["d" /* withAuthSync */])(props => {
  let {
    propertyId,
    redirectPath
  } = getPropertyId(props);
  return property_jsx(external_react_default.a.Fragment, null, property_jsx(head_default.a, null, property_jsx("title", null, "Property listing")), property_jsx(DashboardLayout["a" /* default */], null, propertyId ? property_jsx(SingleProperty, {
    propertyId: propertyId,
    redirectPath: redirectPath
  }) : property_jsx(PropertyList, null)));
})));

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

/***/ "ZHdE":
/***/ (function(module, exports) {

module.exports = require("react-dropzone-component");

/***/ }),

/***/ "ZHkp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-dropzone-component"
var external_react_dropzone_component_ = __webpack_require__("ZHdE");
var external_react_dropzone_component_default = /*#__PURE__*/__webpack_require__.n(external_react_dropzone_component_);

// EXTERNAL MODULE: ./node_modules/dropzone/dist/min/dropzone.min.css
var dropzone_min = __webpack_require__("ZsRK");

// CONCATENATED MODULE: ./shared/components/uielements/dropzone.js


/* harmony default export */ var dropzone = (external_react_dropzone_component_default.a);
// EXTERNAL MODULE: ./shared/components/index.js + 3 modules
var components = __webpack_require__("OKMn");

// EXTERNAL MODULE: ./shared/components/utility/box.js + 3 modules
var box = __webpack_require__("OnoS");

// EXTERNAL MODULE: ./shared/components/utility/layoutWrapper.js + 1 modules
var layoutWrapper = __webpack_require__("kOzy");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./shared/components/utility/contentHolder.style.js



const WDContentHolderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "contentHolderstyle__WDContentHolderWrapper",
  componentId: "qvsoxu-0"
})(["margin-top:30px;-webkit-overflow-scrolling:touch;.demoBtn{margin-right:", ";margin-left:", ";}.demoBtnsWrapper{&:nth-child(1){margin-left:", ";margin-right:", ";white-space:nowrap;}&:nth-child(2){width:70px;float:", ";}&:nth-child(3){width:70px;margin-left:", ";margin-right:", ";}&:nth-child(4){margin-left:", ";margin-right:", ";clear:both;white-space:nowrap;}@media only screen and (max-width:480px){margin-left:", ";white-space:nowrap;margin-right:", ";float:none !important;}.demoPosBtn{width:70px;margin-right:", ";margin-left:", ";margin-bottom:8px;padding:0;@media only screen and (max-width:480px){width:65px;}}}.ant-btn{&:not(.demoPosBtn){&:last-child{margin-right:0;}}}.tooltipBtn{display:inline-block;line-height:32px;height:32px;width:70px;font-size:14px;text-align:center;background:", ";margin-right:", ";margin-left:", ";margin-bottom:6px;border-radius:6px;}.ant-progress{&.ant-progress-circle{margin-right:", ";margin-left:", ";&:last-child{margin-right:", ";margin-left:", ";}}}strong{font-weight:700;font-size:14px;}"], props => props['data-rtl'] === 'rtl' ? '0' : '10px', props => props['data-rtl'] === 'rtl' ? '10px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '70px', props => props['data-rtl'] === 'rtl' ? '70px' : '0', props => props['data-rtl'] === 'rtl' ? 'right' : 'left', props => props['data-rtl'] === 'rtl' ? '0' : '295px', props => props['data-rtl'] === 'rtl' ? '295px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '70px', props => props['data-rtl'] === 'rtl' ? '70px' : '0', props => props['data-rtl'] === 'rtl' ? '8px' : '0 !important', props => props['data-rtl'] === 'rtl' ? '0 !important' : '8px', props => props['data-rtl'] === 'rtl' ? '0' : '8px', props => props['data-rtl'] === 'rtl' ? '8px' : '0', Object(external_styled_theme_["palette"])('secondary', 1), props => props['data-rtl'] === 'rtl' ? 'auto' : '6px', props => props['data-rtl'] === 'rtl' ? '6px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '15px', props => props['data-rtl'] === 'rtl' ? '15px' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '0', props => props['data-rtl'] === 'rtl' ? '0' : '0');
const ContentHolderWrapper = Object(rtl["a" /* default */])(WDContentHolderWrapper);

// CONCATENATED MODULE: ./shared/components/utility/contentHolder.js
var __jsx = external_react_default.a.createElement;


/* harmony default export */ var contentHolder = (props => __jsx(ContentHolderWrapper, {
  className: "isoExampleWrapper",
  style: props.style
}, props.children));
// EXTERNAL MODULE: ./components/Admin/Property/Dropzone/Dropzone.styles.js
var Dropzone_styles = __webpack_require__("Nu+n");

// EXTERNAL MODULE: ./redux/authentication/auth.utils.js
var auth_utils = __webpack_require__("vBVF");

// EXTERNAL MODULE: ./env-config.js
var env_config = __webpack_require__("Ye+W");

// CONCATENATED MODULE: ./components/Admin/Property/Dropzone/Dropzone.js
var Dropzone_jsx = external_react_default.a.createElement;









/* harmony default export */ var Dropzone = __webpack_exports__["a"] = (props => {
  const {
    onUploadSuccess
  } = props;
  const componentConfig = {
    iconFiletypes: [".jpg", ".png", ".gif"],
    method: true,
    showFiletypeIcon: true,
    uploadMultiple: false,
    maxFilesize: 2,
    // MB
    maxFiles: 2,
    dictMaxFilesExceeded: "You can only upload upto 2 images",
    dictRemoveFile: "Delete",
    dictCancelUploadConfirmation: "Are you sure to cancel upload?",
    postUrl: "no-url"
  };
  const djsConfig = {
    autoProcessQueue: false
  };
  const eventHandlers = {
    addedfile: file => onAddedFile(file),
    success: file => Object(components["a" /* notification */])("success", `${file.name} successfully uploaded`),
    error: error => Object(components["a" /* notification */])("error", "Server is not set in the demo")
  };

  async function onAddedFile(file) {
    Object(components["a" /* notification */])("success", `${file.name} added`);
    const body = new FormData();
    body.append("file", file);
    const res = await fetch(`${env_config["BACKEND_URL"]}/api/media/create`, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + Object(auth_utils["a" /* getCookie */])("token")
      },
      body
    }).then(res => res.json()).then(res => res).catch(error => error);
    onUploadSuccess(res);
  } // async function handleAddImage(selectedFiles) {
  //   if (selectedFiles[0].size > 1024 * 1024 * 10) {
  //     setError("You can only upload files smaller than 10MB.");
  //     return;
  //   }
  //   if (selectedFiles[0].type.indexOf("image") === -1) {
  //     setError("You can only upload image files.");
  //     return;
  //   }
  //   let files = new FormData();
  //   files.append("fileToUpload", selectedFiles[0]);
  //   setIsUploadingAttachment(true);
  //   try {
  //     const response = await postFile(
  //       `/api/v2/services/${activeService.id}/image`,
  //       files
  //     );
  //     const { imagePath } = response;
  //     const newServices = services.map((service) => {
  //       if (service.id === activeService.id) {
  //         service.imagePath = imagePath;
  //       }
  //       return service;
  //     });
  //     onImageChange(newServices);
  //     setIsUploadingAttachment(false);
  //   } catch (errorMessage) {
  //     setError(errorMessage);
  //     setIsUploadingAttachment(false);
  //   }
  // }
  // async function handleDeleteImage() {
  //   setIsDeletingAttachment(true);
  //   setError(null);
  //   try {
  //     await remove(`/api/v2/services/${activeService.id}/image`);
  //     const newServices = services.map((service) => {
  //       if (service.id === activeService.id) {
  //         service.imagePath = null;
  //       }
  //       return service;
  //     });
  //     setIsDeletingAttachment(false);
  //     onImageChange(newServices);
  //   } catch (errorMessage) {
  //     setIsDeletingAttachment(false);
  //     setError(
  //       "There was an error deleting this file, please try again. If the problem persists, please contact us."
  //     );
  //   }
  // }


  return Dropzone_jsx(layoutWrapper["a" /* default */], null, Dropzone_jsx(box["a" /* default */], null, Dropzone_jsx(contentHolder, null, Dropzone_jsx(Dropzone_styles["a" /* default */], null, Dropzone_jsx(dropzone, {
    config: componentConfig,
    eventHandlers: eventHandlers,
    djsConfig: djsConfig
  })))));
});

/***/ }),

/***/ "ZsRK":
/***/ (function(module, exports) {



/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

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

/***/ "cYqx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ TabPane; });

// EXTERNAL MODULE: external "antd/lib/tabs"
var tabs_ = __webpack_require__("zkM6");
var tabs_default = /*#__PURE__*/__webpack_require__.n(tabs_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./shared/components/uielements/styles/tab.style.js


const AntTab = ComponentName => external_styled_components_default()(ComponentName).withConfig({
  displayName: "tabstyle__AntTab",
  componentId: "zxh90w-0"
})(["&.ant-tabs{&:not(.ant-tabs-vertical){> .ant-tabs-content-animated{display:", ";}}.ant-tabs-nav{.ant-tabs-tab{margin:", ";.anticon:not(.anticon-close){margin:", ";&.anticon-close{right:", ";;left:", ";;}}}}.ant-tabs-tab-prev{left:", ";right ", ";transform:", ";}.ant-tabs-tab-next{left:", ";right ", ";transform:", ";}&.ant-tabs-vertical{.ant-tabs-tab-prev,.ant-tabs-tab-next{transform:rotate(0);}}}"], props => props['data-rtl'] === 'rtl' ? 'block' : 'flex', props => props['data-rtl'] === 'rtl' ? '0 0 0 24px' : '0 24px 0 0', props => props['data-rtl'] === 'rtl' ? '0 0 0 8px' : '0 8px 0 0', props => props['data-rtl'] === 'rtl' ? 'inherit' : '2px', props => props['data-rtl'] === 'rtl' ? '2px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '0', props => props['data-rtl'] === 'rtl' ? '2px' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', props => props['data-rtl'] === 'rtl' ? '0' : 'inherit', props => props['data-rtl'] === 'rtl' ? 'inherit' : '2px', props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)');

/* harmony default export */ var tab_style = (AntTab);
// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./shared/components/uielements/tabs.js



const WDTabs = tab_style(tabs_default.a);
const TabPane = tabs_default.a.TabPane;
const isoTabs = Object(rtl["a" /* default */])(WDTabs);
/* harmony default export */ var tabs = __webpack_exports__["b"] = (isoTabs);


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

/***/ "fcRV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "foLw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

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

/***/ "hzVQ":
/***/ (function(module, exports) {



/***/ }),

/***/ "i1JB":
/***/ (function(module, exports) {

module.exports = require("react-image-crop");

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

/***/ "jiIP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("QghY");
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "k004":
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),

/***/ "kOzy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./shared/components/utility/layoutWrapper.style.js

const LayoutContentWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "layoutWrapperstyle__LayoutContentWrapper",
  componentId: "qhwnm2-0"
})(["padding:40px 20px;display:flex;flex-flow:row wrap;overflow:hidden;@media only screen and (max-width:767px){padding:50px 20px;}@media (max-width:580px){padding:15px;}"]);

// CONCATENATED MODULE: ./shared/components/utility/layoutWrapper.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



/* harmony default export */ var layoutWrapper = __webpack_exports__["a"] = (props => __jsx(LayoutContentWrapper, _extends({
  className: props.className != null ? `${props.className} isoLayoutContentWrapper` : 'isoLayoutContentWrapper'
}, props), props.children));

/***/ }),

/***/ "l2Wt":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("k004");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InjectMassage = props => __jsx(react_intl__WEBPACK_IMPORTED_MODULE_1__["FormattedMessage"], props);

/* harmony default export */ __webpack_exports__["a"] = (Object(react_intl__WEBPACK_IMPORTED_MODULE_1__["injectIntl"])(InjectMassage, {
  withRef: false
}));

/***/ }),

/***/ "lRMu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qC9r");
/* harmony import */ var react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


/* harmony default export */ __webpack_exports__["a"] = (({
  id,
  style,
  children,
  className
}) => __jsx(react_custom_scrollbars__WEBPACK_IMPORTED_MODULE_1__["Scrollbars"], {
  id: id,
  className: className,
  style: style,
  autoHide: true,
  autoHideTimeout: 1000,
  autoHideDuration: 200 // autoHeight
  ,
  autoHeightMin: 0,
  autoHeightMax: 200,
  thumbMinSize: 30,
  universal: true
}, children));

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

/***/ "o4UX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ("/static/assets/849699bef1cce0bd414a980c7575002a.svg");

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

/***/ "pUGn":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons/lib/icons/DeleteOutlined");

/***/ }),

/***/ "qC9r":
/***/ (function(module, exports) {

module.exports = require("react-custom-scrollbars");

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

/***/ "sAR6":
/***/ (function(module, exports) {

module.exports = require("clone");

/***/ }),

/***/ "sGDL":
/***/ (function(module, exports) {

module.exports = require("array-move");

/***/ }),

/***/ "tI3Q":
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "uhnA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// UNUSED EXPORTS: CustomizedTableWrapper

// EXTERNAL MODULE: external "antd/lib/table"
var table_ = __webpack_require__("Puj+");
var table_default = /*#__PURE__*/__webpack_require__.n(table_);

// CONCATENATED MODULE: ./shared/components/uielements/table.js

/* harmony default export */ var table = (table_default.a);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// EXTERNAL MODULE: ./shared/library/helpers/style_utils.js
var style_utils = __webpack_require__("p3F5");

// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./shared/containers/Tables/AntTables/AntTables.styles.js





const TableWrapper = external_styled_components_default()(table).withConfig({
  displayName: "AntTablesstyles__TableWrapper",
  componentId: "sc-14sf9ud-0"
})(["overflow:hidden;overflow-x:auto;background-color:#ffffff;.opt-cell{svg{margin-right:10px;width:25px;height:25px}}.ant-table-body{overflow-x:auto;}.ant-table-thead > tr > th{color:#ffffff;font-size:16px;background:", ";border-bottom:0;&.ant-table-column-sort{background:", ";margin:", ";}}.ant-table-thead > tr > th,.ant-table-tbody > tr > td{white-space:nowrap;text-align:", ";p{margin-bottom:0;}}.ant-table-tbody > tr > td{font-size:16px;color:", ";border-bottom:1px solid ", ";a{color:", ";", ";&:hover{color:", ";}}}.ant-table-thead > tr.ant-table-row-hover > td,.ant-table-tbody > tr.ant-table-row-hover > td,.ant-table-thead > tr:hover > td,.ant-table-tbody > tr:hover > td{background-color:transparent;}.ant-table-bordered .ant-table-thead > tr > th{border-bottom:1px solid ", ";}.ant-table-bordered .ant-table-thead > tr > th,.ant-table-bordered .ant-table-tbody > tr > td{border-right:1px solid ", ";}.ant-table-pagination{float:", ";}.ant-pagination-prev,.ant-pagination-next{border:1px solid ", ";}.ant-pagination-disabled,.ant-pagination-prev.ant-pagination-disabled,.ant-pagination-next.ant-pagination-disabled{border:1px solid ", ";a{border:0;}}.ant-pagination-prev,.ant-pagination-next,.ant-pagination-jump-prev,.ant-pagination-jump-next{transform:", ";}.ant-pagination-prev,.ant-pagination-jump-prev,.ant-pagination-jump-next{margin:", ";}.ant-pagination-item{margin:", ";&:hover{border-color:", ";", ";}&:hover a{color:", ";}}.ant-pagination-item-active{background-color:", ";border-color:", ";a{color:#ffffff;}&:hover a{color:#ffffff;}}.ant-table-expanded-row{background:", ";p{color:", ";}}.ant-spin-nested-loading > div > .ant-spin{max-height:none;.ant-spin-dot i{color:", ";}}.ant-table-header{background-color:transparent;}.ant-table-title{background:", ";color:", ";font-size:13px;font-weight:500;padding:16px 30px;", ";}.ant-table-footer{background:", ";color:", ";font-size:12px;font-weight:400;padding:16px 30px;", ";}.ant-table-content{overflow-x:auto;}.ant-table-column-sorter-up.on .anticon-caret-up,.ant-table-column-sorter-down.on .anticon-caret-up,.ant-table-column-sorter-up.on .anticon-caret-down,.ant-table-column-sorter-down.on .anticon-caret-down{color:", ";}&.isoSearchableTable{.isoTableSearchBox{padding:20px;display:flex;background:#ffffff;border:1px solid ", ";", ";input{font-size:14px;font-weight:400;color:", ";line-height:inherit;height:36px;width:100%;padding:0 15px;margin:0;border:1px solid ", ";outline:0 !important;overflow:hidden;background-color:#ffffff;", ";", ";", ";&:focus,&:hover{border-color:", ";", ";}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}button{font-size:12px;font-weight:400;padding:0;text-transform:uppercase;color:#ffffff;background-color:", ";border:0;outline:0;height:36px;padding:0 15px;margin-left:-1px;cursor:pointer;border-radius:", ";", ";&:hover{background-color:", ";}}}.ant-table-thead > tr > th{word-break:keep-all;span{display:flex;justify-content:flex-start;align-items:center;i{margin:", ";order:-1;}}}}&.isoGroupTable{.ant-table-thead > tr{th{border:1px solid ", ";border-left:0;&[rowspan]{text-align:center;}&.isoImageCell{padding:3px;}}&:first-child{th{&:first-child{border-left:", " solid ", ";}}}&:last-child{th{border-top:0;}}}.ant-table-tbody{.ant-table-row{td{border-right:1px solid ", ";&:first-child{border-left:", " solid ", ";}&:last-child{border-left:", " solid ", ";}&.isoImageCell{padding:3px;}}}}}&.isoEditableTable{.isoEditData{.isoEditDataWrapper{display:flex;align-items:center;input{font-size:12px;font-weight:400;color:", ";line-height:inherit;padding:7px 10px;margin:", ";border:1px solid ", ";outline:0 !important;overflow:hidden;background-color:#ffffff;", ";", ";", ";&:focus,&:hover{border-color:", ";", ";}&::-webkit-input-placeholder{color:", ";}&:-moz-placeholder{color:", ";}&::-moz-placeholder{color:", ";}&:-ms-input-placeholder{color:", ";}}.isoEditIcon{cursor:pointer;}}.isoDataWrapper{display:flex;align-items:center;.isoEditIcon{margin:", ";cursor:pointer;flex-shrink:0;}}}}"], Object(external_styled_theme_["palette"])('secondary', 1), Object(external_styled_theme_["palette"])('secondary', 1), props => props['data-rtl'] === 'rtl' ? '0 4px 0 0' : '0 0 0 4px', props => props['data-rtl'] === 'rtl' ? 'right' : 'left', Object(external_styled_theme_["palette"])('text', 3), Object(external_styled_theme_["palette"])('border', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 4), Object(external_styled_theme_["palette"])('border', 0), Object(external_styled_theme_["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? 'left' : 'right', Object(external_styled_theme_["palette"])('border', 0), Object(external_styled_theme_["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? 'rotate(180deg)' : 'rotate(0)', props => props['data-rtl'] === 'rtl' ? '0 0 0 8px' : '0 8px 0 0', props => props['data-rtl'] === 'rtl' ? '0 0 0 8px' : '0 8px 0 0', Object(external_styled_theme_["palette"])('primary', 0), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('grayscale', 6), Object(external_styled_theme_["palette"])('text', 3), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('secondary', 1), Object(external_styled_theme_["palette"])('secondary', 2), Object(style_utils["a" /* borderRadius */])(), Object(external_styled_theme_["palette"])('secondary', 1), Object(external_styled_theme_["palette"])('secondary', 2), Object(style_utils["a" /* borderRadius */])(), Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('border', 0), Object(style_utils["b" /* boxShadow */])('0 1px 6px rgba(0,0,0,0.2)'), Object(external_styled_theme_["palette"])('text', 3), Object(external_styled_theme_["palette"])('secondary', 7), Object(style_utils["a" /* borderRadius */])('3px 0 0 3px'), Object(style_utils["c" /* transition */])(), Object(style_utils["b" /* boxShadow */])('none'), Object(external_styled_theme_["palette"])('secondary', 7), Object(style_utils["b" /* boxShadow */])('none'), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('primary', 0), props => props['data-rtl'] === 'rtl' ? '3px 0 0 3px' : '0 3px 3px 0', Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('primary', 1), props => props['data-rtl'] === 'rtl' ? '0 0 0 10px' : '0 10px 0 0', Object(external_styled_theme_["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0' : '1px', Object(external_styled_theme_["palette"])('border', 0), Object(external_styled_theme_["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '0' : '1px', Object(external_styled_theme_["palette"])('border', 0), props => props['data-rtl'] === 'rtl' ? '1px' : '0', Object(external_styled_theme_["palette"])('border', 0), Object(external_styled_theme_["palette"])('text', 3), props => props['data-rtl'] === 'rtl' ? '0 0 0 10px' : '0 10px 0 0', Object(external_styled_theme_["palette"])('border', 0), Object(style_utils["a" /* borderRadius */])('3px'), Object(style_utils["b" /* boxShadow */])(), Object(style_utils["c" /* transition */])(), Object(external_styled_theme_["palette"])('border', 0), Object(style_utils["b" /* boxShadow */])(), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), Object(external_styled_theme_["palette"])('grayscale', 0), props => props['data-rtl'] === 'rtl' ? '0 auto 0 0' : '0 0 0 auto');
const WDCustomizedTableWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "AntTablesstyles__WDCustomizedTableWrapper",
  componentId: "sc-14sf9ud-1"
})([".isoCustomizedTableControlBar{margin-bottom:40px;.ant-form-item{margin:", ";}.ant-form-item-label{label{color:", ";&:after{margin:", ";}}}.ant-switch-checked{border-color:", ";background-color:", ";}}"], props => props['data-rtl'] === 'rtl' ? '0 0 0 16px' : '0 16px 0 0', Object(external_styled_theme_["palette"])('secondary', 2), props => props['data-rtl'] === 'rtl' ? '0 2px 0 8px' : '0 8px 0 2px', Object(external_styled_theme_["palette"])('primary', 0), Object(external_styled_theme_["palette"])('primary', 0));
const CustomizedTableWrapper = Object(rtl["a" /* default */])(WDCustomizedTableWrapper);

/* harmony default export */ var AntTables_styles = __webpack_exports__["a"] = (Object(rtl["a" /* default */])(TableWrapper));

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

/***/ "vSWp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["a"] = (({
  text = ''
}) => __jsx("div", {
  className: "isoHelperText",
  style: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '20px'
  }
}, __jsx("h3", null, text)));

/***/ }),

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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

/***/ "yOgr":
/***/ (function(module, exports) {



/***/ }),

/***/ "yc1h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-theme"
var external_styled_theme_ = __webpack_require__("BnVt");

// EXTERNAL MODULE: ./shared/library/helpers/rtl.js
var rtl = __webpack_require__("AwK5");

// CONCATENATED MODULE: ./shared/components/utility/pageHeader.style.js



const WDComponentTitleWrapper = external_styled_components_default.a.h1.withConfig({
  displayName: "pageHeaderstyle__WDComponentTitleWrapper",
  componentId: "nr81kb-0"
})(["font-size:19px;font-weight:500;color:", ";width:100%;margin-right:17px;margin-bottom:30px;display:flex;align-items:center;white-space:nowrap;@media only screen and (max-width:767px){margin:0 10px;margin-bottom:30px;}&:before{content:'';width:5px;height:40px;background-color:", ";display:flex;margin:", ";}&:after{content:'';width:100%;height:1px;background-color:", ";display:flex;margin:", ";}"], Object(external_styled_theme_["palette"])('secondary', 2), Object(external_styled_theme_["palette"])('secondary', 3), props => props['data-rtl'] === 'rtl' ? '0 0 0 15px' : '0 15px 0 0', Object(external_styled_theme_["palette"])('secondary', 3), props => props['data-rtl'] === 'rtl' ? '0 15px 0 0' : '0 0 0 15px');
const ComponentTitleWrapper = Object(rtl["a" /* default */])(WDComponentTitleWrapper);

// CONCATENATED MODULE: ./shared/components/utility/pageHeader.js
var __jsx = external_react_default.a.createElement;


/* harmony default export */ var pageHeader = __webpack_exports__["a"] = (props => __jsx(ComponentTitleWrapper, {
  className: "isoComponentTitle"
}, props.children));

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

/***/ "zkM6":
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ })

/******/ });