"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index3",{

/***/ "./pages/index3.js":
/*!*************************!*\
  !*** ./pages/index3.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-cookies */ \"./node_modules/next-cookies/index.js\");\n/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-cutter */ \"./node_modules/cookie-cutter/index.js\");\n/* harmony import */ var cookie_cutter__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_cutter__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\n\n\n\nfunction MiPagina() {\n    const miArrayDeObjetos = [\n        {\n            nombre: \"objeto1\"\n        },\n        {\n            nombre: \"objeto2\"\n        }\n    ];\n    const arrayJson = JSON.stringify(miArrayDeObjetos);\n    js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].set(\"cookie\", arrayJson);\n    console.log(js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"cookie\"));\n    var jsonToArr = js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"cookie\");\n    console.log(\"hola\", typeof jsonToArr);\n    const postArrayJson = JSON.parse('{\"name\":\"John\", \"age\":30, \"city\":\"New York\"}');\n    console.log(postArrayJson);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Esta es mi p\\xe1gina\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index3.js\",\n            lineNumber: 19,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index3.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_c = MiPagina;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiPagina);\nvar _c;\n$RefreshReg$(_c, \"MiPagina\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleDMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQXNDO0FBQ0w7QUFDTztBQUNWO0FBQzlCLFNBQVNJLFdBQVc7SUFFaEIsTUFBTUMsbUJBQW1CO1FBQUM7WUFBQ0MsUUFBUTtRQUFTO1FBQUU7WUFBQ0EsUUFBUTtRQUFTO0tBQUU7SUFDbEUsTUFBTUMsWUFBWUMsS0FBS0MsU0FBUyxDQUFDSjtJQUVqQ0YscURBQVUsQ0FBQyxVQUFVSTtJQUNyQkksUUFBUUMsR0FBRyxDQUFDVCxxREFBVSxDQUFDO0lBQ3hCLElBQUlXLFlBQVlYLHFEQUFVLENBQUM7SUFDM0JRLFFBQVFDLEdBQUcsQ0FBQyxRQUFPLE9BQU9FO0lBQ3pCLE1BQU1DLGdCQUFnQlAsS0FBS1EsS0FBSyxDQUFDO0lBQ2pDTCxRQUFRQyxHQUFHLENBQUNHO0lBRVoscUJBQ0ksOERBQUNFO2tCQUNHLDRFQUFDQztzQkFBRzs7Ozs7Ozs7Ozs7QUFHaEI7S0FqQlNkO0FBcUJULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4My5qcz9mMTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXh0Q29va2llcyBmcm9tIFwibmV4dC1jb29raWVzXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBjb29raWVDdXR0ZXIgZnJvbSAnY29va2llLWN1dHRlcidcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCJcclxuZnVuY3Rpb24gTWlQYWdpbmEoKSB7XHJcblxyXG4gICAgY29uc3QgbWlBcnJheURlT2JqZXRvcyA9IFt7bm9tYnJlOiBcIm9iamV0bzFcIn0se25vbWJyZTogXCJvYmpldG8yXCJ9XTtcclxuICAgIGNvbnN0IGFycmF5SnNvbiA9IEpTT04uc3RyaW5naWZ5KG1pQXJyYXlEZU9iamV0b3MpO1xyXG4gICAgXHJcbiAgICBjb29raWUuc2V0KCdjb29raWUnLCBhcnJheUpzb24pO1xyXG4gICAgY29uc29sZS5sb2coY29va2llLmdldChcImNvb2tpZVwiKSk7XHJcbiAgIHZhciBqc29uVG9BcnIgPSBjb29raWUuZ2V0KFwiY29va2llXCIpXHJcbiAgIGNvbnNvbGUubG9nKFwiaG9sYVwiLHR5cGVvZiBqc29uVG9BcnIpXHJcbiAgICBjb25zdCBwb3N0QXJyYXlKc29uID0gSlNPTi5wYXJzZSgne1wibmFtZVwiOlwiSm9oblwiLCBcImFnZVwiOjMwLCBcImNpdHlcIjpcIk5ldyBZb3JrXCJ9Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhwb3N0QXJyYXlKc29uKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkVzdGEgZXMgbWkgcMOhZ2luYTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWlQYWdpbmFcclxuIl0sIm5hbWVzIjpbIm5leHRDb29raWVzIiwidXNlRWZmZWN0IiwiY29va2llQ3V0dGVyIiwiY29va2llIiwiTWlQYWdpbmEiLCJtaUFycmF5RGVPYmpldG9zIiwibm9tYnJlIiwiYXJyYXlKc29uIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJqc29uVG9BcnIiLCJwb3N0QXJyYXlKc29uIiwicGFyc2UiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index3.js\n"));

/***/ })

});