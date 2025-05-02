import {createRoot} from 'react-dom/client'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css'


createRoot(document.getElementById('root')).render(<App/>)
//createRoot(document.getElementById('root')).render(<><h2>Good Afternoon</h2><p>welcome</p></>)
//createRoot(document.getElementById('root')).render("Hello,GA")