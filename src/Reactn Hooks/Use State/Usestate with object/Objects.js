import React,{useState} from 'react'

function Objects() {
    const [num,setnum]=useState({
        firstname:'',
        secondname:''
    })
    return (
        <div>
            <h1>work with object value</h1>
            <input type='text' onChange={e=>setnum({...num,firstname:e.target.value})}/>
            <input type='text' onChange={e=>setnum({...num,secondname:e.target.value})}/>
            <br/>
            <h1>{num.firstname}</h1>
            <h1>{num.secondname}</h1>
            <h1> stringify{JSON.stringify(num)}</h1>
        </div>
    )
}

export default Objects
