import React, {Component} from "react";


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

export class Login extends Component {
    state = {
        user: '',
        pass: '',
        notEmpty: true
    };

    handleUsername = (event) => {
        const username = event.target.value;
        const password = this.state.pass;

        this.setState({
            user: username,
            notEmpty: password === ''
        });
    };

    handlePass = (event) => {
        const password = event.target.value;
        const username = this.state.user;

        this.setState({
            pass: password,
            notEmpty: username === ''
        });
    };
    reset = ()=>{
        this.setState({
            pass: '',
            user: '',
            notEmpty: true
        });
    };


    render() {
        return (
            <div>
                <label>Username: </label>
                <input autoFocus={true} type="text" onChange={this.handleUsername} />
                <label>Password: </label>
                <input  type="text" onChange={this.handlePass} />
                <button disabled={this.state.notEmpty}>Login</button>
                <button onClick={this.reset}>Reset everything</button>
            </div>
        );
    }
}