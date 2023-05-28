import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = ( ) =>  {
    //using useState to reassign username and password state
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();




    return (
        <div className="login-wrapper">
        <h1>Login</h1>
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
        <button type="submit">Submit</button>

       <Link to = "/signup"> <button type="signup">Sign Up</button> </Link>
      </div>
    </form>
    </div>
    )
}

export default Login;
