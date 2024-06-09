import React, { createContext, useState, useEffect } from 'react';

const CourseContext = createContext();

const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState(() => {
    const storedCourses = localStorage.getItem('courses');
    return storedCourses ? JSON.parse(storedCourses) : [];
  });
  const [currentCourse, setCurrentCourse] = useState(null);

  useEffect(() => {
    localStorage.setItem('courses', JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course) => {
    setCourses(prevCourses => {
      const newCourses = [...prevCourses, course];
      localStorage.setItem('courses', JSON.stringify(newCourses));
      return newCourses;
    });
  };


 
  

  return (
    <CourseContext.Provider value={{ courses, currentCourse, addCourse, }}>
      {children}
    </CourseContext.Provider>
  );
};

export { CourseProvider, CourseContext };
