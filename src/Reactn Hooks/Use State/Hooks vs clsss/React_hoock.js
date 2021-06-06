import React ,{useState}from 'react'

function React_hoock() {
    const [count,setcount]= useState(0);
    return (
        <div >
           <button onClick={()=>setcount(count+1)}>count value{count}</button>
        </div>
    )
}

export default React_hoock
