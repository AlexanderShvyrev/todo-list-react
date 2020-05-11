import React, {useState} from 'react'

function Add({addTask}) {
    const[value, setValue]=useState("");
    const handleBanana=(e)=>{
        e.preventDefault();
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleBanana}>
            <input class="form-control" type="text" placeholder="Add a new task" value={value} onChange={(e)=>setValue(e.target.value)}></input>
        </form>
    )
}
export default Add;