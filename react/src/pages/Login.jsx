import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handlechange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      password: ""
    });
  };

  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(to bottom right, #ff9a9e, #fad0c4)',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '20px',
        padding: '40px 30px',
        width: '320px',
        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        textAlign: 'center'
      }}>
        <h2 style={{ color: '#d6006e' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ color: '#d6006e' }}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handlechange}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none'
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ color: '#d6006e' }}>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handlechange}
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '5px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                outline: 'none'
              }}
              required
            />
          </div>
          <input
            type="submit"
            value="Login"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '8px',
              backgroundColor: '#ff5c8d',
              color: 'white',
              fontWeight: 'bold',
              border: 'none',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#e6005c'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#ff5c8d'}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
