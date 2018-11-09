(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #region GENERAL */\nbody{\n  color: white;\n}\n\n.App{\n  position: relative;\n  z-index: 1;\n}\n\n.overlay {\n  background: -webkit-linear-gradient(342deg, rgb(198, 16, 101),rgba(150, 16, 120, 1) );\n  background: linear-gradient(120grad, rgb(198, 16, 101),rgba(150, 16, 120, 1) );\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n}\n\n/* #endregion */\n\n/* #region TITLE */\n\n.text-pink{\n  color: #c61065;\n}\n\n/* #endregion */\n\n/* #region REGISTER BUTTON */\n\n#registration-form {\n  width: 400px;\n  background: transparent;\n  margin: auto;\n}\n#registration-form > div {\n  position: relative;\n  z-index: 4;\n  background: white;\n  padding: 20px 40px;\n  border-radius: 15px 15px 0 0;\n}\n#registration-form > div h1 {\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  color: #c61065;\n  font-size: 23px;\n  text-transform: uppercase;\n  margin: 0;\n}\n#registration-form > div p {\n  word-spacing: 0px;\n  color: #9facb6;\n  font-size: 16px;\n  margin: 0;\n  margin-top: 5px;\n}\n#registration-form form {\n  position: relative;\n  height: 75px;\n}\n#registration-form .input-section {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  height: 75px;\n  border-radius: 0 0 15px 15px;\n  overflow: hidden;\n  z-index: 2;\n  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.3);\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n}\n#registration-form .input-section.folded {\n  width: 100%;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  z-index: 1;\n}\n#registration-form .input-section.folded input {\n  background-color: #e9e2c0;\n}\n#registration-form .input-section.folded span {\n  background-color: #e9e2c0;\n}\n#registration-form .input-section.folded + .folded {\n  width: 90%;\n  margin-top: 20px;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  z-index: 0;\n}\n#registration-form .input-section.folded + .folded input {\n  background-color: #e1bcef;\n}\n#registration-form .input-section.folded + .folded span {\n  background-color: #e1bcef;\n}\n#registration-form .input-section.fold-up {\n  margin-top: -75px;\n}\n#registration-form form input {\n  background: #fff;\n  color: #8f8fd6;\n  width: 80%;\n  border: 0;\n  padding: 20px 40px;\n  margin: 0;\n}\n#registration-form form input:focus {\n  outline: none;\n}\n#registration-form form input::-webkit-input-placeholder {\n  color: #8f8fd6;\n  font-weight: 100;\n}\n#registration-form form input::-ms-input-placeholder {\n  color: #8f8fd6;\n  font-weight: 100;\n}\n#registration-form form input::placeholder {\n  color: #8f8fd6;\n  font-weight: 100;\n}\n.animated-button {\n  width: 20%;\n  background-color: #b5b5e3;\n}\n.animated-button span {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n  line-height: 75px;\n  text-align: center;\n  height: 75px;\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n}\n.animated-button span i {\n  font-size: 25px;\n  color: #dadaf1;\n}\n.animated-button .next-button {\n  background: transparent;\n  color: #9999f8;\n  font-weight: 100;\n  width: 100%;\n  border: 0;\n}\n.next {\n  margin-top: -75px;\n}\n.success {\n  width: 100%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  left: 50%;\n  -webkit-transform: translate(-50%, 0);\n          transform: translate(-50%, 0);\n  height: 75px;\n  border-radius: 0 0 15px 15px;\n  overflow: hidden;\n  z-index: 2;\n  box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.3);\n  -webkit-transition: all 0.2s ease-in;\n  transition: all 0.2s ease-in;\n  background: limegreen;\n  margin-top: -75px;\n}\n.success p {\n  color: white;\n  font-weight: 900;\n  letter-spacing: 2px;\n  font-size: 18px;\n  width: 100%;\n  text-align: center;\n}\n\n/* #endregion */\n\n/* #region CANDIDATE LIST */\n\n.img-block{\n  margin: auto;\n  width: 250px;\n  height: 250px;  \n  border-radius: 100%;\n  border:2px solid whitesmoke;\n  padding-top: 13px;\n}\n\n.img-block img{\n  background-color: #fff;\n  overflow: hidden;\n  width: 220px;\n  height: 220px;\n  position: relative;\n  border-radius: 100%;\n  display: inline-block;\n  cursor: pointer;\n  box-shadow: 0 1px 1px;\n  background-position: center center;\n  background-size: cover;\n}\n.img-block .hover{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0,0,0,0.4);\n  opacity: 0;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n\n.img-block .hover.voted,.img-block .hover.true,.hover.loading{\n  opacity: 1;\n}\n\n/* #endregion */\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\nbody{\n  background-color: #c61065 !important;\n}\n*/", ""]);

// exports


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./logo.svg */ "./src/logo.svg");
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_CandidateList_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/CandidateList.jsx */ "./src/components/CandidateList.jsx");
/* harmony import */ var _components_Register_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/Register.jsx */ "./src/components/Register.jsx");
/* harmony import */ var _components_List_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/List.jsx */ "./src/components/List.jsx");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! font-awesome/css/font-awesome.min.css */ "./node_modules/font-awesome/css/font-awesome.min.css");
/* harmony import */ var font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_min_css__WEBPACK_IMPORTED_MODULE_12__);





