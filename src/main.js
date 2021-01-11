import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Hero from './Components/Hero/Hero'

export default function Main() {
    return (
        <Switch>
            <Route path='/' component={Hero} />
        </Switch>
    )
}