"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index4",{

/***/ "./components/CrearTarea.js":
/*!**********************************!*\
  !*** ./components/CrearTarea.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction CrearTarea(param) {\n    let { onSubmit  } = param;\n    _s();\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        console.log(\"Nombre:\", nombre, \"Descripci\\xf3n:\", descripcion);\n        setNombre(\"\");\n        setDescripcion(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"flex-row justify-content-center align-items-center fixedBox\",\n        id: \"box-crearTarea\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"d-flex flex-column\",\n            style: {\n                background: \"#fff\",\n                padding: 40,\n                borderRadius: 20,\n                gap: 24\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"titulo3\",\n                        children: \"Creemos una tarea \\uD83E\\uDD2F\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n                        lineNumber: 26,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: onSubmit,\n                    className: \"d-flex flex-column align-items-start\",\n                    style: {\n                        gap: 16\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex\",\n                            style: {\n                                gap: 8\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control inputStyle\",\n                                    type: \"text\",\n                                    placeholder: \"Ingresa el t\\xedtulo\",\n                                    value: nombre,\n                                    onChange: (e)=>setNombre(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: \"form-control inputStyle\",\n                                    type: \"text\",\n                                    placeholder: \"Ingresa la descripci\\xf3n\",\n                                    value: descripcion,\n                                    onChange: (e)=>setDescripcion(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex\",\n                            style: {\n                                gap: 8\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary btn1\",\n                                    id: \"crearTareaBtn\",\n                                    type: \"submit\",\n                                    children: \"Crear tarea\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"btn btn-primary btn2\",\n                                    id: \"cerrar-crearTarea\",\n                                    type: \"button\",\n                                    children: \"Cancelar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n                            lineNumber: 43,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n            lineNumber: 21,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\CrearTarea.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(CrearTarea, \"mvSZUFPYLn0ZoDtcQ3XZW/S6h84=\");\n_c = CrearTarea;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CrearTarea);\nvar _c;\n$RefreshReg$(_c, \"CrearTarea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NyZWFyVGFyZWEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBdUM7QUFFdkMsU0FBU0UsV0FBVyxLQUFVLEVBQUU7UUFBWixFQUFDQyxTQUFRLEVBQUMsR0FBVjs7SUFDaEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdKLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ssYUFBYUMsZUFBZSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNTyxlQUFlLENBQUNDLElBQU07UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQyxXQUFXUixRQUFRLG1CQUFnQkU7UUFDL0NELFVBQVU7UUFDVkUsZUFBZTtJQUNuQjtJQUVBLHFCQUdJLDhEQUFDTTtRQUNHQyxXQUFVO1FBQ1ZDLElBQUc7a0JBRUgsNEVBQUNDO1lBQ0dGLFdBQVU7WUFDVkcsT0FBTztnQkFBRUMsWUFBWTtnQkFBUUMsU0FBUztnQkFBSUMsY0FBYztnQkFBSUMsS0FBSztZQUFHOzs4QkFFcEUsOERBQUNMOzhCQUNHLDRFQUFDTTt3QkFBR1IsV0FBVTtrQ0FBVTs7Ozs7Ozs7Ozs7OEJBRTVCLDhEQUFDUztvQkFBS3BCLFVBQVVBO29CQUFVVyxXQUFVO29CQUF1Q0csT0FBTzt3QkFBRUksS0FBSztvQkFBRzs7c0NBQ3hGLDhEQUFDTDs0QkFBSUYsV0FBVTs0QkFBU0csT0FBTztnQ0FBRUksS0FBSzs0QkFBRTs7OENBQ3BDLDhEQUFDRztvQ0FDR1YsV0FBVTtvQ0FDVlcsTUFBSztvQ0FDTEMsYUFBWTtvQ0FDWkMsT0FBT3ZCO29DQUFRd0IsVUFBVW5CLENBQUFBLElBQUtKLFVBQVVJLEVBQUVvQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs4Q0FFMUQsOERBQUNIO29DQUNHVixXQUFVO29DQUNWVyxNQUFLO29DQUNMQyxhQUFZO29DQUNaQyxPQUFPckI7b0NBQWFzQixVQUFVbkIsQ0FBQUEsSUFBS0YsZUFBZUUsRUFBRW9CLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7O3NDQUd4RSw4REFBQ1g7NEJBQUlGLFdBQVU7NEJBQVNHLE9BQU87Z0NBQUVJLEtBQUs7NEJBQUU7OzhDQUNwQyw4REFBQ1M7b0NBQ0doQixXQUFVO29DQUNWQyxJQUFHO29DQUNIVSxNQUFLOzhDQUNSOzs7Ozs7OENBR0QsOERBQUNLO29DQUNHaEIsV0FBVTtvQ0FDVkMsSUFBRztvQ0FDSFUsTUFBSzs4Q0FDUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXekI7R0EvRFN2QjtLQUFBQTtBQWlFVCwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NyZWFyVGFyZWEuanM/OTY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmZ1bmN0aW9uIENyZWFyVGFyZWEoe29uU3VibWl0fSkge1xyXG4gICAgY29uc3QgW25vbWJyZSwgc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwY2lvbiwgc2V0RGVzY3JpcGNpb25dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm9tYnJlOlwiLCBub21icmUsIFwiRGVzY3JpcGNpw7NuOlwiLCBkZXNjcmlwY2lvbik7XHJcbiAgICAgICAgc2V0Tm9tYnJlKCcnKTtcclxuICAgICAgICBzZXREZXNjcmlwY2lvbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcblxyXG4gICAgICAgIDxzZWN0aW9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtcm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIGZpeGVkQm94XCJcclxuICAgICAgICAgICAgaWQ9XCJib3gtY3JlYXJUYXJlYVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZmZmXCIsIHBhZGRpbmc6IDQwLCBib3JkZXJSYWRpdXM6IDIwLCBnYXA6IDI0IH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdHVsbzNcIj5DcmVlbW9zIHVuYSB0YXJlYSDwn6SvPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIiBzdHlsZT17eyBnYXA6IDE2IH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCIgc3R5bGU9e3sgZ2FwOiA4IH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBpbnB1dFN0eWxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiSW5ncmVzYSBlbCB0w610dWxvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtub21icmV9IG9uQ2hhbmdlPXtlID0+IHNldE5vbWJyZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGlucHV0U3R5bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbmdyZXNhIGxhIGRlc2NyaXBjacOzblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcGNpb259IG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXBjaW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiIHN0eWxlPXt7IGdhcDogOCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bjFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjcmVhclRhcmVhQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDcmVhciB0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bjJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjZXJyYXItY3JlYXJUYXJlYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuXHJcblxyXG5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlYXJUYXJlYVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNyZWFyVGFyZWEiLCJvblN1Ym1pdCIsIm5vbWJyZSIsInNldE5vbWJyZSIsImRlc2NyaXBjaW9uIiwic2V0RGVzY3JpcGNpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImlkIiwiZGl2Iiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImdhcCIsImgxIiwiZm9ybSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CrearTarea.js\n"));

/***/ })

});