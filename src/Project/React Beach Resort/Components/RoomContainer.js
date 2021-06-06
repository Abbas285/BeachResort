import React from 'react'
import RoomsFilter from './RoomFilter'
import Roomlist from './RoomList'
import {withRoomConsumer} from '../pages/context'
import Loading from  './Loading'

function RoomContainer ({context})  {
    const {loading,sortedRooms,rooms}=context;
    if(loading){
  return <Loading/>
   }
  return (
       <>
    
      <RoomsFilter rooms={rooms}/>
       <Roomlist rooms={sortedRooms}/>
      </>
  )


 
}

export default withRoomConsumer(RoomContainer)
















// import React from 'react'
// import RoomsFilter from './RoomFilter'
// import Roomlist from './RoomList'
// import{RoomProvider,RoomConsumer,RoomContext} from '../pages/context'
// import Loading from  './Loading'
// const RoomContainer = () => {
//     return (<>
//         <RoomConsumer>
// {
//     (value)=>{
//         const {loading,sortedRooms,rooms}=value
//         if(loading){
//             return <Loading/>
//         }
//         return (
//             <div>
//             Hellow  Room container
//             <RoomsFilter rooms={rooms}/>
//             <Roomlist rooms={sortedRooms}/>
//         </div>
//         )
//     }
// }
//         </RoomConsumer>
        
//         </>
//     )
// }

// export default RoomContainer
