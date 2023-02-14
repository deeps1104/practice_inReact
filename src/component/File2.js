import React from 'react'
import Form from './Form'

const File2 = ({form1}) => {
  return (
   
    (form1) ? <p><Form/></p>: <p className='mt-5'>"No data found"</p>
   
  )
}

export default File2