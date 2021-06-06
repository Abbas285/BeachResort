import React, { Component } from 'react'

export class Form extends Component {
    constructor(){
super ()
this.state={
    username:'',
    comments:'',
    option:'Angular'
}


    }
    commentevent=(event)=>{
        this.setState({
            comments:event.target.value
        })

    }
    submitvalue=(event)=>{
    alert(` username ${this.state.username} comments ${this.state.comments} and skill is ${this.state.option}`)
    event.preventDefault()
    }
    onchangeoption=(event)=>{
        this.setState({
            option:event.target.value
        })
    }
    onchangeevent=(event)=> {
    this.setState({
        username:event.target.value
    })
        }
    render() {
        const {username,option,comments}=this.state
        return (
 <form onSubmit={this.submitvalue}>
<div>
<label>user name</label>
<input type='text' value={username} 
onChange={this.onchangeevent}/>

</div>
<div>
    <label>comments</label>
    <textarea value={comments} onChange={this.commentevent} ></textarea>
</div>
<div>
    <label>select skill</label>
    <select type="selection" value={option} onChange={this.onchangeoption} >
        <option>React</option>
        <option>Angular</option>
        <option>Vu</option>
    </select>
</div>
<button type="submit">submit</button>
 </form> 
        )
    }
}

export default Form
