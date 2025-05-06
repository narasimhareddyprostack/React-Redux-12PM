import { useState } from "react";
let Employee = ()=>{
    let [esal,setEsal] = useState(30000)
    let hikeHandler = (hikeValue)=>{
        setEsal(esal+hikeValue)
    }
    return <div style={{display:"flex",columnGap:"25px"}}>
                <h2>Employee component</h2>
                <h2>Employee Salary:{esal}</h2>
                
                <button onClick={hikeHandler.bind(null,50000)}>Hike 50k</button>
                <button onClick={hikeHandler.bind(null,25000)}>Hike 25K</button>
                <button onClick={hikeHandler.bind(null,5000)}>Hike 5K</button>
                <button onClick={hikeHandler.bind(null,0)}>Hike 0</button>
          </div>
}
export default Employee;