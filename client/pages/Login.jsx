import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate, Navigate  } from 'react-router-dom';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
)

export default function login () {
  const [session, setSession] = useState(null)
  console.log(process.env.REACT_APP_SUPABASE_URL)
  console.log(process.env.REACT_APP_SUPABASE_ANON_KEY)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (!session) {
    return (<Auth 
      supabaseClient={supabase} 
      appearance={{ theme: ThemeSupa }} 
      theme='dark'
      providers={['google','github','discord']}
      />)
  }
  else {
    return (	<Navigate to="/Home" />)
  }
}