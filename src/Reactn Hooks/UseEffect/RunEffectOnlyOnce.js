import React, { useEffect, useState } from 'react'

function RunEffectOnlyOnce() 

{
    const [x,setx]=useState(0);
    const [y,sety]=useState(0);
    const mousepostionget=(e)=>{
        console.log('mouse event')
        setx(e.clientX);
        sety(e.clientY);

    }
useEffect(()=>{
    console.log("use effect called");
    window.addEventListener('mousemove',mousepostionget);
    return ()=>{
        window.removeEventListener('mousemove',mousepostionget);
    }
},[]);

    return (
        <div >
            <h1>Run Effect once</h1>
             <h1>x {x}</h1>    <h1>x {y} </h1>
        </div>
    )
}

export default RunEffectOnlyOnce
