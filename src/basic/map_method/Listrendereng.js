import React from 'react'
import Namelist from './Namelist'
function Listrendereng() {
const names=["abbas","ali","shah"] 
const person=[
{
    id:1,
    name:"Abbas",
    age:27,
    skill: "React js"
},
{
    id:2,
    name:"Saif",
    age:31,
    skill: "Angular js"
},
{
    id:3,
    name:"Itazad",
    age:27,
    skill: "Vu Js"
}
]
// const personlist=person.map((persons)=><h1>{persons.id}  {persons.name} {persons.age} {persons.skill}</h1>)

const personlist=person.map((persons,index)=><Namelist key={index}value={persons}/>)



const data=names.map((index,value)=><h1>{value} = {index}</h1>)
    return (
        <div>
            {/* {
                names.map((name)=>
                    <h1>{name}</h1>
                
                )
            } */}
            {
                personlist
            }
            
        </div>
    )
}

export default Listrendereng;
