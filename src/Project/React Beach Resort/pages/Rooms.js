import React from 'react'
import '../Components/Navbar.css';
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../pages/Banner';
import RoomContainer from '../Components/RoomContainer'
const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner tittle="our rooms">
 <Link  to='/' className="btn-primary">
  return Home
</Link> 
            </Banner>
            </Hero>
            <RoomContainer/>
        </>
    )
}

export default Rooms
