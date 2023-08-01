import React from 'react'
import { Link, Outlet } from "react-router-dom";
import TableOfContents from '../components/TableOfContents.jsx'
import UnitTiles from '../components/UnitTiles.jsx';

export default function Overview () {
  const units =  {
    'What are Databases?': '/OV1',
    'Types of Databases': '/OV2',
    'What are Transactions?': '/OV3',
    'Resources': '/OV4'
  }
  
  return (
    <>
      <div id='overviewContainer'>
        <div className='tocContainer'>
          <TableOfContents />
        </div>
        <div className='tileContainer'>
          {/* Map over the units array and pass each unit to the UnitTiles component */}
          {Object.entries(units).map(unit => (
            <UnitTiles key={unit[0]} unit={unit[0]} link={unit[1]} />
          ))}
        </div>
      </div>
    </>
  );
}