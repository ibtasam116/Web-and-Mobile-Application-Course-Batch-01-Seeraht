import React from 'react'
import Hero from './Hero'
import Fruits from './Fruits'
import Services from './Services'
import Countries from './Countries'
import Events from './Events'

export default function index() {
    return (
        <div id='home'>
            <Hero />
            <Countries />
            <Services />
            <Events />
            <Fruits />
        </div>
    )
}
