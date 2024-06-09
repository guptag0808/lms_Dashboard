import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './Routes';
import { CourseProvider } from './context/CourseContext.jsx';
import { AuthProvider } from './context/AuthContext.js';
import './style.scss';

const App = () => (
  <AuthProvider>
    <CourseProvider>
      <Navbar />
      <AppRoutes />
    </CourseProvider>
  </AuthProvider>
);

export default App;
