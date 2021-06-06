import React from 'react'
import FeaturedRooms from '../Components/FeaturedRoom'
import '../Components/Navbar.css';
import Hero from '../Components/Hero'
import Banner from '../pages/Banner';

import {Link} from 'react-router-dom'
 
import Services from '../Components/Services';
const Home = () => {
    return (
        <>
        < Hero >
        <Banner tittle="Luxurious rooms"
        subtittle="deluxe rooms starting at $299">
<Link  to='/rooms' className="btn-primary">
  our rooms
</Link>
  </Banner>
        
        </ Hero>
        <Services/>
        <FeaturedRooms/>
       
         

        
        </>
    )
}

export default Home

