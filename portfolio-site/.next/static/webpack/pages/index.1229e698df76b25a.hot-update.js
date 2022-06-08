"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/profile */ \"./components/profile.tsx\");\n/* harmony import */ var _components_project_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/project_preview */ \"./components/project_preview.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar Home = function() {\n    var projectMetadataArray = [];\n    projectMetadataArray.push({\n        title: \"Data Analysis App\",\n        desc: \"Processes data in Python\",\n        linkUrl: \"/data_analysis\",\n        image: \"/coding.jpg\"\n    });\n    projectMetadataArray.push({\n        title: \"Sound Processing App\",\n        desc: \"Cleans up podcast audio\",\n        linkUrl: \"/sound_processing\",\n        image: \"/headphones.jpg\"\n    });\n    projectMetadataArray.push({\n        title: \"Social Media tracker\",\n        desc: \"Tracks time and usage\",\n        linkUrl: \"/social_tracker\",\n        image: \"/youtube.jpg\"\n    });\n    var ProjectPreviewElements = [];\n    {}\n    for(var i = 0; i < projectMetadataArray.length; i++){\n        var metaData = projectMetadataArray[i];\n        var element = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_project_preview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], _objectSpread({}, metaData, {\n            key: i,\n            __source: {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\webdev\\\\web8\\\\portfolio-site\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 19\n            },\n            __self: _this\n        }));\n        ProjectPreviewElements.push(element);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_profile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\webdev\\\\web8\\\\portfolio-site\\\\pages\\\\index.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-4 flex flex-col gap-2\",\n                children: ProjectPreviewElements\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\webdev\\\\web8\\\\portfolio-site\\\\pages\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Lenovo\\\\Desktop\\\\webdev\\\\web8\\\\portfolio-site\\\\pages\\\\index.tsx\",\n        lineNumber: 47,\n        columnNumber: 7\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQzBDO0FBRXRGLElBQU1FLElBQUksR0FBYSxXQUFNO0lBRzdCLElBQU1DLG9CQUFvQixHQUFHLEVBQUU7SUFFL0JBLG9CQUFvQixDQUFDQyxJQUFJLENBQ3ZCO1FBQ0VDLEtBQUssRUFBRSxtQkFBbUI7UUFDMUJDLElBQUksRUFBRSwwQkFBMEI7UUFDaENDLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekJDLEtBQUssRUFBQyxhQUFhO0tBQ3BCLENBQ0YsQ0FBQztJQUVGTCxvQkFBb0IsQ0FBQ0MsSUFBSSxDQUN2QjtRQUNFQyxLQUFLLEVBQUUsc0JBQXNCO1FBQzdCQyxJQUFJLEVBQUUseUJBQXlCO1FBQy9CQyxPQUFPLEVBQUUsbUJBQW1CO1FBQzVCQyxLQUFLLEVBQUMsaUJBQWlCO0tBQ3hCLENBQ0YsQ0FBQztJQUNGTCxvQkFBb0IsQ0FBQ0MsSUFBSSxDQUN2QjtRQUNFQyxLQUFLLEVBQUUsc0JBQXNCO1FBQzdCQyxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCQyxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCQyxLQUFLLEVBQUMsY0FBYztLQUNyQixDQUNGLENBQUM7SUFFRixJQUFNQyxzQkFBc0IsR0FBRyxFQUFFO0lBQ2pDLEVBQWtEO0lBRWxELElBQUksSUFBSUMsQ0FBQyxHQUFDLENBQUMsRUFBQ0EsQ0FBQyxHQUFHUCxvQkFBb0IsQ0FBQ1EsTUFBTSxFQUFDRCxDQUFDLEVBQUUsQ0FBRTtRQUMvQyxJQUFNRSxRQUFRLEdBQUdULG9CQUFvQixDQUFDTyxDQUFDLENBQUM7UUFDeEMsSUFBTUcsT0FBTyxpQkFBRyxxREFBQ1osbUVBQWMsb0JBQUtXLFFBQVE7WUFBRUUsR0FBRyxFQUFFSixDQUFDOzs7Ozs7O1dBQUk7UUFDeERELHNCQUFzQixDQUFDTCxJQUFJLENBQUNTLE9BQU8sQ0FBQyxDQUFDO0tBRXRDO0lBRUMscUJBQ0ksOERBQUNFLEtBQUc7OzBCQUNGLDhEQUFDZiwyREFBTzs7OztxQkFBRTswQkFDViw4REFBQ2UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjswQkFDdENQLHNCQUFzQjs7Ozs7cUJBQ25COzs7Ozs7YUFDRixDQUNUO0NBQ0Y7QUFqREtQLEtBQUFBLElBQUk7QUFtRFYsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgUHJvZmlsZSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2ZpbGUnO1xuaW1wb3J0IFByb2plY3RQcmV2aWV3LCB7UHJvamVjdFByZXZpZXdJbnRlcmZhY2V9IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdF9wcmV2aWV3JztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cblxuY29uc3QgcHJvamVjdE1ldGFkYXRhQXJyYXkgPSBbXTtcblxucHJvamVjdE1ldGFkYXRhQXJyYXkucHVzaChcbiAge1xuICAgIHRpdGxlOiBcIkRhdGEgQW5hbHlzaXMgQXBwXCIsXG4gICAgZGVzYzogXCJQcm9jZXNzZXMgZGF0YSBpbiBQeXRob25cIixcbiAgICBsaW5rVXJsOiBcIi9kYXRhX2FuYWx5c2lzXCIsXG4gICAgaW1hZ2U6XCIvY29kaW5nLmpwZ1wiXG4gIH1cbik7XG5cbnByb2plY3RNZXRhZGF0YUFycmF5LnB1c2goXG4gIHtcbiAgICB0aXRsZTogXCJTb3VuZCBQcm9jZXNzaW5nIEFwcFwiLFxuICAgIGRlc2M6IFwiQ2xlYW5zIHVwIHBvZGNhc3QgYXVkaW9cIixcbiAgICBsaW5rVXJsOiBcIi9zb3VuZF9wcm9jZXNzaW5nXCIsXG4gICAgaW1hZ2U6XCIvaGVhZHBob25lcy5qcGdcIlxuICB9XG4pO1xucHJvamVjdE1ldGFkYXRhQXJyYXkucHVzaChcbiAge1xuICAgIHRpdGxlOiBcIlNvY2lhbCBNZWRpYSB0cmFja2VyXCIsXG4gICAgZGVzYzogXCJUcmFja3MgdGltZSBhbmQgdXNhZ2VcIixcbiAgICBsaW5rVXJsOiBcIi9zb2NpYWxfdHJhY2tlclwiLFxuICAgIGltYWdlOlwiL3lvdXR1YmUuanBnXCJcbiAgfVxuKTtcblxuY29uc3QgUHJvamVjdFByZXZpZXdFbGVtZW50cyA9IFtdO1xuey8qIDxQcm9qZWN0UHJldmlldyB7Li4uUHJvamVjdFByZXZpZXdEYXRhfSAvPiAqL31cblxuZm9yKGxldCBpPTA7aSA8IHByb2plY3RNZXRhZGF0YUFycmF5Lmxlbmd0aDtpKyspIHtcbiAgY29uc3QgbWV0YURhdGEgPSBwcm9qZWN0TWV0YWRhdGFBcnJheVtpXTtcbiAgY29uc3QgZWxlbWVudCA9IDxQcm9qZWN0UHJldmlldyB7Li4ubWV0YURhdGF9IGtleT17aX0gLz47XG4gIFByb2plY3RQcmV2aWV3RWxlbWVudHMucHVzaChlbGVtZW50KTtcblxufVxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8UHJvZmlsZS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC00IGZsZXggZmxleC1jb2wgZ2FwLTInPlxuICAgICAgICAgIHtQcm9qZWN0UHJldmlld0VsZW1lbnRzfSBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiUHJvZmlsZSIsIlByb2plY3RQcmV2aWV3IiwiSG9tZSIsInByb2plY3RNZXRhZGF0YUFycmF5IiwicHVzaCIsInRpdGxlIiwiZGVzYyIsImxpbmtVcmwiLCJpbWFnZSIsIlByb2plY3RQcmV2aWV3RWxlbWVudHMiLCJpIiwibGVuZ3RoIiwibWV0YURhdGEiLCJlbGVtZW50Iiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});