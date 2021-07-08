import { combineReducers } from 'redux'

// Front
import Home from './home/reducer'
import Detail from './detail/reducer'
const rootReducer = combineReducers({
    Home,
    Detail
 
})

export default rootReducer
