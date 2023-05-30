import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom"


const SignUp = (props) =>  {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [signedIn, setSignedIn] = useState(false)

//function submit the fetch request
    

  async function handleSubmit(e) {
    e.preventDefault();
    const url = "http://localhost:3000/signup"
    const data = {
      username,
      password
    }
    const response = await fetch(url, {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
         'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
      mode: 'cors'

    })
    const responseData =  await response.json()
    if (responseData.length > 5) {
      setSignedIn(true)
    }
    
  }

  useEffect(() => {
  console.log('redirected')
}, [signedIn])

  if (signedIn) {
    return <Navigate to = "/"/>
  }


    return (
        <div className="Signup-wrapper">
        <h1>Create a New Account</h1>
        {/* //render forms for username, password and submit button */}
    <form onSubmit = {handleSubmit}>
      <label>
        <p>Username</p>
        <input type="text" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <p>Password</p>
        <input type="password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button type="Create Account">Submit</button>
      </div>
    </form>
    </div>
    )
}


export default SignUp;
