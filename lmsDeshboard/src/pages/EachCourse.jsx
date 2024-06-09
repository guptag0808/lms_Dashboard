import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '../context/CourseContext';
import '../styles/CourseDetails.css'
const EachCourse = () => {
	const { id } = useParams();
	const [courseChoose, setChooseCourse] = useState([])
	const [status, setStatus] = useState('Not Started');
	const { courses } = useContext(CourseContext)
	let selectCourse
	useEffect(() => {
		selectCourse(id);

	}, [id, selectCourse]);

	selectCourse = (id) => {
		const course = courses.find((course) => course.id === id);
		detailsOfCourse(course)

	};


	const detailsOfCourse = (selectedCourse) => {
		let courseTitle = selectedCourse.title
		let resultCoursetoShow = courses.filter((data) => {
			return data.title.toLowerCase() == courseTitle.toLowerCase()
		})
		console.log(resultCoursetoShow)
		setChooseCourse(resultCoursetoShow)
	}

	if (!courseChoose) return <div>Loading...</div>;
	console.log(courseChoose)

	return (
		<div className="Course-details-container">

			<div className="course-name-list">
				{courseChoose.map((course) => (
					<div className='courseTitle course-box' key={course.id}>
						<div> <img width={100} src={course.url} alt="" /> </div>
						<div>
							<h2>{course.title} </h2>
							<p>{course.description} </p>
						</div>
						<br />
						<div>
							<select className='selectOption' required>
								<option value="Not Started">Not Started</option>
								<option value="In Progress">In Progress</option>
								<option value="Completed">Completed</option>
							</select>
						</div>
					</div>
				))}
			</div>

		</div>

	);
}

export default EachCourse