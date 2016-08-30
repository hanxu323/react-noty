import React, {Component} from 'react'

export default class ConfirmBox extends Component {

    render() {
        let {
            onConfirm, showConfirm = false, confirmText = '确定',
            onCancel, showCancel = true, cancelText = '关闭'
            } = this.props.option;
        let confirmBtn = '';
        let cancelBtn = '';

        if (showConfirm) {
            confirmBtn = (
                <button onClick={() => {
                    this.props.onClose();
                    if (onConfirm) {
                        onConfirm();
                    }
                }}>
                    {confirmText}
                </button>
            );
        }

        if (showCancel) {
            cancelBtn = (
                <button onClick={() => {
                    this.props.onClose();
                    if (onCancel) {
                        onCancel();
                    }
                }}>
                    {cancelText}
                </button>
            );
        }
        return (
            <div className='confirm-box'>
                <div className='confirm-message'>
                    {this.props.message}
                </div>
                <div className='confirm-ft'>
                    {confirmBtn}
                    {cancelBtn}
                </div>
            </div>
        );
    }
}