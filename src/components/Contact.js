import React from 'react';


const Contact = () => {
  return (
    <div className="contact-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, Helvetica, sans-serif;
        }

        .contact-container {
          background: #ffffff;
          padding: 20px 30px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 500px;
          text-align: center;
          margin: 20px auto;
        }

        h2 {
          margin-bottom: 20px;
          color: #333;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        label {
          font-size: 0.9rem;
          color: #555;
        }

        input,
        textarea {
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }

        button {
          margin-top: 10px;
          padding: 10px 0;
          border: none;
          background-color: #007bff;
          color: white;
          border-radius: 4px;
          cursor: pointer;
        }

        button:hover {
          background-color: #0056b3;
        }

        textarea {
          resize: none;
          height: 100px;
        }
      `}</style>
      <h2>Contact Us</h2>
      <form id="contact-form" action="thankyou.html">
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
