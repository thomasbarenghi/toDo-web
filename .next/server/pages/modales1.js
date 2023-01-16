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
exports.id = "pages/modales1";
exports.ids = ["pages/modales1"];
exports.modules = {

/***/ "./pages/modales1.js":
/*!***************************!*\
  !*** ./pages/modales1.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction MyComponent() {\n    const [ismodalPersonalizadoOpen, setIsmodalPersonalizadoOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkIfClickedOutside = (e)=>{\n            // If the modalPersonalizado is open and the clicked target is not within the modalPersonalizado,\n            // then close the modalPersonalizado\n            if (ismodalPersonalizadoOpen && !e.target.classList.contains(\"modalPersonalizado\")) {\n                setIsmodalPersonalizadoOpen(false);\n            }\n        };\n        document.addEventListener(\"mousedown\", checkIfClickedOutside);\n        return ()=>{\n            // Cleanup the event listener\n            document.removeEventListener(\"mousedown\", checkIfClickedOutside);\n        };\n    }, [\n        ismodalPersonalizadoOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                id: \"boton\",\n                className: \"button\",\n                onClick: ()=>setIsmodalPersonalizadoOpen(true),\n                children: \"Abrir ventana modalPersonalizado\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\modales1.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            ismodalPersonalizadoOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"modalPersonalizado\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Contenido de la ventana modalPersonalizado\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\modales1.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\modales1.js\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"estoy fuera del componente\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\modales1.js\",\n                    lineNumber: 33,\n                    columnNumber: 12\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\modales1.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\modales1.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyComponent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb2RhbGVzMS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTJDO0FBRTNDLFNBQVNFLGNBQWM7SUFDckIsTUFBTSxDQUFDQywwQkFBMEJDLDRCQUE0QixHQUFHSCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTlFRCxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTUssd0JBQXdCQyxDQUFBQSxJQUFLO1lBQ2pDLGlHQUFpRztZQUNqRyxvQ0FBb0M7WUFDcEMsSUFBSUgsNEJBQTRCLENBQUNHLEVBQUVDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDQyxRQUFRLENBQUMsdUJBQXVCO2dCQUNsRkwsNEJBQTRCLEtBQUs7WUFDbkMsQ0FBQztRQUNIO1FBRUFNLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFOO1FBRXZDLE9BQU8sSUFBTTtZQUNYLDZCQUE2QjtZQUM3QkssU0FBU0UsbUJBQW1CLENBQUMsYUFBYVA7UUFDNUM7SUFDRixHQUFHO1FBQUNGO0tBQXlCO0lBRTdCLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQU9DLElBQUc7Z0JBQVFGLFdBQVU7Z0JBQVNHLFNBQVMsSUFBTWIsNEJBQTRCLElBQUk7MEJBQUc7Ozs7OztZQUd2RkQsMENBQ0MsOERBQUNVO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDSTs4QkFBRzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNMOzBCQUFJLDRFQUFDSzs4QkFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHZjtBQUVBLGlFQUFlaEIsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL21vZGFsZXMxLmpzP2YzNWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5mdW5jdGlvbiBNeUNvbXBvbmVudCgpIHtcclxuICBjb25zdCBbaXNtb2RhbFBlcnNvbmFsaXphZG9PcGVuLCBzZXRJc21vZGFsUGVyc29uYWxpemFkb09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBjaGVja0lmQ2xpY2tlZE91dHNpZGUgPSBlID0+IHtcclxuICAgICAgLy8gSWYgdGhlIG1vZGFsUGVyc29uYWxpemFkbyBpcyBvcGVuIGFuZCB0aGUgY2xpY2tlZCB0YXJnZXQgaXMgbm90IHdpdGhpbiB0aGUgbW9kYWxQZXJzb25hbGl6YWRvLFxyXG4gICAgICAvLyB0aGVuIGNsb3NlIHRoZSBtb2RhbFBlcnNvbmFsaXphZG9cclxuICAgICAgaWYgKGlzbW9kYWxQZXJzb25hbGl6YWRvT3BlbiAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtb2RhbFBlcnNvbmFsaXphZG8nKSkge1xyXG4gICAgICAgIHNldElzbW9kYWxQZXJzb25hbGl6YWRvT3BlbihmYWxzZSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2hlY2tJZkNsaWNrZWRPdXRzaWRlKVxyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIENsZWFudXAgdGhlIGV2ZW50IGxpc3RlbmVyXHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2hlY2tJZkNsaWNrZWRPdXRzaWRlKVxyXG4gICAgfVxyXG4gIH0sIFtpc21vZGFsUGVyc29uYWxpemFkb09wZW5dKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJib3RvblwiIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IHNldElzbW9kYWxQZXJzb25hbGl6YWRvT3Blbih0cnVlKX0+XHJcbiAgICAgICAgQWJyaXIgdmVudGFuYSBtb2RhbFBlcnNvbmFsaXphZG9cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHtpc21vZGFsUGVyc29uYWxpemFkb09wZW4gJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxQZXJzb25hbGl6YWRvXCI+XHJcbiAgICAgICAgICA8aDE+Q29udGVuaWRvIGRlIGxhIHZlbnRhbmEgbW9kYWxQZXJzb25hbGl6YWRvPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgICAgPGRpdj48aDE+ZXN0b3kgZnVlcmEgZGVsIGNvbXBvbmVudGU8L2gxPjwvZGl2PiAgXHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15Q29tcG9uZW50XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk15Q29tcG9uZW50IiwiaXNtb2RhbFBlcnNvbmFsaXphZG9PcGVuIiwic2V0SXNtb2RhbFBlcnNvbmFsaXphZG9PcGVuIiwiY2hlY2tJZkNsaWNrZWRPdXRzaWRlIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImlkIiwib25DbGljayIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/modales1.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/modales1.js"));
module.exports = __webpack_exports__;

})();