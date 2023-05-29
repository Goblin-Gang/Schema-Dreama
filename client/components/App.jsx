import React, { Component, useState } from 'react';

import PastProjects from './PastProjects.jsx';
import InputButton from './InputButton.jsx';
import SchemaMaker from './SchemaMaker.jsx';
import { Route, Routes } from 'react-router-dom';
import Login from './Authentication /Login.jsx';
import SignUp from './Authentication /SignUp.jsx';

function App() {
  //State for Key-Value Pairs PLACEHOLDER IN EFFECT
  const kvpArrPlaceholder = [
    { name: 'GoblinGang', type: 'Number', require: false },
  ];
  const [kvpArr, setKvp] = useState(kvpArrPlaceholder);

  //state for name + ID (array in that order) PLACEHOLDERS IN EFFECT FOR NOW
  const nameIDPlaceholder = ['Goblin Schema', '6472390fdbeb9b56b2f98835'];
  const [nameID, setID] = useState(nameIDPlaceholder);

  //state for login
  const [loggedIn, setLoggedIn] = useState(false);

  //state for signup
  const [signedUp, setSignedUp] = useState(false);

  //State for Past Projects

  //functions to drill down

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
      body: nameID[1],
      mode: 'cors',
    })
      .then((res) => console.log(res)) //after this set schema state to null
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
      body: JSON.stringify({ form: JSON.stringify(kvpArr), id: nameID[1] }),
      mode: 'cors',
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  //TODO: need a conditional to reroute to signup component
  //if login is false, reroute to signup
  //if signup is true, reroute to login
  //if login is successful reroute to homepage

  return (
    <div id="appBox">
      <Routes>
        <Route exact path="/" />
        {/* {loggedIn ? < />: <SignUp/ >} */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/schemamaker" element={<SignUp />} />
      </Routes>

      {/* if logged in is successful, reroute to the rest of the components; otherwise, reroute to login page  */}
      {loggedIn ? (
        <>
          <h1>Schema Dreama</h1>
          <span>
            <InputButton />
          </span>
          <div>PastProjects</div>
          <SchemaMaker
            kvpArr={kvpArr}
            schemaName={nameID[0]}
            schemaFunc={schemaFunc}
          />
        </>
      ) : (
        <Login handleLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
