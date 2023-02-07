import React from 'react'

const Test3 = (props) => {
  const data1 = {
    color: "#fff",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div>
      <h2> It is Local time {new Date().toLocaleTimeString()}.</h2>
      <h3>New Doc in React</h3>
      <div style={data1}>
            <div><b>Item:</b> <em> Juice</em></div>
            <div><b>Amount:</b> <em>30.00</em></div>
            <div><b>Spend Date:</b> <em>2020-10-10</em></div>
            <div><b>Category:</b> <em>Food</em></div>
         </div>


         <p></p>
    </div>
  )
}

export default Test3