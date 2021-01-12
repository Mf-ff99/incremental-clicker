import React from 'react'
import { Animated } from 'react-animated-css'
import { Link } from 'react-router-dom'

export default function Hero() {


    return (
        <>
        <div className='hero'>
            <Animated animationIn='bounceInUp' animationInDelay={1500} animationInDuration={1400}>
            <h1>Welcome to ClickBait</h1>
            <h3>Here you are, all ready to go...</h3>
            <h4>Do you want to start a new game?</h4>
            <div className='start-menu'>
            <Link to='/game'><button type='click'>Start a new game!</button>
                </Link>
            <Link to='/continue-game'>
            <button type='click'>Continue my game!</button>
            </Link>
            <Link to='/instructions'>
            <button type='click'>Nope take me to the instructions, I'm a noob!</button>
            </Link>
            </div>

            </Animated>
        </div>
        </>
    )

}

