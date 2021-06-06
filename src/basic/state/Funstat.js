import React, {Component} from 'react';
class Funstat extends Component{

constructor (){
    super()
    this.state={
        message:"wellcome dear"
    }
}
clickevent(){
    this.setState({
        message:"thanku so much and we use component state and through this value can change"
    })
}
render(){
    return(
<div>

<h1>hellow {this.state.message}</h1>
<button onClick={()=>this.clickevent()}> click here</button>
</div>
    )
}



}
export default Funstat;