import React from "react";
class Login extends React.Component {
constructor(props){
  super(props)
  this.state ={    
    isLoggedIn : true    
}  
}
render(){
  return (this.state.isLoggedIn ? <h1>Welcome in this React Page</h1>
 : <h1>Go Back to Previous Page</h1> 
  )
}


}
export default Login;