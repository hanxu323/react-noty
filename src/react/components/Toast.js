import React, {Component} from 'react'
import ConfirmBox from './ConfirmBox'
import LoadingBox from './LoadingBox'
import ToastBox from './ToastBox'

export default class Toast extends Component {
    constructor() {
        super();
        this.show = this.show.bind(this);
        toastIns = this; // save instance, for api call
    }

    componentWillMount() {
        this.setState({
            show: false,
            message: ''
        });
    }

    show(message, timeout = 2000) {
        this.setState({
            show: true,
            message,
            type: 'toast'
        });

        setTimeout(() => {
            if (this.state.type === 'toast') { // avoid close loading toast
                this.setState({show: false});
            }
        }, timeout);
    }

    loading(isShow) {
        if (isShow) {
            this.setState({
                show: true,
                type: 'loading'
            });
        } else if (this.state.type === 'loading') { // avoid close message toast
            this.setState({
                show: false
            });
        }
    }

    confirm(message, option = {}) {
        this.setState({
            show: true,
            message: message,
            confirmOption: option,
            type: 'confirm'
        });
    }

    alert(message, option = {}) {
        const {callback} = option;
        this.confirm(message, {
            showCancel: false,
            onConfirm: callback
        });
    }

    render() {
        let content = '';
        if (this.state.show) {
            switch (this.state.type) {
                case 'toast': content = (<ToastBox message={this.state.message}/>); break;
                case 'loading': content = (<LoadingBox />); break;
                case 'confirm': content = (
                    <ConfirmBox message={this.state.message}
                                option={this.state.confirmOption}
                                onClose={() => {this.setState({show: false})}}/>
                ); break;
            }
        }

        return (
            <div className={this.state.show ? 'toast show': 'toast'}>
                {content}
            </div>
        );
    }
}

let toastIns = null;

function validate() {
    if (!toastIns) {
        throw new Error('add ToastBox to higher Component first');
    }
}

export const toast = {
    show: (...args) => {
        validate();
        toastIns.show(...args);
    },
    success: (message = '操作成功', timeout = 1500) => {
        validate();
        toastIns.show((
            <div className='success'>
                <span className='icon icon-check-alt'></span>
                {message}
            </div>
        ), timeout);
    },
    error: (message = '操作失败', timeout = 1500) => {
        validate();
        toastIns.show((
            <div className='error'>
                <span className='icon icon-x-alt'></span>
                {message}
            </div>
        ), timeout);
    },
    loading: (...args) => {
        validate();
        toastIns.loading(...args);
    },
    confirm: (...args) => {
        validate();
        toastIns.confirm(...args);
    },
    alert: (...args) => {
        validate();
        toastIns.alert(...args);
    }
};