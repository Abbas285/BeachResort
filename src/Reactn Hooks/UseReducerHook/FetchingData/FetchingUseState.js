import React,{useEffect,useState} from 'react'
import axios from 'axios';
function FetchingUseState() {
    const [loding, setloding] = useState(true)
    const [error, seterror] = useState('')
    const [post, setpost] = useState({})
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
   .then((responce)=>{
       setloding(false)
       setpost(responce.data)
       seterror('')
   })
   .catch((err)=>{
       setloding(false)
       setpost({})
       seterror('some thing wrong!')
   })
    },[])
    return (
        <div>
            <h1>Fetching Data With UseState</h1>
            {loding ? 'loding':post.title}
            {error ? error:null}
        </div>
    )
}

export default FetchingUseState
