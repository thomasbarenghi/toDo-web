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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PortfolioDestacadosGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PortfolioDestacadosGrid(param) {\n    let { objetos , onChangeOpenTask , onDelete , onAddSubtarea , onSubmitSubtarea  } = param;\n    _s();\n    const [descripcionSubtarea, setDescripcionSubtarea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: objetos.map((objeto, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: objeto.nombre\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 15,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: objeto.descripcion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 16,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        checked: objeto.openTask,\n                        onChange: ()=>onChangeOpenTask(index)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 17,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>onDelete(index),\n                        children: \"Eliminar Todo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 22,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>onSubmitSubtarea(e, index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    \"Descripcion:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: descripcionSubtarea,\n                                        onChange: (e)=>setDescripcionSubtarea(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                        lineNumber: 29,\n                                        columnNumber: 33\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 27,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Agregar Subtarea\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 31,\n                                columnNumber: 29\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, this),\n                    objeto.subtareas && objeto.subtareas.map((subtarea, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: subtarea.descripcion\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>onDeleteSubtarea(i, index),\n                                    children: \"Eliminar subtarea\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 37\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: (e)=>handleSubmitSubtarea(e, index, i),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: [\n                                                \"Descripcion:\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    value: descripcionSubtarea,\n                                                    onChange: (e)=>setDescripcionSubtarea(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                                    lineNumber: 45,\n                                                    columnNumber: 45\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 41\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            children: \"Agregar Sub\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 41\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 37\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                            lineNumber: 38,\n                            columnNumber: 33\n                        }, this);\n                    })\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                lineNumber: 14,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(PortfolioDestacadosGrid, \"UT6pEdxwnLFGNyh85JyePrEyqvA=\");\n_c = PortfolioDestacadosGrid;\nvar _c;\n$RefreshReg$(_c, \"PortfolioDestacadosGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhcmVhcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7O0FBQWlDO0FBQ0o7QUFDSDtBQUdYLFNBQVNHLHdCQUF3QixLQUF3RSxFQUFFO1FBQTFFLEVBQUVDLFFBQU8sRUFBRUMsaUJBQWdCLEVBQUVDLFNBQVEsRUFBRUMsY0FBYSxFQUFFQyxpQkFBZ0IsRUFBRSxHQUF4RTs7SUFDNUMsTUFBTSxDQUFDQyxxQkFBcUJDLHVCQUF1QixHQUFHViwrQ0FBUUEsQ0FBQztJQUMvRCxxQkFDSTtrQkFDS0ksUUFBUU8sR0FBRyxDQUFDLENBQUNDLFFBQVFDLFFBQVU7WUFDNUIscUJBQ0ksOERBQUNDOztrQ0FDRyw4REFBQ0M7a0NBQUlILE9BQU9JLE1BQU07Ozs7OztrQ0FDbEIsOERBQUNDO2tDQUFHTCxPQUFPTSxXQUFXOzs7Ozs7a0NBQ3RCLDhEQUFDQzt3QkFDR0MsTUFBSzt3QkFDTEMsU0FBU1QsT0FBT1UsUUFBUTt3QkFDeEJDLFVBQVUsSUFBTWxCLGlCQUFpQlE7Ozs7OztrQ0FFckMsOERBQUNXO3dCQUFPQyxTQUFTLElBQU1uQixTQUFTTztrQ0FBUTs7Ozs7O2tDQUl4Qyw4REFBQ2E7d0JBQUtDLFVBQVUsQ0FBQ0MsSUFBTXBCLGlCQUFpQm9CLEdBQUdmOzswQ0FDdkMsOERBQUNnQjs7b0NBQU07a0RBRUgsOERBQUNWO3dDQUFNQyxNQUFLO3dDQUFPVSxPQUFPckI7d0NBQXFCYyxVQUFVSyxDQUFBQSxJQUFLbEIsdUJBQXVCa0IsRUFBRUcsTUFBTSxDQUFDRCxLQUFLOzs7Ozs7Ozs7Ozs7MENBRXZHLDhEQUFDTjtnQ0FBT0osTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7O29CQUt6QlIsT0FBT29CLFNBQVMsSUFBSXBCLE9BQU9vQixTQUFTLENBQUNyQixHQUFHLENBQUMsQ0FBQ3NCLFVBQVVDLElBQU07d0JBQ3ZELHFCQUNJLDhEQUFDcEI7OzhDQUNHLDhEQUFDRzs4Q0FBR2dCLFNBQVNmLFdBQVc7Ozs7Ozs4Q0FDeEIsOERBQUNNO29DQUFPQyxTQUFTLElBQU1VLGlCQUFpQkQsR0FBR3JCOzhDQUFROzs7Ozs7OENBRW5ELDhEQUFDYTtvQ0FBS0MsVUFBVSxDQUFDQyxJQUFNUSxxQkFBcUJSLEdBQUdmLE9BQU9xQjs7c0RBQ2xELDhEQUFDTDs7Z0RBQU07OERBRUgsOERBQUNWO29EQUFNQyxNQUFLO29EQUFPVSxPQUFPckI7b0RBQXFCYyxVQUFVSyxDQUFBQSxJQUFLbEIsdUJBQXVCa0IsRUFBRUcsTUFBTSxDQUFDRCxLQUFLOzs7Ozs7Ozs7Ozs7c0RBRXZHLDhEQUFDTjs0Q0FBT0osTUFBSztzREFBUzs7Ozs7Ozs7Ozs7OzsyQkFUcEJjOzs7OztvQkFjbEI7O2VBdENNckI7Ozs7O1FBeUNsQjs7QUFHWixDQUFDO0dBbER1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXJlYXMuanM/NmE0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW9EZXN0YWNhZG9zR3JpZCh7IG9iamV0b3MsIG9uQ2hhbmdlT3BlblRhc2ssIG9uRGVsZXRlLCBvbkFkZFN1YnRhcmVhLCBvblN1Ym1pdFN1YnRhcmVhIH0pIHtcclxuICAgIGNvbnN0IFtkZXNjcmlwY2lvblN1YnRhcmVhLCBzZXREZXNjcmlwY2lvblN1YnRhcmVhXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge29iamV0b3MubWFwKChvYmpldG8sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57b2JqZXRvLm5vbWJyZX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57b2JqZXRvLmRlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17b2JqZXRvLm9wZW5UYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlT3BlblRhc2soaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGluZGV4KX0+RWxpbWluYXIgVG9kbzwvYnV0dG9uPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0U3VidGFyZWEoZSwgaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwY2lvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZGVzY3JpcGNpb25TdWJ0YXJlYX0gb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcGNpb25TdWJ0YXJlYShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWdyZWdhciBTdWJ0YXJlYTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvYmpldG8uc3VidGFyZWFzICYmIG9iamV0by5zdWJ0YXJlYXMubWFwKChzdWJ0YXJlYSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzdWJ0YXJlYS5kZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25EZWxldGVTdWJ0YXJlYShpLCBpbmRleCl9PkVsaW1pbmFyIHN1YnRhcmVhPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZVN1Ym1pdFN1YnRhcmVhKGUsIGluZGV4LCBpKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcGNpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Rlc2NyaXBjaW9uU3VidGFyZWF9IG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXBjaW9uU3VidGFyZWEoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFncmVnYXIgU3ViPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIlJlYWN0IiwiUG9ydGZvbGlvRGVzdGFjYWRvc0dyaWQiLCJvYmpldG9zIiwib25DaGFuZ2VPcGVuVGFzayIsIm9uRGVsZXRlIiwib25BZGRTdWJ0YXJlYSIsIm9uU3VibWl0U3VidGFyZWEiLCJkZXNjcmlwY2lvblN1YnRhcmVhIiwic2V0RGVzY3JpcGNpb25TdWJ0YXJlYSIsIm1hcCIsIm9iamV0byIsImluZGV4IiwiZGl2IiwiaDIiLCJub21icmUiLCJwIiwiZGVzY3JpcGNpb24iLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib3BlblRhc2siLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb3JtIiwib25TdWJtaXQiLCJlIiwibGFiZWwiLCJ2YWx1ZSIsInRhcmdldCIsInN1YnRhcmVhcyIsInN1YnRhcmVhIiwiaSIsIm9uRGVsZXRlU3VidGFyZWEiLCJoYW5kbGVTdWJtaXRTdWJ0YXJlYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tareas.js\n"));

/***/ })

});