import React, { Component } from 'react'
import Title from './Tittle'
import Loading from '../Components/Loding'
import Room from './Rooms'
import {RoomContext} from '../ContextApi/ContextAPI'

class featuredrooms extends Component  {
  static contextType=RoomContext;
render(){
let { loading,featuredRooms:rooms }=this.context;
rooms=rooms.map(room=>{
   return<Room
   key={room.id}
   room={room}
   />
 })
    return (
      <>
     <section className="featured-rooms">
     <Title title="Featured Rooms" />
    <div className="featured-rooms-center">
{
  loading?<Loading/>:rooms
}
    </div>

     </section>
    
      
      </>
    )
}
}
export default featuredrooms
