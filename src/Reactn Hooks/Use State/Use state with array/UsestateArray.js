import React,{useState} from 'react'

function UsestateArray() {
    const [ num ,setnum]=useState([]);
    const [arrval,setarraval]=useState([]);
    const incrment=()=>{
setnum([...num,{
    id:num.length,
    value:Math.floor(Math.random() * 10) + 1
}])
    }  
   
    const incrementArrayval=(e)=>{
    //   const values=e.target.value;
//   setarraval((previous)=>{
//     //   [...arrval,{
//     //       id:arrval.length,
//     //       value:previous
//       }]

//   })

    }
     return (
        <div>
            <button onClick={incrment}>add number</button>
            <input type="text" onChange={e=>setarraval(e.target.value)}/>

            <button onClick={incrementArrayval}>add value in array</button>

            <h1>array store value</h1>
            <ul>
           {arrval}
</ul>
<h1>{arrval}</h1>
            <ul>
                {num.map((val,id)=>{
                   return <li key={id}>{val.value}</li>
                })}
            </ul>
        </div>
    )
}

export default UsestateArray;
