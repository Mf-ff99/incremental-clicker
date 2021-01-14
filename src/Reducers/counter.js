// import {useSelector} from 'react-redux'

const carrotReducer = (state = 100, action) => {
    switch(action.type) {
        case 'INCREMENT/carrot':
            return state + action.payload
        case 'DECREMENT/carrot':
            // const carrotMaxCounter = useSelector(state => state.carrotMaxCounter)
            return state - action.payload
        default:
            return state;
    }
}

export default carrotReducer