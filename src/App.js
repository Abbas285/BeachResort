
import './App.css';
import {Function} from './basic/component/Function';
import Classcomp from './basic/component/Classs';
import Propfun from './basic/props/Propfun';
import Propclas from './basic/props/Propclas';
import Classtat from './basic/state/Classstat';
import Fucnstat from './basic/state/Funstat';
import Previousstate from './basic/state/PrviousState';
import Destruct from './basic/destructring_and_props/Destruct';
import Parentclass from './basic/method_as_props/Parentclas';
import Mapmet from './basic/map_method/Listrendereng';
import Forms from './basic/form/Form';
import PortalCom from './basic/React Portels/React_Portel'
import Herow from './basic/Error Booundery/HerowFile'
import ErrorBoundery from './basic/Error Booundery/ErrorBoundries'
import ClickCom from './basic/HOC(High Order Component/ClickFunction'
import HoverCom from './basic/HOC(High Order Component/HoverComponet'
import Clickcount from './basic/React Props Pateern/ClickCounter'
import HoverCount from './basic/React Props Pateern/HoverCounter'
import User from './basic/React Props Pateern/user'
import React_Props from './basic/React Props Pateern/React_Props_Render'
import API_GetData from './basic/API Call/Get_Data'
import BeachResortMainFile from './Project/React Beach Resort/BeachResortMain'
// import ProjectApps from './Project/ProjectApp'
import MainTempeleteFile  from './Project/tempelete1/MainTempeleteFile'
import {BrowserRouter} from 'react-router-dom'
import {RoomProvider} from './Project/React Beach Resort/pages/context'
import HotelManagement from './Project/Hotel/HotelManagement'
import {ContextAPI} from './Project/Hotel/ContextApi/ContextAPI'

function App() {
  return (
    <div className="App">
    {/* <Function/>
    <Classcomp/> */}
    {/* <Propfun
    name="abbas"
    addr="mansehra"
    >
<p>use props and its children</p>
    </Propfun>

    <Propfun
    name="abbas"
    addr="mansehra"
    >
<button>click on</button>
    </Propfun> */}
{/* <Propclas 
name="abbas"
addr="mansehra"
>
<p>this is children paragraph of component through access by props</p>
</Propclas>
<Propclas 
name="abbas"
    addr="mansehra"
>
<button>click on this</button>
</Propclas> */}
{/* 
<Classtat/>
<Fucnstat/>
<Previousstate/>
<Destruct
name="abbas"
addr="mansehra"
>
<p>children props using through destructring</p>


</Destruct>

<Parentclass/>

<Mapmet/> */}
{/* <Forms/> */}
{/* <PortalCom/> */}
{/* <ErrorBoundery>
<Herow HeroN={'abbas'}/>
</ErrorBoundery>
<ErrorBoundery>
<Herow HeroN={'abbas'}/>
</ErrorBoundery>
<ErrorBoundery>
<Herow HeroN={'jopker'}/>
</ErrorBoundery> */}


{/* <HoverCom name="abbas"/>
<ClickCom name="ali"/> */}
{/* <Clickcount/>
<HoverCount/>
<User render={(isLoggdin)=> isLoggdin? "User":"Gust"}/> */}
{/* <React_Props
render={(count,incrementcount)=>(<Clickcount
count={count}
incrementcount={incrementcount}
/>)}
/> */}
{/* <React_Props>
</React_Props>




<React_Props>
{(count,increment)=>{
  return(
    <HoverCount
    count={count}
    increment={increment}
    />
  )
}}
</React_Props>
{(count,incrementcount)=>
(<Clickcount
count={count}
incrementcount={incrementcount}
/>)
} */}
{/* <API_GetData/> */}
{/* <MainTempeleteFile/> */}
{/* <ProjectApps/> */}

 {/* <RoomProvider>
<BrowserRouter>
<BeachResortMainFile/>
</BrowserRouter>
</RoomProvider>  */}

<ContextAPI>
 <BrowserRouter>
<HotelManagement/>
</BrowserRouter> 
</ContextAPI>

    </div>
  );
}

export default App;
