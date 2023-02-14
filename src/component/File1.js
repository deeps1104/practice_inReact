import React, { useState } from 'react'
import File2 from './File2'

const File1 = () => {
  const [form1, setForm1] = useState(false)
  const handleData = () => {
    setForm1(prevState => !prevState)
  }

  return (
    <div>
<File2 form1 ={form1}/>
    <button className='btn btn-primary mt-2 px-5 rounded-pill' onClick={handleData}>button2</button>

    </div>
  )
}

export default File1