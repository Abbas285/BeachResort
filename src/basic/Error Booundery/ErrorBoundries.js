import React, { Component } from 'react'

 class ErrorBoundries extends Component {
constructor(props) {
    super(props)

    this.state = {
         hasError:false
    }
}

// this function is used for error boundry

    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
//this is use for catch the error info
componentDidCatch(error,info){
    console.log(info);
    console.log(error);
    
}
    render() {
        if(this.state.hasError){
            return <h1>something went wrong</h1>
        }
        return this.props.children
       
    }
}

export default ErrorBoundries
