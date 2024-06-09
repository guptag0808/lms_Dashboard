import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const register = (email, name, role,password) => {
    const newUser = { email, name, role ,password };
    localStorage.setItem('userRegistered', JSON.stringify(newUser))
    localStorage.setItem('user', JSON.stringify(newUser));
    setUser(newUser);
    return true
  };

  const login = (email, password) => {
    const storedUser = JSON.parse(localStorage.getItem('userRegistered'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      localStorage.setItem('user', JSON.stringify(storedUser));
      setUser(storedUser);
      return true
    } else {
      alert('Invalid email or password');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
