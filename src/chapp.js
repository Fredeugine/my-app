import React from 'react';
import {Chooks} from "./custom hooks";
import {useGithubUser} from "./FetchData";

export function MyFormComponent() {
    //instantiating custom hooks
    const { username, password, handleUsernameChange, handlePasswordChange } =  Chooks();

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


// Extract the logic to fetch a Github user's data from the GithubUser component into a custom hook called useGithubUser.
export function ShowUser(){
    const {data,setData,fetchedData,username} = useGithubUser('lucy')

    return(
        <>
            {fetchedData}
        </>
    )
}

//Custom Hooks - useCounter