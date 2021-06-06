import React, { useEffect, useState } from 'react'
import axios from 'axios';

function FetchingDataThroughButton() {
    const [post,setpost]=useState({});
    const [idv,setidval]=useState();
    const [data,setdata]=useState(1)
 
    useEffect(()=>{
axios.get(`https://jsonplaceholder.typicode.com/posts/${data}`)
.then(responce=>{
    console.log(responce);
    setpost(responce.data);
})
.catch((error)=>{
    console.log(error);
    
})
    },[data]);
    const getdataval=()=>{

setdata(idv)

    }
 
    return(<>
    
    <h1>Fetching the Data</h1>
    <input type="text"value={idv} onChange={e=>setidval(e.target.value)}    />
    <button onClick={getdataval}> get Data</button>
    
<br/>

<h1>Data Id: {post.id} </h1>
<h1> Data Tittle :{post.title}</h1>
<h1>Data Body :{post.body}</h1>


    {/* <ul style={{listStyleType:"none"}}>
        {
            post.map((value,id)=>
                // return(<li key={id}>{value.title}</li>)
               (<li key={id}>{value.title}</li>)
                
            )
        }
    </ul> */}
    </>)
}
export default FetchingDataThroughButton
