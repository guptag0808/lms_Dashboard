import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext.js';
import '../styles/Navbar.css'; // Assuming you have a CSS file for the navbar

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar">
      {user ? (
        <>
          <Link to="/">Courses</Link>
          {user.role === "teacher" && (
            <Link to="/upload" style={{ marginLeft: '20px' }}>Upload Course</Link>
          )}
          <button onClick={logout} style={{ marginLeft: '20px' }}>Logout</button>
        </>
      ) : (
        <Link to="/login" className="loginButton">Login</Link>
      )}
    </div>
  );
};

export default Navbar;
