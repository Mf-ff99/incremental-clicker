const waterMaxCounter = (state = 10, action) => {
    switch(action.type) {
        case 'INCREMENT/water/max':
            return state + action.payload
        case 'DECREMENT/water/max':
            return state - action.payload
        default:
            return state;
    }
}

export default waterMaxCounter