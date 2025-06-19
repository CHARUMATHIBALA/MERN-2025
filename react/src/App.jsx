import React from 'react'
import Child from './components/Child'
import About from './pages/About'
import Homee from './pages/Homee'
import Contact from './pages/Contact'
import Skills from  './pages/Skills'
import FormPage from './pages/FormPage'
import Counter from './components/Counter'



const App = () => {
  var month =["January","Februray","March","April","May","June","July","August","September","October","November","December"];
  var users={username: "charu",password: "2717"}
  return (
    <div>
      <Counter/>
        {/*
        <Child name="charu"phno="1234567890" dept="IT"/>
         <Child name="mathi" phno="1212121212"dept="CSE"/>
         <Homee items ={month} users={users}/>
        
      <FormPage />
        <About/>
        <Contact/>
        <Skills/>
        */}
    </div>
  )
}

export default App