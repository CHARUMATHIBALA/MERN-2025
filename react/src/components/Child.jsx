import React from 'react'

const Child = (props) => {
  return (
    <div>
      <h3>Hello {props.name}!</h3>
      <h3>Your number {props.phno}!</h3>
      <h3>Your dept {props.dept}!</h3>

    </div>
  )
}

export default Child
