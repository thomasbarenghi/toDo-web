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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PortfolioDestacadosGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction PortfolioDestacadosGrid(param) {\n    let { objetos , onChangeOpenTask , onDelete , onAddSubtarea , onSubmitSubtarea  } = param;\n    _s();\n    const [descripcionSubtarea, setDescripcionSubtarea] = useState(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: objetos.map((objeto, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Nombre: \",\n                                objeto.nombre\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                            lineNumber: 18,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Descripcion: \",\n                                objeto.descripcion\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: [\n                                \"Open Task:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"checkbox\",\n                                    name: \"openTask-\".concat(index),\n                                    checked: objeto.openTask,\n                                    onChange: ()=>onChangeOpenTask(index)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 22,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                            lineNumber: 20,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>onDelete(index),\n                            children: \"Delete\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                            lineNumber: 30,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>handleAddSubtarea(index),\n                            children: \"Agregar subtarea\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                            lineNumber: 32,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: (e)=>onSubmitSubtarea(e, index),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: descripcionSubtarea,\n                                    onChange: (e)=>setDescripcionSubtarea(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: \"Agregar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                            lineNumber: 33,\n                            columnNumber: 25\n                        }, this),\n                        objeto.subtareas.map((subtarea, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: subtarea.descripcion\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 37\n                                }, this)\n                            }, i, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 39,\n                                columnNumber: 33\n                            }, this))\n                    ]\n                }, index, true, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                    lineNumber: 17,\n                    columnNumber: 21\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n_s(PortfolioDestacadosGrid, \"UT6pEdxwnLFGNyh85JyePrEyqvA=\");\n_c = PortfolioDestacadosGrid;\nvar _c;\n$RefreshReg$(_c, \"PortfolioDestacadosGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhcmVhcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBR0E7O0FBQTZCO0FBQ0g7QUFHWCxTQUFTRSx3QkFBd0IsS0FBd0UsRUFBRTtRQUExRSxFQUFFQyxRQUFPLEVBQUVDLGlCQUFnQixFQUFFQyxTQUFRLEVBQUVDLGNBQWEsRUFBRUMsaUJBQWdCLEVBQUUsR0FBeEU7O0lBQzVDLE1BQU0sQ0FBQ0MscUJBQXFCQyx1QkFBdUIsR0FBR0MsU0FBUztJQUMvRCxxQkFDSTtrQkFJSSw0RUFBQ0M7c0JBQ0lSLFFBQVFTLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDbEIsOERBQUNIOztzQ0FDRyw4REFBQ0k7O2dDQUFFO2dDQUFTRixPQUFPRyxNQUFNOzs7Ozs7O3NDQUN6Qiw4REFBQ0Q7O2dDQUFFO2dDQUFjRixPQUFPSSxXQUFXOzs7Ozs7O3NDQUNuQyw4REFBQ0M7O2dDQUFNOzhDQUVILDhEQUFDQztvQ0FDR0MsTUFBSztvQ0FDTEMsTUFBTSxZQUFrQixPQUFOUDtvQ0FDbEJRLFNBQVNULE9BQU9VLFFBQVE7b0NBQ3hCQyxVQUFVLElBQU1wQixpQkFBaUJVOzs7Ozs7Ozs7Ozs7c0NBSXpDLDhEQUFDVzs0QkFBT0MsU0FBUyxJQUFNckIsU0FBU1M7c0NBQVE7Ozs7OztzQ0FFeEMsOERBQUNXOzRCQUFPQyxTQUFTLElBQU1DLGtCQUFrQmI7c0NBQVE7Ozs7OztzQ0FDakQsOERBQUNjOzRCQUFLQyxVQUFVLENBQUNDLElBQU12QixpQkFBaUJ1QixHQUFHaEI7OzhDQUN2Qyw4REFBQ0s7b0NBQU1DLE1BQUs7b0NBQU9XLE9BQU92QjtvQ0FBcUJnQixVQUFVTSxDQUFBQSxJQUFLckIsdUJBQXVCcUIsRUFBRUUsTUFBTSxDQUFDRCxLQUFLOzs7Ozs7OENBQ25HLDhEQUFDTjtvQ0FBT0wsTUFBSzs4Q0FBUzs7Ozs7Ozs7Ozs7O3dCQUd0QlAsT0FBT29CLFNBQVMsQ0FBQ3JCLEdBQUcsQ0FBQyxDQUFDc0IsVUFBVUMsa0JBQzVCLDhEQUFDeEI7MENBQ0csNEVBQUNJOzhDQUFHbUIsU0FBU2pCLFdBQVc7Ozs7OzsrQkFEbEJrQjs7Ozs7O21CQXRCWnJCOzs7Ozs7Ozs7OztBQWtDOUIsQ0FBQztHQTNDdUJaO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFyZWFzLmpzPzZhNDkiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9ydGZvbGlvRGVzdGFjYWRvc0dyaWQoeyBvYmpldG9zLCBvbkNoYW5nZU9wZW5UYXNrLCBvbkRlbGV0ZSwgb25BZGRTdWJ0YXJlYSwgb25TdWJtaXRTdWJ0YXJlYSB9KSB7XHJcbiAgICBjb25zdCBbZGVzY3JpcGNpb25TdWJ0YXJlYSwgc2V0RGVzY3JpcGNpb25TdWJ0YXJlYV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7b2JqZXRvcy5tYXAoKG9iamV0bywgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Ob21icmU6IHtvYmpldG8ubm9tYnJlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVzY3JpcGNpb246IHtvYmpldG8uZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcGVuIFRhc2s6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9e2BvcGVuVGFzay0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17b2JqZXRvLm9wZW5UYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoYW5nZU9wZW5UYXNrKGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGluZGV4KX0+RGVsZXRlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZFN1YnRhcmVhKGluZGV4KX0+QWdyZWdhciBzdWJ0YXJlYTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0U3VidGFyZWEoZSwgaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtkZXNjcmlwY2lvblN1YnRhcmVhfSBvbkNoYW5nZT17ZSA9PiBzZXREZXNjcmlwY2lvblN1YnRhcmVhKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFncmVnYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpldG8uc3VidGFyZWFzLm1hcCgoc3VidGFyZWEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJ0YXJlYS5kZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJSZWFjdCIsIlBvcnRmb2xpb0Rlc3RhY2Fkb3NHcmlkIiwib2JqZXRvcyIsIm9uQ2hhbmdlT3BlblRhc2siLCJvbkRlbGV0ZSIsIm9uQWRkU3VidGFyZWEiLCJvblN1Ym1pdFN1YnRhcmVhIiwiZGVzY3JpcGNpb25TdWJ0YXJlYSIsInNldERlc2NyaXBjaW9uU3VidGFyZWEiLCJ1c2VTdGF0ZSIsImRpdiIsIm1hcCIsIm9iamV0byIsImluZGV4IiwicCIsIm5vbWJyZSIsImRlc2NyaXBjaW9uIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiY2hlY2tlZCIsIm9wZW5UYXNrIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiaGFuZGxlQWRkU3VidGFyZWEiLCJmb3JtIiwib25TdWJtaXQiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJzdWJ0YXJlYXMiLCJzdWJ0YXJlYSIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tareas.js\n"));

/***/ })

});