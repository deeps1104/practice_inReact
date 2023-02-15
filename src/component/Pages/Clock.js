import React, { useState } from 'react'
let stop1;
const Clock = () => {
  const [timer,setTimer] = useState(new Date().toLocaleTimeString())
  

const handleTime = () => {
  stop1 = setInterval(()=> {
   setTimer(new Date().toLocaleTimeString())
},1000)
}

const stopTimer1 = () => {
  clearInterval(stop1)

}
  return (
    <div className="container my-5" style={{backgroundColor:"skyblue",height:"40vh",width:"30%"}}>
       <h2 className='py-2'>{timer}</h2>
      <div className="row ">
      <div className='col-6 mt-5'>
<button className="btn btn-danger" onClick={handleTime} >Start Time</button>
</div>
<div className="col-6 mt-5">
<button className="btn btn-primary" onClick={stopTimer1} >StopTime</button>
</div>


</div>
      </div>
    
  )
}

export default Clock