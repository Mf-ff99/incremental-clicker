import { useDispatch } from "react-redux";
import { useSelector } from 'react'
import { incrementCarrot, incrementWater } from "../../Actions";


export default function Logic() {
    // const waterMaxCounter = useSelector(state => state.waterMaxCounter)
    const waterCounter = useSelector(state => state.waterCounter)
    const carrotMaxCounter = useSelector(state => state.carrotMaxCounter)
    const carrotReducer = useSelector(state => state.carrotReducer)
    const carrotMulitplierReducer = useSelector(state => state.carrotMultiplier)
    // setCarrotCount(carrotReducer)
    // setMaxCarrotCount(carrotMax)

    const dispatch = useDispatch()

    setInterval(() => {
        if (waterCounter > 2 && carrotReducer < carrotMaxCounter) {
            dispatch(incrementCarrot(1 * carrotMulitplierReducer))
            dispatch(incrementWater(1 * carrotMulitplierReducer))
        }
    }, 1000);
}

