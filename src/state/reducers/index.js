//combine reducers(mozemo imate nekoliko reducedrsa)
import { combineReducers } from "redux";
import accountReducer from './accountReducer'


//key:value
//account: 0
const reducers = combineReducers({
    account: accountReducer
})

export default reducers