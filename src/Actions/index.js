export const incrementCarrot = (int) => {
    return {
        type: 'INCREMENT/carrot',
        payload: int,
    }
}
export const decrementCarrot = (int) => {
    return {
        type: 'DECREMENT/carrot',
        payload: int,
    }
}
export const incrementWater = (int) => {
    return {
        type: 'INCREMENT/water',
        payload: int,
    }
}
export const decrementWater = (int) => {
    return {
        type: 'DECREMENT/water',
        payload: int,
    }
}

export const incrementCarrotMaxCounter = (int) => {
    return {
        type: 'INCREMENT/carrot/max',
        payload: int,
    }
}

export const incrementWaterMaxCounter = (int) => {
    return {
        type: 'INCREMENT/water/max',
        payload: int,
    }
}
export const incrementCarrotMultiplier = (int) => {
    return {
        type: 'INCREMENT/carrot/multiplier',
        payload: int,
    }
}
export const decrementCarrotMultiplier = (int) => {
    return {
        type: 'DECREMENT/carrot/multiplier',
        payload: int,
    }
}



