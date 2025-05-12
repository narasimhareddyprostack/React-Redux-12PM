let Employee=()=>{
    let employees=[
        {"eid":101,"ename":"Rahul","esal":45000.45},
        {"eid":102,"ename":"Sonia","esal":55000.45},
        {"eid":103,"ename":"Priyanka","esal":65000.45},
    ]
    return <div>
                <h3>Employee Component</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                        <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                                <th>EId</th>
                                <th>E Name</th>
                                <th>E Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map((emp)=>{
                                return <tr key={emp.eid}>
                                        <td>{emp.eid}</td>
                                        <td>{emp.ename}</td>
                                        <td>{emp.esal}</td>
                                       </tr>
                            })
                        }
                    </tbody>
                </table>
                        </div>
                    </div>
                </div>
             
           </div>
}
export default Employee;