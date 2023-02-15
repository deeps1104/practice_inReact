// import React from 'react'

// const Example2 = () => {
//   const click = () => {
// alert("clicked")
//   }
//   return (
//     <div>
//       <button onClick={click}>get</button>
//     </div>
//   )
// }

// export default Example2
import React, { Component } from 'react'

export default class Example2 extends Component {
  constructor(){
    super()
    this.state = {
       name:"User1",
       count:1
    }
  }

  getName(){
     alert("your state is Update with class component  ||")
     this.setState({name:"User2"})
         this.setState({count:this.state.count+1})
  }
  
  render() 
  
  {
    
    return (
      <div>
                 <h3>{this.state.count}</h3> 

        <h3>{this.state.name}</h3>
        <button onClick={()=>this.getName()}>Click here</button>
      </div>
    )
  }
}

