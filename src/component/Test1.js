import React from 'react'
import Test2 from './Test2'

const Test1 = () => {

  const element = (
    <div>
      <h1>Hello, test9876!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  setInterval(Test1, 1000);
  return (
   
<article>
<p>{element}</p>
 <Test2 />
</article>  
  )
}

export default Test1