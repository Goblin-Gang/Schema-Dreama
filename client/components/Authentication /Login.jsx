import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import './Login.css'; 

const Login = (props) =>  {
    //using useState to reassign username and password state
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();


    // [3] using useState to conditionally check if user has signed in
    // if user has signed in, google will return and store userObject inside state
    const [user, setUser] = useState({});


    //function submit to get the inputs from username and password using fetch
    const handleSubmit = async e => {
      e.preventDefault();
      const url = "http://localhost:3000/login"
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
    console.log('successful login', responseData)
    if (responseData.verified){
      props.handleLogin();
    }

    
  }



    // [2] Function to handle JWT ID token response from google
    // decode token to access user information and setting user state set user login status
    function handleCallbackResponse (res) {
      // console.log("Encoded JWT ID token" + res.credential);
      const userObject = jwt_decode(res.credential)
      console.log(userObject);
      setUser(userObject);
  
      document.getElementById('googOAUTH').hidden = true;
      props.handleLogin();
    };

    // [4] Signout button clears user object from state which "signs user out"
    function handleSignOut(e) {
      setUser({});
      document.getElementById('googOAUTH').hidden = false;
    }


    // [1] Intialize client and google button for Google
    // NOTE: Do not remove /* global google */ comment or app will throw error - this lets the linter know google script has been loaded via index html and provides us access to google script objs
    // use google intalize method - takes and object w/ registered google api and a callback that will be called w/ an object response from google once user has successfully been authenticated 
    // renderButton default button from google
    useEffect(() => {
      /* global google */
      google.accounts.id.initialize({
        client_id: "921926110672-m47ae0eakm19m91qbevengblogk3e4dr.apps.googleusercontent.com",
        callback: handleCallbackResponse
      });

      google.accounts.id.renderButton(
        document.getElementById("googOAUTH"),
        { theme: "outline", size: "large"}
      );

      google.accounts.id.prompt();

    }, []);





    return (
      <div className='main'>
        <div className="login-wrapper">
        <h1 >Login</h1>
        {/* //render forms for username, password and submit button */}
    <form onSubmit = {handleSubmit}>
      <label>
        <input className ="un"  type="text" align="center" placeholder="Username" onChange={e => setUserName(e.target.value)}/>
      </label>
      <label>
        <input className ="un" type="password" align="center" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
      </label>
      <div>
        <button className ="submit" type="submit">Submit</button>

       <Link to = "/signup"> <button className ="register" type="signup">Sign Up</button> </Link>
      </div>
      </form>

      {/* // checking if user object exist - if so hide google OAuth button */}
      { Object.keys(user).length != 0 &&
        <button onClick={ (e) => handleSignOut(e)}>Sign Out</button>
      }

     {/* // render the google OAuth login button  */}
      <div id='googOAUTH'>
      </div>
      
      {/* // rendering user profile pic and name for test */}
      {user &&
          <div>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>
          </div>

        }
      </div>
    </div>
    )
}

export default Login;
