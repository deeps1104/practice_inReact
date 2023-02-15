// import React from 'react'
// import Form from './Form'

// const File2 = ({form1}) => {
//   return (
   
//     (form1) ? <p><Form/></p>: <p className='mt-5'>"No data found"</p>
   
//   )
// }

// export default File2
import React from 'react'
import { positions, Provider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";
import File1 from './File1';
const File2 = () => {
  const options = {
    position: positions.LEFT
  };

  return (
    <div>
    <Provider template={AlertMUITemplate} {...options}>
    <File1/>
    </Provider>
    </div>
    
  )
}

export default File2