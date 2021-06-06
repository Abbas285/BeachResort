import React,{Component} from 'react'
import Hoc from './HOC';
class ClickComponent extends Component{

render(){
const  {count,incrementcount}=this.props

    return(<>
    <h1>{this.props.name} clickcomponent{count}</h1>
    <button onClick={incrementcount}>Number of Click</button>
    </>)
}
}
export default Hoc(ClickComponent)