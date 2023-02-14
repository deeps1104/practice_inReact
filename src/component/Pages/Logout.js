import React, { useState } from 'react'
import Render from './Render'

const Logout = () => {

  const[list, setList] = useState(false)
//   const getCss = {
// color:"black",
// padding:"8px",
// border:"2px solid",
// backgroundColor: "red",

//   }
  

  function toggleLogin() {
    setList(prevState => !prevState)
}

  return (
    <div>
      <h2>
        <Render list={list}/>
        <button onClick={toggleLogin}  className="btn btn-primary btn-lg w-25 rounded-pill">Submit</button>
        
      </h2>
    </div>
  )
}

export default Logout