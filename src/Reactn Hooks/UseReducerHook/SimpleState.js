import React,{useReducer} from 'react'
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
function SimpleState() {
  const [count,dispatch]  =useReducer(reducer,initalstate)
    return (
        <div>
          <h1>
              simple Reducer State
              </h1>
              <div>count ={count}</div>
              <button onClick={()=>dispatch('increment')}>Increment</button> 
              <button onClick={()=>dispatch('decrement')}>Decrement</button> 
              <button onClick={()=>dispatch('reset')}>Reset</button>  
        </div>
    )
}

export default SimpleState
