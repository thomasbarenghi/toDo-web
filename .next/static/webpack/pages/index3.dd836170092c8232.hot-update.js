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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\n\nfunction MiPagina() {\n    const miArrayDeObjetos = {\n        data: [\n            {\n                \"nombre\": \"objeto1\"\n            },\n            {\n                \"nombre\": \"objeto2\"\n            }\n        ]\n    };\n    // Convertir el arreglo a una cadena JSON\n    const arrayJson = JSON.stringify(miArrayDeObjetos);\n    // Eliminar espacios y caracteres especiales de la cadena JSON\n    const noSpacesString = arrayJson.replace(/[\\s\\t\\n]/g, \"\");\n    // Establecer la cadena JSON en una cookie\n    js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"cookie\", noSpacesString);\n    // Obtener el valor de la cookie\n    const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"cookie\");\n    // parsear el valor de la cookie a un objeto JSON\n    console.log(cookieValue);\n    data(cookieValue);\n    function data(data) {\n        const parsed = JSON.parse(data);\n        console.log(parsed);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Esta es mi p\\xe1gina\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index3.js\",\n            lineNumber: 32,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index3.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_c = MiPagina;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MiPagina);\nvar _c;\n$RefreshReg$(_c, \"MiPagina\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleDMuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQStCO0FBRS9CLFNBQVNDLFdBQVc7SUFDaEIsTUFBTUMsbUJBQW1CO1FBQUNDLE1BQUs7WUFBQztnQkFBQyxVQUFTO1lBQVM7WUFBRTtnQkFBQyxVQUFTO1lBQVM7U0FBRTtJQUFBO0lBQzFFLHlDQUF5QztJQUN6QyxNQUFNQyxZQUFZQyxLQUFLQyxTQUFTLENBQUNKO0lBQ2pDLDhEQUE4RDtJQUM5RCxNQUFNSyxpQkFBaUJILFVBQVVJLE9BQU8sQ0FBQyxhQUFhO0lBQ3RELDBDQUEwQztJQUMxQ1IscURBQVUsQ0FBQyxVQUFVTztJQUVyQixnQ0FBZ0M7SUFDaEMsTUFBTUcsY0FBY1YscURBQVUsQ0FBQztJQUMvQixpREFBaUQ7SUFDakRZLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDaEJQLEtBQUtPO0lBRUwsU0FBU1AsS0FBTUEsSUFBSSxFQUFFO1FBRWpCLE1BQU1XLFNBQVVULEtBQUtVLEtBQUssQ0FBQ1o7UUFHM0JTLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDaEI7SUFNSSxxQkFDSSw4REFBQ0U7a0JBQ0csNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7OztBQUdoQjtLQWhDU2hCO0FBa0NULCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4My5qcz9mMTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZnVuY3Rpb24gTWlQYWdpbmEoKSB7XHJcbiAgICBjb25zdCBtaUFycmF5RGVPYmpldG9zID0ge2RhdGE6W3tcIm5vbWJyZVwiOlwib2JqZXRvMVwifSx7XCJub21icmVcIjpcIm9iamV0bzJcIn1dfTtcclxuICAgIC8vIENvbnZlcnRpciBlbCBhcnJlZ2xvIGEgdW5hIGNhZGVuYSBKU09OXHJcbiAgICBjb25zdCBhcnJheUpzb24gPSBKU09OLnN0cmluZ2lmeShtaUFycmF5RGVPYmpldG9zKTtcclxuICAgIC8vIEVsaW1pbmFyIGVzcGFjaW9zIHkgY2FyYWN0ZXJlcyBlc3BlY2lhbGVzIGRlIGxhIGNhZGVuYSBKU09OXHJcbiAgICBjb25zdCBub1NwYWNlc1N0cmluZyA9IGFycmF5SnNvbi5yZXBsYWNlKC9bXFxzXFx0XFxuXS9nLCAnJyk7XHJcbiAgICAvLyBFc3RhYmxlY2VyIGxhIGNhZGVuYSBKU09OIGVuIHVuYSBjb29raWVcclxuICAgIGNvb2tpZS5zZXQoXCJjb29raWVcIiwgbm9TcGFjZXNTdHJpbmcpO1xyXG5cclxuICAgIC8vIE9idGVuZXIgZWwgdmFsb3IgZGUgbGEgY29va2llXHJcbiAgICBjb25zdCBjb29raWVWYWx1ZSA9IGNvb2tpZS5nZXQoXCJjb29raWVcIik7XHJcbiAgICAvLyBwYXJzZWFyIGVsIHZhbG9yIGRlIGxhIGNvb2tpZSBhIHVuIG9iamV0byBKU09OXHJcbiAgICBjb25zb2xlLmxvZyhjb29raWVWYWx1ZSlcclxuZGF0YShjb29raWVWYWx1ZSk7XHJcblxyXG5mdW5jdGlvbiBkYXRhIChkYXRhKSB7XHJcbiAgICBcclxuICAgIGNvbnN0IHBhcnNlZCA9ICBKU09OLnBhcnNlKGRhdGEpO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhwYXJzZWQpXHJcbn1cclxuXHJcblxyXG4gIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5Fc3RhIGVzIG1pIHDDoWdpbmE8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaVBhZ2luYTtcclxuIl0sIm5hbWVzIjpbImNvb2tpZSIsIk1pUGFnaW5hIiwibWlBcnJheURlT2JqZXRvcyIsImRhdGEiLCJhcnJheUpzb24iLCJKU09OIiwic3RyaW5naWZ5Iiwibm9TcGFjZXNTdHJpbmciLCJyZXBsYWNlIiwic2V0IiwiY29va2llVmFsdWUiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwicGFyc2VkIiwicGFyc2UiLCJkaXYiLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index3.js\n"));

/***/ })

});