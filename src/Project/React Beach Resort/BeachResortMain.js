import React from 'react'
import Home from './pages/Home'
import Room from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import Navebar from './Components/Navbar'
import {Switch,Link,NavLink,Route,Router} from 'react-router-dom'
function BeachResortMain() {
    return (
        <>
        <Navebar/>
        <Switch>
<Route exact path="/" component={Home}/>
<Route exact path="/rooms" component={Room}/>
<Route exact path="/rooms/:slug" component={SingleRoom}/>{/*here slug is
 variable name the main is :colon an purpose is user after rooms write whatever go on spacific page
  */}
<Route component={Error}/>
</Switch>
        
        </>
    )
}

export default BeachResortMain