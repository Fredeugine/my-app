import React from "react";


export class Age extends React.Component {
    render() {
        const { age } = this.props;
        return <p>Your age is {age}.</p>;
    }
}

export class Welcome extends React.Component {
    render() {

        const { name, age } = this.props;
        //if prop is present
        if (age){
            return (
                <div>
                    <p>Welcome, {name}!</p>
                    <div><Age age={age} /></div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p>Welcome, {name}!</p>
                </div>
            );
        }


    }
}

