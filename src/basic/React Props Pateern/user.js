
import React,{Component} from 'react'
class user extends Component{

constructor(){
    super()
    this.state={
        count:0
    }
}
incrementcount=()=>{
    this.setState(prioves=>{
       return {
           count:prioves.count+1
        } 
    }
    )
}


render(){


    return(<>
    <br/>
    {this.props.render(false)}
    </>)
}
}
export default user