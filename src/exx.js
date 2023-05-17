import React from "react";
import {message} from "./App";


export class Welcome extends React.Component {
    render() {
        const { name,age } = this.props;
        return <div>
            {message()}
            <p>Welcome, {name}!</p>
            <p>Your age is {age}</p>
        </div>
    }
}

Welcome.defaultProps = {
    name: 'Guest',
    age: '10-20'
};