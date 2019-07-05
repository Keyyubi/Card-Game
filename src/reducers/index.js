import pageReducer from './pageReducer'
import userReducer from './userReducer'
import solvedReducer from './solvedReducer'
import currentUserReducer from './currentUserReducer'
import {combineReducers} from 'redux'

const mainReducer = combineReducers({
    page: pageReducer,
    user: userReducer,
    solvedPair: solvedReducer,
    currentUser: currentUserReducer
})

export default mainReducer
