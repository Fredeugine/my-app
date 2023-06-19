import { useState } from 'react';

function Cshooks() {
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

export default Cshooks;