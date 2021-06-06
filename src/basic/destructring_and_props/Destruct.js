import React from 'react'

function Destruct(props) {
    const {name,addr,children}=props;
    return (
        <div>
            <h1> hellow {name} and {addr}</h1>
            <h4>{children}</h4>
            
        </div>
    )
}

export default Destruct
