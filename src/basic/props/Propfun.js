import React from 'react';

const Propfun=(props)=>{

return(
<div>

<h1>Name {props.name}</h1>
<h2>city {props.addr}</h2>
  {props.children}
</div>

)


}
export default Propfun;