import React from 'react'

function Banner(props) {
    const {tittle,subtittle,children}=props
    return (
        <div className="banner">
            <h1>
                {tittle}
            </h1>
            <div></div>
            <p>{subtittle}</p>
            {children}
        </div>
    )
}

export default Banner
