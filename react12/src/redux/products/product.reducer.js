//import action type
import {INCR,DECR} from './product.action'
//create initial state
let initialState={
    pName:"Marker Pen",
    price:30,
    qty:2
}
let productReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'INCR':
            return {...state,qty:state.qty+1}
        case 'DECR':
            return {...state,qty:state.qty-1}
        default:
            return state;
    }

}
export {productReducer}