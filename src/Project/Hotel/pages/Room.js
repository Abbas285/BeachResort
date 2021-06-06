import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Baner'
import {Link} from 'react-router-dom'
import ReactContainer from '../Components/Roomcontainer'

const ROOMS = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="our rooms">
            <Link  to='/' className="btn-primary">
            return Home
            
           </Link> 
            </Banner>
        </Hero>
        <ReactContainer/>
        </>
    )
}

export default ROOMS
