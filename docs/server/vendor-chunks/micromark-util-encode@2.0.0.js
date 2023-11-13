"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-encode@2.0.0";
exports.ids = ["vendor-chunks/micromark-util-encode@2.0.0"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/micromark-util-encode@2.0.0/node_modules/micromark-util-encode/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/.pnpm/micromark-util-encode@2.0.0/node_modules/micromark-util-encode/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   encode: () => (/* binding */ encode)\n/* harmony export */ });\nconst characterReferences = {\n    '\"': \"quot\",\n    \"&\": \"amp\",\n    \"<\": \"lt\",\n    \">\": \"gt\"\n};\n/**\n * Encode only the dangerous HTML characters.\n *\n * This ensures that certain characters which have special meaning in HTML are\n * dealt with.\n * Technically, we can skip `>` and `\"` in many cases, but CM includes them.\n *\n * @param {string} value\n *   Value to encode.\n * @returns {string}\n *   Encoded value.\n */ function encode(value) {\n    return value.replace(/[\"&<>]/g, replace);\n    /**\n   * @param {string} value\n   * @returns {string}\n   */ function replace(value) {\n        // @ts-expect-error Hush, it’s fine.\n        return \"&\" + characterReferences[value] + \";\";\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbWljcm9tYXJrLXV0aWwtZW5jb2RlQDIuMC4wL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1lbmNvZGUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLHNCQUFzQjtJQUFDLEtBQUs7SUFBUSxLQUFLO0lBQU8sS0FBSztJQUFNLEtBQUs7QUFBSTtBQUUxRTs7Ozs7Ozs7Ozs7Q0FXQyxHQUNNLFNBQVNDLE9BQU9DLEtBQUs7SUFDMUIsT0FBT0EsTUFBTUMsT0FBTyxDQUFDLFdBQVdBO0lBRWhDOzs7R0FHQyxHQUNELFNBQVNBLFFBQVFELEtBQUs7UUFDcEIsb0NBQW9DO1FBQ3BDLE9BQU8sTUFBTUYsbUJBQW1CLENBQUNFLE1BQU0sR0FBRztJQUM1QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFya2Rvd24tYmxvZy8uL25vZGVfbW9kdWxlcy8ucG5wbS9taWNyb21hcmstdXRpbC1lbmNvZGVAMi4wLjAvbm9kZV9tb2R1bGVzL21pY3JvbWFyay11dGlsLWVuY29kZS9pbmRleC5qcz84OTFjIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNoYXJhY3RlclJlZmVyZW5jZXMgPSB7J1wiJzogJ3F1b3QnLCAnJic6ICdhbXAnLCAnPCc6ICdsdCcsICc+JzogJ2d0J31cblxuLyoqXG4gKiBFbmNvZGUgb25seSB0aGUgZGFuZ2Vyb3VzIEhUTUwgY2hhcmFjdGVycy5cbiAqXG4gKiBUaGlzIGVuc3VyZXMgdGhhdCBjZXJ0YWluIGNoYXJhY3RlcnMgd2hpY2ggaGF2ZSBzcGVjaWFsIG1lYW5pbmcgaW4gSFRNTCBhcmVcbiAqIGRlYWx0IHdpdGguXG4gKiBUZWNobmljYWxseSwgd2UgY2FuIHNraXAgYD5gIGFuZCBgXCJgIGluIG1hbnkgY2FzZXMsIGJ1dCBDTSBpbmNsdWRlcyB0aGVtLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBWYWx1ZSB0byBlbmNvZGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICogICBFbmNvZGVkIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5jb2RlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXCImPD5dL2csIHJlcGxhY2UpXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgZnVuY3Rpb24gcmVwbGFjZSh2YWx1ZSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgSHVzaCwgaXTigJlzIGZpbmUuXG4gICAgcmV0dXJuICcmJyArIGNoYXJhY3RlclJlZmVyZW5jZXNbdmFsdWVdICsgJzsnXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJSZWZlcmVuY2VzIiwiZW5jb2RlIiwidmFsdWUiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/micromark-util-encode@2.0.0/node_modules/micromark-util-encode/index.js\n");

/***/ })

};
;