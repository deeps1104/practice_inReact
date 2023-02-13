import React from 'react'
import Image1 from './Image1'

const Profile = ({ person, size }) => {
  return (
    <div>
       <img
    className="avatar"
    src={Image1(person)}
    alt={person.name}
    width={size}
    height={size}
  />
  </div>
  )
}

export default Profile