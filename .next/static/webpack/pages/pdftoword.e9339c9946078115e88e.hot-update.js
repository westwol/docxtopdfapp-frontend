webpackHotUpdate_N_E("pages/pdftoword",{

/***/ "./pages/pdftoword.js":
/*!****************************!*\
  !*** ./pages/pdftoword.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Marcos\\Documents\\Portfolio\\docxtopdfapp\\pages\\pdftoword.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;






var PDFToWord = function PDFToWord() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedFile = _useState[0],
      setSelectedFile = _useState[1];

  var handleFileChange = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var file, data, response, linkSource, downloadLink, fileName;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              file = e.target.files[0]; // Prevent default submission

              e.preventDefault(); // Change status

              file.status = 'Archivo seleccionado'; // Setting selectedFile

              setSelectedFile(file); // Requesting server an upload

              _context.prev = 4;
              // Creating formData and preparing to send request
              data = new FormData();
              data.append('file', file); // Sending request to backend

              _context.next = 9;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:4000/docs/upload', data);

            case 9:
              response = _context.sent;
              // Creating fake link
              linkSource = "data:application/pdf;base64,".concat(response.data.file);
              downloadLink = document.createElement("a");
              fileName = "".concat(Date.now(), "_convertido.pdf");
              downloadLink.href = linkSource;
              downloadLink.download = fileName;
              downloadLink.click();
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](4);
              console.log(_context.t0);

            case 21:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 18]]);
    }));

    return function handleFileChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "Convertir de PDF a Word"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    src: "https://i.imgur.com/DFwaRZj.png",
    width: "400",
    height: "400",
    thumbnail: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Selecciona el archivo que deseas convertir"))), __jsx("div", {
    className: "mb-2 mt-2 ml-5 mr-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].File, {
    id: "formcheck-api-custom",
    custom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].File.Input, {
    isValid: selectedFile ? true : false,
    onChange: handleFileChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].File.Label, {
    "data-browse": "Seleccionar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 29
    }
  }, selectedFile ? selectedFile.status : 'No has seleccionado un archivo'), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
    type: "valid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, "Archivo v\xE1lido"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__["Form"].Control.Feedback, {
    type: "invalid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, "Este archivo es invalido")), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 25
    }
  }, __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_4__["ToastContainer"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 29
    }
  }))))));
};

_s(PDFToWord, "DZWv9APyWJnRCboN653J9EoqCMs=");

_c = PDFToWord;
/* harmony default export */ __webpack_exports__["default"] = (PDFToWord);

var _c;

$RefreshReg$(_c, "PDFToWord");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGRmdG93b3JkLmpzIl0sIm5hbWVzIjpbIlBERlRvV29yZCIsInVzZVN0YXRlIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXR1cyIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImF4aW9zIiwicG9zdCIsInJlc3BvbnNlIiwibGlua1NvdXJjZSIsImRvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZpbGVOYW1lIiwiRGF0ZSIsIm5vdyIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFc0JDLHNEQUFRLENBQUMsSUFBRCxDQUY5QjtBQUFBLE1BRVpDLFlBRlk7QUFBQSxNQUVFQyxlQUZGOztBQUlwQixNQUFNQyxnQkFBZ0I7QUFBQSxnTUFBRyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLGtCQURpQixHQUNWRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FEVSxFQUVyQjs7QUFDQUgsZUFBQyxDQUFDSSxjQUFGLEdBSHFCLENBSXJCOztBQUNBSCxrQkFBSSxDQUFDSSxNQUFMLEdBQWMsc0JBQWQsQ0FMcUIsQ0FNckI7O0FBQ0FQLDZCQUFlLENBQUNHLElBQUQsQ0FBZixDQVBxQixDQVFyQjs7QUFScUI7QUFVakI7QUFDTUssa0JBWFcsR0FXSixJQUFJQyxRQUFKLEVBWEk7QUFZakJELGtCQUFJLENBQUNFLE1BQUwsQ0FBWSxNQUFaLEVBQW9CUCxJ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QUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FmSixDQVpKLENBREosQ0FESixDQURKO0FBc0NILENBckVEOztHQUFNVixTOztLQUFBQSxTO0FBdUVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZGZ0b3dvcmQuZTkzMzljOTk0NjA3ODExNWU4OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIsIHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xyXG5pbXBvcnQgeyBDYXJkLCBJbWFnZSwgRm9ybSwgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbiBcclxuY29uc3QgUERGVG9Xb3JkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFsgc2VsZWN0ZWRGaWxlLCBzZXRTZWxlY3RlZEZpbGUgXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gXHJcbiAgICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gYXN5bmMoZSkgPT4ge1xyXG4gICAgICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcbiAgICAgICAgLy8gUHJldmVudCBkZWZhdWx0IHN1Ym1pc3Npb25cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy8gQ2hhbmdlIHN0YXR1c1xyXG4gICAgICAgIGZpbGUuc3RhdHVzID0gJ0FyY2hpdm8gc2VsZWNjaW9uYWRvJztcclxuICAgICAgICAvLyBTZXR0aW5nIHNlbGVjdGVkRmlsZVxyXG4gICAgICAgIHNldFNlbGVjdGVkRmlsZShmaWxlKTtcclxuICAgICAgICAvLyBSZXF1ZXN0aW5nIHNlcnZlciBhbiB1cGxvYWRcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGluZyBmb3JtRGF0YSBhbmQgcHJlcGFyaW5nIHRvIHNlbmQgcmVxdWVzdFxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKClcclxuICAgICAgICAgICAgZGF0YS5hcHBlbmQoJ2ZpbGUnLCBmaWxlKTtcclxuICAgICAgICAgICAgLy8gU2VuZGluZyByZXF1ZXN0IHRvIGJhY2tlbmRcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjQwMDAvZG9jcy91cGxvYWQnLCBkYXRhKTtcclxuICAgICAgICAgICAgLy8gQ3JlYXRpbmcgZmFrZSBsaW5rXHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmtTb3VyY2UgPSBgZGF0YTphcHBsaWNhdGlvbi9wZGY7YmFzZTY0LCR7cmVzcG9uc2UuZGF0YS5maWxlfWA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGAke0RhdGUubm93KCl9X2NvbnZlcnRpZG8ucGRmYDtcclxuICAgICAgICAgICAgZG93bmxvYWRMaW5rLmhyZWYgPSBsaW5rU291cmNlO1xyXG4gICAgICAgICAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBmaWxlTmFtZTtcclxuICAgICAgICAgICAgZG93bmxvYWRMaW5rLmNsaWNrKCk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRpdGxlPkNvbnZlcnRpciBkZSBQREYgYSBXb3JkPC9DYXJkLlRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL0RGd2FSWmoucG5nXCIgd2lkdGg9XCI0MDBcIiBoZWlnaHQ9XCI0MDBcIiB0aHVtYm5haWwgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY2Npb25hIGVsIGFyY2hpdm8gcXVlIGRlc2VhcyBjb252ZXJ0aXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgbXQtMiBtbC01IG1yLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmlsZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZm9ybWNoZWNrLWFwaS1jdXN0b21cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWxlLklucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ9eyBzZWxlY3RlZEZpbGUgPyB0cnVlIDogZmFsc2UgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGUuTGFiZWwgZGF0YS1icm93c2U9XCJTZWxlY2Npb25hclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2VsZWN0ZWRGaWxlID8gc2VsZWN0ZWRGaWxlLnN0YXR1cyA6ICdObyBoYXMgc2VsZWNjaW9uYWRvIHVuIGFyY2hpdm8nIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWxlLkxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwidmFsaWRcIj5BcmNoaXZvIHbDoWxpZG88L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cImludmFsaWRcIj5Fc3RlIGFyY2hpdm8gZXMgaW52YWxpZG88L0Zvcm0uQ29udHJvbC5GZWVkYmFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBERlRvV29yZDsiXSwic291cmNlUm9vdCI6IiJ9