import { useState } from 'react';

export function Cshooks() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange(event) {
        setUsername(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    return {
        username,
        password,
        handleUsernameChange,
        handlePasswordChange,
    };
}


 export const Count = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    const decrement = () => {
        setCounter((prevCounter) => prevCounter - 1);
    };

    const reset = () => {
        setCounter(0);
    };

    return {
        counter,
        increment,
        decrement,
        reset,
    };
};

