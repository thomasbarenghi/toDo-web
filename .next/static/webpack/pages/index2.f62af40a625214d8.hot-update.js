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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Tareas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tareas */ \"./components/Tareas.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    // Convertir el arreglo a una cadena JSON\n    // Eliminar espacios y caracteres especiales de la cadena JSON\n    // Establecer la cadena JSON en una cookie\n    js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"cookie\", noSpacesString);\n    // Obtener el valor de la cookie\n    const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"cookie\");\n    const noSpacesString = cookieValue.replace(/[\\s\\t\\n]/g, \"\");\n    // parsear el valor de la cookie a un objeto JSON\n    console.log(noSpacesString);\n    const parsed = JSON.parse(noSpacesString);\n    const [arrayObjetos, setArrayObjetos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        parsed\n    ]);\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const nuevoObjeto = {\n            nombre,\n            descripcion,\n            openTask: true\n        };\n        setArrayObjetos([\n            ...arrayObjetos,\n            nuevoObjeto\n        ]);\n        setNombre(\"\");\n        setDescripcion(\"\");\n    };\n    const handleChangeOpenTask = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos[index].openTask = !newArrayObjetos[index].openTask;\n        setArrayObjetos(newArrayObjetos);\n    };\n    const handleDelete = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos.splice(index, 1);\n        setArrayObjetos(newArrayObjetos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Todo app\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            onSubmit: handleSubmit,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Nombre:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: nombre,\n                                                            onChange: (e)=>setNombre(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 74,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Descripcion:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: descripcion,\n                                                            onChange: (e)=>setDescripcion(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 78,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"Agregar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"containerComponentes\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tareas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    objetos: arrayObjetos,\n                                    onChangeOpenTask: handleChangeOpenTask,\n                                    onDelete: handleDelete\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 87,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"jlZDYPXglihOp9WgwQbtdp1B2Bo=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleDIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDRTtBQUNHO0FBQ1E7QUFDUDtBQUNIO0FBRWhCLFNBQVNNLE9BQU87O0lBRTNCLHlDQUF5QztJQUV6Qyw4REFBOEQ7SUFFOUQsMENBQTBDO0lBQzFDRCxxREFBVSxDQUFDLFVBQVVHO0lBRXJCLGdDQUFnQztJQUNoQyxNQUFNQyxjQUFjSixxREFBVSxDQUFDO0lBQy9CLE1BQU1HLGlCQUFpQkMsWUFBWUUsT0FBTyxDQUFDLGFBQWE7SUFDeEQsaURBQWlEO0lBQ2pEQyxRQUFRQyxHQUFHLENBQUNMO0lBR1gsTUFBTU0sU0FBVUMsS0FBS0MsS0FBSyxDQUFDUjtJQUU1QixNQUFNLENBQUNTLGNBQWNDLGdCQUFnQixHQUFHaEIsK0NBQVFBLENBQUM7UUFBQ1k7S0FBTztJQUN6RCxNQUFNLENBQUNLLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ21CLGFBQWFDLGVBQWUsR0FBR3BCLCtDQUFRQSxDQUFDO0lBSy9DLE1BQU1xQixlQUFlLENBQUNDLElBQU07UUFDeEJBLEVBQUVDLGNBQWM7UUFDaEIsTUFBTUMsY0FBYztZQUFFUDtZQUFRRTtZQUFhTSxVQUFVLElBQUk7UUFBQztRQUMxRFQsZ0JBQWdCO2VBQUlEO1lBQWNTO1NBQVk7UUFDOUNOLFVBQVU7UUFDVkUsZUFBZTtJQUNuQjtJQUlBLE1BQU1NLHVCQUF1QixDQUFDQyxRQUFVO1FBQ3BDLE1BQU1DLGtCQUFrQjtlQUFJYjtTQUFhO1FBQ3pDYSxlQUFlLENBQUNELE1BQU0sQ0FBQ0YsUUFBUSxHQUFHLENBQUNHLGVBQWUsQ0FBQ0QsTUFBTSxDQUFDRixRQUFRO1FBQ2xFVCxnQkFBZ0JZO0lBQ3BCO0lBRUEsTUFBTUMsZUFBZSxDQUFDRixRQUFVO1FBQzVCLE1BQU1DLGtCQUFrQjtlQUFJYjtTQUFhO1FBQ3pDYSxnQkFBZ0JFLE1BQU0sQ0FBQ0gsT0FBTztRQUM5QlgsZ0JBQWdCWTtJQUNwQjtJQUVBLHFCQUNJOzswQkFDSSw4REFBQzlCLGtEQUFJQTs7a0NBQ0QsOERBQUNpQztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDQzswQkFDRyw0RUFBQ0M7OEJBQ0csNEVBQUNDOzswQ0FDRyw4REFBQ0E7O2tEQUNHLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDRDtrREFHRyw0RUFBQ0U7NENBQUtDLFVBQVV0Qjs7OERBQ1osOERBQUN1Qjs7d0RBQU07c0VBRUgsOERBQUNDOzREQUFNQyxNQUFLOzREQUFPQyxPQUFPOUI7NERBQVErQixVQUFVMUIsQ0FBQUEsSUFBS0osVUFBVUksRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzhEQUU3RSw4REFBQ0g7O3dEQUFNO3NFQUVILDhEQUFDQzs0REFBTUMsTUFBSzs0REFBT0MsT0FBTzVCOzREQUFhNkIsVUFBVTFCLENBQUFBLElBQUtGLGVBQWVFLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4REFFdkYsOERBQUNHO29EQUFPSixNQUFLOzhEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FPbEMsOERBQUNOO2dDQUFJVyxJQUFHOzBDQUlKLDRFQUFDbEQsMERBQU1BO29DQUFDbUQsU0FBU3JDO29DQUFjc0Msa0JBQWtCM0I7b0NBQXNCNEIsVUFBVXpCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVM3RyxDQUFDO0dBNUZ1QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4Mi5qcz8xMjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFyZWFzIGZyb20gXCIuLi9jb21wb25lbnRzL1RhcmVhc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuICAgIC8vIENvbnZlcnRpciBlbCBhcnJlZ2xvIGEgdW5hIGNhZGVuYSBKU09OXHJcbiBcclxuICAgIC8vIEVsaW1pbmFyIGVzcGFjaW9zIHkgY2FyYWN0ZXJlcyBlc3BlY2lhbGVzIGRlIGxhIGNhZGVuYSBKU09OXHJcbiAgICBcclxuICAgIC8vIEVzdGFibGVjZXIgbGEgY2FkZW5hIEpTT04gZW4gdW5hIGNvb2tpZVxyXG4gICAgY29va2llLnNldChcImNvb2tpZVwiLCBub1NwYWNlc1N0cmluZyk7XHJcblxyXG4gICAgLy8gT2J0ZW5lciBlbCB2YWxvciBkZSBsYSBjb29raWVcclxuICAgIGNvbnN0IGNvb2tpZVZhbHVlID0gY29va2llLmdldChcImNvb2tpZVwiKTtcclxuICAgIGNvbnN0IG5vU3BhY2VzU3RyaW5nID0gY29va2llVmFsdWUucmVwbGFjZSgvW1xcc1xcdFxcbl0vZywgJycpO1xyXG4gICAgLy8gcGFyc2VhciBlbCB2YWxvciBkZSBsYSBjb29raWUgYSB1biBvYmpldG8gSlNPTlxyXG4gICAgY29uc29sZS5sb2cobm9TcGFjZXNTdHJpbmcpXHJcblxyXG4gICAgXHJcbiAgICAgY29uc3QgcGFyc2VkID0gIEpTT04ucGFyc2Uobm9TcGFjZXNTdHJpbmcpO1xyXG5cclxuICAgIGNvbnN0IFthcnJheU9iamV0b3MsIHNldEFycmF5T2JqZXRvc10gPSB1c2VTdGF0ZShbcGFyc2VkXSk7XHJcbiAgICBjb25zdCBbbm9tYnJlLCBzZXROb21icmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXBjaW9uLCBzZXREZXNjcmlwY2lvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbnVldm9PYmpldG8gPSB7IG5vbWJyZSwgZGVzY3JpcGNpb24sIG9wZW5UYXNrOiB0cnVlIH07XHJcbiAgICAgICAgc2V0QXJyYXlPYmpldG9zKFsuLi5hcnJheU9iamV0b3MsIG51ZXZvT2JqZXRvXSk7XHJcbiAgICAgICAgc2V0Tm9tYnJlKCcnKTtcclxuICAgICAgICBzZXREZXNjcmlwY2lvbignJyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcGVuVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5T2JqZXRvcyA9IFsuLi5hcnJheU9iamV0b3NdO1xyXG4gICAgICAgIG5ld0FycmF5T2JqZXRvc1tpbmRleF0ub3BlblRhc2sgPSAhbmV3QXJyYXlPYmpldG9zW2luZGV4XS5vcGVuVGFzaztcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdBcnJheU9iamV0b3MgPSBbLi4uYXJyYXlPYmpldG9zXTtcclxuICAgICAgICBuZXdBcnJheU9iamV0b3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ub2RvIGFwcDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vbWJyZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtub21icmV9IG9uQ2hhbmdlPXtlID0+IHNldE5vbWJyZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXBjaW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2Rlc2NyaXBjaW9ufSBvbkNoYW5nZT17ZSA9PiBzZXREZXNjcmlwY2lvbihlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFncmVnYXI8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJDb21wb25lbnRlc1wiPlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhcmVhcyBvYmpldG9zPXthcnJheU9iamV0b3N9IG9uQ2hhbmdlT3BlblRhc2s9e2hhbmRsZUNoYW5nZU9wZW5UYXNrfSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZVN0YXRlIiwiVGFyZWFzIiwidXNlRWZmZWN0IiwiY29va2llIiwiSG9tZSIsInNldCIsIm5vU3BhY2VzU3RyaW5nIiwiY29va2llVmFsdWUiLCJnZXQiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsInBhcnNlZCIsIkpTT04iLCJwYXJzZSIsImFycmF5T2JqZXRvcyIsInNldEFycmF5T2JqZXRvcyIsIm5vbWJyZSIsInNldE5vbWJyZSIsImRlc2NyaXBjaW9uIiwic2V0RGVzY3JpcGNpb24iLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJudWV2b09iamV0byIsIm9wZW5UYXNrIiwiaGFuZGxlQ2hhbmdlT3BlblRhc2siLCJpbmRleCIsIm5ld0FycmF5T2JqZXRvcyIsImhhbmRsZURlbGV0ZSIsInNwbGljZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwic2VjdGlvbiIsImRpdiIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIiwiaWQiLCJvYmpldG9zIiwib25DaGFuZ2VPcGVuVGFzayIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index2.js\n"));

/***/ })

});