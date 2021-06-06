import React from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Tittle from './Tittle'
const services=[
    {
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
const Services = () => {
    return (
        <section className="servicess">
             <Tittle
               title="services"
               />
<div className="servicess-center">
    {
services.map((item,index)=>{
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

export default Services
