import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CourseContext } from '../context/CourseContext';
import '../styles/CourseDetails.css'
const CourseDetails = () => {

  const { courses } = useContext(CourseContext)

  console.log(courses)


  return (
    <div className="Course-details-container">

      <div className="course-name-list">
        {courses.map((course) => (
          <Link className='linkCousre' to={`/course/${course.id}`}>
            <div className='courseTitle course-box' key={course.id}>
              <div> <img width={100} src={course.url} alt="" /> </div>
              <div >
                <h2>{course.title} </h2>
                <p>{course.description} </p>
               
              </div>

            </div>
          </Link>


        ))}
      </div>

    </div>

  );
};

export default CourseDetails;
