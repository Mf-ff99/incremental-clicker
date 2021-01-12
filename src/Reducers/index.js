import carrotReducer from './counter'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    carrotReducer
})

export default allReducers
