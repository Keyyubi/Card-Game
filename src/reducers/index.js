import pageReducer from './pageReducer'
import userReducer from './userReducer'
import {combineReducers} from 'redux'

const mainReducer = combineReducers({
    page: pageReducer,
    user: userReducer
})

export default mainReducer
