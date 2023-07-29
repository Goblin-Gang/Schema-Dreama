import React from 'react'
import { Link, Outlet } from "react-router-dom";
import TableOfContents from '../components/TableOfContents.jsx'
import UnitTiles from '../components/UnitTiles.jsx';

export default function Overview() {
  const units = [
    'What are Databases?',
    'Types of Databases',
    'What are Transactions?',
    'Resources'
  ];

  return (
    <>
      <div id='overviewContainer'>
        <div className='tocContainer'>
          <TableOfContents />
        </div>
        <div className='tileContainer'>
          {/* Map over the units array and pass each unit to the UnitTiles component */}
          {units.map(unit => (
            <UnitTiles key={unit} unit={unit} />
          ))}
        </div>
      </div>
    </>
  );
}

