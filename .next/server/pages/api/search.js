"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/search";
exports.ids = ["pages/api/search"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./prisma/client.ts":
/*!**************************!*\
  !*** ./prisma/client.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = globalThis.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) globalThis.prisma = client;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvY2xpZW50LnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU05QyxNQUFNQyxTQUFTQyxXQUFXQyxVQUFVLElBQUlILHdEQUFZQTtBQUNwRCxJQUFJSSxJQUFxQyxFQUFFRixXQUFXQyxTQUFTRjtBQUUvRCxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BsZWFzZS13b3JrLy4vcHJpc21hL2NsaWVudC50cz9kYjY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuY29uc3QgY2xpZW50ID0gZ2xvYmFsVGhpcy5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikgZ2xvYmFsVGhpcy5wcmlzbWEgPSBjbGllbnQ7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiY2xpZW50IiwiZ2xvYmFsVGhpcyIsInByaXNtYSIsInByb2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./prisma/client.ts\n");

/***/ }),

/***/ "(api)/./src/pages/api/search.ts":
/*!*********************************!*\
  !*** ./src/pages/api/search.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../prisma/client */ \"(api)/./prisma/client.ts\");\n\nasync function handler(req, res) {\n    if (req.method === \"GET\") {\n        try {\n            const { q: query  } = req.query;\n            if (typeof query !== \"string\") {\n                throw new Error(\"Invalid request\");\n            }\n            const accolade = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].accolade.findMany({\n                where: {\n                    OR: [\n                        {\n                            name: {\n                                contains: query\n                            }\n                        },\n                        {\n                            institution: {\n                                contains: query\n                            }\n                        },\n                        {\n                            outcome: {\n                                contains: query\n                            }\n                        },\n                        {\n                            messaging: {\n                                contains: query\n                            }\n                        },\n                        {\n                            comments: {\n                                contains: query\n                            }\n                        },\n                        {\n                            extSource: {\n                                contains: query\n                            }\n                        },\n                        {\n                            intSource: {\n                                contains: query\n                            }\n                        },\n                        {\n                            sourceatr: {\n                                contains: query\n                            }\n                        },\n                        {\n                            wherepubint: {\n                                contains: query\n                            }\n                        }\n                    ]\n                }\n            });\n            res.status(200).json({\n                accolade\n            });\n        } catch (error) {\n            res.status(500).end();\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlYXJjaC50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUM0QztBQUU3QixlQUFlQyxRQUMxQkMsR0FBbUIsRUFDbkJDLEdBQW9CO0lBRXBCLElBQUlELElBQUlFLFdBQVcsT0FBTztRQUN0QixJQUFJO1lBQ0EsTUFBTSxFQUFFQyxHQUFHQyxNQUFLLEVBQUUsR0FBR0osSUFBSUk7WUFFekIsSUFBSSxPQUFPQSxVQUFVLFVBQVU7Z0JBQzNCLE1BQU0sSUFBSUMsTUFBTTtZQUNwQjtZQUdKLE1BQU1DLFdBQVcsTUFBTVIsK0RBQWVRLENBQUNDLFNBQVM7Z0JBQzVDQyxPQUFPO29CQUNIQyxJQUFJO3dCQUNKOzRCQUNJQyxNQUFNO2dDQUNGQyxVQUFVUDs0QkFDZDt3QkFDSjt3QkFDQTs0QkFDSVEsYUFBYTtnQ0FDVEQsVUFBVVA7NEJBQ2Q7d0JBQ0o7d0JBQ0E7NEJBQ0lTLFNBQVM7Z0NBQ0xGLFVBQVVQOzRCQUNkO3dCQUNKO3dCQUFrQjs0QkFDZFUsV0FBVztnQ0FDUEgsVUFBVVA7NEJBQ2Q7d0JBQ0o7d0JBQ0E7NEJBQ0lXLFVBQVU7Z0NBQ05KLFVBQVVQOzRCQUNkO3dCQUNKO3dCQUNBOzRCQUNJWSxXQUFXO2dDQUNQTCxVQUFVUDs0QkFDZDt3QkFDSjt3QkFDQTs0QkFDSWEsV0FBVztnQ0FDUE4sVUFBVVA7NEJBQ2Q7d0JBQ0o7d0JBQ0E7NEJBQ0ljLFdBQVc7Z0NBQ1BQLFVBQVVQOzRCQUNkO3dCQUNKO3dCQUNBOzRCQUNJZSxhQUFhO2dDQUNUUixVQUFVUDs0QkFDZDt3QkFDSjtxQkFFSDtnQkFDTDtZQUNKO1lBRUFILElBQUltQixPQUFPLEtBQUtDLEtBQUs7Z0JBQUVmO1lBQVM7UUFBRSxFQUVsQyxPQUFPZ0IsT0FBTztZQUNWckIsSUFBSW1CLE9BQU8sS0FBS0c7UUFDcEI7SUFDQTtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxlYXNlLXdvcmsvLi9zcmMvcGFnZXMvYXBpL3NlYXJjaC50cz81NGFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9wcmlzbWEvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gICAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gICAgaWYgKHJlcS5tZXRob2QgPT09IFwiR0VUXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgcTogcXVlcnkgfSA9IHJlcS5xdWVyeTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBxdWVyeSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcmVxdWVzdFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBjb25zdCBhY2NvbGFkZSA9IGF3YWl0IHByaXNtYS5hY2NvbGFkZS5maW5kTWFueSh7XG4gICAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluczogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RpdHV0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluczogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG91dGNvbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LCAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2luZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb21tZW50czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBleHRTb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBxdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaW50U291cmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluczogcXVlcnksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZWF0cjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB3aGVyZXB1YmludDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbnM6IHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBhY2NvbGFkZSB9KX1cbiAgICBcbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmVuZCgpO1xuICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInEiLCJxdWVyeSIsIkVycm9yIiwiYWNjb2xhZGUiLCJmaW5kTWFueSIsIndoZXJlIiwiT1IiLCJuYW1lIiwiY29udGFpbnMiLCJpbnN0aXR1dGlvbiIsIm91dGNvbWUiLCJtZXNzYWdpbmciLCJjb21tZW50cyIsImV4dFNvdXJjZSIsImludFNvdXJjZSIsInNvdXJjZWF0ciIsIndoZXJlcHViaW50Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/search.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/search.ts"));
module.exports = __webpack_exports__;

})();