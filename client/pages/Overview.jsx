import React from 'react'
import { Link, Outlet } from "react-router-dom";
import TableOfContents from '../components/TableOfContents.jsx'
import OV1 from '../components/Overview/OV1.jsx'
import OV2 from '../components/Overview/OV2.jsx'
import OV3 from '../components/Overview/OV3.jsx'
import OV4 from '../components/Overview/OV4.jsx'

export default function Overview () {
  return (
    <>
    <div id='overviewContainer'>
      <div className='tocContainer'>
        <TableOfContents/>
      </div>
      <div className='tileContainer'>
        <OV1/>
        <OV2/>
        <OV3/>
        <OV4/>
      </div>
    </div>
    </>
  )
}
