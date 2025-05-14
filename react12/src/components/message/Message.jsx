import { useDispatch,useSelector } from 'react-redux'
import {gmAction,gnAction} from '../../redux/message/message.action'
let Message = ()=>{
    let dispatch= useDispatch();
    let message = useSelector(state=>state);
    let gmHandler=()=>{
        //how to dispatch an action
        dispatch(gmAction())
    }
    let gnHandler=()=>{
         dispatch(gnAction())
    }
    return <div>
            <h2>Messae Component</h2>
            <pre>{JSON.stringify(message)}</pre>
            <hr />
            <h4>Value:{message.msg}</h4>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
           </div>
}
export default Message;