var _jsxFileName = "/Users/loickWPJ/Desktop/Blockchain & Cryptocurrency/Project/app/src/App.js";









var App =
/*#__PURE__*/
function (_Component) {
  Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _Component);

  function App() {
    Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    return Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).apply(this, arguments));
  }

  Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "App",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container zindex-modal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
        className: "my-4 text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, "VOTTY ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), " Blockchain-based voting platform"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        className: "bg-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Register_jsx__WEBPACK_IMPORTED_MODULE_10__["Register"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/CandidateList.jsx":
/*!******************************************!*\
  !*** ./src/components/CandidateList.jsx ***!
  \******************************************/
/*! exports provided: CandidateList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateList", function() { return CandidateList; });
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_voldemort_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/voldemort.jpg */ "./src/components/img/voldemort.jpg");
/* harmony import */ var _img_voldemort_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_voldemort_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _img_darkvador_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/darkvador.jpg */ "./src/components/img/darkvador.jpg");
/* harmony import */ var _img_darkvador_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_img_darkvador_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _img_thanos_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/thanos.jpg */ "./src/components/img/thanos.jpg");
/* harmony import */ var _img_thanos_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_img_thanos_jpg__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/loickWPJ/Desktop/Blockchain & Cryptocurrency/Project/app/src/components/CandidateList.jsx";




var CandidateList =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CandidateList, _React$Component);

  function CandidateList() {
    Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CandidateList);

    return Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CandidateList).apply(this, arguments));
  }

  Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CandidateList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "candidates-list",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "loadContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col text-center candidate mb-4 px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "text-light text-uppercase my-1 font-weight-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Dark Vador"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "img-block mt-2 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_darkvador_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hover false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "loadedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "text-light text-uppercase mt-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "43"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col text-center candidate mb-4 px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "text-light text-uppercase my-1 font-weight-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Thanos"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "img-block mt-2 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_thanos_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hover false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "loadedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, " ")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "text-light text-uppercase mt-1 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "78"))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col text-center candidate mb-4 px-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "text-light text-uppercase my-1 font-weight-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Voldemort"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "img-block mt-2 mb-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _img_voldemort_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "hover false",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "loadedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "text-light text-uppercase mt-1 mb-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "32")))))));
    }
  }]);

  return CandidateList;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/***/ }),

/***/ "./src/components/List.jsx":
/*!*********************************!*\
  !*** ./src/components/List.jsx ***!
  \*********************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/loickWPJ/Desktop/Blockchain & Cryptocurrency/Project/app/src/components/List.jsx";

var List =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(List, _React$Component);

  function List() {
    Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, List);

    return Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(List).apply(this, arguments));
  }

  Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(List, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "listVotes container text-light mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h2", {
        className: "text-uppercase text-light",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, "Last votes")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "input-group  mb-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "input-group mb-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("hr", {
        className: "bg-light line mt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }))));
    }
  }]);

  return List;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/***/ }),

/***/ "./src/components/Register.jsx":
/*!*************************************!*\
  !*** ./src/components/Register.jsx ***!
  \*************************************/
