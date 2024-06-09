import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseList from './pages/CourseList';
import CourseDetails from './pages/CourseDetails';
import UploadCourse from './pages/UploadCourse';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import EachCourse from './pages/EachCourse';
const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/" element={<PrivateRoute />}>
      <Route index element={<CourseList />} />
      <Route path="course/:id" element={<EachCourse />} />
      <Route path="upload" element={<UploadCourse />} />
    </Route>
  </Routes>
);

export default AppRoutes;
