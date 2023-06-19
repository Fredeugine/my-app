import React, {Component, useEffect, useState} from 'react';

//custom hooks
export function MyComponent (){
    const { counter, increment, decrement, reset } = Count();

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};


export function ClickCounters({onchg}){
    const [count,setCount]= useState(0)
    // useffect for an onchange funtion
    useEffect(function (){
        onchg(count)
    },[count])


    function addOne(){
        setCount(function (prevState){
            return prevState + 1
        })
    }
    return(
        <div>
            <p>This is a function component of the ClickCounter</p>
            <button onClick={addOne}>Click me to Add 1</button>
            <p>Counter: {count}</p>
        </div>
    )
}





export function CounterDisplay ({ countProp }){
    return <h1>Class Count:{countProp}</h1>;
}

class Counters extends Component {
    state = {
        count: this.props.initVal
    };

    componentDidMount() {
        this.countFunc = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count + (this.props.incAm)
            }));
        }, this.props.incInv );
    }

    componentWillUnmount() {
        clearInterval(this.countFunc);
    }

    render() {
        return <CounterDisplay countProp={this.state.count} />;
    }
}
//No, the constructor isn't required since the state properties have been both defined and initialized
//in the same class or state object



// Create a ClickCounter class component that increments a counter
// every time a user clicks on a button. Render both the current
// value of the counter and the button within the ClickCounter component.
export class ClickCounter extends Component{

        state = {
            count: 0
        }

        addOne = () => {
            this.setState(prevState => ({
                count: prevState.count + 1
            }));
        };

    render() {
        return(
            <div>
                <button onClick={this.addOne}>Click me to Add 1</button>
                <p>Counter: {this.state.count}</p>
            </div>
        )
    }
}

export class ClickTracker extends Component {
    state = {
        lastButton: 'B'
    };

    lastClick = (event) =>{

        this.setState({
            lastButton: event.target.innerText
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.lastButton} was clicked last</h1>
                <button onClick={this.lastClick}>Button 1</button>
                <button onClick={this.lastClick}>Button 2</button>
                <button onClick={this.lastClick}>Button 3</button>
            </div>
        );
    }
}

    export default Counters;