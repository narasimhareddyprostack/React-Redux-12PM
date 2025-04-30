import React from "react";
let Message = ()=>{

    let myStyles={backgroundColor:"yellow"}
    return <React.Fragment>
                <h3>Message Component</h3>
                <h3 style={myStyles}>GM</h3>
                <h3>GA</h3>
           </React.Fragment>
}
export default Message;