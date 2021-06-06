import React,{Component} from 'react'

const HOC=CompontAsAargu=>{
    class NewComp extends Component{
        constructor(){
            super()
            this.state={
        count:0
            }
        }
        increment=()=>{
            this.setState({
        count:this.state.count+1
            })
        }
        render(){
            return<CompontAsAargu
            count={this.state.count}
            incrementcount={this.increment}
            {...this.props}
            />
        }
        }
        return NewComp;
}

export default HOC;