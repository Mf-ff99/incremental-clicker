import carrotReducer from './counter'
import waterCounter from './waterCounter'
import staminaCounter from './staminaCounter'
import carrotMaxCounter from './inventoryCounter'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    carrotReducer,
    waterCounter,
    staminaCounter,
    carrotMaxCounter,
})

export default allReducers
