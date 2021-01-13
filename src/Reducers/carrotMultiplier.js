const carrotMultiplier = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT/carrot/multiplier':
            return state + action.payload
        case 'DECREMENT/carrot/multiplier':
            // const carrotMaxCounter = useSelector(state => state.carrotMaxCounter)
            return state - action.payload
        default:
            return state;
    }
}

export default carrotMultiplier