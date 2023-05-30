import React, { Component, useState, useEffect } from 'react';

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
  const [currentDocument, setCurrentDocument] = useState({
    title: 'temp',
    schemaSchema: 'temp',
    _id: 'temp'
  })

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

  const handleLogOut = () => {
    setUser({})
    setLoggedIn(false)
  }

  const schemaFunc = {};
  // updateKvpSchema actually changes the state each time, and then all the other f(n)s invoke it.
  schemaFunc.addName = function (input) {
    setCurrentDocument(prev => {
      return {...prev, title: input}
    })
  }
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
      body: JSON.stringify(currentDocument),
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.deletedCount) {
          console.log('data.deleted')
          setCurrentDocument({
            title: 'temp',
            schemaSchema: 'temp',
            _id: 'temp'
          })
          schemaFunc.clearSchema()
        }
      })
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
      body: JSON.stringify({ title: currentDocument.title, schemaSchema: JSON.stringify(kvpArr),  _id: currentDocument._id}),
      mode: 'cors',
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCurrentDocument(data, 'save')
        setKvp(JSON.parse(data.schemaSchema))
      })
      .catch((err) => console.log(err));
  };

  schemaFunc.clearSchema = () => {
    setKvp([
      { name: 'Write something', type: 'Number', require: false },
    ])
  }

  useEffect(() => {
    console.log(currentDocument, 'useEffect')
    console.log(kvpArr, 'kvp')
}, [currentDocument, kvpArr])

  return (
    <div id="appBox">
<Routes>
        <Route exact path="/"  element= {loggedIn ? (
        <>

      
          <h1>Schema Dreama</h1>
          
          <div className='profile-box'>
            <img className="profile-pic" src={user.picture}></img>
            <h4>{user.name}</h4>

          </div>

          <button onClick={handleLogOut}>Log Out</button>
          
        
          <span>
            <InputButton schemaFunc={schemaFunc} />
          </span>
          <div>PastProjects</div>
            <SchemaMaker kvpArr={kvpArr} schemaFunc={schemaFunc} currentDocument={currentDocument} />
        </>
      ) : (
        <>

        <Login handleLogin={() => setLoggedIn(true)} userObject={userObject}/>
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
