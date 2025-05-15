import {createStore} from 'redux'
import {productReducer} from './products/product.reducer'
import {composeWithDevTools} from '@redux-devtools/extension'

let store = createStore(productReducer,composeWithDevTools())

export { store}