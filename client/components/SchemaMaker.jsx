import React from 'react';
import SchemaRow from './SchemaRow.jsx';

const SchemaMaker = ({ kvpArr, schemaFunc }) => (
  <div id="schemaMaker">
    Schema
    {kvpArr.map((ele, index) => (
      <SchemaRow
        schemaObj={ele}
        key={index}
        rowNum={index}
        updateKvpSchema={schemaFunc.updateKvpSchema}
      />
    ))}
    <button onClick={schemaFunc.addRow}>+</button>
  </div>
);

export default SchemaMaker;
