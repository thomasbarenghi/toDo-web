"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/modales1",{

/***/ "./pages/modales1.js":
/*!***************************!*\
  !*** ./pages/modales1.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-click-outside */ \"./node_modules/react-click-outside/dist/index.js\");\n/* harmony import */ var react_click_outside__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_click_outside__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction MyComponent() {\n    _s();\n    const [isModalOpen, setIsModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleButtonClick = ()=>{\n        console.log(isModalOpen);\n        setIsModalOpen(true);\n        console.log(isModalOpen);\n    };\n    react_click_outside__WEBPACK_IMPORTED_MODULE_2___default()(modalRef, ()=>{\n        setIsModalOpen(false);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"boton\",\n                onClick: handleButtonClick,\n                children: \"Abrir ventana modal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\modales1.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            isModalOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                ref: modalRef,\n                className: \"modal\",\n                style: {\n                    width: \"100px\",\n                    height: \"100px\",\n                    position: \"fixed\",\n                    top: 0,\n                    right: 0\n                },\n                children: \"Contenido de la ventana modal\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\modales1.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(MyComponent, \"4E7FpTMCdI3Ii92eHtIh4ZgQ38Y=\", false, function() {\n    return [\n        (react_click_outside__WEBPACK_IMPORTED_MODULE_2___default())\n    ];\n});\n_c = MyComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyComponent);\nvar _c;\n$RefreshReg$(_c, \"MyComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb2RhbGVzMS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWdEO0FBQ0U7QUFFbEQsU0FBU0ksY0FBYzs7SUFDckIsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDcEQsTUFBTU0sV0FBV0wsNkNBQU1BLENBQUMsSUFBSTtJQUU1QixNQUFNTSxvQkFBb0IsSUFBTTtRQUM5QkMsUUFBUUMsR0FBRyxDQUFDTDtRQUNaQyxlQUFlLElBQUk7UUFDbkJHLFFBQVFDLEdBQUcsQ0FBQ0w7SUFDZDtJQUVBRiwwREFBZUEsQ0FBQ0ksVUFBVSxJQUFNO1FBQzlCRCxlQUFlLEtBQUs7SUFDdEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNLO2dCQUFPQyxJQUFHO2dCQUFRQyxTQUFTTDswQkFBbUI7Ozs7OztZQUc5Q0gsNkJBQ0MsOERBQUNTO2dCQUFJQyxLQUFLUjtnQkFBVVMsV0FBVTtnQkFBUUMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsUUFBUTtvQkFBU0MsVUFBVTtvQkFBU0MsS0FBSztvQkFBR0MsT0FBTztnQkFBQzswQkFBSTs7Ozs7Ozs7QUFNL0g7R0ExQlNsQjs7UUFVUEQsNERBQWVBOzs7S0FWUkM7QUE0QlQsK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbW9kYWxlczEuanM/ZjM1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHVzZUNsaWNrT3V0c2lkZSBmcm9tICdyZWFjdC1jbGljay1vdXRzaWRlJztcclxuXHJcbmZ1bmN0aW9uIE15Q29tcG9uZW50KCkge1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0SXNNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVCdXR0b25DbGljayA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlzTW9kYWxPcGVuKVxyXG4gICAgc2V0SXNNb2RhbE9wZW4odHJ1ZSk7XHJcbiAgICBjb25zb2xlLmxvZyhpc01vZGFsT3BlbilcclxuICB9O1xyXG5cclxuICB1c2VDbGlja091dHNpZGUobW9kYWxSZWYsICgpID0+IHtcclxuICAgIHNldElzTW9kYWxPcGVuKGZhbHNlKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJib3RvblwiIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfT5cclxuICAgICAgICBBYnJpciB2ZW50YW5hIG1vZGFsXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICB7aXNNb2RhbE9wZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgcmVmPXttb2RhbFJlZn0gY2xhc3NOYW1lPVwibW9kYWxcIiBzdHlsZT17eyB3aWR0aDogJzEwMHB4JywgaGVpZ2h0OiAnMTAwcHgnLCBwb3NpdGlvbjogJ2ZpeGVkJywgdG9wOiAwLCByaWdodDogMH19ID5cclxuICAgICAgICAgIENvbnRlbmlkbyBkZSBsYSB2ZW50YW5hIG1vZGFsXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUNvbXBvbmVudDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VDbGlja091dHNpZGUiLCJNeUNvbXBvbmVudCIsImlzTW9kYWxPcGVuIiwic2V0SXNNb2RhbE9wZW4iLCJtb2RhbFJlZiIsImhhbmRsZUJ1dHRvbkNsaWNrIiwiY29uc29sZSIsImxvZyIsImJ1dHRvbiIsImlkIiwib25DbGljayIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/modales1.js\n"));

/***/ })

});