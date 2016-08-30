import React from 'react'
import { render } from 'react-dom'
import Toast, {show, loading, confirm} from './components/Toast'

class Page extends React.Component {
    constructor() {
        super();
    }

    openToast() {
        show((<h1>html</h1>));
        //this.refs.toast.show((<h1>html</h1>));
    }

    openLoading() {
        loading(true);
        setTimeout(() => loading(false), 2000);
    }

    openConfirm() {
        confirm('您确认要xxx吗', {

        });
    }

    render() {
        return (
            <div>
                <Toast/>
                <button onClick={this.openToast}>open toast</button>
                <button onClick={this.openConfirm}>open confirm</button>
                <button onClick={this.openLoading}>open loading</button>
            </div>
        );
    }
}

render(
    <Page />,
    document.getElementById('main')
);