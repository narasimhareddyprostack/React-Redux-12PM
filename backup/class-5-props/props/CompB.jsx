let CompB = (props)=>{


    return <div>
                <h3>Componet B</h3>
                <pre>{JSON.stringify(props)}</pre>
                <h3>Employee Id:{props.eid}</h3>
                <h4>Employee Name:{props.ename}</h4>
                <h4>Primary Loc:{props.eloc[1]}</h4>
           </div>
}
export default CompB;