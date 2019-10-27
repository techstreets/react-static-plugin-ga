"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _default = function _default(_ref) {
  var id = _ref.id;
  return {
    afterExport: function afterExport(_ref2) {
      var stage = _ref2.stage;

      if (stage === 'prod') {
        if (!id) {
          console.warn('Warning: react-static-plugin-google-analytics - No Google Analytics ID was provided, will not insert GA script.');
        }
      }
    },
    headElements: function headElements(elements, _ref3) {
      var stage = _ref3.stage;

      if (stage === 'prod' && id) {
        return [_react["default"].createElement("script", {
          key: "ga",
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=".concat(id)
        }), _react["default"].createElement("script", {
          key: "gac",
          dangerouslySetInnerHTML: {
            __html: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config', '".concat(id, "');")
          }
        })].concat(_toConsumableArray(elements));
      }

      return elements;
    }
  };
};

exports["default"] = _default;