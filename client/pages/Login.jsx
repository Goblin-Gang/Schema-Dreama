import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useNavigate, Navigate  } from 'react-router-dom';

const supabase = createClient(
  'https://aoypnczayvorgnecyuan.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFveXBuY3pheXZvcmduZWN5dWFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE2ODQ5NzcsImV4cCI6MjAwNzI2MDk3N30.iR2ojpSxZ7pad2oZ1zFLbIZ7pNjDNLqTPBBK8jvUKRQ'
)

export default function login () {
  const [session, setSession] = useState(null)

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