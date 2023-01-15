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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Tareas = (param)=>{\n    let { objetos , onDeleteSubtarea , onChangeOpenTask , onDelete , descripcionSubtarea , setDescripcionSubtarea , handleAddAndSubmitSubtarea  } = param;\n    _s();\n    const [inputStates, setInputStates] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // Inicializar el estado del input para cada objeto\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setInputStates(objetos.map(()=>\"\"));\n    }, [\n        objetos\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: objetos.map((objeto, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: objeto.nombre\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: objeto.descripcion\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>onChangeOpenTask(index),\n                        children: objeto.openTask ? \"Cerrar Tarea\" : \"Abrir Tarea\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>onDelete(index),\n                        children: \"Eliminar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, undefined),\n                    objeto.subtareas && objeto.subtareas.map((subtarea, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: subtarea.descripcion\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 29\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: ()=>onDeleteSubtarea(index, i),\n                                    children: \"Borrar subtarea\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                    lineNumber: 25,\n                                    columnNumber: 29\n                                }, undefined)\n                            ]\n                        }, i, true, {\n                            fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                            lineNumber: 23,\n                            columnNumber: 25\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: (e)=>handleAddAndSubmitSubtarea(e, index),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: [\n                                    \"Descripcion:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        name: \"descripcion\",\n                                        value: descripcionSubtarea,\n                                        onChange: (e)=>setDescripcionSubtarea(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                        lineNumber: 31,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 29,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Agregar subtarea\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                                lineNumber: 33,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                        lineNumber: 28,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Space Studio\\\\Desktop\\\\Proyectos\\\\Estaticos\\\\toDo-web\\\\components\\\\Tareas.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Tareas, \"EZm/Nbrdvw+7jWdy8Z8kai+mWGA=\");\n_c = Tareas;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tareas);\nvar _c;\n$RefreshReg$(_c, \"Tareas\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhcmVhcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUE0QztBQUU1QyxNQUFNRSxTQUFTLFNBQXdJO1FBQXZJLEVBQUVDLFFBQU8sRUFBRUMsaUJBQWdCLEVBQUVDLGlCQUFnQixFQUFFQyxTQUFRLEVBQUVDLG9CQUFtQixFQUFFQyx1QkFBc0IsRUFBRUMsMkJBQTBCLEVBQUU7O0lBRTlJLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBQyxFQUFFO0lBRWpELG1EQUFtRDtJQUNuREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNaVSxlQUFlUixRQUFRUyxHQUFHLENBQUMsSUFBTTtJQUNyQyxHQUFHO1FBQUNUO0tBQVE7SUFFWixxQkFDSSw4REFBQ1U7a0JBQ0lWLFFBQVFTLEdBQUcsQ0FBQyxDQUFDRSxRQUFRQyxzQkFDbEIsOERBQUNGOztrQ0FDRyw4REFBQ0c7a0NBQUlGLE9BQU9HLE1BQU07Ozs7OztrQ0FDbEIsOERBQUNDO2tDQUFHSixPQUFPSyxXQUFXOzs7Ozs7a0NBQ3RCLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNaEIsaUJBQWlCVTtrQ0FDbkNELE9BQU9RLFFBQVEsR0FBRyxpQkFBaUIsYUFBYTs7Ozs7O2tDQUVyRCw4REFBQ0Y7d0JBQU9DLFNBQVMsSUFBTWYsU0FBU1M7a0NBQVE7Ozs7OztvQkFDdkNELE9BQU9TLFNBQVMsSUFBSVQsT0FBT1MsU0FBUyxDQUFDWCxHQUFHLENBQUMsQ0FBQ1ksVUFBVUMsa0JBQ2pELDhEQUFDWjs7OENBQ0csOERBQUNLOzhDQUFHTSxTQUFTTCxXQUFXOzs7Ozs7OENBQ3hCLDhEQUFDQztvQ0FBT0MsU0FBUyxJQUFNakIsaUJBQWlCVyxPQUFPVTs4Q0FBSTs7Ozs7OzsyQkFGN0NBOzs7OztrQ0FLZCw4REFBQ0M7d0JBQUtDLFVBQVUsQ0FBQ0MsSUFBTW5CLDJCQUEyQm1CLEdBQUdiOzswQ0FDakQsOERBQUNjOztvQ0FBTTtrREFFSCw4REFBQ0M7d0NBQU1DLE1BQUs7d0NBQU9DLE1BQUs7d0NBQWNDLE9BQU8xQjt3Q0FBcUIyQixVQUFVTixDQUFBQSxJQUFLcEIsdUJBQXVCb0IsRUFBRU8sTUFBTSxDQUFDRixLQUFLOzs7Ozs7Ozs7Ozs7MENBRTFILDhEQUFDYjtnQ0FBT1csTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7OztlQWxCcEJoQjs7Ozs7Ozs7OztBQXdCMUI7R0FwQ01iO0tBQUFBO0FBc0NOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFyZWFzLmpzPzZhNDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRhcmVhcyA9ICh7IG9iamV0b3MsIG9uRGVsZXRlU3VidGFyZWEsIG9uQ2hhbmdlT3BlblRhc2ssIG9uRGVsZXRlLCBkZXNjcmlwY2lvblN1YnRhcmVhLCBzZXREZXNjcmlwY2lvblN1YnRhcmVhLCBoYW5kbGVBZGRBbmRTdWJtaXRTdWJ0YXJlYSB9KSA9PiB7XHJcbiAgIFxyXG4gICAgY29uc3QgW2lucHV0U3RhdGVzLCBzZXRJbnB1dFN0YXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gSW5pY2lhbGl6YXIgZWwgZXN0YWRvIGRlbCBpbnB1dCBwYXJhIGNhZGEgb2JqZXRvXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldElucHV0U3RhdGVzKG9iamV0b3MubWFwKCgpID0+ICcnKSk7XHJcbiAgICB9LCBbb2JqZXRvc10pO1xyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge29iamV0b3MubWFwKChvYmpldG8sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMz57b2JqZXRvLm5vbWJyZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntvYmpldG8uZGVzY3JpcGNpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25DaGFuZ2VPcGVuVGFzayhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7b2JqZXRvLm9wZW5UYXNrID8gXCJDZXJyYXIgVGFyZWFcIiA6IFwiQWJyaXIgVGFyZWFcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uRGVsZXRlKGluZGV4KX0+RWxpbWluYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB7b2JqZXRvLnN1YnRhcmVhcyAmJiBvYmpldG8uc3VidGFyZWFzLm1hcCgoc3VidGFyZWEsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3N1YnRhcmVhLmRlc2NyaXBjaW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gb25EZWxldGVTdWJ0YXJlYShpbmRleCwgaSl9PkJvcnJhciBzdWJ0YXJlYTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGhhbmRsZUFkZEFuZFN1Ym1pdFN1YnRhcmVhKGUsIGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlc2NyaXBjaW9uOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImRlc2NyaXBjaW9uXCIgdmFsdWU9e2Rlc2NyaXBjaW9uU3VidGFyZWF9IG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXBjaW9uU3VidGFyZWEoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5BZ3JlZ2FyIHN1YnRhcmVhPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYXJlYXM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlRhcmVhcyIsIm9iamV0b3MiLCJvbkRlbGV0ZVN1YnRhcmVhIiwib25DaGFuZ2VPcGVuVGFzayIsIm9uRGVsZXRlIiwiZGVzY3JpcGNpb25TdWJ0YXJlYSIsInNldERlc2NyaXBjaW9uU3VidGFyZWEiLCJoYW5kbGVBZGRBbmRTdWJtaXRTdWJ0YXJlYSIsImlucHV0U3RhdGVzIiwic2V0SW5wdXRTdGF0ZXMiLCJtYXAiLCJkaXYiLCJvYmpldG8iLCJpbmRleCIsImgzIiwibm9tYnJlIiwicCIsImRlc2NyaXBjaW9uIiwiYnV0dG9uIiwib25DbGljayIsIm9wZW5UYXNrIiwic3VidGFyZWFzIiwic3VidGFyZWEiLCJpIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Tareas.js\n"));

/***/ })

});