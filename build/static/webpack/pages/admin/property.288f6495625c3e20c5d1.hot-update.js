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
/* harmony import */ var _iso_containers_Tables_AntTables_AntTables_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @iso/containers/Tables/AntTables/AntTables.styles */ "./shared/containers/Tables/AntTables/AntTables.styles.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_properties_actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @redux/properties/actions */ "./redux/properties/actions.js");


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
        lineNumber: 19,
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
        lineNumber: 25,
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
        lineNumber: 31,
        columnNumber: 29
      }
    }, object.address);
  }
}];
function SimilarProperty(props) {
  _s();

  var selectedItems = props.selectedItems;
  console.log("__SimilarProperty__", selectedItems);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"])(function (state) {
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
    dispatch(_redux_properties_actions__WEBPACK_IMPORTED_MODULE_11__["default"].getAllProperties());
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
        checked: selectedItems.findIndex(function (item) {
          return item.id === record.id;
        }) > -1,
        // disabled: record.name === 'Disabled User',
        name: record.id
      };
    }
  };
  return __jsx(_iso_components_utility_layoutWrapper__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, __jsx(_iso_components_utility_pageHeader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, "Category"), __jsx(_iso_components_utility_box__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, (items === null || items === void 0 ? void 0 : items.length) === 0 ? __jsx(_iso_components_utility_helper_text__WEBPACK_IMPORTED_MODULE_5__["default"], {
    text: "No Properties found",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 21
    }
  }) : __jsx("div", {
    className: "isoPropertyTable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
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
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx(_iso_containers_Tables_AntTables_AntTables_styles__WEBPACK_IMPORTED_MODULE_9__["default"], {
    rowKey: "id",
    rowSelection: _objectSpread({
      type: 'checkbox'
    }, rowSelection),
    columns: columns,
    dataSource: items,
    className: "categoryListTable",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  })))));
}

