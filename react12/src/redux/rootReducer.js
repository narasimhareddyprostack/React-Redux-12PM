import {rootReducer} from 'redux'
import { messageReducer } from './message/message.reducer';
let rootReducer = rootReducer({message:messageReducer});
export {rootReducer}