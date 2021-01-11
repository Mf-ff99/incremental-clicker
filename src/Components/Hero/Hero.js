import React from 'react'
import { Animated } from 'react-animated-css'

export default function Hero() {


    return (
        <>
        <div className='hero'>
            <Animated animationIn='bounceInUp' animationInDelay={1500} animationInDuration={1400}>
            <h1>Welcome to ClickBait</h1>
            <h3>Here you are, all ready to go...</h3>
            </Animated>
        </div>
        </>
    )

}

