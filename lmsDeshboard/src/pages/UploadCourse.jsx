import React, { useState, useContext, useEffect } from 'react';
import { CourseContext } from '../context/CourseContext';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/Upload.css"
const UploadCourse = () => {
  const { addCourse } = useContext(CourseContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lessons, setLessons] = useState('');
  const [image,setImage]= useState('')
  const [topic,setTopic]= useState('')
  const [url,setUrl] = useState('')
 useEffect(()=>{
  if(image){
    const data = new FormData()
		data.append("file",image)
		data.append("upload_preset","FotoFlick")
		data.append("cloud_name","dlhjyckpv")

		fetch('https://api.cloudinary.com/v1_1/dlhjyckpv/image/upload',{
			method:"post",
			body:data
		})
		.then(res=>res.json())
		.then(data=>{
			console.log(data)
			setUrl(data.url)
			
		})
		.catch(err=>{
			console.log(err)
		})
  }
  console.log(url)
 },[image])


  const handleSubmit = (e) => {
    e.preventDefault();
    const newCourse = {
      id: Date.now().toString(),
      title,
      topic,
      description,
      lessons: lessons.split('\n'),
      url
    };
    addCourse(newCourse);
    toast.success('Course uploaded successfully!', { autoClose: 1000 });
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Upload New Course</h2>
      <form onSubmit={handleSubmit} className="upload-form">
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Topic</label>
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} />
        </div>
        <div>
          <label>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Lessons (separated by new lines)</label>
          <textarea value={lessons} onChange={(e) => setLessons(e.target.value)} />
        </div>
        <div className="btn">
				<span>Upload Image</span>
				<input type="file" 
				 
				onChange={(e)=>setImage(e.target.files[0])}
				 />
			</div>
        <button type="submit">Upload</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UploadCourse;
