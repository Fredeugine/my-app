import React, { useState } from 'react';
import * as events from "events";
export function Todo(){
    const [items, setItems] = useState([]);
    const [val,setval]=useState('')

function inputVal(event){
    setval(event.target.value)
}
    function createLi() {
        if (items.length > 0) {
            return (
                <ul>
                    {items.map(function (item) {
                            return <li>{item}</li>
                        }
                    )}
                </ul>
            );
        }
        return null;
    }

    return (
        <>
            <input value={val} onChange={inputVal} type={'text'}/>

            <button onClick={(event)=>{
                if (val !== ''){
                    setItems([...items, val])
                }
                setval('')


            }}>Add to List</button>
            {createLi()}
        </>

    )

}