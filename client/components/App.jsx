import React, { Component, useState } from 'react';

function App() {
  //State for Key-Value Pairs
  const [kvpArr, setKvp] = useState([{ name: '', value: 'String' }]);
  //State for Past Projects

  //functions to drill down

  return (
    <div>
      <h1>Schema Dreama</h1>
      <div>InputButton</div>
      <div>PastProjects</div>
      <div>SchemaMaker</div>
    </div>
  );
}

export default App;
