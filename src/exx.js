import React from "react";
import {message} from "./App";


export class Welcome extends React.Component {
    render() {
        const { name } = this.props;
        return <div>
            {message()}
            <p>Welcome, {name}!</p>
        </div>
    }
}
Welcome.defaultProps = {
    name: 'Guest'
};