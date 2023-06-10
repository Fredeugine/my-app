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