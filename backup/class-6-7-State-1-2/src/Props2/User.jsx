import Emp from "./Emp";
let User = ()=>{
    let user_Data={
        uid:101,
        uname:"Rahul",
        loc:["Waynad","ND","Bangalore"],
        email:"rg@gmail.com"
    }

    return <div>
            <h3>User Component</h3>
            <hr/>
            <Emp employee={user_Data}/>
          </div>
}

export default  User;