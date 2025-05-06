import { useState } from "react";

let Message =()=>{
    let [msg,setMsg] = useState('Hello');

    let UpdateHandler = (msgValue)=>{
        setMsg(msgValue)
    }
   
    return(
        <div>
            <h1>{msg}</h1>
            <div style={{display:"flex",columnGap:"50px"}}>

            <button onClick={UpdateHandler.bind(null,"Good Morning") }>GM</button>
            <button onClick={UpdateHandler.bind(null,"Good Afternoon")  }>GA</button>
            <button onClick={UpdateHandler.bind(null,"Good Evening")  }>GE</button>
            <button onClick={UpdateHandler.bind(null,"Good Night")  }>GN</button>
            </div>
        </div>
    )
}
export default Message;