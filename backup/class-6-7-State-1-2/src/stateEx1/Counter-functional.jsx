import React, { useState } from 'react'
const Counter = () => {
   let [counter,setCounter]=useState(1);
   let incrHandler = ()=>{
    setCounter(counter+1)
   }
   let decrHandler = ()=>{
    setCounter(counter-1)
   }

    return <div>
                <h4>Counter Example:</h4>
                <button onClick={decrHandler}>-/DECR</button>
                counter Value:{counter}
                <button onClick={incrHandler}>+/INCR</button>
           </div>
}
export default Counter