import React,{useEffect,useReducer} from 'react'
import axios from 'axios';
const intialstate={
loding:true,
error:'',
post:{}
}
const reducer=(state,action)=>{
switch(action.type){
    case 'FetchSucess':
        return{
            loding:false,
            post:action.payload,
            error:''
        
        }
        case 'FetchError':
            return{
                loding:false,
                post:{},
                error:'Some thing Wrong'
    
}
default :return state

}
}

function FetchinDataUseReducer() {
    const [state,disatch]=useReducer(reducer,intialstate)
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
   .then((responce)=>{
   disatch({type:'FetchSucess' ,payload:responce.data})

     })
    .catch(()=>{
   disatch({type:'FetchError'})
    })




    },[])
    return (
        <div>
            <h1>Fetching Data With UseState</h1>
       {state.loding?'loding':state.post.title}
       {state.error? state.error:null}
        </div>
    )
}

export default FetchinDataUseReducer
