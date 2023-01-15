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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Tareas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Tareas */ \"./components/Tareas.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [arrayObjetos, setArrayObjetos] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [nombre, setNombre] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [descripcion, setDescripcion] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const cookieValue = js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"cookie\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (cookieValue) {\n            const parsed = JSON.parse(cookieValue);\n            setArrayObjetos(parsed);\n        } else {\n            console.log(\"cookie vac\\xeda o no existe\");\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].set(\"cookie\", JSON.stringify(arrayObjetos));\n    }, [\n        arrayObjetos\n    ]);\n    function deleteCookies() {\n        js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].remove(\"cookie\");\n    }\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        const nuevoObjeto = {\n            nombre,\n            descripcion,\n            openTask: true\n        };\n        setArrayObjetos([\n            ...arrayObjetos,\n            nuevoObjeto\n        ]);\n        setNombre(\"\");\n        setDescripcion(\"\");\n        console.log(js_cookie__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"cookie\"));\n    };\n    const handleChangeOpenTask = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos[index].openTask = !newArrayObjetos[index].openTask;\n        setArrayObjetos(newArrayObjetos);\n    };\n    const handleDelete = (index)=>{\n        const newArrayObjetos = [\n            ...arrayObjetos\n        ];\n        newArrayObjetos.splice(index, 1);\n        setArrayObjetos(newArrayObjetos);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 59,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 60,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 57,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        children: \"Todo app\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: deleteCookies,\n                                        children: \"Borrar cookies\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                            onSubmit: handleSubmit,\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Nombre:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: nombre,\n                                                            onChange: (e)=>setNombre(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 75,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    children: [\n                                                        \"Descripcion:\",\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                            type: \"text\",\n                                                            value: descripcion,\n                                                            onChange: (e)=>setDescripcion(e.target.value)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                            lineNumber: 79,\n                                                            columnNumber: 41\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 37\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"Agregar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 37\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 33\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 66,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                id: \"containerComponentes\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tareas__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    objetos: arrayObjetos,\n                                    onChangeOpenTask: handleChangeOpenTask,\n                                    onDelete: handleDelete\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                        lineNumber: 65,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                    lineNumber: 64,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\pages\\\\index2.js\",\n                lineNumber: 63,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"hxTUIQgH06oLK/OxfWDWm5IlmLM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTN0csQ0FBQztHQTdGdUIxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleDIuanM/MTIxNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRhcmVhcyBmcm9tIFwiLi4vY29tcG9uZW50cy9UYXJlYXNcIlxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuXHJcblxyXG4gICAgY29uc3QgW2FycmF5T2JqZXRvcywgc2V0QXJyYXlPYmpldG9zXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtub21icmUsIHNldE5vbWJyZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgICBjb25zdCBbZGVzY3JpcGNpb24sIHNldERlc2NyaXBjaW9uXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgICBjb25zdCBjb29raWVWYWx1ZSA9IGNvb2tpZS5nZXQoXCJjb29raWVcIik7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoY29va2llVmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShjb29raWVWYWx1ZSk7XHJcbiAgICAgICAgICAgIHNldEFycmF5T2JqZXRvcyhwYXJzZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29va2llIHZhY8OtYSBvIG5vIGV4aXN0ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29va2llLnNldChcImNvb2tpZVwiLCBKU09OLnN0cmluZ2lmeShhcnJheU9iamV0b3MpKTtcclxuICAgIH0sIFthcnJheU9iamV0b3NdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVDb29raWVzKCl7XHJcbiAgICAgICAgY29va2llLnJlbW92ZSgnY29va2llJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbnVldm9PYmpldG8gPSB7IG5vbWJyZSwgZGVzY3JpcGNpb24sIG9wZW5UYXNrOiB0cnVlIH07XHJcbiAgICAgICAgc2V0QXJyYXlPYmpldG9zKFsuLi5hcnJheU9iamV0b3MsIG51ZXZvT2JqZXRvXSk7XHJcbiAgICAgICAgc2V0Tm9tYnJlKCcnKTtcclxuICAgICAgICBzZXREZXNjcmlwY2lvbignJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coY29va2llLmdldChcImNvb2tpZVwiKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VPcGVuVGFzayA9IChpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5ld0FycmF5T2JqZXRvcyA9IFsuLi5hcnJheU9iamV0b3NdO1xyXG4gICAgICAgIG5ld0FycmF5T2JqZXRvc1tpbmRleF0ub3BlblRhc2sgPSAhbmV3QXJyYXlPYmpldG9zW2luZGV4XS5vcGVuVGFzaztcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBuZXdBcnJheU9iamV0b3MgPSBbLi4uYXJyYXlPYmpldG9zXTtcclxuICAgICAgICBuZXdBcnJheU9iamV0b3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZXRBcnJheU9iamV0b3MobmV3QXJyYXlPYmpldG9zKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5Ub2RvIGFwcDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlbGV0ZUNvb2tpZXN9ID5Cb3JyYXIgY29va2llczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOb21icmU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17bm9tYnJlfSBvbkNoYW5nZT17ZSA9PiBzZXROb21icmUoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwY2lvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXtkZXNjcmlwY2lvbn0gb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcGNpb24oZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZ3JlZ2FyPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29udGFpbmVyQ29tcG9uZW50ZXNcIj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYXJlYXMgb2JqZXRvcz17YXJyYXlPYmpldG9zfSBvbkNoYW5nZU9wZW5UYXNrPXtoYW5kbGVDaGFuZ2VPcGVuVGFza30gb25EZWxldGU9e2hhbmRsZURlbGV0ZX0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJ1c2VTdGF0ZSIsIlRhcmVhcyIsInVzZUVmZmVjdCIsImNvb2tpZSIsIkhvbWUiLCJhcnJheU9iamV0b3MiLCJzZXRBcnJheU9iamV0b3MiLCJub21icmUiLCJzZXROb21icmUiLCJkZXNjcmlwY2lvbiIsInNldERlc2NyaXBjaW9uIiwiY29va2llVmFsdWUiLCJnZXQiLCJwYXJzZWQiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwic2V0Iiwic3RyaW5naWZ5IiwiZGVsZXRlQ29va2llcyIsInJlbW92ZSIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIm51ZXZvT2JqZXRvIiwib3BlblRhc2siLCJoYW5kbGVDaGFuZ2VPcGVuVGFzayIsImluZGV4IiwibmV3QXJyYXlPYmpldG9zIiwiaGFuZGxlRGVsZXRlIiwic3BsaWNlIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJzZWN0aW9uIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaWQiLCJvYmpldG9zIiwib25DaGFuZ2VPcGVuVGFzayIsIm9uRGVsZXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index2.js\n"));

/***/ })

});