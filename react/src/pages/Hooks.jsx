import React from 'react';
import { Link } from 'react-router-dom';

const Hooks = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginTop: "50px" }}>
      <Link to="/State">USE STATE</Link>
      <Link to="/Effect">USE EFFECT</Link>
    </div>
  );
};

export default Hooks;
