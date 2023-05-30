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

// Create an InteractiveWelcome component that renders an input tag and the Welcome component.
//     Pass the current content of the input tag to the name prop of the Welcome component.
//     The input tag should be a controlled component.

export class InteractiveWelcome extends Component{
    state = {
        inputVal : ''
    }
    contComp = (event)=>{
        this.setState({inputVal: event.target.value})
    }

    render() {
        return(
            <div>
                <label>What is your name: </label>
                <input  value={this.state.inputVal} onChange={this.contComp} type={"text"}/>
                <Welcome name={this.state.inputVal}></Welcome>

            </div>
        )
    }
}


export function Counter({initVal,incInv,incAm}) {
    const [count, setCount] = useState(initVal);

    useEffect(function ()  {
       let countInc = setInterval(function() {
            setCount(function (prevCount){
                return prevCount + incAm
            });
        }, incInv);

        return function () {
            clearInterval(countInc)
        };
    });

    return (
       <CounterDisplay counts={count}></CounterDisplay>
    );
}

export function CounterDisplay({counts}){
    return(
        <div>
            <h1>Function Count: {counts}</h1>
        </div>
    )
}