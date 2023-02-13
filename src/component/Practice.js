import React from "react";

class Practice extends React.Component{
  constructor(props) {
    super(props);
    this.state = {color: "black"}
    this.state = {date: new Date()};

  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      2000
    );
  }
//setInterval method call function
  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  tick() {
    this.setState({
      date: new Date()
    });
  }



  render()
  {
    const mystyle1 = {  
      color: "#fff",  
      backgroundColor: "black",  
      padding: "10px",  
      fontFamily: "Arial"  
    }; 
    return (
<>
<h2 style={mystyle1}>Hi, I am a {this.state.color}&nbsp; Car!</h2>
<h1>It is {this.state.date.toLocaleTimeString()}.</h1>


</>      
    )
    
    
    
  }
}

export default Practice