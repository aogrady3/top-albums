import {combineReducers} from 'redux'
import albumReducer from './albums'

const rootReducer = combineReducers({
   albums: albumReducer,
})

export default rootReducer