import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Game from './Components/Game/Game'
import Hero from './Components/Hero/Hero'
import './styles/styles.css'

export default function Main() {
    return (
        <Switch>
            <Route exact path='/' component={Hero} />
            <Route path='/game' component={Game} />
        </Switch>
    )
}