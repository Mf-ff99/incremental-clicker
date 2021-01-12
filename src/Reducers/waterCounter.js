const waterCounter = (state = 10, action) => {
    switch(action.type) {
        case 'INCREMENT/water':
            return state + action.payload
        case 'DECREMENT/water':
            return state - action.payload
        default:
            return state;
    }
}

export default waterCounter