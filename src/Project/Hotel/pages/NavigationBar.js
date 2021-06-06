import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import LOgo from '../images/logo.svg'
import '../HotelManagement.css';
const NavigationBar = () => {
const [ states,setstates]=useState(false);

const checkpoin=()=>{
    setstates(!states)
}
    return (
       <>
<nav className="navbar">
    <div className="nave-center">
<div className="nav-header">
    <Link >
<img src={LOgo} alt="img"/>

    </Link>
    <button className="nav-header-btns" onClick={checkpoin}>
        <div className="line-one"></div>
        <div className="line-two"></div>
        <div className="line-three"></div>
    </button>

</div>
<ul className={states?"nav-linkss show-navss":"nav-linkss"}>
<li>
    <Link to="/">  Home  </Link>
</li>
<li>
    <Link to="/room">    Rooms     </Link> 
</li>
</ul>
    </div>


</nav>


       </>
    )
}

export default NavigationBar
