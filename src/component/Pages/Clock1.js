import React from "react";

class Clock1 extends React.Component {
  
constructor(props){
  super(props)
  this.state = {
    time: Date().toLocaleString()
  }
}

setTime = () => {
  
  setInterval(()=> {
    this.setState({time:Date().toLocaleString()})
  },1000)
}

render(){
  const style1 = {
    fontSize: "25px",
    letterSpacing:"2px",
    padding:"8px",
    textAlign:"center"


  }
  return (
    <div>
      <h2 className="mt-5">here is your time {this.state.time}</h2>
      <button  style={style1}   className="btn btn-success  w-50 rounded-pill" onClick={()=>{this.setTime()}}>Get Time</button>
    </div>
  );
}

}
export default Clock1