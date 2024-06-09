import React, { useState, useContext } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import '../styles/Login.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
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
    <div className="Logincontainer">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <br/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br/>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <br />
      <p>User already exist?<Link to="/register" style={{marginLeft:"5px",color:"blue"}} >Register</Link></p>
      <ToastContainer />
    </div>
  );
};

export default Login;
