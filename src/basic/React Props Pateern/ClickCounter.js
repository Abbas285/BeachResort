import React,{Component} from 'react'
class ClickCounter extends Component{


render(){
const {count,incrementcount} =this.props

    return(<>
    <h1>{count} clickcomponent</h1>
    <button onClick={incrementcount}>Number of Click</button>
    
    </>)
}
}
export default ClickCounter