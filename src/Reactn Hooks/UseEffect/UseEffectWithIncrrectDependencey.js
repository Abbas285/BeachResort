import React, { useEffect, useState } from 'react'

function UseEffectWithIncrrectDependencey() {
    const [count,setcount]=useState(0);
    const [vale,setval]=useState(0);
    useEffect(()=>{
        
        // const interval=setInterval(tick,1000);
        const interval2=setInterval(getval,1000);
        return ()=>{
        // clearInterval(tick)
        clearInterval(interval2)
        }
    },[])
    const tick=()=>{
        setcount(count+1);
    }
    const getval=()=>{
        setval(previous=>previous+1);
    }
    return (
        <div>
            <h1>count value on the basis of previous{vale}</h1>
            {count}
        </div>
    )
}

export default UseEffectWithIncrrectDependencey
