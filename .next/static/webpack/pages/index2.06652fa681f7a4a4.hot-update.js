"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index2",{

/***/ "./components/Tareas.js":
/*!******************************!*\
  !*** ./components/Tareas.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Tareas(param) {\n    let { objetos , onChangeOpenTask , onDelete , handleAddAndSubmitSubtarea , descripcionSubtarea  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        children: objetos.map((objeto, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: objeto.nombre\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 9,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: objeto.descripcion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 10,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>onChangeOpenTask(index),\n                        children: objeto.openTask ? \"Cerrar tarea\" : \"Abrir tarea\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 11,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>onDelete(index),\n                        children: \"Eliminar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 14,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>handleAddAndSubmitSubtarea(e, index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    \"Descripcion subtarea:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"descripcion\",\n                                        value: descripcionSubtarea,\n                                        onChange: (e)=>setDescripcionSubtarea(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                        lineNumber: 18,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 16,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Agregar subtarea\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 20,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 15,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        children: objeto.subtareas && objeto.subtareas.map((subtarea, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: subtarea.descripcion\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                        lineNumber: 25,\n                                        columnNumber: 37\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteSubtarea(index, i),\n                                        children: \"Eliminar subtarea\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                        lineNumber: 26,\n                                        columnNumber: 37\n                                    }, this)\n                                ]\n                            }, i, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 24,\n                                columnNumber: 33\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 22,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, objeto.nombre, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                lineNumber: 8,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this);\n}\n_c = Tareas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tareas);\nvar _c;\n$RefreshReg$(_c, \"Tareas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhcmVhcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQTBCO0FBRTFCLFNBQVNDLE9BQU8sS0FBd0YsRUFBRTtRQUExRixFQUFFQyxRQUFPLEVBQUVDLGlCQUFnQixFQUFFQyxTQUFRLEVBQUVDLDJCQUEwQixFQUFFQyxvQkFBbUIsRUFBRSxHQUF4RjtJQUNaLHFCQUNJLDhEQUFDQztrQkFDSUwsUUFBUU0sR0FBRyxDQUFDLENBQUNDLFFBQVFDLFFBQVU7WUFDNUIscUJBQ0ksOERBQUNDOztrQ0FDRyw4REFBQ0M7a0NBQUlILE9BQU9JLE1BQU07Ozs7OztrQ0FDbEIsOERBQUNDO2tDQUFHTCxPQUFPTSxXQUFXOzs7Ozs7a0NBQ3RCLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNZCxpQkFBaUJPO2tDQUNuQ0QsT0FBT1MsUUFBUSxHQUFHLGlCQUFpQixhQUFhOzs7Ozs7a0NBRXJELDhEQUFDRjt3QkFBT0MsU0FBUyxJQUFNYixTQUFTTTtrQ0FBUTs7Ozs7O2tDQUN4Qyw4REFBQ1M7d0JBQUtDLFVBQVUsQ0FBQ0MsSUFBTWhCLDJCQUEyQmdCLEdBQUdYOzswQ0FDakQsOERBQUNZOztvQ0FBTTtrREFFSCw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQU9DLE1BQUs7d0NBQWNDLE9BQU9wQjt3Q0FBcUJxQixVQUFVTixDQUFBQSxJQUFLTyx1QkFBdUJQLEVBQUVRLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUUxSCw4REFBQ1Y7Z0NBQU9RLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7OztrQ0FFMUIsOERBQUNqQjtrQ0FDSUUsT0FBT3FCLFNBQVMsSUFBSXJCLE9BQU9xQixTQUFTLENBQUN0QixHQUFHLENBQUMsQ0FBQ3VCLFVBQVVDLGtCQUNqRCw4REFBQ3JCOztrREFDRyw4REFBQ0c7a0RBQUdpQixTQUFTaEIsV0FBVzs7Ozs7O2tEQUN4Qiw4REFBQ0M7d0NBQU9DLFNBQVMsSUFBTWdCLHFCQUFxQnZCLE9BQU9zQjtrREFBSTs7Ozs7OzsrQkFGbERBOzs7Ozs7Ozs7OztlQWhCWnZCLE9BQU9JLE1BQU07Ozs7O1FBd0I5Qjs7Ozs7O0FBR1o7S0FoQ1NaO0FBa0NULCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFyZWFzLmpzPzZhNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIFRhcmVhcyh7IG9iamV0b3MsIG9uQ2hhbmdlT3BlblRhc2ssIG9uRGVsZXRlLCBoYW5kbGVBZGRBbmRTdWJtaXRTdWJ0YXJlYSwgZGVzY3JpcGNpb25TdWJ0YXJlYSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAge29iamV0b3MubWFwKChvYmpldG8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e29iamV0by5ub21icmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+e29iamV0by5ub21icmV9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e29iamV0by5kZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DaGFuZ2VPcGVuVGFzayhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29iamV0by5vcGVuVGFzayA/ICdDZXJyYXIgdGFyZWEnIDogJ0FicmlyIHRhcmVhJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25EZWxldGUoaW5kZXgpfT5FbGltaW5hcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZUFkZEFuZFN1Ym1pdFN1YnRhcmVhKGUsIGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcGNpb24gc3VidGFyZWE6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXBjaW9uXCIgdmFsdWU9e2Rlc2NyaXBjaW9uU3VidGFyZWF9IG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXBjaW9uU3VidGFyZWEoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFncmVnYXIgc3VidGFyZWE8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b2JqZXRvLnN1YnRhcmVhcyAmJiBvYmpldG8uc3VidGFyZWFzLm1hcCgoc3VidGFyZWEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1YnRhcmVhLmRlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVTdWJ0YXJlYShpbmRleCwgaSl9PkVsaW1pbmFyIHN1YnRhcmVhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXJlYXM7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRhcmVhcyIsIm9iamV0b3MiLCJvbkNoYW5nZU9wZW5UYXNrIiwib25EZWxldGUiLCJoYW5kbGVBZGRBbmRTdWJtaXRTdWJ0YXJlYSIsImRlc2NyaXBjaW9uU3VidGFyZWEiLCJ1bCIsIm1hcCIsIm9iamV0byIsImluZGV4IiwibGkiLCJoMiIsIm5vbWJyZSIsInAiLCJkZXNjcmlwY2lvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJvcGVuVGFzayIsImZvcm0iLCJvblN1Ym1pdCIsImUiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwic2V0RGVzY3JpcGNpb25TdWJ0YXJlYSIsInRhcmdldCIsInN1YnRhcmVhcyIsInN1YnRhcmVhIiwiaSIsImhhbmRsZURlbGV0ZVN1YnRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Tareas.js\n"));

/***/ })

});