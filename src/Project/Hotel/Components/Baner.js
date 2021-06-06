import React from 'react'

const Baner = (props) => {
    const {children,title,subtittle}=props
    return (
        <>
<div className="banners"> 

<h1>
    {title}
</h1>
<div></div>
<p>{subtittle}
</p>
{children}


</div>


        </>
    )
}

export default Baner
