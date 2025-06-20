import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>FILL THE DETAILS !!!!</h1>
      <form action="">
        <label htmlFor="name">Name:</label>
        <input type="text" /><br /><br />
        <label htmlFor="dept">Department:</label>
        <input type="text" /><br /><br />
        <label htmlFor="email">Email ID:</label>
        <input type="email" /><br /><br />
        <label htmlFor="phno">PhoneNo:</label>
        <input type="text" /><br /><br />
        <button type="submit" onClick={()=>alert("Form Submitted Successfully")}>Submit</button>
      </form>
    </div>
  )
}

export default Login