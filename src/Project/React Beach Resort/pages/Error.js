import React from 'react'
import '../Components/Navbar.css';
import Hero from '../Components/Hero'
import {Link} from 'react-router-dom'
import Banner from '../pages/Banner';
const Error = () => {
    return (
        <>
        
        <Hero>
            <Banner
            tittle="404"
            subtitle="page not found">

<Link  to='/' className="btn-primary">
  return Home
</Link> 
            </Banner>

            
        </Hero>
        
        </>
    )
}

export default Error
