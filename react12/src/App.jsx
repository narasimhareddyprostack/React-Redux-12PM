import Product from "./components/Products/Product";
import {Provider} from 'react-redux'
import {store} from './redux/store'
let App = ()=>{
  return <div>
          <Provider store={store}>
              <h4>App component</h4>
              <hr/>
              <Product/>
          </Provider>
              
        </div>
}
export default App;