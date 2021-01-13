const waterCounter = (state = 10, action) => {
    switch(action.type) {
        case 'INCREMENT/water':
            return state + action.payload
        case 'DECREMENT/water':
            if(state - action.payload > 0) return state - action.payload
            return state;
            default:
            return state;
    }
}

export default waterCounter