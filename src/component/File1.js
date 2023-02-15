// import React, { useState } from 'react'
// import File2 from './File2'

// const File1 = () => {
//   const [form1, setForm1] = useState(false)
  
//   const handleData = () => {
//    setForm1(prevState => !prevState) 

//   }

//   return (
//     <div>
// <File2 form1 ={form1}/>
//     <button className='btn btn-primary mt-2 px-5 rounded-pill' onClick={handleData}>buttons2</button>

//     </div>
//   )
// }

// export default File1





import React, {useState } from "react";
import { useAlert } from "react-alert";

const File1 = () => {
  const alert = useAlert();

  const [action, setAction] = useState("");

  return (
<>
<button className="btn btn-primary mt-5"
        onClick={() => {
          alert.show("This is an alert with extra actions!", {
            title: "Alert with extra actions!",
            actions: [
              {
                copy: "Do something",
                onClick: () => setAction("Actioned!")
              }
            ]
          });
        }}
      >
        Alert with actions
      </button>
      <div>{action}</div>
      </>
  )
}

export default File1