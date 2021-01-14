const waterAttritionCounter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT/water/attrition':
            return state + action.payload
        case 'DECREMENT/water/attrition':
            if(state - action.payload > 0) return state - action.payload
            return state;
            default:
            return state;
    }
}

export default waterAttritionCounter