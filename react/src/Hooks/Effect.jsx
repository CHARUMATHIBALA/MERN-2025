import React, { use } from 'react'
import { useState,useEffect } from 'react';
import { data } from 'react-router-dom';

const Effect = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => (res.json()))
      .then((data) => setUser(data))
  }, []);

    //   setTimeout(() => {
    //     setCount(count + 1);
    //   }, 500);
    // }, [count]);        

    const handleIncrement = () => {
      setCount(count + 1);
    };
    const handleDecrement = () => {
      setCount(count - 1);
    };

    const handleReset = () => {
      setCount(0);
    };

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>  
        <button onClick={handleDecrement}>Decrement</button>      
        <button onClick={handleReset}>Reset</button>  
        <ol>
          {user.map((data) => (
            <>
            <li>{data.id}</li>
            <li>{data.name}</li>
            <li>{data.email}</li>
            <li>{data.address.geo.lng}</li>
            <li>{data.address.geo.lat}</li>
            <li>{data.address.city}</li>  
            </>
          ))}
        </ol>
    </div>
  )
}

export default Effect