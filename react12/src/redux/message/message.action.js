//action type
let GM='GM'
let GN='GN'
//action is a function,return actionable object
let gmAction = ()=>{ 
    console.log("Inside gmAction")
    return {type:GM}
}
let gnAction = ()=>{ 
    return {type:GN}
}
export {gmAction,gnAction,GM,GN}