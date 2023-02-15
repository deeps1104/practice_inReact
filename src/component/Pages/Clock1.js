// import React from "react";

// class Clock1 extends React.Component {
  
// constructor(props){
//   super(props)
//   this.state = {
//     curTime: ""  }
// }

// componentDidMount() {
//   this.getTime();
// }

// getTime = () => {
//   var today = new Date(),
//   curTime = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
//   this.setState({ curTime });
  


// };

// render(){
//   const style1 = {
//     fontSize: "25px",
//     letterSpacing:"2px",
//     padding:"8px",
//     textAlign:"center"


//   }
//   return (
//     <div>
//       <h2 className="mt-5">Current Time: {this.state.curTime}</h2>
//       <button  style={style1}   className="btn btn-success px-5 rounded-pill" onClick={()=>{this.getTime()}} >Get Time</button>
//     </div>
//   );
// }

// }
// export default Clock1


import React from "react";
let stop;

class Clock1 extends React.Component {
  
constructor(props){
  super(props)
  this.state = {
    time:  new Date().toLocaleTimeString()
  }
}
setTime = () => {
  stop =  setInterval(() => {
    this.setState({time: new Date().toLocaleTimeString()})
  },1000)
}

stopTimer = () => {
  clearInterval(stop)
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
      <button  style={style1}   className="btn btn-success  px-5 rounded-pill" onClick={()=>{this.setTime()}}>Get Time</button>
      <button  style={style1}   className="btn btn-secondary px-5 rounded-pill" onClick={this.stopTimer}>Stop Time</button>
    </div>
  );
}

}
export default Clock1


