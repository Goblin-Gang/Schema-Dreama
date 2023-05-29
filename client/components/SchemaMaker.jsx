import React from 'react';
import SchemaRow from './SchemaRow.jsx';
import SchemaDisplay from './SchemaDisplay.jsx';

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
    <div id="schemaExporters">
      <button onClick={schemaFunc.saveSchema}>SAVE</button>
      <button onClick={schemaFunc.deleteSchema}>DELETE</button>
    </div>
    <SchemaDisplay kvpArr={kvpArr} />
  </div>
);

export default SchemaMaker;
