import React, {Component} from 'react'

export default class ToastBox extends Component {

    render() {
        return (
            <div className='toast-box'>
                {this.props.message}
            </div>
        );
    }
}