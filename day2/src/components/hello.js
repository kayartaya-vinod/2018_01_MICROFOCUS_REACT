import React from 'react';

export class Hello extends React.Component {

    // the return value from this method is used in place of the component in the UI
    // <Hello></Hello> will be replaced with the return value of this method
    render() {
        // the usage is <Hello username="Vinod" />
        console.log('this.props.username is', this.props.username);
        console.log('rendering the Hello component...', new Date());
        return <div style={{color: "#b6eceb", 
            backgroundColor: "#699293",
            padding: "20px" }}>
            <h1>Hello, {this.props.username}!</h1>
            <hr />
        </div>;
    }
}