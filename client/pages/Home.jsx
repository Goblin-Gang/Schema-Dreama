import React from 'react'
import { Link, Outlet } from "react-router-dom";

export default function Home () {
  return (
    <>
      <div className='home-container'>
          <h1>Welcome to SchemaDreama</h1>
      </div>
      
      <div className='courses'>

        <div className='course-tile'>
          <h3>Overview of SchemaDreama</h3>

          <div>
            <ul>
              <li>Id ea laborum dolore pariatur proident minim voluptate est deserunt.</li>
              <li>Enim ut enim officia ullamco sint ullamco eiusmod esse eiusmod nisi laboris ex tempor voluptate.</li>
              <li>Pariatur culpa exercitation excepteur deserunt sint.</li>
            </ul>
          </div>

          <div className='completion-box'>
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

        <div className='course-tile'>
          <h3>Unit 1: PostgresSQL</h3>

          <div>
            <ul>
              <li>Id ea laborum dolore pariatur proident minim voluptate est deserunt.</li>
              <li>Enim ut enim officia ullamco sint ullamco eiusmod esse eiusmod nisi laboris ex tempor voluptate.</li>
              <li>Pariatur culpa exercitation excepteur deserunt sint.</li>
            </ul>
          </div>

          <div className='completion-box'>
            <p>100% (5/5) Complete</p>

            <div>
              <Link to="/PostgresSQL">
                <button type='button'>
                  Unit Complete
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className='course-tile'>
          <h3>Unit 2: NoSQL</h3>

          <div>
            <ul>
              <li>Id ea laborum dolore pariatur proident minim voluptate est deserunt.</li>
              <li>Enim ut enim officia ullamco sint ullamco eiusmod esse eiusmod nisi laboris ex tempor voluptate.</li>
              <li>Pariatur culpa exercitation excepteur deserunt sint.</li>
            </ul>
          </div>

          <div className='completion-box'>
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
