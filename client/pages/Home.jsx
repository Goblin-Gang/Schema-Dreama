import React from 'react'
import { useOutletContext, Link, Outlet } from "react-router-dom";
import CourseTitle from '../components/CourseTitle.jsx';
import Footer from '../components/Footer.jsx';

export default function Home () {

  const courses = useOutletContext()

  const courseDisplay = [];

  for (let key in courses) {
    courseDisplay.push(
      <CourseTitle 
        key={courses[key].title}
        title={courses[key].title} 
        link={courses[key].linkz} 
        unitList={courses[key].units} 
      />);
  }
  
  return (
    <>
      <div className='homeContainer'>
          <h1>Welcome 😜</h1>
      </div>
      
      <div className='courses'>
        {courseDisplay}
      </div>

      <div className='footer'>
        <Footer/>
      </div>
    </>
  )
}