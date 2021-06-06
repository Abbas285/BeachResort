import React from 'react'

function Namelist({value}) {
    return (
        <div>
           <h1>{value.id}  {value.name} {value.age} {value.skill}</h1>
        </div>
    )
}

export default Namelist
