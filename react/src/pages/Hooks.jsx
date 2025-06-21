import React from 'react';
import { Link } from 'react-router-dom';

const Hooks = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "50px" }}>
      <Link className='LinkHook' to="/State">USE STATE</Link>
      <Link className='LinkHook' to="/Effect">USE EFFECT</Link>
        <Link className='LinkHook' to="/Ref">USE Ref</Link>
         <Link className='LinkHook' to="/Reducer">USE Reducer</Link>
    </div>
  );
};

export default Hooks;
