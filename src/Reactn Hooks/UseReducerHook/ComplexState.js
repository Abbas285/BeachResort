import React,{useReducer} from 'react'
const initalstate={
    firstcount:0,
    secondcount:10
}
const reducer=(state,action)=>{
    switch(action.type){
        case'increment':
        return {
            ...state,
            firstcount:state.firstcount+action.value
        }
        case'decrement':
        return {
            ...state,
            firstcount:state.firstcount-action.value
        }
        case'increment2':
        return {
            ...state,
            secondcount:state.secondcount+action.value
        }
        case'decrement2':
        return {
            ...state,
            secondcount:state.secondcount-action.value
        }
        case'reset':
        return  initalstate;
        default :return{
            state
        }
    }
}

function ComplexState() {
    const [count,disatch]=useReducer(reducer,initalstate)
    return (
        <div>
            <h1>complexReducer state</h1>
            <br/>
          <h1> {` first count value${count.firstcount}`}</h1> 
          <br/>
          <h1> {` 2nd count${count.secondcount}`}</h1> 

            <button onClick={()=>disatch({type:'increment', value:1})}>Incerment</button>
            <button onClick={()=>disatch({type:'decrement', value:1})}>Decrement</button>
            <button onClick={()=>disatch({type:'increment',value:5})}>Incerment5</button>
            <button onClick={()=>disatch({type:'decrement',value:5})}>Decrement5</button>
            <button onClick={()=>disatch({type:'increment2',value:5})}>Incerment2nd</button>
            <button onClick={()=>disatch({type:'decrement2',value:5})}>Decrement 2nd</button>
           
            <button onClick={()=>disatch({type:'reset'})}>Reset</button>
        </div>
    )
}

export default ComplexState
