import React,{useCallback,useState} from 'react'

function UseCallbackHook() {
    const [number,setnumber]=useState({
        num:0,
        num2:0
    })
    const [result,stresult]=useState(0)
const increment=useCallback(()=>{
// stresult(parseInt( number.num)+parseInt(number.num2))
stresult( number.num+number.num2)
console.log("result",result);
},[number,result])

    return (
        <div>
            <h2>UseCallback</h2>
            <h2>result:{result}</h2>
<input type="text" onChange={(e)=>setnumber({num:+e.target.value,
          num2:number.num2})}/>
          <input type="text" onChange={(e)=>setnumber({num2:+e.target.value,
          num:number.num})}/>
            <br/>
            <button onClick={increment}>add value</button>
        </div>
    )
}

export default UseCallbackHook
