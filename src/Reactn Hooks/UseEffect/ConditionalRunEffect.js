import React, { useEffect, useState } from 'react'

function ConditionalRunEffect() 
{
    const [names,setnames] =useState(0)
    const [name,setname]=useState('');
    useEffect(()=>{
        console.log('render');
        // console.log(`updated value ${name}`);
document.title=`input valu${names}value`;

    },[names])
    return (
        <div>
            <input type="text" value={name} onChange={(e)=>setname((e.target.value))}/>
            <button onClick={()=>setnames(names+1)}>count</button>
            <h1>ConditionalRunEffect</h1>
            {names}
        </div>
    )
}

export default ConditionalRunEffect
