import React from 'react';
import Child from './components/Child';
import About from './pages/About';
import Homee from './pages/Homee';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import FormPage from './pages/FormPage';
import Counter from './components/Counter';
import Navbar from './components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Hooks from './pages/Hooks';
import State from './Hooks/State.jsx';
import  Effect from './Hooks/Effect.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';




const App = () => {
  var month = ["January", "Februray", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var users = { username: "charu", password: "2717" };

  return (
    <div>
      {/* Uncomment these to see them in action */}
      {/* <Counter/>
      <Child name="charu" phno="1234567890" dept="IT" />
      <Child name="mathi" phno="1212121212" dept="CSE" />
      <FormPage />
      <About />
      <Contact />
      <Skills /> */}
      
      <Navbar />

      <Routes>
        <Route path='/about' element={<About items={month} users={users} />} />
        <Route path='/about' element={<About/>}/>
          <Route path='/Counter' element={<Counter/>}/>
           <Route path='/Contact' element={<Contact/>}/>
           <Route path='/FormPage' element={<FormPage/>}/>
           <Route path="/hooks" element={<Hooks />} />
           <Route path="/state" element={<State />} />
           <Route path='/effect'element={<Effect/>}/>
           <Route path='/Login'element={<Login/>}/>
            <Route path='/Signup'element={<Signup/>}/>




      </Routes>
    </div>
  );
};

export default App;
