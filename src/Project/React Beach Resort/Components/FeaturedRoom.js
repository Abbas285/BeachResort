import React, { Component } from 'react'

import {RoomContext} from '../pages/context'
import Loading from './Loading'
import Loadingpage from './Loading'
import Room from './Room'
import Title from "./Title"
 class FeaturedRoom  extends Component {
     static contextType=RoomContext;
    render() {

  let {loading,featuredRooms:rooms}=this.context;
rooms=rooms.map(room=>{
            return <Room
            key={room.id}
            room={room}
            />
        })
       return (
            <section className="featured-rooms">
              <Title title="featured rooms"/>

               <div className="featured-rooms-center">
             {
                 loading ?<Loadingpage/>:rooms
             }
               </div>
              
            </section>
        )
    }
}
export default FeaturedRoom