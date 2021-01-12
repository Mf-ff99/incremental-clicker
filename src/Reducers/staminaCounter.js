const staminaCounter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT/stamina':
            return state + action.payload
        case 'DECREMENT/stamina':
            return state - action.payload
        default:
            return state;
    }
}

export default staminaCounter