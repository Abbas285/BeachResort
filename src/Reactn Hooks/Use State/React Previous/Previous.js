import React,{useState} from 'react';

const Previous =()=>{
  const [num,setnum]=useState(1)
const increment=()=>{
for(var i=0;i<5;i++){
  //
    setnum((previous=>previous+1));
}
}
    return(<>
    <h1>{num}</h1>
    <button onClick={increment}>increment </button>
    </>)
}
export default Previous;