import React, { useEffect, useState } from 'react'
import axios from 'axios';
const FetchingIndividualPost=()=>{
    const [post,setpost]=useState({});
    const [idv,setidval]=useState(1);
 
    useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/posts/${idv}`)
.then(responce=>{
    console.log(responce);
    setpost(responce.data);
})
.catch((error)=>{
    console.log(error);
    
})
    },[idv]);
    
 
    return(<>
    
    <h1>Fetching the Data</h1>
    <input type="text"value={idv} onChange={e=>setidval(e.target.value)}    />
    
<br/>

<h1>Data Id: {post.id} </h1>
<h1> Data Tittle :{post.title}</h1>
<h1>Data Body :{post.body}</h1>


    
    </>)
}
export default FetchingIndividualPost;