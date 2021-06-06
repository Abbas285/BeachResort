import React,{useReducer} from 'react'
const initalstate=0;
const reducer=(state,action)=>{
    switch(action){
        case 'Increment':
            return state+1;

        case 'Decrement':
        return state+1;

        case 'reset':
        return initalstate; 

        default :return state; 
    }
}
const initalstates={
    firstcounter:10,
    secondcounter:15
}
const reducer1=(state,action)=>{
    switch(action.type){
        case 'Increment':
            return {
                ...state,
                
                firstcounter:state.firstcounter+action.value
            }

        case 'Decrement':
            return {
                ...state,
                firstcounter:state.firstcounter-action.value
            }
            case 'Increments':
                return {
                    ...state,
                    
                    secondcounter:state.secondcounter+action.value
                }
    
            case 'Decrements':
                return {
                    ...state,
                    secondcounter:state.secondcounter-action.value
                }

        case 'reset':
        return initalstates; 

        default :return state; 
    }
}
function MultipleReducer() {
    const [count,dispatch]=useReducer(reducer,initalstate);
    const [count1,dispatch1]=useReducer(reducer,initalstate);
    const [count2,dispatch2]=useReducer(reducer1,initalstates);
    const [count3,dispatch3]=useReducer(reducer1,initalstates);
    return (

        <div>
            <h1>Multiple Reducer</h1>
            {count}<br/>
            {count1}<br/>
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            <button  onClick={()=>dispatch('Decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>reset</button>
            <button onClick={()=>dispatch1('Increment')}>Multiple Increment</button>
            <button  onClick={()=>dispatch1('Decrement')}>Multiple Decrement</button>
            <button onClick={()=>dispatch1('reset')}> Multiple reset</button>
            <br/>
            <h1>complex miltipleReducer</h1>
            <br/><span>{`Multiple reducer complex${count2.firstcounter} value`}</span>
            <br/>
            <span>{`Multiple reducer complex${count3.secondcounter} value`}</span>
            
            <br/>
            <button onClick={()=>dispatch2({type:'Increment',value:5})}>Multiple Increment</button>
            <button  onClick={()=>dispatch2({type:'Decrement',value:5})}>Multiple Decrement</button>
            <button onClick={()=>dispatch2({type:'reset'})}> Multiple reset</button>
            <br/>
            <button onClick={()=>dispatch3({type:'Increments',value:5})}>Multiple Increment</button>
            <button  onClick={()=>dispatch3({type:'Decrements',value:5})}>Multiple Decrement</button>
            <button onClick={()=>dispatch3({type:'reset'})}> Multiple reset</button>
        </div>
    )
}

export default MultipleReducer
