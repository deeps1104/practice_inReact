import React from 'react'
import User from './User'

const Teststyle = (props) => {
  const val1 = {
    color: "red",
  }
  const name = "HTML"
  return (
    <div>
    <h3 style={{color:"blue"}} >Hello CodeSandbox</h3>
    <h5 style={val1}>its react test1</h5>
    <h2>It is {props.date.toLocaleTimeString()}.</h2>
    <User data2={name}/>
  </div>

  )
}

export default Teststyle