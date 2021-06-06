import React,{Component} from 'react'
import Hoc from './HOC';
class HoverComponent extends Component{

render(){
    const  {count,incrementcount}=this.props
    return(<>
    <h1> {this.props.name} HoverComponent{count}</h1>
    <button onMouseOver={incrementcount}>Number of Click</button>
    </>)
}
}
export default Hoc(HoverComponent);                                                                                                         