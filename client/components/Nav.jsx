import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate, Navigate  } from 'react-router-dom';

const supabase = createClient(
  'https://aoypnczayvorgnecyuan.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFveXBuY3pheXZvcmduZWN5dWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2ODQ5NzcsImV4cCI6MjAwNzI2MDk3N30.iR2ojpSxZ7pad2oZ1zFLbIZ7pNjDNLqTPBBK8jvUKRQ'
)

export default function Nav (){

  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if(value.data?.user) {
          console.log(value.data.user)
          setUser(value.data.user)
        }
      })
    }
    getUserData()

  },[]);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate('/')
  }


  const courses = {
    overview: {
      title: 'Overview of Databases',
      linkz: '/Overview',
      units:  {
        'What are Databases?': '/OV1',
        'What are Transactions?': '/OV2',
        'Database Providers': '/OV3',
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


  return (
      <>
          <div className="nav">
            <div className="navLeft">
              <h3>SchemaDreama</h3>
              <nav className="navLeftLinks">
                <ul>
                    <a>
                      <Link to="/">Home</Link>
                    </a>
                    <a>
                      <Link to="/Home/SchemaModel">Schema Model</Link>
                    </a>
                </ul>
              </nav>
            </div>

            <div className="navRight">
              <ul>
                <a>
                  <Link to="/login">Login</Link>
                </a>
                <a onClick={ () => signOutUser()}>
                  Sign Out
                </a>
              </ul>
            </div>
          </div>

          <Outlet context={courses}/>
      </>
  );
}