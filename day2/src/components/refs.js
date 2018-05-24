import React from 'react';

export class RefsDemo extends React.Component {

    sayHello(){
        console.log(this.refs);
        let name = this.refs.txtUsername.value;
        this.refs.message.innerHTML = `<h3>Hello, ${name}!</h3>`;
        this.refs.txtUsername.value = '';
        this.refs.txtUsername.focus();
    }

    render() {
        return (
            <div>
                <h1>React 'refs' example</h1>
                <h3>Enter your name: </h3>
                <input type="text" ref="txtUsername" />
                <button ref="btn1" onClick={this.sayHello.bind(this)}>Say Hello</button>
                <div ref="message">This is where you get hello message</div>
            </div>
        );
    }
}