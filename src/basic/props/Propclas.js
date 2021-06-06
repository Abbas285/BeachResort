import React ,{Component} from 'react';
class Propclas extends Component{
render(props){
  return  (<div><h1>{this.props.name}</h1>
  <h2>{this.props.addr}</h2>
  {this.props.children}
  
  
  
  </div>)
}




} 
export default Propclas;