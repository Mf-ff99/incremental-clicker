import React, { useState } from 'react'
import { Animated } from 'react-animated-css'
import Shop from './Shop'

// Incremental Clicker
// Florida Man Clicker 
// Just for funsies
// no cap
// TODO
// 

const PlayerHud = (props) => {
    // console.log(props.inventory)
    return (
        <Animated animationIn='bounceInLeft'>
            <div className='player-hud'>

            </div>
            <div className='player-hud'>
                <ul>
                    <li>
                        Water : {props.inventory.water}/10
                    </li>
                    <li>
                        Stamina : {props.inventory.stamina}/10
                    </li>
                    <li>
                        Carrots : {props.inventory.carrots}/100
                    </li>
                </ul>
            </div>
        </Animated>
    )
}

const GameCanvas = (props) => {
    const [openShop, setOpenShop] = useState(false)

    return (
        <div className='game-canvas'>
            <div className='player-hud-container'>
                <Shop setWaterHarvesters={props.setWaterHarvesters} inventory={props.inventory} openShop={openShop} setOpenShop={setOpenShop} />
                <PlayerHud inventory={props.inventory} />
            </div>
            <div className='game-container'>
                <div className='gathering-container'>
                    <i class='fas fa-tint fa-3x' onClick={() => props.setInventory('water')}></i>
                    <i onClick={() => props.setInventory('carrot')} class="fas fa-carrot fa-4x"></i>
                </div>
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

    // factor out inventory to its own file
    const inventory = {
        water: water,
        stamina: null,
        carrots: carrots,
    }

    let waterharvester = 0

    const setWaterHarvesters = () => {
        setInterval(function() {
            setWater(water + waterharvester)
        }, 5000)
        waterharvester++
        console.log(waterharvester)
        if(carrots >= 10) setCarrots(carrots - 10)
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