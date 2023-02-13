import React from 'react'
import Profile from './Profile'
import Teststyle from './Teststyle'

const User = (props) => {
  setInterval(User, 1000);
  return (
    <div>
      <h1>hey user your data is here {props.data2}</h1>
      <Teststyle date={new Date()}/>
      <Profile
      size={100}
      person={{ 
        name: 'Katsuko Saruhashi', 
        imageId: 'YfeOqp2'
      }}/>
      <Profile
      size={80}
      person={{ 
        name: 'Katsuko Saruhashi', 
        imageId: 'YfeOqp2'
      }}/>
      <Profile
      size={60}
      person={{ 
        name: 'Katsuko Saruhashi', 
        imageId: 'YfeOqp2'
      }}/>
    </div>
    
  )
}

export default User