import React, { Component } from 'react'
import axios from 'axios';
 class Get_Data extends Component {
constructor(){
    super()
    this.state={
        arr:[]
    }
}

componentDidMount(){
    //axios basically return two call back function 
    //1 is responce and 2 is error messoge
axios.get('https://restcountries.eu/rest/v2/all').then(
(responce)=>{
this.setState({
    arr:responce.data
});
},
(error)=>{
console.log(error);
}
);
}
    render() {
        return (
            <div>
                <h1> UsingAPI  Get Data with Axios</h1>
                <table border="1" align="center" style={{backgroundColor:"black",color:"wheat"}}>
               <thead>
                   <tr>
                      <th>S/N</th>
                      <th> Name</th>
                      <th>Capital</th>
                      <th>Regin</th>
                      <th>Flage</th>
                     
                   </tr>
               </thead>
               <tbody>


                    {this.state.arr.map(
                        (val,ind)=>{ return(<tr key={ind}>
                            <td>{ind}</td>
                            <td>{val.name}</td>
                            <td>{val.capital}</td>
                            <td>{val.region}</td>
                            <td><img src={val.flag} alt={val.name} width="100px" height="60px"/></td>
                        </tr>)
                        
                    })
                }
               </tbody>
                

                </table>
            </div>
        )
    }
}

export default Get_Data
