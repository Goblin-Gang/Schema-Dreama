import React from 'react';
import { Link } from 'react-router-dom';

export default function UnitNav ({ links }) {

  return (
    <>
      <div className='unitNav'>
        <div className='unitNavLeft'>
          <ul>
            <a>
              <Link to="/">Home</Link>
            </a>
            <p>{'\u003E'}</p>
            <a>
              <Link to={`/${links[0]}`}>{links[0]}</Link>
            </a>
            <p>{'\u003E'}</p>
            <p>{links[1]}</p>
            <p>{'\u003E'}</p>
            <p>What are Databases?</p>
          </ul>

        </div>

        <div className='unitNavRight'>
          <form>
            <input type="checkbox" id='completionBox' name='completionBox' value="done" />
          </form>
          <p>Mark as Done</p>
          <p> | </p>
          <a>
            <Link to={`${links[2]}`}>Next</Link>
          </a>   
        </div>
      </div>

    </>
  );
}