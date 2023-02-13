import React from "react";

class Practice1 extends React.Component {
  constructor(props) {
    super(props)    
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964
    };
    this.state = {favoritecolor: "red"};

} 
static getDerivedStateFromProps(props, state) {
  return {favoritecolor: props.favcol };
}
  render(){
    const mystyle = {  
      color: "Green",  
      backgroundColor: "lightBlue",  
      padding: "10px",  
      fontFamily: "Arial"  
    };  
    return (
      <div style={mystyle}>        
     <p>My {this.state.brand}</p>
        <p>
          It is a {this.state.color}
          
        </p> 
        <p onClick={this.model}> {this.state.model}</p>
        <p> from {this.state.year}.</p>
          <h3>hey here is the piece of code {this.props.name}</h3>
          <h2>hey here is the piece of code {this.props.city ? "true" : "False"}</h2>
<h5>My Favorite Color is {this.state.favoritecolor}</h5>
   
    </div> 
    )
  }
}
 export default Practice1