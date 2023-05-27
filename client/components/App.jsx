import React, { Component, useState } from 'react';
import SchemaMaker from './SchemaMaker.jsx';

function App() {
  //State for Key-Value Pairs
  const [kvpArr, setKvp] = useState([
    { name: 'GoblinGang', type:'Number', require:false},
  ]);
  //State for Past Projects

  //functions to drill down

  // updateKvpSchema actually changes the state each time, and then all the other f(n)s invoke it.
  const updateKvpSchema = (rowNum, changeObj) => {
    const newState = structuredClone(kvpArr);
    Object.assign(newState[rowNum], changeObj);
    setKvp(newState);
  };

  const saveSchema = () => {
    fetch('/', {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000/',
         'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({  name: JSON.stringify(kvpArr) }),
      mode: 'cors'
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Schema Dreama</h1>
      <div>InputButton</div>
      <div>PastProjects</div>
      <SchemaMaker kvpArr={kvpArr} updateKvpSchema={updateKvpSchema} />
      <button onClick={saveSchema}> ATTEMPT TO CONNECT TO BACKEND</button>
    </div>
  );
}

export default App;
