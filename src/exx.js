import React from "react";
import {message} from "./App";




export class Age extends React.Component {
    render() {
        const { age } = this.props;
        return <p>Your age is {age}.</p>;
    }
}

export class Welcome extends React.Component {
    render() {
        {message()}
        const { name, age } = this.props;
        return (
            <div>
                <p>Welcome, {name}!</p>
                <Age age={age} />
            </div>
        );
    }
}


Welcome.defaultProps = {
    name: 'Guest',
    age: '10-20'
};