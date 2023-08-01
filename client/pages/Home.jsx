import React from 'react'
import { Link, Outlet } from "react-router-dom";
import CourseTitle from '../components/CourseTitle.jsx';

export default function Home () {

  const courses = {
    overview: {
      title: 'Overview of SchemaDreama',
      linkz: '/Overview',
      units:  {
        'What are Databases?': '/OV1',
        'Types of Databases': '/OV2',
        'What are Transactions?': '/OV3',
        'Resources': '/OV4'
      },
    },
    postgresSQL: {
      title: 'Unit 1: PostgreSQL',
      linkz: '/PostgreSQL',
      units:  {
        'What is a PostgreSQL Database?': '/PSQL1',
        'Table Setup': '/PSQL2',
        'CRUD Transactions': '/PSQL3'
      },
    },
    noSQL: {
      title: 'Unit 2: NoSQL',
      linkz: '/NoSQL',
      units:  {
        'What is a NoSQL Database?': '/NSQL1',
        'Schema Setup': '/NSQL2',
        'CRUD Transactions': '/NSQL3'
      },

    }
  }

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
  console.log(courseDisplay)
  
  return (
    <>
      <div className='homeContainer'>
          <h1>Welcome to SchemaDreama</h1>
      </div>
      
      <div className='courses'>
        {courseDisplay}
      </div>
    </>
  )
}
