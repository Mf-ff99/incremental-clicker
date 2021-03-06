import React, { useState } from 'react'
import { Animated } from 'react-animated-css'
import {useDispatch, useSelector} from 'react-redux'
import { incrementCarrot, decrementCarrot, incrementWater, decrementWater } from '../../Actions/index'
import carrotMaxCounter from '../../Reducers/inventoryCounter'
// import waterAttritionCounter from '../../Reducers/waterAttritionCounter'
import waterMultiplier from '../../Reducers/waterMultiplier'
import Inventory from './Inventory'
// import waterMaxCounter from '../../Reducers/waterMaxCounter'

import Shop from './Shop'

// Incremental Clicker
// Florida Man Clicker 
// Just for funsies
// no cap
// TODO
//

// let carrotLimit = 100

const PlayerHud = (props) => {
    const carrotReducer = useSelector(state => state.carrotReducer)
    const waterCounter = useSelector(state => state.waterCounter)
    const carrotMaxCounter = useSelector(state => state.carrotMaxCounter)
    const waterMaxCounter = useSelector(state => state.waterMaxCounter)
    console.log(waterMaxCounter)
    return (
        <Animated animationIn='bounceInLeft'>
            <div className='player-hud'>

            </div>
            <div className='player-hud'>
                <ul>
                    <li>
                        Water : {Math.round(waterCounter)}/{waterMaxCounter}
                    </li>
                    <li>
                        Stamina : {props.inventory.stamina}/10
                    </li>
                    <li>
                        Carrots : {Math.round(carrotReducer)}/{carrotMaxCounter}
                    </li>
                </ul>
            </div>
        </Animated>
    )
}

let carrotTick = 0
const GameCanvas = (props) => {
    const [openShop, setOpenShop] = useState(false)
    const carrotReducer = useSelector(state => state.carrotReducer)
    const waterCounter = useSelector(state => state.waterCounter)
    const waterMaxCounter = useSelector(state => state.waterMaxCounter)
    const carrotMaxCounter = useSelector(state => state.carrotMaxCounter)
    const carrotMulitplierReducer = useSelector(state => state.carrotMultiplier)

    const dispatch = useDispatch()
  if(carrotTick > 5) {
      console.log(carrotTick)
      dispatch(decrementWater(1))
      carrotTick = 0
  }
  if(waterCounter >= waterMaxCounter) {
      dispatch(decrementWater(waterCounter%2))
  }
  if(carrotReducer >= carrotMaxCounter) {
      dispatch(decrementCarrot(carrotReducer%2))
  }

 
//   setInterval(() => {
//     if (waterCounter > 2 && carrotReducer < carrotMaxCounter) {
//         dispatch(incrementCarrot(carrotMulitplierReducer - 1))
//         // dispatch(incrementWater(2%carrotMulitplierReducer))
//     }
// }, 5000);
//   const dispatchWater = useDispatch(waterCounter)
    return (
        <div className='game-canvas'>
            <div className='player-hud-container'>
                <Shop setWaterHarvesters={props.setWaterHarvesters} inventory={props.inventory} openShop={openShop} setOpenShop={setOpenShop} />
                <PlayerHud inventory={props.inventory} />
            </div>
            <div className='game-container'>
                <div className='gathering-container'>
                    <i class='fas fa-tint fa-3x' onClick={() => (waterCounter < waterMaxCounter) ? dispatch(incrementWater(1)) : null}></i>
                    <i onClick={() => {
                        if(carrotReducer < carrotMaxCounter && waterCounter > 2) {
                            dispatch(incrementCarrot(1)) 
                        }
                        carrotTick++ 
                    }}
                        className="fas fa-carrot fa-4x"></i>

                </div>
                    <Inventory />
            </div>

        </div>
    )
}

const Game = () => {
    const [start, setStart] = useState(false)
    const [water, setWater] = useState(10)
    const [stamina, setStamina] = useState(10)
    const [carrots, setCarrots] = useState(10)
    const [carrotMultiplied, setCarrotMulitplied] = useState(1)
    const [carrotTicks, setCarrotTicks] = useState(0)

    const carrotReducer = useSelector(state => state.carrotReducer)
    const waterCounter = useSelector(state => state.waterCounter)
    const carrotMaxCounter = useSelector(state => state.carrotMaxCounter)
    const waterMaxCounter = useSelector(state => state.waterMaxCounter)
    const carrotMultiplierReducer = useSelector(state => state.carrotMultiplier)
    const waterAttritionCounter = useSelector(state => state.waterAttritionCounter)
    
    const waterMultiplier = useSelector(state => state.waterMultiplier)
    const dispatch = useDispatch()
    // factor out inventory to its own file
    const inventory = {
        water: water,
        stamina: null,
        carrots: carrots,
    }

    let waterharvester = 0

    const setWaterHarvesters = () => {
        // setInterval(function() {
        //     setWater(water + waterharvester)
        // }, 5000)
        // waterharvester++
        // console.log(waterharvester)
        // if(carrots >= 10) setCarrots(carrots - 10)
    }

    
    
    if(carrotMaxCounter >= carrotReducer){
        if(waterCounter >= 2) {

            setInterval(() => {
                if (carrotReducer < carrotMaxCounter && waterCounter > 2) {
                    dispatch(incrementCarrot(carrotMultiplierReducer%2))
                    dispatch(incrementWater((waterMultiplier*1.2)))
                    dispatch(decrementWater(waterAttritionCounter*2))
                }
            }, 10000);

        }
    } else {
        clearTimeout()
    }
        
    // factor out carrot functions to helper file

    const carrotMulitplier = () => {
        if (carrots > 50) {
            setCarrotMulitplied(1.2)
        }
    }

    if (carrotTicks >= 8) {
        console.log(carrotTicks)
        setCarrotTicks(0)
    }
    if (carrotTicks > 7 && water > 0) {
        setWater(water - 1)
    }

    const setInventory = (item) => {

        // console.log(carrotTicks)
        switch (item) {
            case 'water':
                if (water < 10) setWater(water + 1)
                break;
            case 'carrot':
                if (water > 2) setCarrots(carrots + 1)
                setCarrotTicks(carrotTicks + 1)
                break;
            default:
                return;
        }

    }
    // the shop needs to check against the inventory to see if an item can be bought
    // the shop can live in its own file
    // water harvester
    // carrot picker
    // stealth grow
    // bigger bucket
    // bigger backpack
    // carrot slave

    return (
        <div className='game-view'>
            {start ? ' ' : <h2>Ready to play?</h2>}            {start ? '' : <button type='click' onClick={() => setStart(true)}>Yes!</button>}
            {start ? <GameCanvas setWaterHarvesters={setWaterHarvesters} inventory={inventory} setInventory={setInventory} /> : ''}
        </div>
    )
}

export default Game