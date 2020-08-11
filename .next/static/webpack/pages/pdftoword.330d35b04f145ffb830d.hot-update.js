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
              }, 10000);
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
  }, "Convertir de PDF a Word"), __jsx("div", {
    className: "mt-2 mb-2 form-group",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }, apiResponse ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"], {
    variant: "success",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 29
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Alert"].Heading, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, "Felicidades"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, "Tu archivo ha sido convertido exitosamente y se encuentra descargando en este momento."), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }), __jsx("p", {
    className: "mb-0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 33
    }
  }, "DocTransformer 2020.")) : null), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Card"].Text, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
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
      lineNumber: 66,
      columnNumber: 33
    }
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, "Selecciona el archivo que deseas convertir"))), __jsx("div", {
    className: "mb-2 mt-2 ml-5 mr-5",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].File, {
    id: "formcheck-api-custom",
    custom: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 25
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].File.Input, {
    isValid: selectedFile ? true : false,
    onChange: handleFileChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].File.Label, {
    "data-browse": "Seleccionar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 29
    }
  }, selectedFile ? selectedFile.status : 'No has seleccionado un archivo'), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "valid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, "Archivo v\xE1lido"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 29
    }
  }, "Este archivo es invalido"))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGRmdG93b3JkLmpzIl0sIm5hbWVzIjpbIlBERlRvV29yZCIsInVzZVN0YXRlIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwiYXBpUmVzcG9uc2UiLCJzZXRBcGlSZXNwb25zZSIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwicHJldmVudERlZmF1bHQiLCJzdGF0dXMiLCJkYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJheGlvcyIsInBvc3QiLCJyZXNwb25zZSIsImxpbmtTb3VyY2UiLCJkb3dubG9hZExpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJmaWxlTmFtZSIsIkRhdGUiLCJub3ciLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInNldFRpbWVvdXQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUFBLGtCQUVzQkMsc0RBQVEsQ0FBQyxJQUFELENBRjlCO0FBQUEsTUFFWkMsWUFGWTtBQUFBLE1BRUVDLGVBRkY7O0FBQUEsbUJBR29CRixzREFBUSxDQUFDLElBQUQsQ0FINUI7QUFBQSxNQUdaRyxXQUhZO0FBQUEsTUFHQ0MsY0FIRDs7QUFLcEIsTUFBTUMsZ0JBQWdCO0FBQUEsZ01BQUcsaUJBQU1DLENBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCQyxrQkFEaUIsR0FDVkQsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVQsQ0FBZSxDQUFmLENBRFUsRUFFckI7O0FBQ0FILGVBQUMsQ0FBQ0ksY0FBRixHQUhxQixDQUlyQjs7QUFDQUgsa0JBQUksQ0FBQ0ksTUFBTCxHQUFjLHNCQUFkLENBTHFCLENBTXJCOztBQUNBVCw2QkFBZSxDQUFDSyxJQUFE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QTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQ0ksTUFBRSxFQUFDLHNCQURQO0FBRUksVUFBTSxNQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJSSxNQUFDLG9EQUFELENBQU0sSUFBTixDQUFXLEtBQVg7QUFDSSxXQUFPLEVBQUdGLFlBQVksR0FBRyxJQUFILEdBQVUsS0FEcEM7QUFFSSxZQUFRLEVBQUVJLGdCQUZkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQVFJLE1BQUMsb0RBQUQsQ0FBTSxJQUFOLENBQVcsS0FBWDtBQUFpQixtQkFBWSxhQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01KLFlBQVksR0FBR0EsWUFBWSxDQUFDVSxNQUFoQixHQUF5QixnQ0FEM0MsQ0FSSixFQVdJLE1BQUMsb0RBQUQsQ0FBTSxPQUFOLENBQWMsUUFBZDtBQUF1QixRQUFJLEVBQUMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFYSixFQVlJLE1BQUMsb0RBQUQsQ0FBTSxPQUFOLENBQWMsUUFBZDtBQUF1QixRQUFJLEVBQUMsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FaSixDQURKLENBMUJKLENBREosQ0FESixDQURKO0FBaURILENBdkZEOztHQUFNWixTOztLQUFBQSxTO0FBeUZTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wZGZ0b3dvcmQuMzMwZDM1YjA0ZjE0NWZmYjgzMGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ2FyZCwgSW1hZ2UsIEZvcm0sIENvbCwgQWxlcnQgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuIFxyXG5jb25zdCBQREZUb1dvcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgWyBzZWxlY3RlZEZpbGUsIHNldFNlbGVjdGVkRmlsZSBdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbIGFwaVJlc3BvbnNlLCBzZXRBcGlSZXNwb25zZSBdID0gdXNlU3RhdGUobnVsbCk7XHJcbiBcclxuICAgIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSBhc3luYyhlKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgc3VibWlzc2lvblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyBDaGFuZ2Ugc3RhdHVzXHJcbiAgICAgICAgZmlsZS5zdGF0dXMgPSAnQXJjaGl2byBzZWxlY2Npb25hZG8nO1xyXG4gICAgICAgIC8vIFNldHRpbmcgc2VsZWN0ZWRGaWxlXHJcbiAgICAgICAgc2V0U2VsZWN0ZWRGaWxlKGZpbGUpO1xyXG4gICAgICAgIC8vIFJlcXVlc3Rpbmcgc2VydmVyIGFuIHVwbG9hZFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGZvcm1EYXRhIGFuZCBwcmVwYXJpbmcgdG8gc2VuZCByZXF1ZXN0XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgICAgICBkYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpO1xyXG4gICAgICAgICAgICAvLyBTZW5kaW5nIHJlcXVlc3QgdG8gYmFja2VuZFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9kb2NzL3VwbG9hZCcsIGRhdGEpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGluZyBmYWtlIGxpbmtcclxuICAgICAgICAgICAgY29uc3QgbGlua1NvdXJjZSA9IGBkYXRhOmFwcGxpY2F0aW9uL3BkZjtiYXNlNjQsJHtyZXNwb25zZS5kYXRhLmZpbGV9YDtcclxuICAgICAgICAgICAgY29uc3QgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYCR7RGF0ZS5ub3coKX1fY29udmVydGlkby5wZGZgO1xyXG4gICAgICAgICAgICBkb3dubG9hZExpbmsuaHJlZiA9IGxpbmtTb3VyY2U7XHJcbiAgICAgICAgICAgIGRvd25sb2FkTGluay5kb3dubG9hZCA9IGZpbGVOYW1lO1xyXG4gICAgICAgICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgLy8gUmVzcG9uc2UgdG8gY2xpZW50XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRmlsZShudWxsKTtcclxuICAgICAgICAgICAgc2V0QXBpUmVzcG9uc2UoJ0VsIGFyY2hpdm8gaGEgc2lkbyBjb252ZXJ0aWRvIHkgZXN0YSBzaWVuZG8gZGVzY2FyZ2FkbyA6KScpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRBcGlSZXNwb25zZShudWxsKTtcclxuICAgICAgICAgICAgfSwgMTAwMDApO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5Db252ZXJ0aXIgZGUgUERGIGEgV29yZDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgbWItMiBmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXBpUmVzcG9uc2UgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdmFyaWFudD1cInN1Y2Nlc3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQuSGVhZGluZz5GZWxpY2lkYWRlczwvQWxlcnQuSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHUgYXJjaGl2byBoYSBzaWRvIGNvbnZlcnRpZG8gZXhpdG9zYW1lbnRlIHkgc2UgZW5jdWVudHJhIGRlc2NhcmdhbmRvIGVuIGVzdGUgbW9tZW50by5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEb2NUcmFuc2Zvcm1lciAyMDIwLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9ERndhUlpqLnBuZ1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgdGh1bWJuYWlsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWNjaW9uYSBlbCBhcmNoaXZvIHF1ZSBkZXNlYXMgY29udmVydGlyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIG10LTIgbWwtNSBtci01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZvcm1jaGVjay1hcGktY3VzdG9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmlsZS5JbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXsgc2VsZWN0ZWRGaWxlID8gdHJ1ZSA6IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWxlLkxhYmVsIGRhdGEtYnJvd3NlPVwiU2VsZWNjaW9uYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNlbGVjdGVkRmlsZSA/IHNlbGVjdGVkRmlsZS5zdGF0dXMgOiAnTm8gaGFzIHNlbGVjY2lvbmFkbyB1biBhcmNoaXZvJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmlsZS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cInZhbGlkXCI+QXJjaGl2byB2w6FsaWRvPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+RXN0ZSBhcmNoaXZvIGVzIGludmFsaWRvPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBERlRvV29yZDsiXSwic291cmNlUm9vdCI6IiJ9