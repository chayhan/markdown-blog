"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/inherits@2.0.4";
exports.ids = ["vendor-chunks/inherits@2.0.4"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\ntry {\n    var util = __webpack_require__(/*! util */ \"util\");\n    /* istanbul ignore next */ if (typeof util.inherits !== \"function\") throw \"\";\n    module.exports = util.inherits;\n} catch (e) {\n    /* istanbul ignore next */ module.exports = __webpack_require__(/*! ./inherits_browser.js */ \"(rsc)/./node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vaW5oZXJpdHNAMi4wLjQvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxJQUFJO0lBQ0YsSUFBSUEsT0FBT0MsbUJBQU9BLENBQUM7SUFDbkIsd0JBQXdCLEdBQ3hCLElBQUksT0FBT0QsS0FBS0UsUUFBUSxLQUFLLFlBQVksTUFBTTtJQUMvQ0MsT0FBT0MsT0FBTyxHQUFHSixLQUFLRSxRQUFRO0FBQ2hDLEVBQUUsT0FBT0csR0FBRztJQUNWLHdCQUF3QixHQUN4QkYsd0pBQXlCO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2Rvd24tYmxvZy8uL25vZGVfbW9kdWxlcy8ucG5wbS9pbmhlcml0c0AyLjAuNC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHMuanM/ODU3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJ0cnkge1xuICB2YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKHR5cGVvZiB1dGlsLmluaGVyaXRzICE9PSAnZnVuY3Rpb24nKSB0aHJvdyAnJztcbiAgbW9kdWxlLmV4cG9ydHMgPSB1dGlsLmluaGVyaXRzO1xufSBjYXRjaCAoZSkge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vaW5oZXJpdHNfYnJvd3Nlci5qcycpO1xufVxuIl0sIm5hbWVzIjpbInV0aWwiLCJyZXF1aXJlIiwiaW5oZXJpdHMiLCJtb2R1bGUiLCJleHBvcnRzIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js ***!
  \*************************************************************************************/
/***/ ((module) => {

eval("\nif (typeof Object.create === \"function\") {\n    // implementation from standard node.js 'util' module\n    module.exports = function inherits(ctor, superCtor) {\n        if (superCtor) {\n            ctor.super_ = superCtor;\n            ctor.prototype = Object.create(superCtor.prototype, {\n                constructor: {\n                    value: ctor,\n                    enumerable: false,\n                    writable: true,\n                    configurable: true\n                }\n            });\n        }\n    };\n} else {\n    // old school shim for old browsers\n    module.exports = function inherits(ctor, superCtor) {\n        if (superCtor) {\n            ctor.super_ = superCtor;\n            var TempCtor = function() {};\n            TempCtor.prototype = superCtor.prototype;\n            ctor.prototype = new TempCtor();\n            ctor.prototype.constructor = ctor;\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vaW5oZXJpdHNAMi4wLjQvbm9kZV9tb2R1bGVzL2luaGVyaXRzL2luaGVyaXRzX2Jyb3dzZXIuanMiLCJtYXBwaW5ncyI6IjtBQUFBLElBQUksT0FBT0EsT0FBT0MsTUFBTSxLQUFLLFlBQVk7SUFDdkMscURBQXFEO0lBQ3JEQyxPQUFPQyxPQUFPLEdBQUcsU0FBU0MsU0FBU0MsSUFBSSxFQUFFQyxTQUFTO1FBQ2hELElBQUlBLFdBQVc7WUFDYkQsS0FBS0UsTUFBTSxHQUFHRDtZQUNkRCxLQUFLRyxTQUFTLEdBQUdSLE9BQU9DLE1BQU0sQ0FBQ0ssVUFBVUUsU0FBUyxFQUFFO2dCQUNsREMsYUFBYTtvQkFDWEMsT0FBT0w7b0JBQ1BNLFlBQVk7b0JBQ1pDLFVBQVU7b0JBQ1ZDLGNBQWM7Z0JBQ2hCO1lBQ0Y7UUFDRjtJQUNGO0FBQ0YsT0FBTztJQUNMLG1DQUFtQztJQUNuQ1gsT0FBT0MsT0FBTyxHQUFHLFNBQVNDLFNBQVNDLElBQUksRUFBRUMsU0FBUztRQUNoRCxJQUFJQSxXQUFXO1lBQ2JELEtBQUtFLE1BQU0sR0FBR0Q7WUFDZCxJQUFJUSxXQUFXLFlBQWE7WUFDNUJBLFNBQVNOLFNBQVMsR0FBR0YsVUFBVUUsU0FBUztZQUN4Q0gsS0FBS0csU0FBUyxHQUFHLElBQUlNO1lBQ3JCVCxLQUFLRyxTQUFTLENBQUNDLFdBQVcsR0FBR0o7UUFDL0I7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2Rvd24tYmxvZy8uL25vZGVfbW9kdWxlcy8ucG5wbS9pbmhlcml0c0AyLjAuNC9ub2RlX21vZHVsZXMvaW5oZXJpdHMvaW5oZXJpdHNfYnJvd3Nlci5qcz9hZGZlIl0sInNvdXJjZXNDb250ZW50IjpbImlmICh0eXBlb2YgT2JqZWN0LmNyZWF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAvLyBpbXBsZW1lbnRhdGlvbiBmcm9tIHN0YW5kYXJkIG5vZGUuanMgJ3V0aWwnIG1vZHVsZVxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGluaGVyaXRzKGN0b3IsIHN1cGVyQ3Rvcikge1xuICAgIGlmIChzdXBlckN0b3IpIHtcbiAgICAgIGN0b3Iuc3VwZXJfID0gc3VwZXJDdG9yXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDdG9yLnByb3RvdHlwZSwge1xuICAgICAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgICAgIHZhbHVlOiBjdG9yLFxuICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfTtcbn0gZWxzZSB7XG4gIC8vIG9sZCBzY2hvb2wgc2hpbSBmb3Igb2xkIGJyb3dzZXJzXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaW5oZXJpdHMoY3Rvciwgc3VwZXJDdG9yKSB7XG4gICAgaWYgKHN1cGVyQ3Rvcikge1xuICAgICAgY3Rvci5zdXBlcl8gPSBzdXBlckN0b3JcbiAgICAgIHZhciBUZW1wQ3RvciA9IGZ1bmN0aW9uICgpIHt9XG4gICAgICBUZW1wQ3Rvci5wcm90b3R5cGUgPSBzdXBlckN0b3IucHJvdG90eXBlXG4gICAgICBjdG9yLnByb3RvdHlwZSA9IG5ldyBUZW1wQ3RvcigpXG4gICAgICBjdG9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPYmplY3QiLCJjcmVhdGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5oZXJpdHMiLCJjdG9yIiwic3VwZXJDdG9yIiwic3VwZXJfIiwicHJvdG90eXBlIiwiY29uc3RydWN0b3IiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJ3cml0YWJsZSIsImNvbmZpZ3VyYWJsZSIsIlRlbXBDdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/inherits@2.0.4/node_modules/inherits/inherits_browser.js\n");

/***/ })

};
;