import React from 'react'
import { useOutletContext, Link, Outlet } from "react-router-dom";
import TableOfContents from '../components/TableOfContents.jsx';
import UnitTiles from '../components/UnitTiles.jsx';
import Footer from '../components/Footer.jsx'

export default function postgreSQL () {

  const course = useOutletContext().postgresSQL;
  const units = course.units;

  return (
    <>
      <div id='overviewContainer'>
        <div className='tocContainer'>
          <TableOfContents />
        </div>
        <div className='tileContainer'>
          {/* Map over the units array and pass each unit to the UnitTiles component */}
          {Object.entries(units).map(unit => (
            <UnitTiles key={unit[0]} course={course.linkz} unit={unit[0]} link={unit[1]} />
          ))}
        </div>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </>
  );
}