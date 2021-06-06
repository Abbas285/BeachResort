import React, { useEffect, useRef, useState } from 'react'
import './refcss.css';
function Uncontolled() {
    const [show,setshow]=useState(false);
    const LocuyName=useRef(null);
    const submitForm=(e)=>{
        e.preventDefault();
        const name=LocuyName.current.value;
        if(name==""){
            alert('please enter the data');
        }
        else{
            setshow(true);
        }
    }
    useEffect(()=>{
        LocuyName.current.focus();
    })
    return (
        <div >
     <form  onSubmit={submitForm}> 
    <div>
 <label> Enter Your Locy Number</label>
       
   <input type="text" id="lockyNumb" />  
   <input type="text" id="lockyNumb" ref={LocuyName}/>         
 </div> 
 <br/>
 <button>Submit</button>
 </form>
 <p>{show ?`your Locyname ${LocuyName.current.value}`:""}</p>
</div>
    )
}

export default Uncontolled


