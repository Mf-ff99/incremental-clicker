const waterMultiplier = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT/water/multiplier':
            return state + action.payload
        case 'DECREMENT/water/multiplier':
            // const carrotMaxCounter = useSelector(state => state.carrotMaxCounter)
            return state - action.payload
        default:
            return state;
    }
}

export default waterMultiplier