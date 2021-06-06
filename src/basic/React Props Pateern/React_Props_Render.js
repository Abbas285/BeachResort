import React, { Component } from 'react'

 class React_Props_Render extends Component {

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
    

    render() {
        return (
            <div>
                {this.props.children(this.state.count,this.incrementcount)}
            </div>
        )
    }
}

export default React_Props_Render
