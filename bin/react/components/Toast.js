'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toast = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ConfirmBox = require('./ConfirmBox');

var _ConfirmBox2 = _interopRequireDefault(_ConfirmBox);

var _LoadingBox = require('./LoadingBox');

var _LoadingBox2 = _interopRequireDefault(_LoadingBox);

var _ToastBox = require('./ToastBox');

var _ToastBox2 = _interopRequireDefault(_ToastBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toast = function (_Component) {
    _inherits(Toast, _Component);

    function Toast() {
        _classCallCheck(this, Toast);

        var _this = _possibleConstructorReturn(this, (Toast.__proto__ || Object.getPrototypeOf(Toast)).call(this));

        _this.show = _this.show.bind(_this);
        toastIns = _this; // save instance, for api call
        return _this;
    }

    _createClass(Toast, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                show: false,
                message: ''
            });
        }
    }, {
        key: 'show',
        value: function show(message) {
            var _this2 = this;

            var timeout = arguments.length <= 1 || arguments[1] === undefined ? 1500 : arguments[1];

            this.setState({
                show: true,
                message: message,
                type: 'toast'
            });

            setTimeout(function () {
                if (_this2.state.type === 'toast') {
                    // avoid close loading toast
                    _this2.setState({ show: false });
                }
            }, timeout);
        }
    }, {
        key: 'loading',
        value: function loading(isShow) {
            if (isShow) {
                this.setState({
                    show: true,
                    type: 'loading'
                });
            } else if (this.state.type === 'loading') {
                // avoid close message toast
                this.setState({
                    show: false
                });
            }
        }
    }, {
        key: 'confirm',
        value: function confirm(message) {
            var option = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

            this.setState({
                show: true,
                message: message,
                confirmOption: option,
                type: 'confirm'
            });
        }
    }, {
        key: 'alert',
        value: function alert(message) {
            var option = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var callback = option.callback;

            this.confirm(message, {
                showCancel: false,
                onConfirm: callback
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var content = '';
            if (this.state.show) {
                switch (this.state.type) {
                    case 'toast':
                        content = _react2.default.createElement(_ToastBox2.default, { message: this.state.message });break;
                    case 'loading':
                        content = _react2.default.createElement(_LoadingBox2.default, null);break;
                    case 'confirm':
                        content = _react2.default.createElement(_ConfirmBox2.default, { message: this.state.message,
                            option: this.state.confirmOption,
                            onClose: function onClose() {
                                _this3.setState({ show: false });
                            } });break;
                }
            }

            return _react2.default.createElement(
                'div',
                { className: this.state.show ? 'toast show' : 'toast' },
                content
            );
        }
    }]);

    return Toast;
}(_react.Component);

exports.default = Toast;


var toastIns = null;

function validate() {
    if (!toastIns) {
        throw new Error('add ToastBox to higher Component first');
    }
}

var toast = exports.toast = {
    show: function show() {
        var _toastIns;

        validate();
        (_toastIns = toastIns).show.apply(_toastIns, arguments);
    },
    success: function success() {
        var message = arguments.length <= 0 || arguments[0] === undefined ? '操作成功' : arguments[0];
        var timeout = arguments.length <= 1 || arguments[1] === undefined ? 1500 : arguments[1];

        validate();
        toastIns.show(_react2.default.createElement(
            'div',
            { className: 'success' },
            _react2.default.createElement('span', { className: 'icon icon-check-alt' }),
            message
        ), timeout);
    },
    error: function error() {
        var message = arguments.length <= 0 || arguments[0] === undefined ? '操作失败' : arguments[0];
        var timeout = arguments.length <= 1 || arguments[1] === undefined ? 1500 : arguments[1];

        validate();
        toastIns.show(_react2.default.createElement(
            'div',
            { className: 'error' },
            _react2.default.createElement('span', { className: 'icon icon-x-alt' }),
            message
        ), timeout);
    },
    loading: function loading() {
        var _toastIns2;

        validate();
        (_toastIns2 = toastIns).loading.apply(_toastIns2, arguments);
    },
    confirm: function confirm() {
        var _toastIns3;

        validate();
        (_toastIns3 = toastIns).confirm.apply(_toastIns3, arguments);
    },
    alert: function alert() {
        var _toastIns4;

        validate();
        (_toastIns4 = toastIns).alert.apply(_toastIns4, arguments);
    }
};