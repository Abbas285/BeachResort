import React from 'react'
import '../Hotel/HotelManagement.css';
import Navigation from './pages/NavigationBar'
import ErrorPage from './pages/Error';
import {Switch,Route} from 'react-router-dom'
import Room from './pages/Room'
import Home from './pages/Home';
import SingleRooms from './pages/SingleRooms'
const HotelManagement = () => {
    return (<>
       <Navigation/>
<Switch>
    <Route  exact path="/" component={Home}/>
    <Route exact path="/room" component={Room}/>
    <Route exact path="/room/:slug" component={SingleRooms}/>
    <Route  component={ErrorPage}/>
</Switch>


       </>
    )
}

export default HotelManagement
