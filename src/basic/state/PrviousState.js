import React,{Component} from 'react';
 class PrviousState extends Component{
constructor(){
    super()
    this.state={
count:0

    }
}
countvalue(){
    // this.setState({
    //     count:this.state.count+1


    // })
   this.setState((previous)=>({
count:previous.count+1

   }),()=>{
       console.log('countvalue',this.state.count)
   })
   console.log('countvalue',this.state.count)
}
countfive(){
this.countvalue();
this.countvalue();
this.countvalue();
this.countvalue();
this.countvalue();



}

render(){
    return(<div>

<h1>value {this.state.count}</h1>
<button onClick={()=>this.countfive()}>count value</button>


    </div>)
}




 }
 export default PrviousState;