import {useEffect, useState} from "react";
import React, {useRef} from 'react';


// useRef - Create a `CarDetails` uncontrolled form
export function CarDetailsForm({initialdata}) {
    const formRef = useRef();
    useEffect(function (){



    },[initialdata])
    return (
        <div>
            <form ref={formRef}>
                <h1>Car Details Form</h1>
                <label htmlFor="name">Model</label>
                <input type="text" value={initialdata.model} name="model"/>
                <br/>
                <label htmlFor="age">Year</label>
                <input type="text" value={initialdata.year} name="year"/>
                <br/>
                <label htmlFor="year">Color</label>
                <input type="text" defaultValue={initialdata.year} name="color"/>
                <br/>
                <button onClick={function (){
                    formRef.current.model.value = '';
                    formRef.current.year.value = '';
                    formRef.current.color.value = '';
                }}>reset</button>
            </form>

        </div>
    );
}



// modified  useGithubUser hook
export function useGithubUser(username) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const userData = await response.json();
            await setData(userData);
        }

        fetchData();
    }, [username]);
    const fetchedData = Object.entries(data).map(function ([key, value]) {
            if (key.length < 8) {
                return (
                    <>
                        <li>
                            {key}:<strong>{value}</strong>
                        </li>
                    </>
                )
            }
        }
    );
    return {
        data,
        setData,
        fetchedData,
        username
    }
}

export function FetchData({username}) {
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const userData = await response.json();
            await setData(userData);
        }

        fetchData();
    }, [username]);


    const fetchedData = Object.entries(data).map(function ([key, value]) {
            if (key.length < 8) {
                return (
                    <>
                        <li>
                            {key}:<strong>{value}</strong>
                        </li>
                    </>
                )
            }
        }
    );

    return (
        <div>
            <ul>{fetchedData}</ul>
        </div>
    );
}


function GithubUser({username}) {
    // Your code for rendering individual GithubUser component
    return <div>{username}</div>;
}

export function GithubUserList() {
    const [usernames, setUsernames] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const inputVal = (event) => {
        setInputValue(event.target.value);
    };

    const addInput = () => {
        setUsernames((prevUsernames) => [...prevUsernames, inputValue]);
        setInputValue("");
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={inputVal}/>
            <button onClick={addInput}>Add User</button>
            <div>
                {usernames.map((username) => (
                    <GithubUser key={username} username={username}/>
                ))}
            </div>
        </div>
    );
}

export default GithubUserList;
