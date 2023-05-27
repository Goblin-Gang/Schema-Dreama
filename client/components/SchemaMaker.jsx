import React from 'react';
import SchemaRow from './SchemaRow.jsx';

const SchemaMaker = ({ kvpArr }) => (
  <div>
    Schema
    {kvpArr.map((ele, index) => (
      <SchemaRow schemaObj={ele} key={index} rowNum={index} />
    ))}
  </div>
);

export default SchemaMaker;
