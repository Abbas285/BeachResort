
import React,{Component} from 'react'
class HoverCounter extends Component{



render(){
const {count,increment} =this.props

    return(<>
    <h1>{count} HoverCount</h1>
    <button onMouseOver={increment}>Number of Click</button>
    </>)
}
}
export default HoverCounter