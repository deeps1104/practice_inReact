import React from 'react'

const Image1 = (person, size = 's') => {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    size +
    '.jpg'
  );
}

export default Image1