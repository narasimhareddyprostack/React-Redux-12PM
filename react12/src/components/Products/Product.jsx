import {useDispatch,useSelector} from 'react-redux'
import { incrAction,decrAction } from '../../redux/products/product.action';
let Product = ()=>{
let dispatch = useDispatch();
let product = useSelector((state)=>{
    return state;
})
let incrHandler = ()=>{
       //dispath redux action? how to dispatch?
       dispatch(incrAction());
}
let decrHandler = ()=>{
       //dispath redux action
       dispatch(decrAction())
}
return <div>
        <h4>Product component</h4>
        <pre>{JSON.stringify(product)}</pre>
        <h5>Product Data</h5>
        <h5>Product Name:{product.pName}</h5>
        <h5>Price:{product.price}</h5>
        <h5>Total:{product.price * product.qty}</h5>
        <button onClick={decrHandler}>-</button>
        {product.qty}
        <button onClick={incrHandler}>+</button>
    </div>
}
export default Product;