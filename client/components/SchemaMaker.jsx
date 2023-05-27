import React from 'react';
import SchemaRow from './SchemaRow.jsx';

const SchemaMaker = ({ kvpArr, updateKvpSchema }) => (
  <div>
    Schema
    {kvpArr.map((ele, index) => (
      <SchemaRow
        schemaObj={ele}
        key={index}
        rowNum={index}
        updateKvpSchema={updateKvpSchema}
      />
    ))}
  </div>
);

export default SchemaMaker;
