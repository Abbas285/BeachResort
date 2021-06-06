import React,{useContext} from 'react'
import ComponentB from './ComponentB';
import {Context} from './UseContext';
function ComponentA() {
    const countcontext=useContext(Context)
    return (
        <div>
            <h1>ComponentA</h1>
            {countcontext.countstate}
            <button onClick={()=>countcontext.countdispatch('increment')}>Increment</button> 
              <button onClick={()=>countcontext.countdispatch('decrement')}>Decrement</button> 
              <button onClick={()=>countcontext.countdispatch('reset')}>Reset</button> 
            <ComponentB/>
        </div>
    )
}

export default ComponentA
