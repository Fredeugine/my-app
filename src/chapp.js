import React from 'react';
import Cshooks from "./custom hooks";

function MyFormComponent() {
    //instantiating custom hooks
    const { username, password, handleUsernameChange, handlePasswordChange } =  Cshooks();

    function handleSubmit(event) {
        event.preventDefault();
        // Handle form submission with username and password
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" value={username} onChange={handleUsernameChange} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MyFormComponent;