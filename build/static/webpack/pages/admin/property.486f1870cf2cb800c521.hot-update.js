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

  console.log("__SimilarProperty__", selectedItems);
  var selectedItems = props.selectedItems;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9TaW1pbGFyUHJvcGVydHkvU2ltaWxhclByb3BlcnR5LmpzIl0sIm5hbWVzIjpbInRhYmxlQ29sdW1ucyIsInRpdGxlIiwia2V5Iiwid2lkdGgiLCJyZW5kZXIiLCJvYmplY3QiLCJpZCIsIm5hbWUiLCJhZGRyZXNzIiwiU2ltaWxhclByb3BlcnR5IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic2VsZWN0ZWRJdGVtcyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiUHJvcGVydGllcyIsIml0ZW1zIiwibG9hZGluZyIsInVzZVN0YXRlIiwiY29sdW1ucyIsImRhdGFMaXN0Iiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJwcm9wZXJ0eUFjdGlvbnMiLCJnZXRBbGxQcm9wZXJ0aWVzIiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJnZXRDaGVja2JveFByb3BzIiwicmVjb3JkIiwiY2hlY2tlZCIsImZpbmRJbmRleCIsIml0ZW0iLCJsZW5ndGgiLCJoZWlnaHQiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsWUFBWSxHQUFHLENBQ2pCO0FBQ0lDLE9BQUssRUFBRSxJQURYO0FBRUlDLEtBQUcsRUFBRSxJQUZUO0FBR0lDLE9BQUssRUFBRSxHQUhYO0FBSUlDLFFBQU0sRUFBRSxnQkFBQ0MsTUFBRDtBQUFBLFdBQVk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJQSxNQUFNLENBQUNDLEVBQVgsQ0FBWjtBQUFBO0FBSlosQ0FEaUIsRUFPakI7QUFDSUwsT0FBSyxFQUFFLE1BRFg7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QyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywrRUFBRDtBQUNJLFNBQUssRUFBRTtBQUFDbEMsV0FBSyxFQUFFLE1BQVI7QUFBZ0JtQyxZQUFNLEVBQUU7QUFBeEIsS0FEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBR0ksTUFBQyx5RkFBRDtBQUNJLFVBQU0sRUFBQyxJQURYO0FBRUksZ0JBQVk7QUFDUkMsVUFBSSxFQUFFO0FBREUsT0FFTFgsWUFGSyxDQUZoQjtBQU1JLFdBQU8sRUFBRU4sT0FOYjtBQU9JLGNBQVUsRUFBRUgsS0FQaEI7QUFRSSxhQUFTLEVBQUMsbUJBUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLENBREosQ0FMUixDQUZKLENBREo7QUE0Qkg7O0dBL0R1QlYsZTtVQUdITSx3RCxFQUVRQyx3RDs7O0tBTExQLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW4vcHJvcGVydHkuNDg2ZjE4NzBjZjJjYjgwMGM1MjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xvbmUgZnJvbSBcImNsb25lXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IEJveCBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvYm94XCI7XHJcbmltcG9ydCBIZWxwZXJUZXh0IGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9oZWxwZXItdGV4dFwiO1xyXG5pbXBvcnQgTGF5b3V0V3JhcHBlciBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvbGF5b3V0V3JhcHBlclwiO1xyXG5pbXBvcnQgUGFnZUhlYWRlciBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvcGFnZUhlYWRlclwiO1xyXG5pbXBvcnQgU2Nyb2xsYmFycyBmcm9tIFwiQGlzby9jb21wb25lbnRzL3V0aWxpdHkvY3VzdG9tU2Nyb2xsQmFyXCI7XHJcbmltcG9ydCBUYWJsZVdyYXBwZXIgZnJvbSBcIkBpc28vY29udGFpbmVycy9UYWJsZXMvQW50VGFibGVzL0FudFRhYmxlcy5zdHlsZXNcIjtcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgcHJvcGVydHlBY3Rpb25zIGZyb20gXCJAcmVkdXgvcHJvcGVydGllcy9hY3Rpb25zXCI7XHJcblxyXG5cclxuY29uc3QgdGFibGVDb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIklEXCIsXHJcbiAgICAgICAga2V5OiBcImlkXCIsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICByZW5kZXI6IChvYmplY3QpID0+IDxwPntvYmplY3QuaWR9PC9wPixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiTmFtZVwiLFxyXG4gICAgICAgIGtleTogXCJuYW1lXCIsXHJcbiAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICByZW5kZXI6IChvYmplY3QpID0+IDxwPntvYmplY3QubmFtZX08L3A+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJBZGRyZXNzXCIsXHJcbiAgICAgICAga2V5OiBcImFkZHJlc3NcIixcclxuICAgICAgICB3aWR0aDogMjAwLFxyXG4gICAgICAgIHJlbmRlcjogKG9iamVjdCkgPT4gPHA+e29iamVjdC5hZGRyZXNzfTwvcD4sXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2ltaWxhclByb3BlcnR5KHByb3BzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIl9fU2ltaWxhclByb3BlcnR5X19cIiwgc2VsZWN0ZWRJdGVtcylcclxuICAgIGNvbnN0IHtzZWxlY3RlZEl0ZW1zfSA9IHByb3BzXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gICAgY29uc3Qge2l0ZW1zLCBsb2FkaW5nfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuUHJvcGVydGllcyk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjb2x1bW5zOiB0YWJsZUNvbHVtbnMsXHJcbiAgICAgICAgZGF0YUxpc3Q6IGl0ZW1zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaChwcm9wZXJ0eUFjdGlvbnMuZ2V0QWxsUHJvcGVydGllcygpKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIGRhdGFMaXN0OiBpdGVtc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW2l0ZW1zXSk7XHJcblxyXG4gICAgY29uc3Qge2NvbHVtbnMsIGRhdGFMaXN0fSA9IHN0YXRlO1xyXG5cclxuICAgIGNvbnN0IHJvd1NlbGVjdGlvbiA9IHtcclxuICAgICAgICBvbkNoYW5nZTogKHNlbGVjdGVkUm93S2V5cywgc2VsZWN0ZWRSb3dzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBzZWxlY3RlZFJvd0tleXM6ICR7c2VsZWN0ZWRSb3dLZXlzfWAsICdzZWxlY3RlZFJvd3M6ICcsIHNlbGVjdGVkUm93cyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRDaGVja2JveFByb3BzOiAocmVjb3JkKSA9PiAoe1xyXG4gICAgICAgICAgICBjaGVja2VkOiBzZWxlY3RlZEl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IHJlY29yZC5pZCkgPiAtMSxcclxuICAgICAgICAgICAgLy8gZGlzYWJsZWQ6IHJlY29yZC5uYW1lID09PSAnRGlzYWJsZWQgVXNlcicsXHJcbiAgICAgICAgICAgIG5hbWU6IHJlY29yZC5pZCxcclxuICAgICAgICB9KSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0V3JhcHBlcj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXI+Q2F0ZWdvcnk8L1BhZ2VIZWFkZXI+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcblxyXG4gICAgICAgICAgICAgICAge2l0ZW1zPy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlbHBlclRleHQgdGV4dD1cIk5vIFByb3BlcnRpZXMgZm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvUHJvcGVydHlUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsYmFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJjYWxjKDYwdmggLSA3MHB4KVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0tleT1cImlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucm93U2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeUxpc3RUYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0xheW91dFdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=