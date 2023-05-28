import React, {useState} from 'react';


const SignUp = ( ) =>  {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

//function submit the fetch request
    


    return (
        <div className="Signup-wrapper">
        <h1>Create a New Account</h1>
        {/* //render forms for username, password and submit button */}
    <form>
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
