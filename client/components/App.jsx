import React, { Component, useState } from 'react';

import PastProjects from './PastProjects.jsx';
import InputButton from './InputButton.jsx';
import SchemaMaker from './SchemaMaker.jsx';
import { Router, Route, Redirect, Routes } from 'react-router-dom';
import Login from './Authentication /Login.jsx';
import SignUp from './Authentication /SignUp.jsx';

function App() {
  //State for Key-Value Pairs
  const [kvpArr, setKvp] = useState([
    { name: 'GoblinGang', type: 'Number', require: false },
  ]);

  //state for login
  const [loggedIn, setLoggedIn] = useState(false);


  //state for signup
  const [signedUp, setSignedUp] = useState(false);

  //State for Past Projects

  //State for user object
  const [user, setUser] = useState({});

  //functions to drill down

  const userObject = (userObject) => {
    return setUser(userObject)
  }

  const schemaFunc = {};
  // updateKvpSchema actually changes the state each time, and then all the other f(n)s invoke it.
  schemaFunc.updateKvpSchema = (rowNum, changeObj) => {
    const newState = structuredClone(kvpArr);
    Object.assign(newState[rowNum], changeObj);
    setKvp(newState);
  };

  //TODO: FETCH ID TO DELETE ON LINE 33
  schemaFunc.deleteSchema = () => {
    fetch('/', {
      method: 'DELETE',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: null, //TODO: FETCH ID
      mode: 'cors',
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  schemaFunc.addRow = () => {
    const newState = structuredClone(kvpArr);
    newState.push({ name: '', type: 'string', require: false });
    setKvp(newState);
  };

  schemaFunc.saveSchema = () => {
    fetch('/', {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({ name: JSON.stringify(kvpArr) }),
      mode: 'cors',
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  schemaFunc.clearSchema = () => {
    setKvp([
      { name: 'Write something', type: 'Number', require: false },
    ])
  }



  return (
    <div id="appBox">
<Routes>
        <Route exact path="/"  element= {loggedIn ? (
        <>
          <h1>Schema Dreama</h1>
          <div>
            <img className="menu-bg" src={user.picture}></img>

            <button onClick={() => setLoggedIn(false)}>Log Out</button>

            <h3>{user.name}</h3>

          </div>
        
          <span>
            <InputButton handleClick={schemaFunc} />
          </span>
          <div>PastProjects</div>
          <SchemaMaker kvpArr={kvpArr} schemaFunc={schemaFunc} />
        </>
      ) : (
        <>
        {/* <p className="text-danger">You Are Not Logged in</p> */}
        <Login handleLogin={() => setLoggedIn(true)} />
        </>
      )}  />
        {/* {loggedIn ? < />: <SignUp/ >} */}
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/schemamaker" element={<SignUp />} /> */}
</Routes>

      {/* if logged in is successful, reroute to the rest of the components; otherwise, reroute to login page  */}
     


    </div>
  );
}

export default App;
