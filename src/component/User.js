import React from 'react'
import Profile from './Profile'

const User = () => {
  return (
    <div>
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