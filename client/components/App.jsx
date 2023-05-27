import React, { Component, useState } from 'react';
import PastProjects from './PastProjects.jsx';
import InputButton from './InputButton.jsx';

function App() {
  //State for Key-Value Pairs
  const [kvpArr, setKvp] = useState([{ name: '', value: 'String' }]);
  //State for Past Projects

  //functions to drill down

  return (
    <div>
      <h1>Schema Dreama</h1>
      <span><InputButton /></span>
      <div> <PastProjects /> </div>
      <div>SchemaMaker</div>
    </div>
  );
}

export default App;
