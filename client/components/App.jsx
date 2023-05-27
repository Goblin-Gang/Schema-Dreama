import React, { Component, useState } from 'react';
import SchemaMaker from './SchemaMaker.jsx';

function App() {
  //State for Key-Value Pairs
  const [kvpArr, setKvp] = useState([
    { name: 'asdf', type: 'Number', require: false },
  ]);
  //State for Past Projects

  //functions to drill down

  return (
    <div>
      <h1>Schema Dreama</h1>
      <div>InputButton</div>
      <div>PastProjects</div>
      <SchemaMaker kvpArr={kvpArr} />
    </div>
  );
}

export default App;
