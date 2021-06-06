import React, { Component } from 'react'
import Child from './ChildFun'
 class Parentclasjs extends Component {
constructor(){
   
    super()
    this.state={
        parentName:"parent"
    }
    this.greetparent=this.greetparent.bind(this);
}

   greetparent(childname){
       alert(`hellow ${this.state.parentName} from ${childname}`)
   } 
    render() {
        return (
            <div>
                <Child
                method={this.greetparent}
                
                />
            </div>
        )
    }
}
export default Parentclasjs;