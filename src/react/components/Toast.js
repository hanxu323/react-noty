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
            message: '',
            overlay: true
        });
    }

    show(message, timeout = 1500) {
        this.setState({
            show: true,
            overlay: true,
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
                overlay: false,
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
            overlay: false,
            message: message,
            confirmOption: option,
            type: 'confirm'
        });
    }

    render() {
        let content = '';
        let overlay = '';
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

            if (this.state.overlay) {
                overlay = (<div className='overlay'></div>);
            }
        }

        return (
            <div className='toast'>
                {overlay}
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

export function show(...args) {
    validate();
    toastIns.show(...args);
}

export function loading(...args) {
    validate();
    toastIns.loading(...args);
}

export function confirm(...args) {
    validate();
    toastIns.confirm(...args);
}