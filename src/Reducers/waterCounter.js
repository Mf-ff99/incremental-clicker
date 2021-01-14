const waterCounter = (state = 10, action) => {
    switch(action.type) {
        case 'INCREMENT/water':
            if(state + action.payload > 0) return state + action.payload
            return state
        case 'DECREMENT/water':
            if(state - action.payload > 0) return state - action.payload
            return state;
            default:
            return state;
    }
}

export default waterCounter