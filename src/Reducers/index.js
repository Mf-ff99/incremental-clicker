import carrotReducer from './counter'
import waterCounter from './waterCounter'
import staminaCounter from './staminaCounter'
import carrotMaxCounter from './inventoryCounter'
import waterMaxCounter from './waterMaxCounter'
import carrotMultiplier from './carrotMultiplier'
import waterMultiplier from './waterMultiplier'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    carrotReducer,
    waterCounter,
    staminaCounter,
    carrotMaxCounter,
    waterMaxCounter,
    carrotMultiplier,
    waterMultiplier,
})

export default allReducers
