import React, { useEffect, useState ,useRef} from 'react'

function useRef2nd() {
    const [time,settime]=useState(0)
    const intervalRef=useRef()
useEffect (()=>{
    intervalRef.current =setInterval(()=>{
     settime(prev=>prev+1)
    },1000)
    return ()=>{
        clearInterval(intervalRef.current);
    }
},[])
    const clerar=()=>{
clearInterval(intervalRef.current)
    }
    return (
        <div>
            <h1>2nd</h1>
            {time}
            <button onClick={clerar}> clear timer</button>
        </div>
    )
}

export default useRef2nd
