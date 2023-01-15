"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index3";
exports.ids = ["pages/index3"];
exports.modules = {

/***/ "./pages/index3.js":
/*!*************************!*\
  !*** ./pages/index3.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ \"js-cookie\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);\njs_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction MiPagina() {\n    const miArrayDeObjetos = [\n        {\n            \"nombre\": \"objeto1\"\n        },\n        {\n            \"nombre\": \"objeto2\"\n        }\n    ];\n    // Convertir el arreglo a una cadena JSON\n    const arrayJson = JSON.stringify(miArrayDeObjetos);\n    // Eliminar espacios y caracteres especiales de la cadena JSON\n    // Establecer la cadena JSON en una cookie\n    js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].set(\"cookie\", arrayJson);\n    // Obtener el valor de la cookie\n    const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get(\"cookie\");\n    if (cookieValue) {\n        const parsed = JSON.parse(cookieValue);\n        console.log(parsed);\n    } else {\n        console.log(\"cookie vac\\xeda o no existe\");\n    }\n    console.log(cookieValue);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Esta es mi p\\xe1gina\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index3.js\",\n            lineNumber: 29,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index3.js\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiPagina);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleDMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQStCO0FBRS9CLFNBQVNDLFdBQVc7SUFDaEIsTUFBTUMsbUJBQW1CO1FBQUM7WUFBRSxVQUFVO1FBQVU7UUFBRztZQUFFLFVBQVU7UUFBVTtLQUFFO0lBQzNFLHlDQUF5QztJQUN6QyxNQUFNQyxZQUFZQyxLQUFLQyxTQUFTLENBQUNIO0lBQ2pDLDhEQUE4RDtJQUU5RCwwQ0FBMEM7SUFDMUNGLHFEQUFVLENBQUMsVUFBVUc7SUFFckIsZ0NBQWdDO0lBQ2hDLE1BQU1JLGNBQWNQLHFEQUFVLENBQUM7SUFDL0IsSUFBSU8sYUFBYTtRQUNiLE1BQU1FLFNBQVNMLEtBQUtNLEtBQUssQ0FBQ0g7UUFDMUJJLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDaEIsT0FBTztRQUNIRSxRQUFRQyxHQUFHLENBQUM7SUFDaEIsQ0FBQztJQUVERCxRQUFRQyxHQUFHLENBQUNMO0lBTVoscUJBQ0ksOERBQUNNO2tCQUNHLDRFQUFDQztzQkFBRzs7Ozs7Ozs7Ozs7QUFHaEI7QUFFQSxpRUFBZWIsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2luZGV4My5qcz9mMTc0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZnVuY3Rpb24gTWlQYWdpbmEoKSB7XHJcbiAgICBjb25zdCBtaUFycmF5RGVPYmpldG9zID0gW3sgXCJub21icmVcIjogXCJvYmpldG8xXCIgfSwgeyBcIm5vbWJyZVwiOiBcIm9iamV0bzJcIiB9XTtcclxuICAgIC8vIENvbnZlcnRpciBlbCBhcnJlZ2xvIGEgdW5hIGNhZGVuYSBKU09OXHJcbiAgICBjb25zdCBhcnJheUpzb24gPSBKU09OLnN0cmluZ2lmeShtaUFycmF5RGVPYmpldG9zKTtcclxuICAgIC8vIEVsaW1pbmFyIGVzcGFjaW9zIHkgY2FyYWN0ZXJlcyBlc3BlY2lhbGVzIGRlIGxhIGNhZGVuYSBKU09OXHJcblxyXG4gICAgLy8gRXN0YWJsZWNlciBsYSBjYWRlbmEgSlNPTiBlbiB1bmEgY29va2llXHJcbiAgICBjb29raWUuc2V0KFwiY29va2llXCIsIGFycmF5SnNvbik7XHJcblxyXG4gICAgLy8gT2J0ZW5lciBlbCB2YWxvciBkZSBsYSBjb29raWVcclxuICAgIGNvbnN0IGNvb2tpZVZhbHVlID0gY29va2llLmdldChcImNvb2tpZVwiKTtcclxuICAgIGlmIChjb29raWVWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoY29va2llVmFsdWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcnNlZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjb29raWUgdmFjw61hIG8gbm8gZXhpc3RlXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvb2tpZVZhbHVlKVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5Fc3RhIGVzIG1pIHDDoWdpbmE8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNaVBhZ2luYTtcclxuIl0sIm5hbWVzIjpbImNvb2tpZSIsIk1pUGFnaW5hIiwibWlBcnJheURlT2JqZXRvcyIsImFycmF5SnNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZXQiLCJjb29raWVWYWx1ZSIsImdldCIsInBhcnNlZCIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index3.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index3.js"));
module.exports = __webpack_exports__;

})();