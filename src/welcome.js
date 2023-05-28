import React, {Component, useEffect} from "react";
import {useState} from "react";

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




export function Counter() {
    const [count, setCount] = useState(0);

    useEffect(function ()  {
       var countInc = setInterval(function() {
            setCount(function (prevCount){
                return prevCount + 1
            });
        }, 1000);

        return () => {
            clearInterval(countInc)
        };
    });

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    );
}

export default Counter;