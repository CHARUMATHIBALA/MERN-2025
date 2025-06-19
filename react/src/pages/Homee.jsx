import React from 'react'

const Homee = ({items,users}) => {
  return (
    <div>
    <ol>
      {items.map((month) => (<li>{month}</li>))}
    </ol>
    <h1>{users.username}</h1>
    <h1>{users.password}</h1>
    </div>
  )
}

export default Homee