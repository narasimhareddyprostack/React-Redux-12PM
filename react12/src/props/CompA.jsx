import CompB from "./CompB"
let CompA = ()=>{
    let uid=101;
    let uname="Rahul"
    let loc=["Wayanad","ND","Bangalore"]
    return <div>
            <h3>Componet A</h3>
            <hr/>
            <CompB  eid={uid} ename={uname} eloc={loc}/>
           </div>

}
export default CompA