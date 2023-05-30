import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import './Login.css'; 

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
      <div>
      <h1> SCHEAMA DREAMA </h1>
        <div className="main">
        <h2 id='registerh'>SIGN UP</h2>
        {/* //render forms for username, password and submit button */}
    <form onSubmit = {handleSubmit}>
      <label>

        <input className ="un" type="text" align="center" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
  
        <input className ="un" type="password" align="center" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button className ="register" type="Create Account">Submit</button>
      </div>
    </form>
    </div>
    </div>
    )
}


export default SignUp;
