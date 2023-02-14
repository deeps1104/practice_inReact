import './App.css';
import Count from './component/Count';
import Example from './component/Example';
import File1 from './component/File1';
import Form from './component/Form';
import Clock from './component/Pages/Clock';
import Clock1 from './component/Pages/Clock1';
import Header from './component/Pages/Header';
import Login from './component/Pages/Login';
import Login1 from './component/Pages/Login1';
import Logout from './component/Pages/Logout';
import Practice from './component/Practice';
import Practice1 from './component/Practice1';
import Test1 from './component/Test1';
import Test2 from './component/Test2';
import Test4 from './component/Test4';
import Teststyle from './component/Teststyle';
import User from './component/User';


function App() {
  return (
    <div className="App">
      {/* <Practice1 name="Class Component tutorial" favcol="brown"/> */}
      {/* <Header/>
      <Practice /> */}
      <File1/>
       <Header/>
       <Clock1/>
       <Count/>
       <Example/>
       {/* <Clock/> */}
{/* <Login/>
<Logout/>
<Login1/>

<Clock1/> */}
      {/* <Test2/> */}
             {/* <User/> */}

     {/* <Test1 />
      <Form/>
      <Practice />
             <Test1/> 
             <Teststyle/>
     <Test4/> */}
{/* <Form/> */}
    </div>
  );
}

export default App;
