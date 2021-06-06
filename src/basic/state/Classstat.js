import React ,{Component} from 'react';

 class Classstat extends Component{

constructor ()
{
super()
this.state={
    message:"wellcome"
}
}

clickon(){
    this.setState({
        message:"thanku for"
    })
}
render(){

return (
<div>
    <h1>{this.state.message}</h1>
<button onClick={()=>this.clickon()}>click</button>

</div>


);





}
 }
 export default Classstat;