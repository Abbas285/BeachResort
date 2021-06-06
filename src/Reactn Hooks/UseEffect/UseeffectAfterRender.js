import React,{useState,useEffect} from 'react'

function UseeffectAfterRender() {
    const [count,setcount]=useState(0)
    const increment=()=>{
        setcount(count+1);
    }
    useEffect(()=>{
        document.title=`use efect ${count} value `;
    })
    return (
        <div>
            <button onClick={increment}>countValue {count}</button>
        </div>
    )
}

export default UseeffectAfterRender
