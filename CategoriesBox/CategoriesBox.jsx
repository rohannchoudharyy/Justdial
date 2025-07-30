import React from 'react'

function CategoriesBox({pic, heading}) {
  return (
    <div>
    <img width="100" height="100" src={pic} alt="restaurant" />
    <h1>{heading}</h1>
</div>
  )
}

export default CategoriesBox