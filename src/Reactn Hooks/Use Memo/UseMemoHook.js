import React,{useEffect,useCallback,useMemo, useState} from 'react'

function UseMemoHook() {
    const [number,setnumber]=useState({
        num:0,
        num2:0
    })
    const [result,setresult]=useState()
   

// this way use to make memo as use effect
// useMemo(()=>{
//      console.log(result);
   
//         setresult(number.num + number.num2);
       
    
// },[number,result]);
// this way are use to make memo as callback
const usememofun=useMemo(()=>{
    console.log(result);
return ()=>{
   
    setresult(number.num + number.num2); 
}
},[number,result])
    return (
        <div>
            <h3>UseMemo Hook</h3>
            
            <h4>{` result ${result}`}</h4>
            <br/>
            <input type="text" onChange={(e)=> setnumber({...number, num:+e.target.value,num2:number.num2})}/><br/>
            <input type="text" onChange={(e)=>setnumber({...number,num2:+e.target.value,num1:number.num1})}/><br/>
           
    
            <button onClick={usememofun}>ADD value withmommo Hook</button><br/>

        </div>
    )
}

export default UseMemoHook
