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
        disabled: selectedItems.findIndex(function (item) {
          return item === record.id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BZG1pbi9Qcm9wZXJ0eS9TaW1pbGFyUHJvcGVydHkvU2ltaWxhclByb3BlcnR5LmpzIl0sIm5hbWVzIjpbInRhYmxlQ29sdW1ucyIsInRpdGxlIiwia2V5Iiwid2lkdGgiLCJyZW5kZXIiLCJvYmplY3QiLCJpZCIsIm5hbWUiLCJhZGRyZXNzIiwiU2ltaWxhclByb3BlcnR5IiwicHJvcHMiLCJzZWxlY3RlZEl0ZW1zIiwiY29uc29sZSIsImxvZyIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiUHJvcGVydGllcyIsIml0ZW1zIiwibG9hZGluZyIsInVzZVN0YXRlIiwiY29sdW1ucyIsImRhdGFMaXN0Iiwic2V0U3RhdGUiLCJ1c2VFZmZlY3QiLCJwcm9wZXJ0eUFjdGlvbnMiLCJnZXRBbGxQcm9wZXJ0aWVzIiwicm93U2VsZWN0aW9uIiwib25DaGFuZ2UiLCJzZWxlY3RlZFJvd0tleXMiLCJzZWxlY3RlZFJvd3MiLCJnZXRDaGVja2JveFByb3BzIiwicmVjb3JkIiwiZGlzYWJsZWQiLCJmaW5kSW5kZXgiLCJpdGVtIiwibGVuZ3RoIiwiaGVpZ2h0IiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLElBQU1BLFlBQVksR0FBRyxDQUNqQjtBQUNJQyxPQUFLLEVBQUUsSUFEWDtBQUVJQyxLQUFHLEVBQUUsSUFGVDtBQUdJQyxPQUFLLEVBQUUsR0FIWDtBQUlJQyxRQUFNLEVBQUUsZ0JBQUNDLE1BQUQ7QUFBQSxXQUFZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUEsTUFBTSxDQUFDQyxFQUFYLENBQVo7QUFBQTtBQUpaLENBRGlCLEVBT2pCO0FBQ0lMLE9BQUssRUFBRSxNQURY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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLCtFQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUNsQyxXQUFLLEVBQUUsTUFBUjtBQUFnQm1DLFlBQU0sRUFBRTtBQUF4QixLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSSxNQUFDLHlGQUFEO0FBQ0ksVUFBTSxFQUFDLElBRFg7QUFFSSxnQkFBWTtBQUNSQyxVQUFJLEVBQUU7QUFERSxPQUVMWCxZQUZLLENBRmhCO0FBTUksV0FBTyxFQUFFTixPQU5iO0FBT0ksY0FBVSxFQUFFSCxLQVBoQjtBQVFJLGFBQVMsRUFBQyxtQkFSZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixDQUxSLENBRkosQ0FESjtBQTRCSDs7R0EvRHVCVixlO1VBR0hNLHdELEVBRVFDLHdEOzs7S0FMTFAsZSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9hZG1pbi9wcm9wZXJ0eS40NWMyNzMwZmQxYjVhMDQ2YzZjNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbG9uZSBmcm9tIFwiY2xvbmVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgQm94IGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9ib3hcIjtcclxuaW1wb3J0IEhlbHBlclRleHQgZnJvbSBcIkBpc28vY29tcG9uZW50cy91dGlsaXR5L2hlbHBlci10ZXh0XCI7XHJcbmltcG9ydCBMYXlvdXRXcmFwcGVyIGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9sYXlvdXRXcmFwcGVyXCI7XHJcbmltcG9ydCBQYWdlSGVhZGVyIGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9wYWdlSGVhZGVyXCI7XHJcbmltcG9ydCBTY3JvbGxiYXJzIGZyb20gXCJAaXNvL2NvbXBvbmVudHMvdXRpbGl0eS9jdXN0b21TY3JvbGxCYXJcIjtcclxuaW1wb3J0IFRhYmxlV3JhcHBlciBmcm9tIFwiQGlzby9jb250YWluZXJzL1RhYmxlcy9BbnRUYWJsZXMvQW50VGFibGVzLnN0eWxlc1wiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBwcm9wZXJ0eUFjdGlvbnMgZnJvbSBcIkByZWR1eC9wcm9wZXJ0aWVzL2FjdGlvbnNcIjtcclxuXHJcblxyXG5jb25zdCB0YWJsZUNvbHVtbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiSURcIixcclxuICAgICAgICBrZXk6IFwiaWRcIixcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHJlbmRlcjogKG9iamVjdCkgPT4gPHA+e29iamVjdC5pZH08L3A+LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJOYW1lXCIsXHJcbiAgICAgICAga2V5OiBcIm5hbWVcIixcclxuICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIHJlbmRlcjogKG9iamVjdCkgPT4gPHA+e29iamVjdC5uYW1lfTwvcD4sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkFkZHJlc3NcIixcclxuICAgICAgICBrZXk6IFwiYWRkcmVzc1wiLFxyXG4gICAgICAgIHdpZHRoOiAyMDAsXHJcbiAgICAgICAgcmVuZGVyOiAob2JqZWN0KSA9PiA8cD57b2JqZWN0LmFkZHJlc3N9PC9wPixcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaW1pbGFyUHJvcGVydHkocHJvcHMpIHtcclxuICAgIGNvbnN0IHtzZWxlY3RlZEl0ZW1zfSA9IHByb3BzXHJcbiAgICBjb25zb2xlLmxvZyhcIl9fU2ltaWxhclByb3BlcnR5X19cIiwgc2VsZWN0ZWRJdGVtcylcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCB7aXRlbXMsIGxvYWRpbmd9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5Qcm9wZXJ0aWVzKTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNvbHVtbnM6IHRhYmxlQ29sdW1ucyxcclxuICAgICAgICBkYXRhTGlzdDogaXRlbXMsXHJcbiAgICB9KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHByb3BlcnR5QWN0aW9ucy5nZXRBbGxQcm9wZXJ0aWVzKCkpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgZGF0YUxpc3Q6IGl0ZW1zXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCBbaXRlbXNdKTtcclxuXHJcbiAgICBjb25zdCB7Y29sdW1ucywgZGF0YUxpc3R9ID0gc3RhdGU7XHJcblxyXG4gICAgY29uc3Qgcm93U2VsZWN0aW9uID0ge1xyXG4gICAgICAgIG9uQ2hhbmdlOiAoc2VsZWN0ZWRSb3dLZXlzLCBzZWxlY3RlZFJvd3MpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYHNlbGVjdGVkUm93S2V5czogJHtzZWxlY3RlZFJvd0tleXN9YCwgJ3NlbGVjdGVkUm93czogJywgc2VsZWN0ZWRSb3dzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldENoZWNrYm94UHJvcHM6IChyZWNvcmQpID0+ICh7XHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBzZWxlY3RlZEl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHJlY29yZC5pZCkgPiAtMSxcclxuICAgICAgICAgICAgLy8gZGlzYWJsZWQ6IHJlY29yZC5uYW1lID09PSAnRGlzYWJsZWQgVXNlcicsXHJcbiAgICAgICAgICAgIG5hbWU6IHJlY29yZC5pZCxcclxuICAgICAgICB9KSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0V3JhcHBlcj5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkZXI+Q2F0ZWdvcnk8L1BhZ2VIZWFkZXI+XHJcbiAgICAgICAgICAgIDxCb3g+XHJcblxyXG4gICAgICAgICAgICAgICAge2l0ZW1zPy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlbHBlclRleHQgdGV4dD1cIk5vIFByb3BlcnRpZXMgZm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNvUHJvcGVydHlUYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2Nyb2xsYmFyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3t3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJjYWxjKDYwdmggLSA3MHB4KVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlV3JhcHBlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0tleT1cImlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dTZWxlY3Rpb249e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2NoZWNrYm94JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucm93U2VsZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtpdGVtc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXRlZ29yeUxpc3RUYWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Njcm9sbGJhcnM+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0xheW91dFdyYXBwZXI+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=