import React from "react";
class Emp extends React.Component{


    render(){
        return <div>
                <h3>Employee Component</h3>
                <h3>{JSON.stringify(this.props)}</h3>
                <h4>Employee Id:{this.props.employee.uid}</h4>
                <h4>Employee Name:{this.props.employee.uname}</h4>
                <h4>Location:{this.props.employee.loc[1]}</h4>
                <h4>Email Id:{this.props.employee.email}</h4>
                </div>
    }
}
export default Emp;