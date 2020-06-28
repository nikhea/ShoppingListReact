import {combineReducers} from 'redux'
import itemReducer from './itemReducer'
import ErrorReducer from './ErroReducer'
import AuthReducer from './AuthReducer'



export default combineReducers({
    item:itemReducer,
    error: ErrorReducer,
    auth: AuthReducer
})