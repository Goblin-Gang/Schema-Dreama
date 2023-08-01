import React from 'react';
import { Link } from 'react-router-dom';

export default function CourseTitle({ title, unitList, link }) {
  
  const units = Object.keys(unitList); 

  return (
    <>
      <div className='courseTile'>
        <h3>{title}</h3>

        <div>
          <ul>
            {units.map(unitKey => (
              <li key={unitKey}>{unitKey}</li>
            ))}
          </ul>
        </div>

        <div className='completionBox'>
          <p>100% (5/5) Complete</p>

          <div>
            <Link to={link}>
              <button type='button'>
                Unit Complete
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
