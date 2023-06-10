import React, { useState } from 'react';

export function Todo(){
    const [items, setItems] = useState([]);
    const [val,setval]=useState('')

function inputVal(event){
    setval(event.target.value)
}
    function createLi(ItemspropArr,funcRemoveMe) {
        if (ItemspropArr.length > 0) {
            return (
                <ul>
                    {ItemspropArr.map(function (item,index) {
                            return (
                                <div>
                                    <li>{item}</li>
                                    <button onClick={()=>{
                                        funcRemoveMe(index)
                                    }}>Remove me</button>
                                </div>
                            )
                        }
                    )}
                </ul>
            );
        }
        return null;
    }
    function clearList(){
        setItems([])
    }
    function removeMe(index){
        let copyOfItems = [...items]
        copyOfItems.splice(index,1)
        setItems(copyOfItems)
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
            <button onClick={clearList}>Reset List</button>
            //Re
            {createLi(items,removeMe)}
        </>

    )

}