import Message from "./Message/Message";
//import './assets/bs/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
let App = ()=>{

return <div>
            <h1>App Componet</h1>
            <button className="btn btn-danger">Test</button>
            <hr />
            <Message/>
           
       </div>

}


export default App;