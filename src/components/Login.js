import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Handle form field change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Parse the JSON response
      const data = await response.json();

      if (response.ok) {
        // Handle success response
        alert(data.message || 'Login successful!');
      } else {
        // Handle error response
        alert(data.message || 'Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <div className="login-container" style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form id="login-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="email" style={{ marginTop: '10px' }}>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: '8px', marginBottom: '10px' }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ padding: '8px', marginBottom: '20px' }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: '#007BFF',
            color: 'white',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            marginBottom: '10px',
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
