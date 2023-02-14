import React, { useState } from 'react'

const Count = () => {
  const [count,setCount] = useState(0)
  const [count1,setCount1] = useState(0)

  const handlecount = () => {
    setCount(count+1)

  }
  const handlecount1 = () => {
    setCount1(count1-1)

  }
  return (
    <div>

      <p>Your click {count} time</p>
      <button className='btn btn-secondary px-5 rounded-bill' onClick={handlecount} >Click Me</button>
      <p>Your click {count1} time</p>
      <button className='btn btn-warning px-5 m-2 rounded-bill' onClick={handlecount1} >Click Me</button>

    </div>
  )
}

export default Count