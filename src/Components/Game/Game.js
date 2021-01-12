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
    console.log(props.inventory)
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
                        Oranges : {props.inventory.oranges}/100
                    </li>
                </ul>
            </div>
        </Animated>
    )
}

// const Shop = (props) => {
    
    
    
//     return (
//             <div className='shop'>
//                 <ul className='shop-ul'>
//                     {items.map((item) => 
//                         <li className='shop-item'>{item.name} : {item.price}</li>
//                     )}
//                 </ul>
//             </div>
//     )
// }

const GameCanvas = (props) => {
    const [openShop, setOpenShop] = useState(false)
    return (
        <div className='game-canvas'>
            <Shop openShop={openShop} setOpenShop={setOpenShop} />
            <div className='player-hud-container'>
                <PlayerHud inventory={props.inventory}/>
                </div>
            
        </div>
    )
}

const Game = () => {
    const [start, setStart] = useState(false)
    const [water, setWater] = useState(10)
    const [stamina, setStamina] = useState(10)
    const [oranges, setOranges] = useState(100)
    
    const inventory = {
        water: 10,
        stamina: 10,
        oranges: 10,
    }
    return (
        <div className='game-view'>
            {start ? ' ' : <h2>Ready to play?</h2>}            {start ? '' : <button type='click' onClick={() => setStart(true)}>Yes!</button>}
            {start ? <GameCanvas inventory={inventory}/> : ''}
        </div>
    )

}

export default Game