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
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Marcos\\Documents\\Portfolio\\docxtopdfapp\\pages\\pdftoword.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var PDFToWord = function PDFToWord() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedFile = _useState[0],
      setSelectedFile = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      apiResponse = _useState2[0],
      setApiResponse = _useState2[1];

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
              downloadLink.click(); // Response to client

              setSelectedFile(null);
              setApiResponse('El archivo ha sido convertido y esta siendo descargado :)');
              setTimeout(function () {
                setApiResponse(null);
              }, 3000);
              _context.next = 24;
              break;

            case 21:
              _context.prev = 21;
              _context.t0 = _context["catch"](4);
              console.log(_context.t0);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 21]]);
    }));

    return function handleFileChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Body, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Title, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Convertir de PDF a Word"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "https://i.imgur.com/DFwaRZj.png",
    width: "400",
    height: "400",
    thumbnail: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }, "Selecciona el archivo que deseas convertir"))), __jsx("div", {
    className: "mb-2 mt-2 ml-5 mr-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].File, {
    id: "formcheck-api-custom",
    custom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].File.Input, {
    isValid: selectedFile ? true : false,
    onChange: handleFileChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].File.Label, {
    "data-browse": "Seleccionar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, selectedFile ? selectedFile.status : 'No has seleccionado un archivo'), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "valid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }, "Archivo v\xE1lido"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, "Este archivo es invalido")), __jsx("div", {
    className: "form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, apiResponse)))));
};

_s(PDFToWord, "Z2i6pl75X5YF1GpxKKxre+0rwcA=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGRmdG93b3JkLmpzIl0sIm5hbWVzIjpbIlBERlRvV29yZCIsInVzZVN0YXRlIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwiYXBpUmVzcG9uc2UiLCJzZXRBcGlSZXNwb25zZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicHJldmVudERlZmF1bHQiLCJzdGF0dXMiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImxpbmtTb3VyY2UiLCJkb3dubG9hZExpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmaWxlTmFtZSIsIkRhdGUiLCJub3ciLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUVzQkMsc0RBQVEsQ0FBQyxJQUFELENBRjlCO0FBQUEsTUFFWkMsWUFGWTtBQUFBLE1BRUVDLGVBRkY7O0FBQUEsbUJBR29CRixzREFBUSxDQUFDLElBQUQsQ0FINUI7QUFBQSxNQUdaRyxXQUhZO0FBQUEsTUFHQ0MsY0FIRDs7QUFLcEIsTUFBTUMsZ0JBQWdCO0FBQUEsZ01BQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxrQkFEaUIsR0FDVkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBRFUsRUFFckI7O0FBQ0FILGVBQUMsQ0FBQ0ksY0FBRixHQUhxQixDQUlyQjs7QUFDQUgsa0JBQUksQ0FBQ0ksTUFBTCxHQUFjLHNCQUFkLENBTHFCLENBTXJCOztBQUNBVCw2QkFBZSxDQUFDSyxJQUFE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Q0FSSixFQVdJLE1BQUMsb0RBQUQsQ0FBTSxPQUFOLENBQWMsUUFBZDtBQUF1QixRQUFJLEVBQUMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFYSixFQVlJLE1BQUMsb0RBQUQsQ0FBTSxPQUFOLENBQWMsUUFBZDtBQUF1QixRQUFJLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FaSixDQURKLEVBZUk7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01SLFdBRE4sQ0FmSixDQVpKLENBREosQ0FESixDQURKO0FBc0NILENBNUVEOztHQUFNSixTOztLQUFBQSxTO0FBOEVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZGZ0b3dvcmQuMGEwZWRjZTIzNTMzYTA3NWNiM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ2FyZCwgSW1hZ2UsIEZvcm0sIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG4gXHJcbmNvbnN0IFBERlRvV29yZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbIHNlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFsgYXBpUmVzcG9uc2UsIHNldEFwaVJlc3BvbnNlIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuIFxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXNzaW9uXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIENoYW5nZSBzdGF0dXNcclxuICAgICAgICBmaWxlLnN0YXR1cyA9ICdBcmNoaXZvIHNlbGVjY2lvbmFkbyc7XHJcbiAgICAgICAgLy8gU2V0dGluZyBzZWxlY3RlZEZpbGVcclxuICAgICAgICBzZXRTZWxlY3RlZEZpbGUoZmlsZSk7XHJcbiAgICAgICAgLy8gUmVxdWVzdGluZyBzZXJ2ZXIgYW4gdXBsb2FkXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRpbmcgZm9ybURhdGEgYW5kIHByZXBhcmluZyB0byBzZW5kIHJlcXVlc3RcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICAgICAgICAgIC8vIFNlbmRpbmcgcmVxdWVzdCB0byBiYWNrZW5kXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2RvY3MvdXBsb2FkJywgZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGZha2UgbGlua1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rU291cmNlID0gYGRhdGE6YXBwbGljYXRpb24vcGRmO2Jhc2U2NCwke3Jlc3BvbnNlLmRhdGEuZmlsZX1gO1xyXG4gICAgICAgICAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBgJHtEYXRlLm5vdygpfV9jb252ZXJ0aWRvLnBkZmA7XHJcbiAgICAgICAgICAgIGRvd25sb2FkTGluay5ocmVmID0gbGlua1NvdXJjZTtcclxuICAgICAgICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gZmlsZU5hbWU7XHJcbiAgICAgICAgICAgIGRvd25sb2FkTGluay5jbGljaygpO1xyXG4gICAgICAgICAgICAvLyBSZXNwb25zZSB0byBjbGllbnRcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRGaWxlKG51bGwpO1xyXG4gICAgICAgICAgICBzZXRBcGlSZXNwb25zZSgnRWwgYXJjaGl2byBoYSBzaWRvIGNvbnZlcnRpZG8geSBlc3RhIHNpZW5kbyBkZXNjYXJnYWRvIDopJylcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHNldEFwaVJlc3BvbnNlKG51bGwpO1xyXG4gICAgICAgICAgICB9LCAzMDAwKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGl0bGU+Q29udmVydGlyIGRlIFBERiBhIFdvcmQ8L0NhcmQuVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmQuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vaS5pbWd1ci5jb20vREZ3YVJaai5wbmdcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjQwMFwiIHRodW1ibmFpbCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjY2lvbmEgZWwgYXJjaGl2byBxdWUgZGVzZWFzIGNvbnZlcnRpclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBtdC0yIG1sLTUgbXItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWxlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJmb3JtY2hlY2stYXBpLWN1c3RvbVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGUuSW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZD17IHNlbGVjdGVkRmlsZSA/IHRydWUgOiBmYWxzZSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmlsZS5MYWJlbCBkYXRhLWJyb3dzZT1cIlNlbGVjY2lvbmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzZWxlY3RlZEZpbGUgPyBzZWxlY3RlZEZpbGUuc3RhdHVzIDogJ05vIGhhcyBzZWxlY2Npb25hZG8gdW4gYXJjaGl2bycgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Gb3JtLkZpbGUuTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJ2YWxpZFwiPkFyY2hpdm8gdsOhbGlkbzwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbC5GZWVkYmFjayB0eXBlPVwiaW52YWxpZFwiPkVzdGUgYXJjaGl2byBlcyBpbnZhbGlkbzwvRm9ybS5Db250cm9sLkZlZWRiYWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmlsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGFwaVJlc3BvbnNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUERGVG9Xb3JkOyJdLCJzb3VyY2VSb290IjoiIn0=