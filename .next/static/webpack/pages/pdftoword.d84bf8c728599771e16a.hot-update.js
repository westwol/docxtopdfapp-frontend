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
    "class": "form-group",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcGRmdG93b3JkLmpzIl0sIm5hbWVzIjpbIlBERlRvV29yZCIsInVzZVN0YXRlIiwic2VsZWN0ZWRGaWxlIiwic2V0U2VsZWN0ZWRGaWxlIiwiaGFuZGxlRmlsZUNoYW5nZSIsImUiLCJmaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXR1cyIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImF4aW9zIiwicG9zdCIsInJlc3BvbnNlIiwibGlua1NvdXJjZSIsImRvd25sb2FkTGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImZpbGVOYW1lIiwiRGF0ZSIsIm5vdyIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFBQTs7QUFBQSxrQkFFc0JDLHNEQUFRLENBQUMsSUFBRCxDQUY5QjtBQUFBLE1BRVpDLFlBRlk7QUFBQSxNQUVFQyxlQUZGOztBQUlwQixNQUFNQyxnQkFBZ0I7QUFBQSxnTUFBRyxpQkFBTUMsQ0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLGtCQURpQixHQUNWRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVCxDQUFlLENBQWYsQ0FEVSxFQUVyQjs7QUFDQUgsZUFBQyxDQUFDSSxjQUFGLEdBSHFCLENBSXJCOztBQUNBSCxrQkFBSSxDQUFDSSxNQUFMLEdBQWMsc0JBQWQsQ0FMcUIsQ0FNckI7O0FBQ0FQLDZCQUFlLENBQUNHLElBQUQsQ0FBZixDQVBxQixDQVFyQjs7QUFScUI7QUFVakI7QUFDTUssa0JBWFcsR0FXSixJQUFJQyxRQUFKLEVBWEk7QUFZakJELGtCQUFJLENBQUNFLE1BQUwsQ0FBWSxNQUFaLEVBQW9CUCxJ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QUE7QUFBQSxLQUNJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBZkosQ0FaSixDQURKLENBREosQ0FESjtBQXNDSCxDQXJFRDs7R0FBTVYsUzs7S0FBQUEsUztBQXVFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcGRmdG93b3JkLmQ4NGJmOGM3Mjg1OTk3NzFlMTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyLCB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHsgQ2FyZCwgSW1hZ2UsIEZvcm0sIENvbCB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG4gXHJcbmNvbnN0IFBERlRvV29yZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbIHNlbGVjdGVkRmlsZSwgc2V0U2VsZWN0ZWRGaWxlIF0gPSB1c2VTdGF0ZShudWxsKTtcclxuIFxyXG4gICAgY29uc3QgaGFuZGxlRmlsZUNoYW5nZSA9IGFzeW5jKGUpID0+IHtcclxuICAgICAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBzdWJtaXNzaW9uXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIC8vIENoYW5nZSBzdGF0dXNcclxuICAgICAgICBmaWxlLnN0YXR1cyA9ICdBcmNoaXZvIHNlbGVjY2lvbmFkbyc7XHJcbiAgICAgICAgLy8gU2V0dGluZyBzZWxlY3RlZEZpbGVcclxuICAgICAgICBzZXRTZWxlY3RlZEZpbGUoZmlsZSk7XHJcbiAgICAgICAgLy8gUmVxdWVzdGluZyBzZXJ2ZXIgYW4gdXBsb2FkXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRpbmcgZm9ybURhdGEgYW5kIHByZXBhcmluZyB0byBzZW5kIHJlcXVlc3RcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXHJcbiAgICAgICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSk7XHJcbiAgICAgICAgICAgIC8vIFNlbmRpbmcgcmVxdWVzdCB0byBiYWNrZW5kXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2RvY3MvdXBsb2FkJywgZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIENyZWF0aW5nIGZha2UgbGlua1xyXG4gICAgICAgICAgICBjb25zdCBsaW5rU291cmNlID0gYGRhdGE6YXBwbGljYXRpb24vcGRmO2Jhc2U2NCwke3Jlc3BvbnNlLmRhdGEuZmlsZX1gO1xyXG4gICAgICAgICAgICBjb25zdCBkb3dubG9hZExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBgJHtEYXRlLm5vdygpfV9jb252ZXJ0aWRvLnBkZmA7XHJcbiAgICAgICAgICAgIGRvd25sb2FkTGluay5ocmVmID0gbGlua1NvdXJjZTtcclxuICAgICAgICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gZmlsZU5hbWU7XHJcbiAgICAgICAgICAgIGRvd25sb2FkTGluay5jbGljaygpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZT5Db252ZXJ0aXIgZGUgUERGIGEgV29yZDwvQ2FyZC5UaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9ERndhUlpqLnBuZ1wiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgdGh1bWJuYWlsIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWNjaW9uYSBlbCBhcmNoaXZvIHF1ZSBkZXNlYXMgY29udmVydGlyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIG10LTIgbWwtNSBtci01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkZpbGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImZvcm1jaGVjay1hcGktY3VzdG9tXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmlsZS5JbnB1dCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkPXsgc2VsZWN0ZWRGaWxlID8gdHJ1ZSA6IGZhbHNlIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRmlsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWxlLkxhYmVsIGRhdGEtYnJvd3NlPVwiU2VsZWNjaW9uYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNlbGVjdGVkRmlsZSA/IHNlbGVjdGVkRmlsZS5zdGF0dXMgOiAnTm8gaGFzIHNlbGVjY2lvbmFkbyB1biBhcmNoaXZvJyB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uRmlsZS5MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wuRmVlZGJhY2sgdHlwZT1cInZhbGlkXCI+QXJjaGl2byB2w6FsaWRvPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5Db250cm9sLkZlZWRiYWNrIHR5cGU9XCJpbnZhbGlkXCI+RXN0ZSBhcmNoaXZvIGVzIGludmFsaWRvPC9Gb3JtLkNvbnRyb2wuRmVlZGJhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvYXN0Q29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBERlRvV29yZDsiXSwic291cmNlUm9vdCI6IiJ9