import React, { useEffect, useState } from 'react'
import axios from 'axios';
const FetchingData=()=>{
    const [post,setpost]=useState([]);
    useEffect(()=>{
axios.get('https://jsonplaceholder.typicode.com/posts')
.then(responce=>{
    console.log(responce);
    setpost(responce.data);
})
.catch((error)=>{
    console.log(error);
})
    },[]);
    return(<>
    
    <h1>Fetching the Data</h1>
    <ul style={{listStyleType:"none"}}>
        {
            post.map((value,id)=>
                // return(<li key={id}>{value.title}</li>)
               (<li key={id}>{value.title}</li>)
                
            )
        }
    </ul>
    </>)
}
export default FetchingData;