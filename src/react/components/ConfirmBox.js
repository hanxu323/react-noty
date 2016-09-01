import React, {Component} from 'react'

export default class ConfirmBox extends Component {

    render() {
        let {
            onConfirm, showConfirm = true, confirmText = '确定',
            onCancel, showCancel = true, cancelText = '关闭'
            } = this.props.option;
        let confirmBtn = '';
        let cancelBtn = '';

        if (showConfirm) {
            confirmBtn = (
                <button className='btn btn-primary' onClick={() => {
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
                <button className='btn' onClick={() => {
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
                <div className={showConfirm && showCancel ? 'confirm-ft double' : 'confirm-ft'}>
                    {cancelBtn}
                    {confirmBtn}
                </div>
            </div>
        );
    }
}