/*! exports provided: Register */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Register", function() { return Register; });
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _CandidateList_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CandidateList.jsx */ "./src/components/CandidateList.jsx");






var _jsxFileName = "/Users/loickWPJ/Desktop/Blockchain & Cryptocurrency/Project/app/src/components/Register.jsx";


var Register =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Register, _React$Component);

  function Register(props) {
    var _this;

    Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Register);

    _this = Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Register).call(this, props));
    _this.state = {
      userId: '',
      //user id 'email'
      session: localStorage.getItem('session'),
      // if logged this will contail the userId email
      voted: localStorage.getItem('voted'),
      // user voted or not
      votedFor: localStorage.getItem('votedFor'),
      // candidate voted for
      loaded: true,
      emptyInput: true,
      isHovered: false,
      clickOnMail: false,
      accountCreated: false,
      loadCandidateList: false
    };
    _this.updateInputIcon = _this.updateInputIcon.bind(Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.handleHover = _this.handleHover.bind(Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    _this.clickOnMail = _this.clickOnMail.bind(Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_loickWPJ_Desktop_Blockchain_Cryptocurrency_Project_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Register, [{
    key: "updateInputIcon",
    value: function updateInputIcon(event) {
      this.setState({
        emptyInput: !event.target.value > 0 ? true : false
      });
    }
  }, {
    key: "handleHover",
    value: function handleHover() {
      this.setState(function (prevState) {
        return {
          isHovered: !prevState.isHovered
        };
      });
    }
  }, {
    key: "clickOnMail",
    value: function clickOnMail() {
      this.setState({
        clickOnMail: true,
        accountCreated: true,
        loadCandidateList: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var btnStyle = this.state.isHovered ? {
        cursor: 'pointer'
      } : {};
      var successStyle = this.state.accountCreated ? {
        marginTop: '0'
      } : {};
      var candidatesLoaded = this.state.loadCandidateList;
      var candidates;

      if (candidatesLoaded) {
        candidates = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_CandidateList_jsx__WEBPACK_IMPORTED_MODULE_7__["CandidateList"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        });
      } else {
        candidates = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        });
      }

      if (this.state.session) {} else {
        //No previous user
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          id: "registration-form",
          className: "py-5",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Sign Up"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "Fill in all informations")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("form", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: this.state.clickOnMail ? 'input-section email-section fold-up' : 'input-section email-section',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          className: "email",
          onChange: this.updateInputIcon,
          type: "email",
          placeholder: "ENTER YOUR E-MAIL HERE",
          autoComplete: "off",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "animated-button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: this.state.emptyInput ? 'icon-paper-plane' : 'icon-paper-plane next',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fa fa-envelope-o",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "next-button email",
          style: btnStyle,
          onMouseEnter: this.handleHover,
          onMouseLeave: this.handleHover,
          onClick: this.clickOnMail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fa fa-arrow-up",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: this.state.clickOnMail ? "input-section password-section folded" : "input-section password-section fold-up",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", {
          className: "password",
          type: "password",
          placeholder: "ENTER YOUR PASSWORD HERE",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
          className: "animated-button",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
          className: "icon-lock",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
          className: "fa fa-lock",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        })))))), candidates);
      }
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/***/ }),

/***/ "./src/components/img/darkvador.jpg":
/*!******************************************!*\
  !*** ./src/components/img/darkvador.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/darkvador.6fef9033.jpg";

/***/ }),

/***/ "./src/components/img/thanos.jpg":
/*!***************************************!*\
  !*** ./src/components/img/thanos.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/thanos.528a2263.jpg";

/***/ }),

/***/ "./src/components/img/voldemort.jpg":
/*!******************************************!*\
  !*** ./src/components/img/voldemort.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/voldemort.f17ee71f.jpg";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/loickWPJ/Desktop/Blockchain & Cryptocurrency/Project/app/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.5d5d9eef.svg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/loickWPJ/Desktop/Blockchain & Cryptocurrency/Project/app/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/loickWPJ/Desktop/Blockchain & Cryptocurrency/Project/app/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",0]]]);
//# sourceMappingURL=main.chunk.js.map