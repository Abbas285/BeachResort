import React from 'react'
import ComponentA from './CompoentA'
export const createContext=React.createContext();
export const chanelcontext =React.createContext();
function ContextHook() {
    return (
        <div>
           <h1>contextHook</h1>
           <createContext.Provider value={'Abbas'}>
               <chanelcontext.Provider value={'Ali'}>
               <ComponentA/>
               </chanelcontext.Provider>
           
           </createContext.Provider>
        </div>
    )
}

export default ContextHook
