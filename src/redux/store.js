import {legacy_createStore as configureStore} from 'redux'
import { countReducer } from './reducer';


export const store = configureStore(countReducer)




