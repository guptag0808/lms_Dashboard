import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/Register.css'
const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const[role,setRole] = useState("user")
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let success= register(email, name,role, password);
   
    console.log(success) // Assuming login returns a success status
    if (success) {
      toast.success('Logged in successfully!', { autoClose: 1000 });
      setTimeout(() => {
        navigate('/');
      }, 3000); // Navigate after 1 second to allow toast to show
    } else {
      toast.error('Login failed. Please check your credentials.', { autoClose: 1000 });
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="role" >Role:</label><br />
          <select style={{width:'100%'}} value={role} className='selectOption' onChange={(e)=> setRole(e.target.value)} required>
								<option value="user">User</option>
								<option value="user">User</option>
								<option value="teacher">Teacher</option>
							</select>
        </div>
        <br />
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
       
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Register;
