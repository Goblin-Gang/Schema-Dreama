import React, { Component, useState } from 'react';
import SchemaMaker from './SchemaMaker.jsx';

function App() {
  //State for Key-Value Pairs
  const [kvpArr, setKvp] = useState([
    { name: 'asdf', type: 'Number', require: false },
  ]);
  //State for Past Projects

  //functions to drill down

  // updateKvpSchema actually changes the state each time, and then all the other f(n)s invoke it.
  const updateKvpSchema = (rowNum, changeObj) => {
    const newState = structuredClone(kvpArr);
    Object.assign(newState[rowNum], changeObj);
    setKvp(newState);
  };

  return (
    <div>
      <h1>Schema Dreama</h1>
      <div>InputButton</div>
      <div>PastProjects</div>
      <SchemaMaker kvpArr={kvpArr} updateKvpSchema={updateKvpSchema} />
    </div>
  );
}

export default App;
