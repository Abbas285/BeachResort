import React from 'react'
import {createContext,chanelcontext} from './ContextHook';

function ComponentF() {
    return (
        <div>
            <h1>component F</h1>
            <createContext.Consumer>
                {
                (user)=>{
                   return (<chanelcontext.Consumer>
                       {
                           (chanel)=>{
                               return <h1>the full name {user}{chanel}</h1>
                           }
                       }
                   </chanelcontext.Consumer>)
                   
                   
                }}
            </createContext.Consumer>
        </div>
    )
}

export default ComponentF
