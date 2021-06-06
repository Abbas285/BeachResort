import React from 'react'
import Hero from '../Components/Hero'
import Baner from '../Components/Baner'
import {Link} from 'react-router-dom'
import Banner from '../../React Beach Resort/pages/Banner'
const Error = () => {
    return (<>
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
