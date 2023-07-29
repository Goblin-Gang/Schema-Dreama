import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Home () {
  return (
    <>
      <div className='homeContainer'>
          <h1>Welcome to SchemaDreama</h1>
      </div>
      
      <div className='courses'>

        <div className='courseTile'>
          <h3>Overview of SchemaDreama</h3>

          <div>
            <ul>
              <li>What are Databases?</li>
              <li>Types of Databases</li>
              <li>What are Transactions?</li>
              <li>Resources</li>
            </ul>
          </div>

          <div className='completionBox'>
            <p>100% (5/5) Complete</p>

            <div>
              <Link to="/Overview">
                <button type='button'>
                  Unit Complete
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className='courseTile'>
          <h3>Unit 1: PostgreSQL</h3>

          <div>
            <ul>
              <li>What is a PostgreSQL Database</li>
              <li>Table Setup</li>
              <li>CRUD Transactions</li>
            </ul>
          </div>

          <div className='completionBox'>
            <p>100% (5/5) Complete</p>

            <div>
              <Link to="/PostgreSQL">
                <button type='button'>
                  Unit Complete
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className='courseTile'>
          <h3>Unit 2: NoSQL</h3>

          <div>
            <ul>
              <li>What is a NoSQLDatabase?</li>
              <li>Schema Setup</li>
              <li>CRUD Transactions</li>
            </ul>
          </div>

          <div className='completionBox'>
             <p>100% (5/5) Complete</p>

              <div>
              <Link to="/NoSQL">
                <button type='button'>
                  Unit Complete
                </button>
              </Link>
              </div>
            </div>
        </div>

      </div>
    </>
  )
}