_s(SimilarProperty, "qpeHnE+SslkS2arFeVN7aen49Tk=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_10__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_10__["useSelector"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9TaW1pbGFyUHJvcGVydHkvU2ltaWxhclByb3BlcnR5LmpzIl0sIm5hbWVzIjpbInRhYmxlQ29sdW1ucyIsInRpdGxlIiwia2V5Iiwid2lkdGgiLCJyZW5kZXIiLCJvYmplY3QiLCJpZCIsIm5hbWUiLCJhZGRyZXNzIiwiU2ltaWxhclByb3BlcnR5IiwicHJvcHMiLCJzZWxlY3RlZEl0ZW1zIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiUHJvcGVydGllcyIsIml0ZW1zIiwibG9hZGluZyIsInVzZVN0YXRlIiwiY29sdW1ucyIsImRhdGFMaXN0Iiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJwcm9wZXJ0eUFjdGlvbnMiLCJnZXRBbGxQcm9wZXJ0aWVzIiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJnZXRDaGVja2JveFByb3BzIiwicmVjb3JkIiwiY2hlY2tlZCIsImZpbmRJbmRleCIsIml0ZW0iLCJsZW5ndGgiLCJoZWlnaHQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHLENBQ2pCO0FBQ0lDLE9BQUssRUFBRSxJQURYO0FBRUlDLEtBQUcsRUFBRSxJQUZUO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLFFBQU0sRUFBRSxnQkFBQ0MsTUFBRDtBQUFBLFdBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxNQUFNLENBQUNDLEVBQVgsQ0FBWjtBQUFBO0FBSlosQ0FEaUIsRUFPakI7QUFDSUwsT0FBSyxFQUFFLE1BRFg7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a0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0VBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBQ2xDLFdBQUssRUFBRSxNQUFSO0FBQWdCbUMsWUFBTSxFQUFFO0FBQXhCLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUdJLE1BQUMseUZBQUQ7QUFDSSxVQUFNLEVBQUMsSUFEWDtBQUVJLGdCQUFZO0FBQ1JDLFVBQUksRUFBRTtBQURFLE9BRUxYLFlBRkssQ0FGaEI7QUFNSSxXQUFPLEVBQUVOLE9BTmI7QUFPSSxjQUFVLEVBQUVILEtBUGhCO0FBUUksYUFBUyxFQUFDLG1CQVJkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLENBTFIsQ0FGSixDQURKO0FBNEJIOztHQS9EdUJWLGU7VUFHSE0sd0QsRUFFUUMsd0Q7OztLQUxMUCxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2FkbWluL3Byb3BlcnR5LjI4OGY2NDk1NjI1YzNlMjBjNWQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsb25lIGZyb20gXCJjbG9uZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBCb3ggZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2JveFwiO1xyXG5pbXBvcnQgSGVscGVyVGV4dCBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvaGVscGVyLXRleHRcIjtcclxuaW1wb3J0IExheW91dFdyYXBwZXIgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2xheW91dFdyYXBwZXJcIjtcclxuaW1wb3J0IFBhZ2VIZWFkZXIgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L3BhZ2VIZWFkZXJcIjtcclxuaW1wb3J0IFNjcm9sbGJhcnMgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2N1c3RvbVNjcm9sbEJhclwiO1xyXG5pbXBvcnQgVGFibGVXcmFwcGVyIGZyb20gXCJAaXNvL2NvbnRhaW5lcnMvVGFibGVzL0FudFRhYmxlcy9BbnRUYWJsZXMuc3R5bGVzXCI7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHByb3BlcnR5QWN0aW9ucyBmcm9tIFwiQHJlZHV4L3Byb3BlcnRpZXMvYWN0aW9uc1wiO1xyXG5cclxuXHJcbmNvbnN0IHRhYmxlQ29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJJRFwiLFxyXG4gICAgICAgIGtleTogXCJpZFwiLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgcmVuZGVyOiAob2JqZWN0KSA9PiA8cD57b2JqZWN0LmlkfTwvcD4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIk5hbWVcIixcclxuICAgICAgICBrZXk6IFwibmFtZVwiLFxyXG4gICAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgICAgcmVuZGVyOiAob2JqZWN0KSA9PiA8cD57b2JqZWN0Lm5hbWV9PC9wPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQWRkcmVzc1wiLFxyXG4gICAgICAgIGtleTogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgd2lkdGg6IDIwMCxcclxuICAgICAgICByZW5kZXI6IChvYmplY3QpID0+IDxwPntvYmplY3QuYWRkcmVzc308L3A+LFxyXG4gICAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbWlsYXJQcm9wZXJ0eShwcm9wcykge1xyXG4gICAgY29uc3Qge3NlbGVjdGVkSXRlbXN9ID0gcHJvcHNcclxuICAgIGNvbnNvbGUubG9nKFwiX19TaW1pbGFyUHJvcGVydHlfX1wiLCBzZWxlY3RlZEl0ZW1zKVxyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG5cclxuICAgIGNvbnN0IHtpdGVtcywgbG9hZGluZ30gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLlByb3BlcnRpZXMpO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY29sdW1uczogdGFibGVDb2x1bW5zLFxyXG4gICAgICAgIGRhdGFMaXN0OiBpdGVtcyxcclxuICAgIH0pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHJvcGVydHlBY3Rpb25zLmdldEFsbFByb3BlcnRpZXMoKSk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBkYXRhTGlzdDogaXRlbXNcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtpdGVtc10pO1xyXG5cclxuICAgIGNvbnN0IHtjb2x1bW5zLCBkYXRhTGlzdH0gPSBzdGF0ZTtcclxuXHJcbiAgICBjb25zdCByb3dTZWxlY3Rpb24gPSB7XHJcbiAgICAgICAgb25DaGFuZ2U6IChzZWxlY3RlZFJvd0tleXMsIHNlbGVjdGVkUm93cykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgc2VsZWN0ZWRSb3dLZXlzOiAke3NlbGVjdGVkUm93S2V5c31gLCAnc2VsZWN0ZWRSb3dzOiAnLCBzZWxlY3RlZFJvd3MpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q2hlY2tib3hQcm9wczogKHJlY29yZCkgPT4gKHtcclxuICAgICAgICAgICAgY2hlY2tlZDogc2VsZWN0ZWRJdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmlkID09PSByZWNvcmQuaWQpID4gLTEsXHJcbiAgICAgICAgICAgIC8vIGRpc2FibGVkOiByZWNvcmQubmFtZSA9PT0gJ0Rpc2FibGVkIFVzZXInLFxyXG4gICAgICAgICAgICBuYW1lOiByZWNvcmQuaWQsXHJcbiAgICAgICAgfSksXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dFdyYXBwZXI+XHJcbiAgICAgICAgICAgIDxQYWdlSGVhZGVyPkNhdGVnb3J5PC9QYWdlSGVhZGVyPlxyXG4gICAgICAgICAgICA8Qm94PlxyXG5cclxuICAgICAgICAgICAgICAgIHtpdGVtcz8ubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWxwZXJUZXh0IHRleHQ9XCJObyBQcm9wZXJ0aWVzIGZvdW5kXCIvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzb1Byb3BlcnR5VGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNjcm9sbGJhcnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7d2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiY2FsYyg2MHZoIC0gNzBweClcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVdyYXBwZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dLZXk9XCJpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93U2VsZWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJvd1NlbGVjdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17aXRlbXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2F0ZWdvcnlMaXN0VGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TY3JvbGxiYXJzPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9MYXlvdXRXcmFwcGVyPlxyXG4gICAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9