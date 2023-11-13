"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/extend-shallow@2.0.1";
exports.ids = ["vendor-chunks/extend-shallow@2.0.1"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/extend-shallow@2.0.1/node_modules/extend-shallow/index.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/.pnpm/extend-shallow@2.0.1/node_modules/extend-shallow/index.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar isObject = __webpack_require__(/*! is-extendable */ \"(rsc)/./node_modules/.pnpm/is-extendable@0.1.1/node_modules/is-extendable/index.js\");\nmodule.exports = function extend(o /*, objects*/ ) {\n    if (!isObject(o)) {\n        o = {};\n    }\n    var len = arguments.length;\n    for(var i = 1; i < len; i++){\n        var obj = arguments[i];\n        if (isObject(obj)) {\n            assign(o, obj);\n        }\n    }\n    return o;\n};\nfunction assign(a, b) {\n    for(var key in b){\n        if (hasOwn(b, key)) {\n            a[key] = b[key];\n        }\n    }\n}\n/**\n * Returns true if the given `key` is an own property of `obj`.\n */ function hasOwn(obj, key) {\n    return Object.prototype.hasOwnProperty.call(obj, key);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vZXh0ZW5kLXNoYWxsb3dAMi4wLjEvbm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBRUEsSUFBSUEsV0FBV0MsbUJBQU9BLENBQUM7QUFFdkJDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxPQUFPQyxFQUFDLFdBQVcsR0FBWDtJQUNoQyxJQUFJLENBQUNMLFNBQVNLLElBQUk7UUFBRUEsSUFBSSxDQUFDO0lBQUc7SUFFNUIsSUFBSUMsTUFBTUMsVUFBVUMsTUFBTTtJQUMxQixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUgsS0FBS0csSUFBSztRQUM1QixJQUFJQyxNQUFNSCxTQUFTLENBQUNFLEVBQUU7UUFFdEIsSUFBSVQsU0FBU1UsTUFBTTtZQUNqQkMsT0FBT04sR0FBR0s7UUFDWjtJQUNGO0lBQ0EsT0FBT0w7QUFDVDtBQUVBLFNBQVNNLE9BQU9DLENBQUMsRUFBRUMsQ0FBQztJQUNsQixJQUFLLElBQUlDLE9BQU9ELEVBQUc7UUFDakIsSUFBSUUsT0FBT0YsR0FBR0MsTUFBTTtZQUNsQkYsQ0FBQyxDQUFDRSxJQUFJLEdBQUdELENBQUMsQ0FBQ0MsSUFBSTtRQUNqQjtJQUNGO0FBQ0Y7QUFFQTs7Q0FFQyxHQUVELFNBQVNDLE9BQU9MLEdBQUcsRUFBRUksR0FBRztJQUN0QixPQUFPRSxPQUFPQyxTQUFTLENBQUNDLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDVCxLQUFLSTtBQUNuRCIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmtkb3duLWJsb2cvLi9ub2RlX21vZHVsZXMvLnBucG0vZXh0ZW5kLXNoYWxsb3dAMi4wLjEvbm9kZV9tb2R1bGVzL2V4dGVuZC1zaGFsbG93L2luZGV4LmpzPzQyNmUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCdpcy1leHRlbmRhYmxlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0ZW5kKG8vKiwgb2JqZWN0cyovKSB7XG4gIGlmICghaXNPYmplY3QobykpIHsgbyA9IHt9OyB9XG5cbiAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgIGFzc2lnbihvLCBvYmopO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbztcbn07XG5cbmZ1bmN0aW9uIGFzc2lnbihhLCBiKSB7XG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGhhc093bihiLCBrZXkpKSB7XG4gICAgICBhW2tleV0gPSBiW2tleV07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiBga2V5YCBpcyBhbiBvd24gcHJvcGVydHkgb2YgYG9iamAuXG4gKi9cblxuZnVuY3Rpb24gaGFzT3duKG9iaiwga2V5KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpO1xufVxuIl0sIm5hbWVzIjpbImlzT2JqZWN0IiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJleHRlbmQiLCJvIiwibGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiaSIsIm9iaiIsImFzc2lnbiIsImEiLCJiIiwia2V5IiwiaGFzT3duIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/extend-shallow@2.0.1/node_modules/extend-shallow/index.js\n");

/***/ })

};
;