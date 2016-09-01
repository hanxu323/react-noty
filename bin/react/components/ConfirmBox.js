'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmBox = function (_Component) {
    _inherits(ConfirmBox, _Component);

    function ConfirmBox() {
        _classCallCheck(this, ConfirmBox);

        return _possibleConstructorReturn(this, (ConfirmBox.__proto__ || Object.getPrototypeOf(ConfirmBox)).apply(this, arguments));
    }

    _createClass(ConfirmBox, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props$option = this.props.option;
            var onConfirm = _props$option.onConfirm;
            var _props$option$showCon = _props$option.showConfirm;
            var showConfirm = _props$option$showCon === undefined ? true : _props$option$showCon;
            var _props$option$confirm = _props$option.confirmText;
            var confirmText = _props$option$confirm === undefined ? '确定' : _props$option$confirm;
            var onCancel = _props$option.onCancel;
            var _props$option$showCan = _props$option.showCancel;
            var showCancel = _props$option$showCan === undefined ? true : _props$option$showCan;
            var _props$option$cancelT = _props$option.cancelText;
            var cancelText = _props$option$cancelT === undefined ? '关闭' : _props$option$cancelT;

            var confirmBtn = '';
            var cancelBtn = '';

            if (showConfirm) {
                confirmBtn = _react2.default.createElement(
                    'button',
                    { className: 'btn btn-primary', onClick: function onClick() {
                            _this2.props.onClose();
                            if (onConfirm) {
                                onConfirm();
                            }
                        } },
                    confirmText
                );
            }

            if (showCancel) {
                cancelBtn = _react2.default.createElement(
                    'button',
                    { className: 'btn', onClick: function onClick() {
                            _this2.props.onClose();
                            if (onCancel) {
                                onCancel();
                            }
                        } },
                    cancelText
                );
            }
            return _react2.default.createElement(
                'div',
                { className: 'confirm-box' },
                _react2.default.createElement(
                    'div',
                    { className: 'confirm-message' },
                    this.props.message
                ),
                _react2.default.createElement(
                    'div',
                    { className: showConfirm && showCancel ? 'confirm-ft double' : 'confirm-ft' },
                    cancelBtn,
                    confirmBtn
                )
            );
        }
    }]);

    return ConfirmBox;
}(_react.Component);

exports.default = ConfirmBox;