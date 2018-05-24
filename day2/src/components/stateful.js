import React from 'react';



export class Stateful extends React.Component {
    constructor() {
        super();
        this.state = {
            clickCount: 0
        };
    }

    incrementClickCount() {
        let val = this.state.clickCount;
        this.setState({ clickCount: val + 1 });
    }

    render() {
        return (
            <div>
                <h1>Stateful Component Demo</h1>
                <hr />

                <button onClick={this.incrementClickCount.bind(this)} >Hit</button>

                <button onClick={() => {
                    let val = this.state.clickCount;
                    this.setState({ clickCount: val + 1 });
                }} >Click</button>
                <h3>You have clicked the button {this.state.clickCount} times</h3>
            </div>
        );
    }
}