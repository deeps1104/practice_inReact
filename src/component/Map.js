import React from 'react'

const container1 = [2,3,4,1,7,88,4,3]
const Map = (props) => {

const container2 = container1.map((element) => 
<p>{element}</p>

)




  const list = [
    {
      id: 'a',
      firstname: 'Robin',
      lastname: 'Wieruch',
      year: 1988,
    },
    {
      id: 'b',
      firstname: 'Dave',
      lastname: 'Davidds',
      year: 1990,
    },
  ];
  return (
    <div className='bg-secondary text-white'>
      <p> here is list{container2}</p>
      <ol>{
        list.map((list1,index) => (
          <li key={list1.id}>
                      <h1>{index+1}</h1>

<div>{list1.id}</div>
<div>{list1.firstname}</div>
<div>{list1.lastname}</div>
<div>{list1.year}</div>

          </li>
        ))
        }
      </ol>
    </div>
  )
}

export default Map



