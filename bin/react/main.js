'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Toast = require('./components/Toast');

var _Toast2 = _interopRequireDefault(_Toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Page = function (_React$Component) {
    _inherits(Page, _React$Component);

    function Page() {
        _classCallCheck(this, Page);

        return _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));
    }

    _createClass(Page, [{
        key: 'openToast',
        value: function openToast() {
            _Toast.toast.show(_react2.default.createElement(
                'h1',
                null,
                'html'
            ));
        }
    }, {
        key: 'openSuccess',
        value: function openSuccess() {
            _Toast.toast.success("success");
        }
    }, {
        key: 'openError',
        value: function openError() {
            _Toast.toast.error("failed");
        }
    }, {
        key: 'openLoading',
        value: function openLoading() {
            _Toast.toast.loading(true, _react2.default.createElement(
                'h2',
                null,
                _react2.default.createElement(
                    'strong',
                    null,
                    'loading...'
                )
            ));
            setTimeout(function () {
                return _Toast.toast.loading(false);
            }, 200000);
        }
    }, {
        key: 'openConfirm',
        value: function openConfirm() {
            _Toast.toast.confirm('confirm message');
        }
    }, {
        key: 'openAlert',
        value: function openAlert() {
            _Toast.toast.alert('alert message');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Toast2.default, null),
                _react2.default.createElement(
                    'button',
                    { onClick: this.openToast },
                    'open toast'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.openConfirm },
                    'open confirm'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.openLoading },
                    'open loading'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.openSuccess },
                    'success'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.openError },
                    'error'
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.openAlert },
                    'alert'
                )
            );
        }
    }]);

    return Page;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(Page, null), document.getElementById('main'));