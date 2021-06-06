import React from 'react'

function ChildFun(props) {
    return (
        <div>
            
           {/* <button onClick={props.method}>click on</button>   */}
           <button onClick={()=>props.method('abbas')}>click on</button> 
        </div>
    )
}

export default ChildFun
