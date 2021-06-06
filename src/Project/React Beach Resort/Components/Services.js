import React, { Component } from 'react'
import Title from '../Components/Title'
import '../Components/Navbar.css';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import { EmailTwoTone } from '@material-ui/icons';
export default class Services extends Component {
   
   state={
services:[{
icon:<FaCocktail/>,
title:"Free Cocktails",
info:"Lorem ipsum dolor sit amet consectetur adipiticing EmailTwoTone.Magni,corporis"                                                
       
},
{
icon:<FaHiking/>,
title:" Endles",
info:"Lorem ipsum dolor sit amet consectetur adipiticing EmailTwoTone.Magni,corporis"                                                
           
},
{
icon:<FaShuttleVan/>,
title:"Free Shuttle",
info:"Lorem ipsum dolor sit amet consectetur adipiticing EmailTwoTone.Magni,corporis"                                                
               
},
 {
icon:<FaBeer/>,
title:"Strongest Tea",
info:"Lorem ipsum dolor sit amet consectetur adipiticing EmailTwoTone.Magni,corporis"                                                
        
            }
]
   }
   
    render() {
        return (
            <section className="servicess">
               <Title
               title="services"
               />
               <div className="servicess-center">
{
    this.state.services.map((item,index)=>{
return <article key={index} className="services">
    <span>{item.icon}</span>
    <h6>
        {item.title}
    </h6>
<p>{item.info}</p>
</article>
    })
}
               </div>

              
            </section>
        )
    }
}
