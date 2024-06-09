import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import "../styles/CourseDetails.css"
import CourseDetails from './CourseDetails';
const CourseList = () => {
  const { courses } = useContext(CourseContext);
 
  return (
    <div className="courseContainer">
        <h1>All the skills you need in one place</h1>
      
      <div className="course-list">
        {courses.map((course) => (
          <div className='courseTitle' key={course.id}>
        
            <Link className='linkCousre'  to={`/course/${course.id}`}>
              <h3>{course.title}</h3>
            </Link>
          
          </div>
        ))}
      </div>
      <br />
      <hr />
      <CourseDetails  />
    </div>
   
  );
};

export default CourseList;
