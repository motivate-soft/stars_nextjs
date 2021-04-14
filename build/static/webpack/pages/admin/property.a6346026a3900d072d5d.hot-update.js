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
/* harmony import */ var _iso_components_utility_box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @iso/components/utility/box */ "./shared/components/utility/box.js");
/* harmony import */ var _iso_components_utility_helper_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @iso/components/utility/helper-text */ "./shared/components/utility/helper-text.js");
/* harmony import */ var _iso_components_utility_customScrollBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @iso/components/utility/customScrollBar */ "./shared/components/utility/customScrollBar.js");
/* harmony import */ var _iso_containers_Tables_AntTables_AntTables_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @iso/containers/Tables/AntTables/AntTables.styles */ "./shared/containers/Tables/AntTables/AntTables.styles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_properties_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redux/properties/actions */ "./redux/properties/actions.js");


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
        lineNumber: 15,
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
        lineNumber: 21,
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
        lineNumber: 27,
        columnNumber: 29
      }
    }, object.address);
  }
}];
function SimilarProperty(props) {
  _s();

  var selectedItems = props.selectedItems,
      onRowSelection = props.onRowSelection;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
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
    dispatch(_redux_properties_actions__WEBPACK_IMPORTED_MODULE_7__["default"].getAllProperties());
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
      onRowSelection(selectedRowKeys);
    },
    getCheckboxProps: function getCheckboxProps(record) {
      return {
        // disabled: selectedItems.findIndex(item => item === parseInt(record.id)) > -1,
        // disabled: record.name === 'Disabled User',
        name: record.id
      };
    }
  };
  return __jsx(_iso_components_utility_box__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, dataList && (dataList === null || dataList === void 0 ? void 0 : dataList.length) === 0 ? __jsx(_iso_components_utility_helper_text__WEBPACK_IMPORTED_MODULE_3__["default"], {
    text: "No Properties found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }) : __jsx("div", {
    className: "isoPropertyTable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(_iso_components_utility_customScrollBar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      width: "100%",
      height: "calc(60vh - 70px)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx(_iso_containers_Tables_AntTables_AntTables_styles__WEBPACK_IMPORTED_MODULE_5__["default"], {
    rowKey: "id",
    rowSelection: _objectSpread({
      type: 'checkbox'
    }, rowSelection),
    columns: columns,
    dataSource: items,
    className: "propertyListTable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }))));
}

_s(SimilarProperty, "qpeHnE+SslkS2arFeVN7aen49Tk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9TaW1pbGFyUHJvcGVydHkvU2ltaWxhclByb3BlcnR5LmpzIl0sIm5hbWVzIjpbInRhYmxlQ29sdW1ucyIsInRpdGxlIiwia2V5Iiwid2lkdGgiLCJyZW5kZXIiLCJvYmplY3QiLCJpZCIsIm5hbWUiLCJhZGRyZXNzIiwiU2ltaWxhclByb3BlcnR5IiwicHJvcHMiLCJzZWxlY3RlZEl0ZW1zIiwib25Sb3dTZWxlY3Rpb24iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsIlByb3BlcnRpZXMiLCJpdGVtcyIsImxvYWRpbmciLCJ1c2VTdGF0ZSIsImNvbHVtbnMiLCJkYXRhTGlzdCIsInNldFN0YXRlIiwidXNlRWZmZWN0IiwicHJvcGVydHlBY3Rpb25zIiwiZ2V0QWxsUHJvcGVydGllcyIsInJvd1NlbGVjdGlvbiIsInNlbGVjdGVkUm93S2V5cyIsIm9uQ2hhbmdlIiwic2VsZWN0ZWRSb3dzIiwiZ2V0Q2hlY2tib3hQcm9wcyIsInJlY29yZCIsImxlbmd0aCIsImhlaWdodCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHLENBQ2pCO0FBQ0lDLE9BQUssRUFBRSxJQURYO0FBRUlDLEtBQUcsRUFBRSxJQUZUO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLFFBQU0sRUFBRSxnQkFBQ0MsTUFBRDtBQUFBLFdBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxNQUFNLENBQUNDLEVBQVgsQ0FBWjtBQUFBO0FBSlosQ0FEaUIsRUFPakI7QUFDSUwsT0FBSyxFQUFFLE1BRFg7QUFFSUMsS0FBRyxFQUFFLE1BRlQ7QUFHSUMsT0FBSyxFQUFFLEdBSFg7QUFJSUMsUUFBTSxF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UyxFQUFDLG1CQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLENBSlIsQ0FESjtBQXdCSDs7R0EzRHVCVCxlO1VBRUhLLHVELEVBRVFDLHVEOzs7S0FKTE4sZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9wcm9wZXJ0eS5hNjM0NjAyNmEzOTAwZDA3MmQ1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2JveFwiO1xyXG5pbXBvcnQgSGVscGVyVGV4dCBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvaGVscGVyLXRleHRcIjtcclxuaW1wb3J0IFNjcm9sbGJhcnMgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2N1c3RvbVNjcm9sbEJhclwiO1xyXG5pbXBvcnQgVGFibGVXcmFwcGVyIGZyb20gXCJAaXNvL2NvbnRhaW5lcnMvVGFibGVzL0FudFRhYmxlcy9BbnRUYWJsZXMuc3R5bGVzXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHByb3BlcnR5QWN0aW9ucyBmcm9tIFwiQHJlZHV4L3Byb3BlcnRpZXMvYWN0aW9uc1wiO1xyXG5cclxuXHJcbmNvbnN0IHRhYmxlQ29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJJRFwiLFxyXG4gICAgICAgIGtleTogXCJpZFwiLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgcmVuZGVyOiAob2JqZWN0KSA9PiA8cD57b2JqZWN0LmlkfTwvcD4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk5hbWVcIixcclxuICAgICAgICBrZXk6IFwibmFtZVwiLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgcmVuZGVyOiAob2JqZWN0KSA9PiA8cD57b2JqZWN0Lm5hbWV9PC9wPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQWRkcmVzc1wiLFxyXG4gICAgICAgIGtleTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICByZW5kZXI6IChvYmplY3QpID0+IDxwPntvYmplY3QuYWRkcmVzc308L3A+LFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbWlsYXJQcm9wZXJ0eShwcm9wcykge1xyXG4gICAgY29uc3Qge3NlbGVjdGVkSXRlbXMsIG9uUm93U2VsZWN0aW9ufSA9IHByb3BzXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qge2l0ZW1zLCBsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuUHJvcGVydGllcyk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjb2x1bW5zOiB0YWJsZUNvbHVtbnMsXHJcbiAgICAgICAgZGF0YUxpc3Q6IGl0ZW1zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwcm9wZXJ0eUFjdGlvbnMuZ2V0QWxsUHJvcGVydGllcygpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGRhdGFMaXN0OiBpdGVtc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2l0ZW1zXSk7XHJcblxyXG4gICAgY29uc3Qge2NvbHVtbnMsIGRhdGFMaXN0fSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuICAgICAgICBzZWxlY3RlZFJvd0tleXM6IHNlbGVjdGVkSXRlbXMsXHJcbiAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykgPT4ge1xyXG4gICAgICAgICAgICBvblJvd1NlbGVjdGlvbihzZWxlY3RlZFJvd0tleXMpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDaGVja2JveFByb3BzOiAocmVjb3JkKSA9PiAoe1xyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZDogc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSBwYXJzZUludChyZWNvcmQuaWQpKSA+IC0xLFxyXG4gICAgICAgICAgICAvLyBkaXNhYmxlZDogcmVjb3JkLm5hbWUgPT09ICdEaXNhYmxlZCBVc2VyJyxcclxuICAgICAgICAgICAgbmFtZTogcmVjb3JkLmlkLFxyXG4gICAgICAgIH0pLFxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIHtkYXRhTGlzdCAmJiBkYXRhTGlzdD8ubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgPEhlbHBlclRleHQgdGV4dD1cIk5vIFByb3BlcnRpZXMgZm91bmRcIi8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb1Byb3BlcnR5VGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsYmFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e3dpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImNhbGMoNjB2aCAtIDcwcHgpXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93S2V5PVwiaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5yb3dTZWxlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2l0ZW1zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvcGVydHlMaXN0VGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2Nyb2xsYmFycz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9