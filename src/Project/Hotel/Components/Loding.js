import React from 'react'
import LoadingGf from '../images/gif/loading-arrow.gif'
const Loding = () => {
    return (
        <div className="loading">
            <h4>rooms data loading....</h4>
            <img src={LoadingGf} alt=""/>
        </div>
    )
}

export default Loding
