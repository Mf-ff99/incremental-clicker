import carrotReducer from './counter'
import waterCounter from './waterCounter'
import staminaCounter from './staminaCounter'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    carrotReducer,
    waterCounter,
    staminaCounter,
})

export default allReducers
