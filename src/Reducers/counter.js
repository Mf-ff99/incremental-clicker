const carrotReducer = (state = 10, action) => {
    switch(action.type) {
        case 'INCREMENT/carrot':
            return state + action.payload
        case 'DECREMENT/carrot':
            return state - action.payload
        default:
            return state;
    }
}

export default carrotReducer