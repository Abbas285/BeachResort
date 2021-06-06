import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Baner'
import {Link}   from 'react-router-dom';
import Services from '../Components/Services'
import FeaturedRooms from '../Components/featuredrooms'
const Home = () => {
    return (
        <>
        <Hero>
 <Banner title="Luxuiious Rooms"
   subtittle="Deluxe Rooms Starting At $299"  >
          
                 <Link to='/room' className="btn-primarys" >
                    OUR ROOMS
                </Link>
            </Banner>  
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}

export default Home
