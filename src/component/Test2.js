import React, {useEffect, useState } from 'react'
import Test3 from './Test3';
const Test2 = (props) => 



{
  const element = <a href="https://www.reactjs.org">Click on this link </a>;
  const item = { 
    id: 1, 
    name : "DEEPIKA", 
    amount : 30.5, 
    spendDate: new Date("2020-10-10"), 
    category: "Food" 

 } 
 const [name, setName] = useState("")

 useEffect (()=> {
  
 })


  return (
    <>
      <h1>JSX Example</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
      />
      <p>{element}</p>
      <ol style={{color: "red"}}>
        <b>Item1:</b>
        <li>User1</li>
        <b>Item2:</b>
        <li>User2</li>
        <b>Item3:</b>
        <li>User3</li>
      </ol>
      <input placeholder='Name' value={name} onChange={(e) =>setName(e.target.value) }/>
      <p>{name}</p>
      <Test3  brand={ item.name }/>
    </>
  )
}

export default Test2