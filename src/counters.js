import React, { Component } from 'react';


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

export default Counters;