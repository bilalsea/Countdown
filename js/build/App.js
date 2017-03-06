"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Clock = require("./Clock");

var _Clock2 = _interopRequireDefault(_Clock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            futureDate: "November 2, 2017",
            NewFutureDate: ""
        };
        return _this;
    }

    _createClass(App, [{
        key: "changeFutureDate",
        value: function changeFutureDate() {
            this.state.NewFutureDate == "" ? alert("please enter some date to change") : this.setState({ futureDate: this.state.NewFutureDate });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "container" },
                _react2.default.createElement(
                    "h1",
                    null,
                    _react2.default.createElement(
                        "span",
                        null,
                        "Countdown App"
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "App" },
                    _react2.default.createElement(
                        "h2",
                        null,
                        "Countdown to ",
                        this.state.futureDate
                    ),
                    _react2.default.createElement(_Clock2.default, { futureDate: this.state.futureDate }),
                    _react2.default.createElement(
                        "div",
                        { className: "inpt" },
                        _react2.default.createElement("input", { className: "input", id: "inpt", type: "text", placeholder: "new date", onChange: function onChange(event) {
                                return _this2.setState({ NewFutureDate: event.target.value });
                            } })
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "btn" },
                        _react2.default.createElement("input", { className: "button", type: "submit", value: "Change", onClick: function onClick() {
                                return _this2.changeFutureDate();
                            } })
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("root"));