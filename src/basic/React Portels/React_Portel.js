import React from 'react'
import ReactDom from 'react-dom'
function React_Portel() {
    return ReactDom.createPortal(
        
            <h1>Portel demo</h1>
        ,document.getElementById('portelRoot')
    )
}
//basicall purpose of this react portel access outer  root DOM component to main root component
// main use of this  create css model,tooltip,or popup menue in our project
export default React_Portel
