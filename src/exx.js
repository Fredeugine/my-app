import React from "react";

export class Age extends React.Component {
    render() {
        const { age } = this.props;
        if (age > 18){
            return <p>Your age is {age}.</p>;
        }
        else{
            return <p>You are very young!.</p>;
        }

    }
}

export class Welcome extends React.Component {
    render() {

        const { name, age } = this.props;
        if (age > 18 && age < 65 && (name.props.children === "John")) {
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
                    <div><Age age={age} /></div>
                </div>
            );
        }


    }
}


Welcome.defaultProps = {
    name: 'Guest',
    age: '10-20'
};