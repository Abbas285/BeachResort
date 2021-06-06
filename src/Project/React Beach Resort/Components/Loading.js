import React from 'react'
import loadingGif from '../project file/images/gif/loading-arrow.gif'
function Loading() {
    return (
        <div className="loading">
            <h4>rooms data loading....</h4>
            <img src={loadingGif} alt=""/>
        </div>
    )
}

export default Loading
