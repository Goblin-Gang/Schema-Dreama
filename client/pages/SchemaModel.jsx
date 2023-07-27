import React, { Component, useState, useEffect } from 'react';

import PastProjects from '../components/PastProjects.jsx';
import InputButton from '../components/InputButton.jsx';
import SchemaMaker from '../components/SchemaMaker.jsx';
import { Router, Route, Redirect, Routes } from 'react-router-dom';
import Login from '../components//Authentication /Login.jsx';
import SignUp from '../components//Authentication /SignUp.jsx';

function SchemaModel() {
  //State for Key-Value Pairs
  const [kvpArr, setKvp] = useState([
    { name: 'GoblinGang', type: 'Number', require: false },
  ]);
  const [currentDocument, setCurrentDocument] = useState({
    title: 'temp',
    schemaSchema: 'temp',
    _id: 'temp'
  })

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
      <Route
        exact path="/"
        element={(
          <>
            <h1>Schema Dreama</h1>
            <div className='profile-box'>
              <img className="profile-pic" src={user.picture} alt="Profile"></img>
              <h3>{user.name}</h3>
            </div>
            <span>
              <InputButton schemaFunc={schemaFunc} />
            </span>
            <div>PastProjects</div>
            <SchemaMaker kvpArr={kvpArr} schemaFunc={schemaFunc} currentDocument={currentDocument} />
          </>
        )}
      />
    </Routes>
  </div>
);
}

export default SchemaModel;
