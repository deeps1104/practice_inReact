import React from 'react'

const Render = ({list}) => {


  return (
    (list) ? <h1>Online 🟢</h1> : <h1>Offline 🔴</h1>
    
  )
}

export default Render