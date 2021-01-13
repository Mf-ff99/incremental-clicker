import carrotReducer from './counter'
import waterCounter from './waterCounter'
import staminaCounter from './staminaCounter'
import carrotMaxCounter from './inventoryCounter'
import waterMaxCounter from './waterMaxCounter'
import carrotMulitplier from './carrotMultiplier'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    carrotReducer,
    waterCounter,
    staminaCounter,
    carrotMaxCounter,
    waterMaxCounter,
    carrotMulitplier,
})

export default allReducers
