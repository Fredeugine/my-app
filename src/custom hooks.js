import { useState,useCallback } from 'react';

export function Chooks() {
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



export function Count() {
    const [counter, setCounter] = useState(0);

    const increment = useCallback(() => {
        setCounter((prevCounter) => prevCounter + 1);
    }, []);

    const decrement = useCallback(() => {
        setCounter((prevCounter) => prevCounter - 1);
    }, []);

    const reset = useCallback(() => {
        setCounter(0);
    }, []);

    return {
        counter,
        increment,
        decrement,
        reset,
    };
}
