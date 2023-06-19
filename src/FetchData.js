import {useEffect, useState} from "react";


export function FetchData({ username }) {
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
        if (key.length < 8){
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



 function GithubUser({ username }) {
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
            <input type="text" value={inputValue} onChange={inputVal} />
            <button onClick={addInput}>Add User</button>
            <div>
                {usernames.map((username) => (
                    <GithubUser key={username} username={username} />
                ))}
            </div>
        </div>
    );
}

export default GithubUserList;
