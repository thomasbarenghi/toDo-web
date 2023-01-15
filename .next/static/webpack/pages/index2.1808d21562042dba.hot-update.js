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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Tareas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tareas */ \"./components/Tareas.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [arrayObjetos, setArrayObjetos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [descripcionSubtarea, setDescripcionSubtarea] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"cookie\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (cookieValue) {\n            const parsed = JSON.parse(cookieValue);\n            setArrayObjetos(parsed);\n        } else {\n            console.log(\"cookie vac\\xeda o no existe\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"cookie\", JSON.stringify(arrayObjetos));\n    }, [\n        arrayObjetos\n    ]);\n    function deleteCookies() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove(\"cookie\");\n    }\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const nuevoObjeto = {\n            nombre,\n            descripcion,\n            openTask: true,\n            susbtareas: []\n        };\n        setArrayObjetos([\n            ...arrayObjetos,\n            nuevoObjeto\n        ]);\n        setNombre(\"\");\n        setDescripcion(\"\");\n        console.log(arrayObjetos);\n    };\n    //Subtareas\n    const handleAddAndSubmitSubtarea = (e, index)=>{\n        e.preventDefault();\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        if (!newArrayObjetos[index].subtareas) {\n            newArrayObjetos[index].subtareas = [];\n        }\n        newArrayObjetos[index].subtareas.push({\n            descripcion: descripcionSubtarea\n        });\n        setArrayObjetos(newArrayObjetos);\n        setDescripcionSubtarea(\"\");\n    };\n    const handleDeleteSubtarea = (indexParent, indexSubtarea)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos[indexParent].subtareas.splice(indexSubtarea, 1);\n        setArrayObjetos(newArrayObjetos);\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"cookie\", JSON.stringify(arrayObjetos));\n    };\n    const handleChangeOpenTask = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos[index].openTask = !newArrayObjetos[index].openTask;\n        setArrayObjetos(newArrayObjetos);\n    };\n    const handleDelete = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos.splice(index, 1);\n        setArrayObjetos(newArrayObjetos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 83,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 84,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 85,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Todo app\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: deleteCookies,\n                                        children: \"Borrar cookies\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            onSubmit: handleSubmit,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Nombre:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: nombre,\n                                                            onChange: (e)=>setNombre(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 99,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Descripcion:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: descripcion,\n                                                            onChange: (e)=>setDescripcion(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 103,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 101,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"Agregar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 105,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 90,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"containerComponentes\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tareas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    objetos: arrayObjetos,\n                                    onChangeOpenTask: handleChangeOpenTask,\n                                    onDelete: handleDelete,\n                                    onAddSubtarea: handleAddSubtarea,\n                                    onSubmitSubtarea: handleSubmitSubtarea,\n                                    onDeleteSubtarea: handleDeleteSubtarea\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 112,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 89,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                    lineNumber: 88,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"BmmTPVEiT6Z+7098Pkd50ey+lNA=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzswQkFDRyw0RUFBQ0M7OEJBQ0csNEVBQUNDOzswQ0FDRyw4REFBQ0E7O2tEQUNHLDhEQUFDQztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQzt3Q0FBT0MsU0FBUy9CO2tEQUFnQjs7Ozs7O2tEQUNqQyw4REFBQzRCO2tEQUdHLDRFQUFDSTs0Q0FBS0MsVUFBVS9COzs4REFDWiw4REFBQ2dDOzt3REFBTTtzRUFFSCw4REFBQ0M7NERBQU1DLE1BQUs7NERBQU9DLE9BQU9wRDs0REFBUXFELFVBQVVuQyxDQUFBQSxJQUFLakIsVUFBVWlCLEVBQUVvQyxNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4REFFN0UsOERBQUNIOzt3REFBTTtzRUFFSCw4REFBQ0M7NERBQU1DLE1BQUs7NERBQU9DLE9BQU9sRDs0REFBYW1ELFVBQVVuQyxDQUFBQSxJQUFLZixlQUFlZSxFQUFFb0MsTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7OERBRXZGLDhEQUFDUDtvREFBT00sTUFBSzs4REFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBT2xDLDhEQUFDUjtnQ0FBSVksSUFBRzswQ0FJUiw0RUFBQzdELDBEQUFNQTtvQ0FBQzhELFNBQVMxRDtvQ0FBYzJELGtCQUFrQnpCO29DQUFzQjBCLFVBQVV6QjtvQ0FBYzBCLGVBQWVDO29DQUFtQkMsa0JBQWtCQztvQ0FBc0JDLGtCQUFrQm5DOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuTixDQUFDO0dBckh1Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4Mi5qcz8xMjE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgVGFyZWFzIGZyb20gXCIuLi9jb21wb25lbnRzL1RhcmVhc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG5cclxuXHJcbiAgICBjb25zdCBbYXJyYXlPYmpldG9zLCBzZXRBcnJheU9iamV0b3NdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW25vbWJyZSwgc2V0Tm9tYnJlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtkZXNjcmlwY2lvbiwgc2V0RGVzY3JpcGNpb25dID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXBjaW9uU3VidGFyZWEsIHNldERlc2NyaXBjaW9uU3VidGFyZWFdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgY29va2llVmFsdWUgPSBjb29raWUuZ2V0KFwiY29va2llXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvb2tpZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoY29va2llVmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRBcnJheU9iamV0b3MocGFyc2VkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvb2tpZSB2YWPDrWEgbyBubyBleGlzdGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29va2llLnNldChcImNvb2tpZVwiLCBKU09OLnN0cmluZ2lmeShhcnJheU9iamV0b3MpKTtcclxuICAgIH0sIFthcnJheU9iamV0b3NdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVDb29raWVzKCkge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ2Nvb2tpZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG51ZXZvT2JqZXRvID0geyBub21icmUsIGRlc2NyaXBjaW9uLCBvcGVuVGFzazogdHJ1ZSwgc3VzYnRhcmVhczogW10gfTtcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MoWy4uLmFycmF5T2JqZXRvcywgbnVldm9PYmpldG9dKTtcclxuICAgICAgICBzZXROb21icmUoJycpO1xyXG4gICAgICAgIHNldERlc2NyaXBjaW9uKCcnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcnJheU9iamV0b3MpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vU3VidGFyZWFzXHJcbiAgICBjb25zdCBoYW5kbGVBZGRBbmRTdWJtaXRTdWJ0YXJlYSA9IChlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBuZXdBcnJheU9iamV0b3MgPSBbLi4uYXJyYXlPYmpldG9zXTtcclxuICAgICAgICBpZiAoIW5ld0FycmF5T2JqZXRvc1tpbmRleF0uc3VidGFyZWFzKSB7XHJcbiAgICAgICAgICAgIG5ld0FycmF5T2JqZXRvc1tpbmRleF0uc3VidGFyZWFzID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0FycmF5T2JqZXRvc1tpbmRleF0uc3VidGFyZWFzLnB1c2goeyBkZXNjcmlwY2lvbjogZGVzY3JpcGNpb25TdWJ0YXJlYSB9KTtcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgICAgICBzZXREZXNjcmlwY2lvblN1YnRhcmVhKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGVTdWJ0YXJlYSA9IChpbmRleFBhcmVudCwgaW5kZXhTdWJ0YXJlYSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5T2JqZXRvcyA9IFsuLi5hcnJheU9iamV0b3NdO1xyXG4gICAgICAgIG5ld0FycmF5T2JqZXRvc1tpbmRleFBhcmVudF0uc3VidGFyZWFzLnNwbGljZShpbmRleFN1YnRhcmVhLCAxKTtcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgICAgICBjb29raWUuc2V0KFwiY29va2llXCIsSlNPTi5zdHJpbmdpZnkoYXJyYXlPYmpldG9zKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcGVuVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5T2JqZXRvcyA9IFsuLi5hcnJheU9iamV0b3NdO1xyXG4gICAgICAgIG5ld0FycmF5T2JqZXRvc1tpbmRleF0ub3BlblRhc2sgPSAhbmV3QXJyYXlPYmpldG9zW2luZGV4XS5vcGVuVGFzaztcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdBcnJheU9iamV0b3MgPSBbLi4uYXJyYXlPYmpldG9zXTtcclxuICAgICAgICBuZXdBcnJheU9iamV0b3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ub2RvIGFwcDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUNvb2tpZXN9ID5Cb3JyYXIgY29va2llczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bm9tYnJlfSBvbkNoYW5nZT17ZSA9PiBzZXROb21icmUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwY2lvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtkZXNjcmlwY2lvbn0gb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcGNpb24oZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZ3JlZ2FyPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyQ29tcG9uZW50ZXNcIj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhcmVhcyBvYmpldG9zPXthcnJheU9iamV0b3N9IG9uQ2hhbmdlT3BlblRhc2s9e2hhbmRsZUNoYW5nZU9wZW5UYXNrfSBvbkRlbGV0ZT17aGFuZGxlRGVsZXRlfSBvbkFkZFN1YnRhcmVhPXtoYW5kbGVBZGRTdWJ0YXJlYX0gb25TdWJtaXRTdWJ0YXJlYT17aGFuZGxlU3VibWl0U3VidGFyZWF9IG9uRGVsZXRlU3VidGFyZWE9e2hhbmRsZURlbGV0ZVN1YnRhcmVhfSAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInVzZVN0YXRlIiwiVGFyZWFzIiwidXNlRWZmZWN0IiwiY29va2llIiwiSG9tZSIsImFycmF5T2JqZXRvcyIsInNldEFycmF5T2JqZXRvcyIsIm5vbWJyZSIsInNldE5vbWJyZSIsImRlc2NyaXBjaW9uIiwic2V0RGVzY3JpcGNpb24iLCJkZXNjcmlwY2lvblN1YnRhcmVhIiwic2V0RGVzY3JpcGNpb25TdWJ0YXJlYSIsImNvb2tpZVZhbHVlIiwiZ2V0IiwicGFyc2VkIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsInNldCIsInN0cmluZ2lmeSIsImRlbGV0ZUNvb2tpZXMiLCJyZW1vdmUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJudWV2b09iamV0byIsIm9wZW5UYXNrIiwic3VzYnRhcmVhcyIsImhhbmRsZUFkZEFuZFN1Ym1pdFN1YnRhcmVhIiwiaW5kZXgiLCJuZXdBcnJheU9iamV0b3MiLCJzdWJ0YXJlYXMiLCJwdXNoIiwiaGFuZGxlRGVsZXRlU3VidGFyZWEiLCJpbmRleFBhcmVudCIsImluZGV4U3VidGFyZWEiLCJzcGxpY2UiLCJoYW5kbGVDaGFuZ2VPcGVuVGFzayIsImhhbmRsZURlbGV0ZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwic2VjdGlvbiIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImlkIiwib2JqZXRvcyIsIm9uQ2hhbmdlT3BlblRhc2siLCJvbkRlbGV0ZSIsIm9uQWRkU3VidGFyZWEiLCJoYW5kbGVBZGRTdWJ0YXJlYSIsIm9uU3VibWl0U3VidGFyZWEiLCJoYW5kbGVTdWJtaXRTdWJ0YXJlYSIsIm9uRGVsZXRlU3VidGFyZWEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index2.js\n"));

/***/ })

});