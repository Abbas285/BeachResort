import React, { useState } from 'react'
import RunEffectOnlyOnce from './RunEffectOnlyOnce'

function UseEffectWithCleanUp() {
    const [display,setdisplay]=useState(true);
    return (
        <div>
            <h1>CleanUp Event</h1>
            <button onClick={()=>setdisplay(!display)}>cleanUpMouseEvent</button>
            {display&&<RunEffectOnlyOnce/>}
        </div>
    )
}

export default UseEffectWithCleanUp
