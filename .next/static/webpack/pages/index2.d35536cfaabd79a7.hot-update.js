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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PortfolioDestacadosGrid; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PortfolioDestacadosGrid(param) {\n    let { objetos , onChangeOpenTask , onDelete , onAddSubtarea , onSubmitSubtarea  } = param;\n    _s();\n    const [descripcionSubtarea, setDescripcionSubtarea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: objetos.map((objeto, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: objeto.nombre\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: objeto.descripcion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"checkbox\",\n                        checked: objeto.openTask,\n                        onChange: ()=>onChangeOpenTask(index)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>onDelete(index),\n                        children: \"Eliminar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 22,\n                        columnNumber: 21\n                    }, this),\n                    objeto.subtareas && objeto.subtareas.map((subtarea, i)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: subtarea.descripcion\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 26,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>onDeleteSubtarea(i, index),\n                                    children: \"Eliminar\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 27,\n                                    columnNumber: 33\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                    onSubmit: (e)=>handleSubmitSubtarea(e, index, i),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: [\n                                                \"Descripcion:\",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"text\",\n                                                    value: descripcionSubtarea,\n                                                    onChange: (e)=>setDescripcionSubtarea(e.target.value)\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                                    lineNumber: 31,\n                                                    columnNumber: 41\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                            lineNumber: 29,\n                                            columnNumber: 37\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            children: \"Agregar\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 37\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 28,\n                                    columnNumber: 33\n                                }, this)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                            lineNumber: 25,\n                            columnNumber: 29\n                        }, this);\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>onSubmitSubtarea(e, index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    \"Descripcion:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: descripcionSubtarea,\n                                        onChange: (e)=>setDescripcionSubtarea(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 39,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Agregar\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 43,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, this);\n        })\n    }, void 0, false);\n}\n_s(PortfolioDestacadosGrid, \"UT6pEdxwnLFGNyh85JyePrEyqvA=\");\n_c = PortfolioDestacadosGrid;\nvar _c;\n$RefreshReg$(_c, \"PortfolioDestacadosGrid\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhcmVhcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7O0FBQWlDO0FBQ0o7QUFDSDtBQUdYLFNBQVNHLHdCQUF3QixLQUF3RSxFQUFFO1FBQTFFLEVBQUVDLFFBQU8sRUFBRUMsaUJBQWdCLEVBQUVDLFNBQVEsRUFBRUMsY0FBYSxFQUFFQyxpQkFBZ0IsRUFBRSxHQUF4RTs7SUFDNUMsTUFBTSxDQUFDQyxxQkFBcUJDLHVCQUF1QixHQUFHViwrQ0FBUUEsQ0FBQztJQUMvRCxxQkFDSTtrQkFDQ0ksUUFBUU8sR0FBRyxDQUFDLENBQUNDLFFBQVFDLFFBQVU7WUFDNUIscUJBQ0ksOERBQUNDOztrQ0FDRyw4REFBQ0M7a0NBQUlILE9BQU9JLE1BQU07Ozs7OztrQ0FDbEIsOERBQUNDO2tDQUFHTCxPQUFPTSxXQUFXOzs7Ozs7a0NBQ3RCLDhEQUFDQzt3QkFDR0MsTUFBSzt3QkFDTEMsU0FBU1QsT0FBT1UsUUFBUTt3QkFDeEJDLFVBQVUsSUFBTWxCLGlCQUFpQlE7Ozs7OztrQ0FFckMsOERBQUNXO3dCQUFPQyxTQUFTLElBQU1uQixTQUFTTztrQ0FBUTs7Ozs7O29CQUN2Q0QsT0FBT2MsU0FBUyxJQUFJZCxPQUFPYyxTQUFTLENBQUNmLEdBQUcsQ0FBQyxDQUFDZ0IsVUFBVUMsSUFBTTt3QkFDdkQscUJBQ0ksOERBQUNkOzs4Q0FDRyw4REFBQ0c7OENBQUdVLFNBQVNULFdBQVc7Ozs7Ozs4Q0FDeEIsOERBQUNNO29DQUFPQyxTQUFTLElBQU1JLGlCQUFpQkQsR0FBR2Y7OENBQVE7Ozs7Ozs4Q0FDbkQsOERBQUNpQjtvQ0FBS0MsVUFBVSxDQUFDQyxJQUFNQyxxQkFBcUJELEdBQUduQixPQUFPZTs7c0RBQ2xELDhEQUFDTTs7Z0RBQU07OERBRUgsOERBQUNmO29EQUFNQyxNQUFLO29EQUFPZSxPQUFPMUI7b0RBQXFCYyxVQUFVUyxDQUFBQSxJQUFLdEIsdUJBQXVCc0IsRUFBRUksTUFBTSxDQUFDRCxLQUFLOzs7Ozs7Ozs7Ozs7c0RBRXZHLDhEQUFDWDs0Q0FBT0osTUFBSztzREFBUzs7Ozs7Ozs7Ozs7OzsyQkFScEJROzs7OztvQkFZbEI7a0NBQ0EsOERBQUNFO3dCQUFLQyxVQUFVLENBQUNDLElBQU14QixpQkFBaUJ3QixHQUFHbkI7OzBDQUN2Qyw4REFBQ3FCOztvQ0FBTTtrREFFSCw4REFBQ2Y7d0NBQU1DLE1BQUs7d0NBQU9lLE9BQU8xQjt3Q0FBcUJjLFVBQVVTLENBQUFBLElBQUt0Qix1QkFBdUJzQixFQUFFSSxNQUFNLENBQUNELEtBQUs7Ozs7Ozs7Ozs7OzswQ0FFdkcsOERBQUNYO2dDQUFPSixNQUFLOzBDQUFTOzs7Ozs7Ozs7Ozs7O2VBN0JwQlA7Ozs7O1FBaUNsQjs7QUFHUixDQUFDO0dBMUN1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UYXJlYXMuanM/NmE0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW9EZXN0YWNhZG9zR3JpZCh7IG9iamV0b3MsIG9uQ2hhbmdlT3BlblRhc2ssIG9uRGVsZXRlLCBvbkFkZFN1YnRhcmVhLCBvblN1Ym1pdFN1YnRhcmVhIH0pIHtcclxuICAgIGNvbnN0IFtkZXNjcmlwY2lvblN1YnRhcmVhLCBzZXREZXNjcmlwY2lvblN1YnRhcmVhXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICB7b2JqZXRvcy5tYXAoKG9iamV0bywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntvYmpldG8ubm9tYnJlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e29iamV0by5kZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e29iamV0by5vcGVuVGFza31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hhbmdlT3BlblRhc2soaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZShpbmRleCl9PkVsaW1pbmFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAge29iamV0by5zdWJ0YXJlYXMgJiYgb2JqZXRvLnN1YnRhcmVhcy5tYXAoKHN1YnRhcmVhLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1YnRhcmVhLmRlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlU3VidGFyZWEoaSwgaW5kZXgpfT5FbGltaW5hcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gaGFuZGxlU3VibWl0U3VidGFyZWEoZSwgaW5kZXgsIGkpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3JpcGNpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17ZGVzY3JpcGNpb25TdWJ0YXJlYX0gb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcGNpb25TdWJ0YXJlYShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFncmVnYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXRTdWJ0YXJlYShlLCBpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwY2lvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtkZXNjcmlwY2lvblN1YnRhcmVhfSBvbkNoYW5nZT17ZSA9PiBzZXREZXNjcmlwY2lvblN1YnRhcmVhKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+QWdyZWdhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiTGluayIsIlJlYWN0IiwiUG9ydGZvbGlvRGVzdGFjYWRvc0dyaWQiLCJvYmpldG9zIiwib25DaGFuZ2VPcGVuVGFzayIsIm9uRGVsZXRlIiwib25BZGRTdWJ0YXJlYSIsIm9uU3VibWl0U3VidGFyZWEiLCJkZXNjcmlwY2lvblN1YnRhcmVhIiwic2V0RGVzY3JpcGNpb25TdWJ0YXJlYSIsIm1hcCIsIm9iamV0byIsImluZGV4IiwiZGl2IiwiaDIiLCJub21icmUiLCJwIiwiZGVzY3JpcGNpb24iLCJpbnB1dCIsInR5cGUiLCJjaGVja2VkIiwib3BlblRhc2siLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzdWJ0YXJlYXMiLCJzdWJ0YXJlYSIsImkiLCJvbkRlbGV0ZVN1YnRhcmVhIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsImhhbmRsZVN1Ym1pdFN1YnRhcmVhIiwibGFiZWwiLCJ2YWx1ZSIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Tareas.js\n"));

/***/ })

});