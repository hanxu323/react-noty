import React from 'react'
import { render } from 'react-dom'
import Toast, {toast} from './components/Toast'

class Page extends React.Component {
    constructor() {
        super();
    }

    openToast() {
        toast.show((<h1>html</h1>));
    }

    openSuccess() {
        toast.success("success");
    }
    openError() {
        toast.error("failed");
    }

    openLoading() {
        toast.loading(true, (<h2><strong>loading...</strong></h2>));
        setTimeout(() => toast.loading(false), 200000);
    }

    openConfirm() {
        toast.confirm('confirm message');
    }

    openAlert() {
        toast.alert('alert message');
    }

    render() {
        return (
            <div>
                <Toast/>
                <button onClick={this.openToast}>open toast</button>
                <button onClick={this.openConfirm}>open confirm</button>
                <button onClick={this.openLoading}>open loading</button>
                <button onClick={this.openSuccess}>success</button>
                <button onClick={this.openError}>error</button>
                <button onClick={this.openAlert}>alert</button>
            </div>
        );
    }
}

render(
    <Page />,
    document.getElementById('main')
);