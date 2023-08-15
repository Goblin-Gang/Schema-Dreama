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
              <Link to={`/Home${links[0]}`}>{links[0].slice(1)}</Link>
            </a>
            <p>{'\u003E'}</p>
            <p>{links[1]}</p>
            <p>{'\u003E'}</p>
            <p>{links[2]}</p>
          </ul>

        </div>

        <div className='unitNavRight'>
          <form>
            <input type="checkbox" id='completionBox' name='completionBox' value="done" />
          </form>
          <p>Mark as Done</p>
          <p> | </p>
          <a>
            <Link to={`/Home${links[0]}${links[3]}`}>Next</Link>
          </a>   
        </div>
      </div>

    </>
  );
}