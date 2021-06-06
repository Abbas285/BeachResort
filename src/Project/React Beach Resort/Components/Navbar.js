import React, { Component } from 'react'
import '../Components/Navbar.css';
import logo from '../project file/images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'
 class Navbar extends Component {
   
   state={
       isopen:false
   }
 handleToggl=()=>{
     this.setState({
         isopen:!this.state.isopen
     })
 }
   
    render() {
      
        return (
<>
<nav className="navbar">
<div className="nav-center">
<div className="nav-header">
    <Link to="/">
    <img src={logo} alt="Beach Resort"/>
    </Link>
<button type="button" className="nav-btn" onClick={this.handleToggl}>
<FaAlignRight className="nav-icon"/>
</button>
</div>
<ul className={this.state.isopen?"nav-links show-nav":"nav-links"}>
    <li>
        <Link to="/" >
            Home
        </Link>
    </li>
    <li>
        <Link to="/rooms" >
            Rooms
        </Link>
    </li>

</ul>
</div>

</nav>
            
 </>
        )
    }
}
export default Navbar
