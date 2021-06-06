import React,{useContext} from 'react'
import ComponentF from './ComponentF';
import {createContext,chanelcontext} from './ContextHook';
function ComponentC() {
    const user=useContext(createContext);
    const chanel = useContext(chanelcontext);
    return (
        <div>
            <h1>componet C</h1>
            {user}{chanel}
            <ComponentF/>
        </div>
    )
}

export default ComponentC
