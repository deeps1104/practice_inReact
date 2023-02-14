import React from "react";
 class Login1 extends React.Component {
constructor(props){
  super(props)
 this.state = {
  user1 : true
 }
 this.handleClick = this.handleClick.bind(this);
}
handleClick() {
  this.setState(prevState => ({
    user1: !prevState.user1
  }));
}

render(){
  return (
<button onClick={this.handleClick}>
        {this.state.user1 ? 'ON' : 'OFF'}
      </button>  )
}

 }
 export default Login1