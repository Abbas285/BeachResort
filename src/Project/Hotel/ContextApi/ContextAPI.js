import React, { Component } from 'react'
import items from '../Data/AppData'
const RoomContext=React.createContext();
  class ContextAPI extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false,
        price:0
    }
    componentDidMount(){
        let rooms=this.formatData(items)//component pass
        let featuredRooms =rooms.filter(room=>room.featured==true);
        let maxPrice=Math.max(...rooms.map(item=>item.price))
        let maxSize=Math.max(...rooms.map(item=>item.size))
      this.setState({
        //   rooms:rooms,
        //   featuredRooms:featuredRooms,
        rooms,
        featuredRooms,
        sortedRooms:rooms,
        loading:false,
        price:maxPrice,
        maxPrice,
        maxSize
        


      })
    }
    //argument passd
    formatData(items){
        let tempItems=items.map(item=>{
            let id=item.sys.id;
            let images=item.fields.images.map(image=>{
               return image.fields.file.url
            })
            let room={
                ...item.fields,
                images,
                id
            }
            return room;
        })
        return tempItems
    
    }
    getRoom =(slug)=>{
        let tempItems=[...this.state.rooms]
        const room=tempItems.find((room)=>{
            return room.slug==slug
        })
        return room;
    };
 
    handleChange=event=>{
        const target=event.target;
        // const value=target.type==='checkbox'?
        //  target.checked:target.value;
        const value=target.type==='checkbox'?target.checked:target.value
         const name=target.name;
         this.setState({
      [name]:value,

         },this.filterRooms)

    }
    filterRooms=()=>{
        let {
            rooms,type,capacity,price,minSize,maxSize,breakfast,
            pets
        }=this.state;
        //all the rooms
        let tempRooms=[...rooms];
        //transform value
        capacity=parseInt(capacity);
        price=parseInt(price);
        
        //filter by type
        if(type!=='all'){
            tempRooms=tempRooms.filter( room=> room.type ===type)
        }
        //filter by capacity
        if(capacity!==1){
            tempRooms=tempRooms.filter(item=>item.capacity===capacity)
        }
         //filter by price
         tempRooms=tempRooms.filter(item=>item.price<=price)
         //filter by size
         tempRooms=tempRooms.filter( room =>room.size>=minSize && room.size <=maxSize)

  //filter by breakfast
  if(breakfast){
    
        tempRooms=tempRooms.filter(room => room.breakfast ===true)
  }
   //filter by pets
   if(pets){
       tempRooms=tempRooms.filter(item=>item.pets===true)
   }
        this.setState({
            sortedRooms:tempRooms
        })
        
    }
    render() {
        return (
            <div>
                <RoomContext.Provider 
        value={{...this.state,
            getRoom:this.getRoom,
            handleChange:this.handleChange
        }}>

            {this.props.children}
        </RoomContext.Provider>
            </div>
        )
    }
}
const RoomConsumer=RoomContext.Consumer;

 function withRoomConsumer (Component){
    return function ConsumerWrapper(props){
      return  <RoomConsumer>
            {
                (value)=>{
                    return <Component
                    {...props}
                    context={value}
                    />
                }
            }
        </RoomConsumer>
    }
}



export {ContextAPI,RoomContext,RoomConsumer ,withRoomConsumer}