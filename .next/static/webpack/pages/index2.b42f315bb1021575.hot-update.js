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

/***/ "./pages/index2.js":
/*!*************************!*\
  !*** ./pages/index2.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Tareas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tareas */ \"./components/Tareas.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { arrayObjetosProp  } = param;\n    _s();\n    const [arrayObjetos, setArrayObjetos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(arrayObjetosProp);\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const nuevoObjeto = {\n            nombre,\n            descripcion,\n            openTask: true\n        };\n        setArrayObjetos([\n            ...arrayObjetos,\n            nuevoObjeto\n        ]);\n        setNombre(\"\");\n        setDescripcion(\"\");\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"arrayObjetos\", arrayObjetos);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"arrayObjetos\", arrayObjetos);\n    }, [\n        arrayObjetos\n    ]);\n    const handleChangeOpenTask = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos[index].openTask = !newArrayObjetos[index].openTask;\n        setArrayObjetos(newArrayObjetos);\n    };\n    const handleDelete = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos.splice(index, 1);\n        setArrayObjetos(newArrayObjetos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Todo app\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            onSubmit: handleSubmit,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Nombre:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: nombre,\n                                                            onChange: (e)=>setNombre(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 62,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Descripcion:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: descripcion,\n                                                            onChange: (e)=>setDescripcion(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 66,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 64,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"Agregar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 68,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"containerComponentes\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tareas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    objetos: arrayObjetos,\n                                    onChangeOpenTask: handleChangeOpenTask,\n                                    onDelete: handleDelete\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 75,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                    lineNumber: 52,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"GGhAUk+vD74S9SUaQOuL6s+atjc=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleDIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBQ0U7QUFDRztBQUNRO0FBQ1A7QUFDRjs7QUFFakIsU0FBU00sS0FBSyxLQUFrQixFQUFFO1FBQXBCLEVBQUNDLGlCQUFnQixFQUFDLEdBQWxCOztJQUV6QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHUCwrQ0FBUUEsQ0FBQ0s7SUFLakQsTUFBTSxDQUFDRyxRQUFRQyxVQUFVLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUUvQyxNQUFNWSxlQUFlLENBQUNDLElBQU07UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsY0FBYztZQUFFUDtZQUFRRTtZQUFhTSxVQUFVLElBQUk7UUFBQztRQUMxRFQsZ0JBQWdCO2VBQUlEO1lBQWNTO1NBQVk7UUFDOUNOLFVBQVU7UUFDVkUsZUFBZTtRQUNmUixxREFBVyxDQUFDLGdCQUFnQkc7SUFDaEM7SUFFQUosZ0RBQVNBLENBQUMsSUFBTTtRQUNaQyxxREFBVyxDQUFDLGdCQUFnQkc7SUFDaEMsR0FBRztRQUFDQTtLQUFhO0lBRWpCLE1BQU1ZLHVCQUF1QixDQUFDQyxRQUFVO1FBQ3BDLE1BQU1DLGtCQUFrQjtlQUFJZDtTQUFhO1FBQ3pDYyxlQUFlLENBQUNELE1BQU0sQ0FBQ0gsUUFBUSxHQUFHLENBQUNJLGVBQWUsQ0FBQ0QsTUFBTSxDQUFDSCxRQUFRO1FBQ2xFVCxnQkFBZ0JhO0lBQ3BCO0lBRUEsTUFBTUMsZUFBZSxDQUFDRixRQUFVO1FBQzVCLE1BQU1DLGtCQUFrQjtlQUFJZDtTQUFhO1FBQ3pDYyxnQkFBZ0JFLE1BQU0sQ0FBQ0gsT0FBTztRQUM5QlosZ0JBQWdCYTtJQUNwQjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ3RCLGtEQUFJQTs7a0NBQ0QsOERBQUN5QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDQzswQkFDRyw0RUFBQ0M7OEJBQ0csNEVBQUNDOzswQ0FDRyw4REFBQ0E7O2tEQUNHLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDRDtrREFHRyw0RUFBQ0U7NENBQUtDLFVBQVV2Qjs7OERBQ1osOERBQUN3Qjs7d0RBQU07c0VBRUgsOERBQUNDOzREQUFNQyxNQUFLOzREQUFPQyxPQUFPL0I7NERBQVFnQyxVQUFVM0IsQ0FBQUEsSUFBS0osVUFBVUksRUFBRTRCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhEQUU3RSw4REFBQ0g7O3dEQUFNO3NFQUVILDhEQUFDQzs0REFBTUMsTUFBSzs0REFBT0MsT0FBTzdCOzREQUFhOEIsVUFBVTNCLENBQUFBLElBQUtGLGVBQWVFLEVBQUU0QixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4REFFdkYsOERBQUNHO29EQUFPSixNQUFLOzhEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FPbEMsOERBQUNOO2dDQUFJVyxJQUFHOzBDQUlKLDRFQUFDMUMsMERBQU1BO29DQUFDMkMsU0FBU3RDO29DQUFjdUMsa0JBQWtCM0I7b0NBQXNCNEIsVUFBVXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3RyxDQUFDO0dBaEZ1QmpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4Mi5qcz8xMjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFyZWFzIGZyb20gXCIuLi9jb21wb25lbnRzL1RhcmVhc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoe2FycmF5T2JqZXRvc1Byb3B9KSB7XHJcblxyXG4gICAgY29uc3QgW2FycmF5T2JqZXRvcywgc2V0QXJyYXlPYmpldG9zXSA9IHVzZVN0YXRlKGFycmF5T2JqZXRvc1Byb3ApO1xyXG5cclxuIFxyXG5cclxuXHJcbiAgICBjb25zdCBbbm9tYnJlLCBzZXROb21icmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXBjaW9uLCBzZXREZXNjcmlwY2lvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbnVldm9PYmpldG8gPSB7IG5vbWJyZSwgZGVzY3JpcGNpb24sIG9wZW5UYXNrOiB0cnVlIH07XHJcbiAgICAgICAgc2V0QXJyYXlPYmpldG9zKFsuLi5hcnJheU9iamV0b3MsIG51ZXZvT2JqZXRvXSk7XHJcbiAgICAgICAgc2V0Tm9tYnJlKCcnKTtcclxuICAgICAgICBzZXREZXNjcmlwY2lvbignJyk7XHJcbiAgICAgICAgQ29va2llcy5zZXQoJ2FycmF5T2JqZXRvcycsIGFycmF5T2JqZXRvcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBDb29raWVzLnNldCgnYXJyYXlPYmpldG9zJywgYXJyYXlPYmpldG9zKTtcclxuICAgIH0sIFthcnJheU9iamV0b3NdKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcGVuVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5T2JqZXRvcyA9IFsuLi5hcnJheU9iamV0b3NdO1xyXG4gICAgICAgIG5ld0FycmF5T2JqZXRvc1tpbmRleF0ub3BlblRhc2sgPSAhbmV3QXJyYXlPYmpldG9zW2luZGV4XS5vcGVuVGFzaztcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdBcnJheU9iamV0b3MgPSBbLi4uYXJyYXlPYmpldG9zXTtcclxuICAgICAgICBuZXdBcnJheU9iamV0b3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ub2RvIGFwcDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtub21icmV9IG9uQ2hhbmdlPXtlID0+IHNldE5vbWJyZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXBjaW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Rlc2NyaXBjaW9ufSBvbkNoYW5nZT17ZSA9PiBzZXREZXNjcmlwY2lvbihlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFncmVnYXI8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJDb21wb25lbnRlc1wiPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhcmVhcyBvYmpldG9zPXthcnJheU9iamV0b3N9IG9uQ2hhbmdlT3BlblRhc2s9e2hhbmRsZUNoYW5nZU9wZW5UYXNrfSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgICBjb25zdCBjb29raWVWYWx1ZSA9IENvb2tpZXMuZ2V0KFwiYXJyYXlPYmpldG9zXCIpO1xyXG4gICAgaWYgKCFjb29raWVWYWx1ZSkge1xyXG4gICAgcmV0dXJuIHsgcHJvcHM6IHsgYXJyYXlPYmpldG9zUHJvcDogW10gfSB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBwcm9wczogeyBhcnJheU9iamV0b3NQcm9wOiBKU09OLnBhcnNlKGNvb2tpZVZhbHVlKSB9IH1cclxuICAgIH1cclxuXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlRhcmVhcyIsInVzZUVmZmVjdCIsIkNvb2tpZXMiLCJIb21lIiwiYXJyYXlPYmpldG9zUHJvcCIsImFycmF5T2JqZXRvcyIsInNldEFycmF5T2JqZXRvcyIsIm5vbWJyZSIsInNldE5vbWJyZSIsImRlc2NyaXBjaW9uIiwic2V0RGVzY3JpcGNpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJudWV2b09iamV0byIsIm9wZW5UYXNrIiwic2V0IiwiaGFuZGxlQ2hhbmdlT3BlblRhc2siLCJpbmRleCIsIm5ld0FycmF5T2JqZXRvcyIsImhhbmRsZURlbGV0ZSIsInNwbGljZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwic2VjdGlvbiIsImRpdiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiaWQiLCJvYmpldG9zIiwib25DaGFuZ2VPcGVuVGFzayIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index2.js\n"));

/***/ })

});