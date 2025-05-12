import { useState } from "react";

let Message =()=>{
    let [val,setval] = useState('Hello');

    let GM =()=>{
        setval("GOOD MORNING")
    }
    let GA =()=>{
        setval("GOOD AFTERNOON")
    }
    let GE =()=>{
        setval("GOOD EVENING")
    }
    let GN =()=>{
        setval("GOOD NIGHT")
    }
    return(
        <div>
            <h1>{val}</h1>
            <div style={{display:"flex",columnGap:"50px"}}>

            <button onClick={GM}>GM</button>
            <button onClick={GA}>GA</button>
            <button onClick={GE}>GE</button>
            <button onClick={GN}>GN</button>
            </div>
        </div>
    )
}
export default Message;