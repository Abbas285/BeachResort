import React,{useReducer,createContext} from 'react'
import ComponentA from './ComponentA';
export const Context =createContext()
const initalstate=0;
const reducer=(state,action)=>{
switch(action){
    case 'increment':
        return state+1
        case 'decrement':
            return state-1
        case 'reset':
        return initalstate;
        default:
           return state;
}
}
function UseContext() {
const [count,batch]=useReducer(reducer,initalstate)
    return (
        <Context.Provider value={{
            countstate:count,
            countdispatch:batch
        }}>
        <div>
            <h1>UseContext With Reducer</h1>
            {count}

            <ComponentA/>
        </div>
        </Context.Provider>
    )
}

export default UseContext
