import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      console.log(response.data); // Debugging the response
      alert(response.data?.message || 'Signup successful!');
    } catch (error) {
      console.error(error.response?.data); // Debugging error response
      alert(error.response?.data?.message || 'Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Create an Account</h2>
      <form id="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />

        <label htmlFor="last_name">Last Name</label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ width: '100%', marginBottom: '10px', padding: '8px' }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
