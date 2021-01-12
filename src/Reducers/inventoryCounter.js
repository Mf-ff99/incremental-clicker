const carrotMaxCounter = (state = 100, action) => {
    switch(action.type) {
        case 'INCREMENT/carrot/max':
            return state + action.payload
        case 'DECREMENT/carrot/max':
            return state - action.payload
        default:
            return state;
    }
}

export default carrotMaxCounter