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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Tareas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tareas */ \"./components/Tareas.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [arrayObjetos, setArrayObjetos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"cookie\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (cookieValue) {\n            const parsed = JSON.parse(cookieValue);\n            setArrayObjetos(parsed);\n        } else {\n            console.log(\"cookie vac\\xeda o no existe\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"cookie\", JSON.stringify(arrayObjetos));\n    }, [\n        arrayObjetos\n    ]);\n    function deleteCookies() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove(\"cookie\");\n    }\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const nuevoObjeto = {\n            nombre,\n            descripcion,\n            openTask: true\n        };\n        setArrayObjetos([\n            ...arrayObjetos,\n            nuevoObjeto\n        ]);\n        setNombre(\"\");\n        setDescripcion(\"\");\n        console.log(arrayObjetos);\n    };\n    const handleChangeOpenTask = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos[index].openTask = !newArrayObjetos[index].openTask;\n        setArrayObjetos(newArrayObjetos);\n    };\n    const handleDelete = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos.splice(index, 1);\n        setArrayObjetos(newArrayObjetos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Todo app\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: deleteCookies,\n                                        children: \"Borrar cookies\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            onSubmit: handleSubmit,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Nombre:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: nombre,\n                                                            onChange: (e)=>setNombre(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Descripcion:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: descripcion,\n                                                            onChange: (e)=>setDescripcion(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"Agregar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"containerComponentes\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tareas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    objetos: arrayObjetos,\n                                    onChangeOpenTask: handleChangeOpenTask,\n                                    onDelete: handleDelete\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"hxTUIQgH06oLK/OxfWDWm5IlmLM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FBUzdHLENBQUM7R0E3RnVCMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgyLmpzPzEyMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUYXJlYXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvVGFyZWFzXCJcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcblxyXG5cclxuICAgIGNvbnN0IFthcnJheU9iamV0b3MsIHNldEFycmF5T2JqZXRvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbm9tYnJlLCBzZXROb21icmVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2Rlc2NyaXBjaW9uLCBzZXREZXNjcmlwY2lvbl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3QgY29va2llVmFsdWUgPSBjb29raWUuZ2V0KFwiY29va2llXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGNvb2tpZVZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UoY29va2llVmFsdWUpO1xyXG4gICAgICAgICAgICBzZXRBcnJheU9iamV0b3MocGFyc2VkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvb2tpZSB2YWPDrWEgbyBubyBleGlzdGVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoXCJjb29raWVcIiwgSlNPTi5zdHJpbmdpZnkoYXJyYXlPYmpldG9zKSk7XHJcbiAgICB9LCBbYXJyYXlPYmpldG9zXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlQ29va2llcygpe1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoJ2Nvb2tpZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG51ZXZvT2JqZXRvID0geyBub21icmUsIGRlc2NyaXBjaW9uLCBvcGVuVGFzazogdHJ1ZSB9O1xyXG4gICAgICAgIHNldEFycmF5T2JqZXRvcyhbLi4uYXJyYXlPYmpldG9zLCBudWV2b09iamV0b10pO1xyXG4gICAgICAgIHNldE5vbWJyZSgnJyk7XHJcbiAgICAgICAgc2V0RGVzY3JpcGNpb24oJycpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFycmF5T2JqZXRvcylcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcGVuVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5T2JqZXRvcyA9IFsuLi5hcnJheU9iamV0b3NdO1xyXG4gICAgICAgIG5ld0FycmF5T2JqZXRvc1tpbmRleF0ub3BlblRhc2sgPSAhbmV3QXJyYXlPYmpldG9zW2luZGV4XS5vcGVuVGFzaztcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdBcnJheU9iamV0b3MgPSBbLi4uYXJyYXlPYmpldG9zXTtcclxuICAgICAgICBuZXdBcnJheU9iamV0b3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ub2RvIGFwcDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUNvb2tpZXN9ID5Cb3JyYXIgY29va2llczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bm9tYnJlfSBvbkNoYW5nZT17ZSA9PiBzZXROb21icmUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwY2lvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtkZXNjcmlwY2lvbn0gb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcGNpb24oZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZ3JlZ2FyPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyQ29tcG9uZW50ZXNcIj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXJlYXMgb2JqZXRvcz17YXJyYXlPYmpldG9zfSBvbkNoYW5nZU9wZW5UYXNrPXtoYW5kbGVDaGFuZ2VPcGVuVGFza30gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlRhcmVhcyIsInVzZUVmZmVjdCIsImNvb2tpZSIsIkhvbWUiLCJhcnJheU9iamV0b3MiLCJzZXRBcnJheU9iamV0b3MiLCJub21icmUiLCJzZXROb21icmUiLCJkZXNjcmlwY2lvbiIsInNldERlc2NyaXBjaW9uIiwiY29va2llVmFsdWUiLCJnZXQiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwic2V0Iiwic3RyaW5naWZ5IiwiZGVsZXRlQ29va2llcyIsInJlbW92ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm51ZXZvT2JqZXRvIiwib3BlblRhc2siLCJoYW5kbGVDaGFuZ2VPcGVuVGFzayIsImluZGV4IiwibmV3QXJyYXlPYmpldG9zIiwiaGFuZGxlRGVsZXRlIiwic3BsaWNlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJzZWN0aW9uIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaWQiLCJvYmpldG9zIiwib25DaGFuZ2VPcGVuVGFzayIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index2.js\n"));

/***/ })

});