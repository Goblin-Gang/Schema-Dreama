import { Link, Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate, Navigate  } from 'react-router-dom';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
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
        'CRUD Transactions': '/OV3',
        'Database Providers': '/OV4',
        'Resources': '/OV5'
      },
    },
    postgresSQL: {
      title: 'Unit 1: PostgreSQL',
      linkz: '/PostgreSQL',
      units:  {
        'What is a PostgreSQL Database?': '/PSQL1',
        'Table Setup': '/PSQL2',
        'Create': '/PSQL3',
        'Read': '/PSQL4',
        'Update': '/PSQL5',
        'Delete': '/PSQL6'
      },
    },
    noSQL: {
      title: 'Unit 2: NoSQL',
      linkz: '/NoSQL',
      units:  {
        'What is a NoSQL Database?': '/NSQL1',
        'Schema Setup': '/NSQL2',
        'Create': '/NSQL3',
        'Read': '/NSQL4',
        'Update': '/NSQL5',
        'Delete': '/NSQL6'
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