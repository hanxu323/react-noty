import React, {Component} from 'react'

export default class LoadingBox extends Component {

    render() {
        return (
            <div className='loading-box'>
                {this.props.message}
            </div>
        );
    }
}