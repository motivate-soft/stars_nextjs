webpackHotUpdate_N_E("pages/admin/property",{

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
      dataList: items.map(function (item) {
        return _objectSpread({
          key: item.id
        }, item);
      })
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
        name: record.name
      };
    }
  };
  return __jsx(_iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx(_iso_components_utility_pageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, "Category"), __jsx(_iso_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, (items === null || items === void 0 ? void 0 : items.length) === 0 ? __jsx(_iso_components_utility_helper_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "No Properties found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 21
    }
  }) : __jsx("div", {
    className: "isoPropertyTable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
      lineNumber: 93,
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
      lineNumber: 96,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9TaW1pbGFyUHJvcGVydHkvU2ltaWxhclByb3BlcnR5LmpzIl0sIm5hbWVzIjpbInRhYmxlQ29sdW1ucyIsInRpdGxlIiwia2V5Iiwid2lkdGgiLCJyZW5kZXIiLCJvYmplY3QiLCJpZCIsIm5hbWUiLCJhZGRyZXNzIiwiU2ltaWxhclByb3BlcnR5IiwicHJvcHMiLCJzZWxlY3RlZEl0ZW1zIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJQcm9wZXJ0aWVzIiwiaXRlbXMiLCJsb2FkaW5nIiwidXNlU3RhdGUiLCJjb2x1bW5zIiwiZGF0YUxpc3QiLCJzZXRTdGF0ZSIsInVzZUVmZmVjdCIsInByb3BlcnR5QWN0aW9ucyIsImdldEFsbFByb3BlcnRpZXMiLCJtYXAiLCJpdGVtIiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImRpc2FibGVkIiwibGVuZ3RoIiwiaGVpZ2h0IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQ0E7QUFFQTtBQUdBLElBQU1BLFlBQVksR0FBRyxDQUNqQjtBQUNJQyxPQUFLLEVBQUUsSUFEWDtBQUVJQyxLQUFHLEVBQUUsSUFGVDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxRQUFNLEVBQUUsZ0JBQUNDLE1BQUQ7QUFBQSxXQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUEsTUFBTSxDQUFDQyxFQUFYLENBQVo7QUFBQTtBQUpaLENBRGlCLEVBT2pCO0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrRUFBRDtBQUNJLFNBQUssRUFBRTtBQUFDbEMsV0FBSyxFQUFFLE1BQVI7QUFBZ0JtQyxZQUFNLEVBQUU7QUFBeEIsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQywwRkFBRDtBQUNJLGdCQUFZO0FBQ1JDLFVBQUksRUFBRTtBQURFLE9BRUxYLFlBRkssQ0FEaEI7QUFLSSxXQUFPLEVBQUVSLE9BTGI7QUFNSSxjQUFVLEVBQUVILEtBTmhCO0FBT0ksYUFBUyxFQUFDLG1CQVBkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLENBTFIsQ0FGSixDQURKO0FBMkJIOztHQWhFdUJSLGU7VUFFSEksd0QsRUFFUUMsd0Q7OztLQUpMTCxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Byb3BlcnR5LjQ1NmQ2ZTE5Mjg1NjYyYjBkN2EyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsb25lIGZyb20gXCJjbG9uZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2JveFwiO1xyXG5pbXBvcnQgSGVscGVyVGV4dCBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvaGVscGVyLXRleHRcIjtcclxuaW1wb3J0IExheW91dFdyYXBwZXIgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2xheW91dFdyYXBwZXJcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L3BhZ2VIZWFkZXJcIjtcclxuaW1wb3J0IFNjcm9sbGJhcnMgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2N1c3RvbVNjcm9sbEJhclwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdWllbGVtZW50cy9idXR0b25cIjtcclxuaW1wb3J0IFBvcGNvbmZpcm0gZnJvbSBcIkBpc28vY29tcG9uZW50cy9GZWVkYmFjay9Qb3Bjb25maXJtXCI7XHJcbmltcG9ydCB7XHJcbiAgICBEYXRlQ2VsbCxcclxuICAgIEltYWdlQ2VsbCxcclxuICAgIExpbmtDZWxsLFxyXG4gICAgVGV4dENlbGwsXHJcbn0gZnJvbSBcIkBpc28vY29tcG9uZW50cy9UYWJsZXMvSGVscGVyQ2VsbHNcIjtcclxuaW1wb3J0IHtFZGl0T3V0bGluZWQsIERlbGV0ZU91dGxpbmVkfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IFRhYmxlV3JhcHBlciBmcm9tIFwiQGlzby9jb250YWluZXJzL1RhYmxlcy9BbnRUYWJsZXMvQW50VGFibGVzLnN0eWxlc1wiO1xyXG5cclxuaW1wb3J0IGNhdGVnb3J5QWN0aW9ucyBmcm9tIFwiQHJlZHV4L2NhdGVnb3JpZXMvYWN0aW9uc1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7RGl2aWRlciwgUmFkaW99IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBwcm9wZXJ0eUFjdGlvbnMgZnJvbSBcIkByZWR1eC9wcm9wZXJ0aWVzL2FjdGlvbnNcIjtcclxuXHJcblxyXG5jb25zdCB0YWJsZUNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSURcIixcclxuICAgICAgICBrZXk6IFwiaWRcIixcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHJlbmRlcjogKG9iamVjdCkgPT4gPHA+e29iamVjdC5pZH08L3A+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJOYW1lXCIsXHJcbiAgICAgICAga2V5OiBcIm5hbWVcIixcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHJlbmRlcjogKG9iamVjdCkgPT4gPHA+e29iamVjdC5uYW1lfTwvcD4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkFkZHJlc3NcIixcclxuICAgICAgICBrZXk6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgcmVuZGVyOiAob2JqZWN0KSA9PiA8cD57b2JqZWN0LmFkZHJlc3N9PC9wPixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1pbGFyUHJvcGVydHkocHJvcHMpIHtcclxuICAgIGNvbnN0IHtzZWxlY3RlZEl0ZW1zfSA9IHByb3BzXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qge2l0ZW1zLCBsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuUHJvcGVydGllcyk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjb2x1bW5zOiB0YWJsZUNvbHVtbnMsXHJcbiAgICAgICAgZGF0YUxpc3Q6IGl0ZW1zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwcm9wZXJ0eUFjdGlvbnMuZ2V0QWxsUHJvcGVydGllcygpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGRhdGFMaXN0OiBpdGVtcy5tYXAoaXRlbSA9PiAoe1xyXG4gICAgICAgICAgICAgICAga2V5OiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2l0ZW1zXSk7XHJcblxyXG4gICAgY29uc3Qge2NvbHVtbnMsIGRhdGFMaXN0fSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFJvd0tleXM6ICR7c2VsZWN0ZWRSb3dLZXlzfWAsICdzZWxlY3RlZFJvd3M6ICcsIHNlbGVjdGVkUm93cyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDaGVja2JveFByb3BzOiAocmVjb3JkKSA9PiAoe1xyXG4gICAgICAgICAgICBkaXNhYmxlZDogcmVjb3JkLm5hbWUgPT09ICdEaXNhYmxlZCBVc2VyJyxcclxuICAgICAgICAgICAgLy8gQ29sdW1uIGNvbmZpZ3VyYXRpb24gbm90IHRvIGJlIGNoZWNrZWRcclxuICAgICAgICAgICAgbmFtZTogcmVjb3JkLm5hbWUsXHJcbiAgICAgICAgfSksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyPkNhdGVnb3J5PC9QYWdlSGVhZGVyPlxyXG4gICAgICAgICAgICA8Qm94PlxyXG5cclxuICAgICAgICAgICAgICAgIHtpdGVtcz8ubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWxwZXJUZXh0IHRleHQ9XCJObyBQcm9wZXJ0aWVzIGZvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb1Byb3BlcnR5VGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbGJhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiY2FsYyg2MHZoIC0gNzBweClcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucm93U2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeUxpc3RUYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0xheW91dFdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=